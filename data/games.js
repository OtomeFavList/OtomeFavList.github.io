// data/games.js
// 聚合data/games/下所有独立游戏数据，自动合并全局数组
// 新增游戏只新建data/games/gameXXX.js，仅需在下方数组追加路径，本文件其余代码永久不用修改
const allGameFiles = [
    "./data/games/game001.js",
    "./data/games/game002.js"
    // 后续新增游戏仅在此添加一行文件路径即可，仅此一处极小改动
];

// 全局游戏数据存储容器（各个gameXXX.js内将数据push到此数组）
window.gameDataList = [];

// 动态载入所有游戏数据
async function loadAllGames() {
    try {
        for (let src of allGameFiles) {
            await import(src);
        }
        // 载入完成后渲染页面游戏筛选列表
        if (typeof window.renderGameSelectList === "function") {
            window.renderGameSelectList();
        }
    } catch (err) {
        console.error("游戏数据加载失败：", err);
        alert("部分游戏文件加载失败，请检查文件路径名称！");
    }
}

// 启动加载
loadAllGames();
