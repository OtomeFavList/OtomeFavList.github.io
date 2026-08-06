// ===================== main.js 【数据层、公共工具函数】 =====================
// 🚨【新增游戏请在此数组添加编号！】请勿改动其他位置
const gameIdList = [
    "001","002","003","004","005","006","007","008","009","010","011"
    //新增游戏在这里追加,"002","003"
];

// 全局存储key
export const STORE_KEY = "otome-favlist-data";
export const SPOILER_DATE_KEY = "spoiler-confirm-date"; // 全局剧透确认日期

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
export let gameTemplateList = [];

// ===================== 角色编辑弹窗全局状态变量 =====================
export let currentEditGameId = null;
export let charPoolMode = "char";

// ===================== 剧透弹窗临时待处理标记 =====================
window.pendingGlobalSwitch = null;
window.pendingGameOp = null;


// =========模块顶层：事件处理函数==========
function wrapClickHandler(e){
    const spoilerModal = document.getElementById("spoiler-modal");
    if(!spoilerModal) return;

    const switchBtn = e.target.closest(".char-switch-prev,.char-switch-next");
    if(switchBtn){
        const cardEl = switchBtn.closest(".char-card-item");
        if(!cardEl) return;
        const gameId = cardEl.dataset.gameId;
        const charId = cardEl.dataset.charId;
        const totalImg = Number(cardEl.dataset.totalImg) || 1;
        const saveKey = `${gameId}-${charId}`;
        let currentIdx = Number(appData.charImageSelect[saveKey] ?? 0);
        if(switchBtn.classList.contains("char-switch-prev")){
            currentIdx = currentIdx - 1;
            if(currentIdx < 0) currentIdx = totalImg -1;
        }else{
            currentIdx = currentIdx +1;
            if(currentIdx >= totalImg) currentIdx = 0;
        }
        appData.charImageSelect[saveKey] = currentIdx;
        saveData();
        if(window.refreshGameCardUi) window.refreshGameCardUi();
        return;
    }

    const targetInput = e.target.closest(".game-hide-char,.game-fd-switch,.modal-local-hide-char,.modal-local-fd");
    if(!targetInput) return;

    let idx;
    let gameItem;
    if(targetInput.classList.contains("modal-local-hide-char") || targetInput.classList.contains("modal-local-fd")){
        gameItem = appData.gameList.find(g=>g.gameId === currentEditGameId);
        if(!gameItem) return;
        idx = appData.gameList.indexOf(gameItem);
    }else{
        idx = Number(targetInput.dataset.gameidx);
        gameItem = appData.gameList[idx];
        if(!gameItem) return;
    }

    if(targetInput.checked === true){
        if(targetInput.classList.contains("game-hide-char") || targetInput.classList.contains("modal-local-hide-char")){
            gameItem.localHideChar = false;
        }else{
            gameItem.localFD = false;
        }
        saveData();
        if(window.refreshGameCardUi) window.refreshGameCardUi();
        return;
    }

    e.preventDefault();
    if(targetInput.classList.contains("game-hide-char") || targetInput.classList.contains("modal-local-hide-char")){
        window.pendingGameOp = { type:"hideChar", idx };
    }else{
        window.pendingGameOp = { type:"fd", idx };
    }
    spoilerModal.classList.add("active");
}


// ===================== 本地存储读写工具函数 =====================
export function saveData() {
    localStorage.setItem(STORE_KEY, JSON.stringify(appData));
}

export function loadData() {
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) appData = JSON.parse(raw);
        if(Array.isArray(appData.gameList)){
            appData.gameList.forEach(g=>{
                if(typeof g.localHideChar !== "boolean") g.localHideChar = false;
                if(typeof g.localFD !== "boolean") g.localFD = false;
                if(typeof g.charPanelOpen !== "boolean") g.charPanelOpen = false;
                if(typeof g.cpPanelOpen !== "boolean") g.cpPanelOpen = false;
                if(typeof g.isFav !== "boolean") g.isFav = false;
                if(typeof g.loveRate !== "number") g.loveRate = 0;
            })
        }
    } catch (e) {
        console.error("读取本地存储失败：", e);
    }
}

export function getTodayDateStr() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export function isTodayConfirmed() {
    const savedDate = localStorage.getItem(SPOILER_DATE_KEY);
    return savedDate === getTodayDateStr();
}

export function saveConfirmDate() {
    localStorage.setItem(SPOILER_DATE_KEY, getTodayDateStr());
}


