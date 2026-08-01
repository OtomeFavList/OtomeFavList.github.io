// 全局存储key
const STORE_KEY = "otome-favlist-data";
let appData = {
    globalHideChar: false,
    globalFD: false,
    gameSpoilerRecord: {},
    baseInfo: {nick:"",count:"",story:"",firstgame:""},
    gameList: [],
    exportColor: {bg:"#fff7f9",title:"#b33a3a",text:"#c98fac",border:"#f6a5b8"}
};

// 页面元素缓存
const el = {
    globalHideChar: document.getElementById("global-hide-char"),
    globalFD: document.getElementById("global-fd-game"),
    spoilerModal: document.getElementById("spoiler-modal"),
    spoilerCancel: document.getElementById("spoiler-cancel"),
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
    canvas: document.getElementById("export-canvas")
};

// 当前弹窗操作标记：区分是隐藏角色还是FD开关触发弹窗
let currentGlobalTarget = "";

// 同步滑块视觉（仅读取数据渲染，不修改数据）
window.syncSwitchByData = function() {
    if(el.globalHideChar) el.globalHideChar.checked = appData.globalHideChar;
    if(el.globalFD) el.globalFD.checked = appData.globalFD;
}

// 仅同步单个游戏对应全局功能状态
function syncSingleGameSwitch(type, status) {
    appData.gameList.forEach(game => {
        if(type === "hideChar") game.localHideChar = status;
        if(type === "fd") game.localFD = status;
    })
}

// 本地存储读写
function saveData(){
    localStorage.setItem(STORE_KEY, JSON.stringify(appData));
}
function loadData(){
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if(raw) appData = JSON.parse(raw);
        if(el.inputNick) el.inputNick.value = appData.baseInfo.nick;
        if(el.inputCount) el.inputCount.value = appData.baseInfo.count;
        if(el.inputStory) el.inputStory.value = appData.baseInfo.story;
        if(el.inputFirstgame) el.inputFirstgame.value = appData.baseInfo.firstgame;
        if(el.colorBg) el.colorBg.value = appData.exportColor.bg;
        if(el.colorTitle) el.colorTitle.value = appData.exportColor.title;
        if(el.colorText) el.colorText.value = appData.exportColor.text;
        if(el.colorBorder) el.colorBorder.value = appData.exportColor.border;
        syncSwitchByData();
    }catch(e){
        console.error("读取本地存储失败：",e);
    }
}

// 剧透弹窗控制
let modalCallback = null;
function openSpoilerModal(cb){
    modalCallback = cb;
    el.spoilerModal.style.display = "flex";
}
function closeSpoilerModal(){
    el.spoilerModal.style.display = "none";
    modalCallback = null;
}

// 弹窗确认按钮
if(el.spoilerConfirm){
    el.spoilerConfirm.onclick = ()=>{
        closeSpoilerModal();
        if(modalCallback) modalCallback(true);
    }
}
// 弹窗取消按钮【修复核心：只执行回调，不强制刷新覆盖双开关】
if(el.spoilerCancel){
    el.spoilerCancel.onclick = ()=>{
        closeSpoilerModal();
        if(modalCallback) modalCallback(false);
    }
}

// ========== 全局隐藏角色开关【完全独立，不碰FD】 ==========
if(el.globalHideChar){
    el.globalHideChar.onchange = function(){
        const newState = this.checked;
        // 手动关闭开关：只改自身
        if(!newState) {
            appData.globalHideChar = false;
            syncSingleGameSwitch("hideChar", false);
            saveData();
            syncSwitchByData();
            renderAddedGame();
            return;
        }
        // 打开触发弹窗
        currentGlobalTarget = "hideChar";
        openSpoilerModal((confirm)=>{
            if(confirm){
                // 确认开启
                appData.globalHideChar = true;
                syncSingleGameSwitch("hideChar", true);
            }else{
                // 取消：仅还原当前这个开关，FD保持原样
                appData.globalHideChar = false;
            }
            saveData();
            syncSwitchByData();
            renderAddedGame();
        })
    }
}

