// ===================== main.js 【数据层、公共工具函数】 =====================
// 🚨【新增游戏请在此数组添加编号！】请勿改动其他位置
const gameIdList = [
    "001", "002", "003", "004", "005", "006", "007", "008", "009", "010",
    "011", "012", "013", "014", "015", "016", "017", "018", "019", "020",
    "021", "022", "023", "024", "025", "026", "027", "028", "029", "030",
    "031", "032", "033", "034", "035", "036", "037", "038", "039", "040",
    "041", "042", "043", "044", "045", "046", "047", "048", "049", "050",
    "051", "052", "053", "054", "055", "056", "057", "058", "059", "060",
    "061", "062", "063", "064", "065", "066", "067", "068", "069", "070",
    "071", "072", "073", "074"
    //新增游戏在这里追加
];

// ===================== 全局存储key【不再随意修改！】 =====================
export const STORE_KEY = "otome-favlist-data";               // 主存储键，永不改变
export const DATA_VERSION = 1.1;                              // 数据版本号，用于迁移
export const OLD_STORE_KEYS = [                               // 历史遗留 key，用于自动迁移
    "otome-favlist-data-v1",
    "otome-favlist-data-v1.1"
];
export const SPOILER_DATE_KEY = "spoiler-confirm-date";       // 全局剧透确认日期
export const SPOILER_LOCAL_SWITCH_KEY = "local-switch-spoiler-date"; // 局部开关确认日期

// ===================== 图片URL域名配置 =====================
export const R2_BASE_URL = "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev";
export const JSD_BASE_URL = "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img";

// ===================== 路径标准化工具（根治 URL 二次拼接） =====================
/**
 * 路径标准化：统一输出相对路径
 * 支持：
 * 1. 相对路径 char/xxx.jpg → 直接返回
 * 2. R2完整URL → 提取相对路径
 * 3. jsDelivr完整URL → 提取相对路径
 * @param {string} src
 * @returns {string|null} 清洗后的相对路径
 */
export function normalizeImageRelPath(src) {
    if (!src || typeof src !== "string") return null;
    const s = src.trim();
    // 已经是相对路径，不含http
    if (!s.startsWith("http")) {
        return s;
    }
    // R2链接提取路径
    if (s.startsWith(R2_BASE_URL + "/")) {
        return s.slice(R2_BASE_URL.length + 1);
    }
    // jsDelivr链接提取路径
    if (s.startsWith(JSD_BASE_URL + "/")) {
        return s.slice(JSD_BASE_URL.length + 1);
    }
    // 无法识别的外部链接，直接返回原值（兜底）
    return s;
}

/**
 * 安全生成页面展示R2地址（自动兼容旧数据完整URL）
 * @param {string} relPath 相对路径或完整URL
 * @returns {string} 可用的图片URL
 */
export function getWebImageUrl(relPath) {
    const cleanPath = normalizeImageRelPath(relPath);
    if (!cleanPath) return "";
    // 如果清洗后仍然是完整http链接，直接返回（外部图兜底）
    if (cleanPath.startsWith("http")) return cleanPath;
    return `${R2_BASE_URL}/${cleanPath}`;
}

/**
 * 安全生成Canvas jsDelivr地址（自动兼容旧数据完整URL）
 * @param {string} relPath 相对路径或完整URL
 * @returns {string} 可用的图片URL
 */
export function getCanvasImageUrl(relPath) {
    const cleanPath = normalizeImageRelPath(relPath);
    if (!cleanPath) return "";
    if (cleanPath.startsWith("http")) return cleanPath;
    return `${JSD_BASE_URL}/${cleanPath}`;
}

/**
 * R2完整链接 → jsDelivr链接（专供Canvas导出模块转换）
 * 增强版：增加强校验，彻底杜绝R2地址泄漏
 * @param {string} path 相对路径或完整URL
 * @returns {string}
 */
export function convertR2ToJsDelivr(path) {
    if (!path) return "";
    // 标准化提取相对路径
    const rel = normalizeImageRelPath(path);
    // 标准化后如果依然是http链接，代表无法识别，非法链接，告警
    if (rel.startsWith("http")) {
        console.error("❌ convertR2ToJsDelivr 无法转换的外部图片地址:", path);
        return "";
    }
    const jsdUrl = getCanvasImageUrl(rel);
    // 二次防御：确保输出绝对不能是R2域名
    if (jsdUrl.startsWith(R2_BASE_URL)) {
        console.error("❌ 转换函数异常，输出R2地址！原始path:", path);
        return "";
    }
    return jsdUrl;
}

// ===================== 全局应用数据对象 =====================
export let appData = {
    globalHideChar: false,
    globalFD: false,
    // ==========新增==========
    exportFoldContent: true,
    gameSpoilerRecord: {},
    baseInfo: { nick: "", count: "", story: "", firstgame: "" },
    gameList: [],
    // ========= 修改：新增 subTitle、gameName，设置默认值 =========
    exportColor: {
        bg: "#fff7f9",
        title: "#b33a3a",
        subTitle: "#b85878",
        baseInfoText: "#c98fac",
        customText: "#c98fac",
        gameName: "#000000",   // ✅ 修改为黑色，用户仍可自定义
        border: "#f6a5b8"
    },
    charImageSelect: {} // 持久存储角色选中立绘索引 key:"gameId-charId"
};

// ===================== 导出画布 全局间距常量【严格匹配结构图px规范】 =====================
export const LAYOUT_SPACE = {
  BODY_PADDING: 20,
  WRAP_GAP: 30,
  SITE_TITLE_MT: 30,
  SITE_TITLE_MB: 10,

  BIG_CARD_PADDING: 24,
  BIG_CARD_H2_MB: 20,

  SWITCH_ROW_MARGIN: 14,
  SWITCH_ROW_GAP: 12,

  FORM_ROW_MARGIN: 16,
  FORM_DOUBLE_GAP: 32,

  CENTER_BTN_MARGIN: 16,
  CENTER_BTN_GAP: 12,

  GAME_SEARCH_PADDING: 16,
  GAME_SEARCH_GAP: 10,
  FILTER_GROUP_GAP: 8,

  GAME_LIST_MARGIN: 12,
  GAME_GRID_GAP: 14,

  ADDED_GAME_CARD_PADDING: 16,
  ADDED_GAME_CARD_MB: 14,

  GAME_CARD_HEAD_MB: 12,
  GAME_HEAD_INNER_GAP: 10,
  HEART_GAP: 6,

  GAME_CARD_BLOCK_MB: 24,
  CHAR_ROW_GAP: 14,

  CP_COLUMN_GAP: 16,
  CP_MALE_GAP: 12,

  CARD_BOTTOM_BTN_MT: 14,
  CARD_BOTTOM_BTN_GAP: 10,

  ABOUT_MT: 50,
  ABOUT_PADDING: 20,
  ABOUT_P_MARGIN: 8,

  // 角色卡片固定尺寸（规范固定）
  CHAR_CARD_W: 120,
  CHAR_CARD_MIN_H: 168,
  CHAR_IMG_BOX_RATIO: 1,
  CHAR_IMG_BOX_MB: 8,
  CHAR_CARD_INNER_PADDING: 8
};

