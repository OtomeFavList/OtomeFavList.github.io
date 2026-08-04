// ===================== main.js 【数据层、公共工具函数】 =====================
// 🚨【新增游戏请在此数组添加编号！】请勿改动其他位置
const gameIdList = [
    "001","002","003","004"
    //新增游戏在这里追加,"002","003"
];

// 全局存储key
export const STORE_KEY = "otome-favlist-data";
export const SPOILER_DATE_KEY = "spoiler-confirm-date"; // 全局剧透确认日期
export const SPOILER_LOCAL_SWITCH_KEY = "local-switch-spoiler-date"; // 单机局部开关单日预警标记

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
let pendingGlobalSwitch = window.pendingGlobalSwitch;
export { pendingGlobalSwitch };

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
        if(Array.isArray(appData.gameList)){
            appData.gameList.forEach(g=>{
                if(typeof g.localHideChar !== "boolean") g.localHideChar = false;
                if(typeof g.localFD !== "boolean") g.localFD = false;
            })
        }
    } catch (e) {
        console.error("读取本地存储失败：", e);
    }
}

/**
 * 获取今日日期字符串 YYYY‑MM‑DD 用于跨零点判断
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
 * 判断今日局部单机开关是否已经确认过剧透
 * @returns {boolean}
 */
export function localSwitchIsConfirmedToday() {
    const saved = localStorage.getItem(SPOILER_LOCAL_SWITCH_KEY);
    return saved === getTodayDateStr();
}

/**
 * 标记今日单机局部开关已完成剧透确认
 */
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
        if(!imgUnit || !Array.isArray(imgUnit.srcList)) return false;
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


// ===================== 游戏模板加载模块 =====================
// ✅路径：/data/games/（已移除多余data文件夹）
export async function loadAllGameTemplates() {
    const basePath = "/data/games/";
    const tempList = [];

    for (const id of gameIdList) {
        try {
            const mod = await import(`${basePath}game${id}.js`);
            if (mod && mod.gameData) {
                tempList.push(mod.gameData);
            }else{
                console.warn(`game${id}.js 加载成功，但缺失 gameData 数据，数据格式异常`);
            }
        } catch (err) {
            console.error(`游戏文件 game${id}.js 加载异常`, err);
            continue;
        }
    }
    gameTemplateList = tempList;
}

/**
 * 同步游戏内全局开关状态（仅批量初始化，不锁死单游戏开关）
 * @param {string} type 开关类型 hideChar / fd
 * @param {boolean} status 开关布尔状态
 */
export function syncSingleGameSwitch(type, status) {
    if (!Array.isArray(appData.gameList)) return;
    appData.gameList.forEach(game => {
        if(!game) return;
        if (type === "hideChar") game.localHideChar = status;
        if (type === "fd") game.localFD = status;
    })
}


// ===================== 筛选下拉菜单填充函数 =====================
/**
 * 【修复】筛选下拉填充：保留HTML原生顶部placeholder option，只追加数据选项，不再覆盖HTML提示文字
 * @param {Array} gameList 游戏模板数组
 */
export function fillFilterOptions(gameList) {
    if (!Array.isArray(gameList) || gameList.length === 0) return;
    const yearSet = new Set(), pubSet = new Set(), cnSet = new Set(), writerSet = new Set(), artSet = new Set();
    gameList.forEach(g => {
        if(!g) return;
        yearSet.add(g.year);
        pubSet.add(g.publisher);
        cnSet.add(g.cnStudio);

        let writerArr = [];
        if(Array.isArray(g.writer)){
            writerArr = g.writer;
        }else if(typeof g.writer === "string" && g.writer.trim() !== ""){
            writerArr = [g.writer];
        }
        writerArr.forEach(name => writerSet.add(name));
        artSet.add(g.art);
    })

    /**
     * 内部辅助：填充单个select下拉框
     * @param {string} id dom id
     * @param {Set} dataSet 选项集合
     */
    const fillSelect = (id, dataSet) => {
        const sel = document.getElementById(id);
        if (!sel) return;
        // 保留HTML写好的第一个option（筛选编剧 / 筛选画师…），只追加后面数据项
        const firstOpt = sel.querySelector('option');
        sel.innerHTML = '';
        if(firstOpt) sel.appendChild(firstOpt);
        dataSet.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v;
            opt.textContent = v;
            sel.appendChild(opt);
        });
    }

    fillSelect("filter-writer", writerSet);
    fillSelect("filter-art", artSet);
    fillSelect("filter-year", yearSet);
    fillSelect("filter-publisher", pubSet);
    fillSelect("filter-cn", cnSet);
}


