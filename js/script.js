// ===================== script.js UI交互层 =====================
export function initPage(Core) {
    const {
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
        saveLocalSwitchConfirmDate
    } = Core;

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
        Core.currentEditGameId = gameId;
        const modal = document.getElementById("char-select-modal");
        modal.classList.add("active");
        renderCharSelectModal(gameId);
    }
    // 关闭角色弹窗
    function closeCharSelectModal(){
        const modal = document.getElementById("char-select-modal");
        modal.classList.remove("active");
        Core.currentEditGameId = null;
    }

    // 页面所有DOM、事件、渲染逻辑全部放在onload内部
    async function bootstrap() {
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
            cardBase: document.getElementById("card-base"),
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
                console.log("【添加游戏按钮触发】");
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
                    Core.charPoolMode = "char";
                    openCharSelectModal(gid);
                }
            })
            document.querySelectorAll(".open-cp-pool").forEach(btn=>{
                btn.onclick = function(){
                    const gid = this.dataset.gid;
                    Core.charPoolMode = "cp";
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

        // =====================【导出图片核心逻辑改造】=====================
        if(el.exportBtn && el.snapshotContainer){
            el.exportBtn.addEventListener('click', async () => {
                try {
                    el.exportBtn.disabled = true;
                    el.exportBtn.textContent = "正在生成图片...";

                    // 收集基础资料数据
                    const baseInfo = appData.baseInfo;
                    const infoArr = [
                        {el: el.inputNick, text: baseInfo.nick ? `昵称：${baseInfo.nick}` : null},
                        {el: el.inputCount, text: baseInfo.count !== "" ? `游玩总数：${baseInfo.count}` : null},
                        {el: el.inputStory, text: baseInfo.story ? `入坑时间：${baseInfo.story}` : null},
                        {el: el.inputFirstgame, text: baseInfo.firstgame ? `入坑作品：${baseInfo.firstgame}` : null}
                    ];

                    // 快照预处理：隐藏空项目，保存原始display状态，用于恢复
                    const hideElements = [];
                    infoArr.forEach(item=>{
                        if(item.el && !item.text){
                            hideElements.push(item.el);
                            item.el.style.display = "none";
                        }
                    });

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
                    // 恢复所有被隐藏的输入框
                    document.querySelectorAll("#card-base .form-row input").forEach(input=>{
                        input.style.display = "";
                    });
                    el.exportBtn.disabled = false;
                    el.exportBtn.textContent = "生成并导出图片";
                }
            });
        }

        // 初始渲染
        renderAddedGame();
    }

    // 启动页面
    bootstrap();
}