// 样式常量（导出配色、圆角、边框宽度，同步appData.exportColor）
export const LAYOUT_STYLE = {
  BIG_CARD_BORDER_WIDTH: 2,
  CARD_BORDER_WIDTH: 1,
  BIG_CARD_RADIUS: 16,
  GAME_CARD_RADIUS: 12,
  CHAR_CARD_RADIUS: 10,
  CHAR_IMG_RADIUS: 8
};

// ===================== 游戏模板数据兜底变量 =====================
// 兜底：游戏数据模块加载失败时赋值空数组，彻底解决undefined报错
export let gameTemplateList = [];

// ===================== 角色编辑弹窗全局状态变量 =====================
export let currentEditGameId = null;
export let charPoolMode = "char"; // char = 单选角色, cp = CP搭配

// ===================== 剧透弹窗临时待处理标记 =====================
// 可选值：hideChar / fdGame / localHide / localFD
window.pendingGlobalSwitch = null;

// 动态游戏卡片待操作标记
window.pendingGameOp = null;

// ===================== 本地存储读写工具函数 =====================
/**
 * 将appData完整保存到localStorage
 */
export function saveData() {
    localStorage.setItem(STORE_KEY, JSON.stringify(appData));
}

/**
 * 从localStorage读取并恢复appData，自动迁移旧存档
 */
export function loadData() {
    try {
        let raw = localStorage.getItem(STORE_KEY);
        // 主key无数据，尝试迁移所有旧版本key
        if (!raw) {
            for (const oldKey of OLD_STORE_KEYS) {
                const oldRaw = localStorage.getItem(oldKey);
                if (oldRaw) {
                    raw = oldRaw;
                    console.log(`✅发现旧存档 ${oldKey}，执行迁移到主键 ${STORE_KEY}`);
                    // 迁移写入主key
                    localStorage.setItem(STORE_KEY, raw);
                    // 可选：迁移成功后清理旧key（注释掉可保留双份存档）
                    // localStorage.removeItem(oldKey);
                    break;
                }
            }
        }

        // 初始化默认数据
        let savedData = null;
        if (raw) savedData = JSON.parse(raw);

        if (savedData && typeof savedData === "object") {
            appData = { ...appData, ...savedData };
        }

        // ========== 版本迁移逻辑 ==========
        if (appData._version === undefined || appData._version < DATA_VERSION) {
            console.log("📌执行数据结构升级迁移 (version:", appData._version, "→", DATA_VERSION, ")");
            // ========= 架构说明 =========
            // 当前业务中，图片URL全部来源于静态游戏模板（gameTemplateList），
            // appData 仅存储角色ID和索引（selectCharItems、charImageSelect），
            // 并未持久化存储图片URL字符串，因此无需在迁移时清洗图片路径。
            // 运行时兼容函数 getWebImageUrl / getCanvasImageUrl 已确保新旧数据一致。
            // 只需标记新版本并保存，后续字段补齐由下方兜底完成。
            appData._version = DATA_VERSION;
            // 迁移完成自动保存一次清洗后数据
            saveData();
        }

        // =========新增兜底：旧存档不存在该字段，默认true =========
        if(typeof appData.exportFoldContent !== "boolean"){
            appData.exportFoldContent = true;
        }

        // ========= 新增：兼容旧存档，缺失字段填充默认值 =========
        if(!appData.exportColor) {
            appData.exportColor = {};
        }
        appData.exportColor.bg = appData.exportColor.bg ?? "#fff7f9";
        appData.exportColor.title = appData.exportColor.title ?? "#b33a3a";
        appData.exportColor.subTitle = appData.exportColor.subTitle ?? "#b85878";
        // 兼容旧存档：存在旧text字段则迁移到baseInfoText
        if(appData.exportColor.text !== undefined && appData.exportColor.baseInfoText === undefined){
            appData.exportColor.baseInfoText = appData.exportColor.text;
        }
        appData.exportColor.baseInfoText = appData.exportColor.baseInfoText ?? "#c98fac";
        // 新增自定义文本色，默认和基础信息色一致
        appData.exportColor.customText = appData.exportColor.customText ?? appData.exportColor.baseInfoText;
        appData.exportColor.gameName = appData.exportColor.gameName ?? "#000000";
        appData.exportColor.border = appData.exportColor.border ?? "#f6a5b8";

        // 【新增兜底：旧存档缺失局部开关字段，补默认false】
        if (Array.isArray(appData.gameList)) {
            appData.gameList.forEach(g => {
                if (typeof g.localHideChar !== "boolean") g.localHideChar = false;
                if (typeof g.localFD !== "boolean") g.localFD = false;
                if (typeof g.charPanelOpen !== "boolean") g.charPanelOpen = false;
                if (typeof g.cpPanelOpen !== "boolean") g.cpPanelOpen = false;
                if (typeof g.isFav !== "boolean") g.isFav = false;
                if (typeof g.loveRate !== "number") g.loveRate = 0;
                if (!Array.isArray(g.selectChars)) g.selectChars = [];
                if (!Array.isArray(g.cpSelectIds)) g.cpSelectIds = [];
                if (!Array.isArray(g.selectCharItems)) {
                    g.selectCharItems = [];
                }
                if(!Array.isArray(g.cpEditState)){
                    g.cpEditState = null;
                }
                if(!Array.isArray(g.cpList)) g.cpList = [];
                if(!Array.isArray(g.maleItems)) g.maleItems = [];
                // ==========新增自定义文本兜底==========
                if (typeof g.gameHeadText !== "string") g.gameHeadText = "";
                if (typeof g.charSectionText !== "string") g.charSectionText = "";
                if (typeof g.cpSectionText !== "string") g.cpSectionText = "";
            });
        }
    } catch (e) {
        console.error("读取本地存储失败：", e);
    }
}

