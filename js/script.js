# 一、问题根源定位

## 现象复述

进入Couple面板，点击女主卡片展开男主列表时，**女主图片被重复渲染两份**。

## 根本原因

```
const charItem = e.target.closest(".char-slide-panel-char .char-item, .char-slide-panel-cp .char-item");
if (charItem) {
    const cid = charItem.dataset.cid;
    const gameId = charItem.dataset.gameId;
    const gameItem = appData.gameList?.find(g => g.gameId === gameId);
    if (!gameItem) return;

    const panelChar = charItem.closest(".char-slide-panel-char");
    if (panelChar) {
        // char模式逻辑
    } else {
        // cp模式保持原有逻辑不变
        toggleCpItemSelect(gameItem, cid);
        gameItem.cpPanelOpen = false;
        saveData();
        clearPreviewCacheResource();
        requestAnimationFrame(() => {
            window.refreshGameCardUi();
        });
        return;
    }
}
```

这段事件委托匹配规则**范围错误**：
`.char-slide-panel-cp .char-item` 在cp面板里不存在！
cp面板女主DOM类名是 `.cp-female-card-btn`，男主DOM是 `.cp-male-item`。
但是选择器 `char-slide-panel-cp .char-item` 永远匹配不到；
**真正致命逻辑：早期遗留代码把`toggleCpItemSelect`绑定在了错误选择器，而现在新版cp已经完全重构为`cp-female-card-btn / cp-male-item`草稿模式，但是这段旧分支没有被清理。**

> 
> 更深层连锁触发：

1. 点击 `.cp-female-card-btn`（女主）执行 `cpFemaleBtn` 分支 → 修改 `st.openMalePanel = !st.openMalePanel`
2. 执行 `refreshGameCardUi()` 整卡片重渲染面板
3. **同时，点击女主图片内部`<img>`、外层容器，事件冒泡命中了【失效旧charItem选择器】下方的隐患？不，真正核心：**
✅**真实根因：**
你当前代码里**两套独立触发刷新逻辑**
4. `cpFemaleBtn` 点击女主 → `refreshGameCardUi()`（正确，只负责展开/收起男主面板）
5. **历史遗留废弃分支：`charItem` 选择器里的 `else` 分支是旧cp单选逻辑，现在已经完全不用，但这段代码存在，并且**存在DOM冒泡误判叠加刷新**；
并且还有一个隐藏BUG：> 
> 在 `renderCharSelectPanel` cp模式渲染HTML时，`cp-female-card-btn` 只是切换展开状态，**但是每次刷新整个面板会完整重绘所有女主DOM**，同时事件委托里，**点击女主图片时，没有阻止某条旧分支重复触发渲染**。

# 终极精准根因（一行定位）

```
// 错误选择器
const charItem = e.target.closest(".char-slide-panel-char .char-item, .char-slide-panel-cp .char-item");
```

`char-slide-panel-cp .char-item` 在当前cp面板HTML**不存在**，cp面板角色元素：

- 女主：`.cp-female-card-btn`
- 男主：`.cp-male-item`

**但是！这段代码存在巨大隐患：当你点击cp面板内任意元素，如果事件冒泡产生匹配混淆，并且最重要：**
**旧cp业务逻辑（toggleCpItemSelect）完全废弃，新版cp使用草稿模式、cpConfirmBtn统一提交，但是旧分支没有删除！**
当点击女主时，事件冒泡流程叠加，**出现两次执行渲染**：

1. cpFemaleBtn分支触发一次 `refreshGameCardUi()`
2. 若元素冒泡意外命中旧charItem分支，再次触发刷新 → 面板重新渲染，女主图片重复生成。

另外一个次要诱因：

```
cpPanelHtml += `
<div class="cp-female-block" data-fid="${fChar.id}" data-gid="${gameId}">
    <div class="cp-female-card-btn" ...>
        <img>女主图片
    </div>
    ${state.openMalePanel ? `cp-male-select-wrap（男主列表）` : ""}
</div>`
```

