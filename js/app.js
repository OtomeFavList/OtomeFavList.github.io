// ===============================
// Otome FavList
// app.js
// ===============================

// 已添加游戏数量
let gameCount = 0;

// 页面加载完成
document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // 设置按钮
    // ===========================
    const settingBtn = document.querySelector(".setting-btn");

    if (settingBtn) {
        settingBtn.addEventListener("click", function () {
            alert("设置功能开发中");
        });
    }

    // ===========================
    // 添加游戏按钮
    // ===========================
    const addButton = document.getElementById("addGameBtn");

    if (addButton) {
        addButton.addEventListener("click", addGameCard);
    }

});


// ===========================
// 添加游戏卡片
// ===========================
function addGameCard() {

    gameCount++;

    const container = document.getElementById("gameContainer");

    // 删除"暂无游戏"
    const empty = container.querySelector(".empty");

    if (empty) {
        empty.remove();
    }

    // 创建游戏卡片
    const card = document.createElement("div");
    card.className = "game-card";

    // ---------------------------
    // 标题
    // ---------------------------
    const title = document.createElement("h3");
    title.textContent = "游戏 " + gameCount;

    // ---------------------------
    // 游戏名称
    // ---------------------------
    const label = document.createElement("label");
    label.textContent = "游戏名称";

    // ---------------------------
    // 下拉菜单
    // ---------------------------
    const select = document.createElement("select");
    select.className = "game-select";

    // 默认选项
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "请选择游戏";
    select.appendChild(defaultOption);

    // 从 games.js 读取所有游戏
    for (let i = 0; i < games.length; i++) {

        const option = document.createElement("option");

        option.value = games[i].id;
        option.textContent = games[i].name;

        select.appendChild(option);

    }

    // ===========================
    // 以后这里加入：
    // ❤喜爱度
    // 👀隐藏角色
    // 我推
    // 我推CP
    // ===========================

    // 放入卡片
    card.appendChild(title);
    card.appendChild(label);
    card.appendChild(select);

    // 放入页面
    container.appendChild(card);

}
