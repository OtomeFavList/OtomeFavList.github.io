// ===================== script.js UI交互层（模块化导出） =====================
// 【重要说明】剧透弹窗、全局开关click事件全部迁移至main.js，本文件不再处理全局开关点击逻辑
// 游戏卡片动态生成的局部开关：使用事件委托对接main.js剧透弹窗逻辑
import {  } from './main.js';

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
        saveLocalSwitchConfirmDate,
        renderGameSelectItem,
        bindDynamicGameCardSwitchEvents,
        renderLocalSwitchDom,
        bindLocalGameSwitchEvents
    } = Core;

    // ===================== 角色选择弹窗渲染函数 =====================
    /**
     * 渲染角色选择弹窗内容
     * @param {string} gameId 当前编辑游戏id
     */
    function renderCharSelectModal(gameId) {
        const gameInfo = gameTemplateList.find(g => g.id === gameId);
        const gameItem = appData.gameList?.find(g => g?.gameId === gameId);
        if (!gameInfo || !gameItem) return;

        const modalGameTitle = document.getElementById("modal-game-title");
        const heroineBox = document.getElementById("heroine-box");
        const heroListBox = document.getElementById("hero-list-box");
        if (!modalGameTitle || !heroineBox || !heroListBox) return;

        modalGameTitle.innerText = gameInfo.name;
        // 【改动】删除此处直接操作localShowSecret / localShowFD.checked，交给main.js renderLocalSwitchDom(gameItem)
        renderLocalSwitchDom(gameItem);

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
            <label class="char-item ${selected}" data-cid="${char.id}" data-char-id="${char.id}" data-game-id="${gameId}" data-total-img="${allSrc.length}">
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
            <label class="char-item ${selected}" data-cid="${char.id}" data-char-id="${char.id}" data-game-id="${gameId}" data-total-img="${allSrc.length}">
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
        document.querySelectorAll("#char-select-modal .char-item").forEach(item => {
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

    /**
     * 打开角色选择弹窗
     * @param {string} gameId 游戏id
     */
    function openCharSelectModal(gameId) {
        Core.currentEditGameId = gameId;
        // ✅新增：赋值完gameId，立刻绑定本游戏局部开关事件

        const modal = document.getElementById("char-select-modal");
        if (!modal) return;
        modal.classList.add("active");
        renderCharSelectModal(gameId);
    }

    /**
     * 关闭角色选择弹窗
     */
    function closeCharSelectModal() {
        const modal = document.getElementById("char-select-modal");
        if (!modal) return;
        modal.classList.remove("active");
        Core.currentEditGameId = null;
    }


    // ===================== 页面启动bootstrap，UI渲染、表单、导出、卡片事件 =====================
    async function bootstrap() {
        // ❗删除重复加载：loadAllGameTemplates 在 bootstrapCore 已经执行过
        // DOM元素缓存
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
            charSelectModal: document.getElementById("char-select-modal"),
            modalCloseBtn: document.querySelector(".modal-close-btn"),
            modalCancelBtn: document.getElementById("modal-cancel-btn"),
            modalConfirmBtn: document.getElementById("modal-confirm-btn")
        };

        // ==========【已移除旧的错误local‑hide‑char / local‑fd事件委托，全部交由main.js bindDynamicGameCardSwitchEvents】==========

        // ==========【全局事件委托：角色立绘左右切换】==========
        document.addEventListener("click", function (e) {
            const switchBtn = e.target.closest(".char-switch-btn");
            if (!switchBtn) return;
            e.stopPropagation();
            const charCard = switchBtn.closest(".char-item");
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
            if(!appData.charImageSelect) appData.charImageSelect = {};
            appData.charImageSelect[saveKey] = currentIndex;
            saveData();
            if (document.getElementById("char-select-modal")?.classList.contains("active")) {
                renderAddedGame();
                bindDynamicGameCardSwitchEvents();
            }
        });

        /**
         * 更新全局隐藏角色复选框DOM状态（仅更新UI，点击事件由main.js接管）
         */
        function refreshHideCharSwitch() {
            if (el.globalHideChar) {
                el.globalHideChar.checked = appData.globalHideChar;
                el.globalHideChar.indeterminate = false;
            }
        }
        /**
         * 更新全局FD复选框DOM状态（仅更新UI，点击事件由main.js接管）
         */
        function refreshFDSwitch() {
            if (el.globalFD) {
                el.globalFD.checked = appData.globalFD;
                el.globalFD.indeterminate = false;
            }
        }

        // 加载本地存储
        loadData();

        // 回填基础资料表单
        if (el.inputNick) el.inputNick.value = appData.baseInfo?.nick ?? "";
        if (el.inputCount) el.inputCount.value = appData.baseInfo?.count ?? "";
        if (el.inputStory) el.inputStory.value = appData.baseInfo?.story ?? "";
        if (el.inputFirstgame) el.inputFirstgame.value = appData.baseInfo?.firstgame ?? "";

        // 配色绑定，增加DOM判空，消除colorBorder undefined报错
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


        // ========== 基础资料输入框绑定 ==========
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

        // ========== 添加游戏按钮 ==========
        if (el.addGameBtn) {
            el.addGameBtn.onclick = function () {
                renderGameSelectList();
                if (el.searchPanel) el.searchPanel.classList.remove("hide-block");
            }
        }

        // ========== 搜索输入监听 ==========
        if (el.gameSearchInput) {
            el.gameSearchInput.addEventListener("input", renderGameSelectList);
        }

        // ========== 筛选下拉监听 ==========
        const filterSelectIds = ["filter-year", "filter-publisher", "filter-cn", "filter-writer", "filter-art"];
        filterSelectIds.forEach(selId => {
            const sel = document.getElementById(selId);
            if (sel) sel.addEventListener("change", renderGameSelectList);
        });

        /**
         * 渲染游戏选择弹窗列表
         */
        function renderGameSelectList() {
            if (!el.gameSearchInput || !el.gameSelectList || !Array.isArray(gameTemplateList)) return;
            const keyword = el.gameSearchInput.value.toLowerCase();
            const filterYear = document.getElementById("filter-year")?.value || "";
            const filterPub = document.getElementById("filter-publisher")?.value || "";
            const filterCn = document.getElementById("filter-cn")?.value || "";
            const filterWriter = document.getElementById("filter-writer")?.value || "";
            const filterArt = document.getElementById("filter-art")?.value || "";
            const sortedGames = [...gameTemplateList].sort((a, b) => a.name.localeCompare(b.name, "zh‑CN"));
            let html = "";
            sortedGames.forEach(game => {
                if (!game) return;
                let match = true;
                if (keyword && !game.name?.toLowerCase().includes(keyword)) match = false;
                if (filterYear && game.year != filterYear) match = false;
                if (filterPub && game.publisher != filterPub) match = false;
                if (filterCn && game.cnStudio != filterCn) match = false;

                if (filterWriter) {
                    let writerArr = [];
                    if (Array.isArray(game.writer)) {
                        writerArr = game.writer;
                    } else if (typeof game.writer === "string") {
                        writerArr = [game.writer];
                    }
                    if (!writerArr.includes(filterWriter)) match = false;
                }

                if (filterArt && game.art != filterArt) match = false;
                if (!match) return;
                html += renderGameSelectItem(game);
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
                    if (el.searchPanel) el.searchPanel.classList.add("hide‑block");
                    renderAddedGame();
                    bindDynamicGameCardSwitchEvents();
                }
            })
        }

        /**
         * 渲染已添加游戏卡片
         */
        function renderAddedGame() {
            if (!el.addedGameBox) return;
            if (!Array.isArray(gameTemplateList) || gameTemplateList.length === 0) {
                el.addedGameBox.innerHTML = "<p>⚠️ 游戏数据加载失败，检查data/games路径</p>";
                return;
            }
            document.querySelectorAll(".modal‑trigger").forEach(dom => dom.classList.remove("modal‑trigger"));

            let html = "";
            appData.gameList?.forEach((gameItem, index) => {
                if (!gameItem) return;
                const gameInfo = gameTemplateList.find(g => g.id === gameItem.gameId);
                if (!gameInfo) return;
                let heartHtml = "";
                for (let i = 1; i <= 5; i++) heartHtml += `<span class="heart ${gameItem.loveRate >= i ? 'active' : ''}" data‑val="${i}">♥</span>`;

                html += `
                <div class="added‑game‑card" data‑game‑id="${gameItem.gameId}">
                    <div class="game‑card‑header‑row">
                        <span class="game‑card‑title" style="color:#b33a3a;font‑weight:bold;font‑size:18px;">${gameInfo.name}</span>
                        <div class="heart‑rate" data‑gid="${gameItem.gameId}">${heartHtml}</div>
                        <div class="game‑switch‑group">
                            <label class="switch">
                                <input type="checkbox" class="game‑hide‑char" data‑gameidx="${index}" ${(gameItem.localHideChar ?? false) ? 'checked' : ''}>
                                <span class="slider"></span>
                            </label>
                            <span>单独显示本游戏隐藏角色</span>
                            <label class="switch">
                                <input type="checkbox" class="game‑fd‑switch" data‑gameidx="${index}" ${(gameItem.localFD ?? false) ? 'checked' : ''}>
                                <span class="slider"></span>
                            </label>
                            <span>单独显示本游戏续作/FD角色</span>
                        </div>
                    </div>

                    <div class="char‑section">
                        <button class="open‑char‑pool" data‑gid="${gameItem.gameId}">选择角色 Character</button>
                        <div class="char‑card‑wrapper char‑selected‑row" data‑gid="${gameItem.gameId}">${renderSelectedChar(gameItem, gameInfo)}</div>
                    </div>
                    <div class="cp‑group">
                        <button class="open‑cp‑pool" data‑gid="${gameItem.gameId}">搭配CP Couple</button>
                        <div class="cp‑render‑box" data‑gid="${gameItem.gameId}">${renderCP(gameItem, gameInfo)}</div>
                    </div>

                    <div class="card‑bottom‑btn‑group">
                        <button class="btn‑fold fold‑game" data‑gid="${gameItem.gameId}">折叠</button>
                        <button class="btn‑fold del‑game" data‑gid="${gameItem.gameId}">删除</button>
                    </div>
                </div>
                `;
            })
            // 1.写入DOM
            el.addedGameBox.innerHTML = html;
            // 2.普通卡片事件绑定（折叠、删除、爱心、打开角色/CP弹窗）
            bindGameCardEvent();
            // 3.【关键】DOM全部渲染完成后，调用main.js导出的事件委托函数，接管.game‑hide‑char / .game‑fd‑switch点击
            bindDynamicGameCardSwitchEvents();
        }

        /**
         * 游戏卡片内部事件绑定：折叠、删除、爱心评分、打开角色/CP弹窗
         * ⚠️注意：game‑hide‑char / game‑fd‑switch 使用main.js事件委托，不在此处绑定
         */
        function bindGameCardEvent() {
            document.querySelectorAll(".fold‑game").forEach(btn => {
                btn.onclick = () => {
                    const gid = btn.dataset.gid;
                    const gameItem = appData.gameList?.find(g => g.gameId === gid);
                    if (!gameItem) return;
                    gameItem.fold = !gameItem.fold;
                    saveData();
                    renderAddedGame();
                    bindDynamicGameCardSwitchEvents();
                }
            })
            document.querySelectorAll(".del‑game").forEach(btn => {
                btn.onclick = () => {
                    const gid = btn.dataset.gid;
                    appData.gameList = appData.gameList.filter(g => g.gameId !== gid);
                    saveData();
                    renderAddedGame();
                    bindDynamicGameCardSwitchEvents();
                }
            })
            document.querySelectorAll(".heart‑rate").forEach(box => {
                const gid = box.dataset.gid;
                const gameItem = appData.gameList?.find(g => g.gameId === gid);
                if (!gameItem) return;
                box.querySelectorAll(".heart").forEach(h => {
                    h.onclick = (e) => {
                        // 修复：阻止冒泡，爱心点击不会向上传递给switch事件委托
                        e.stopPropagation();
                        gameItem.loveRate = Number(h.dataset.val);
                        saveData();
                        renderAddedGame();
                        bindDynamicGameCardSwitchEvents();
                    }
                })
            })
            document.querySelectorAll(".open‑char‑pool").forEach(btn => {
                btn.onclick = function () {
                    const gid = this.dataset.gid;
                    Core.charPoolMode = "char";
                    openCharSelectModal(gid);
                }
            })
            document.querySelectorAll(".open‑cp‑pool").forEach(btn => {
                btn.onclick = function () {
                    const gid = this.dataset.gid;
                    Core.charPoolMode = "cp";
                    openCharSelectModal(gid);
                }
            })
        }

        // ==========角色弹窗关闭按钮 ==========
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

                    el.snapshotContainer.classList.add('export‑snapshot');

                    const sizeRadio = document.querySelector('input[name="export‑size"]:checked');
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
                    el.snapshotContainer.classList.remove('export‑snapshot');
                    document.querySelectorAll("#card‑base .form‑row input").forEach(input => {
                        input.style.display = "";
                    });
                    el.exportBtn.disabled = false;
                    el.exportBtn.textContent = "生成并导出图片";
                }
            });
        }

        // 初始渲染页面
        renderAddedGame();
    }

    bootstrap();
}