每次`refreshGameCardUi`会完整重建`cpPanelHtml`，**没有做局部DOM更新，是整段innerHTML覆盖重绘**。
当**连续两次执行刷新**，渲染函数执行两次，HTML拼接两次 → 视觉上出现两张女主图片。

# 核心修复方案

1. **彻底删除废弃的旧cp charItem分支（最关键）**，新版cp不再使用`toggleCpItemSelect`，全部走草稿+确认按钮模式；
2. 修正`charItem`选择器，**只匹配char模式面板内的.char-item**，剔除cp面板无效选择器；
3. 保证：点击女主`.cp-female-card-btn`**仅执行一次刷新**，杜绝双重刷新；
4. 校验：cp模式下不再进入任何旧cp单选分支。

# 修改前后完整代码对比

## 修改前（错误代码片段，位于全局click事件委托内部）

```
      // ✅ 卡片内滑出面板角色勾选事件委托【改动：调用main导出函数，区分面板类型】
      const charItem = e.target.closest(".char-slide-panel-char .char-item, .char-slide-panel-cp .char-item");
      if (charItem) {
          const cid = charItem.dataset.cid;
          const gameId = charItem.dataset.gameId;
          const gameItem = appData.gameList?.find(g => g.gameId === gameId);
          if (!gameItem) return;

          const panelChar = charItem.closest(".char-slide-panel-char");
          if (panelChar) {
              // ========= char模式：仅操作本地草稿集合，不写真实数据 =========
              const draftSet = panelChar._tempCharDraftSet;
              if(!draftSet) return;
              if(draftSet.has(cid)){
                  draftSet.delete(cid);
                  charItem.classList.remove("selected");
              }else{
                  draftSet.add(cid);
                  charItem.classList.add("selected");
              }
              // ❗不保存、不关闭面板，等待用户点确认/取消
              return;
          } else {
              // cp模式保持原有逻辑不变
              toggleCpItemSelect(gameItem, cid);
              gameItem.cpPanelOpen = false;
              saveData();
              clearPreviewCacheResource(); // 缓存失效
              requestAnimationFrame(() => {
                  window.refreshGameCardUi();
              });
              return;
          }
      }
```

## 修改后（修复代码）

```
      // ✅ 卡片内滑出面板角色勾选事件委托：仅处理char模式面板角色勾选
      const charItem = e.target.closest(".char-slide-panel-char .char-item");
      if (charItem) {
          const cid = charItem.dataset.cid;
          const gameId = charItem.dataset.gameId;
          const gameItem = appData.gameList?.find(g => g.gameId === gameId);
          if (!gameItem) return;

          const panelChar = charItem.closest(".char-slide-panel-char");
          if (panelChar) {
              // ========= char模式：仅操作本地草稿集合，不写真实数据 =========
              const draftSet = panelChar._tempCharDraftSet;
              if(!draftSet) return;
              if(draftSet.has(cid)){
                  draftSet.delete(cid);
                  charItem.classList.remove("selected");
              }else{
                  draftSet.add(cid);
                  charItem.classList.add("selected");
              }
              // ❗不保存、不关闭面板，等待用户点确认/取消
              return;
          }
          // 【移除旧cp废弃分支，新版cp全部使用cp-maleItem + 确认按钮草稿模式】
          return;
      }
```

# 完整替换区间（在你script.js精确位置）

找到代码区域：

```
      // ✅ 卡片内滑出面板角色勾选事件委托【改动：调用main导出函数，区分面板类型】
      const charItem = e.target.closest(......);
      if (charItem) {
          // ...一大段代码包含else旧cp逻辑
      }
```

**整段替换为上面修复后的代码。**

# 额外增强校验（防止依然出现重复渲染，可选建议）

## 隐患补充：cpFemaleBtn 点击逻辑增加防重复执行锁

当前代码：

```
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
          clearPreviewCacheResource(); // 缓存失效
          requestAnimationFrame(()=>{
              window.refreshGameCardUi();
          });
          return;
      }
```

### 优化版本（增加防抖动，避免快速多次点击触发多次渲染）