/**
 * 获取今日日期字符串 YYYY-MM-DD 用于跨零点判断
 * @returns {string} 日期字符串
 */
export function getTodayDateStr() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

/**
 * 判断今天是否已经确认过【全局】剧透
 * @returns {boolean}
 */
export function isTodayConfirmed() {
    const savedDate = localStorage.getItem(SPOILER_DATE_KEY);
    return savedDate === getTodayDateStr();
}

/**
 * 保存今日【全局】确认标记到本地存储
 */
export function saveConfirmDate() {
    localStorage.setItem(SPOILER_DATE_KEY, getTodayDateStr());
}

/**
 * 局部开关单日确认标记（兼容旧script.js解构）
 */
export function localSwitchIsConfirmedToday() {
    const saved = localStorage.getItem(SPOILER_LOCAL_SWITCH_KEY);
    return saved === getTodayDateStr();
}
export function saveLocalSwitchConfirmDate() {
    localStorage.setItem(SPOILER_LOCAL_SWITCH_KEY, getTodayDateStr());
}

// ===================== 角色图片过滤工具函数 =====================
/**
 * 获取角色可用图片组（适配你项目 srcList 格式）
 * @param {Object} char 角色对象
 * @param {boolean} globalHideSwitch 全局隐藏角色开关
 * @param {boolean} globalFDSwitch 全局FD开关
 * @param {boolean} localHideSwitch 当前游戏隐藏角色开关
 * @param {boolean} localFDSwitch 当前游戏FD开关
 * @returns Array 过滤后可用图片单元，每个单元包含 srcList + type
 */
export function getAvailableCharImages(char, globalHideSwitch, globalFDSwitch, localHideSwitch, localFDSwitch) {
    if (!char) return [];
    if (!char.images || !Array.isArray(char.images)) return [];

    const enableHidden = globalHideSwitch || localHideSwitch;
    const enableFD = globalFDSwitch || localFDSwitch;

    return char.images.filter(imgUnit => {
        if (!imgUnit || !Array.isArray(imgUnit.srcList)) return false;
        switch (imgUnit.type) {
            case "base":
                return true;
            case "hidden":
                return enableHidden;
            case "fd":
                return enableFD;
            default:
                return false;
        }
    });
}

/**
 * 全局图片缓存Map：key=图片url，value=Promise<HTMLImageElement>
 * 避免同一个url重复创建Image对象、重复请求
 */
export const imgCacheMap = new Map();

// ============================================================
// ① preloadAndDecodeImage 修改后（强制顺序：先设置跨域，再赋值src）
// ============================================================
export function preloadAndDecodeImage(src){
    if(!src){
        return Promise.resolve(null);
    }

    if(imgCacheMap.has(src)){
        return imgCacheMap.get(src);
    }

    const p = new Promise((resolve, reject) => {
        const tempImg = new Image();
        // 【强制顺序】先设置crossOrigin、decoding，最后赋值src！
        tempImg.crossOrigin = "anonymous";
        tempImg.decoding = "async";

        tempImg.onload = () => {
            resolve(tempImg);
        };
        tempImg.onerror = () => {
            imgCacheMap.delete(src);
            console.error(`[图片加载失败]`, src);
            reject(new Error(`Image load failed: ${src}`));
        };
        // 所有配置完成后再赋值src，杜绝浏览器提前发起请求
        tempImg.src = src;
    });

    imgCacheMap.set(src, p);
    return p;
}

// ============================================================
// 新增 preloadImageBitmap（专供Canvas导出使用，启用高质量缩放 + 降级兜底）
// ============================================================
/**
 * 预加载图片并生成高质量 createImageBitmap（专供Canvas导出使用）
 * 解决Chrome PNG缩小插值模糊问题，启用 resizeQuality:"high"
 * 增加降级兜底，当createImageBitmap失败时返回原始HTMLImageElement
 * @param {string} src 图片地址
 * @returns {Promise<ImageBitmap|HTMLImageElement|null>}
 */
export function preloadImageBitmap(src) {
    if (!src) {
        return Promise.resolve(null);
    }

    // 复用上层图片缓存，避免重复网络请求
    if (imgCacheMap.has(src)) {
        return imgCacheMap.get(src).then(async (img) => {
            if (!img) return null;
            try {
                return await createImageBitmap(img, {
                    resizeQuality: "high"
                });
            } catch (e) {
                console.warn(`createImageBitmap 降级: ${src}`, e);
                try {
                    return await createImageBitmap(img);
                } catch {
                    // iOS Safari终极兜底：返回原始Image，不再强制bitmap
                    return img;
                }
            }
        });
    }

    // 先使用原有加载逻辑缓存图片
    return preloadAndDecodeImage(src).then(async (img) => {
        if (!img) return null;
        try {
            return await createImageBitmap(img, {
                resizeQuality: "high"
            });
        } catch (e) {
            console.warn(`createImageBitmap resizeQuality降级: ${src}`, e);
            try {
                return await createImageBitmap(img);
            } catch {
                return img;
            }
        }
    });
}

// ============================================================
// ② preloadImagesInIdle 修改后
// ============================================================
export function preloadImagesInIdle(list, batchSize = 2){
    if(!Array.isArray(list) || !list.length) return;

    const unique = [...new Set(list)].filter(Boolean);

    let index = 0;

    const run = async (deadline) => {
        while(index < unique.length){
            // 浏览器已经没有空闲时间了
            if(
                deadline &&
                typeof deadline.timeRemaining === "function" &&
                deadline.timeRemaining() < 8
            ){
                requestIdleCallback(run, {timeout: 1000});
                return;
            }

            const batch = unique.slice(index, index + batchSize);
            index += batch.length;

            await Promise.allSettled(
                batch.map(src => preloadAndDecodeImage(src))
            );
        }
    };

    if("requestIdleCallback" in window){
        requestIdleCallback(
            run,
            {timeout: 1000}
        );
    }else{
        setTimeout(() => run(), 300);
    }
}

