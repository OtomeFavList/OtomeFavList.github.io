// 聚合data/games/下所有独立游戏数据，自动合并全局数组
// 新增游戏只新建data/games/gameXXX.js，本文件永久不用修改
const allGameFiles = [
    "./data/games/game001.js",
    "./data/games/game002.js"
    // 后续新增游戏仅在此添加一行文件路径即可，仅此一处极小改动
];

// 动态载入所有游戏数据
async function loadAllGames(){
    for(let src of allGameFiles){
        await import(src);
    }
    // 载入完成后渲染页面游戏筛选列表
    if(window.renderGameSelectList) renderGameSelectList();
}
loadAllGames();
