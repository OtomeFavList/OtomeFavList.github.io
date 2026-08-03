// ===================== script.js UI交互层（模块化导出） =====================
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

    // 渲染角色选择弹窗内容【修复：适配srcList，读取持久化图片索引】
    function renderCharSelectModal(gameId) {
        const gameInfo = gameTemplateList.find(g => g.id === gameId);
        const gameItem = appData.gameList?.find(g => g?.gameId === gameId);
        if (!gameInfo || !gameItem) return;

        const modalGameTitle = document.getElementById("modal-game-title");
        const localShowSecret = document.getElementById("local-show-secret");
        const localShowFD = document.getElementById("local-show-fd");
        const heroineBox = document.getElementById("heroine-box");
        const heroListBox = document.getElementById("hero-list-box");
        if (!modalGameTitle || !localShowSecret || !localShowFD || !heroineBox || !heroListBox) return;

        modalGameTitle.innerText = gameInfo.name;
        localShowSecret.checked = !!gameItem.localHideChar;
        localShowFD.checked = !!gameItem.localFD;

        const allChars = getAllGameChar(gameInfo);
        const femaleChars = allChars.filter(c => c.gender === "female");
        const maleChars = allChars.filter(c => c.gender === "male");

        // 渲染女主区域
        let femHtml = "";
        femaleChars.forEach(char => {
            const imgsUnitList = getAvailableCharImages(char, appData.globalHideChar, appData.globalFD, gameItem.localHideChar, gameItem.localFD);
            if (imgsUnitList.length === 0) return;
            let allSrc = [];
            imgsUnitList.forEach(u => allSrc.push(...u.srcList));
            if (allSrc.length === 0) return;

            const saveKey = `${gameId}-${char.id}`;
            let imgIndex = Number(appData.charImageSelect?.[saveKey] ?? 0);
            if (imgIndex >= allSrc.length) imgIndex = 0;
            const showSrc = allSrc[imgIndex];

            const selected = gameItem.selectChars?.includes(char.id) ? "selected" : "";
            femHtml += `
            <label class="char-card-item ${selected}" data-cid="${char.id}" data-char-id="${char.id}" data-game-id="${gameId}" data-total-img="${allSrc.length}">
                <div class="char-card-img-box ${allSrc.length>1?'char-has-multi-img':''}">
                    ${allSrc.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                    <img src="${showSrc}" alt="${char.name}">
                    ${allSrc.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
                </div>
                <div class="char-card-name">${char.name}</div>
            </label>`;
        });
        heroineBox.innerHTML = femHtml;

        // 男性角色区域
        let maleHtml = "";
        maleChars.forEach(char => {
            const imgsUnitList = getAvailableCharImages(char, appData.globalHideChar, appData.globalFD, gameItem.localHideChar, gameItem.localFD);
            if (imgsUnitList.length === 0) return;
            let allSrc = [];
            imgsUnitList.forEach(u => allSrc.push(...u.srcList));
            if (allSrc.length === 0) return;

            const saveKey = `${gameId}-${char.id}`;
            let imgIndex = Number(appData.charImageSelect?.[saveKey] ?? 0);
            if (imgIndex >= allSrc.length) imgIndex = 0;
            const showSrc = allSrc[imgIndex];

            const selected = gameItem.selectChars?.includes(char.id) ? "selected" : "";
            maleHtml += `
            <label class="char-card-item ${selected}" data-cid="${char.id}" data-char-id="${char.id}" data-game-id="${gameId}" data-total-img="${allSrc.length}">
                <div class="char-card-img-box ${allSrc.length>1?'char-has-multi-img':''}">
                    ${allSrc.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`:""}
                    <img src="${showSrc}" alt="${char.name}">
                    ${allSrc.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`:""}
                </div>
                <div class="char-card-name">${char.name}</div>
            </label>`;
        });
        heroListBox.innerHTML = maleHtml;

        // 绑定弹窗内角色卡片勾选点击
        document.querySelectorAll("#char-select-modal .char-card-item").forEach(item => {
            item.onclick = function (e) {
                if (e.target.classList.contains("char-switch-btn")) return;
                const cid = this.dataset.cid;
                if (!Array.isArray(gameItem.selectChars)) gameItem.selectChars = [];
                const idx = gameItem.selectChars.indexOf(cid);
                if (idx > -1) {
                    gameItem.selectChars.splice(idx, 1);
                    this.classList.remove("selected");
                } else {
                    gameItem.selectChars.push(cid);
                    this.classList.add("selected");
                }
                saveData();
            }
        })
    }

    // 打开角色弹窗
    function openCharSelectModal(gameId) {
        Core.currentEditGameId = gameId;
        const modal = document.getElementById("char-select-modal");
        if (!modal) return;
        modal.classList.add("active");
        renderCharSelectModal(gameId);
    }
    // 关闭角色弹窗
    function closeCharSelectModal() {
        const modal = document.getElementById("char-select-modal");
        if (!modal) return;
        modal.classList.remove("active");
        Core.currentEditGameId = null;
    }

    // 页面所有DOM、事件、渲染逻辑全部放在bootstrap内部
    async function bootstrap() {
        // 预加载所有游戏数据
        await loadAllGameTemplates();

        // 1. DOM元素缓存（全部实时获取）
        const el = {
            globalHideChar: document.getElementById("global-hide-char"),
            globalFD: document.getElementById("global-fd-game"),
            spoilerModal: document.getElementById("spoiler-modal"),
            spoilerConfirm: document.getElementById("spoiler-confirm"),
            spoilerCancel: document.getElementById("spoiler-cancel"),
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
            modalConfirmBtn: document.getElementById("modal-confirm-btn")
        };

        let modalOpen = false;
        let modalTargetType = ""; // hideChar / fd / localHide / localFD

        // ==========【全局事件委托：角色立绘左右切换】==========
        document.addEventListener("click", function (e) {
            const switchBtn = e.target.closest(".char-switch-btn");
            if (!switchBtn) return;
            e.stopPropagation();
            const charCard = switchBtn.closest(".char-card-item");
            const charId = charCard.dataset.charId;
            const gameId = charCard.dataset.gameId;
            const gameInfo = gameTemplateList.find(g => g.id === gameId);
            if (!gameInfo) return;
            const char = gameInfo.charList.find(c => c.id === charId);
            if (!char) return;
            const gameItem = appData.gameList?.find(g => g.gameId === gameId);
            if (!gameItem) return;

            const availImgUnits = getAvailableCharImages(
                char,
                appData.globalHideChar,
                appData.globalFD,
                gameItem.localHideChar,
                gameItem.localFD
            );
            let allSrc = [];
            availImgUnits.forEach(unit => allSrc.push(...unit.srcList));
            if (allSrc.length <= 1) return;

            const imgDom = charCard.querySelector(".char-card-img-box img");
            const saveKey = `${gameId}-${charId}`;
            let currentIndex = Number(appData.charImageSelect?.[saveKey] ?? 0);

            if (switchBtn.classList.contains("char-switch-next")) {
                currentIndex++;
                if (currentIndex >= allSrc.length) currentIndex = 0;
            } else {
                currentIndex--;
                if (currentIndex < 0) currentIndex = allSrc.length - 1;
            }

            imgDom.src = allSrc[currentIndex];
            appData.charImageSelect[saveKey] = currentIndex;
            saveData();
            if (document.getElementById("char-select-modal")?.classList.contains("active")) {
                renderAddedGame();
            }
        });

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

        // ========== 剧透弹窗控制 ==========
        function openSpoilerModal(type) {
            if (!el.spoilerModal) {
                console.error("缺少spoiler-modal弹窗DOM");
                alert("页面缺失剧透弹窗组件，请检查index.html");
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

        // 回填表单基础信息
        if (el.inputNick) el.inputNick.value = appData.baseInfo?.nick ?? "";
        if (el.inputCount) el.inputCount.value = appData.baseInfo?.count ?? "";
        if (el.inputStory) el.inputStory.value = appData.baseInfo?.story ?? "";
        if (el.inputFirstgame) el.inputFirstgame.value = appData.baseInfo?.firstgame ?? "";

        // ✅配色绑定 增加DOM判空，彻底消除 colorBorder undefined 报错
        const colorBindList = [
            { dom: el.colorBg, dataKey: "bg" },
            { dom: el.colorTitle, dataKey: "title" },
            { dom: el.colorText, dataKey: "text" },
            { dom: el.colorBorder, dataKey: "border" }
        ];
        colorBindList.forEach(item => {
            if (!item.dom) return;
            item.dom.value = appData.exportColor?.[item.dataKey] ?? "#ffffff";
            item.dom.oninput = () => {
                if(!appData.exportColor) appData.exportColor = {};
                appData.exportColor[item.dataKey] = item.dom.value;
                saveData();
                if (item.dataKey === "bg") document.body.style.background = item.dom.value;
            }
        });
        if (el.colorBg) document.body.style.background = appData.exportColor?.bg ?? "#ffffff";

        refreshHideCharSwitch();
        refreshFDSwitch();
        fillFilterOptions(gameTemplateList);

        // 剧透弹窗【确认按钮】
        if (el.spoilerConfirm) {
            el.spoilerConfirm.onclick = () => {
                if (modalTargetType === "hideChar") {
                    saveConfirmDate();
                    appData.globalHideChar = true;
                    syncSingleGameSwitch("hideChar", true);
                } else if (modalTargetType === "fd") {
                    saveConfirmDate();
                    appData.globalFD = true;
                    syncSingleGameSwitch("fd", true);
                } else if (modalTargetType === "localHide") {
                    saveLocalSwitchConfirmDate();
                    const triggerSwitch = document.querySelector(`.local-hide-char.modal-trigger`);
                    if (triggerSwitch) {
                        const gid = triggerSwitch.dataset.gid;
                        const targetGame = appData.gameList?.find(g => g.gameId === gid);
                        if (targetGame) targetGame.localHideChar = true;
                    }
                } else if (modalTargetType === "localFD") {
                    saveLocalSwitchConfirmDate();
                    const triggerSwitch = document.querySelector(`.local-fd.modal-trigger`);
                    if (triggerSwitch) {
                        const gid = triggerSwitch.dataset.gid;
                        const targetGame = appData.gameList?.find(g => g.gameId === gid);
                        if (targetGame) targetGame.localFD = true;
                    }
                }
                saveData();
                renderAddedGame();
                closeSpoilerModal();
            }
        }
        // 弹窗取消按钮
        if (el.spoilerCancel) {
            el.spoilerCancel.onclick = closeSpoilerModal;
        }

        // ============【全局隐藏角色开关】 ============
        if (el.globalHideChar) {
            el.globalHideChar.addEventListener('change', function () {
                const newStatus = this.checked;
                if (newStatus === false) {
                    appData.globalHideChar = false;
                    syncSingleGameSwitch("hideChar", false);
                    saveData();
                    renderAddedGame();
                    return;
                }
                if (isTodayConfirmed()) {
                    appData.globalHideChar = true;
                    syncSingleGameSwitch("hideChar", true);
                    saveData();
                    renderAddedGame();
                } else {
                    this.checked = false;
                    refreshHideCharSwitch();
                    if (modalOpen) return;
                    openSpoilerModal("hideChar");
                }
            })
        }

        // ============【全局FD/续作开关｜剧透预警】 ============
        if (el.globalFD) {
            el.globalFD.addEventListener('change', function () {
                const newStatus = this.checked;
                if (newStatus === false) {
                    appData.globalFD = false;
                    syncSingleGameSwitch("fd", false);
                    saveData();
                    renderAddedGame();
                    return;
                }
                if (isTodayConfirmed()) {
                    appData.globalFD = true;
                    syncSingleGameSwitch("fd", true);
                    saveData();
                    renderAddedGame();
                } else {
                    this.checked = false;
                    refreshFDSwitch();
                    if (modalOpen) return;
                    openSpoilerModal("fd");
                }
            })
        }

        // 基础资料输入框绑定
        const baseInputMap = [
            { dom: el.inputNick, key: "nick" },
            { dom: el.inputCount, key: "count" },
            { dom: el.inputStory, key: "story" },
            { dom: el.inputFirstgame, key: "firstgame" }
        ];
        baseInputMap.forEach(item => {
            if (!item.dom) return;
            item.dom.oninput = function () {
                if(!appData.baseInfo) appData.baseInfo = {};
                appData.baseInfo[item.key] = this.value;
                saveData();
            }
        })

        // 添加游戏按钮
        if (el.addGameBtn) {
            el.addGameBtn.onclick = function () {
                renderGameSelectList();
                if (el.searchPanel) el.searchPanel.classList.remove("hide-block");
            }
        }
        // 搜索输入监听
        if (el.gameSearchInput) {
            el.gameSearchInput.addEventListener("input", renderGameSelectList);
        }
        // 筛选下拉监听
        const filterSelectIds = ["filter-year", "filter-publisher", "filter-cn", "filter-writer", "filter-art"];
        filterSelectIds.forEach(selId => {
            const sel = document.getElementById(selId);
            if (sel) sel.addEventListener("change", renderGameSelectList);
        });

        // 渲染游戏选择列表
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
                if (!game) return;
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
                    <img src="${coverSrc}" alt="${game.name}">
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
                    const exist = appData.gameList?.find(g => g.gameId === gid);
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
                    if(!appData.gameList) appData.gameList = [];
                    appData.gameList.push(newGameData);
                    saveData();
                    if (el.searchPanel) el.searchPanel.classList.add("hide-block");
                    renderAddedGame();
                }
            })
        }

        // 渲染已添加游戏卡片
        function renderAddedGame() {
            if (!el.addedGameBox) return;
            if (!Array.isArray(gameTemplateList) || gameTemplateList.length === 0) {
                el.addedGameBox.innerHTML = "<p>⚠️ 游戏数据加载失败，检查data/games路径</p>";
                return;
            }
            document.querySelectorAll(".modal-trigger").forEach(dom => dom.classList.remove("modal-trigger"));

            let html = "";
            appData.gameList?.forEach(gameItem => {
                if (!gameItem) return;
                const gameInfo = gameTemplateList.find(g => g.id === gameItem.gameId);
                if (!gameInfo) return;
                let heartHtml = "";
                for (let i = 1; i <= 5; i++) heartHtml += `<span class="heart ${gameItem.loveRate >= i ? 'active' : ''}" data-val="${i}">♥</span>`;

                const coverImgSrc = gameInfo.cover ? `${gameInfo.cover}` : "";
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

        // 游戏卡片事件绑定
        function bindGameCardEvent() {
            document.querySelectorAll(".fold-game").forEach(btn => {
                btn.onclick = () => {
                    const gid = btn.dataset.gid;
                    const gameItem = appData.gameList?.find(g => g.gameId === gid);
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
                const gameItem = appData.gameList?.find(g => g.gameId === gid);
                if (!gameItem) return;
                box.querySelectorAll(".heart").forEach(h => {
                    h.onclick = () => {
                        gameItem.loveRate = Number(h.dataset.val);
                        saveData();
                        renderAddedGame();
                    }
                })
            })
            document.querySelectorAll(".open-char-pool").forEach(btn => {
                btn.onclick = function () {
                    const gid = this.dataset.gid;
                    Core.charPoolMode = "char";
                    openCharSelectModal(gid);
                }
            })
            document.querySelectorAll(".open-cp-pool").forEach(btn => {
                btn.onclick = function () {
                    const gid = this.dataset.gid;
                    Core.charPoolMode = "cp";
                    openCharSelectModal(gid);
                }
            })
            // 单游戏隐藏角色开关
            document.querySelectorAll(".local-hide-char").forEach(sw => {
                sw.onchange = function () {
                    const gid = this.dataset.gid;
                    const gameItem = appData.gameList?.find(g => g.gameId === gid);
                    if (!gameItem) return;
                    const targetStatus = this.checked;
                    if (!targetStatus) {
                        gameItem.localHideChar = false;
                        saveData();
                        renderAddedGame();
                        return;
                    }
                    if (localSwitchIsConfirmedToday()) {
                        gameItem.localHideChar = true;
                        saveData();
                        renderAddedGame();
                    } else {
                        this.checked = false;
                        if (modalOpen) return;
                        this.classList.add("modal-trigger");
                        modalTargetType = "localHide";
                        openSpoilerModal("localHide");
                    }
                }
            })
            // 单游戏FD开关
            document.querySelectorAll(".local-fd").forEach(sw => {
                sw.onchange = function () {
                    const gid = this.dataset.gid;
                    const gameItem = appData.gameList?.find(g => g.gameId === gid);
                    if (!gameItem) return;
                    const targetStatus = this.checked;
                    if (!targetStatus) {
                        gameItem.localFD = false;
                        saveData();
                        renderAddedGame();
                        return;
                    }
                    if (localSwitchIsConfirmedToday()) {
                        gameItem.localFD = true;
                        saveData();
                        renderAddedGame();
                    } else {
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
        if (el.modalCloseBtn) el.modalCloseBtn.onclick = closeCharSelectModal;
        if (el.modalCancelBtn) el.modalCancelBtn.onclick = closeCharSelectModal;
        if (el.modalConfirmBtn) el.modalConfirmBtn.onclick = closeCharSelectModal;

        // =====================【导出图片核心逻辑】=====================
        if (el.exportBtn && el.snapshotContainer) {
            el.exportBtn.addEventListener('click', async () => {
                try {
                    el.exportBtn.disabled = true;
                    el.exportBtn.textContent = "正在生成图片...";

                    const baseInfo = appData.baseInfo ?? {};
                    const infoArr = [
                        { el: el.inputNick, text: baseInfo.nick ? `昵称：${baseInfo.nick}` : null },
                        { el: el.inputCount, text: baseInfo.count !== "" ? `游玩总数：${baseInfo.count}` : null },
                        { el: el.inputStory, text: baseInfo.story ? `入坑时间：${baseInfo.story}` : null },
                        { el: el.inputFirstgame, text: baseInfo.firstgame ? `入坑作品：${baseInfo.firstgame}` : null }
                    ];

                    const hideElements = [];
                    infoArr.forEach(item => {
                        if (item.el && !item.text) {
                            hideElements.push(item.el);
                            item.el.style.display = "none";
                        }
                    });

                    el.snapshotContainer.classList.add('export-snapshot');

                    const sizeRadio = document.querySelector('input[name="export-size"]:checked');
                    if(!sizeRadio) throw new Error("未选中导出尺寸");
                    let sizeValue = sizeRadio.value;
                    let targetWidth, targetHeight;
                    if (sizeValue === 'long') {
                        targetWidth = 1080;
                        targetHeight = 0;
                    } else {
                        const [w, h] = sizeValue.split(',').map(Number);
                        targetWidth = w;
                        targetHeight = h;
                    }

                    // ✅【关键修复！原先这里直接getElementById，改用缓存el.colorBg，消除colorBorder报错源头】
                    const bgColor = el.colorBg?.value ?? "#ffffff";

                    const renderCanvas = await html2canvas(el.snapshotContainer, {
                        backgroundColor: bgColor,
                        scale: 2,
                        useCORS: true,
                        logging: false
                    });

                    let finalCanvas;
                    if (targetHeight === 0) {
                        finalCanvas = renderCanvas;
                    } else {
                        if(!el.canvas) throw new Error("导出canvas元素缺失");
                        const canvas = el.canvas;
                        canvas.width = targetWidth;
                        canvas.height = targetHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.fillStyle = bgColor;
                        ctx.fillRect(0, 0, targetWidth, targetHeight);
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
                    alert('图片导出异常！外部图片跨域可能导致失败，请使用本地图片资源。\n' + err.message);
                } finally {
                    el.snapshotContainer.classList.remove('export-snapshot');
                    document.querySelectorAll("#card-base .form-row input").forEach(input => {
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
