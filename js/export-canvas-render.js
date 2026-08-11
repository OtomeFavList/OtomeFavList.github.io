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
//【优化】圆角离屏画布缓存：key = `${url}||${w}||${h}||${radius}`
const roundImageCache = new Map();

// ============================ 工具函数 ============================

/**
 * 在 Canvas 上绘制自动换行文本
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
 * 【修复】离屏画布生成圆角图片，缓存 key 包含宽高和圆角半径
 */
function createRoundImageCanvas(img, srcUrl, w, h, radius) {
  const cacheKey = `${srcUrl}||${w}||${h}||${radius}`;
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

  roundImageCache.set(cacheKey, offCanvas);
  return offCanvas;
}

/**
 * 有限并发加载器
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
  constructor(canvas, width, height, bgColor) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.canvas.width = width;
    this.canvas.height = height;
    this.baseWidth = width;
    this.y = LAYOUT_SPACE.BODY_PADDING;
    this.bgColor = bgColor;
    this.ctx.textBaseline = 'top';
    // 填充背景
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /** 重置 Y 坐标到起始位置（用于分页重绘） */
  resetY() {
    this.y = LAYOUT_SPACE.BODY_PADDING;
  }

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

  drawText(text, x, y, size, color, font = 'sans-serif') {
    this.ctx.font = `${size}px ${font}`;
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, x, y);
  }

  drawTextCenter(text, centerX, y, size, color, font = 'sans-serif') {
    this.ctx.font = `${size}px ${font}`;
    const w = this.ctx.measureText(text).width;
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, centerX - w / 2, y);
  }

  drawImageRound(roundCanvas, x, y) {
    this.ctx.drawImage(roundCanvas, x, y);
  }

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

  shiftY(px) {
    this.y += px;
  }

  getY() {
    return this.y;
  }
}

// ============================ 高度计算辅助 ============================

function calcCharCardHeight(ctx, charName, cardWidth, fontSize = 14) {
  const innerPad = LAYOUT_SPACE.CHAR_CARD_INNER_PADDING;
  const imgSize = cardWidth - innerPad * 2;
  const nameMaxWidth = cardWidth - innerPad * 2;
  const nameHeight = measureWrappedHeight(ctx, charName, nameMaxWidth, fontSize * 1.4, fontSize);
  const totalHeight = innerPad * 2 + imgSize + LAYOUT_SPACE.CHAR_IMG_BOX_MB + nameHeight + innerPad;
  return Math.max(totalHeight, LAYOUT_SPACE.CHAR_CARD_MIN_H);
}

function calcCardsPerRow(cardWidth, gap, containerWidth) {
  return Math.max(1, Math.floor((containerWidth + gap) / (cardWidth + gap)));
}

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

// ============================ 预计算高度（用于分页） ============================

/**
 * 计算头部区域高度（标题 + 基础信息卡片）
 */
function calcHeaderVirtualHeight(targetWidth, appData) {
  const { baseInfo } = appData;
  const virtualCanvas = document.createElement('canvas');
  const vCtx = virtualCanvas.getContext('2d');
  let cursorY = LAYOUT_SPACE.BODY_PADDING;

  const BODY_PAD = LAYOUT_SPACE.BODY_PADDING;
  const WRAP_MAX_W = 1200;
  const wrapW = Math.min(WRAP_MAX_W, targetWidth - BODY_PAD * 2);

  // 站点标题
  cursorY += 42 + LAYOUT_SPACE.SITE_TITLE_MT + LAYOUT_SPACE.SITE_TITLE_MB;

  // 基础信息卡片
  const baseLines = [];
  if (baseInfo.nick?.trim()) baseLines.push(`昵称：${baseInfo.nick.trim()}`);
  if (baseInfo.count?.trim()) baseLines.push(`游玩总数：${baseInfo.count.trim()}`);
  if (baseInfo.story?.trim()) baseLines.push(`入坑时间：${baseInfo.story.trim()}`);
  if (baseInfo.firstgame?.trim()) baseLines.push(`入坑作品：${baseInfo.firstgame.trim()}`);

  if (baseLines.length > 0) {
    const innerPad = LAYOUT_SPACE.BIG_CARD_PADDING;
    const h2FontSize = 24;
    const lineFontSize = 16;
    const lineHeight = 26;
    const maxLineWidth = wrapW - innerPad * 2;

    let contentHeight = 0;
    baseLines.forEach(line => {
      contentHeight += measureWrappedHeight(vCtx, line, maxLineWidth, lineHeight, lineFontSize);
    });
    const h2Height = h2FontSize + LAYOUT_SPACE.BIG_CARD_H2_MB;
    const cardH = innerPad * 2 + h2Height + contentHeight;
    cursorY += cardH;
    cursorY += LAYOUT_SPACE.WRAP_GAP;
  }

  return cursorY;
}