// ===================== 角色图片过滤工具函数 =====================
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
export async function loadAllGameTemplates() {
    const basePath = "./data/games/";
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

export function syncSingleGameSwitch(type, status) {
    console.warn("syncSingleGameSwitch 已废弃，请勿调用");
    return;
}


// ===================== 筛选下拉菜单填充函数 =====================
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

        let artArr = [];
        if(Array.isArray(g.art)){
            artArr = g.art;
        }else if(typeof g.art === "string" && g.art.trim() !== ""){
            artArr = [g.art];
        }
        artArr.forEach(name => artSet.add(name));
    })

    const fillSelect = (id, dataSet) => {
        const sel = document.getElementById(id);
        if (!sel) return;
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
export function renderGameSelectItem(game) {
    if(!game) return "";
    return `
    <div class="game-option-item" data-game-id="${game.id}">
        <img src="${game.cover}" alt="${game.name || ''}">
        <div class="game-option-info">
            <div class="game-option-name">${game.name || ""}</div>
            <p>编剧：${Array.isArray(game.writer) ? game.writer.join("、") : game.writer || "无"}</p>
            <p>画师：${Array.isArray(game.art) ? game.art.join("、") : game.art || "无"}</p>
            <p>发售年份：${game.year || "无"}</p>
            <p>发行厂商：${game.publisher || "无"}</p>
            <p>汉化厂商：${game.cnStudio || "无"}</p>
        </div>
    </div>
    `;
}

export function renderSelectedChar(gameItem, gameInfo) {
    if (!gameInfo?.charList || !gameItem) return `<div class="empty-hint">暂未添加角色</div>`;
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
    return html || `<div class="empty-hint">暂未添加角色</div>`;
}

export function renderCP(gameItem, gameInfo) {
    if (!gameInfo?.charList || !gameItem) return `<div class="empty-hint">暂未添加角色</div>`;
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
            <div class="char-card-item selected" data-char-id="${mChar.id}" data-game-id="${gameInfo.id}" data-total-img="${mAllSrc.length}">
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
        <div class="cp-layout-row">
            <div class="heroine-column">
                <div class="char-card-item selected" data-char-id="${fChar.id}" data-game-id="${gameInfo.id}" data-total-img="${fAllSrc.length}">
                    <div class="char-card-img-box ${fAllSrc.length>1?'char-has-multi-img':''}">
                        ${fAllSrc.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                        <img src="${fTargetSrc}" alt="${fChar.name || ''}">
                        ${fAllSrc.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
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
    })
    return html || `<div class="empty-hint">暂未添加角色</div>`;
}

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

export function renderLocalSwitchDom(gameItem, wrapDom = null) {
    const wrap = wrapDom ?? document.getElementById("modal-local-switch-wrap");
    if (!wrap) return;
    wrap.innerHTML = `
<label class="switch">
    <input type="checkbox" class="modal-local-hide-char" ${gameItem.localHideChar ? "checked" : ""}>
    <span class="slider"></span>
</label>
<span>本游戏显示隐藏角色</span>

<label class="switch">
    <input type="checkbox" class="modal-local-fd" ${gameItem.localFD ? "checked" : ""}>
    <span class="slider"></span>
</label>
<span>本游戏显示续作/FD角色</span>
`;
}

export function localSwitchIsConfirmedToday(){return false;}
export function saveLocalSwitchConfirmDate(){}

export function bindDynamicGameCardSwitchEvents(){
    const wrap = document.querySelector(".wrap");
    const spoilerModal = document.getElementById("spoiler-modal");
    if(!wrap || !spoilerModal){
        console.warn("bindDynamicGameCardSwitchEvents：wrap或modal不存在，跳过绑定");
        return;
    }
    wrap.removeEventListener("click", wrapClickHandler);
    wrap.addEventListener("click", wrapClickHandler);
}


// ===================== 页面启动入口模块 =====================
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
        bindDynamicGameCardSwitchEvents,
        renderLocalSwitchDom
    };
    return Core;
}

function renderGlobalSwitchDom() {
    const hideCharInput = document.getElementById("global-hide-char");
    const fdInput = document.getElementById("global-fd-game");
    if(hideCharInput) hideCharInput.checked = !!appData.globalHideChar;
    if(fdInput) fdInput.checked = !!appData.globalFD;
}

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

    const labelHideChar = hideCharInput.closest("label.switch");
    const labelFD = fdInput.closest("label.switch");

    labelHideChar.addEventListener("click", function(e){
        e.preventDefault();
        const currentVal = appData.globalHideChar;
        if(currentVal === true){
            appData.globalHideChar = false;
            saveData();
            renderGlobalSwitchDom();
            return;
        }
        window.pendingGlobalSwitch = "hideChar";
        spoilerModal.classList.add("active");
    });

    labelFD.addEventListener("click", function(e){
        e.preventDefault();
        const currentVal = appData.globalFD;
        if(currentVal === true){
            appData.globalFD = false;
            saveData();
            renderGlobalSwitchDom();
            return;
        }
        window.pendingGlobalSwitch = "fdGame";
        spoilerModal.classList.add("active");
    });

    spoilerConfirmBtn.onclick = null;
    spoilerConfirmBtn.addEventListener("click", function(){
        if(window.pendingGameOp){
            const op = window.pendingGameOp;
            const g = appData.gameList[op.idx];
            if(g){
                if(op.type === "hideChar") g.localHideChar = true;
                if(op.type === "fd") g.localFD = true;
            }
            saveData();
            window.pendingGameOp = null;
            window.pendingGlobalSwitch = null;
            spoilerModal.classList.remove("active");
            if(window.refreshGameCardUi) window.refreshGameCardUi();
            return;
        }

        if(!window.pendingGlobalSwitch){
            spoilerModal.classList.remove("active");
            window.pendingGlobalSwitch = null;
            window.pendingGameOp = null;
            return;
        }
        if(window.pendingGlobalSwitch === "hideChar"){
            appData.globalHideChar = true;
            saveData();
            renderGlobalSwitchDom();
        }else if(window.pendingGlobalSwitch === "fdGame"){
            appData.globalFD = true;
            saveData();
            renderGlobalSwitchDom();
        }
        spoilerModal.classList.remove("active");
        window.pendingGlobalSwitch = null;
        window.pendingGameOp = null;
    });

    spoilerCancelBtn.onclick = null;
    spoilerCancelBtn.addEventListener("click", function(){
        spoilerModal.classList.remove("active");
        window.pendingGlobalSwitch = null;
        window.pendingGameOp = null;
    });
}

// 只允许这一处导出bootstrapCore
export async function bootstrapCore() {
    loadData();
    await loadAllGameTemplates();
    const Core = buildCoreContext();

    const { initPage } = await import("./script.js");
    initPage(Core);

    renderGlobalSwitchDom();
    bindGlobalSwitchSpoilerEvents();
}
