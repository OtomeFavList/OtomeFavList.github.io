// 全局存储key
const STORE_KEY = "otome-favlist-data";
let appData = {
    globalHideChar: false,
    globalFD: false,
    gameSpoilerRecord: {},
    baseInfo: { nick: "", count: "", story: "", firstgame: "" },
    gameList: [],
    exportColor: { bg: "#fff7f9", title: "#b33a3a", text: "#c98fac", border: "#f6a5b8" }
};
// 兜底：游戏数据模块加载失败时赋值空数组，彻底解决undefined报错
let gameTemplateList = [];

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

// 【新增】异步加载全部游戏模板数据，修复路径404、MIME报错
async function loadAllGameTemplates() {
    // 修正错误路径：删除多余一层 data/
    const basePath = "/data/games/";
    // 你可根据实际游戏文件数量修改此处id范围
    const gameIdList = ["001"];
    const tempList = [];

    for (const id of gameIdList) {
        try {
            // 动态导入正确路径JS模块
            const mod = await import(`${basePath}game${id}.js`);
            if (mod && mod.gameData) {
                tempList.push(mod.gameData);
            }
        } catch (err)
            console.error(`游戏文件 game${id}.js 加载失败(404/MIME错误)`, err);
            // 单文件加载失败不阻塞整体加载流程
            continue;
        }
    }
    // 赋值全局游戏模板数组
    gameTemplateList = tempList;
}

// 同步游戏内全局开关状态
function syncSingleGameSwitch(type, status) {
    if (!Array.isArray(appData.gameList)) return;
    appData.gameList.forEach(game => {
        if (type === "hideChar") game.localHideChar = status;
        if (type === "fd") game.localFD = status;
    })
}

