// data/games.js
// 聚合games/下所有独立游戏数据，自动合并全局数组
// 新增游戏只新建games/gameXXX.js，仅需要在下方数组追加文件名，本文件其余代码永久不用修改
const allGameFileNames = [
    "game001.js", "game002.js", "game003.js", "game004.js", "game005.js",
    "game006.js", "game007.js", "game008.js", "game009.js", "game010.js",
    "game011.js", "game012.js", "game013.js", "game014.js", "game015.js",
    "game016.js", "game017.js", "game018.js", "game019.js", "game020.js",
    "game021.js", "game022.js", "game023.js", "game024.js", "game025.js",
    "game026.js", "game027.js", "game028.js", "game029.js", "game030.js",
    "game031.js", "game032.js", "game033.js", "game034.js", "game035.js",
    "game036.js", "game037.js", "game038.js", "game039.js", "game040.js",
    "game041.js", "game042.js", "game043.js", "game044.js", "game045.js",
    "game046.js", "game047.js", "game048.js", "game049.js", "game050.js",
    "game051.js", "game052.js", "game053.js", "game054.js", "game055.js",
    "game056.js", "game057.js", "game058.js", "game059.js", "game060.js",
    "game061.js", "game062.js"
    // 后续新增游戏仅在此添加一行文件名即可
];

// 全局游戏数据存储容器
window.gameDataList = [];

// 使用网站根绝对路径，彻底消除模块相对路径错乱
async function loadAllGames() {
    const baseUrl = "./games/";
    for (let fname of allGameFileNames) {
        const src = baseUrl + fname;
        try {
            const mod = await import(src);
            if (mod.gameData) {
                window.gameDataList.push(mod.gameData);
            }
            console.log("✅已加载：", src);
        } catch (err) {
            console.warn("⚠️该游戏文件加载跳过：", src, err);
        }
    }
    console.log("✅游戏加载流程执行完毕，总数量：", window.gameDataList.length);
    if(typeof window.renderGameSelectList === "function"){
        window.renderGameSelectList();
    }
}
window.loadAllGames = loadAllGames;