/**
 * 安全切换角色立绘：后台预解码完成再更新DOM
 * @param {HTMLImageElement} domImg 页面真实img DOM
 * @param {string} nextSrc 新图片地址
 */
export async function switchCharImage(domImg, nextSrc){
    try{
        await preloadAndDecodeImage(nextSrc);
        domImg.src = nextSrc;
    }catch(err){
        console.error("图片切换失败", err);
        // 降级：直接赋值src保证可用性
        domImg.src = nextSrc;
    }
}

// ============================================================
// ③ switchCharImageWithLoading 修改后
// ============================================================
export async function switchCharImageWithLoading(wrap, nextSrc){
    if(!wrap || !nextSrc){
        return;
    }

    // 防止连续快速点击
    if(wrap.dataset.isImgLoading === "1"){
        return;
    }

    wrap.dataset.isImgLoading = "1";

    const loaderEl =
        document.createElement("div");

    loaderEl.className =
        "img-loader-spinner";

    wrap.appendChild(loaderEl);

    function clearLoading(){
        wrap.dataset.isImgLoading = "";

        const el =
            wrap.querySelector(
                ".img-loader-spinner"
            );

        if(el){
            el.remove();
        }
    }

    try{
        // 使用统一图片缓存
        await preloadAndDecodeImage(nextSrc);

        const realImg =
            wrap.querySelector("img");

        if(realImg){
            realImg.src = nextSrc;
            // 防止浏览器再次进行不必要的解码等待
            realImg.decoding = "async";
        }

    }catch(error){
        console.warn(
            "图片加载失败:",
            nextSrc,
            error
        );

        const realImg =
            wrap.querySelector("img");
        // 即使 decode 失败，也允许浏览器直接显示
        if(realImg){
            realImg.src = nextSrc;
        }

    }finally{
        clearLoading();
    }
}

// ============================================================
// ④ 新增 preloadAdjacentImages（保留供按需调用）
// ============================================================
export function preloadAdjacentImages(srcList, index){
    if(
        !Array.isArray(srcList) ||
        srcList.length <= 1
    ){
        return;
    }

    const targets = [];

    // 前一张
    const prevIndex =
        (index - 1 + srcList.length) %
        srcList.length;

    // 后一张
    const nextIndex =
        (index + 1) %
        srcList.length;

    targets.push(srcList[prevIndex]);
    targets.push(srcList[nextIndex]);

    preloadImagesInIdle(
        targets,
        1
    );
}

// ===================== 游戏模板加载模块（不再import游戏，读取全局已加载数据） =====================
export async function loadAllGameTemplates() {
    // 等待全局window.gameDataList就绪（data/games.js已经完成全部import）
    if (!Array.isArray(window.gameDataList)) {
        gameTemplateList = [];
        console.warn("window.gameDataList不存在，游戏模板为空");
        return;
    }
    // 直接赋值，不再重复导入游戏脚本
    gameTemplateList = [...window.gameDataList];
    console.log("✅main.js读取全局游戏模板，数量：", gameTemplateList.length);
}

/**
 * 同步游戏内全局开关状态【⚠️禁止调用！需求变更：全局与局部开关互相独立】
 * @param {string} type 开关类型 hideChar / fd
 * @param {boolean} status 开关布尔状态
 */
export function syncSingleGameSwitch(type, status) {
    // 保留导出防止import报错，业务逻辑不再执行
    console.warn("syncSingleGameSwitch 已废弃，请勿调用");
    return;
}

/**
 * 筛选下拉排序：中文拼音A-Z → 英文A-Z(忽略大小写) → 日文五十音(平假名优先，片假名转平假名)
 * @param {string[]} arr 原始字符串数组
 * @returns {string[]} 排好序的数组
 */
