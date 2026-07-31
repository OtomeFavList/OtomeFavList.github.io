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

    card.innerHTML = `
        <h3>游戏 ${gameCount}</h3>
        <p>下一课将在这里加入游戏选择。</p>
    `;

    container.appendChild(card);

}
