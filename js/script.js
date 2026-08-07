// ===================== script.js UI交互层（模块化导出） =====================
// 【重要说明】剧透弹窗、全局开关click事件全部迁移至main.js，本文件不再处理全局开关点击逻辑
// 游戏卡片动态生成的局部开关：使用事件委托对接main.js剧透弹窗逻辑
// 改造：每个游戏卡片内部动态生成两套独立滑出面板 char / cp；不再使用全局唯一char-slide-panel
// 注意：main.js禁止import本文件，避免循环依赖
import {
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
  renderGameSelectItem,
  bindDynamicGameCardSwitchEvents
} from './main.js';

export function initPage(Core = {}) {
  // 安全兜底，防止不传Core报错
  Core = Core || {};

  /**
   * 在指定游戏卡片内部渲染滑出面板内容
   * @param {HTMLElement} cardDom 游戏卡片dom .added-game-card
   * @param {string} gameId
   * @param {'char'|'cp'} mode
   * @param {HTMLElement} panelDom 本卡片内的滑出面板容器
   */
  function renderCharSelectPanel(cardDom, gameId, mode, panelDom) {
    if (!Array.isArray(gameTemplateList)) return;
    const gameInfo = gameTemplateList.find(g => g.id === gameId);
    const gameItem = appData.gameList?.find(g => g?.gameId === gameId);
    if (!gameInfo || !gameItem || !panelDom) return;

    // 面板头部
    const titleEl = panelDom.querySelector(".panel-game-title");
    const heroineBox = panelDom.querySelector(".heroine-box");
    const heroListBox = panelDom.querySelector(".hero-list-box");
    if (!titleEl || !heroineBox || !heroListBox) return;

    titleEl.innerText = `${gameInfo.name} — ${mode === "char" ? "选择角色 Character" : "选择CP Couple"}`;

    // 废弃：renderLocalSwitchModalContent，开关已经渲染在卡片头部，此处不再调用
    const localWrap = panelDom.querySelector(".local-switch-wrap");
    if(localWrap) localWrap.innerHTML = "";

    const allChars = getAllGameChar(gameInfo);
    const femaleChars = allChars.filter(c => c.gender === "female");
    const maleChars = allChars.filter(c => c.gender === "male");

    // 女主区域
    let femHtml = "";
    femaleChars.forEach(char => {
      const imgsUnitList = getAvailableCharImages(char, appData.globalHideChar, appData.globalFD, gameItem.localHideChar, gameItem.localFD);
      if (imgsUnitList.length === 0) return;

      let allSrc = [];
      imgsUnitList.forEach(u => allSrc.push(...u.srcList));
      if (allSrc.length === 0) return;

      const saveKey = `${gameId}-${char.id}`;
      if(!appData.charImageSelect) appData.charImageSelect = {};
      let imgIndex = Number(appData.charImageSelect?.[saveKey] ?? 0);
      if (imgIndex >= allSrc.length) imgIndex = 0;
      const showSrc = allSrc[imgIndex];
      const selected = gameItem.selectChars?.includes(char.id) ? "selected" : "";

      femHtml += `
      <label class="char-item ${selected}" data-cid="${char.id}" data-char-id="${char.id}" data-game-id="${gameId}" data-total-img="${allSrc.length}">
        <div class="char-card-img-box ${allSrc.length>1?'char-multi-img':''}">
          ${allSrc.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`: ""}
          <img src="${showSrc}" alt="${char.name}">
          ${allSrc.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`: ""}
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
      if(!appData.charImageSelect) appData.charImageSelect = {};
      let imgIndex = Number(appData.charImageSelect?.[saveKey] ?? 0);
      if (imgIndex >= allSrc.length) imgIndex = 0;
      const showSrc = allSrc[imgIndex];
      const selected = gameItem.selectChars?.includes(char.id) ? "selected" : "";

      maleHtml += `
      <label class="char-item ${selected}" data-cid="${char.id}" data-char-id="${char.id}" data-game-id="${gameId}" data-total-img="${allSrc.length}">
        <div class="char-card-img-box ${allSrc.length>1?'char-multi-img':''}">
          ${allSrc.length>1?`<button class="char-switch-btn char-switch-prev">&lt;</button>`: ""}
          <img src="${showSrc}" alt="${char.name}">
          ${allSrc.length>1?`<button class="char-switch-btn char-switch-next">&gt;</button>`: ""}
        </div>
        <div class="char-card-name">${char.name}</div>
      </label>`;
    });
    heroListBox.innerHTML = maleHtml;
  }

  /**
   * 生成单个游戏卡片内部滑出面板HTML字符串
   * @param {'char'|'cp'} mode
   */
  function getInnerSlidePanelHtml(mode){
    const cls = mode === "char" ? "char-slide-panel-char" : "char-slide-panel-cp";
    // 移除hide‑block，默认无class，靠 .active 控制显示
    return `
    <div class="${cls}">
      <div class="panel-header">
        <h4 class="panel-game-title"></h4>
        <button class="panel-close-btn">×</button>
      </div>
      <div class="local-switch-wrap"></div>
      <div class="heroine-box"></div>
      <div class="hero-list-box"></div>
    </div>
    `;
  }

  // ===================== 页面启动bootstrap，UI渲染、表单、导出、卡片事件 =====================
  async function bootstrap() {
    // DOM元素缓存，移除全局char-slide-panel
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
      snapshotContainer: document.getElementById("snapshot-container")
    };

    /**
     * 渲染已添加游戏卡片
     * 每个卡片内部嵌入两套滑出面板 char / cp
     * ✅传入容器对象el，消除ReferenceError
     */
    function renderAddedGame(el) {
      if (!el.addedGameBox) return;
      if (!Array.isArray(gameTemplateList) || gameTemplateList.length === 0) {
        el.addedGameBox.innerHTML = "<p>⚠️ 游戏数据加载失败，检查data/games路径</p>";
        return;
      }

      document.querySelectorAll(".modal-trigger").forEach(dom => dom.classList.remove("modal-trigger"));
      let html = "";

      appData.gameList?.forEach((gameItem, index) => {
        if (!gameItem) return;
        const gameInfo = gameTemplateList.find(g => g.id === gameItem.gameId);
        if (!gameInfo) return;

        let heartHtml = "";
        for (let i = 1; i <= 5; i++) {
          heartHtml += `<span class="heart ${gameItem.loveRate >= i ? 'active' : ''}" data-val="${i}">♥</span>`;
        }

        // 改用 active：打开加active，无则隐藏；fold优先级最高
        const charPanelClass = ((gameItem.fold || !gameItem.charPanelOpen)) ? "" : "active";
        const cpPanelClass = ((gameItem.fold || !gameItem.cpPanelOpen)) ? "" : "active";

        html += `
        <div class="added-game-card" data-gameid="${gameItem.gameId}">
          <div class="game-card-head">
            <h3>${gameInfo.name}</h3>
            <div class="heart-rate" data-gid="${gameItem.gameId}">
              ${heartHtml}
            </div>
            <div class="local-switch-row">
                <div>
                    <label class="switch">
                        <input type="checkbox" class="game-hide-char" data-gameidx="${index}" ${(gameItem.localHideChar ?? false) ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                    <span>单独显示本游戏隐藏角色</span>
                </div>
                <div>
                    <label class="switch">
                        <input type="checkbox" class="game-fd-switch" data-gameidx="${index}" ${(gameItem.localFD ?? false) ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                    <span>单独显示本游戏续作/FD角色</span>
                </div>
            </div>
          <div class="game-card-block-item char-section block-margin-gap">
            <button class="btn-character" data-gid="${gameItem.gameId}">选择角色 Character</button>
            ${getInnerSlidePanelHtml("char").replace('class="char-slide-panel-char"',`class="char-slide-panel-char ${charPanelClass}"`)}
            <div class="game-card-empty-tip char-card-wrapper char-selected-row" data-gid="${gameItem.gameId}">${renderSelectedChar(gameItem, gameInfo) || `<div class="empty-hint">暂未选择角色</div>`}</div>
          </div>
          <div class="game-card-block-item cp-group block-margin-gap">
            <button class="btn-couple" data-gid="${gameItem.gameId}">选择CP Couple</button>
            ${getInnerSlidePanelHtml("cp").replace('class="char-slide-panel-cp"',`class="char-slide-panel-cp ${cpPanelClass}"`)}
            <div class="game-card-empty-tip cp-render-box" data-gid="${gameItem.gameId}">${renderCP(gameItem, gameInfo) || `<div class="empty-hint">暂未选择CP</div>`}</div>
          </div>
          <div class="card-bottom-buttons block-margin-gap">
            <button class="btn-fold fold-game btn-gray-bg" data-gid="${gameItem.gameId}">折叠</button>
            <button class="btn-del del-game btn-gray-bg" data-gid="${gameItem.gameId}">删除</button>
          </div>
        </div>
        `;
      });

      el.addedGameBox.innerHTML = html;
      bindGameCardEvent();

      document.querySelectorAll(".added-game-card").forEach(cardDom => {
        const gid = cardDom.dataset.gameid;
        const gameItem = appData.gameList.find(g => g.gameId === gid);
        const gameInfo = gameTemplateList.find(g => g.id === gid);
        if(!gameItem || !gameInfo) return;

        const charPanel = cardDom.querySelector(".char-slide-panel-char");
        const cpPanel = cardDom.querySelector(".char-slide-panel-cp");
        if(charPanel) renderCharSelectPanel(cardDom, gid, "char", charPanel);
        if(cpPanel) renderCharSelectPanel(cardDom, gid, "cp", cpPanel);
      });
    }

    window.refreshGameCardUi = () => renderAddedGame(el);

    // ==========【全局事件委托：角色立绘左右切换，卡片内面板生效】==========
    document.addEventListener("click", function (e) {
      const switchBtn = e.target.closest(".char-switch-btn");
      if (!switchBtn) return;
      e.stopPropagation();

      const charCard = switchBtn.closest(".char-item, .char-card-item");
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
      if(!appData.charImageSelect) appData.charImageSelect = {};
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
    });

    // ==========【修复：btn-character / btn-couple 全局事件委托】==========
    document.addEventListener("click", function(e){
      const charBtn = e.target.closest(".btn-character");
      if(charBtn){
        const gid = charBtn.dataset.gid;
        const gameItem = appData.gameList.find(g=>g.gameId === gid);
        if(!gameItem) return;
        gameItem.charPanelOpen = !gameItem.charPanelOpen;
        if(gameItem.charPanelOpen){
          gameItem.cpPanelOpen = false;
        }
        saveData();
        window.refreshGameCardUi();
        return;
      }

      const cpBtn = e.target.closest(".btn-couple");
      if(cpBtn){
        const gid = cpBtn.dataset.gid;
        const gameItem = appData.gameList.find(g=>g.gameId === gid);
        if (!gameItem) return;
        gameItem.cpPanelOpen = !gameItem.cpPanelOpen;
        if(gameItem.cpPanelOpen){
          gameItem.charPanelOpen = false;
        }
        saveData();
        window.refreshGameCardUi();
        return;
      }
    });

    // ✅ 卡片内滑出面板角色勾选事件委托
    document.addEventListener("click", function(e){
      const switchBtn = e.target.closest(".char-switch-btn");
      if(switchBtn) return;

      const charItem = e.target.closest(".char-slide-panel-char .char-item, .char-slide-panel-cp .char-item");
      if(!charItem) return;

      const cid = charItem.dataset.cid;
      const gameId = charItem.dataset.gameId;
      const gameItem = appData.gameList?.find(g=>g.gameId === gameId);
      if(!gameItem) return;

      if (!Array.isArray(gameItem.selectChars)) gameItem.selectChars = [];
      const idx = gameItem.selectChars.indexOf(cid);
      if (idx > -1) {
        gameItem.selectChars.splice(idx, 1);
      } else {
        gameItem.selectChars.push(cid);
      }

      const panel = charItem.closest(".char-slide-panel-char");
      if(panel){
        gameItem.charPanelOpen = false;
      }else{
        gameItem.cpPanelOpen = false;
      }
      saveData();
      window.refreshGameCardUi();
    });

    // ✅面板内部关闭按钮（×）
    document.addEventListener("click", function(e){
      const closeBtn = e.target.closest(".panel-close-btn");
      if(!closeBtn) return;

      const panel = closeBtn.closest(".char-slide-panel-char, .char-slide-panel-cp");
      if(!panel) return;

      const card = panel.closest(".added-game-card");
      const gid = card.dataset.gameid;
      const gameItem = appData.gameList.find(g=>g.gameId === gid);
      if(!gameItem) return;

      if(panel.classList.contains("char-slide-panel-char")){
        gameItem.charPanelOpen = false;
      }else{
        gameItem.cpPanelOpen = false;
      }
      saveData();
      window.refreshGameCardUi();
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

    loadData();

    if(Array.isArray(appData.gameList)){
      appData.gameList.forEach(g=>{
        if(typeof g.charPanelOpen !== "boolean") g.charPanelOpen = false;
        if(typeof g.cpPanelOpen !== "boolean") g.cpPanelOpen = false;
        if(typeof g.loveRate !== "number") g.loveRate = 0;
      });
    }

    if (el.inputNick) el.inputNick.value = appData.baseInfo?.nick ?? "";
    if (el.inputCount) el.inputCount.value = appData.baseInfo?.count ?? "";
    if (el.inputStory) el.inputStory.value = appData.baseInfo?.story ?? "";
    if (el.inputFirstgame) el.inputFirstgame.value = appData.baseInfo?.firstgame ?? "";

    const colorBindList = [
      {dom: el.colorBg, dataKey: "bg"},
      {dom: el.colorTitle, dataKey: "title"},
      {dom: el.colorText, dataKey: "text"},
      {dom: el.colorBorder, dataKey: "border"}
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

    const baseInputMap = [
      {dom: el.inputNick, key: "nick"},
      {dom: el.inputCount, key: "count"},
      {dom: el.inputStory, key: "story"},
      {dom: el.inputFirstgame, key: "firstgame"}
    ];
    baseInputMap.forEach(item => {
      if (!item.dom) return;
      item.dom.oninput = function () {
        if(!appData.baseInfo) appData.baseInfo = {};
        appData.baseInfo[item.key] = this.value;
        saveData();
      }
    })

    if (el.addGameBtn) {
      el.addGameBtn.onclick = function () {
        renderGameSelectList();
        //【修复】打开搜索面板，使用.active
        if (el.searchPanel) el.searchPanel.classList.add("active");
      }
    }

    if (el.gameSearchInput) {
      el.gameSearchInput.addEventListener("input", renderGameSelectList);
    }

    const filterSelectIds = ["filter-year", "filter-publisher", "filter-cn", "filter-writer", "filter-art"];
    filterSelectIds.forEach(selId => {
      const sel = document.getElementById(selId);
      if (sel) sel.addEventListener("change", renderGameSelectList);
    });

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

        if (filterWriter) {
          let writerArr = [];
          if (Array.isArray(game.writer)) {
            writerArr = game.writer;
          } else if (typeof game.writer === "string") {
            writerArr = [game.writer];
          }
          if (!writerArr.includes(filterWriter)) match = false;
        }

        if(filterArt){
          let artArr = Array.isArray(game.art) ? game.art : [game.art];
          if(!artArr.includes(filterArt)) match = false;
        }

        if (!match) return;
        html += `<div class="game-option-item" data-game-id="${game.id}">` + renderGameSelectItem(game) + `</div>`;
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
            charPanelOpen: false,
            cpPanelOpen: false,
            localHideChar: false,
            localFD: false,
            loveRate: 0,
            selectChars: [],
            cpList: []
          };
          if(!appData.gameList) appData.gameList = [];
          appData.gameList.push(newGameData);
          saveData();

          //【修复】关闭搜索面板，使用.active
          if (el.searchPanel) el.searchPanel.classList.remove("active");
          window.refreshGameCardUi();
        }
      })
    }

    function bindGameCardEvent() {
      document.querySelectorAll(".fold-game").forEach(btn => {
        btn.onclick = () => {
          const gid = btn.dataset.gid;
          const gameItem = appData.gameList?.find(g => g.gameId === gid);
          if (!gameItem) return;
          gameItem.fold = !gameItem.fold;
          saveData();
          window.refreshGameCardUi();
        }
      })

      document.querySelectorAll(".del-game").forEach(btn => {
        btn.onclick = () => {
          const gid = btn.dataset.gid;
          appData.gameList = appData.gameList.filter(g => g.gameId !== gid);
          saveData();
          window.refreshGameCardUi();
        }
      })

      document.querySelectorAll(".heart-rate").forEach(box => {
        const gid = box.dataset.gid;
        const gameItem = appData.gameList?.find(g => g.gameId === gid);
        if (!gameItem) return;

        box.querySelectorAll(".heart").forEach(h => {
          h.onclick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            e.stopImmediatePropagation();
            gameItem.loveRate = Number(h.dataset.val);
            saveData();

            const allHearts = box.querySelectorAll(".heart");
            allHearts.forEach(ht => {
              const val = Number(ht.dataset.val);
              if(val <= gameItem.loveRate){
                ht.classList.add("active");
              }else{
                ht.classList.remove("active");
              }
            });
          }
        })
      })
    }

    if (el.exportBtn && el.snapshotContainer) {
      el.exportBtn.addEventListener('click', async () => {
        try {
          if(typeof html2canvas !== "function"){
            alert("缺少 html2canvas 库，无法导出图片，请检查html引入");
            return;
          }
          el.exportBtn.disabled = true;
          el.exportBtn.textContent = "正在生成图片...";

          const baseInfo = appData.baseInfo ?? {};
          const infoArr = [
            {el: el.inputNick, text: baseInfo.nick ? `昵称：${baseInfo.nick}` : null},
            {el: el.inputCount, text: baseInfo.count !== "" ? `游玩总数：${baseInfo.count}` : null},
            {el: el.inputStory, text: baseInfo.story ? `入坑时间：${baseInfo.story}` : null},
            {el: el.inputFirstgame, text: baseInfo.firstgame ? `入坑作品：${baseInfo.firstgame}` : null}
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

    // ✅仅启动时执行一次事件委托绑定，卡片渲染完成后
    if (typeof bindDynamicGameCardSwitchEvents === "function") {
      bindDynamicGameCardSwitchEvents();
    }

    window.refreshGameCardUi();
  }

  function openCharSelectModal(){}
  function renderCharSelectList(){}
  window.openCharSelectModal = openCharSelectModal;
  window.renderCharSelectList = renderCharSelectList;

  // 不再此处直接调用bootstrap，交给index.html时序控制
  window.uiBootstrap = bootstrap;
}