// ========== 全局FD开关【完全独立，不碰隐藏角色】 ==========
if(el.globalFD){
    el.globalFD.onchange = function() {
        const newState = this.checked;
        // 手动关闭开关：只改自身
        if (!newState) {
            appData.globalFD = false;
            syncSingleGameSwitch("fd", false);
            saveData();
            syncSwitchByData();
            renderAddedGame();
            return;
        }
        // 打开触发弹窗
        currentGlobalTarget = "fd";
        openSpoilerModal((confirm)=>{
            if(confirm){
                // 确认开启
                appData.globalFD = true;
                syncSingleGameSwitch("fd", true);
            }else{
                // 取消：仅还原FD开关，隐藏角色完全不动
                appData.globalFD = false;
            }
            saveData();
            syncSwitchByData();
            renderAddedGame();
        })
    };
}

// 基础资料自动保存
["inputNick","inputCount","inputStory","inputFirstgame"].forEach(k=>{
    if(el[k]){
        el[k].oninput = function(){
            const map = {inputNick:"nick",inputCount:"count",inputStory:"story",inputFirstgame:"firstgame"};
            appData.baseInfo[map[k]] = this.value;
            saveData();
        }
    }
})

// 配色取色器实时同步
["colorBg","colorTitle","colorText","colorBorder"].forEach(k=>{
    if(el[k]){
        el[k].oninput = function(){
            const map = {colorBg:"bg",colorTitle:"title",colorText:"text",colorBorder:"border"};
            appData.exportColor[map[k]] = this.value;
            saveData();
            document.body.style.background = appData.exportColor.bg;
        }
    }
})

// 筛选下拉填充
function fillFilterOptions(){
    if(typeof gameTemplateList === "undefined") return;
    const yearSet = new Set(),pubSet=new Set(),cnSet=new Set(),writerSet=new Set(),artSet=new Set();
    gameTemplateList.forEach(g=>{
        yearSet.add(g.year);
        pubSet.add(g.publisher);
        cnSet.add(g.cnStudio);
        writerSet.add(g.writer);
        artSet.add(g.art);
    })
    const fillSelect = (id,dataSet)=>{
        const sel = document.getElementById(id);
        if(!sel) return;
        sel.innerHTML = '<option value="">全部</option>';
        dataSet.forEach(v=>sel.innerHTML += `<option value="${v}">${v}</option>`);
    }
    fillSelect("filter-year",yearSet);
    fillSelect("filter-publisher",pubSet);
    fillSelect("filter-cn",cnSet);
    fillSelect("filter-writer",writerSet);
    fillSelect("filter-art",artSet);
}

// 渲染游戏选择列表
window.renderGameSelectList = function(){
    if(!el.gameSearchInput || !el.gameSelectList || typeof gameTemplateList === "undefined") return;
    const keyword = el.gameSearchInput.value.toLowerCase();
    const filterYear = document.getElementById("filter-year")?.value || "";
    const filterPub = document.getElementById("filter-publisher")?.value || "";
    const filterCn = document.getElementById("filter-cn")?.value || "";
    const filterWriter = document.getElementById("filter-writer")?.value || "";
    const filterArt = document.getElementById("filter-art")?.value || "";
    const sortedGames = gameTemplateList.sort((a,b)=>a.name.localeCompare(b.name,"zh-CN"));
    let html = "";
    sortedGames.forEach(game=>{
        let match = true;
        if(keyword && !game.name.toLowerCase().includes(keyword)) match = false;
        if(filterYear && game.year != filterYear) match = false;
        if(filterPub && game.publisher != filterPub) match = false;
        if(filterCn && game.cnStudio != filterCn) match = false;
        if(filterWriter && game.writer != filterWriter) match = false;
        if(filterArt && game.art != filterArt) match = false;
        if(!match) return;
        html += `
        <div class="game-option-item" data-game-id="${game.id}">
            <img src="img/game/${game.cover}" alt="${game.name}">
            <div>${game.name}</div>
            <div style="font-size:12px;color:#777">${game.year}</div>
        </div>
        `;
    })
    el.gameSelectList.innerHTML = html;
    document.querySelectorAll(".game-option-item").forEach(item=>{
        item.onclick = ()=>{
            const gid = item.dataset.gameId;
            const targetGame = gameTemplateList.find(g=>g.id===gid);
            const exist = appData.gameList.find(g=>g.gameId === gid);
            if(exist) return alert("该游戏已添加！");
            const newGameData = {
                gameId: gid,
                fold: false,
                localHideChar: false,
                localFD: false,
                loveRate: 0,
                selectChars: [],
                cpList: []
            };
            appData.gameList.push(newGameData);
            saveData();
            el.searchPanel.classList.add("hide-block");
            renderAddedGame();
        }
    })
}
if(el.gameSearchInput) el.gameSearchInput.oninput = renderGameSelectList;