export function sortFilterOptionList(arr) {
    const gojyuon = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';

    function getLangType(str) {
        const s = String(str ?? "");
        // 优先检测平假名/片假名 → 日文
        if (/[\u3040-\u30ff]/.test(s)) return 'ja';
        // 其次检测汉字 → 中文
        if (/[\u4e00-\u9fff]/.test(s)) return 'zh';
        // 最后检测英文字母（含全角） → 英文
        if (/[a-zA-Z\uFF21-\uFF3A\uFF41-\uFF5A]/.test(s)) return 'en';
        return 'other';
    }

    // 按类型分组
    const groups = { zh: [], en: [], ja: [], other: [] };
    for (const item of arr) {
        const type = getLangType(item);
        groups[type].push(item);
    }

    // 各组内部排序
    const sortZh = (a, b) => a.localeCompare(b, 'zh-CN');
    const sortEn = (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' });
    const sortJa = (a, b) => {
        function toHiragana(s) {
            return s.replace(/[\u30a1-\u30fa]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
        }
        const ah = toHiragana(a)[0] || '';
        const bh = toHiragana(b)[0] || '';
        const ia = gojyuon.indexOf(ah);
        const ib = gojyuon.indexOf(bh);
        if (ia === -1 && ib === -1) return a.localeCompare(b);
        if (ia === -1) return 1;
        if (ib === -1) return -1;
        return ia - ib;
    };

    groups.zh.sort(sortZh);
    groups.en.sort(sortEn);
    groups.ja.sort(sortJa);
    groups.other.sort();

    // 按顺序合并：zh → en → ja → other
    return [...groups.zh, ...groups.en, ...groups.ja, ...groups.other];
}

/**
 * staff人员对象数组排序：lang zh>ja>en；同lang内部localeCompare
 * en规则：首字母相同时小写排在大写前面
 * @param {Array<{name:string,lang:string}>} list
 * @returns {Array<{name:string,lang:string}>}
 */
export function sortStaffByLang(list) {
    if (!Array.isArray(list)) return [];
    const langOrder = { zh:0, ja:1, en:2 };
    return [...list].sort((a,b)=>{
        const oA = langOrder[a.lang] ?? 99;
        const oB = langOrder[b.lang] ?? 99;
        //第一层 lang优先级 zh-ja-en
        if(oA !== oB) return oA - oB;

        const nameA = a.name;
        const nameB = b.name;
        if(a.lang === "zh"){
            return nameA.localeCompare(nameB,"zh-CN");
        }else if(a.lang === "ja"){
            return nameA.localeCompare(nameB,"ja-JP");
        }else if(a.lang === "en"){
            // en：首字母相同，小写排在大写前面
            const lowerA = nameA.toLowerCase();
            const lowerB = nameB.toLowerCase();
            if(lowerA !== lowerB){
                return lowerA.localeCompare(lowerB,"en");
            }else{
                //小写charCode更小，a在A前面
                return nameA.localeCompare(nameB,"en");
            }
        }
        return nameA.localeCompare(nameB);
    });
}

// ===================== 筛选下拉菜单填充函数 =====================
/**
 * 【修复】筛选下拉填充：保留HTML原生顶部placeholder option，只追加数据选项，不再覆盖HTML提示文字
 * 排序规则：中文A-Z →英文A-Z →日文五十音；发售年份数字降序
 * @param {Array} gameList 游戏模板数组
 */
export function fillFilterOptions(gameList) {
    if (!Array.isArray(gameList) || gameList.length === 0) return;

    const yearSet = new Set(), pubSet = new Set(), cnSet = new Set();
    let writerObjList = [];
    let artObjList = [];

    gameList.forEach(g => {
        if (!g) return;
        yearSet.add(g.year);

        if(Array.isArray(g.publisher)){
            g.publisher.forEach(name => name && pubSet.add(name));
        }
        cnSet.add(g.cnStudio);

        if (Array.isArray(g.writer)) {
            g.writer.forEach(obj => {
                if(obj?.name) writerObjList.push({name:obj.name, lang:obj.lang});
            });
        }

        if (Array.isArray(g.art)) {
            g.art.forEach(obj => {
                if(obj?.name) artObjList.push({name:obj.name, lang:obj.lang});
            });
        }
    });

    // =========新增：人员对象数组按name去重，消除下拉重复项=========
    function uniqueStaffByName(list) {
        const seen = new Set();
        return list.filter(item => {
            if (!item?.name) return false;
            if (seen.has(item.name)) return false;
            seen.add(item.name);
            return true;
        });
    }

    // 对象数组先去重，再按lang规则排序，再提取name字符串
    const writerSortedObjs = sortStaffByLang(uniqueStaffByName(writerObjList));
    const artSortedObjs = sortStaffByLang(uniqueStaffByName(artObjList));
    const writerSorted = writerSortedObjs.map(o=>o.name);
    const artSorted = artSortedObjs.map(o=>o.name);

    const pubSorted = sortFilterOptionList([...pubSet]);
    const cnSorted = sortFilterOptionList([...cnSet]);
    // 发售年份：数字升序，旧年份在上
    const yearSorted = [...yearSet].sort((a,b)=>Number(a)-Number(b));

    const fillSelect = (id, dataArr) => {
        const sel = document.getElementById(id);
        if (!sel) return;
        const firstOpt = sel.querySelector('option');
        sel.innerHTML = '';
        if (firstOpt) sel.appendChild(firstOpt);
        dataArr.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v;
            opt.textContent = v;
            sel.appendChild(opt);
        });
    };

    fillSelect("filter-writer", writerSorted);
    fillSelect("filter-art", artSorted);
    fillSelect("filter-year", yearSorted);
    fillSelect("filter-publisher", pubSorted);
    fillSelect("filter-cn", cnSorted);
}

// ===================== HTML模板渲染函数 =====================
/**
 * 渲染游戏选择列表卡片模板
 * 【修复】硬编码输出顺序，不再依赖对象key顺序：编剧→画师→发售年份→发行厂商→汉化厂商
 * 布局：左侧封面，右侧竖排信息，移除名称旁发售年份
 * @param {Object} game 游戏模板对象
 * @param {number} index 在列表中的索引（用于控制loading策略）
 * @returns {string} html字符串
 */
// ============================================================
// ⑤ renderGameSelectItem 修改后（增加index参数，前6张eager）
// ============================================================
export function renderGameSelectItem(game, index) {
    if (!game) return "";

    // 编剧：对象数组副本排序拼接
    let writerText = "无";
    if (Array.isArray(game.writer) && game.writer.length > 0) {
        const sortedWriterObjs = sortStaffByLang(game.writer);
        const writerNameArr = sortedWriterObjs.map(item=>item.name);
        writerText = writerNameArr.join("、");
    }

    // 画师：对象数组副本排序拼接
    let artText = "无";
    if (Array.isArray(game.art) && game.art.length > 0) {
        const sortedArtObjs = sortStaffByLang(game.art);
        const artNameArr = sortedArtObjs.map(item=>item.name);
        artText = sortedArtObjs.map(item=>item.name).join("、");
    }

    // 发行厂商：数组拼接
    let pubText = "无";
    if(Array.isArray(game.publisher) && game.publisher.length > 0){
        pubText = game.publisher.join("、");
    }

    // 【硬编码固定输出顺序，不受对象属性顺序干扰】
    const lines = [];
    lines.push(`编剧：${writerText}`);
    lines.push(`画师：${artText}`);
    lines.push(`发售年份：${game.year || "无"}`);
    lines.push(`发行厂商：${pubText}`);
    lines.push(`汉化厂商：${game.cnStudio || "无"}`);

    let infoHtml = "";
    for(const t of lines){
        infoHtml += `<div>${t}</div>`;
    }

    // 前6张 eager，其余 lazy
    const loadingMode = (index < 6) ? "eager" : "lazy";

    return `
        <img src="${getWebImageUrl(game.cover || '')}" alt="${game.name || ''}" loading="${loadingMode}" decoding="async">
        <div>
            <div class="game-option-name">${game.name || ""}</div>
            ${infoHtml}
        </div>
    `;
}

