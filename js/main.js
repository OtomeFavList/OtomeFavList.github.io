// 全局存储key
const STORE_KEY = "otome-favlist-data";
let appData = {
    globalHideChar: false,
    globalFD: false,
    gameSpoilerRecord: {},
    baseInfo: {nick:"",count:"",story:"",firstgame:""},
    gameList: [],
    exportColor: {bg:"#fff",title:"#222",text:"#333",border:"#aaa"}
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

// 本地存储读写
function saveData(){
    localStorage.setItem(STORE_KEY, JSON.stringify(appData));
}
function loadData(){
    const raw = localStorage.getItem(STORE_KEY);
    if(raw) appData = JSON.parse(raw);
    el.inputNick.value = appData.baseInfo.nick;
    el.inputCount.value = appData.baseInfo.count;
    el.inputStory.value = appData.baseInfo.story;
    el.inputFirstgame.value = appData.baseInfo.firstgame;
    el.globalHideChar.checked = appData.globalHideChar;
    el.globalFD.checked = appData.globalFD;
    el.colorBg.value = appData.exportColor.bg;
    el.colorTitle.value = appData.exportColor.title;
    el.colorText.value = appData.exportColor.text;
    el.colorBorder.value = appData.exportColor.border;
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
el.spoilerConfirm.onclick = ()=>{
    closeSpoilerModal();
    if(modalCallback) modalCallback(true);
}
el.spoilerCancel.onclick = ()=>{
    closeSpoilerModal();
    if(modalCallback) modalCallback(false);
}

// 全局开关切换（每次弹窗）
el.globalHideChar.onchange = function(){
    const targetSwitch = this;
    openSpoilerModal((ok)=>{
        if(ok){
            appData.globalHideChar = targetSwitch.checked;
            saveData();
        }else{
            targetSwitch.checked = !targetSwitch.checked;
        }
    })
}
el.globalFD.onchange = function(){
    const targetSwitch = this;
    openSpoilerModal((ok)=>{
        if(ok){
            appData.globalFD = targetSwitch.checked;
            saveData();
        }else{
            targetSwitch.checked = !targetSwitch.checked;
        }
    })
}

// 基础资料自动保存
["inputNick","inputCount","inputStory","inputFirstgame"].forEach(k=>{
    el[k].oninput = function(){
        const map = {inputNick:"nick",inputCount:"count",inputStory:"story",inputFirstgame:"firstgame"};
        appData.baseInfo[map[k]] = this.value;
        saveData();
    }
})
["colorBg","colorTitle","colorText","colorBorder"].forEach(k=>{
    el[k].oninput = function(){
        const map = {colorBg:"bg",colorTitle:"title",colorText:"text",colorBorder:"border"};
        appData.exportColor[map[k]] = this.value;
        saveData();
        document.body.style.background = appData.exportColor.bg;
    }
})

// 筛选下拉选项填充
function fillFilterOptions(){
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
        const origin = sel.innerHTML;
        dataSet.forEach(v=>sel.innerHTML += `<option value="${v}">${v}</option>`);
    }
    fillSelect("filter-year",yearSet);
    fillSelect("filter-publisher",pubSet);
    fillSelect("filter-cn",cnSet);
    fillSelect("filter-writer",writerSet);
    fillSelect("filter-art",artSet);
}

// 渲染游戏选择列表（全局挂载，loader载入完成调用）
window.renderGameSelectList = function(){
    const keyword = el.gameSearchInput.value.toLowerCase();
    const filterYear = document.getElementById("filter-year").value;
    const filterPub = document.getElementById("filter-publisher").value;
    const filterCn = document.getElementById("filter-cn").value;
    const filterWriter = document.getElementById("filter-writer").value;
    const filterArt = document.getElementById("filter-art").value;
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
el.gameSearchInput.oninput = renderGameSelectList;

// 打开添加游戏面板
el.addGameBtn.onclick = ()=>{
    el.searchPanel.classList.toggle("hide-block");
    renderGameSelectList();
}

// 渲染已选角色缩略
function renderSelectedChar(gameItem,gameInfo){
    let html = "";
    gameItem.selectChars.forEach(cid=>{
        const char = getAllGameChar(gameInfo).find(c=>c.id===cid);
        if(!char) return;
        const img = char.imgs[0];
        html += `<div class="char-item selected"><img src="img/char/${img}" style="width:100px;height:100px;"><div>${char.name}</div></div>`;
    })
    return html || "<span>暂无选择角色</span>";
}

// 渲染CP 25%女主/75%男主布局
function renderCP(gameItem,gameInfo){
    let html = "";
    gameItem.cpList.forEach(cp=>{
        const fChar = getAllGameChar(gameInfo).find(c=>c.id===cp.femaleId);
        if(!fChar) return;
        let maleHtml = "";
        cp.maleIds.forEach(mid=>{
            const mChar = getAllGameChar(gameInfo).find(c=>c.id===mid);
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

// 获取过滤后角色：女A-Z → 男A-Z，过滤隐藏/FD
function getAllGameChar(gameInfo){
    let chars = [...gameInfo.charList];
    const gameItem = appData.gameList.find(g=>g.gameId === gameInfo.id);
    const showHide = gameItem.localHideChar || appData.globalHideChar;
    const showFD = gameItem.localFD || appData.globalFD;
    if(!showHide) chars = chars.filter(c=>!c.isHidden);
    if(!showFD) chars = chars.filter(c=>!c.isFD);
    const female = chars.filter(c=>c.gender==="female").sort((a,b)=>a.name.localeCompare(b.name,"zh-CN"));
    const male = chars.filter(c=>c.gender==="male").sort((a,b)=>a.name.localeCompare(b.name,"zh-CN"));
    return [...female,...male];
}

// 渲染所有已添加游戏卡片
function renderAddedGame(){
    let html = "";
    appData.gameList.forEach(gameItem=>{
        const gameInfo = gameTemplateList.find(g=>g.id === gameItem.gameId);
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
    // 折叠
    document.querySelectorAll(".fold-game").forEach(btn=>{
        btn.onclick = ()=>{
            const gid = btn.dataset.gid;
            const gameItem = appData.gameList.find(g=>g.gameId === gid);
            gameItem.fold = !gameItem.fold;
            saveData();
            renderAddedGame();
        }
    })
    // 删除游戏
    document.querySelectorAll(".del-game").forEach(btn=>{
        btn.onclick = ()=>{
            const gid = btn.dataset.gid;
            appData.gameList = appData.gameList.filter(g=>g.gameId !== gid);
            saveData();
            renderAddedGame();
        }
    })
    // 爱心打分
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
    // 单游戏隐藏角色开关
    document.querySelectorAll(".local-hide-char").forEach(sw=>{
        sw.onchange = function(){
            const gid = this.dataset.gid;
            const gameItem = appData.gameList.find(g=>g.gameId === gid);
            const targetChecked = this.checked;
            if(!appData.gameSpoilerRecord[gid]){
                openSpoilerModal((ok)=>{
                    if(ok){
                        gameItem.localHideChar = targetChecked;
                        appData.gameSpoilerRecord[gid] = true;
                        saveData();
                        renderAddedGame();
                    }else{
                        this.checked = !targetChecked;
                    }
                })
            }else{
                gameItem.localHideChar = targetChecked;
                saveData();
                renderAddedGame();
            }
        }
    })
    // 单游戏FD开关
    document.querySelectorAll(".local-fd").forEach(sw=>{
        sw.onchange = function(){
            const gid = this.dataset.gid;
            const gameItem = appData.gameList.find(g=>g.gameId === gid);
            const targetChecked = this.checked;
            if(!appData.gameSpoilerRecord[gid]){
                openSpoilerModal((ok)=>{
                    if(ok){
                        gameItem.localFD = targetChecked;
                        appData.gameSpoilerRecord[gid] = true;
                        saveData();
                        renderAddedGame();
                    }else{
                        this.checked = !targetChecked;
                    }
                })
            }else{
                gameItem.localFD = targetChecked;
                saveData();
                renderAddedGame();
            }
        }
    })
}

// Canvas图片导出（锁定小杉圆体粗体）
el.exportBtn.onclick = function(){
    const canvas = el.canvas;
    const ctx = canvas.getContext("2d");
    const color = appData.exportColor;
    const sizeRadio = document.querySelector('input[name="export-size"]:checked');
    let w,h;
    const sizeVal = sizeRadio.value.split(",");
    if(sizeVal[0]==="long"){w=1080;h=9999;}else{w=Number(sizeVal[0]);h=Number(sizeVal[1]);}
    canvas.width = w; canvas.height = h;
    ctx.fillStyle = color.bg;
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = color.title;
    ctx.font = "bold 48px 'Noto Sans SC'";
    ctx.textAlign = "center";
    ctx.fillText("Otome FavList", w/2, 80);
    ctx.font = "bold 26px 'Noto Sans SC'";
    ctx.fillText("日乙个人喜好表", w/2, 130);
    let offsetY = 180;
    // 绘制基础资料，无内容跳过
    const base = appData.baseInfo;
    const baseArr = [
        base.nick ? `昵称：${base.nick}` : "",
        base.count ? `游玩数量：${base.count}` : "",
        base.story ? `入坑事件：${base.story}` : "",
        base.firstgame ? `入坑作品：${base.firstgame}` : ""
    ].filter(x=>x);
    if(baseArr.length>0){
        ctx.fillStyle = color.title;
        ctx.font = "bold 30px 'Noto Sans SC'";
        ctx.textAlign = "left";
        ctx.fillText("基础资料", 60, offsetY);
        offsetY +=40;
        ctx.fillStyle = color.text;
        ctx.font = "bold 22px 'Noto Sans SC'";
        baseArr.forEach(txt=>{
            ctx.fillText(txt,60,offsetY);
            offsetY +=34;
        })
        offsetY +=20;
    }
    // 绘制游戏卡片，无角色无CP跳过
    appData.gameList.forEach(gameItem=>{
        if(gameItem.selectChars.length===0 && gameItem.cpList.length===0) return;
        const gameInfo = gameTemplateList.find(g=>g.id===gameItem.gameId);
        ctx.strokeStyle = color.border;
        ctx.lineWidth = 3;
        ctx.strokeRect(40,offsetY,w-80,220);
        ctx.fillStyle = color.title;
        ctx.font = "bold 32px 'Noto Sans SC'";
        ctx.textAlign = "left";
        ctx.fillText(gameInfo.name,60,offsetY+40);
        // 爱心
        ctx.fillStyle = "#ff4d88";
        let heartTxt = "";
        for(let i=0;i<gameItem.loveRate;i++) heartTxt += "♥ ";
        ctx.font = "bold 28px 'Noto Sans SC'";
        ctx.fillText(heartTxt,60,offsetY+80);
        offsetY += 110;
        // 角色文字
        if(gameItem.selectChars.length>0){
            ctx.fillStyle = color.title;
            ctx.font = "bold 26px 'Noto Sans SC'";
            ctx.fillText("Selected Character",60,offsetY);
            offsetY +=36;
            ctx.fillStyle = color.text;
            ctx.font = "bold 22px 'Noto Sans SC'";
            const charNames = gameItem.selectChars.map(cid=>{
                const c = getAllGameChar(gameInfo).find(x=>x.id===cid);
                return c?.name || "";
            }).filter(x=>x);
            ctx.fillText(charNames.join(" / "),60,offsetY);
            offsetY +=44;
        }
        // CP文字
        if(gameItem.cpList.length>0){
            ctx.fillStyle = color.title;
            ctx.font = "bold 26px 'Noto Sans SC'";
            ctx.fillText("Couple List",60,offsetY);
            offsetY +=36;
            ctx.fillStyle = color.text;
            ctx.font = "bold 22px 'Noto Sans SC'";
            gameItem.cpList.forEach(cp=>{
                const f = getAllGameChar(gameInfo).find(x=>x.id===cp.femaleId);
                const mNames = cp.maleIds.map(mid=>{
                    const m = getAllGameChar(gameInfo).find(x=>x.id===mid);
                    return m?.name || "";
                }).filter(x=>x);
                const cpTxt = `${f?.name} × ${mNames.join("、")}`;
                ctx.fillText(cpTxt,60,offsetY);
                offsetY +=34;
            })
        }
        offsetY +=60;
    })
    // 下载图片
    const link = document.createElement("a");
    link.download = "Otome_FavList.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

// 页面初始化
window.onload = async function(){
    loadData();
    document.body.style.background = appData.exportColor.bg;
    // 等待游戏数据载入完成再填充筛选下拉
    setTimeout(fillFilterOptions,800);
    renderAddedGame();
}
