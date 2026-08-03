// ===================== main.js 【数据层、公共工具函数】 =====================
// 全局存储key
export const STORE_KEY = "otome-favlist-data";
export const SPOILER_DATE_KEY = "spoiler-confirm-date"; // 全局剧透确认日期
export const SPOILER_LOCAL_SWITCH_KEY = "local-switch-spoiler-date"; // 单机局部开关单日预警标记

export let appData = {
    globalHideChar: false,
    globalFD: false,
    gameSpoilerRecord: {},
    baseInfo: { nick: "", count: "", story: "", firstgame: "" },
    gameList: [],
    exportColor: { bg: "#fff7f9", title: "#b33a3a", text: "#c98fac", border: "#f6a5b8" },
    charImageSelect: {} // 持久存储角色选中立绘索引 key:"gameId-charId"
};
// 兜底：游戏数据模块加载失败时赋值空数组，彻底解决undefined报错
export let gameTemplateList = [];

// 角色弹窗全局变量
export let currentEditGameId = null;
export let charPoolMode = "char"; // char = 单选角色, cp = CP搭配

// 本地存储读写
export function saveData() {
    localStorage.setItem(STORE_KEY, JSON.stringify(appData));
}
export function loadData() {
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) appData = JSON.parse(raw);
    } catch (e) {
        console.error("读取本地存储失败：", e);
    }
}
// 获取今日日期字符串 YYYY-MM-DD 用于跨零点判断
export function getTodayDateStr() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
// 判断今天是否已经确认过【全局】剧透
export function isTodayConfirmed() {
    const savedDate = localStorage.getItem(SPOILER_DATE_KEY);
    return savedDate === getTodayDateStr();
}
// 保存今日【全局】确认标记到本地
export function saveConfirmDate() {
    localStorage.setItem(SPOILER_DATE_KEY, getTodayDateStr());
}
// 判断今日局部单机开关是否已经确认过剧透
export function localSwitchIsConfirmedToday() {
    const saved = localStorage.getItem(SPOILER_LOCAL_SWITCH_KEY);
    return saved === getTodayDateStr();
}
// 标记今日单机局部开关已完成剧透确认
export function saveLocalSwitchConfirmDate() {
    localStorage.setItem(SPOILER_LOCAL_SWITCH_KEY, getTodayDateStr());
}

/**
 * 获取角色可用图片列表（过滤被权限锁定的图像）
 * @param {Object} char 角色对象
 * @param {boolean} globalHideSwitch 全局隐藏角色开关
 * @param {boolean} globalFDSwitch 全局FD开关
 * @param {boolean} localHideSwitch 当前游戏隐藏角色开关
 * @param {boolean} localFDSwitch 当前游戏FD开关
 * @returns Array 过滤后可用图片数组
 */
