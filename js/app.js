// ===============================
// Otome FavList
// app.js
// ===============================

// 已添加游戏数量
let gameCount = 0;

// 页面加载完成
document.addEventListener("DOMContentLoaded", function () {

    // 设置按钮
    const settingBtn = document.querySelector(".setting-btn");

    if (settingBtn) {
        settingBtn.addEventListener("click", function () {
            alert("设置功能开发中");
        });
    }

    // 添加游戏按钮
    const addButton = document.getElementById("addGameBtn");

    if (addButton) {
        addButton.addEventListener("click", addGameCard);
    }

});

// 添加游戏卡片
function addGameCard() {

    gameCount++;

    const container = document.getElementById("gameContainer");

    // 删除提示
    const empty = container.querySelector(".empty");

    if (empty) {
        empty.remove();
    }

    // 创建卡片
    const card = document.createElement("div");

    card.className = "game-card";

    // 创建标题
const title = document.createElement("h3");
title.textContent = `游戏 ${gameCount}`;

// 创建文字
const label = document.createElement("label");
label.textContent = "游戏名称";

// 创建下拉菜单
const select = document.createElement("select");

select.className = "game-select";

// 第一项
const defaultOption = document.createElement("option");

defaultOption.value = "";
defaultOption.textContent = "请选择游戏";

select.appendChild(defaultOption);

// 加入所有游戏
for (let i = 0; i < games.length; i++) {

    const option = document.createElement("option");

    option.value = games[i].id;

    option.textContent = games[i].name;

    select.appendChild(option);

}

// 放进卡片
card.appendChild(title);

card.appendChild(label);

card.appendChild(select);

    container.appendChild(card);

}
