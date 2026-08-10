import { LAYOUT_SPACE, LAYOUT_STYLE } from "./main.js";
import { getAvailableCharImages, preloadAndDecodeImage } from "./main.js";

/**
 * 画布上下文封装，维护当前绘制坐标Y（自上而下流式布局）
 */
class CanvasLayoutPainter {
  constructor(canvas, width, bgColor) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.baseWidth = width;
    this.y = LAYOUT_SPACE.BODY_PADDING; // 初始Y坐标 = body上padding
    this.bgColor = bgColor;
    this.ctx.textBaseline = "top";
    // 先填充背景
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // 动态调整画布高度（超长图模式）
  resizeCanvas(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0,0,w,h);
  }

  // 绘制圆角矩形（卡片背景+边框）
  drawRoundRect(x, y, w, h, radius, fill, stroke, strokeWidth) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if(fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if(stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeWidth;
      ctx.stroke();
    }
  }

  // 绘制文字封装
  drawText(text, x, y, size, color, font = "sans-serif") {
    this.ctx.font = `${size}px ${font}`;
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, x, y);
  }

  // 居中文字
  drawTextCenter(text, centerX, y, size, color, font = "sans-serif") {
    this.ctx.font = `${size}px ${font}`;
    const w = this.ctx.measureText(text).width;
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, centerX - w/2, y);
  }

  // 绘制图片（带圆角裁剪）
  async drawImageRound(img, x, y, w, h, radius) {
    const ctx = this.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, x, y, w, h);
    ctx.restore();
  }

  // 获取当前y，向下移动一段距离
  shiftY(px) {
    this.y += px;
  }
}

/**
 * 主渲染入口
 * @param {number} targetWidth 画布宽度
 * @param {boolean} isLongMode 是否无限长图模式
 * @param {Object} appData 完整应用数据
 * @param {Array} gameTemplateList 游戏模板
 * @returns {Promise<Blob>}
 */