// 打开添加游戏面板
if(el.addGameBtn){
    el.addGameBtn.onclick = ()=>{
        el.searchPanel.classList.toggle("hide-block");
        renderGameSelectList();
    }
}

// 渲染选中角色
function renderSelectedChar(gameItem,gameInfo){
    let html = "";
    gameItem.selectChars.forEach(cid=>{
        const char = gameInfo.charList?.find(c=>c.id===cid);
        if(!char) return;
        const img = char.imgs[0];
        html += `<div class="char-item selected"><img src="img/char/${img}" style="width:100px;height:100px;"><div>${char.name}</div></div>`;
    })
    return html || "<span>暂无选择角色</span>";
}

// 渲染CP
function renderCP(gameItem,gameInfo){
    let html = "";
    gameItem.cpList.forEach(cp=>{
        const fChar = gameInfo.charList?.find(c=>c.id===cp.femaleId);
        if(!fChar) return;
        let maleHtml = "";
        cp.maleIds.forEach(mid=>{
            const mChar = gameInfo.charList?.find(c=>c.id===mid);
            if(!mChar) return;
            maleHtml += `<div class="char-item selected"><img src="img/char/${mChar.imgs[0]}" style="width:100px;height:100px;"><div>${mChar.name}</div></div>`;
        })
        html += `
        <div class="cp-row">
            <div class="cp-female">
                <div class="char-item selected"><img src="img/char/${fChar.imgs[0]}" style="width:100px;height:100px;"><div>${fChar.name}</div></div>
            </div>
            <div class="cp-male-wrap">${maleHtml || "<span>未选择男主</span>"}</div>
        </div>
        `;
    })
    return html || "<span>暂无CP搭配</span>";
}

// 过滤角色
function getAllGameChar(gameInfo){
    let chars = [...(gameInfo.charList || [])];
    const gameItem = appData.gameList.find(g=>g.gameId === gameInfo.id);
    const showHide = gameItem.localHideChar || appData.globalHideChar;
    const showFD = gameItem.localFD || appData.globalFD;
    if(!showHide) chars = chars.filter(c=>!c.isHidden);
    if(!showFD) chars = chars.filter(c=>!c.isFD);
    const female = chars.filter(c=>c.gender==="female").sort((a,b)=>a.name.localeCompare(b.name,"zh-CN"));
    const male = chars.filter(c=>c.gender==="male").sort((a,b)=>a.name.localeCompare(b.name,"zh-CN"));
    return [...female,...male];
}

// 渲染游戏卡片
function renderAddedGame(){
    if(!el.addedGameBox) return;
    let html = "";
    appData.gameList.forEach(gameItem=>{
        const gameInfo = typeof gameTemplateList !== "undefined" ? gameTemplateList.find(g=>g.id === gameItem.gameId) : null;
        if(!gameInfo) return;
        let heartHtml = "";
        for(let i=1;i<=5;i++) heartHtml += `<span class="heart ${gameItem.loveRate >= i ? 'active' : ''}" data-val="${i}">♥</span>`;
        html += `
        <div class="game-card ${gameItem.fold ? 'hide-block' : ''}" data-gid="${gameItem.gameId}">
            <div class="game-card-head">
                <h3>${gameInfo.name}</h3>
                <div style="display:flex;gap:8px;">
                    <button class="btn-fold fold-game" data-gid="${gameItem.gameId}">折叠</button>
                    <button class="btn-del del-game" data-gid="${gameItem.gameId}">删除</button>
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
                <div class="char-selected-row" data-gid="${gameItem.gameId}">${renderSelectedChar(gameItem,gameInfo)}</div>
            </div>
            <div class="cp-group">
                <button class="open-cp-pool" data-gid="${gameItem.gameId}">搭配CP Couple</button>
                <div class="cp-render-box" data-gid="${gameItem.gameId}">${renderCP(gameItem,gameInfo)}</div>
            </div>
        </div>
        `;
    })
    el.addedGameBox.innerHTML = html;
    bindGameCardEvent();
}

