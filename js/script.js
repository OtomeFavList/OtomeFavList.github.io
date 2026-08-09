// ===================== script.js UI交互层（模块化导出） =====================
// 【重要说明】剧透弹窗、全局开关click事件全部迁移至main.js，本文件不再处理全局开关点击逻辑
// 游戏卡片动态生成的局部开关：使用事件委托对接main.js剧透弹窗逻辑
// 改造：每个游戏卡片内部渲染两套独立滑出面板 char / cp；不再使用全局唯一char-slide-panel
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
  bindDynamicGameCardSwitchEvents,
  toggleCharItemSelect,
  toggleCpItemSelect,
  switchCharImage
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

    titleEl.innerText = `${gameInfo.name} — ${mode === "char" ? "选择角色 Character" : "选择角色 Couple"}`;

    // 废弃：renderLocalSwitchModalContent，开关已经渲染在卡片头部，此处不再调用
    const localWrap = panelDom.querySelector(".local-switch-wrap");
    if(localWrap) localWrap.innerHTML = "";

    const allChars = getAllGameChar(gameInfo);
    const femaleChars = allChars.filter(c => c.gender === "female");
    const maleChars = allChars.filter(c => c.gender === "male");

    if(mode === "char"){
        // ========= Character模式：原有全部逻辑完全保留，原样不动 =========
        let femHtml = "";
        femaleChars.forEach(char => {
            const imgsUnitList = getAvailableCharImages(char, appData.globalHideChar, appData.globalFD, gameItem.localHideChar, gameItem.localFD);
            if (imgsUnitList.length === 0) return;

            let allSrc = [];
            imgsUnitList.forEach(u => allSrc.push(...u.srcList));
            if (allSrc.length === 0) return;

            // char模式专属key【修改：替换旧key】
            const saveKey = `${gameId}-${char.id}`;
            if(!appData.charImageSelect) appData.charImageSelect = {};
            let imgIndex = Number(appData.charImageSelect?.[saveKey] ?? 0);
            if (imgIndex >= allSrc.length) imgIndex = 0;
            const showSrc = allSrc[imgIndex];
            let selected = gameItem.selectChars?.includes(char.id) ? "selected" : "";

            femHtml += `
            <div class="char-item ${selected}" data-cid="${char.id}" data-char-id="${char.id}" data-game-id="${gameId}" data-total-img="${allSrc.length}" data-panel-mode="char">
              <div class="char-card-img-box ${allSrc.length>1?'char-multi-img':''}">
                ${allSrc.length>1?`<button class="char-switch-btn char-switch-prev" data-char-id="${char.id}" data-game-id="${gameId}" data-panel-mode="char">&lt;</button>`: ""}
                <img src="${showSrc}" alt="${char.name}" decoding="async">
                ${allSrc.length>1?`<button class="char-switch-btn char-switch-next" data-char-id="${char.id}" data-game-id="${gameId}" data-panel-mode="char">&gt;</button>`: ""}
              </div>
              <div class="char-card-name">${char.name}</div>
            </div>`;
        });
        heroineBox.innerHTML = femHtml;

        let maleHtml = "";
        maleChars.forEach(char => {
            const imgsUnitList = getAvailableCharImages(char, appData.globalHideChar, appData.globalFD, gameItem.localHideChar, gameItem.localFD);
            if (imgsUnitList.length === 0) return;

            let allSrc = [];
            imgsUnitList.forEach(u => allSrc.push(...u.srcList));
            if (allSrc.length === 0) return;

            // char模式专属key【修改：替换旧key】
            const saveKey = `${gameId}-${char.id}`;
            if(!appData.charImageSelect) appData.charImageSelect = {};
            let imgIndex = Number(appData.charImageSelect?.[saveKey] ?? 0);
            if (imgIndex >= allSrc.length) imgIndex = 0;
            const showSrc = allSrc[imgIndex];
            let selected = gameItem.selectChars?.includes(char.id) ? "selected" : "";

            maleHtml += `
            <div class="char-item ${selected}" data-cid="${char.id}" data-char-id="${char.id}" data-game-id="${gameId}" data-total-img="${allSrc.length}" data-panel-mode="char">
              <div class="char-card-img-box ${allSrc.length>1?'char-multi-img':''}">
                ${allSrc.length>1?`<button class="char-switch-btn char-switch-prev" data-char-id="${char.id}" data-game-id="${gameId}" data-panel-mode="char">&lt;</button>`: ""}
                <img src="${showSrc}" alt="${char.name}" decoding="async">
                ${allSrc.length>1?`<button class="char-switch-btn char-switch-next" data-char-id="${char.id}" data-game-id="${gameId}" data-panel-mode="char">&gt;</button>`: ""}
              </div>
              <div class="char-card-name">${char.name}</div>
            </div>`;
        });
        heroListBox.innerHTML = maleHtml;
    }else{
        // ====================== mode === "cp" 全新草稿模式逻辑 ======================
        // 兜底：旧存档没有cpEditState则自动生成【修改点1：增加femaleImgIndex:0】
        if(!Array.isArray(gameItem.cpEditState) || gameItem.cpEditState.length ===0){
            gameItem.cpEditState = femaleChars.map(f=>({
                femaleId: f.id,
                openMalePanel: false,
                maleIds: [],
                maleItems: [],
                femaleImgIndex: 0
            }));
        }

        // 【修改点1】tempCpDraftMap改为 Map<mid,imgIndex>
        const tempCpDraftMap = {};
        femaleChars.forEach(fChar=>{
            const state = gameItem.cpEditState.find(s=>s.femaleId === fChar.id);
            if(state){
                const m = new Map();
                if(Array.isArray(state.maleItems)){
                    state.maleItems.forEach(mi=>{
                        m.set(mi.charId, mi.imgIndex ?? 0);
                    })
                }
                tempCpDraftMap[fChar.id] = m;
            }
        });

        // 渲染CP面板HTML：每一位女主作为可点击按钮；展开则下方显示该女主专属男主选择区，自动换行
        let cpPanelHtml = "";
        femaleChars.forEach(fChar=>{
            const state = gameItem.cpEditState.find(s=>s.femaleId === fChar.id);
            if(!state) return;
            const draftMap = tempCpDraftMap[fChar.id];

            const imgsUnitList = getAvailableCharImages(fChar, appData.globalHideChar, appData.globalFD, gameItem.localHideChar, gameItem.localFD);
            let allSrc = [];
            imgsUnitList.forEach(u=>allSrc.push(...u.srcList));
            if(allSrc.length === 0) return;

            //【修改点2：从cpEditState读取女主立绘下标，不再读appData.charImageSelect】
            let imgIndex = Number(state.femaleImgIndex ?? 0);
            if(imgIndex >= allSrc.length) imgIndex = 0;
            const showSrc = allSrc[imgIndex];

            // 女主卡片：增加data-char-id，多立绘渲染切换按钮，标记panel-mode="cp"
            cpPanelHtml += `
            <div class="cp-female-block" data-fid="${fChar.id}" data-gid="${gameId}">
                <!-- 女主点击按钮 -->
                <div class="cp-female-card-btn" 
                    data-fid="${fChar.id}" 
                    data-char-id="${fChar.id}" 
                    data-total-img="${allSrc.length}"
                    data-panel-mode="cp">
                    <div class="char-card-img-box ${allSrc.length>1?'char-multi-img':''}">
                        ${allSrc.length>1?`<button class="char-switch-btn char-switch-prev" data-char-id="${fChar.id}" data-game-id="${gameId}" data-total-img="${allSrc.length}" data-panel-mode="cp">&lt;</button>`:""}
                        <img src="${showSrc}" alt="${fChar.name}" decoding="async">
                        ${allSrc.length>1?`<button class="char-switch-btn char-switch-next" data-char-id="${fChar.id}" data-game-id="${gameId}" data-total-img="${allSrc.length}" data-panel-mode="cp">&gt;</button>`:""}
                    </div>
                    <div class="cp-female-name">${fChar.name}</div>
                </div>
                <!-- 如果openMalePanel=true，渲染该女主对应的男主候选列表 -->
                ${state.openMalePanel ? `
                <div class="cp-male-select-wrap" data-fid="${fChar.id}">
                    <div class="cp-male-title">为【${fChar.name}】选择角色</div>
                    <div class="cp-male-list">
                        ${maleChars.map(mChar=>{
                            const mImgs = getAvailableCharImages(mChar, appData.globalHideChar, appData.globalFD, gameItem.localHideChar, gameItem.localFD);
                            let mSrcArr = [];
                            mImgs.forEach(u=>mSrcArr.push(...u.srcList));
                            if(mSrcArr.length===0) return "";

                            //【修改点2】读取草稿map的imgIndex
                            let mImgIndex = 0;
                            if(draftMap && draftMap.has(mChar.id)){
                                mImgIndex = draftMap.get(mChar.id);
                            }else{
                                const mSaveKey = `cp-img-${gameId}-${mChar.id}`;
                                mImgIndex = Number(appData.charImageSelect?.[mSaveKey] ?? 0);
                            }
                            if(mImgIndex >= mSrcArr.length) mImgIndex = 0;
                            const mShowSrc = mSrcArr[mImgIndex];
                            const mSel = draftMap.has(mChar.id) ? "selected" : "";

                            return `
                            <div class="cp-male-item ${mSel}" 
                                data-fid="${fChar.id}" 
                                data-mid="${mChar.id}" 
                                data-char-id="${mChar.id}" 
                                data-game-id="${gameId}" 
                                data-total-img="${mSrcArr.length}"
                                data-panel-mode="cp">
                                <div class="char-card-img-box ${mSrcArr.length>1?'char-multi-img':''}">
                                    ${mSrcArr.length>1?`<button class="char-switch-btn char-switch-prev" data-char-id="${mChar.id}" data-game-id="${gameId}" data-total-img="${mSrcArr.length}" data-panel-mode="cp">&lt;</button>`:""}
                                    <img src="${mShowSrc}" alt="${mChar.name}" decoding="async">
                                    ${mSrcArr.length>1?`<button class="char-switch-btn char-switch-next" data-char-id="${mChar.id}" data-game-id="${gameId}" data-total-img="${mSrcArr.length}" data-panel-mode="cp">&gt;</button>`:""}
                                </div>
                                <div class="char-card-name">${mChar.name}</div>
                            </div>`;
                        }).join("")}
                    </div>
                </div>
                <!-- ✅按钮栏提升到cp‑male‑select‑wrap外部，cp‑female‑block直接子节点 -->
                <div class="cp-select-btn-bar">
                    <button class="cp-cancel-btn" data-fid="${fChar.id}" data-gid="${gameId}">取消</button>
                    <button class="cp-confirm-btn" data-fid="${fChar.id}" data-gid="${gameId}">确认</button>
                </div>
                ` : ""}
            </div>
            `;
        });

        // cp模式下，清空原有heroineBox/heroListBox，直接输出新排版
        heroineBox.innerHTML = "";
        heroListBox.innerHTML = cpPanelHtml;

        // ==========【修改点5：cpList带上femaleImgIndex】==========
        gameItem.cpList = gameItem.cpEditState
            .filter(st=> Array.isArray(st.maleItems) && st.maleItems.length>0)
            .map(st=>({
                femaleId: st.femaleId,
                femaleImgIndex: st.femaleImgIndex ?? 0,
                maleItems: st.maleItems.map(x=>({...x}))
            }));

        // 将草稿map挂载到panel dom上，事件委托可以读取
        panelDom._tempCpDraftMap = tempCpDraftMap;
    }
  }

  /**
   * 生成单个游戏卡片内部滑出面板HTML字符串
   * @param {'char'|'cp'} mode
   */
  function getInnerSlidePanelHtml(mode){
    const cls = mode === "char" ? "char-slide-panel-char" : "char-slide-panel-cp";
    // 移除hide-block，默认无class，靠 .active 控制显示
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
    // 防止多次调用bootstrap重复注册click监听
    if((window).__uiListenerRegistered) return;
    (window).__uiListenerRegistered = true;

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

      // =========【修复：第一步：预处理所有游戏数据，先补全cpEditState / cpList，不操作DOM】=========
      appData.gameList?.forEach((gameItem) => {
        if (!gameItem) return;
        const gameInfo = gameTemplateList.find(g => g.id === gameItem.gameId);
        if (!gameInfo) return;

        const allChars = getAllGameChar(gameInfo);
        const femaleChars = allChars.filter(c => c.gender === "female");

        //【修改点1：初始化增加femaleImgIndex:0】
        if(!Array.isArray(gameItem.cpEditState) || gameItem.cpEditState.length ===0){
            gameItem.cpEditState = femaleChars.map(f=>({
                femaleId: f.id,
                openMalePanel: false,
                maleIds: [],
                maleItems: [],
                femaleImgIndex: 0
            }));
        }
        // 预生成cpList，保证renderCP拿到最新数据【修改点5带上femaleImgIndex】
        gameItem.cpList = gameItem.cpEditState
            .filter(st=> Array.isArray(st.maleItems) && st.maleItems.length>0)
            .map(st=>({
                femaleId: st.femaleId,
                femaleImgIndex: st.femaleImgIndex ?? 0,
                maleItems: st.maleItems.map(x=>({...x}))
            }));
      });

      // 全部预处理完成，再拼接HTML
      let html = "";
      appData.gameList?.forEach((gameItem, index) => {
        if (!gameItem) return;
        const gameInfo = gameTemplateList.find(g => g.id === gameItem.gameId);
        if (!gameInfo) return;

        let heartHtml = "";
        for (let i = 1; i <= 5; i++) {
          heartHtml += `<span class="heart ${gameItem.loveRate >= i ? 'active' : ''}" data-val="${i}">♥</span>`;
        }

        // =========【新增：条件渲染本游戏局部开关】=========
        const hasLocalHideChar = gameInfo.charList.some(c => c.isHidden === true);
        const hasLocalFDChar = gameInfo.charList.some(c => c.isFD === true);

        let switchRowInnerHtml = "";
        if(hasLocalHideChar){
            switchRowInnerHtml += `
            <div>
                <label class="switch">
                    <input type="checkbox" class="game-hide-char" data-gameidx="${index}" ${(gameItem.localHideChar ?? false) ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
                <span>单独显示本游戏隐藏角色</span>
            </div>`;
        }
        if(hasLocalFDChar){
            switchRowInnerHtml += `
            <div>
                <label class="switch">
                    <input type="checkbox" class="game-fd-switch" data-gameidx="${index}" ${(gameItem.localFD ?? false) ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
                <span>单独显示本游戏续作/FD角色</span>
            </div>`;
        }
        const switchRowHtml = switchRowInnerHtml ? `<div class="game-switch-row">${switchRowInnerHtml}</div>` : "";
        // =========【新增结束】=========

        html += `
        <div class="added-game-card" data-gameid="${gameItem.gameId}">
          <div class="game-card-head">
            <h3>${gameInfo.name}</h3>
            <div class="heart-rate" data-gid="${gameItem.gameId}">
              ${heartHtml}
            </div>
            ${switchRowHtml}
          </div>
          <!-- ✅全部移出game-card-head，作为added-game-card直接子节点 -->
          <div class="game-card-block-item char-section block-margin-gap">
            <button class="btn-character" data-gid="${gameItem.gameId}">选择角色 Character</button>
            ${getInnerSlidePanelHtml("char")}
            <div class="game-card-empty-tip char-card-wrapper char-selected-row" data-gid="${gameItem.gameId}">${renderSelectedChar(gameItem, gameInfo) || `<div class="empty-hint">暂未选择角色</div>`}</div>
          </div>
          <div class="game-card-block-item cp-group block-margin-gap">
            <button class="btn-couple" data-gid="${gameItem.gameId}">选择角色 Couple</button>
            ${getInnerSlidePanelHtml("cp")}
            <div class="game-card-empty-tip cp-render-box" data-gid="${gameItem.gameId}">${renderCP(gameItem, gameInfo) || `<div class="empty-hint">暂未选择角色</div>`}</div>
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

        // DOM面板填充（只负责渲染滑出面板内部HTML，数据已经预处理完毕）
        if(charPanel) renderCharSelectPanel(cardDom, gid, "char", charPanel);
        if(cpPanel) renderCharSelectPanel(cardDom, gid, "cp", cpPanel);

        // 2.内容填充完毕，再根据状态打开面板
        if (!gameItem.fold) {
            if(gameItem.charPanelOpen) charPanel?.classList.add("active");
            if(gameItem.cpPanelOpen) cpPanel?.classList.add("active");
        }
      });
    }

    window.refreshGameCardUi = () => renderAddedGame(el);

    // ==========【全局事件委托：角色立绘左右切换 + CP全部业务逻辑】==========
    document.addEventListener("click", async function (e) {
      const switchBtn = e.target.closest(".char-switch-btn");
      if (switchBtn) {
        e.stopPropagation();

        const charCard = switchBtn.closest(".char-item, .char-card-item, .cp-female-card-btn, .cp-male-item");
        const charId = charCard.dataset.charId;
        const gameId = charCard.dataset.gameId;
        const panelMode = switchBtn.dataset.panelMode || charCard.dataset.panelMode;
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
        const saveKey = `${panelMode}-img-${gameId}-${charId}`;
        if(!appData.charImageSelect) appData.charImageSelect = {};
        let currentIndex = Number(appData.charImageSelect?.[saveKey] ?? 0);

        if (switchBtn.classList.contains("char-switch-next")) {
          currentIndex++;
          if (currentIndex >= allSrc.length) currentIndex = 0;
        } else {
          currentIndex--;
          if (currentIndex < 0) currentIndex = allSrc.length - 1;
        }

        appData.charImageSelect[saveKey] = currentIndex;

        //【修改点3】cp模式同步写入草稿map；如果是女主，回写到cpEditState.femaleImgIndex
        if(panelMode === "cp"){
            const cpPanel = charCard.closest(".char-slide-panel-cp");
            const fid = charCard.dataset.fid;
            const targetGameItem = appData.gameList?.find(g=>g.gameId === gameId);
            if(targetGameItem){
                const st = targetGameItem.cpEditState.find(s=>s.femaleId === fid);
                // 女主卡片：保存女主自身立绘下标
                if(st && charCard.classList.contains("cp-female-card-btn")){
                    st.femaleImgIndex = currentIndex;
                }
            }
            if(cpPanel && cpPanel._tempCpDraftMap && fid){
                const draftMap = cpPanel._tempCpDraftMap[fid];
                if(draftMap){
                    draftMap.set(charId, currentIndex);
                }
            }
        }

        saveData();
        await switchCharImage(imgDom, allSrc[currentIndex]);
        // =========【新增调试日志】=========
        console.log("saveKey", saveKey,"set index",currentIndex,"src",allSrc[currentIndex]);
        return; //处理完图片切换直接return，不再往下执行cp逻辑
      }

      // ============下面全部是原来CP事件逻辑（移到此处）============
      const cpFemaleBtn = e.target.closest(".cp-female-card-btn");
      if(cpFemaleBtn){
          e.stopPropagation();
          const fid = cpFemaleBtn.dataset.fid;
          const card = cpFemaleBtn.closest(".added-game-card");
          const gid = card.dataset.gameid;
          const gameItem = appData.gameList.find(g=>g.gameId === gid);
          if(!gameItem) return;
          const st = gameItem.cpEditState.find(s=>s.femaleId === fid);
          if(st){
              st.openMalePanel = !st.openMalePanel;
          }
          saveData();
          requestAnimationFrame(()=>{
              window.refreshGameCardUi();
          });
          return;
      }

      //【修改点4】点击男主item：优先从draftMap读取已更新下标，不再读DOM属性
      const cpMaleItem = e.target.closest(".cp-male-item");
      if(cpMaleItem){
          e.stopPropagation();
          const fid = cpMaleItem.dataset.fid;
          const mid = cpMaleItem.dataset.mid;
          const panel = cpMaleItem.closest(".char-slide-panel-cp");
          if(!panel) return;
          const draftMap = panel._tempCpDraftMap;
          if(!draftMap || !draftMap[fid]) return;
          const draftCharMap = draftMap[fid];

          if(draftCharMap.has(mid)){
              draftCharMap.delete(mid);
          }else{
              // 优先取草稿map中已经被切换按钮更新的下标；没有则0
              let currentIdx = 0;
              if(draftCharMap.has(mid)){
                  currentIdx = draftCharMap.get(mid);
              }
              draftCharMap.set(mid, currentIdx);
          }
          cpMaleItem.classList.toggle("selected", draftCharMap.has(mid));
          return;
      }

      //【修改点5】确认按钮：写入maleItems，保留maleIds兼容旧存档
      const cpConfirmBtn = e.target.closest(".cp-confirm-btn");
      if(cpConfirmBtn){
          e.stopPropagation();
          const fid = cpConfirmBtn.dataset.fid;
          const gid = cpConfirmBtn.dataset.gid;
          const panel = cpConfirmBtn.closest(".char-slide-panel-cp");
          const draftMap = panel._tempCpDraftMap;
          if(!draftMap || !draftMap[fid]) return;
          const gameItem = appData.gameList.find(g=>g.gameId === gid);
          if(!gameItem) return;

          const st = gameItem.cpEditState.find(s=>s.femaleId === fid);
          if(!st) return;
          const draftCharMap = draftMap[fid];
          st.maleItems = [];
          draftCharMap.forEach((imgIdx, cid)=>{
              st.maleItems.push({charId:cid, imgIndex: imgIdx});
          });
          // 旧字段兼容保留，不再业务读取
          st.maleIds = Array.from(draftCharMap.keys());

          gameItem.cpEditState.forEach(item=>{
              item.openMalePanel = false;
          });
          gameItem.cpPanelOpen = false;

          saveData();
          requestAnimationFrame(()=>{
              window.refreshGameCardUi();
          });
          return;
      }

      //取消按钮
      const cpCancelBtn = e.target.closest(".cp-cancel-btn");
      if(cpCancelBtn){
          e.stopPropagation();
          const fid = cpCancelBtn.dataset.fid;
          const gid = cpCancelBtn.dataset.gid;
          const gameItem = appData.gameList.find(g=>g.gameId === gid);
          if(!gameItem) return;
          const st = gameItem.cpEditState.find(s=>s.femaleId === fid);
          if(st){
              st.openMalePanel = false;
          }
          saveData();
          requestAnimationFrame(()=>{
              window.refreshGameCardUi();
          });
          return;
      }

      // ==========【修复：btn‑character / btn‑couple 全局事件委托】==========
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
        requestAnimationFrame(()=>{
            window.refreshGameCardUi();
        });
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
        requestAnimationFrame(()=>{
            window.refreshGameCardUi();
        });
        return;
      }

      // ✅ 卡片内滑出面板角色勾选事件委托【改动：调用main导出函数，区分面板类型】
      const charItem = e.target.closest(".char-slide-panel-char .char-item, .char-slide-panel-cp .char-item");
      if(charItem){
        const cid = charItem.dataset.cid;
        const gameId = charItem.dataset.gameId;
        const gameItem = appData.gameList?.find(g=>g.gameId === gameId);
        if(!gameItem) return;

        const panelChar = charItem.closest(".char-slide-panel-char");
        if(panelChar){
          toggleCharItemSelect(gameItem, cid);
          gameItem.charPanelOpen = false;
        }else{
          toggleCpItemSelect(gameItem, cid);
          gameItem.cpPanelOpen = false;
        }
        saveData();
        requestAnimationFrame(()=>{
            window.refreshGameCardUi();
        });
        return;
      }

      // ✅面板内部关闭按钮（×）
      const closeBtn = e.target.closest(".panel-close-btn");
      if(closeBtn){
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
        requestAnimationFrame(()=>{
            window.refreshGameCardUi();
        });
        return;
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

    // ============修复：加上await================
    await loadData();

    if(Array.isArray(appData.gameList)){
      appData.gameList.forEach(g=>{
        if(typeof g.charPanelOpen !== "boolean") g.charPanelOpen = false;
        if(typeof g.cpPanelOpen !== "boolean") g.cpPanelOpen = false;
        if(typeof g.loveRate !== "number") g.loveRate = 0;
        if(!Array.isArray(g.selectChars)) g.selectChars = [];
        if(!Array.isArray(g.cpSelectIds)) g.cpSelectIds = [];
        if(!Array.isArray(g.cpEditState)) g.cpEditState = [];
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

    // ============【已修改：添加游戏按钮，支持再次点击关闭搜索面板】============
    if (el.addGameBtn) {
      el.addGameBtn.onclick = function () {
        renderGameSelectList();
        if (el.searchPanel) {
          if (el.searchPanel.classList.contains("active")) {
            el.searchPanel.classList.remove("active");
          } else {
            el.searchPanel.classList.add("active");
          }
        }
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

      // 修复：把zh‑CN（软连字符）改为标准 zh-CN
      const sortedGames = [...gameTemplateList].sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
      let html = "";

      sortedGames.forEach(game => {
        if (!game) return;
        let match = true;

        // =========【新增：渲染副本+按lang规则排序writer/art】=========
        const gameCopy = {...game};
        function sortStaffByLang(list) {
            if (!Array.isArray(list)) return [];
            const langOrder = { zh:0, ja:1, en:2 };
            return [...list].sort((a,b)=>{
                const oA = langOrder[a.lang] ?? 99;
                const oB = langOrder[b.lang] ?? 99;
                if(oA !== oB) return oA - oB;

                const nameA = a.name;
                const nameB = b.name;
                if(a.lang === "zh"){
                    return nameA.localeCompare(nameB,"zh-CN");
                }else if(a.lang === "ja"){
                    return nameA.localeCompare(nameB,"ja-JP");
                }else if(a.lang === "en"){
                    const lowerA = nameA.toLowerCase();
                    const lowerB = nameB.toLowerCase();
                    if(lowerA !== lowerB){
                        return lowerA.localeCompare(lowerB,"en");
                    }else{
                        return nameA.localeCompare(nameB,"en");
                    }
                }
                return nameA.localeCompare(nameB);
            });
        }
        gameCopy.writer = sortStaffByLang(game.writer);
        gameCopy.art = sortStaffByLang(game.art);
        // =========【新增代码结束】=========

        if (keyword && !game.name?.toLowerCase().includes(keyword)) match = false;
        if (filterYear && game.year != filterYear) match = false;
        if (filterPub && game.publisher != filterPub) match = false;
        if (filterCn && game.cnStudio != filterCn) match = false;

        // ========== writer / art 对象数组匹配逻辑，读取原始game，保持不变 ==========
        if (filterWriter) {
          let writerNameList = [];
          if (Array.isArray(game.writer)) {
            writerNameList = game.writer.map(o=>o.name);
          }
          if (!writerNameList.includes(filterWriter)) match = false;
        }

        if(filterArt){
          let artNameList = [];
          if(Array.isArray(game.art)){
            artNameList = game.art.map(o=>o.name);
          }
          if(!artNameList.includes(filterArt)) match = false;
        }

        if (!match) return;
        //传入排序副本 gameCopy
        html += `<div class="game-option-item" data-game-id="${game.id}">` + renderGameSelectItem(gameCopy) + `</div>`;
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
            cpSelectIds: [],
            cpList: [],
            cpEditState: []
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
          requestAnimationFrame(()=>{
              window.refreshGameCardUi();
          });
        }
      })

      document.querySelectorAll(".del-game").forEach(btn => {
        btn.onclick = () => {
          const gid = btn.dataset.gid;
          appData.gameList = appData.gameList.filter(g => g.gameId !== gid);
          saveData();
          requestAnimationFrame(()=>{
              window.refreshGameCardUi();
          });
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