```
      // 建议在bootstrap顶层作用域新增变量（放在全局click外面）
      let cpPanelRenderLock = false;

      // 然后修改cpFemaleBtn分支
      const cpFemaleBtn = e.target.closest(".cp-female-card-btn");
      if(cpFemaleBtn){
          e.stopPropagation();
          if(cpPanelRenderLock) return;
          cpPanelRenderLock = true;

          const fid = cpFemaleBtn.dataset.fid;
          const card = cpFemaleBtn.closest(".added-game-card");
          const gid = card.dataset.gameid;
          const gameItem = appData.gameList.find(g=>g.gameId === gid);
          if(!gameItem) {
              cpPanelRenderLock = false;
              return;
          }
          const st = gameItem.cpEditState.find(s=>s.femaleId === fid);
          if(st){
              st.openMalePanel = !st.openMalePanel;
          }
          saveData();
          clearPreviewCacheResource();
          requestAnimationFrame(()=>{
              window.refreshGameCardUi();
              // 渲染完成释放锁
              setTimeout(()=>{
                  cpPanelRenderLock = false;
              }, 80);
          });
          return;
      }
```

> 
> 作用：快速连续点击女主不会多次触发refreshGameCardUi，杜绝短时间多次重绘造成DOM重复。

# 为什么这样修复就能解决“多出一张女主图片”

1. 删除了**已经废弃的旧cp单选分支**，消除了第二条`refreshGameCardUi()`执行通路；
2. charItem选择器不再包含cp面板，点击cp面板任何元素不会误入旧逻辑；
3. 现在点击女主展开面板**只有唯一一条刷新执行链路**：`cpFemaleBtn → 单次refreshGameCardUi`；
4. 不再存在“两次连续渲染面板HTML”，innerHTML不会拼接两次女主卡片，图片不会重复生成。

# 操作执行顺序

1. 先替换 `charItem` 选择器以及内部if-else代码（核心修复，必做）；
2. 刷新页面测试Couple面板点击女主，观察是否还会重复出现女主图片；
3. 如果仍偶发重复，再加上 `cpPanelRenderLock` 防抖动锁（可选增强）。

请严格按照以上内容对script.js文件进行修复后输出完整代码：// ===================== script.js UI交互层（模块化导出） =====================
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
  switchCharImage,
  switchCharImageWithLoading
} from './main.js';

// ========== 导入原生Canvas绘制导出模块 ==========
import { renderExportCanvas } from './export-canvas-render.js';

// ========== 导出预览全局状态锁与缓存 ==========
let isRendering = false;
let snapshotBlobCache = null;
// 【新增】全局保存所有预览页面url列表，用于多页预览
let previewPageUrlList = [];

