// data/games.js
// 聚合data/games/下所有独立游戏数据，自动合并全局数组
// 新增游戏只新建data/games/gameXXX.js，仅需在下方数组追加路径，本文件其余代码永久不用修改
const allGameFiles = [
    "./games/game001.js",
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
        console.log("✅所有游戏数据加载完毕");
    } catch (err) {
        console.error("游戏数据加载失败：", err);
        alert("部分游戏文件加载失败，请检查文件路径名称！");
    }
}
// 将函数暴露到全局，交给index.html DOMContentLoaded之后再调用
window.loadAllGames = loadAllGames;