// ============================================================
// ⑥ renderSelectedChar 修改后（移除 preloadAdjacentImages 调用，img loading 改为 eager）
// ============================================================
export function renderSelectedChar(gameItem, gameInfo, isSnapshot = false) {
    if (!gameInfo?.charList || !gameItem) return `<div class="empty-hint">暂未添加角色</div>`;

    let html = "";
    const globalHide = appData.globalHideChar;
    const globalFD = appData.globalFD;
    const localHide = gameItem.localHideChar;
    const localFD = gameItem.localFD;

    if (!Array.isArray(gameItem.selectChars)) gameItem.selectChars = [];
    if (!Array.isArray(gameItem.selectCharItems)) gameItem.selectCharItems = [];

    gameItem.selectChars?.forEach(cid => {
        const char = gameInfo.charList?.find(c => c.id === cid);
        if (!char) return;

        const availableImgUnits = getAvailableCharImages(char, globalHide, globalFD, localHide, localFD);
        if (availableImgUnits.length === 0) return;

        let allSrc = [];
        availableImgUnits.forEach(u => allSrc.push(...u.srcList));
        if (allSrc.length === 0) return;

        // 从持久化 selectCharItems 读取imgIndex
        const storedItem = gameItem.selectCharItems.find(s => s.charId === cid);
        let imgIndex = Number(storedItem?.imgIndex ?? 0);
        if (imgIndex >= allSrc.length) imgIndex = 0;
        const targetSrc = allSrc[imgIndex];

        // 已移除 preloadAdjacentImages 调用，避免渲染时预加载大量图片

        html += `
            <div class="char-card-item selected" data-char-id="${char.id}" data-game-id="${gameInfo.id}" data-total-img="${allSrc.length}">
                <div class="char-card-img-box ${allSrc.length > 1 ? 'char-has-multi-img' : ''}">
                    <img src="${getWebImageUrl(targetSrc)}" alt="${char.name || ''}" loading="eager" decoding="async">
                </div>
                <div class="char-card-name">${char.name || ""}</div>
            </div>
        `;
    });

    return html || `<div class="empty-hint">暂未添加角色</div>`;
}

// ============================================================
// ⑦ renderCP 修改后（img loading 改为 eager）
// ============================================================
export function renderCP(gameItem, gameInfo, isSnapshot = false) {
    if (!gameInfo?.charList || !gameItem) return `<div class="empty-hint">暂未添加角色</div>`;

    let html = "";
    const globalHide = appData.globalHideChar;
    const globalFD = appData.globalFD;
    const localHide = gameItem.localHideChar;
    const localFD = gameItem.localFD;

    if (!Array.isArray(gameItem.cpList)) gameItem.cpList = [];

    gameItem.cpList?.forEach(cp => {
        if (!cp) return;

        const fChar = gameInfo.charList?.find(c => c.id === cp.femaleId);
        if (!fChar) return;

        const fAvailUnits = getAvailableCharImages(fChar, globalHide, globalFD, localHide, localFD);
        let fAllSrc = [];
        fAvailUnits.forEach(u => fAllSrc.push(...u.srcList));
        if (fAllSrc.length === 0) return;

        // ✅修复：从cp自身存储取女主imgIndex
        let fIndex = Number(cp.femaleImgIndex ?? 0);
        if (fIndex >= fAllSrc.length) fIndex = 0;
        const fTargetSrc = fAllSrc[fIndex];

        let maleHtml = "";
        if (!Array.isArray(cp.maleItems)) cp.maleItems = [];
        cp.maleItems?.forEach(mi => {
            const mChar = gameInfo.charList?.find(c => c.id === mi.charId);
            if (!mChar) return;

            const mAvailUnits = getAvailableCharImages(mChar, globalHide, globalFD, localHide, localFD);
            let mAllSrc = [];
            mAvailUnits.forEach(u => mAllSrc.push(...u.srcList));
            if (mAllSrc.length === 0) return;

            let mIndex = Number(mi.imgIndex ?? 0);
            if (mIndex >= mAllSrc.length) mIndex = 0;
            const mTargetSrc = mAllSrc[mIndex];

            maleHtml += `
                <div class="cp-selected-card-item" data-char-id="${mChar.id}" data-game-id="${gameInfo.id}" data-total-img="${mAllSrc.length}">
                    <div class="char-card-img-box ${mAllSrc.length > 1 ? 'char-has-multi-img' : ''}">
                        <img src="${getWebImageUrl(mTargetSrc)}" alt="${mChar.name || ''}" loading="eager" decoding="async">
                    </div>
                    <div class="char-card-name">${mChar.name || ""}</div>
                </div>
            `;
        });

        html += `
            <div class="cp-layout-row">
                <div class="heroine-column">
                    <div class="cp-selected-card-item" data-char-id="${fChar.id}" data-game-id="${gameInfo.id}" data-total-img="${fAllSrc.length}">
                        <div class="char-card-img-box ${fAllSrc.length > 1 ? 'char-has-multi-img' : ''}">
                            <img src="${getWebImageUrl(fTargetSrc)}" alt="${fChar.name || ''}" loading="eager" decoding="async">
                        </div>
                        <div class="char-card-name">${fChar.name || ""}</div>
                    </div>
                </div>
                <div class="hero-list-column">
                    <div class="char-card-wrapper">
                        ${maleHtml || "<span>未选择男主</span>"}
                    </div>
                </div>
            </div>
        `;
    });

    return html || `<div class="empty-hint">暂未添加角色</div>`;
}

/**
 * 过滤角色规则：全局开关 || 单游戏开关，任一开启即可展示
 * @param {Object} gameInfo 游戏模板对象
 * @returns {Array} 过滤完成角色数组，女主在前，男主在后
 */
export function getAllGameChar(gameInfo) {
    if (!gameInfo) return [];
    let chars = [...(gameInfo?.charList || [])];
    const gameItem = appData.gameList.find(g => g?.gameId === gameInfo.id);
    const showHide = appData.globalHideChar || gameItem?.localHideChar;
    const showFD = appData.globalFD || gameItem?.localFD;

    // 修复：isHidden + isFD 双标记角色，任意开关开启即可显示；全部关闭才隐藏
    chars = chars.filter(c => {
        if(!c) return false;
        //普通角色，无隐藏/FD标记，永远显示
        if(!c.isHidden && !c.isFD) return true;

        //仅隐藏角色
        if(c.isHidden && !c.isFD){
            return showHide;
        }
        //仅FD角色
        if(!c.isHidden && c.isFD){
            return showFD;
        }
        //同时是隐藏+FD角色：任意一个开关打开就显示，两个都关才隐藏
        if(c.isHidden && c.isFD){
            return showHide || showFD;
        }
        return true;
    });

    // ✅修复两处 localeCompare 语言标签，替换为标准 zh-CN
    const female = chars.filter(c => c.gender === "female").sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
    const male = chars.filter(c => c.gender === "male").sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));

    return [...female, ...male];
}