export async function renderExportCanvas(targetWidth, isLongMode, appData, gameTemplateList) {
  const {exportColor, baseInfo, gameList} = appData;
  const WRAP_MAX_W = 1200;
  const wrapLeftOffset = Math.max(LAYOUT_SPACE.BODY_PADDING, (targetWidth - WRAP_MAX_W) / 2);
  const wrapX = wrapLeftOffset;
  const wrapW = Math.min(WRAP_MAX_W, targetWidth - LAYOUT_SPACE.BODY_PADDING * 2);

  // 初始预估高度，长图模式后续可动态扩容
  const initHeight = isLongMode ? 8000 : 1440;
  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = initHeight;

  const painter = new CanvasLayoutPainter(canvas, targetWidth, exportColor.bg);

  // ========== 1. 绘制页面标题 site-title ==========
  painter.drawTextCenter("Otome FavList", targetWidth / 2, painter.y, 42, exportColor.title);
  painter.shiftY(LAYOUT_SPACE.SITE_TITLE_MT + 42);
  painter.shiftY(LAYOUT_SPACE.SITE_TITLE_MB);

  // ========== 2. 绘制基础信息卡片 big-card ==========
  const cardTop = painter.y;
  const cardX = wrapX;
  const cardW = wrapW;
  // 先预估内容高度，实际项目可以逐行计算
  const baseLines = [];
  if(baseInfo.nick) baseLines.push(`昵称：${baseInfo.nick}`);
  if(baseInfo.count) baseLines.push(`游玩总数：${baseInfo.count}`);
  if(baseInfo.story) baseLines.push(`入坑时间：${baseInfo.story}`);
  if(baseInfo.firstgame) baseLines.push(`入坑作品：${baseInfo.firstgame}`);
  let contentH = 24; // h2高度占位
  contentH += LAYOUT_SPACE.BIG_CARD_H2_MB;
  contentH += baseLines.length * 26;
  const cardH = LAYOUT_SPACE.BIG_CARD_PADDING * 2 + contentH;
  painter.drawRoundRect(cardX, cardTop, cardW, cardH, LAYOUT_STYLE.BIG_CARD_RADIUS, "#fff", exportColor.border, LAYOUT_STYLE.BIG_CARD_BORDER_WIDTH);
  // 标题h2
  const h2X = cardX + LAYOUT_SPACE.BIG_CARD_PADDING;
  let textY = cardTop + LAYOUT_SPACE.BIG_CARD_PADDING;
  painter.drawText("基础信息", h2X, textY, 24, exportColor.subTitle);
  textY += 24 + LAYOUT_SPACE.BIG_CARD_H2_MB;
  // 基础信息行
  baseLines.forEach(line => {
    painter.drawText(line, h2X, textY, 16, "#333");
    textY += 26;
  });
  painter.shiftY(cardH);
  painter.shiftY(LAYOUT_SPACE.WRAP_GAP);

  // ========== 3. 循环绘制每一个已添加游戏卡片 ==========
  for(const gameItem of gameList) {
    const gameInfo = gameTemplateList.find(g => g.id === gameItem.gameId);
    if(!gameInfo) continue;
    // 读取角色、CP数据（复用原有过滤函数）
    const globalHide = appData.globalHideChar;
    const globalFD = appData.globalFD;
    const localHide = gameItem.localHideChar;
    const localFD = gameItem.localFD;

    // 渲染选中角色素材
    const charImages = [];
    gameItem.selectChars.forEach(cid=>{
      const char = gameInfo.charList.find(c=>c.id === cid);
      if(!char) return;
      const avail = getAvailableCharImages(char, globalHide, globalFD, localHide, localFD);
      let allSrc = [];
      avail.forEach(u=>allSrc.push(...u.srcList));
      const stored = gameItem.selectCharItems.find(s=>s.charId === cid);
      const idx = Number(stored?.imgIndex ?? 0);
      if(allSrc[idx]) charImages.push(allSrc[idx]);
    });

    // CP素材逻辑同理
    const cpData = gameItem.cpList;

    // --- 绘制游戏卡片容器
    const gameCardTop = painter.y;
    const gameCardX = wrapX;
    const gameCardW = wrapW;
    // 【重点】你需要实现：根据角色数量、CP数量精确计算卡片整体高度
    // 下面为占位框架，高度计算逻辑自行补齐
    const gameCardInnerTop = gameCardTop + LAYOUT_SPACE.ADDED_GAME_CARD_PADDING;
    let innerY = gameCardInnerTop;

    // 卡片背景
    painter.drawRoundRect(gameCardX, gameCardTop, gameCardW, 600, LAYOUT_STYLE.GAME_CARD_RADIUS, "#fff", exportColor.border, 1);
    // 游戏名称
    painter.drawText(gameInfo.name, gameCardX + LAYOUT_SPACE.ADDED_GAME_CARD_PADDING, innerY, 22, exportColor.gameName);
    innerY += 26 + LAYOUT_SPACE.GAME_CARD_HEAD_MB;

    // 绘制Character标题 + 角色卡片行
    painter.drawText("Character", gameCardX + LAYOUT_SPACE.ADDED_GAME_CARD_PADDING, innerY, 18, exportColor.gameName);
    innerY += 24;
    // 循环绘制角色立绘卡片（CHAR_CARD_W=120，固定尺寸，gap=14）
    let cardXPos = gameCardX + LAYOUT_SPACE.ADDED_GAME_CARD_PADDING;
    for(const src of charImages) {
      try {
        const img = await preloadAndDecodeImage(src);
        const imgBoxH = LAYOUT_SPACE.CHAR_CARD_W;
        const imgY = innerY + LAYOUT_SPACE.CHAR_CARD_INNER_PADDING;
        painter.drawRoundRect(cardXPos, innerY, LAYOUT_SPACE.CHAR_CARD_W, LAYOUT_SPACE.CHAR_CARD_MIN_H, LAYOUT_STYLE.CHAR_CARD_RADIUS, "#fff", "#eee", 1);
        painter.drawImageRound(img, cardXPos + LAYOUT_SPACE.CHAR_CARD_INNER_PADDING, imgY, LAYOUT_SPACE.CHAR_CARD_W - LAYOUT_SPACE.CHAR_CARD_INNER_PADDING*2, imgBoxH, LAYOUT_STYLE.CHAR_IMG_RADIUS);
      }catch(e){}
      cardXPos += LAYOUT_SPACE.CHAR_CARD_W + LAYOUT_SPACE.CHAR_ROW_GAP;
      // 换行判断：超出wrap宽度自动换行（逻辑补充）
    }

    // CP区域绘制...（结构同上）

    // 下移卡片高度 + 卡片之间外边距
    painter.shiftY(600);
    painter.shiftY(LAYOUT_SPACE.ADDED_GAME_CARD_MB);
  }

  // ========== 全部绘制完成，转为Blob ==========
  return new Promise((resolve)=>{
    canvas.toBlob(resolve, "image/png");
  });
}
