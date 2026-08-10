// ===================== export-canvas-render.js =====================
// 纯 Canvas 绘制导出图，数据驱动，无 DOM 依赖
import {
  LAYOUT_SPACE,
  LAYOUT_STYLE,
  getAvailableCharImages,
  preloadAndDecodeImage
} from './main.js';

// 最大并发图片加载数量，避免浏览器请求风暴
const MAX_IMAGE_CONCURRENCY = 8;
//【优化】圆角离屏画布缓存：key = `${url}||${radius}`
const roundImageCache = new Map();

// ============================ 工具函数 ============================

/**
 * 在 Canvas 上绘制自动换行文本
 * @param {CanvasRenderingContext2D} ctx
 * @param {string} text - 要绘制的文本
 * @param {number} x - 起始 x 坐标
 * @param {number} y - 起始 y 坐标
 * @param {number} maxWidth - 最大宽度（超过则换行）
 * @param {number} lineHeight - 行高
 * @param {number} fontSize - 字号
 * @param {string} color - 颜色
 * @param {string} font - 字体名称
 * @returns {number} 绘制占用的总高度
 */
export function wrapText(ctx, text, x, y, maxWidth, lineHeight, fontSize, color, font = 'sans-serif') {
  if (!text) return 0;
  ctx.font = `${fontSize}px ${font}`;
  ctx.fillStyle = color;
  const words = text.split('');
  let line = '';
  let totalHeight = 0;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line, x, y + totalHeight);
      line = words[n];
      totalHeight += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, y + totalHeight);
    totalHeight += lineHeight;
  }
  return totalHeight;
}

/**
 * 测量文本多行占用的总高度
 */
export function measureWrappedHeight(ctx, text, maxWidth, lineHeight, fontSize) {
  if (!text) return 0;
  ctx.font = `${fontSize}px sans-serif`;
  let line = '';
  let lines = 1;
  for (let n = 0; n < text.length; n++) {
    const testLine = line + text[n];
    if (ctx.measureText(testLine).width > maxWidth && n > 0) {
      lines++;
      line = text[n];
    } else {
      line = testLine;
    }
  }
  return lines * lineHeight;
}

/**
 * 【重构】离屏画布生成圆角图片（增加缓存，同图同圆角只裁切一次）
 * @param {HTMLImageElement} img 原图
 * @param {string} srcUrl 图片资源地址（用于缓存key）
 * @param {number} w 目标宽
 * @param {number} h 目标高
 * @param {number} radius 圆角半径
 * @returns {HTMLCanvasElement} 圆角离屏画布
 */
function createRoundImageCanvas(img, srcUrl, w, h, radius) {
  //【优化】构建缓存key，区分不同url+圆角
  const cacheKey = `${srcUrl}||${radius}`;
  if (roundImageCache.has(cacheKey)) {
    return roundImageCache.get(cacheKey);
  }

  const offCanvas = document.createElement('canvas');
  offCanvas.width = w;
  offCanvas.height = h;
  const offCtx = offCanvas.getContext('2d');

  offCtx.beginPath();
  offCtx.moveTo(radius, 0);
  offCtx.lineTo(w - radius, 0);
  offCtx.quadraticCurveTo(w, 0, w, radius);
  offCtx.lineTo(w, h - radius);
  offCtx.quadraticCurveTo(w, h, w - radius, h);
  offCtx.lineTo(radius, h);
  offCtx.quadraticCurveTo(0, h, 0, h - radius);
  offCtx.lineTo(0, radius);
  offCtx.quadraticCurveTo(0, 0, radius, 0);
  offCtx.closePath();
  offCtx.clip();
  offCtx.drawImage(img, 0, 0, w, h);

  //【优化】存入缓存
  roundImageCache.set(cacheKey, offCanvas);
  return offCanvas;
}

/**
 * 有限并发加载器
 * @param {Array} urlList
 * @param {number} limit 最大并发数
 * @returns {Promise<Map<string, HTMLImageElement|null>>}
 */
async function loadImagesWithLimit(urlList, limit) {
  const uniqueUrls = [...new Set(urlList)];
  const resultMap = new Map();
  let index = 0;

  async function worker() {
    while (index < uniqueUrls.length) {
      const url = uniqueUrls[index++];
      try {
        const img = await preloadAndDecodeImage(url);
        resultMap.set(url, img);
      } catch (err) {
        console.warn('图片加载失败：', url, err);
        resultMap.set(url, null);
      }
    }
  }

  const workers = Array.from({ length: limit }, worker);
  await Promise.all(workers);
  return resultMap;
}