// 缓存使用完毕后释放资源公共函数
function clearPreviewCacheResource() {
    // 释放所有分页图片资源
    previewPageUrlList.forEach(url => {
        if (url) URL.revokeObjectURL(url);
    });
    previewPageUrlList = [];
    snapshotBlobCache = null;
}

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

    // ==========新增：本面板图片预加载收集池==========
    const preloadSrcList = [];

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
        // ========= Character模式：改为草稿临时勾选，确认才写入真实数据 =========
        // 临时草稿集合，只在本次面板生命周期有效 Set<string>
        const tempCharDraftSet = new Set(gameItem.selectChars);

        let femHtml = "";
        femaleChars.forEach(char => {
            const imgsUnitList = getAvailableCharImages(char, appData.globalHideChar, appData.globalFD, gameItem.localHideChar, gameItem.localFD);
            if (imgsUnitList.length === 0) return;

            let allSrc = [];
            imgsUnitList.forEach(u => allSrc.push(...u.srcList));
            if (allSrc.length === 0) return;

            // 新增：加入预加载池
            preloadSrcList.push(...allSrc);

            // ★★★ 修改点：将 saveKey 改为带 char-img- 前缀 ★★★
            const saveKey = `char-img-${gameId}-${char.id}`;
            if(!appData.charImageSelect) appData.charImageSelect = {};
            let imgIndex = Number(appData.charImageSelect?.[saveKey] ?? 0);
            if (imgIndex >= allSrc.length) imgIndex = 0;
            const showSrc = allSrc[imgIndex];
            // ✅重点：selected 来自临时草稿，不再读取 gameItem.selectChars
            let selected = tempCharDraftSet.has(char.id) ? "selected" : "";

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

            // 新增
            preloadSrcList.push(...allSrc);

            // ★★★ 修改点：将 saveKey 改为带 char-img- 前缀 ★★★
            const saveKey = `char-img-${gameId}-${char.id}`;
            if(!appData.charImageSelect) appData.charImageSelect = {};
            let imgIndex = Number(appData.charImageSelect?.[saveKey] ?? 0);
            if (imgIndex >= allSrc.length) imgIndex = 0;
            const showSrc = allSrc[imgIndex];
            // ✅重点：selected 来自临时草稿
            let selected = tempCharDraftSet.has(char.id) ? "selected" : "";

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

        // ✅追加确认/取消按钮栏，直接复用cp的css类
        const btnBarHtml = `
        <div class="cp-select-btn-bar">
            <button class="char-panel-cancel-btn" data-gid="${gameId}">取消</button>
            <button class="char-panel-confirm-btn" data-gid="${gameId}">确认</button>
        </div>`;
        panelDom.insertAdjacentHTML('beforeend', btnBarHtml);

        // 将草稿集合挂载到panelDom，委托事件可以读取
        panelDom._tempCharDraftSet = tempCharDraftSet;
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

            // 新增：女主全部立绘加入预加载
            preloadSrcList.push(...allSrc);

            //【修改点2：从cpEditState读取女主立绘下标，不再读appData.charImageSelect】
            let imgIndex = Number(state.femaleImgIndex ?? 0);
            if(imgIndex >= allSrc.length) imgIndex = 0;
            const showSrc = allSrc[imgIndex];

            // 女主卡片：增加data-char-id，多立绘渲染切换按钮，标记panel-mode="cp"
            // ★★★ 修复点：为 cp-female-card-btn 添加 data-game-id 属性 ★★★
            cpPanelHtml += `
            <div class="cp-female-block" data-fid="${fChar.id}" data-gid="${gameId}">
                <!-- 女主点击按钮 -->
                <div class="cp-female-card-btn" 
                    data-fid="${fChar.id}" 
                    data-char-id="${fChar.id}" 
                    data-game-id="${gameId}"
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

                            // 新增：该男主全部立绘加入预加载池
                            preloadSrcList.push(...mSrcArr);

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
                <!-- ✅按钮栏提升到cp-male-select-wrap外部，cp-female-block直接子节点 -->
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

    // ==========渲染HTML全部完成后，执行空闲预加载==========
    if(Core && typeof Core.preloadImagesInIdle === "function" && preloadSrcList.length > 0){
        // 去重：避免同一个图片url多次传入
        const uniqueSrc = [...new Set(preloadSrcList)];
        Core.preloadImagesInIdle(uniqueSrc);
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
      // =========新增：小标题色和游戏名色==========
      colorSubtitle: document.getElementById("color-subtitle"),
      colorGamename: document.getElementById("color-gamename"),
      exportBtn: document.getElementById("btn-export"),
      canvas: document.getElementById("export-canvas"),
      snapshotContainer: document.getElementById("snapshot-container"),
      // =========新增：导出折叠内容开关==========
      exportFoldContentSwitch: document.getElementById("export-fold-content"),
      // =========新增：恢复默认配色按钮==========
      resetColorBtn: document.getElementById("btn-reset-color")
    };

    // ========== 预览弹窗元素 ==========
    const previewModal = document.getElementById("export-preview-modal");
    const previewScrollWrap = previewModal?.querySelector(".preview-scroll-wrap");
    const previewCloseBtn = document.getElementById("preview-close-btn");
    const previewRegenBtn = document.getElementById("preview-regen-btn");
    const previewDownloadBtn = document.getElementById("preview-download-btn");

    // ========== 预览弹窗按钮事件绑定 ==========
    if (previewModal) {
        // 点击遮罩关闭
        previewModal.addEventListener("click", function(e) {
            if (e.target === previewModal) {
                previewModal.classList.remove("active");
                clearPreviewCacheResource();
            }
        });

        // 关闭按钮
        if (previewCloseBtn) {
            previewCloseBtn.addEventListener("click", () => {
                previewModal.classList.remove("active");
                clearPreviewCacheResource();
            });
        }

        // 重新生成按钮
        if (previewRegenBtn) {
            previewRegenBtn.addEventListener("click", () => {
                previewModal.classList.remove("active");
                // 触发重新生成
                if (el.exportBtn) el.exportBtn.click();
            });
        }

        // 导出按钮（默认行为，会被导出逻辑覆盖）
        // 注意：这里使用 addEventListener，但在导出逻辑中会重新赋值 onclick 以支持多页
        if (previewDownloadBtn) {
            previewDownloadBtn.addEventListener("click", () => {
                // 这个监听器会被导出逻辑中的 onclick 覆盖，但保留以防万一
                if (!snapshotBlobCache) return;
                const link = document.createElement('a');
                link.download = `Otome_FavList_${new Date().getTime()}.png`;
                link.href = URL.createObjectURL(snapshotBlobCache);
                link.click();
                previewModal.classList.remove("active");
                clearPreviewCacheResource();
            });
        }
    }

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

        // 使用 SVG 矢量爱心，防止移动端强制渲染为 emoji
        const heartSvg = `<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
        let heartHtml = "";
        for (let i = 1; i <= 5; i++) {
          heartHtml += `<span class="heart ${gameItem.loveRate >= i ? 'active' : ''}" data-val="${i}">${heartSvg}</span>`;
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
        <div class="added-game-card" data-gameid="${gameItem.gameId}" data-fold="${!!gameItem.fold}">
          <div class="game-card-head">
            <div class="game-card-head-title-wrap">
              <h3>${gameInfo.name}</h3>
              ${gameItem.fold ? `<button class="game-fold-icon-expand" data-gid="${gameItem.gameId}">▼</button>` : ''}
            </div>
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
      // ==========【新增】折叠状态：游戏标题旁图标展开按钮 ==========
      const iconExpandBtn = e.target.closest(".game-fold-icon-expand");
      if (iconExpandBtn) {
          e.stopPropagation();
          const gid = iconExpandBtn.dataset.gid;
          const gameItem = appData.gameList?.find(g => g.gameId === gid);
          if (!gameItem) return;
          // 图标按钮只做【展开】，只把fold置false
          gameItem.fold = false;
          saveData();
          clearPreviewCacheResource(); // 缓存失效
          requestAnimationFrame(()=>{
              window.refreshGameCardUi();
          });
          return;
      }

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
        // ========== 替换为带loading切换函数 ==========
        const imgBox = charCard.querySelector(".char-card-img-box");
        if(imgBox){
            await switchCharImageWithLoading(imgBox, allSrc[currentIndex]);
            // ========== 后备：强制更新图片 src（解决加载失败时图片不变的问题）==========
            const imgDom = imgBox.querySelector("img");
            if (imgDom && imgDom.src !== allSrc[currentIndex]) {
                imgDom.src = allSrc[currentIndex];
            }
        }
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
          clearPreviewCacheResource(); // 缓存失效
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
          clearPreviewCacheResource(); // 缓存失效
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
          clearPreviewCacheResource(); // 缓存失效
          requestAnimationFrame(()=>{
              window.refreshGameCardUi();
          });
          return;
      }

      // ==========【修复：btn-character / btn-couple 全局事件委托】==========
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
        clearPreviewCacheResource(); // 缓存失效
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
        clearPreviewCacheResource(); // 缓存失效
        requestAnimationFrame(()=>{
            window.refreshGameCardUi();
        });
        return;
      }

      // ========= char面板确认按钮：把草稿集合同步到真实 selectChars / selectCharItems，关闭面板 =========
      const charConfirmBtn = e.target.closest(".char-panel-confirm-btn");
      if(charConfirmBtn){
          e.stopPropagation();
          const gid = charConfirmBtn.dataset.gid;
          const panelDom = charConfirmBtn.closest(".char-slide-panel-char");
          const draftSet = panelDom._tempCharDraftSet;
          const gameItem = appData.gameList.find(g=>g.gameId === gid);
          if(!gameItem || !draftSet) return;

          // 1.清空旧selectChars、selectCharItems
          gameItem.selectChars = [];
          gameItem.selectCharItems = [];

          // 2.遍历草稿集合写入真实数据
          draftSet.forEach(charId=>{
              gameItem.selectChars.push(charId);
              // 读取当前面板内该角色的立绘下标（使用与切换一致的key）
              const imgIndex = Number(appData.charImageSelect[`char-img-${gid}-${charId}`] ?? 0);
              gameItem.selectCharItems.push({
                  charId: charId,
                  imgIndex: imgIndex
              });
          });

          // 关闭char面板
          gameItem.charPanelOpen = false;
          saveData();
          clearPreviewCacheResource(); // 缓存失效
          requestAnimationFrame(()=>window.refreshGameCardUi());
          return;
      }

      // ========= char面板取消按钮：丢弃草稿，直接关闭面板，不做任何修改 =========
      const charCancelBtn = e.target.closest(".char-panel-cancel-btn");
      if(charCancelBtn){
          e.stopPropagation();
          const gid = charCancelBtn.dataset.gid;
          const gameItem = appData.gameList.find(g=>g.gameId === gid);
          if(!gameItem) return;
          gameItem.charPanelOpen = false;
          saveData();
          clearPreviewCacheResource(); // 缓存失效
          requestAnimationFrame(()=>window.refreshGameCardUi());
          return;
      }

      // ✅ 卡片内滑出面板角色勾选事件委托【改动：调用main导出函数，区分面板类型】
      const charItem = e.target.closest(".char-slide-panel-char .char-item, .char-slide-panel-cp .char-item");
      if (charItem) {
          const cid = charItem.dataset.cid;
          const gameId = charItem.dataset.gameId;
          const gameItem = appData.gameList?.find(g => g.gameId === gameId);
          if (!gameItem) return;

          const panelChar = charItem.closest(".char-slide-panel-char");
          if (panelChar) {
              // ========= char模式：仅操作本地草稿集合，不写真实数据 =========
              const draftSet = panelChar._tempCharDraftSet;
              if(!draftSet) return;
              if(draftSet.has(cid)){
                  draftSet.delete(cid);
                  charItem.classList.remove("selected");
              }else{
                  draftSet.add(cid);
                  charItem.classList.add("selected");
              }
              // ❗不保存、不关闭面板，等待用户点确认/取消
              return;
          } else {
              // cp模式保持原有逻辑不变
              toggleCpItemSelect(gameItem, cid);
              gameItem.cpPanelOpen = false;
              saveData();
              clearPreviewCacheResource(); // 缓存失效
              requestAnimationFrame(() => {
                  window.refreshGameCardUi();
              });
              return;
          }
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
        clearPreviewCacheResource(); // 缓存失效
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

    // ========= 扩展颜色绑定：6项 =========
    const colorBindList = [
      {dom: el.colorBg, dataKey: "bg", default:"#fff7f9"},
      {dom: el.colorTitle, dataKey: "title", default:"#b33a3a"},
      {dom: el.colorSubtitle, dataKey: "subTitle", default:"#b85878"},
      {dom: el.colorText, dataKey: "text", default:"#c98fac"},
      {dom: el.colorGamename, dataKey: "gameName", default:"#000000"},
      {dom: el.colorBorder, dataKey: "border", default:"#f6a5b8"}
    ];
    colorBindList.forEach(item => {
      if (!item.dom) return;
      item.dom.value = appData.exportColor?.[item.dataKey] ?? item.default;
      item.dom.oninput = () => {
        if(!appData.exportColor) appData.exportColor = {};
        appData.exportColor[item.dataKey] = item.dom.value;
        saveData();
        clearPreviewCacheResource(); // 配色变更，缓存失效
        if (item.dataKey === "bg") document.body.style.background = item.dom.value;
      }
    });

    // =========【新增：恢复默认配色按钮事件】==========
    if(el.resetColorBtn){
      el.resetColorBtn.addEventListener("click", ()=>{
        // 重置每一项到默认值
        colorBindList.forEach(item=>{
          item.dom.value = item.default;
          if(!appData.exportColor) appData.exportColor = {};
          appData.exportColor[item.dataKey] = item.default;
          if(item.dataKey === "bg") document.body.style.background = item.default;
        });
        saveData();
        clearPreviewCacheResource();
      })
    }

    if (el.colorBg) document.body.style.background = appData.exportColor?.bg ?? "#ffffff";

    // =========【新增】渲染【导出折叠内容】开关初始状态 =========
    if (el.exportFoldContentSwitch) {
        el.exportFoldContentSwitch.checked = !!appData.exportFoldContent;
    }

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
        clearPreviewCacheResource(); // 基础信息变更，缓存失效
      }
    });

    // =========【新增】导出折叠内容开关事件 =========
    if (el.exportFoldContentSwitch) {
        el.exportFoldContentSwitch.addEventListener("change", function() {
            appData.exportFoldContent = this.checked;
            saveData();
            clearPreviewCacheResource(); // 开关变更，预览缓存失效
        });
    }

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

    // 导出尺寸单选 change 事件缓存失效
    document.querySelectorAll('input[name="export-size"]').forEach(radio => {
        radio.addEventListener("change", () => {
            clearPreviewCacheResource();
        });
    });

    function renderGameSelectList() {
      if (!el.gameSearchInput || !el.gameSelectList || !Array.isArray(gameTemplateList)) return;

      const keyword = el.gameSearchInput.value.toLowerCase();
      const filterYear = document.getElementById("filter-year")?.value || "";
      const filterPub = document.getElementById("filter-publisher")?.value || "";
      const filterCn = document.getElementById("filter-cn")?.value || "";
      const filterWriter = document.getElementById("filter-writer")?.value || "";
      const filterArt = document.getElementById("filter-art")?.value || "";

      // 修复：把zh-CN（软连字符）改为标准 zh-CN
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
          clearPreviewCacheResource(); // 游戏列表变更，缓存失效

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
          clearPreviewCacheResource(); // 折叠状态变更，缓存失效
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
          clearPreviewCacheResource(); // 删除游戏，缓存失效
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
            clearPreviewCacheResource(); // 评分变更，缓存失效

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

    // ========== 导出按钮：先弹窗后渲染（原生Canvas绘制，无DOM捕获，支持分页） ==========
    if (el.exportBtn) {
        el.exportBtn.addEventListener('click', async () => {
            let unlockTimer = null;
            if (isRendering) {
                alert("正在渲染中，请稍候！");
                return;
            }
            clearPreviewCacheResource();
            isRendering = true;

            // 超时兜底：15秒强制解锁
            unlockTimer = setTimeout(() => {
                isRendering = false;
                console.warn("渲染超时，强制解除渲染锁");
            }, 15000);

            const previewModal = document.getElementById("export-preview-modal");
            const previewScrollWrap = previewModal?.querySelector(".preview-scroll-wrap");
            const downloadBtn = document.getElementById("preview-download-btn");

            try {
                // 打开预览弹窗并显示loading
                previewModal.classList.add("active");
                previewScrollWrap.innerHTML = `
                    <div class="preview-inner-loading">
                        <div class="loading-spinner"></div>
                        <p>正在生成预览，请稍候…</p>
                    </div>
                `;
                if (downloadBtn) downloadBtn.disabled = true;

                // 获取导出尺寸配置
                const sizeRadio = document.querySelector('input[name="export-size"]:checked');
                if (!sizeRadio) throw new Error("未选中导出尺寸");
                const sizeVal = sizeRadio.value;

                let targetWidth = 0;
                let maxPageHeight = 0;
                let isLongMode = false;

                if (sizeVal === "long-640") {
                    targetWidth = 640;
                    isLongMode = true;
                } else if (sizeVal === "long-810") {
                    targetWidth = 810;
                    isLongMode = true;
                } else if (sizeVal === "long-1080") {
                    targetWidth = 1080;
                    isLongMode = true;
                } else {
                    // 固定尺寸，开启分页
                    const [w, h] = sizeVal.split(',').map(Number);
                    targetWidth = w;
                    maxPageHeight = h;
                }

                // 【核心】调用原生Canvas绘制模块，返回 Blob 数组
                const blobList = await renderExportCanvas(targetWidth, isLongMode, maxPageHeight, appData, gameTemplateList);
                if (!Array.isArray(blobList) || blobList.length === 0) throw new Error("Canvas绘制失败，未能生成图片");

                // 多页预览状态
                let currentPreviewPage = 0;
                // 预生成所有页面 objectUrl，统一保存到全局数组
                const pageObjectUrlList = blobList.map(blob => URL.createObjectURL(blob));
                // 保存到全局用于资源释放
                previewPageUrlList = pageObjectUrlList;

                // 渲染预览区域：图片 + 分页控件
                function renderPreviewPage(pageIndex) {
                    currentPreviewPage = pageIndex;
                    const totalPage = blobList.length;
                    const currentUrl = pageObjectUrlList[currentPreviewPage];

                    let paginationHtml = "";
                    if(totalPage > 1) {
                        paginationHtml = `
                        <div class="preview-pagination-bar" style="margin-top:12px;display:flex;gap:12px;align-items:center;justify-content:center;">
                            <button class="preview-prev-page" ${currentPreviewPage <= 0 ? 'disabled' : ''}>上一页</button>
                            <span>第 ${currentPreviewPage+1} / ${totalPage} 页</span>
                            <button class="preview-next-page" ${currentPreviewPage >= totalPage-1 ? 'disabled' : ''}>下一页</button>
                        </div>
                        `;
                    }

                    previewScrollWrap.innerHTML = `
                        <img class="preview-img-item" src="${currentUrl}" alt="导出预览">
                        ${paginationHtml}
                    `;

                    // 绑定分页切换事件
                    const prevBtn = previewScrollWrap.querySelector(".preview-prev-page");
                    const nextBtn = previewScrollWrap.querySelector(".preview-next-page");
                    if(prevBtn) {
                        prevBtn.onclick = () => {
                            if(currentPreviewPage > 0) renderPreviewPage(currentPreviewPage - 1);
                        }
                    }
                    if(nextBtn) {
                        nextBtn.onclick = () => {
                            if(currentPreviewPage < totalPage - 1) renderPreviewPage(currentPreviewPage + 1);
                        }
                    }
                }

                // 初始渲染第1页
                renderPreviewPage(0);

                if (downloadBtn) downloadBtn.disabled = false;

                // === 重新绑定下载按钮，支持多页批量下载 ===
                previewDownloadBtn.onclick = () => {
                    if (!blobList || blobList.length === 0) return;
                    const baseTime = new Date().getTime();
                    blobList.forEach((blob, pageIdx) => {
                        const link = document.createElement('a');
                        const pageSuffix = blobList.length > 1 ? `_page${pageIdx+1}` : "";
                        link.download = `Otome_FavList_${baseTime}${pageSuffix}.png`;
                        link.href = URL.createObjectURL(blob);
                        link.click();
                    });
                    previewModal.classList.remove("active");
                    clearPreviewCacheResource();
                    // 额外释放所有分页url资源（clear中已做）
                };

            } catch (err) {
                console.error("导出图片失败：", err);
                previewScrollWrap.innerHTML = `
                    <div style="padding:40px;text-align:center;color:#c0392b;">
                        <p>图片渲染失败</p>
                        <p style="font-size:14px;margin-top:8px;">${err.message || '请检查控制台错误信息'}</p>
                    </div>
                `;
                alert("导出失败，请查看控制台错误。");
            } finally {
                if (unlockTimer) clearTimeout(unlockTimer);
                isRendering = false;
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