/**
 * 计算单个游戏卡片的内容高度（不包含卡片底部间距）
 */
function calcSingleGameBlockHeight(targetWidth, renderData) {
  const { gameInfo, charItems, cpItems } = renderData;
  const virtualCanvas = document.createElement('canvas');
  const vCtx = virtualCanvas.getContext('2d');

  const BODY_PAD = LAYOUT_SPACE.BODY_PADDING;
  const WRAP_MAX_W = 1200;
  const wrapW = Math.min(WRAP_MAX_W, targetWidth - BODY_PAD * 2);

  const cardInnerPad = LAYOUT_SPACE.ADDED_GAME_CARD_PADDING;
  const gameCardW = wrapW;

  // 游戏名称高度
  const nameFontSize = 22;
  const nameHeight = nameFontSize + LAYOUT_SPACE.GAME_CARD_HEAD_MB;

  // 爱心评分区域高度
  const HEART_AREA_HEIGHT = 26 + 12;

  // Character 区域
  let charAreaHeight = 0;
  if (charItems.length > 0) {
    const titleH = 18 + 4;
    const titleMb = 8;
    const area = calcCharAreaHeight(
      vCtx,
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
  }

  // Couple 区域
  let cpAreaHeight = 0;
  if (cpItems.length > 0) {
    const titleH = 18 + 8;
    let totalCpHeight = titleH;
    const femaleCardWidth = LAYOUT_SPACE.CHAR_CARD_W;
    const maleCardWidth = LAYOUT_SPACE.CHAR_CARD_W;
    const maleGap = LAYOUT_SPACE.CP_MALE_GAP;
    const colGap = LAYOUT_SPACE.CP_COLUMN_GAP;
    // 修复：男主可用宽度 = 总宽度 - 女主卡片宽度 - 间隙，不再乘以0.75
    const maleContainerWidth = (gameCardW - cardInnerPad * 2) - femaleCardWidth - colGap;

    for (const cp of cpItems) {
      const fHeight = calcCharCardHeight(vCtx, cp.femaleName, femaleCardWidth, 14);
      let maxMaleH = LAYOUT_SPACE.CHAR_CARD_MIN_H;
      cp.maleItems.forEach(m => {
        const h = calcCharCardHeight(vCtx, m.name, maleCardWidth, 14);
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

  const totalCardH = cardInnerPad * 2 + nameHeight + HEART_AREA_HEIGHT + charAreaHeight + cpAreaHeight;
  return totalCardH;
}

/**
 * 预计算所有区块高度（头部 + 每个游戏卡片）
 */
function preCalcLayoutHeight(targetWidth, appData, gameTemplateList, renderDataList) {
  const headerHeight = calcHeaderVirtualHeight(targetWidth, appData);
  const gameBlockHeights = renderDataList.map(data => calcSingleGameBlockHeight(targetWidth, data));
  return { headerHeight, gameBlockHeights };
}

/**
 * 根据高度信息执行分页切割
 * 规则：
 * 1. 第一页：固定包含头部 + 第0个游戏卡片（强制完整，不拆分）
 * 2. 从第二页开始，正常按高度填充卡片，不拆分单个卡片
 * 3. 每页渲染完成后自适应裁剪高度，无多余空白
 */
function splitPagesByHeight(headerHeight, gameBlockHeights, maxH) {
  const pages = [];
  let ptr = 0;
  const totalGame = gameBlockHeights.length;

  // ========== 第一页强制处理：头部 + 第0号游戏卡片（必须完整） ==========
  if (totalGame > 0) {
    const firstPage = {
      isFirstPage: true,
      gameIndexes: [0]
    };
    pages.push(firstPage);
    ptr = 1; // 下一页从第1个卡片开始
  }

  // ========== 处理剩余游戏卡片（第二页及以后，原有分页逻辑） ==========
  while (ptr < totalGame) {
    const page = {
      isFirstPage: false,
      gameIndexes: []
    };
    let usedH = 0; // 非首页没有头部高度

    while (ptr < totalGame) {
      const blockH = gameBlockHeights[ptr];
      const nextH = blockH + LAYOUT_SPACE.ADDED_GAME_CARD_MB;
      // 放不下则换页；放得下加入当前页
      if (usedH + nextH <= maxH) {
        usedH += nextH;
        page.gameIndexes.push(ptr);
        ptr++;
      } else {
        break;
      }
    }

    // 当前页无法放入任何卡片 → 强制放入一张（防止死循环）
    if (page.gameIndexes.length === 0 && ptr < totalGame) {
      page.gameIndexes.push(ptr);
      ptr++;
    }
    pages.push(page);
  }

  return pages;
}

// ============================ 绘制函数 ============================

/**
 * 绘制头部区块（标题 + 基础信息）
 */
async function drawHeaderBlock(painter, targetWidth, appData) {
  const { exportColor, baseInfo } = appData;

  const BODY_PAD = LAYOUT_SPACE.BODY_PADDING;
  const WRAP_MAX_W = 1200;
  const wrapW = Math.min(WRAP_MAX_W, targetWidth - BODY_PAD * 2);
  const wrapX = Math.max(BODY_PAD, (targetWidth - wrapW) / 2);

  // 标题
  painter.drawTextCenter('Otome FavList', targetWidth / 2, painter.y, 42, exportColor.title);
  painter.shiftY(42 + LAYOUT_SPACE.SITE_TITLE_MT + LAYOUT_SPACE.SITE_TITLE_MB);

  // 基础信息卡片
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
      contentHeight += measureWrappedHeight(painter.ctx, line, maxLineWidth, lineHeight, lineFontSize);
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
      const usedH = wrapText(painter.ctx, line, cardX + innerPad, y, maxLineWidth, lineHeight, lineFontSize, exportColor.text);
      y += usedH;
    });

    painter.shiftY(cardH);
    painter.shiftY(LAYOUT_SPACE.WRAP_GAP);
  }
}

/**
 * 绘制单个游戏卡片
 */
async function drawSingleGameCard(painter, targetWidth, renderData, imageCache) {
  const { gameInfo, charItems, cpItems, gameItem } = renderData;
  const { exportColor } = renderData.appData || {};

  const BODY_PAD = LAYOUT_SPACE.BODY_PADDING;
  const WRAP_MAX_W = 1200;
  const wrapW = Math.min(WRAP_MAX_W, targetWidth - BODY_PAD * 2);
  const wrapX = Math.max(BODY_PAD, (targetWidth - wrapW) / 2);

  const cardInnerPad = LAYOUT_SPACE.ADDED_GAME_CARD_PADDING;
  const gameCardW = wrapW;
  const cardX = wrapX;
  const cardTop = painter.y;

  // 计算卡片总高度
  const nameFontSize = 22;
  const nameHeight = nameFontSize + LAYOUT_SPACE.GAME_CARD_HEAD_MB;
  const HEART_SIZE = 26;
  const HEART_GAP = 6;
  const HEART_AREA_HEIGHT = HEART_SIZE + 12;

  let charAreaHeight = 0;
  let charCardHeight = LAYOUT_SPACE.CHAR_CARD_MIN_H;
  if (charItems.length > 0) {
    const titleH = 18 + 4;
    const titleMb = 8;
    const area = calcCharAreaHeight(
      painter.ctx,
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

  let cpAreaHeight = 0;
  if (cpItems.length > 0) {
    const titleH = 18 + 8;
    let totalCpHeight = titleH;
    const femaleCardWidth = LAYOUT_SPACE.CHAR_CARD_W;
    const maleCardWidth = LAYOUT_SPACE.CHAR_CARD_W;
    const maleGap = LAYOUT_SPACE.CP_MALE_GAP;
    const colGap = LAYOUT_SPACE.CP_COLUMN_GAP;
    // 修复：男主可用宽度 = 总宽度 - 女主卡片宽度 - 间隙，不再乘以0.75
    const maleContainerWidth = (gameCardW - cardInnerPad * 2) - femaleCardWidth - colGap;

    for (const cp of cpItems) {
      const fHeight = calcCharCardHeight(painter.ctx, cp.femaleName, femaleCardWidth, 14);
      let maxMaleH = LAYOUT_SPACE.CHAR_CARD_MIN_H;
      cp.maleItems.forEach(m => {
        const h = calcCharCardHeight(painter.ctx, m.name, maleCardWidth, 14);
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

  const totalCardH = cardInnerPad * 2 + nameHeight + HEART_AREA_HEIGHT + charAreaHeight + cpAreaHeight;
  const cardH = totalCardH;

  // 绘制卡片背景
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
      wrapText(painter.ctx, item.name, xPos + innerPad, nameY, cardW - innerPad * 2, 16, 14, '#222');

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
      const fHeight = calcCharCardHeight(painter.ctx, cp.femaleName, femaleCardW, 14);
      // 修复：男主可用宽度 = 总宽度 - 女主卡片宽度 - 间隙
      const maleContainerW = (gameCardW - cardInnerPad * 2) - femaleCardW - colGap;
      const perRow = calcCardsPerRow(maleCardW, maleGap, maleContainerW);
      const maleRows = Math.ceil(cp.maleItems.length / perRow);
      let maxMaleH = LAYOUT_SPACE.CHAR_CARD_MIN_H;
      cp.maleItems.forEach(m => {
        const h = calcCharCardHeight(painter.ctx, m.name, maleCardW, 14);
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
      wrapText(painter.ctx, cp.femaleName, femaleX + innerPad, nameY, femaleCardW - innerPad * 2, 16, 14, '#222');

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
        const nameY2 = my + innerPad + imgSize + LAYOUT_SPACE.CHAR_IMG_BOX_MB;
        wrapText(painter.ctx, m.name, mx + innerPad, nameY2, maleCardW - innerPad * 2, 16, 14, '#222');

        mx += maleCardW + maleGap;
        if ((i + 1) % perRow === 0 && i < cp.maleItems.length - 1) {
          mx = maleStartX;
          my += rowH + maleGap;
        }
      }
      drawY = my + rowH;
      drawY += 12;
    }
  }

  // 卡片底部间距（实际绘制时每张卡片后都会加，以便分页时统一处理）
  painter.shiftY(cardH);
  painter.shiftY(LAYOUT_SPACE.ADDED_GAME_CARD_MB);
}

/**
 * 绘制完整内容（支持分页：控制是否绘制头部，以及绘制哪些游戏卡片）
 */
async function drawFullContent(
  painter,
  targetWidth,
  drawHeader,
  gameIndexList,
  renderDataList,
  appData,
  imageCache
) {
  painter.resetY();

  if (drawHeader) {
    await drawHeaderBlock(painter, targetWidth, appData);
  }

  for (const idx of gameIndexList) {
    const data = renderDataList[idx];
    await drawSingleGameCard(painter, targetWidth, data, imageCache);
  }
}

/**
 * 画布裁剪工具
 */
function cropCanvas(canvas, width, height) {
  const cropped = document.createElement('canvas');
  cropped.width = width;
  cropped.height = height;
  const ctx = cropped.getContext('2d');
  ctx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);
  return cropped;
}

// ============================ 长图高度计算 ============================

/**
 * 计算长图总高度（修复：卡片高度 + 间距，确保画布足够）
 */
function calcTotalVirtualHeight(targetWidth, appData, gameTemplateList, renderDataList) {
  const headerH = calcHeaderVirtualHeight(targetWidth, appData);
  let total = headerH;
  for (const data of renderDataList) {
    const cardH = calcSingleGameBlockHeight(targetWidth, data);
    total += cardH;
    total += LAYOUT_SPACE.ADDED_GAME_CARD_MB; // 每张卡片后都添加间距
  }
  total += LAYOUT_SPACE.BODY_PADDING;
  return total + 300; // 安全余量
}

// ============================ 主渲染函数 ============================

/**
 * 渲染导出图片（支持分页）
 * @param {number} targetWidth - 画布宽度
 * @param {boolean} isLongMode - 是否长图模式（不分页）
 * @param {number} maxPageHeight - 单页最大高度（固定尺寸模式）
 * @param {Object} appData - 全局数据
 * @param {Array} gameTemplateList - 游戏模板列表
 * @returns {Promise<Blob[]>}
 */
export async function renderExportCanvas(
  targetWidth,
  isLongMode,
  maxPageHeight,
  appData,
  gameTemplateList
) {
  const { exportColor, gameList } = appData;

  // 清空圆角缓存
  roundImageCache.clear();

  // ======== 第一步：收集渲染数据和图片地址 ========
  const allImageSrcList = [];
  const renderDataList = [];

  for (const gameItem of gameList) {
    // =========【新增过滤逻辑】=========
    // 如果开关关闭 && 当前游戏处于折叠状态 → 跳过，不加入渲染列表
    if (!appData.exportFoldContent && gameItem.fold === true) {
      continue;
    }

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
    renderDataList.push({
      gameInfo,
      charItems,
      cpItems,
      gameItem,
      appData // 传递 appData 以便绘制时获取 exportColor
    });
  }

  // ======== 长图模式 ========
  if (isLongMode) {
    const totalHeight = calcTotalVirtualHeight(targetWidth, appData, gameTemplateList, renderDataList);
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = totalHeight;
    const painter = new CanvasLayoutPainter(canvas, targetWidth, totalHeight, exportColor.bg);

    // 加载图片
    const imageCache = await loadImagesWithLimit(allImageSrcList, MAX_IMAGE_CONCURRENCY);

    // 绘制全部内容（所有卡片索引）
    const allIndexes = renderDataList.map((_, idx) => idx);
    await drawFullContent(
      painter,
      targetWidth,
      true, // 绘制头部
      allIndexes,
      renderDataList,
      appData,
      imageCache
    );

    const finalHeight = painter.getY() + LAYOUT_SPACE.BODY_PADDING;
    const finalCanvas = cropCanvas(canvas, targetWidth, finalHeight);
    const blob = await new Promise((resolve) => finalCanvas.toBlob(resolve, 'image/png'));
    return [blob];
  }

  // ======== 固定尺寸分页模式 ========
  if (!maxPageHeight || maxPageHeight <= 0) {
    throw new Error('分页模式必须传入有效页面高度');
  }

  // 预计算高度
  const { headerHeight, gameBlockHeights } = preCalcLayoutHeight(
    targetWidth,
    appData,
    gameTemplateList,
    renderDataList
  );

  // 分页切割
  const pagePlanList = splitPagesByHeight(headerHeight, gameBlockHeights, maxPageHeight);

  // 加载图片（所有页面共享）
  const imageCache = await loadImagesWithLimit(allImageSrcList, MAX_IMAGE_CONCURRENCY);

  const blobList = [];
  for (const pagePlan of pagePlanList) {
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = maxPageHeight;
    const painter = new CanvasLayoutPainter(canvas, targetWidth, maxPageHeight, exportColor.bg);

    // 绘制当前页
    await drawFullContent(
      painter,
      targetWidth,
      pagePlan.isFirstPage,
      pagePlan.gameIndexes,
      renderDataList,
      appData,
      imageCache
    );

    // 裁剪到实际占用高度
    const usedHeight = painter.getY() + LAYOUT_SPACE.BODY_PADDING;
    const finalHeight = Math.min(usedHeight, maxPageHeight);
    const finalCanvas = cropCanvas(canvas, targetWidth, finalHeight);
    const blob = await new Promise((resolve) => finalCanvas.toBlob(resolve, 'image/png'));
    blobList.push(blob);
  }

  return blobList;
}
