// 全局存储key
const STORE_KEY = "otome-favlist-data";
const SPOILER_DATE_KEY = "spoiler-confirm-date"; // 全局剧透确认日期
const SPOILER_LOCAL_SWITCH_KEY = "local-switch-spoiler-date"; // 单机局部开关单日预警标记
let appData = {
    globalHideChar: false,
    globalFD: false,
    gameSpoilerRecord: {},
    baseInfo: { nick: "", count: "", story: "", firstgame: "" },
    gameList: [],
    exportColor: { bg: "#fff7f9", title: "#b33a3a", text: "#c98fac", border: "#f6a5b8" },
    charImageSelect: {} // 持久存储角色选中立绘索引 key:"gameId-charId"
};
// 兜底：游戏数据模块加载失败时赋值空数组，彻底解决undefined报错
let gameTemplateList = [];

// 角色弹窗全局变量
let currentEditGameId = null;
let charPoolMode = "char"; // char = 单选角色, cp = CP搭配

// 本地存储读写
function saveData() {
    localStorage.setItem(STORE_KEY, JSON.stringify(appData));
}
function loadData() {
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) appData = JSON.parse(raw);
    } catch (e) {
        console.error("读取本地存储失败：", e);
    }
}
// 获取今日日期字符串 YYYY-MM-DD 用于跨零点判断
function getTodayDateStr() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
// 判断今天是否已经确认过【全局】剧透
function isTodayConfirmed() {
    const savedDate = localStorage.getItem(SPOILER_DATE_KEY);
    return savedDate === getTodayDateStr();
}
// 保存今日【全局】确认标记到本地
function saveConfirmDate() {
    localStorage.setItem(SPOILER_DATE_KEY, getTodayDateStr());
}
// 判断今日局部单机开关是否已经确认过剧透
function localSwitchIsConfirmedToday() {
    const saved = localStorage.getItem(SPOILER_LOCAL_SWITCH_KEY);
    return saved === getTodayDateStr();
}
// 标记今日单机局部开关已完成剧透确认
function saveLocalSwitchConfirmDate() {
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
function getAvailableCharImages(char, globalHideSwitch, globalFDSwitch, localHideSwitch, localFDSwitch) {
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
async function loadAllGameTemplates() {
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
function syncSingleGameSwitch(type, status) {
    if (!Array.isArray(appData.gameList)) return;
    appData.gameList.forEach(game => {
        if(!game) return;
        if (type === "hideChar") game.localHideChar = status;
        if (type === "fd") game.localFD = status;
    })
}

// 筛选下拉填充
function fillFilterOptions(gameList) {
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
function renderSelectedChar(gameItem, gameInfo) {
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
function renderCP(gameItem, gameInfo) {
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
function getAllGameChar(gameInfo) {
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

// 渲染角色选择弹窗内容【核心修改：加入左右箭头按钮DOM】
function renderCharSelectModal(gameId) {
    const gameInfo = gameTemplateList.find(g => g.id === gameId);
    const gameItem = appData.gameList.find(g => g?.gameId === gameId);
    if (!gameInfo || !gameItem) return;

    document.getElementById("modal-game-title").innerText = gameInfo.name;
    document.getElementById("local-show-secret").checked = !!gameItem.localHideChar;
    document.getElementById("local-show-fd").checked = !!gameItem.localFD;

    const allChars = getAllGameChar(gameInfo);
    const femaleChars = allChars.filter(c => c.gender === "female");
    const maleChars = allChars.filter(c => c.gender === "male");

    // 渲染女主区域
    let femHtml = "";
    femaleChars.forEach(char => {
        const imgs = getAvailableCharImages(char, appData.globalHideChar, appData.globalFD, gameItem.localHideChar, gameItem.localFD);
        if(imgs.length === 0) return;
        const selected = gameItem.selectChars?.includes(char.id) ? "selected" : "";
        femHtml += `
        <label class="char-card-item ${selected}" data-cid="${char.id}" data-char-id="${char.id}" data-game-id="${gameId}">
            <div class="char-card-img-box ${imgs.length>1?'char-has-multi-img':''}">
                ${imgs.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                <img src="img/char/${imgs[0].src}" alt="${char.name}">
                ${imgs.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
            </div>
            <div class="char-card-name">${char.name}</div>
        </label>`;
    });
    document.getElementById("heroine-box").innerHTML = femHtml;

    // 男性角色区域
    let maleHtml = "";
    maleChars.forEach(char => {
        const imgs = getAvailableCharImages(char, appData.globalHideChar, appData.globalFD, gameItem.localHideChar, gameItem.localFD);
        if(imgs.length === 0) return;
        const selected = gameItem.selectChars?.includes(char.id) ? "selected" : "";
        maleHtml += `
        <label class="char-card-item ${selected}" data-cid="${char.id}" data-char-id="${char.id}" data-game-id="${gameId}">
            <div class="char-card-img-box ${imgs.length>1?'char-has-multi-img':''}">
                ${imgs.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                <img src="img/char/${imgs[0].src}" alt="${char.name}">
                ${imgs.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
            </div>
            <div class="char-card-name">${char.name}</div>
        </label>`;
    });
    document.getElementById("hero-list-box").innerHTML = maleHtml;

    // 绑定弹窗内角色卡片勾选点击
    document.querySelectorAll("#char-select-modal .char-card-item").forEach(item => {
        item.onclick = function(e){
            // 如果点击切换箭头，阻止勾选角色
            if(e.target.classList.contains("char-switch-btn")) return;
            const cid = this.dataset.cid;
            if(!Array.isArray(gameItem.selectChars)) gameItem.selectChars = [];
            const idx = gameItem.selectChars.indexOf(cid);
            if(idx > -1){
                gameItem.selectChars.splice(idx,1);
                this.classList.remove("selected");
            }else{
                gameItem.selectChars.push(cid);
                this.classList.add("selected");
            }
            saveData();
        }
    })
}

// 打开角色弹窗
function openCharSelectModal(gameId){
    currentEditGameId = gameId;
    const modal = document.getElementById("char-select-modal");
    modal.classList.add("active");
    renderCharSelectModal(gameId);
}
// 关闭角色弹窗
function closeCharSelectModal(){
    const modal = document.getElementById("char-select-modal");
    modal.classList.remove("active");
    currentEditGameId = null;
}

// 页面所有DOM、事件、渲染逻辑全部放在onload内部
window.onload = async function () {
    // 预加载所有游戏数据
    await loadAllGameTemplates();

    // 1. 页面加载完成再获取所有DOM元素
    const el = {
        globalHideChar: document.getElementById("global-hide-char"),
        globalFD: document.getElementById("global-fd-game"),
        spoilerModal: document.getElementById("spoiler-modal"),
        spoilerConfirm: document.getElementById("spoiler-confirm"),
        addGameBtn: document.getElementById("btn-add-game"),
        searchPanel: document.getElementById("search-panel"),
        gameSearchInput: document.getElementById("game-search-input"),
        gameSelectList: document.getElementById("game-select-list"),
        addedGameBox: document.getElementById("added-game-container"),
        inputNick: document.getElementById("input-nick"),
        inputCount: document.getElementById("input-count"),
        inputStory: document.getElementById("input-story"),
        inputFirstgame: document.getElementById("input-firstgame"),
        colorBg: document.getElementById("color-bg"),
        colorTitle: document.getElementById("color-title"),
        colorText: document.getElementById("color-text"),
        colorBorder: document.getElementById("color-border"),
        exportBtn: document.getElementById("btn-export"),
        canvas: document.getElementById("export-canvas"),
        snapshotContainer: document.getElementById("snapshot-container"),
        // 角色选择弹窗DOM
        charSelectModal: document.getElementById("char-select-modal"),
        modalCloseBtn: document.querySelector(".modal-close-btn"),
        modalCancelBtn: document.getElementById("modal-cancel-btn"),
        modalConfirmBtn: document.getElementById("modal-confirm-btn"),
        localShowSecret: document.getElementById("local-show-secret"),
        localShowFD: document.getElementById("local-show-fd")
    };

    let modalOpen = false;
    let modalTargetType = ""; // 标记弹窗是哪个开关：hideChar / fd / localHide / localFD

    // ==========【全局事件委托：角色立绘左右切换 统一处理】==========
    document.addEventListener("click", function(e){
        const switchBtn = e.target.closest(".char-switch-btn");
        if(!switchBtn) return;
        e.stopPropagation();
        const charCard = switchBtn.closest(".char-card-item");
        const charId = charCard.dataset.charId;
        const gameId = charCard.dataset.gameId;
        const gameInfo = gameTemplateList.find(g => g.id === gameId);
        if(!gameInfo) return;
        const char = gameInfo.charList.find(c => c.id === charId);
        if(!char) return;
        const gameItem = appData.gameList.find(g => g.gameId === gameId);
        if(!gameItem) return;

        const availImgs = getAvailableCharImages(
            char,
            appData.globalHideChar,
            appData.globalFD,
            gameItem.localHideChar,
            gameItem.localFD
        );
        if (availImgs.length <= 1) return;

        const imgDom = charCard.querySelector(".char-card-img-box img");
        const saveKey = `${gameId}-${charId}`;
        let currentIndex = Number(appData.charImageSelect[saveKey] ?? 0);

        if(switchBtn.classList.contains("char-switch-next")){
            currentIndex++;
            if(currentIndex >= availImgs.length) currentIndex = 0;
        }else{
            currentIndex--;
            if(currentIndex < 0) currentIndex = availImgs.length -1;
        }

        // 更新图片 + 持久存储索引
        imgDom.src = `img/char/${availImgs[currentIndex].src}`;
        appData.charImageSelect[saveKey] = currentIndex;
        saveData();
    });

    // 复选框刷新清除残留
    function refreshHideCharSwitch() {
        if (el.globalHideChar) {
            el.globalHideChar.checked = appData.globalHideChar;
            el.globalHideChar.indeterminate = false;
        }
    }
    function refreshFDSwitch() {
        if (el.globalFD) {
            el.globalFD.checked = appData.globalFD;
            el.globalFD.indeterminate = false;
        }
    }

    // ========== 弹窗统一控制函数 ==========
    function openSpoilerModal(type) {
        console.log("执行打开弹窗", type);
        if (!el.spoilerModal) {
            console.error("严重错误：页面不存在ID=spoiler-modal的弹窗DOM！HTML缺失弹窗");
            alert("页面缺少剧透弹窗容器，请检查HTML");
            return;
        }
        modalOpen = true;
        modalTargetType = type;
        el.spoilerModal.classList.add("active");
    }
    function closeSpoilerModal() {
        if (!el.spoilerModal) return;
        modalOpen = false;
        el.spoilerModal.classList.remove("active");
        modalTargetType = "";
    }

    // 加载本地存储
    loadData();
    // 回填表单值
    if (el.inputNick) el.inputNick.value = appData.baseInfo.nick;
    if (el.inputCount) el.inputCount.value = appData.baseInfo.count;
    if (el.inputStory) el.inputStory.value = appData.baseInfo.story;
    if (el.inputFirstgame) el.inputFirstgame.value = appData.baseInfo.firstgame;
    if (el.colorBg) el.colorBg.value = appData.exportColor.bg;
    if (el.colorTitle) el.colorTitle.value = appData.exportColor.title;
    if (el.colorText) el.colorText.value = appData.exportColor.text;
    if (el.colorBorder) el.colorBorder.value = appData.exportColor.border;
    if(el.colorBg) document.body.style.background = appData.exportColor.bg;
    refreshHideCharSwitch();
    refreshFDSwitch();

    // 填充筛选下拉选项
    fillFilterOptions(gameTemplateList);

    // 弹窗唯一确认按钮绑定
    if (el.spoilerConfirm) {
        el.spoilerConfirm.onclick = () => {
            if(modalTargetType === "hideChar"){
                saveConfirmDate();
                appData.globalHideChar = true;
                syncSingleGameSwitch("hideChar", true);
                refreshHideCharSwitch();
            }else if(modalTargetType === "fd"){
                saveConfirmDate();
                appData.globalFD = true;
                syncSingleGameSwitch("fd", true);
                refreshFDSwitch();
            }else if(modalTargetType === "localHide"){
                saveLocalSwitchConfirmDate();
                const triggerSwitch = document.querySelector(`.local-hide-char.modal-trigger`);
                if(triggerSwitch){
                    const gid = triggerSwitch.dataset.gid;
                    const targetGame = appData.gameList.find(g=>g.gameId === gid);
                    if(targetGame) targetGame.localHideChar = true;
                }
            }else if(modalTargetType === "localFD"){
                saveLocalSwitchConfirmDate();
                const triggerSwitch = document.querySelector(`.local-fd.modal-trigger`);
                if(triggerSwitch){
                    const gid = triggerSwitch.dataset.gid;
                    const targetGame = appData.gameList.find(g=>g.gameId === gid);
                    if(targetGame) targetGame.localFD = true;
                }
            }
            saveData();
            renderAddedGame();
            closeSpoilerModal();
        }
    }
    
    // ============【全局隐藏角色开关】 ============
    if (el.globalHideChar) {
        el.globalHideChar.addEventListener('change', function() {
            const newStatus = this.checked;
            // 关闭开关：直接生效，无弹窗
            if (newStatus === false) {
                appData.globalHideChar = false;
                syncSingleGameSwitch("hideChar", false);
                saveData();
                renderAddedGame();
                return;
            }
            // 打开开关逻辑
            if(isTodayConfirmed()){
                appData.globalHideChar = true;
                syncSingleGameSwitch("hideChar", true);
                saveData();
                renderAddedGame();
            }else{
                this.checked = false;
                refreshHideCharSwitch();
                if(modalOpen) return;
                openSpoilerModal("hideChar");
            }
        })
    }
    
    // ============【全局FD/续作开关｜已开启剧透预警，和隐藏角色规则一致】 ============
    if (el.globalFD) {
        el.globalFD.addEventListener('change', function() {
            const newStatus = this.checked;
            // 关闭开关：直接生效，无弹窗
            if (newStatus === false) {
                appData.globalFD = false;
                syncSingleGameSwitch("fd", false);
                saveData();
                renderAddedGame();
                return;
            }
            // 打开开关触发剧透弹窗
            if(isTodayConfirmed()){
                appData.globalFD = true;
                syncSingleGameSwitch("fd", true);
                saveData();
                renderAddedGame();
            }else{
                this.checked = false;
                refreshFDSwitch();
                if(modalOpen) return;
                openSpoilerModal("fd");
            }
        })
    }
    
    // 基础资料输入框绑定
    ["inputNick", "inputCount", "inputStory", "inputFirstgame"].forEach(k => {
        const dom = el[k];
        if (dom) {
            dom.oninput = function () {
                const map = { inputNick: "nick", inputCount: "count", inputStory: "story", inputFirstgame: "firstgame" };
                appData.baseInfo[map[k]] = this.value;
                saveData();
            }
        }
    })

    // 配色取色器绑定
    ["colorBg", "colorTitle", "colorText", "colorBorder"].forEach(k => {
        const dom = el[k];
        if (dom) {
            dom.oninput = function () {
                const map = { colorBg: "bg", colorTitle: "title", colorText: "text", colorBorder: "border" };
                appData.exportColor[map[k]] = this.value;
                saveData();
                if(el.colorBg) document.body.style.background = appData.exportColor.bg;
            }
        }
    })

    // ✅修复3：加固【添加游戏按钮】事件绑定，消除点击失效隐患
    if(el.addGameBtn){
        el.addGameBtn.removeEventListener("click", null);
        el.addGameBtn.onclick = function(){
            renderGameSelectList();
            el.searchPanel.classList.remove("hide-block");
        }
    }
    // 搜索框输入实时刷新列表
    if(el.gameSearchInput){
        el.gameSearchInput.addEventListener("input", renderGameSelectList);
    }
    // 筛选下拉变更刷新列表
    const filterSelectIds = ["filter-year","filter-publisher","filter-cn","filter-writer","filter-art"];
    filterSelectIds.forEach(selId=>{
        const sel = document.getElementById(selId);
        if(sel) sel.addEventListener("change", renderGameSelectList);
    });

    // 游戏列表渲染函数
    function renderGameSelectList() {
        if (!el.gameSearchInput || !el.gameSelectList || !Array.isArray(gameTemplateList)) return;
        const keyword = el.gameSearchInput.value.toLowerCase();
        const filterYear = document.getElementById("filter-year")?.value || "";
        const filterPub = document.getElementById("filter-publisher")?.value || "";
        const filterCn = document.getElementById("filter-cn")?.value || "";
        const filterWriter = document.getElementById("filter-writer")?.value || "";
        const filterArt = document.getElementById("filter-art")?.value || "";
        const sortedGames = [...gameTemplateList].sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
        let html = "";
        sortedGames.forEach(game => {
            if(!game) return;
            let match = true;
            if (keyword && !game.name?.toLowerCase().includes(keyword)) match = false;
            if (filterYear && game.year != filterYear) match = false;
            if (filterPub && game.publisher != filterPub) match = false;
            if (filterCn && game.cnStudio != filterCn) match = false;
            if (filterWriter && game.writer != filterWriter) match = false;
            if (filterArt && game.art != filterArt) match = false;
            if (!match) return;
            const coverSrc = game.cover || "";
            html += `
            <div class="game-option-item" data-game-id="${game.id}">
                <img src="img/game/${coverSrc}" alt="${game.name}">
                <div>${game.name}</div>
                <div style="font-size:12px;color:#777">${game.year}</div>
            </div>
            `;
        })
        el.gameSelectList.innerHTML = html;
        document.querySelectorAll(".game-option-item").forEach(item => {
            item.onclick = () => {
                const gid = item.dataset.gameId;
                const targetGame = gameTemplateList.find(g => g.id === gid);
                if (!targetGame) return alert("游戏数据加载异常");
                const exist = appData.gameList.find(g => g.gameId === gid);
                if (exist) return alert("该游戏已添加！");
                const newGameData = {
                    gameId: gid,
                    fold: false,
                    expand: false,
                    localHideChar: false,
                    localFD: false,
                    loveRate: 0,
                    selectChars: [],
                    cpList: []
                };
                appData.gameList.push(newGameData);
                saveData();
                if(el.searchPanel) el.searchPanel.classList.add("hide-block");
                renderAddedGame();
            }
        })
    }

    // 渲染已添加游戏卡片
    function renderAddedGame() {
        if (!el.addedGameBox) return;
        if (!Array.isArray(gameTemplateList) || gameTemplateList.length === 0) {
            el.addedGameBox.innerHTML = "<p>⚠️ 游戏数据加载失败，文件路径错误/404</p>";
            return;
        }
        document.querySelectorAll(".modal-trigger").forEach(dom => dom.classList.remove("modal-trigger"));

        let html = "";
        appData.gameList.forEach(gameItem => {
            if(!gameItem) return;
            const gameInfo = gameTemplateList.find(g => g.id === gameItem.gameId);
            if (!gameInfo) return;
            let heartHtml = "";
            for (let i = 1; i <= 5; i++) heartHtml += `<span class="heart ${gameItem.loveRate >= i ? 'active' : ''}" data-val="${i}">♥</span>`;
            
            const coverImgSrc = gameInfo.cover ? `img/game/${gameInfo.cover}` : "";

            html += `
            <div class="added-game-card" data-game-id="${gameItem.gameId}">
                <div class="game-card-header">
                    <span class="game-card-title">${gameInfo.name}</span>
                    <div class="game-card-switch-group">
                        <button class="btn-fold fold-game" data-gid="${gameItem.gameId}">折叠板块</button>
                        <button class="btn-del del-game" data-gid="${gameItem.gameId}">删除游戏</button>
                    </div>
                </div>
                <div class="game-expand-detail ${gameItem.expand ? "open" : ""}">
                    <img class="game-expand-cover" src="${coverImgSrc}" alt="${gameInfo.name}封面">
                    <div class="game-info-text">
                        <p><strong>发售年份：</strong>${gameInfo.year || "暂无资料"}</p>
                        <p><strong>发行厂商：</strong>${gameInfo.publisher || "暂无资料"}</p>
                        <p><strong>原画：</strong>${gameInfo.art || "暂无资料"}</p>
                        <p><strong>编剧：</strong>${gameInfo.writer || "暂无资料"}</p>
                        <p><strong>简介：</strong>${gameInfo.desc || "暂无简介"}</p>
                    </div>
                </div>

                <div class="heart-rate" data-gid="${gameItem.gameId}">${heartHtml}</div>
                <div class="game-switch-group">
                    <label class="switch">
                        <input type="checkbox" class="local-hide-char" data-gid="${gameItem.gameId}" ${gameItem.localHideChar ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                    <span>单独显示本游戏隐藏角色</span>
                    <label class="switch">
                        <input type="checkbox" class="local-fd" data-gid="${gameItem.gameId}" ${gameItem.localFD ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                    <span>单独显示本游戏FD/续作角色</span>
                </div>
                <div class="char-section">
                    <button class="open-char-pool" data-gid="${gameItem.gameId}">选择角色 Character</button>
                    <div class="char-card-wrapper char-selected-row" data-gid="${gameItem.gameId}">${renderSelectedChar(gameItem, gameInfo)}</div>
                </div>
                <div class="cp-group">
                    <button class="open-cp-pool" data-gid="${gameItem.gameId}">搭配CP Couple</button>
                    <div class="cp-render-box" data-gid="${gameItem.gameId}">${renderCP(gameItem, gameInfo)}</div>
                </div>
            </div>
            `;
        })
        el.addedGameBox.innerHTML = html;
        bindGameCardEvent();
    }

    // 游戏卡片内按钮事件
    function bindGameCardEvent() {
        document.querySelectorAll(".fold-game").forEach(btn => {
            btn.onclick = () => {
                const gid = btn.dataset.gid;
                const gameItem = appData.gameList.find(g => g.gameId === gid);
                if (!gameItem) return;
                gameItem.fold = !gameItem.fold;
                saveData();
                renderAddedGame();
            }
        })
        document.querySelectorAll(".del-game").forEach(btn => {
            btn.onclick = () => {
                const gid = btn.dataset.gid;
                appData.gameList = appData.gameList.filter(g => g.gameId !== gid);
                saveData();
                renderAddedGame();
            }
        })
        document.querySelectorAll(".heart-rate").forEach(box => {
            const gid = box.dataset.gid;
            const gameItem = appData.gameList.find(g => g.gameId === gid);
            if (!gameItem) return;
            box.querySelectorAll(".heart").forEach(h => {
                h.onclick = () => {
                    gameItem.loveRate = Number(h.dataset.val);
                    saveData();
                    renderAddedGame();
                }
            })
        })
        document.querySelectorAll(".open-char-pool").forEach(btn=>{
            btn.onclick = function(){
                const gid = this.dataset.gid;
                charPoolMode = "char";
                openCharSelectModal(gid);
            }
        })
        document.querySelectorAll(".open-cp-pool").forEach(btn=>{
            btn.onclick = function(){
                const gid = this.dataset.gid;
                charPoolMode = "cp";
                openCharSelectModal(gid);
            }
        })
        // 单游戏隐藏角色开关
        document.querySelectorAll(".local-hide-char").forEach(sw => {
            sw.onchange = function () {
                const gid = this.dataset.gid;
                const gameItem = appData.gameList.find(g => g.gameId === gid);
                if (!gameItem) return;
                const targetStatus = this.checked;
                if (!targetStatus) {
                    gameItem.localHideChar = false;
                    saveData();
                    renderAddedGame();
                    return;
                }
                if(localSwitchIsConfirmedToday()){
                    gameItem.localHideChar = true;
                    saveData();
                    renderAddedGame();
                }else{
                    this.checked = false;
                    if (modalOpen) return;
                    this.classList.add("modal-trigger");
                    modalTargetType = "localHide";
                    openSpoilerModal("localHide");
                }
            }
        })
        // 单游戏FD开关【增加剧透弹窗逻辑，修复原缺失】
        document.querySelectorAll(".local-fd").forEach(sw => {
            sw.onchange = function () {
                const gid = this.dataset.gid;
                const gameItem = appData.gameList.find(g => g.gameId === gid);
                if (!gameItem) return;
                const targetStatus = this.checked;
                if (!targetStatus) {
                    gameItem.localFD = false;
                    saveData();
                    renderAddedGame();
                    return;
                }
                if(localSwitchIsConfirmedToday()){
                    gameItem.localFD = true;
                    saveData();
                    renderAddedGame();
                }else{
                    this.checked = false;
                    if (modalOpen) return;
                    this.classList.add("modal-trigger");
                    modalTargetType = "localFD";
                    openSpoilerModal("localFD");
                }
            }
        })
    }

    // 角色弹窗关闭按钮
    if(el.modalCloseBtn){
        el.modalCloseBtn.onclick = closeCharSelectModal;
    }
    if(el.modalCancelBtn){
        el.modalCancelBtn.onclick = closeCharSelectModal;
    }
    if(el.modalConfirmBtn){
        el.modalConfirmBtn.onclick = closeCharSelectModal;
    }

    // =====================【导出图片核心逻辑，适配html2canvas】=====================
    if(el.exportBtn && el.snapshotContainer){
        el.exportBtn.addEventListener('click', async () => {
            try {
                el.exportBtn.disabled = true;
                el.exportBtn.textContent = "正在生成图片...";

                el.snapshotContainer.classList.add('export-snapshot');

                let sizeValue = document.querySelector('input[name="export-size"]:checked').value;
                let targetWidth, targetHeight;
                if(sizeValue === 'long'){
                    targetWidth = 1080;
                    targetHeight = 0;
                }else{
                    const [w,h] = sizeValue.split(',').map(Number);
                    targetWidth = w;
                    targetHeight = h;
                }

                const bgColor = document.getElementById('color-bg').value;

                const renderCanvas = await html2canvas(el.snapshotContainer, {
                    backgroundColor: bgColor,
                    scale: 2,
                    useCORS: true,
                    logging: false
                });

                let finalCanvas;
                if(targetHeight === 0){
                    finalCanvas = renderCanvas;
                }else{
                    const canvas = document.getElementById('export-canvas');
                    canvas.width = targetWidth;
                    canvas.height = targetHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.fillStyle = bgColor;
                    ctx.fillRect(0,0,targetWidth,targetHeight);
                    const scale = Math.min(targetWidth / renderCanvas.width, targetHeight / renderCanvas.height);
                    const drawW = renderCanvas.width * scale;
                    const drawH = renderCanvas.height * scale;
                    const offsetX = (targetWidth - drawW) / 2;
                    const offsetY = (targetHeight - drawH) / 2;
                    ctx.drawImage(renderCanvas, offsetX, offsetY, drawW, drawH);
                    finalCanvas = canvas;
                }

                const link = document.createElement('a');
                link.download = `Otome_FavList_${new Date().getTime()}.png`;
                link.href = finalCanvas.toDataURL('image/png');
                link.click();
            } catch (err) {
                console.error("导出失败：", err);
                alert('图片导出异常！外部图片跨域可能导致失败，请使用本地图片资源。');
            } finally {
                el.snapshotContainer.classList.remove('export-snapshot');
                el.exportBtn.disabled = false;
                el.exportBtn.textContent = "生成并导出图片";
            }
        });
    }

    // 初始渲染
    renderAddedGame();
}
