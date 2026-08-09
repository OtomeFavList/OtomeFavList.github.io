// ===================== main.js 【数据层、公共工具函数】 =====================
// 🚨【新增游戏请在此数组添加编号！】请勿改动其他位置
const gameIdList = [
    "001", "002", "003", "004", "005", "006", "007", "008", "009", "010",
    "011", "012", "013", "014", "015", "016", "017", "018", "019", "020",
    "021", "022", "023", "024", "025", "026", "027", "028", "029", "030",
    "031", "032", "033", "034", "035", "036", "037", "038", "039", "040",
    "041", "042", "043", "044", "045", "046", "047", "048", "049", "050",
    "051", "052", "053", "054", "055", "056", "057", "058", "059", "060",
    "061", "062", "063", "064"
    //新增游戏在这里追加
];

// 全局存储key
export const STORE_KEY = "otome-favlist-data";
export const SPOILER_DATE_KEY = "spoiler-confirm-date"; // 全局剧透确认日期
export const SPOILER_LOCAL_SWITCH_KEY = "local-switch-spoiler-date";

// ===================== 全局应用数据对象 =====================
export let appData = {
    globalHideChar: false,
    globalFD: false,
    gameSpoilerRecord: {},
    baseInfo: { nick: "", count: "", story: "", firstgame: "" },
    gameList: [],
    exportColor: { bg: "#fff7f9", title: "#b33a3a", text: "#c98fac", border: "#f6a5b8" },
    charImageSelect: {} // 持久存储角色选中立绘索引 key:"gameId-charId"
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
 * 从localStorage读取并恢复appData，捕获解析异常
 */
export function loadData() {
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) appData = JSON.parse(raw);

        // 【新增兜底：旧存档缺失局部开关字段，补默认false】
        if (Array.isArray(appData.gameList)) {
            appData.gameList.forEach(g => {
                if (typeof g.localHideChar !== "boolean") g.localHideChar = false;
                if (typeof g.localFD !== "boolean") g.localFD = false;
                // 新增：滑出面板展开状态兜底
                if (typeof g.charPanelOpen !== "boolean") g.charPanelOpen = false;
                if (typeof g.cpPanelOpen !== "boolean") g.cpPanelOpen = false;
                if (typeof g.isFav !== "boolean") g.isFav = false;
                // 兜底评分爱心字段
                if (typeof g.loveRate !== "number") g.loveRate = 0;
                // ============【新增：CP独立勾选池兜底】============
                if (!Array.isArray(g.selectChars)) g.selectChars = [];
                if (!Array.isArray(g.cpSelectIds)) g.cpSelectIds = [];

                // ============【新增：Character模式 已选角色带下标存储兜底】============
                if (!Array.isArray(g.selectCharItems)) {
                    g.selectCharItems = [];
                }

                // =====方案C：cpEditState 旧存档兼容兜底=====
                // 注意：loadData阶段gameTemplateList还未加载，不能生成真实cpEditState；
                // 此处只做占位，真实生成逻辑放在script.js renderCharSelectPanel的if(mode==="cp")内部
                if(!Array.isArray(g.cpEditState)){
                    g.cpEditState = null;
                }
                if(!Array.isArray(g.cpList)) g.cpList = [];
                if(!Array.isArray(g.maleItems)) g.maleItems = [];
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
 * 后台预加载并解码图片，解码完成后resolve，避免直接赋值src造成卡顿闪现
 * @param {string} src
 * @returns {Promise<HTMLImageElement>}
 */
export async function preloadAndDecodeImage(src){
    const tempImg = new Image();
    tempImg.decoding = "async";
    tempImg.src = src;
    await tempImg.decode();
    return tempImg;
}

/**
 * 浏览器空闲时后台预加载一批图片，仅做缓存，不渲染到页面
 * @param {string[]} srcList 图片地址数组
 */
export function preloadImagesInIdle(srcList) {
    if (!Array.isArray(srcList) || srcList.length === 0) return;

    // 简单全局Set，记录已经预加载过的url，防止重复请求
    if (!window._preloadedImgSet) window._preloadedImgSet = new Set();

    const needPreload = srcList.filter(src => src && !window._preloadedImgSet.has(src));
    if (needPreload.length === 0) return;

    const doPreload = () => {
        needPreload.forEach(src => {
            const img = new Image();
            img.decoding = "async";
            img.src = src;
            img.onload = () => {
                window._preloadedImgSet.add(src);
            };
            // 预加载失败直接静默丢弃，不影响业务
            img.onerror = () => {
                window._preloadedImgSet.add(src);
            };
        });
    };

    // 浏览器空闲才执行；不支持requestIdleCallback直接setTimeout降级
    if (window.requestIdleCallback) {
        requestIdleCallback(doPreload);
    } else {
        setTimeout(doPreload, 80);
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
    }
}

/**
 * 带loading状态的角色图片切换
 * @param {HTMLElement} wrap .char‑card‑img-box容器
 * @param {string} nextSrc 目标图片地址
 */
export async function switchCharImageWithLoading(wrap, nextSrc){
    // 防重复点击：正在加载直接返回
    if(wrap.dataset.isImgLoading === "1") return;

    wrap.dataset.isImgLoading = "1";
    // 插入loading DOM
    const loaderEl = document.createElement("div");
    loaderEl.className = "img‑loader‑spinner";
    wrap.appendChild(loaderEl);

    const tempImg = new Image();
    tempImg.decoding = "async";

    function clearLoading(){
        wrap.dataset.isImgLoading = "";
        const el = wrap.querySelector(".img‑loader‑spinner");
        if(el) el.remove();
    }

    tempImg.onload = function(){
        const realImg = wrap.querySelector("img");
        if(realImg) realImg.src = nextSrc;
        clearLoading();
    };
    tempImg.onerror = function(){
        console.warn("图片加载失败", nextSrc);
        clearLoading();
    };
    tempImg.src = nextSrc;
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
 * @returns {string} html字符串
 */
export function renderGameSelectItem(game) {
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

    return `
        <img src="${game.cover || ''}" alt="${game.name || ''}" decoding="async">
        <div>
            <div class="game-option-name">${game.name || ""}</div>
            ${infoHtml}
        </div>
    `;
}

/**
 * 渲染选中角色【适配 srcList 多图数组】
 * @param {Object} gameItem 当前已添加游戏条目(appData.gameList内)
 * @param {Object} gameInfo 游戏模板gameTemplateList内对象
 * @returns {string} html字符串
 */
export function renderSelectedChar(gameItem, gameInfo) {
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

        preloadImagesInIdle(allSrc);

        // 从持久化 selectCharItems 读取imgIndex，不再读取临时appData.charImageSelect
        const storedItem = gameItem.selectCharItems.find(s => s.charId === cid);
        let imgIndex = Number(storedItem?.imgIndex ?? 0);
        if (imgIndex >= allSrc.length) imgIndex = 0;
        const targetSrc = allSrc[imgIndex];

        html += `
            <div class="char-card-item selected" data-char-id="${char.id}" data-game-id="${gameInfo.id}" data-total-img="${allSrc.length}">
                <div class="char-card-img-box ${allSrc.length > 1 ? 'char-has-multi-img' : ''}">
                    <img src="${targetSrc}" alt="${char.name || ''}" decoding="async">
                </div>
                <div class="char-card-name">${char.name || ""}</div>
            </div>
        `;
    });

    return html || `<div class="empty-hint">暂未添加角色</div>`;
}

/**
 * 渲染CP【严格25%｜75%布局｜适配srcList，移除内联style，交由css控制】
 * ✅修改：已选结果区男主、女主卡片移除切换按钮DOM，只保留图片盒子+img+名字；保留data-*与char-has-multi-img标记类
 * @param {Object} gameItem 当前已添加游戏条目
 * @param {Object} gameInfo 游戏模板对象
 * @returns {string} html字符串
 */
export function renderCP(gameItem, gameInfo) {
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

        preloadImagesInIdle(fAllSrc);

        // ✅修复：从cp自身存储取女主imgIndex，不再读取临时appData.charImageSelect
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

            preloadImagesInIdle(mAllSrc);

            let mIndex = Number(mi.imgIndex ?? 0);
            if (mIndex >= mAllSrc.length) mIndex = 0;
            const mTargetSrc = mAllSrc[mIndex];

            maleHtml += `
                <div class="cp-selected-card-item" data-char-id="${mChar.id}" data-game-id="${gameInfo.id}" data-total-img="${mAllSrc.length}">
                    <div class="char-card-img-box ${mAllSrc.length > 1 ? 'char-has-multi-img' : ''}">
                        <img src="${mTargetSrc}" alt="${mChar.name || ''}" decoding="async">
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
                            <img src="${fTargetSrc}" alt="${fChar.name || ''}" decoding="async">
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
        preloadImagesInIdle,
        switchCharImage,
        switchCharImageWithLoading,
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