// 游戏卡片事件绑定
function bindGameCardEvent(){
    document.querySelectorAll(".fold-game").forEach(btn=>{
        btn.onclick = ()=>{
            const gid = btn.dataset.gid;
            const gameItem = appData.gameList.find(g=>g.gameId === gid);
            gameItem.fold = !gameItem.fold;
            saveData();
            renderAddedGame();
        }
    })
    document.querySelectorAll(".del-game").forEach(btn=>{
        btn.onclick = ()=>{
            const gid = btn.dataset.gid;
            appData.gameList = appData.gameList.filter(g=>g.gameId !== gid);
            saveData();
            renderAddedGame();
        }
    })
    document.querySelectorAll(".heart-rate").forEach(box=>{
        const gid = box.dataset.gid;
        const gameItem = appData.gameList.find(g=>g.gameId === gid);
        box.querySelectorAll(".heart").forEach(h=>{
            h.onclick = ()=>{
                gameItem.loveRate = Number(h.dataset.val);
                saveData();
                renderAddedGame();
            }
        })
    })
    document.querySelectorAll(".local-hide-char").forEach(sw=>{
        sw.onchange = function(){
            const gid = this.dataset.gid;
            const gameItem = appData.gameList.find(g=>g.gameId === gid);
            gameItem.localHideChar = this.checked;
            saveData();
            renderAddedGame();
        }
    })
    document.querySelectorAll(".local-fd").forEach(sw=>{
        sw.onchange = function(){
            const gid = this.dataset.gid;
            const gameItem = appData.gameList.find(g=>g.gameId === gid);
            gameItem.localFD = this.checked;
            saveData();
            renderAddedGame();
        }
    })
}