// 筛选下拉填充
function fillFilterOptions(gameList) {
    if (!Array.isArray(gameList) || gameList.length === 0) return;
    const yearSet = new Set(), pubSet = new Set(), cnSet = new Set(), writerSet = new Set(), artSet = new Set();
    gameList.forEach(g => {
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

// 渲染选中角色
function renderSelectedChar(gameItem, gameInfo) {
    if (!gameInfo?.charList) return "<span>暂无选择角色</span>";
    let html = "";
    gameItem.selectChars?.forEach(cid => {
        const char = gameInfo.charList?.find(c => c.id === cid);
        if (!char || !char.imgs?.[0]) return;
        const img = char.imgs[0];
        html += `<div class="char-item selected"><img src="img/char/${img}" style="width:100px;height:100px;"><div>${char.name}</div></div>`;
    })
    return html || "<span>暂无选择角色</span>";
}

// 渲染CP
function renderCP(gameItem, gameInfo) {
    if (!gameInfo?.charList) return "<span>暂无CP搭配</span>";
    let html = "";
    gameItem.cpList?.forEach(cp => {
        const fChar = gameInfo.charList?.find(c => c.id === cp.femaleId);
        if (!fChar || !fChar.imgs?.[0]) return;
        let maleHtml = "";
        cp.maleIds?.forEach(mid => {
            const mChar = gameInfo.charList?.find(c => c.id === mid);
            if (!mChar || !mChar.imgs?.[0]) return;
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
function getAllGameChar(gameInfo) {
    let chars = [...(gameInfo?.charList || [])];
    const gameItem = appData.gameList.find(g => g.gameId === gameInfo.id);
    const showHide = gameItem?.localHideChar || appData.globalHideChar;
    const showFD = gameItem?.localFD || appData.globalFD;
    if (!showHide) chars = chars.filter(c => !c.isHidden);
    if (!showFD) chars = chars.filter(c => !c.isFD);
    const female = chars.filter(c => c.gender === "female").sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
    const male = chars.filter(c => c.gender === "male").sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
    return [...female, ...male];
}

// 页面所有DOM、事件、渲染逻辑全部放在onload内部
window.onload = async function () {
    // 1. 页面加载完成再获取所有DOM元素
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

    let modalOpen = false;
    let modalCallback = null;

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

    // 弹窗控制
    function openSpoilerModal(cb) {
        console.log("执行打开弹窗");
        if (!el.spoilerModal) {
            console.error("严重错误：页面不存在ID=spoiler-modal的弹窗DOM！HTML缺失弹窗");
            alert("页面缺少剧透弹窗容器，弹窗无法弹出，请补充HTML弹窗代码");
            return;
        }
        modalOpen = true;
        modalCallback = cb;
        el.spoilerModal.style.display = "flex";
    }
    function closeSpoilerModal() {
        if (!el.spoilerModal) return;
        modalOpen = false;
        el.spoilerModal.style.display = "none";
        modalCallback = null;
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

    // 弹窗按钮绑定
    if (el.spoilerConfirm) {
        el.spoilerConfirm.onclick = () => {
            closeSpoilerModal();
            if (modalCallback) modalCallback(true);
        }
    }
    if (el.spoilerCancel) {
        el.spoilerCancel.onclick = () => {
            closeSpoilerModal();
            if (modalCallback) modalCallback(false);
        }
    }

    // ==========【修复：使用onchange 替代onclick，解决复选框事件冲突】==========
    // 全局隐藏角色开关
    if (el.globalHideChar) {
        el.globalHideChar.onchange = function () {
            const nowStatus = this.checked;
            console.log("隐藏角色开关状态变更，新状态：", nowStatus);
            // 用户想要开启，弹出确认弹窗
            if (nowStatus === true) {
                // 强制回显关闭，等待弹窗确认
                this.checked = false;
                refreshHideCharSwitch();
                if (modalOpen) return;
                openSpoilerModal((confirm) => {
                    if (confirm) {
                        appData.globalHideChar = true;
                        syncSingleGameSwitch("hideChar", true);
                    } else {
                        appData.globalHideChar = false;
                        syncSingleGameSwitch("hideChar", false);
                    }
                    saveData();
                    refreshHideCharSwitch();
                    renderAddedGame();
                })
            } else {
                // 用户关闭，直接生效无弹窗
                appData.globalHideChar = false;
                syncSingleGameSwitch("hideChar", false);
                saveData();
                refreshHideCharSwitch();
                renderAddedGame();
            }
        }
    }

    // 全局FD开关
    if (el.globalFD) {
        el.globalFD.onchange = function () {
            const nowStatus = this.checked;
            console.log("FD开关状态变更，新状态：", nowStatus);
            // 用户想要开启，弹出确认弹窗
            if (nowStatus === true) {
                // 强制回显关闭，等待弹窗确认
                this.checked = false;
                refreshFDSwitch();
                if (modalOpen) return;
                openSpoilerModal((confirm) => {
                    if (confirm) {
                        appData.globalFD = true;
                        syncSingleGameSwitch("fd", true);
                    } else {
                        appData.globalFD = false;
                        syncSingleGameSwitch("fd", false);
                    }
                    saveData();
                    refreshFDSwitch();
                    renderAddedGame();
                })
            } else {
                // 用户关闭，直接生效无弹窗
                appData.globalFD = false;
                syncSingleGameSwitch("fd", false);
                saveData();
                refreshFDSwitch();
                renderAddedGame();
            }
        };
    }
    // ====================================================================

    // 基础资料输入框绑定（带存在判断，绝不报错）
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
            el.addedGameBox.innerHTML = "<p>⚠️ 游戏数据加载失败，部分文件404/路径错误，暂时无法展示游戏卡片</p>";
            return;
        }
        let html = "";
        appData.gameList.forEach(gameItem => {
            const gameInfo = gameTemplateList.find(g => g.id === gameItem.gameId);
            if (!gameInfo) return;
            let heartHtml = "";
            for (let i = 1; i <= 5; i++) heartHtml += `<span class="heart ${gameItem.loveRate >= i ? 'active' : ''}" data-val="${i}">♥</span>`;
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
                    <div class="char-selected-row" data-gid="${gameItem.gameId}">${renderSelectedChar(gameItem, gameInfo)}</div>
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
        document.querySelectorAll(".local-hide-char").forEach(sw => {
            sw.onchange = function () {
                const gid = this.dataset.gid;
                const gameItem = appData.gameList.find(g => g.gameId === gid);
                if (!gameItem) return;
                gameItem.localHideChar = this.checked;
                saveData();
                renderAddedGame();
            }
        })
        document.querySelectorAll(".local-fd").forEach(sw => {
            sw.onchange = function () {
                const gid = this.dataset.gid;
                const gameItem = appData.gameList.find(g => g.gameId === gid);
                if (!gameItem) return;
                gameItem.localFD = this.checked;
                saveData();
                renderAddedGame();
            }
        })
    }

    // 添加游戏按钮
    if (el.addGameBtn) {
        el.addGameBtn.onclick = () => {
            if(el.searchPanel) el.searchPanel.classList.toggle("hide-block");
            renderGameSelectList();
        }
    }
    // 搜索输入框
    if (el.gameSearchInput) el.gameSearchInput.oninput = renderGameSelectList;

    // 导出按钮逻辑（移除远程字体，通用sans-serif）
    if (el.exportBtn) {
        el.exportBtn.onclick = function () {
            try {
                const canvas = el.canvas;
                if (!canvas) return alert("画布元素缺失");
                const ctx = canvas.getContext("2d");
                const color = appData.exportColor;
                const sizeRadio = document.querySelector('input[name="export-size"]:checked');

                if (!sizeRadio) {
                    alert("请先选择导出图片尺寸！");
                    return;
                }
                let w, h;
                const sizeVal = sizeRadio.value.split(",");
                if (sizeVal[0] === "long") { w = 1080; h = 9999; } else { w = Number(sizeVal[0]); h = Number(sizeVal[1]); }
                canvas.width = w; canvas.height = h;

                ctx.fillStyle = color.bg;
                ctx.fillRect(0, 0, w, h);
                ctx.fillStyle = color.title;
                ctx.font = "bold 48px sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("Otome FavList", w / 2, 80);
                ctx.font = "bold 26px sans-serif";
                ctx.fillText("日乙个人喜好表", w / 2, 130);
                let offsetY = 180;
                const base = appData.baseInfo;
                const baseArr = [
                    base.nick ? `昵称：${base.nick}` : "",
                    base.count ? `游玩数量：${base.count}` : "",
                    base.story ? `入坑时间：${base.story}` : "",
                    base.firstgame ? `入坑作品：${base.firstgame}` : ""
                ].filter(x => x);

                if (baseArr.length > 0) {
                    ctx.fillStyle = color.title;
                    ctx.font = "bold 30px sans-serif";
                    ctx.textAlign = "left";
                    ctx.fillText("基础资料", 60, offsetY);
                    offsetY += 40;
                    ctx.fillStyle = color.text;
                    ctx.font = "bold 22px sans-serif";
                    const splitX = w / 2 - 40;
                    const lineGap = 34;
                    for (let i = 0; i < baseArr.length; i += 2) {
                        const leftText = baseArr[i];
                        const rightText = baseArr[i + 1];
                        ctx.fillText(leftText, 60, offsetY);
                        if (rightText) ctx.fillText(rightText, splitX, offsetY);
                        offsetY += lineGap;
                    }
                    offsetY += 20;
                }

                if (!Array.isArray(gameTemplateList) || gameTemplateList.length === 0) throw new Error("游戏数据加载失败，无法导出");
                appData.gameList.forEach(gameItem => {
                    if (gameItem.selectChars.length === 0 && gameItem.cpList.length === 0) return;
                    const gameInfo = gameTemplateList.find(g => g.id === gameItem.gameId);
                    if (!gameInfo) return;

                    ctx.beginPath();
                    ctx.strokeStyle = color.border;
                    ctx.lineWidth = 3;
                    ctx.strokeRect(40, offsetY, w - 80, 220);

                    ctx.fillStyle = color.title;
                    ctx.font = "bold 32px sans-serif";
                    ctx.textAlign = "left";
                    ctx.fillText(gameInfo.name, 60, offsetY + 40);
                    ctx.fillStyle = "#ff4d88";
                    let heartTxt = "";
                    for (let i = 0; i < gameItem.loveRate; i++) heartTxt += "♥ ";
                    ctx.font = "bold 28px sans-serif";
                    ctx.fillText(heartTxt, 60, offsetY + 80);
                    offsetY += 110;

                    if (gameItem.selectChars.length > 0) {
                        ctx.fillStyle = color.title;
                        ctx.font = "bold 26px sans-serif";
                        ctx.fillText("Selected Character", 60, offsetY);
                        offsetY += 36;
                        ctx.fillStyle = color.text;
                        ctx.font = "bold 22px sans-serif";
                        const charNames = gameItem.selectChars.map(cid => {
                            const c = gameInfo.charList?.find(x => x.id === cid);
                            return c?.name || "";
                        }).filter(x => x);
                        ctx.fillText(charNames.join(" / "), 60, offsetY);
                        offsetY += 44;
                    }
                    if (gameItem.cpList.length > 0) {
                        ctx.fillStyle = color.title;
                        ctx.font = "bold 26px sans-serif";
                        ctx.fillText("Couple List", 60, offsetY);
                        offsetY += 36;
                        ctx.fillStyle = color.text;
                        ctx.font = "bold 22px sans-serif";
                        gameItem.cpList.forEach(cp => {
                            const f = gameInfo.charList?.find(x => x.id === cp.femaleId);
                            const mNames = cp.maleIds?.map(mid => {
                                const m = gameInfo.charList?.find(x => x.id === mid);
                                return m?.name || "";
                            }).filter(x => x);
                            const cpTxt = `${f?.name || ""} × ${mNames.join("、")}`;
                            ctx.fillText(cpTxt, 60, offsetY);
                            offsetY += 34;
                        })
                    }
                    offsetY += 60;
                })

                const link = document.createElement("a");
                link.download = "Otome_FavList.png";
                link.href = canvas.toDataURL("image/png");
                link.click();
            } catch (err) {
                console.error("导出异常：", err);
                alert("导出失败：" + err.message);
            }
        }
    }

    // 【核心】先异步加载游戏模板数据，再渲染页面
    await loadAllGameTemplates();
    // 延迟加载筛选下拉、游戏列表
    setTimeout(() => {
        fillFilterOptions(gameTemplateList);
        renderAddedGame();
    }, 200);
}

// 全局元素缓存
const el = {
    spoilerModal: document.getElementById('spoiler-modal'),
    spoilerCancel: document.getElementById('spoiler-cancel'),
    spoilerConfirm: document.getElementById('spoiler-confirm'),
    globalHideChar: document.getElementById('global-hide-char'),
    globalFdGame: document.getElementById('global-fd-game')
};
// 弹窗回调缓存
let modalCallback = null;

// 打开弹窗
function openSpoilerModal(cb) {
    modalCallback = cb;
    el.spoilerModal.classList.remove('hide-block');
}
// 关闭弹窗
function closeSpoilerModal() {
    el.spoilerModal.classList.add('hide-block');
    modalCallback = null;
}

// 弹窗取消按钮
el.spoilerCancel.addEventListener('click', () => {
    closeSpoilerModal();
});
// 弹窗确认按钮
el.spoilerConfirm.addEventListener('click', () => {
    closeSpoilerModal();
    if (modalCallback) modalCallback();
});

// 第一个滑块：全局显示隐藏角色 勾选弹出弹窗
el.globalHideChar.addEventListener('change', function () {
    if (this.checked) {
        openSpoilerModal(() => {
            // 这里写你原本开启隐藏角色后的业务逻辑
            console.log("确认开启隐藏角色");
        })
    }
});

// 第二个滑块：全局显示FD/续作角色 勾选弹出弹窗
el.globalFdGame.addEventListener('change', function () {
    if (this.checked) {
        openSpoilerModal(() => {
            // 这里写你原本开启FD角色后的业务逻辑
            console.log("确认开启FD/续作角色");
        })
    }
});