export function getAvailableCharImages(char, globalHideSwitch, globalFDSwitch, localHideSwitch, localFDSwitch) {
    // 空值防御
    if (!char) return [];
    // 旧数据兼容处理：识别老的 imgs 数组
    if (!char.images && Array.isArray(char.imgs)) {
        char.images = char.imgs.map(src => ({ src, type: "base" }));
    }
    if (!char.images || !Array.isArray(char.images)) return [];

    const enableHidden = globalHideSwitch || localHideSwitch;
    const enableFD = globalFDSwitch || localFDSwitch;

    return char.images.filter(img => {
        if(!img) return false;
        switch (img.type) {
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

// ✅修复1：路径已修正：单层 /data/games/，删除多余一层data/ 彻底解决 data/data 错误
export async function loadAllGameTemplates() {
    const basePath = "/data/games/";
    const gameIdList = ["001"];
    const tempList = [];

    for (const id of gameIdList) {
        try {
            // 动态导入单层路径游戏JS文件
            const mod = await import(`${basePath}game${id}.js`);
            if (mod && mod.gameData) {
                tempList.push(mod.gameData);
            }else{
                // ✅修复5：区分数据格式错误
                console.warn(`game${id}.js 加载成功，但缺失 gameData 数据，数据格式异常`);
            }
        } catch (err) {
            // ✅修复5：区分404与其他错误
            if(err.message.includes("404") || err.name === "TypeError"){
                console.error(`游戏文件 game${id}.js 【404 文件缺失】路径：${basePath}game${id}.js`, err);
            }else{
                console.error(`游戏文件 game${id}.js 【模块/MIME/格式错误】`, err);
            }
            // 单文件加载失败不阻塞整体加载流程
            continue;
        }
    }
    // 赋值全局游戏模板数组
    gameTemplateList = tempList;
}

// 同步游戏内全局开关状态（仅批量初始化，不锁死单游戏开关）
export function syncSingleGameSwitch(type, status) {
    if (!Array.isArray(appData.gameList)) return;
    appData.gameList.forEach(game => {
        if(!game) return;
        if (type === "hideChar") game.localHideChar = status;
        if (type === "fd") game.localFD = status;
    })
}

// 筛选下拉填充
export function fillFilterOptions(gameList) {
    if (!Array.isArray(gameList) || gameList.length === 0) return;
    const yearSet = new Set(), pubSet = new Set(), cnSet = new Set(), writerSet = new Set(), artSet = new Set();
    gameList.forEach(g => {
        if(!g) return;
        yearSet.add(g.year);
        pubSet.add(g.publisher);
        cnSet.add(g.cnStudio);
        writerSet.add(g.writer);
        artSet.add(g.art);
    })
    const fillSelect = (id, dataSet) => {
        const sel = document.getElementById(id);
        if (!sel) return;
        sel.innerHTML = '<option value="">全部</option>';
        dataSet.forEach(v => sel.innerHTML += `<option value="${v}">${v}</option>`);
    }
    fillSelect("filter-year", yearSet);
    fillSelect("filter-publisher", pubSet);
    fillSelect("filter-cn", cnSet);
    fillSelect("filter-writer", writerSet);
    fillSelect("filter-art", artSet);
}

// 渲染选中角色【重构：读取本地保存立绘索引 | 适配200*200卡片样式】
export function renderSelectedChar(gameItem, gameInfo) {
    // ✅修复2：空值防御
    if (!gameInfo?.charList || !gameItem) return "<span>暂无选择角色</span>";
    let html = "";
    const globalHide = appData.globalHideChar;
    const globalFD = appData.globalFD;
    const localHide = gameItem.localHideChar;
    const localFD = gameItem.localFD;

    if(!Array.isArray(gameItem.selectChars)) gameItem.selectChars = [];
    gameItem.selectChars?.forEach(cid => {
        const char = gameInfo.charList?.find(c => c.id === cid);
        if (!char) return;
        const availableImgs = getAvailableCharImages(char, globalHide, globalFD, localHide, localFD);
        if (availableImgs.length === 0) return;

        const saveKey = `${gameInfo.id}-${char.id}`;
        // 读取存储索引，越界自动归零
        let imgIndex = Number(appData.charImageSelect[saveKey] ?? 0);
        if(imgIndex >= availableImgs.length) imgIndex = 0;
        const targetImg = availableImgs[imgIndex];

        html += `
        <div class="char-card-item selected" data-char-id="${char.id}" data-game-id="${gameInfo.id}">
            <div class="char-card-img-box ${availableImgs.length>1?'char-has-multi-img':''}">
                ${availableImgs.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                <img src="img/char/${targetImg.src}" alt="${char.name}">
                ${availableImgs.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
            </div>
            <div class="char-card-name">${char.name}</div>
        </div>
        `;
    })
    return html || "<span>暂无选择角色</span>";
}

// 渲染CP【严格25%｜75%布局 cp-layout-row】
export function renderCP(gameItem, gameInfo) {
    // ✅修复2：空防御
    if (!gameInfo?.charList || !gameItem) return "<span>暂无CP搭配</span>";
    let html = "";
    const globalHide = appData.globalHideChar;
    const globalFD = appData.globalFD;
    const localHide = gameItem.localHideChar;
    const localFD = gameItem.localFD;

    if(!Array.isArray(gameItem.cpList)) gameItem.cpList = [];
    gameItem.cpList?.forEach(cp => {
        if(!cp) return;
        const fChar = gameInfo.charList?.find(c => c.id === cp.femaleId);
        if (!fChar) return;
        const fAvailImgs = getAvailableCharImages(fChar, globalHide, globalFD, localHide, localFD);
        if (fAvailImgs.length === 0) return;

        const fSaveKey = `${gameInfo.id}-${fChar.id}`;
        let fIndex = Number(appData.charImageSelect[fSaveKey] ?? 0);
        if(fIndex >= fAvailImgs.length) fIndex = 0;
        const fTargetImg = fAvailImgs[fIndex];

        let maleHtml = "";
        if(!Array.isArray(cp.maleIds)) cp.maleIds = [];
        cp.maleIds?.forEach(mid => {
            const mChar = gameInfo.charList?.find(c => c.id === mid);
            if (!mChar) return;
            const mAvailImgs = getAvailableCharImages(mChar, globalHide, globalFD, localHide, localFD);
            if (mAvailImgs.length === 0) return;

            const mSaveKey = `${gameInfo.id}-${mChar.id}`;
            let mIndex = Number(appData.charImageSelect[mSaveKey] ?? 0);
            if(mIndex >= mAvailImgs.length) mIndex = 0;
            const mTargetImg = mAvailImgs[mIndex];

            maleHtml += `
            <div class="char-card-item selected" data-char-id="${mChar.id}" data-game-id="${gameInfo.id}">
                <div class="char-card-img-box ${mAvailImgs.length>1?'char-has-multi-img':''}">
                    ${mAvailImgs.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                    <img src="img/char/${mTargetImg.src}" alt="${mChar.name}">
                    ${mAvailImgs.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
                </div>
                <div class="char-card-name">${mChar.name}</div>
            </div>
            `;
        })

        html += `
        <div class="cp-layout-row">
            <div class="heroine-column" style="width:25%">
                <div class="char-card-item selected" data-char-id="${fChar.id}" data-game-id="${gameInfo.id}">
                    <div class="char-card-img-box ${fAvailImgs.length>1?'char-has-multi-img':''}">
                        ${fAvailImgs.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                        <img src="img/char/${fTargetImg.src}" alt="${fChar.name}">
                        ${fAvailImgs.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
                    </div>
                    <div class="char-card-name">${fChar.name}</div>
                </div>
            </div>
            <div class="hero-list-column" style="width:75%">
                <div class="char-card-wrapper">
                    ${maleHtml || "<span>未选择男主</span>"}
                </div>
            </div>
        </div>
        `;
    })
    return html || "<span>暂无CP搭配</span>";
}

// 过滤角色规则：单游戏开关优先级高于全局开关
export function getAllGameChar(gameInfo) {
    if(!gameInfo) return [];
    let chars = [...(gameInfo?.charList || [])];
    const gameItem = appData.gameList.find(g => g?.gameId === gameInfo.id);
    // 单游戏本地开关优先，全局仅作为初始批量设置
    const showHide = gameItem?.localHideChar;
    const showFD = gameItem?.localFD;
    if (!showHide) chars = chars.filter(c => c && !c.isHidden);
    if (!showFD) chars = chars.filter(c => c && !c.isFD);
    const female = chars.filter(c => c.gender === "female").sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
    const male = chars.filter(c => c.gender === "male").sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
    return [...female, ...male];
}