// ===================== 角色/CP待选勾选切换工具【新增】 =====================
/**
 * 单人Character面板勾选切换 → 操作 gameItem.selectChars
 * @param {Object} gameItem appData.gameList内的游戏条目
 * @param {string} charId 角色id
 * @param {string} gameId 当前游戏ID（用于正确读取立绘索引）
 */
export function toggleCharItemSelect(gameItem, charId, gameId) {
    if (!Array.isArray(gameItem.selectChars)) gameItem.selectChars = [];
    if (!Array.isArray(gameItem.selectCharItems)) gameItem.selectCharItems = [];

    const idx = gameItem.selectChars.indexOf(charId);
    if (idx >= 0) {
        // 取消勾选：同时删除两套数组对应项
        gameItem.selectChars.splice(idx, 1);
        const itemIdx = gameItem.selectCharItems.findIndex(s => s.charId === charId);
        if(itemIdx >=0) gameItem.selectCharItems.splice(itemIdx,1);
    } else {
        // 勾选：使用传入的 gameId 构造存储键，统一带 char-img- 前缀
        const saveKey = `char-img-${gameId}-${charId}`;
        const currentImgIndex = Number(appData.charImageSelect[saveKey] ?? 0);
        gameItem.selectChars.push(charId);
        gameItem.selectCharItems.push({
            charId: charId,
            imgIndex: currentImgIndex
        });
    }
    saveData();
}

/**
 * CP Couple面板待选勾选切换 → 独立操作 gameItem.cpSelectIds
 * @param {Object} gameItem appData.gameList内的游戏条目
 * @param {string} charId 角色id
 */
export function toggleCpItemSelect(gameItem, charId) {
    if (!Array.isArray(gameItem.cpSelectIds)) gameItem.cpSelectIds = [];
    const idx = gameItem.cpSelectIds.indexOf(charId);
    if (idx >= 0) {
        gameItem.cpSelectIds.splice(idx, 1);
    } else {
        gameItem.cpSelectIds.push(charId);
    }
    saveData();
}

// ===================== 页面启动入口模块 =====================
/**
 * 组装Core上下文对象，统一供给UI层script.js
 * @returns {Object} Core对象，所有核心方法对外暴露
 */
function buildCoreContext() {
    const Core = {
        appData,
        gameTemplateList,
        currentEditGameId,
        charPoolMode,
        loadAllGameTemplates,
        loadData,
        saveData,
        syncSingleGameSwitch,
        fillFilterOptions,
        sortFilterOptionList,
        sortStaffByLang,
        renderSelectedChar,
        renderCP,
        getAllGameChar,
        getAvailableCharImages,
        preloadAndDecodeImage,
        preloadImageBitmap, // <<=====新增
        preloadImagesInIdle,
        switchCharImage,
        switchCharImageWithLoading,
        preloadAdjacentImages,    // 保留导出，供按需调用
        isTodayConfirmed,
        saveConfirmDate,
        localSwitchIsConfirmedToday,
        saveLocalSwitchConfirmDate,
        renderGameSelectItem,
        bindDynamicGameCardSwitchEvents,
        toggleCharItemSelect,
        toggleCpItemSelect
    };
    return Core;
}

/**
 * 【渲染全局开关复选框状态】
 * 根据appData数据，更新页面上两个全局滑块勾选状态
 */
function renderGlobalSwitchDom() {
    const hideCharInput = document.getElementById("global-hide-char");
    const fdInput = document.getElementById("global-fd-game");
    // 加固：严格读取appData，不读取DOM旧状态
    if (hideCharInput) hideCharInput.checked = !!appData.globalHideChar;
    if (fdInput) fdInput.checked = !!appData.globalFD;
}

// 模块顶层事件处理函数，解决removeEventListener无效
function wrapClickHandler(e) {
    const spoilerModal = document.getElementById("spoiler-modal");
    if (!spoilerModal) return;

    // -------- 游戏局部开关处理 --------
    const targetInput = e.target.closest(".game-hide-char,.game-fd-switch,.modal-local-hide-char,.modal-local-fd");
    if (targetInput) {
        // ✅修复：只要命中局部开关，直接阻止浏览器原生checkbox切换，全部JS接管
        e.preventDefault();

        let idx;
        let gameItem;
        if (targetInput.classList.contains("modal-local-hide-char") || targetInput.classList.contains("modal-local-fd")) {
            gameItem = appData.gameList.find(g => g.gameId === currentEditGameId);
            if (!gameItem) return;
            idx = appData.gameList.findIndex(g => g.gameId === currentEditGameId);
        } else {
            idx = Number(targetInput.dataset.gameidx);
            gameItem = appData.gameList[idx];
            if (!gameItem) return;
        }

        // 读取真实数据状态，不要读取DOM的checked（委托click下DOM状态是旧的）
        let isOpened;
        if (targetInput.classList.contains("game-hide-char") || targetInput.classList.contains("modal-local-hide-char")) {
            isOpened = !!gameItem.localHideChar;
        } else {
            isOpened = !!gameItem.localFD;
        }

        // 已经开启：用户要关闭，直接生效，不弹窗
        if (isOpened) {
            if (targetInput.classList.contains("game-hide-char") || targetInput.classList.contains("modal-local-hide-char")) {
                gameItem.localHideChar = false;
            } else {
                gameItem.localFD = false;
            }
            saveData();
            if (window.refreshGameCardUi) window.refreshGameCardUi();
            return;
        }

        // 用户想要打开局部开关，直接弹出剧透弹窗
        if (targetInput.classList.contains("game-hide-char") || targetInput.classList.contains("modal-local-hide-char")) {
            window.pendingGameOp = { type: "hideChar", idx };
        } else {
            window.pendingGameOp = { type: "fd", idx };
        }
        spoilerModal.classList.add("active");
        return;
    }

    // -------- 角色图片切换按钮处理 --------
    const switchBtn = e.target.closest(".char-switch-prev,.char-switch-next");
    if (switchBtn) {
        const cardEl = switchBtn.closest(".char-card-item");
        if (!cardEl) return;
        const gameId = cardEl.dataset.gameId;
        const charId = cardEl.dataset.charId;
        const totalImg = Number(cardEl.dataset.totalImg) || 1;
        const saveKey = `${gameId}-${charId}`;
        let currentIdx = Number(appData.charImageSelect[saveKey] ?? 0);

        if (switchBtn.classList.contains("char-switch-prev")) {
            currentIdx = currentIdx - 1;
            if (currentIdx < 0) currentIdx = totalImg - 1;
        } else {
            currentIdx = currentIdx + 1;
            if (currentIdx >= totalImg) currentIdx = 0;
        }
        appData.charImageSelect[saveKey] = currentIdx;
        saveData();
        // 通知script.js重新渲染游戏卡片
        if (window.refreshGameCardUi) window.refreshGameCardUi();
        return;
    }

    // 点击遮罩空白关闭弹窗
    if(e.target === spoilerModal){
        spoilerModal.classList.remove("active");
        window.pendingGlobalSwitch = null;
        window.pendingGameOp = null;
    }
}