// ============================ Canvas 布局绘制器 ============================

export class CanvasLayoutPainter {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {number} width - 画布宽度
   * @param {string} bgColor - 背景色
   */
  constructor(canvas, width, bgColor) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.baseWidth = width;
    this.y = LAYOUT_SPACE.BODY_PADDING; // 初始 Y 坐标（body 上边距）
    this.bgColor = bgColor;
    this.ctx.textBaseline = 'top';
    // 填充背景
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /** 调整画布高度（长图模式） */
  resizeCanvas(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, w, h);
  }

  /** 绘制圆角矩形（卡片背景+边框） */
  drawRoundRect(x, y, w, h, radius, fill, stroke, strokeWidth = 1) {
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
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeWidth;
      ctx.stroke();
    }
  }

  /** 绘制文本（单行） */
  drawText(text, x, y, size, color, font = 'sans-serif') {
    this.ctx.font = `${size}px ${font}`;
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, x, y);
  }

  /** 居中绘制文本 */
  drawTextCenter(text, centerX, y, size, color, font = 'sans-serif') {
    this.ctx.font = `${size}px ${font}`;
    const w = this.ctx.measureText(text).width;
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, centerX - w / 2, y);
  }

  /**
   * 绘制圆角图片：直接传入预生成的圆角离屏画布
   * @param {HTMLCanvasElement} roundCanvas 预裁切好圆角的离屏画布
   * @param {number} x
   * @param {number} y
   */
  drawImageRound(roundCanvas, x, y) {
    this.ctx.drawImage(roundCanvas, x, y);
  }

  /**
   * 绘制五颗爱心评分（从①合并）
   * @param {number} x - 起始X
   * @param {number} y - 起始Y
   * @param {number} rate - 评分值 (0-5)
   * @param {number} heartSize - 爱心字号
   * @param {number} gap - 爱心间距
   * @param {string} activeColor - 点亮颜色
   * @param {string} grayColor - 未点亮颜色
   */
  drawHeartRate(x, y, rate, heartSize = 26, gap = 6, activeColor, grayColor) {
    const ctx = this.ctx;
    ctx.font = `${heartSize}px sans-serif`;
    ctx.textBaseline = 'top';
    const heartChar = '♥';
    let currentX = x;
    for (let i = 1; i <= 5; i++) {
      ctx.fillStyle = i <= rate ? activeColor : grayColor;
      ctx.fillText(heartChar, currentX, y);
      currentX += heartSize + gap;
    }
  }

  /** 当前 Y 向下移动 */
  shiftY(px) {
    this.y += px;
  }

  /** 获取当前 Y 值 */
  getY() {
    return this.y;
  }
}

// ============================ 高度计算辅助 ============================

/**
 * 计算角色卡片的高度（动态适应名称行数）
 */
function calcCharCardHeight(ctx, charName, cardWidth, fontSize = 14) {
  const innerPad = LAYOUT_SPACE.CHAR_CARD_INNER_PADDING;
  const imgSize = cardWidth - innerPad * 2;
  const nameMaxWidth = cardWidth - innerPad * 2;
  const nameHeight = measureWrappedHeight(ctx, charName, nameMaxWidth, fontSize * 1.4, fontSize);
  const totalHeight = innerPad * 2 + imgSize + LAYOUT_SPACE.CHAR_IMG_BOX_MB + nameHeight + innerPad;
  return Math.max(totalHeight, LAYOUT_SPACE.CHAR_CARD_MIN_H);
}

/**
 * 计算一排可以放置多少个角色卡片
 */
function calcCardsPerRow(cardWidth, gap, containerWidth) {
  return Math.max(1, Math.floor((containerWidth + gap) / (cardWidth + gap)));
}

/**
 * 计算角色区域的总高度
 */
function calcCharAreaHeight(ctx, charItems, containerWidth, cardWidth, gap, fontSize, hasTitle, titleHeight, titleMarginBottom) {
  if (!charItems || charItems.length === 0) return { height: 0, rows: 0 };
  const cardsPerRow = calcCardsPerRow(cardWidth, gap, containerWidth);
  const rows = Math.ceil(charItems.length / cardsPerRow);
  let maxCardHeight = LAYOUT_SPACE.CHAR_CARD_MIN_H;
  charItems.forEach(item => {
    const h = calcCharCardHeight(ctx, item.name, cardWidth, fontSize);
    if (h > maxCardHeight) maxCardHeight = h;
  });
  let height = rows * maxCardHeight + (rows - 1) * gap;
  if (hasTitle) {
    height += titleHeight + titleMarginBottom;
  }
  return { height, rows, maxCardHeight };
}

