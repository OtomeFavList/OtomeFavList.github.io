// games.js
// 聚合games/下所有独立游戏数据，自动合并全局数组
// 新增游戏只新建games/gameXXX.js，仅需要在下方数组追加路径，本文件其余代码永久不用修改
const allGameFiles = [
    "./games/game001.js",
    "./games/game002.js",
    "./games/game003.js",
    "./games/game004.js",
    "./games/game005.js",
    "./games/game006.js",
    // 后续新增游戏仅在此添加一行文件路径即可，仅此一处极小改动
];

// 全局游戏数据存储容器（各个gameXXX.js内将数据push到此数组）
window.gameDataList = [];

// 动态载入所有游戏数据
async function loadAllGames() {
    for (let src of allGameFiles) {
        try {
            await import(src);
            console.log("✅已加载：", src);
        } catch (err) {
            console.warn("⚠️该游戏文件加载跳过：", src, err);
        }
    }
    console.log("✅游戏加载流程执行完毕，总数量：", window.gameDataList.length);
    // 载入完成后渲染页面游戏筛选列表
    if(window.renderGameSelectList) renderGameSelectList();
}
// 将函数暴露到全局，交给index.html DOMContentLoaded之后再调用
window.loadAllGames = loadAllGames;
