// script.js 页面交互层，接收main.js传入Core上下文
export function initPage(Core) {
    const {
        appData, saveData, syncSingleGameSwitch, fillFilterOptions, gameTemplateList,
        isTodayConfirmed, saveConfirmDate
    } = Core;

    // ========= DOM元素获取（全部实时获取 + 判空，杜绝undefined =========
    const el = {
        globalHideChar: document.getElementById("global-hide-char"),
        globalFDGame: document.getElementById("global-fd-game"),
        spoilerModal: document.getElementById("spoiler-modal"),
        spoilerConfirm: document.getElementById("spoiler-confirm"),
        spoilerCancel: document.getElementById("spoiler-cancel"),
        colorBg: document.getElementById("color-bg"),
        colorTitle: document.getElementById("color-title"),
        colorText: document.getElementById("color-text"),
        colorBorder: document.getElementById("color-border"),
        inputNick: document.getElementById("input-nick"),
        inputCount: document.getElementById("input-count"),
        inputStory: document.getElementById("input-story"),
        inputFirstgame: document.getElementById("input-firstgame"),
        addedGameContainer: document.getElementById("added-game-container"),
        btnAddGame: document.getElementById("btn-add-game")
    };

    // 剧透弹窗控制
    function openSpoilerModal() {
        if(el.spoilerModal) el.spoilerModal.style.display = "flex";
    }
    function closeSpoilerModal() {
        if(el.spoilerModal) el.spoilerModal.style.display = "none";
    }

    // 记录当前等待确认的开关类型
    let pendingSwitchType = null; // hide / fd

    // ========== 全局隐藏角色开关 绑定（带剧透弹窗） ==========
    if(el.globalHideChar){
        el.globalHideChar.checked = appData.globalHideChar;
        el.globalHideChar.addEventListener("change", async ()=>{
            const targetStatus = el.globalHideChar.checked;
            // 已确认今日，则直接切换
            if(isTodayConfirmed()){
                appData.globalHideChar = targetStatus;
                syncSingleGameSwitch("hideChar", targetStatus);
                saveData();
                return;
            }
            // 未确认，弹出预警
            pendingSwitchType = "hide";
            openSpoilerModal();
            // 临时回滚复选框，等待用户确认
            el.globalHideChar.checked = !targetStatus;
        })
    }

    // ========== 全局FD续作角色开关 绑定（同样剧透弹窗） ==========
    if(el.globalFDGame){
        el.globalFDGame.checked = appData.globalFD;
        el.globalFDGame.addEventListener("change", async ()=>{
            const targetStatus = el.globalFDGame.checked;
            if(isTodayConfirmed()){
                appData.globalFD = targetStatus;
                syncSingleGameSwitch("fd", targetStatus);
                saveData();
                return;
            }
            pendingSwitchType = "fd";
            openSpoilerModal();
            el.globalFDGame.checked = !targetStatus;
        })
    }

    // ========== 剧透弹窗【确认按钮】 ==========
    if(el.spoilerConfirm){
        el.spoilerConfirm.onclick = ()=>{
            saveConfirmDate();
            if(pendingSwitchType === "hide"){
                appData.globalHideChar = el.globalHideChar.checked ? false : true;
                syncSingleGameSwitch("hideChar", appData.globalHideChar);
            }else if(pendingSwitchType === "fd"){
                appData.globalFD = el.globalFDGame.checked ? false : true;
                syncSingleGameSwitch("fd", appData.globalFD);
            }
            saveData();
            pendingSwitchType = null;
            closeSpoilerModal();
        }
    }
    // 弹窗取消
    if(el.spoilerCancel){
        el.spoilerCancel.onclick = ()=>{
            pendingSwitchType = null;
            closeSpoilerModal();
        }
    }

    // ========== 【重点】配色取色器绑定 全容错，根除 colorBorder 报错 ==========
    const colorBindList = [
        {dom: el.colorBg, dataKey: "bg"},
        {dom: el.colorTitle, dataKey: "title"},
        {dom: el.colorText, dataKey: "text"},
        {dom: el.colorBorder, dataKey: "border"}
    ];
    colorBindList.forEach(item => {
        if(!item.dom) return; // DOM不存在直接跳过，不会触发属性访问报错
        item.dom.value = appData.exportColor[item.dataKey];
        item.dom.oninput = () => {
            appData.exportColor[item.dataKey] = item.dom.value;
            saveData();
            if(item.dataKey === "bg") document.body.style.background = item.dom.value;
        }
    })

    // ========== 基础资料输入框绑定 ==========
    if(el.inputNick){
        el.inputNick.value = appData.baseInfo.nick;
        el.inputNick.oninput = ()=>{
            appData.baseInfo.nick = el.inputNick.value; saveData();
        }
    }
    if(el.inputCount){
        el.inputCount.value = appData.baseInfo.count;
        el.inputCount.oninput = ()=>{
            appData.baseInfo.count = el.inputCount.value; saveData();
        }
    }
    if(el.inputStory){
        el.inputStory.value = appData.baseInfo.story;
        el.inputStory.oninput = ()=>{
            appData.baseInfo.story = el.inputStory.value; saveData();
        }
    }
    if(el.inputFirstgame){
        el.inputFirstgame.value = appData.baseInfo.firstgame;
        el.inputFirstgame.oninput = ()=>{
            appData.baseInfo.firstgame = el.inputFirstgame.value; saveData();
        }
    }

    // 初始化筛选下拉
    fillFilterOptions(gameTemplateList);

    // ========= 后续你原有：添加游戏、角色弹窗、渲染逻辑继续写在这里 =========
    // 你原来剩下的业务代码直接追加在此下方即可
}
