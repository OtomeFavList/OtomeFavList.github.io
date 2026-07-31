// ===============================
// Otome FavList
// app.js
// ===============================

// 当前已经添加了几个游戏
let gameCount = 0;

// 页面加载完成
document.addEventListener("DOMContentLoaded", function () {

    // 找到按钮
    const addButton = document.getElementById("addGameBtn");

    // 点击按钮
    addButton.addEventListener("click", addGameCard);

});

// 添加游戏卡片
function addGameCard() {

    gameCount++;

    const container = document.getElementById("gameContainer");

    // 删除"暂无游戏"
    if (container.querySelector(".empty")) {

        container.innerHTML = "";

    }

    // 创建卡片
    const card = document.createElement("div");

    card.className = "game-card";

    card.innerHTML = `

        <h3>游戏 ${gameCount}</h3>

        <p>这里以后会放游戏名称。</p>

    `;

    container.appendChild(card);

}