// 导出按钮逻辑
if(el.exportBtn){
    el.exportBtn.onclick = async function(){
        try {
            const canvas = el.canvas;
            const ctx = canvas.getContext("2d");
            const color = appData.exportColor;
            const sizeRadio = document.querySelector('input[name="export-size"]:checked');

            if (!sizeRadio) {
                alert("请先选择导出图片尺寸！");
                return;
            }
            let w,h;
            const sizeVal = sizeRadio.value.split(",");
            if(sizeVal[0]==="long"){w=1080;h=9999;}else{w=Number(sizeVal[0]);h=Number(sizeVal[1]);}
            canvas.width = w; canvas.height = h;

            await Promise.all([
                document.fonts.load('900 48px "Noto Sans SC"'),
                document.fonts.load('700 42px "GenJyuuGothic"'),
                document.fonts.load('700 32px "GenJyuuGothic"'),
                document.fonts.load('700 28px "GenJyuuGothic"'),
                document.fonts.load('400 26px "GenJyuuGothic"'),
                document.fonts.load('400 22px "GenJyuuGothic"'),
                document.fonts.load('400 16px "GenJyuuGothic"')
            ]);
            await document.fonts.ready;

            // 画布底色
            ctx.fillStyle = color.bg;
            ctx.fillRect(0,0,w,h);
            // 标题
            ctx.fillStyle = color.title;
            ctx.font = "bold 48px 'Noto Sans SC'";
            ctx.textAlign = "center";
            ctx.fillText("Otome FavList", w/2, 80);
            ctx.font = "bold 26px 'GenJyuuGothic'";
            ctx.fillText("日乙个人喜好表", w/2, 130);
            let offsetY = 180;
            const base = appData.baseInfo;
            const baseArr = [
                base.nick ? `昵称：${base.nick}` : "",
                base.count ? `游玩数量：${base.count}` : "",
                base.story ? `入坑时间：${base.story}` : "",
                base.firstgame ? `入坑作品：${base.firstgame}` : ""
            ].filter(x=>x);

            if(baseArr.length>0){
                ctx.fillStyle = color.title;
                ctx.font = "bold 30px 'GenJyuuGothic'";
                ctx.textAlign = "left";
                ctx.fillText("基础资料", 60, offsetY);
                offsetY +=40;
                ctx.fillStyle = color.text;
                ctx.font = "bold 22px 'GenJyuuGothic'";
                const splitX = w / 2 - 40;
                const lineGap = 34;
                for(let i = 0; i < baseArr.length; i += 2) {
                    const leftText = baseArr[i];
                    const rightText = baseArr[i + 1];
                    ctx.fillText(leftText, 60, offsetY);
                    if(rightText) ctx.fillText(rightText, splitX, offsetY);
                    offsetY += lineGap;
                }
                offsetY +=20;
            }

            // 循环绘制游戏卡片
            appData.gameList.forEach(gameItem=>{
                if(gameItem.selectChars.length===0 && gameItem.cpList.length===0) return;
                const gameInfo = typeof gameTemplateList !== "undefined" ? gameTemplateList.find(g=>g.id===gameItem.gameId) : null;
                if(!gameInfo) return;

                ctx.beginPath();
                ctx.strokeStyle = color.border;
                ctx.lineWidth = 3;
                ctx.strokeRect(40,offsetY,w-80,220);

                ctx.fillStyle = color.title;
                ctx.font = "bold 32px 'GenJyuuGothic'";
                ctx.textAlign = "left";
                ctx.fillText(gameInfo.name,60,offsetY+40);
                ctx.fillStyle = "#ff4d88";
                let heartTxt = "";
                for(let i=0;i<gameItem.loveRate;i++) heartTxt += "♥ ";
                ctx.font = "bold 28px 'GenJyuuGothic'";
                ctx.fillText(heartTxt,60,offsetY+80);
                offsetY += 110;

                if(gameItem.selectChars.length>0){
                    ctx.fillStyle = color.title;
                    ctx.font = "bold 26px 'GenJyuuGothic'";
                    ctx.fillText("Selected Character",60,offsetY);
                    offsetY +=36;
                    ctx.fillStyle = color.text;
                    ctx.font = "bold 22px 'GenJyuuGothic'";
                    const charNames = gameItem.selectChars.map(cid=>{
                        const c = gameInfo.charList.find(x=>x.id===cid);
                        return c?.name || "";
                    }).filter(x=>x);
                    ctx.fillText(charNames.join(" / "),60,offsetY);
                    offsetY +=44;
                }
                if(gameItem.cpList.length>0){
                    ctx.fillStyle = color.title;
                    ctx.font = "bold 26px 'GenJyuuGothic'";
                    ctx.fillText("Couple List",60,offsetY);
                    offsetY +=36;
                    ctx.fillStyle = color.text;
                    ctx.font = "bold 22px 'GenJyuuGothic'";
                    gameItem.cpList.forEach(cp=>{
                        const f = gameInfo.charList.find(x=>x.id===cp.femaleId);
                        const mNames = cp.maleIds.map(mid=>{
                            const m = gameInfo.charList.find(x=>x.id===mid);
                            return m?.name || "";
                        }).filter(x=>x);
                        const cpTxt = `${f?.name} × ${mNames.join("、")}`;
                        ctx.fillText(cpTxt,60,offsetY);
                        offsetY +=34;
                    })
                }
                offsetY +=60;
            })

            const link = document.createElement("a");
            link.download = "Otome_FavList.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        } catch(err) {
            console.error("导出异常：", err);
            alert("导出失败，可刷新页面重试");
        }
    }
}

// 页面初始化
window.onload = async function(){
    try {
        loadData();
        document.body.style.background = appData.exportColor.bg;
        setTimeout(fillFilterOptions,800);
        renderAddedGame();
    }catch(e){
        console.error("页面初始化出错：",e);
        document.body.style.background = "#fff7f9";
    }
}