/**
 * 事件委托：处理动态渲染游戏卡片内部开关 + 角色图片切换按钮
 * 改为click委托，不再监听change；导出，由script.js渲染完列表后调用
 */
export function bindDynamicGameCardSwitchEvents() {
    const wrap = document.querySelector(".wrap");
    const spoilerModal = document.getElementById("spoiler-modal");
    if (!wrap || !spoilerModal) {
        console.warn("bindDynamicGameCardSwitchEvents：wrap或modal不存在，跳过绑定");
        return;
    }
    // 移除旧监听，防止重复绑定
    wrap.removeEventListener("click", wrapClickHandler);
    wrap.addEventListener("click", wrapClickHandler);
}

/**
 * 【绑定全局开关 click事件 + 剧透弹窗逻辑】
 * 改用label click，阻止默认，不再使用change，规避label包裹checkbox时序bug
 * 1.想要打开：阻止原生勾选，弹出弹窗；确认后才改为true
 * 2.想要关闭：直接修改数据，保存，更新UI，不弹窗
 * 恢复取消按钮完整逻辑
 */
function bindGlobalSwitchSpoilerEvents() {
    const hideCharInput = document.getElementById("global-hide-char");
    const fdInput = document.getElementById("global-fd-game");
    const spoilerModal = document.getElementById("spoiler-modal");
    const spoilerConfirmBtn = document.getElementById("spoiler-confirm");
    const spoilerCancelBtn = document.getElementById("spoiler-cancel");

    if (!hideCharInput || !fdInput || !spoilerModal || !spoilerConfirmBtn || !spoilerCancelBtn) {
        console.warn("bindGlobalSwitchSpoilerEvents：部分DOM缺失，全局开关弹窗未挂载");
        return;
    }
    // 获取包裹input的label元素
    const labelHideChar = hideCharInput.closest("label.switch");
    const labelFD = fdInput.closest("label.switch");

    // --------全局隐藏角色开关 使用label click，阻止默认行为--------
    labelHideChar.addEventListener("click", function (e) {
        e.preventDefault(); // 禁止浏览器原生切换checkbox！全部交给JS控制
        // 当前实际状态
        const currentVal = appData.globalHideChar;
        if (currentVal === true) {
            // 用户要关闭
            appData.globalHideChar = false;
            saveData();
            renderGlobalSwitchDom();
            if(window.refreshGameCardUi) window.refreshGameCardUi();
            return;
        }
        // 用户想要打开：不修改勾选，弹出弹窗
        window.pendingGlobalSwitch = "hideChar";
        spoilerModal.classList.add("active");
    });

    // --------全局FD开关--------
    labelFD.addEventListener("click", function (e) {
        e.preventDefault();
        const currentVal = appData.globalFD;
        if (currentVal === true) {
            // 用户要关闭
            appData.globalFD = false;
            saveData();
            renderGlobalSwitchDom();
            if(window.refreshGameCardUi) window.refreshGameCardUi();
            return;
        }
        window.pendingGlobalSwitch = "fdGame";
        spoilerModal.classList.add("active");
    });

    // 弹窗确认【扩展：同时处理全局 / 动态卡片局部】
    spoilerConfirmBtn.onclick = null;
    spoilerConfirmBtn.addEventListener("click", function () {
        // 优先处理动态游戏卡片操作（含弹窗内modal-local-*开关）
        if (window.pendingGameOp) {
            const op = window.pendingGameOp;
            const g = appData.gameList[op.idx];
            if (g) {
                if (op.type === "hideChar") g.localHideChar = true;
                if (op.type === "fd") g.localFD = true;
            }
            window.pendingGameOp = null;
            saveData();
            spoilerModal.classList.remove("active");
            window.pendingGlobalSwitch = null;
            if (window.refreshGameCardUi) window.refreshGameCardUi();
            return;
        }

        if (!window.pendingGlobalSwitch) {
            spoilerModal.classList.remove("active");
            window.pendingGlobalSwitch = null;
            window.pendingGameOp = null;
            return;
        }

        if (window.pendingGlobalSwitch === "hideChar") {
            appData.globalHideChar = true;
            saveData();
            renderGlobalSwitchDom();
        } else if (window.pendingGlobalSwitch === "fdGame") {
            appData.globalFD = true;
            saveData();
            renderGlobalSwitchDom();
        }
        spoilerModal.classList.remove("active");
        window.pendingGlobalSwitch = null;
        window.pendingGameOp = null;
        if (window.refreshGameCardUi) {
            window.refreshGameCardUi();
        }
    });

    // 弹窗取消：关闭弹窗，清空全部待处理标记，**不修改任何开关状态**
    spoilerCancelBtn.onclick = null;
    spoilerCancelBtn.addEventListener("click", function () {
        spoilerModal.classList.remove("active");
        window.pendingGlobalSwitch = null;
        window.pendingGameOp = null;
    });
}

/**
 * 对外暴露启动入口，供index.html调用
 */
export async function bootstrapCore() {
    // 1.读取本地存储数据
    loadData();
    // 2.加载全部游戏模板数据（读取全局window.gameDataList，由data/games.js提前加载完毕）
    await loadAllGameTemplates();
    // 3.组装核心上下文对象，传给UI层script.js
    const Core = buildCoreContext();
    // 动态导入，消除顶层import循环依赖
    const { initPage } = await import("./script.js");
    initPage(Core);
    // 4.渲染全局开关初始勾选状态
    renderGlobalSwitchDom();
    // 5.绑定全局开关+剧透弹窗事件（确认+取消双按钮）
    bindGlobalSwitchSpoilerEvents();
    // ⚠️移除bindDynamicGameCardSwitchEvents()调用，放到script.js渲染完列表后执行
}