// ============================ 主渲染函数 ============================

/**
 * 渲染导出图片
 * @param {number} targetWidth - 画布宽度（如 810, 1080）
 * @param {boolean} isLongMode - 是否长图模式
 * @param {Object} appData - 全局数据
 * @param {Array} gameTemplateList - 游戏模板列表
 * @returns {Promise}
 */
export async function renderExportCanvas(targetWidth, isLongMode, appData, gameTemplateList) {
  const { exportColor, baseInfo, gameList } = appData;

  //【优化】每次渲染前清空圆角缓存，避免多次调用renderExportCanvas内存持续堆积
  roundImageCache.clear();

  // 计算内容区域尺寸
  const BODY_PAD = LAYOUT_SPACE.BODY_PADDING;
  const WRAP_MAX_W = 1200;
  const wrapW = Math.min(WRAP_MAX_W, targetWidth - BODY_PAD * 2);
  const wrapX = Math.max(BODY_PAD, (targetWidth - wrapW) / 2);

  // 创建画布（初始高度足够大，长图模式后续动态扩容）
  const initHeight = isLongMode ? 8000 : 3000;
  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = initHeight;
  const painter = new CanvasLayoutPainter(canvas, targetWidth, exportColor.bg);
  const ctx = painter.ctx;

  // ======== 第一步：遍历所有游戏，收集全部需要加载的图片地址 ========
  const allImageSrcList = [];
  const renderDataList = [];

  for (const gameItem of gameList) {
    const gameInfo = gameTemplateList.find(g => g.id === gameItem.gameId);
    if (!gameInfo) continue;

    const globalHide = appData.globalHideChar;
    const globalFD = appData.globalFD;
    const localHide = gameItem.localHideChar;
    const localFD = gameItem.localFD;

    // Character 角色
    const charItems = [];
    if (Array.isArray(gameItem.selectChars)) {
      for (const cid of gameItem.selectChars) {
        const char = gameInfo.charList?.find(c => c.id === cid);
        if (!char) continue;
        const avail = getAvailableCharImages(char, globalHide, globalFD, localHide, localFD);
        let allSrc = [];
        avail.forEach(u => allSrc.push(...u.srcList));
        if (allSrc.length === 0) continue;
        const stored = gameItem.selectCharItems?.find(s => s.charId === cid);
        const idx = Number(stored?.imgIndex ?? 0);
        const src = allSrc[idx] || allSrc[0];
        charItems.push({ id: char.id, name: char.name, src });
        allImageSrcList.push(src);
      }
    }

    // CP 数据
    const cpItems = [];
    if (Array.isArray(gameItem.cpList)) {
      for (const cp of gameItem.cpList) {
        const fChar = gameInfo.charList?.find(c => c.id === cp.femaleId);
        if (!fChar) continue;
        const fAvail = getAvailableCharImages(fChar, globalHide, globalFD, localHide, localFD);
        let fAllSrc = [];
        fAvail.forEach(u => fAllSrc.push(...u.srcList));
        if (fAllSrc.length === 0) continue;
        const fIdx = Number(cp.femaleImgIndex ?? 0);
        const fSrc = fAllSrc[fIdx] || fAllSrc[0];

        const maleItems = [];
        if (Array.isArray(cp.maleItems)) {
          for (const mi of cp.maleItems) {
            const mChar = gameInfo.charList?.find(c => c.id === mi.charId);
            if (!mChar) continue;
            const mAvail = getAvailableCharImages(mChar, globalHide, globalFD, localHide, localFD);
            let mAllSrc = [];
            mAvail.forEach(u => mAllSrc.push(...u.srcList));
            if (mAllSrc.length === 0) continue;
            const mIdx = Number(mi.imgIndex ?? 0);
            const mSrc = mAllSrc[mIdx] || mAllSrc[0];
            maleItems.push({ id: mChar.id, name: mChar.name, src: mSrc });
            allImageSrcList.push(mSrc);
          }
        }
        if (maleItems.length > 0) {
          cpItems.push({
            femaleName: fChar.name,
            femaleSrc: fSrc,
            maleItems: maleItems
          });
          allImageSrcList.push(fSrc);
        }
      }
    }

    if (charItems.length === 0 && cpItems.length === 0) continue;
    renderDataList.push({ gameInfo, charItems, cpItems, gameItem });
  }

  // ======== 并发加载所有图片（有限并发） ========
  const imageCache = await loadImagesWithLimit(allImageSrcList, MAX_IMAGE_CONCURRENCY);

  // ======== 1. 绘制标题 ========
  const titleY = painter.y;
  painter.drawTextCenter('Otome FavList', targetWidth / 2, titleY, 42, exportColor.title);
  painter.shiftY(42 + LAYOUT_SPACE.SITE_TITLE_MT + LAYOUT_SPACE.SITE_TITLE_MB);

  // ======== 2. 基础信息卡片 ========
  const baseLines = [];
  if (baseInfo.nick?.trim()) baseLines.push(`昵称：${baseInfo.nick.trim()}`);
  if (baseInfo.count?.trim()) baseLines.push(`游玩总数：${baseInfo.count.trim()}`);
  if (baseInfo.story?.trim()) baseLines.push(`入坑时间：${baseInfo.story.trim()}`);
  if (baseInfo.firstgame?.trim()) baseLines.push(`入坑作品：${baseInfo.firstgame.trim()}`);

  if (baseLines.length > 0) {
    const cardTop = painter.y;
    const cardX = wrapX;
    const cardW = wrapW;
    const innerPad = LAYOUT_SPACE.BIG_CARD_PADDING;
    const h2FontSize = 24;
    const lineFontSize = 16;
    const lineHeight = 26;
    const maxLineWidth = cardW - innerPad * 2;

    let contentHeight = 0;
    baseLines.forEach(line => {
      const h = measureWrappedHeight(ctx, line, maxLineWidth, lineHeight, lineFontSize);
      contentHeight += h;
    });

    const h2Height = h2FontSize + LAYOUT_SPACE.BIG_CARD_H2_MB;
    const cardH = innerPad * 2 + h2Height + contentHeight;

    painter.drawRoundRect(
      cardX, cardTop, cardW, cardH,
      LAYOUT_STYLE.BIG_CARD_RADIUS,
      '#ffffff',
      exportColor.border,
      LAYOUT_STYLE.BIG_CARD_BORDER_WIDTH
    );

    let y = cardTop + innerPad;
    painter.drawText('基础信息', cardX + innerPad, y, h2FontSize, exportColor.subTitle);
    y += h2FontSize + LAYOUT_SPACE.BIG_CARD_H2_MB;

    baseLines.forEach(line => {
      const usedH = wrapText(ctx, line, cardX + innerPad, y, maxLineWidth, lineHeight, lineFontSize, exportColor.text);
      y += usedH;
    });

    painter.shiftY(cardH);
    painter.shiftY(LAYOUT_SPACE.WRAP_GAP);
  }

  // ======== 3. 遍历渲染游戏卡片 ========
  for (const data of renderDataList) {
    const { gameInfo, charItems, cpItems, gameItem } = data;

    const cardInnerPad = LAYOUT_SPACE.ADDED_GAME_CARD_PADDING;
    const gameCardW = wrapW;
    const cardX = wrapX;
    let cardTop = painter.y;

    // 1) 游戏名称高度
    const nameFontSize = 22;
    const nameHeight = nameFontSize + LAYOUT_SPACE.GAME_CARD_HEAD_MB;

    // 2) 爱心评分区域高度
    const HEART_SIZE = 26;
    const HEART_GAP = 6;
    const HEART_AREA_HEIGHT = HEART_SIZE + 12;

    // 3) Character 区域
    let charAreaHeight = 0;
    let charCardHeight = LAYOUT_SPACE.CHAR_CARD_MIN_H;
    if (charItems.length > 0) {
      const titleH = 18 + 4;
      const titleMb = 8;
      const area = calcCharAreaHeight(
        ctx,
        charItems,
        gameCardW - cardInnerPad * 2,
        LAYOUT_SPACE.CHAR_CARD_W,
        LAYOUT_SPACE.CHAR_ROW_GAP,
        14,
        true,
        titleH,
        titleMb
      );
      charAreaHeight = area.height;
      charCardHeight = area.maxCardHeight;
    }

    // 4) Couple 区域
    let cpAreaHeight = 0;
    if (cpItems.length > 0) {
      const titleH = 18 + 8;
      let totalCpHeight = titleH;
      const femaleCardWidth = LAYOUT_SPACE.CHAR_CARD_W;
      const maleCardWidth = LAYOUT_SPACE.CHAR_CARD_W;
      const maleGap = LAYOUT_SPACE.CP_MALE_GAP;
      const colGap = LAYOUT_SPACE.CP_COLUMN_GAP;
      const maleContainerWidth = (gameCardW - cardInnerPad * 2) * 0.75 - colGap;

      for (const cp of cpItems) {
        const fHeight = calcCharCardHeight(ctx, cp.femaleName, femaleCardWidth, 14);
        let maxMaleH = LAYOUT_SPACE.CHAR_CARD_MIN_H;
        cp.maleItems.forEach(m => {
          const h = calcCharCardHeight(ctx, m.name, maleCardWidth, 14);
          if (h > maxMaleH) maxMaleH = h;
        });
        const perRow = calcCardsPerRow(maleCardWidth, maleGap, maleContainerWidth);
        const maleRows = Math.ceil(cp.maleItems.length / perRow);
        const maleAreaH = maleRows * maxMaleH + (maleRows - 1) * maleGap;
        const rowH = Math.max(fHeight, maleAreaH) + (LAYOUT_SPACE.CP_ROW_MARGIN || 16);
        totalCpHeight += rowH;
      }
      cpAreaHeight = totalCpHeight;
    }

    // 5) 卡片总高度
    const totalCardH = cardInnerPad * 2 + nameHeight + HEART_AREA_HEIGHT + charAreaHeight + cpAreaHeight;
    const cardH = totalCardH;

    painter.drawRoundRect(
      cardX, cardTop, gameCardW, cardH,
      LAYOUT_STYLE.GAME_CARD_RADIUS,
      '#ffffff',
      exportColor.border,
      1
    );

    let drawY = cardTop + cardInnerPad;

    // 游戏名称
    painter.drawText(gameInfo.name, cardX + cardInnerPad, drawY, nameFontSize, exportColor.gameName);
    drawY += nameFontSize + LAYOUT_SPACE.GAME_CARD_HEAD_MB;

    // 爱心评分
    painter.drawHeartRate(
      cardX + cardInnerPad, drawY,
      gameItem.loveRate || 0,
      HEART_SIZE, HEART_GAP,
      '#e895a8', '#cccccc'
    );
    drawY += HEART_AREA_HEIGHT;

    // ---- Character ----
    if (charItems.length > 0) {
      painter.drawText('Character', cardX + cardInnerPad, drawY, 18, exportColor.gameName);
      drawY += 18 + 8;

      const cardW = LAYOUT_SPACE.CHAR_CARD_W;
      const gap = LAYOUT_SPACE.CHAR_ROW_GAP;
      const innerPad = LAYOUT_SPACE.CHAR_CARD_INNER_PADDING;
      const imgSize = cardW - innerPad * 2;
      const maxRowW = gameCardW - cardInnerPad * 2;
      const perRow = calcCardsPerRow(cardW, gap, maxRowW);
      let xPos = cardX + cardInnerPad;
      let yPos = drawY;

      for (let i = 0; i < charItems.length; i++) {
        const item = charItems[i];
        const img = imageCache.get(item.src);
        painter.drawRoundRect(xPos, yPos, cardW, charCardHeight, LAYOUT_STYLE.CHAR_CARD_RADIUS, '#ffffff', '#eee', 1);
        if (img) {
          const imgY = yPos + innerPad;
          const roundCanvas = createRoundImageCanvas(img, item.src, imgSize, imgSize, LAYOUT_STYLE.CHAR_IMG_RADIUS);
          painter.drawImageRound(roundCanvas, xPos + innerPad, imgY);
        }
        const nameY = yPos + innerPad + imgSize + LAYOUT_SPACE.CHAR_IMG_BOX_MB;
        wrapText(ctx, item.name, xPos + innerPad, nameY, cardW - innerPad * 2, 16, 14, '#222');

        xPos += cardW + gap;
        if ((i + 1) % perRow === 0 && i < charItems.length - 1) {
          xPos = cardX + cardInnerPad;
          yPos += charCardHeight + gap;
        }
      }
      const rows = Math.ceil(charItems.length / perRow);
      drawY = yPos + charCardHeight;
    }

    // ---- Couple ----
    if (cpItems.length > 0) {
      painter.drawText('Couple', cardX + cardInnerPad, drawY, 18, exportColor.gameName);
      drawY += 18 + 8;

      const femaleCardW = LAYOUT_SPACE.CHAR_CARD_W;
      const maleCardW = LAYOUT_SPACE.CHAR_CARD_W;
      const maleGap = LAYOUT_SPACE.CP_MALE_GAP;
      const colGap = LAYOUT_SPACE.CP_COLUMN_GAP;
      const innerPad = LAYOUT_SPACE.CHAR_CARD_INNER_PADDING;
      const imgSize = femaleCardW - innerPad * 2;

      for (const cp of cpItems) {
        const fHeight = calcCharCardHeight(ctx, cp.femaleName, femaleCardW, 14);
        const maleContainerW = (gameCardW - cardInnerPad * 2) * 0.75 - colGap;
        const perRow = calcCardsPerRow(maleCardW, maleGap, maleContainerW);
        const maleRows = Math.ceil(cp.maleItems.length / perRow);
        let maxMaleH = LAYOUT_SPACE.CHAR_CARD_MIN_H;
        cp.maleItems.forEach(m => {
          const h = calcCharCardHeight(ctx, m.name, maleCardW, 14);
          if (h > maxMaleH) maxMaleH = h;
        });
        const rowH = Math.max(fHeight, maxMaleH);

        // 女主卡片
        const femaleX = cardX + cardInnerPad;
        const femaleY = drawY;
        painter.drawRoundRect(femaleX, femaleY, femaleCardW, rowH, LAYOUT_STYLE.CHAR_CARD_RADIUS, '#ffffff', '#eee', 1);
        const femaleImg = imageCache.get(cp.femaleSrc);
        if (femaleImg) {
          const imgY = femaleY + innerPad;
          const roundCanvas = createRoundImageCanvas(femaleImg, cp.femaleSrc, imgSize, imgSize, LAYOUT_STYLE.CHAR_IMG_RADIUS);
          painter.drawImageRound(roundCanvas, femaleX + innerPad, imgY);
        }
        const nameY = femaleY + innerPad + imgSize + LAYOUT_SPACE.CHAR_IMG_BOX_MB;
        wrapText(ctx, cp.femaleName, femaleX + innerPad, nameY, femaleCardW - innerPad * 2, 16, 14, '#222');

        // 男主卡片
        const maleStartX = femaleX + femaleCardW + colGap;
        let mx = maleStartX;
        let my = drawY;
        for (let i = 0; i < cp.maleItems.length; i++) {
          const m = cp.maleItems[i];
          const mImg = imageCache.get(m.src);
          painter.drawRoundRect(mx, my, maleCardW, rowH, LAYOUT_STYLE.CHAR_CARD_RADIUS, '#ffffff', '#eee', 1);
          if (mImg) {
            const imgY = my + innerPad;
            const roundCanvas = createRoundImageCanvas(mImg, m.src, imgSize, imgSize, LAYOUT_STYLE.CHAR_IMG_RADIUS);
            painter.drawImageRound(roundCanvas, mx + innerPad, imgY);
          }
          // 修复：nameY2 计算错误，去掉多余的 + imgSize
          const nameY2 = my + innerPad + imgSize + LAYOUT_SPACE.CHAR_IMG_BOX_MB;
          wrapText(ctx, m.name, mx + innerPad, nameY2, maleCardW - innerPad * 2, 16, 14, '#222');

          mx += maleCardW + maleGap;
          if ((i + 1) % perRow === 0 && i < cp.maleItems.length - 1) {
            mx = maleStartX;
            my += rowH + maleGap;
          }
        }
        // 修正 drawY 更新
        drawY = my + rowH;
        drawY += 12;
      }
    }

    painter.shiftY(cardH);
    painter.shiftY(LAYOUT_SPACE.ADDED_GAME_CARD_MB);

    // 长图动态扩容
    if (isLongMode) {
      const safeBuffer = 1500;
      if (painter.y + safeBuffer > canvas.height) {
        const newH = canvas.height + 6000;
        painter.resizeCanvas(canvas.width, newH);
      }
    }
  }

  // ======== 最终调整画布高度（精确裁剪） ========
  const finalHeight = painter.y + LAYOUT_SPACE.BODY_PADDING;
  const finalCanvas = document.createElement('canvas');
  finalCanvas.width = targetWidth;
  finalCanvas.height = finalHeight;
  const finalCtx = finalCanvas.getContext('2d');
  finalCtx.fillStyle = exportColor.bg;
  finalCtx.fillRect(0, 0, targetWidth, finalHeight);
  finalCtx.drawImage(canvas, 0, 0);

  // 返回 Blob
  return new Promise((resolve) => {
    finalCanvas.toBlob(resolve, 'image/png');
  });
}