// ===================== HTML模板渲染函数 =====================
/**
 * 渲染游戏选择列表卡片模板
 * 布局：左侧封面，右侧竖排信息，移除名称旁发售年份
 * @param {Object} game 游戏模板对象
 * @returns {string} html字符串
 */
export function renderGameSelectItem(game) {
    if(!game) return "";
    return `
    <div class="game-option-item" data-game-id="${game.id}">
        <img src="${game.cover}" alt="${game.name || ''}">
        <div class="game-option-info">
            <div class="game-option-name">${game.name || ""}</div>
            <p>编剧：${Array.isArray(game.writer) ? game.writer.join("、") : game.writer || "无"}</p>
            <p>画师：${game.art || "无"}</p>
            <p>发售年份：${game.year || "无"}</p>
            <p>发行厂商：${game.publisher || "无"}</p>
            <p>汉化厂商：${game.cnStudio || "无"}</p>
        </div>
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
        const availableImgUnits = getAvailableCharImages(char, globalHide, globalFD, localHide, localFD);
        if (availableImgUnits.length === 0) return;

        let allSrc = [];
        availableImgUnits.forEach(u => allSrc.push(...u.srcList));
        if(allSrc.length === 0) return;

        const saveKey = `${gameInfo.id}-${char.id}`;
        let imgIndex = Number(appData.charImageSelect[saveKey] ?? 0);
        if(imgIndex >= allSrc.length) imgIndex = 0;
        const targetSrc = allSrc[imgIndex];

        html += `
        <div class="char-card-item selected" data-char-id="${char.id}" data-game-id="${gameInfo.id}" data-total-img="${allSrc.length}">
            <div class="char-card-img-box ${allSrc.length>1?'char-has-multi-img':''}">
                ${allSrc.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                <img src="${targetSrc}" alt="${char.name || ''}">
                ${allSrc.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
            </div>
            <div class="char-card-name">${char.name || ""}</div>
        </div>
        `;
    })
    return html || "<span>暂无选择角色</span>";
}

/**
 * 渲染CP【严格25%｜75%布局｜适配srcList】
 * @param {Object} gameItem 当前已添加游戏条目
 * @param {Object} gameInfo 游戏模板对象
 * @returns {string} html字符串
 */
export function renderCP(gameItem, gameInfo) {
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
        const fAvailUnits = getAvailableCharImages(fChar, globalHide, globalFD, localHide, localFD);
        let fAllSrc = [];
        fAvailUnits.forEach(u=>fAllSrc.push(...u.srcList));
        if (fAllSrc.length === 0) return;

        const fSaveKey = `${gameInfo.id}-${fChar.id}`;
        let fIndex = Number(appData.charImageSelect[fSaveKey] ?? 0);
        if(fIndex >= fAllSrc.length) fIndex = 0;
        const fTargetSrc = fAllSrc[fIndex];

        let maleHtml = "";
        if(!Array.isArray(cp.maleIds)) cp.maleIds = [];
        cp.maleIds?.forEach(mid => {
            const mChar = gameInfo.charList?.find(c => c.id === mid);
            if (!mChar) return;
            const mAvailUnits = getAvailableCharImages(mChar, globalHide, globalFD, localHide, localFD);
            let mAllSrc = [];
            mAvailUnits.forEach(u=>mAllSrc.push(...u.srcList));
            if (mAllSrc.length === 0) return;

            const mSaveKey = `${gameInfo.id}-${mChar.id}`;
            let mIndex = Number(appData.charImageSelect[mSaveKey] ?? 0);
            if(mIndex >= mAllSrc.length) mIndex = 0;
            const mTargetSrc = mAllSrc[mIndex];

            maleHtml += `
            <div class="char-card-item selected" data-char-id="${mChar.id}" data-game-id="${mChar.id}" data-total-img="${mAllSrc.length}">
                <div class="char-card-img-box ${mAllSrc.length>1?'char-has-multi-img':''}">
                    ${mAllSrc.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                    <img src="${mTargetSrc}" alt="${mChar.name || ''}">
                    ${mAllSrc.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
                </div>
                <div class="char-card-name">${mChar.name || ""}</div>
            </div>
            `;
        })

        html += `
        <div class="cp-layout-row" style="display:flex;gap:16px;">
            <div class="heroine-column" style="width:25%">
                <div class="char-card-item selected" data-char-id="${fChar.id}" data-game-id="${gameInfo.id}" data-total-img="${fAllSrc.length}">
                    <div class="char-card-img-box ${fAllSrc.length>1?'char-has-multi-img':''}">
                        ${fAllSrc.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                        <img src="${fTargetSrc}" alt="${fChar.name || ''}">
                        ${fAllSrc.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
                    </div>
                    <div class="char-card-name">${fChar.name || ""}</div>
                </div>
            </div>
            <div class="hero-list-column" style="width:75%">
                <div class="char-card-wrapper" style="display:flex;flex-wrap:wrap;gap:8px;">
                    ${maleHtml || "<span>未选择男主</span>"}
                </div>
            </div>
        </div>
        `;
    })
    return html || "<span>暂无CP搭配</span>";
}

/**
 * 过滤角色规则：全局开关 || 单游戏开关，任一开启即可展示
 * @param {Object} gameInfo 游戏模板对象
 * @returns {Array} 过滤完成角色数组，女主在前，男主在后
 */
export function getAllGameChar(gameInfo) {
    if(!gameInfo) return [];
    let chars = [...(gameInfo?.charList || [])];
    const gameItem = appData.gameList.find(g => g?.gameId === gameInfo.id);

    const showHide = appData.globalHideChar || gameItem?.localHideChar;
    const showFD = appData.globalFD || gameItem?.localFD;

    if (!showHide) chars = chars.filter(c => c && !c.isHidden);
    if (!showFD) chars = chars.filter(c => c && !c.isFD);

    const female = chars.filter(c => c.gender === "female").sort((a, b) => a.name.localeCompare(b.name, "zh‑CN"));
    const male = chars.filter(c => c.gender === "male").sort((a, b) => a.name.localeCompare(b.name, "zh‑CN"));
    return [...female, ...male];
}


// ===================== 页面启动入口模块 =====================
import { initPage } from "./script.js";

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
        renderSelectedChar,
        renderCP,
        getAllGameChar,
        getAvailableCharImages,
        isTodayConfirmed,
        saveConfirmDate,
        localSwitchIsConfirmedToday,
        saveLocalSwitchConfirmDate,
        renderGameSelectItem,
        bindDynamicGameCardSwitchEvents // 导出给script.js调用
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
    if(hideCharInput) hideCharInput.checked = !!appData.globalHideChar;
    if(fdInput) fdInput.checked = !!appData.globalFD;
}

/**
 * 【渲染当前编辑游戏的局部开关DOM状态】
 * @param {Object} gameItem 当前正在编辑的游戏条目
 */
export function renderLocalSwitchDom(gameItem){
    const localHideEl = document.getElementById("local-show-secret");
    const localFDEl = document.getElementById("local-show-fd");
    if(!gameItem) return;
    if(localHideEl) localHideEl.checked = !!gameItem.localHideChar;
    if(localFDEl) localFDEl.checked = !!gameItem.localFD;
}

/**
 * 事件委托：处理动态渲染游戏卡片内部开关（.game‑hide‑char / .game‑fd‑switch）
 * 改为click委托，不再监听change；导出，由script.js渲染完列表后调用
 */
export function bindDynamicGameCardSwitchEvents(){
    const wrap = document.querySelector(".wrap");
    const spoilerModal = document.getElementById("spoiler-modal");
    if(!wrap || !spoilerModal){
        console.warn("bindDynamicGameCardSwitchEvents：wrap或modal不存在，跳过绑定");
        return;
    }
    // 移除旧监听，防止重复绑定
    wrap.removeEventListener("click", wrapClickHandler);
    wrap.addEventListener("click", wrapClickHandler);
}

function wrapClickHandler(e){
    const spoilerModal = document.getElementById("spoiler-modal");
    if(!spoilerModal) return;
    const targetInput = e.target.closest(".game-hide-char,.game-fd-switch");
    if(!targetInput) return;

    const idx = Number(targetInput.dataset.gameidx);
    const gameItem = appData.gameList[idx];
    if(!gameItem) return;

    // 已经勾选：用户要关闭，直接生效，不弹窗
    if(targetInput.checked === true){
        if(targetInput.classList.contains("game-hide-char")){
            gameItem.localHideChar = false;
        }else{
            gameItem.localFD = false;
        }
        saveData();
        return;
    }

    // 用户想要打开：阻止原生勾选，弹出剧透弹窗，等待确认按钮
    e.preventDefault();
    if(targetInput.classList.contains("game-hide-char")){
        window.pendingGameOp = { type:"hideChar", idx };
    }else{
        window.pendingGameOp = { type:"fd", idx };
    }
    spoilerModal.classList.add("active");
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

    if(!hideCharInput || !fdInput || !spoilerModal || !spoilerConfirmBtn || !spoilerCancelBtn){
        console.warn("bindGlobalSwitchSpoilerEvents：部分DOM缺失，全局开关弹窗未挂载");
        return;
    }

    // 获取包裹input的label元素
    const labelHideChar = hideCharInput.closest("label.switch");
    const labelFD = fdInput.closest("label.switch");

    // --------全局隐藏角色开关 使用label click，阻止默认行为--------
    labelHideChar.addEventListener("click", function(e){
        e.preventDefault(); // 禁止浏览器原生切换checkbox！全部交给JS控制
        // 当前实际状态
        const currentVal = appData.globalHideChar;
        if(currentVal === true){
            // 用户要关闭
            appData.globalHideChar = false;
            saveData();
            renderGlobalSwitchDom();
            return;
        }
        // 用户想要打开：不修改勾选，弹出弹窗
        pendingGlobalSwitch = "hideChar";
        window.pendingGlobalSwitch = pendingGlobalSwitch;
        spoilerModal.classList.add("active");
    });

    // --------全局FD开关--------
    labelFD.addEventListener("click", function(e){
        e.preventDefault();
        const currentVal = appData.globalFD;
        if(currentVal === true){
            // 用户要关闭
            appData.globalFD = false;
            saveData();
            renderGlobalSwitchDom();
            return;
        }
        pendingGlobalSwitch = "fdGame";
        window.pendingGlobalSwitch = pendingGlobalSwitch;
        spoilerModal.classList.add("active");
    });


    // 弹窗确认【扩展：同时处理全局 / 编辑弹窗局部 / 动态卡片局部】
    spoilerConfirmBtn.onclick = null;
    spoilerConfirmBtn.addEventListener("click", function(){
        // 优先处理动态游戏卡片操作
        if(window.pendingGameOp){
            const op = window.pendingGameOp;
            const g = appData.gameList[op.idx];
            if(g){
                if(op.type === "hideChar") g.localHideChar = true;
                if(op.type === "fd") g.localFD = true;
            }
            window.pendingGameOp = null;
            saveData();
            spoilerModal.classList.remove("active");
            pendingGlobalSwitch = null;
            window.pendingGlobalSwitch = null;
            return;
        }

        if(!pendingGlobalSwitch){
            spoilerModal.classList.remove("active");
            pendingGlobalSwitch = null;
            window.pendingGlobalSwitch = null;
            return;
        }
        if(pendingGlobalSwitch === "hideChar"){
            appData.globalHideChar = true;
            saveData();
            renderGlobalSwitchDom();
        }else if(pendingGlobalSwitch === "fdGame"){
            appData.globalFD = true;
            saveData();
            renderGlobalSwitchDom();
        }else if(pendingGlobalSwitch === "localHide"){
            const gameItem = appData.gameList.find(g=>g.gameId === currentEditGameId);
            if(gameItem){
                gameItem.localHideChar = true;
                saveData();
                renderLocalSwitchDom(gameItem);
            }
        }else if(pendingGlobalSwitch === "localFD"){
            const gameItem = appData.gameList.find(g=>g.gameId === currentEditGameId);
            if(gameItem){
                gameItem.localFD = true;
                saveData();
                renderLocalSwitchDom(gameItem);
            }
        }
        spoilerModal.classList.remove("active");
        pendingGlobalSwitch = null;
        window.pendingGlobalSwitch = null;
        window.pendingGameOp = null;
    });

    // 弹窗取消：关闭弹窗，清空全部待处理标记，**不修改任何开关状态**
    spoilerCancelBtn.onclick = null;
    spoilerCancelBtn.addEventListener("click", function(){
        spoilerModal.classList.remove("active");
        pendingGlobalSwitch = null;
        window.pendingGlobalSwitch = null;
        window.pendingGameOp = null;
    });
}


/**
 * 【绑定游戏弹窗内部局部开关事件】
 * local‑show‑secret / local‑show‑fd
 */
function bindLocalGameSwitchEvents(){
    const localHideEl = document.getElementById("local-show-secret");
    const localFDEl = document.getElementById("local-show-fd");
    const spoilerModal = document.getElementById("spoiler-modal");
    if(!localHideEl || !localFDEl || !spoilerModal){
        console.warn("bindLocalGameSwitchEvents：局部开关DOM缺失");
        return;
    }

    localHideEl.addEventListener("change", function(){
        const gameItem = appData.gameList.find(g=>g.gameId === currentEditGameId);
        if(!gameItem) return;
        if(this.checked === false){
            gameItem.localHideChar = false;
            saveData();
            renderLocalSwitchDom(gameItem);
            return;
        }
        this.checked = false;
        pendingGlobalSwitch = "localHide";
        window.pendingGlobalSwitch = pendingGlobalSwitch;
        spoilerModal.classList.add("active");
    });

    localFDEl.addEventListener("change", function(){
        const gameItem = appData.gameList.find(g=>g.gameId === currentEditGameId);
        if(!gameItem) return;
        if(this.checked === false){
            gameItem.localFD = false;
            saveData();
            renderLocalSwitchDom(gameItem);
            return;
        }
        this.checked = false;
        pendingGlobalSwitch = "localFD";
        window.pendingGlobalSwitch = pendingGlobalSwitch;
        spoilerModal.classList.add("active");
    });
}


/**
 * 对外暴露启动入口，供index.html调用
 */
export async function bootstrapCore() {
    // 1.读取本地存储数据
    loadData();
    // 2.加载全部游戏模板数据
    await loadAllGameTemplates();
    // 3.组装核心上下文对象，传给UI层script.js
    const Core = buildCoreContext();
    initPage(Core);

    // 4.渲染全局开关初始勾选状态
    renderGlobalSwitchDom();
    // 5.绑定全局开关+剧透弹窗事件（确认+取消双按钮）
    bindGlobalSwitchSpoilerEvents();
    // 6.绑定游戏弹窗内局部开关事件
    bindLocalGameSwitchEvents();
    // ⚠️移除这里bindDynamicGameCardSwitchEvents()调用，放到script.js渲染完列表后执行
}
