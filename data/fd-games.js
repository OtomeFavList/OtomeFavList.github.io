// data/fd-games.js
// 续作/FD专用游戏文件清单，仅年度报告模块加载；FavList 模式不读取
const fdGameFileNames = [
    "fd001.js", "fd002.js", "fd003.js", "fd004.js", "fd005.js",
    "fd006.js", "fd007.js", "fd008.js", "fd009.js", "fd010.js",
    "fd011.js", "fd012.js", "fd013.js", "fd014.js", "fd015.js",
    "fd016.js", "fd017.js", "fd018.js", "fd019.js", "fd020.js",
    "fd021.js", "fd022.js", "fd023.js", "fd024.js", "fd025.js",
    "fd026.js", "fd027.js", "fd028.js", "fd029.js", "fd030.js",
    "fd031.js", "fd032.js", "fd033.js", "fd034.js", "fd035.js",
    "fd036.js", "fd037.js", "fd038.js", "fd039.js", "fd040.js",
    "fd041.js", "fd042.js", "fd043.js", "fd044.js", "fd045.js",
    "fd046.js", "fd047.js", "fd048.js", "fd049.js", "fd050.js",
    "fd051.js", "fd052.js", "fd053.js", "fd054.js", "fd055.js",
    "fd056.js", "fd057.js", "fd058.js", "fd059.js", "fd060.js",
];
window.fdGameList = [];

async function loadAllFDGames() {
    const baseUrl = "./games/";
    const total = fdGameFileNames.length;
    let loadedCount = 0;
    const importPromises = fdGameFileNames.map(async (fname) => {
        const src = baseUrl + fname;
        try {
            const mod = await import(src);
            if (mod.gameData) {
                window.fdGameList.push(mod.gameData);
            }
            console.log("✅已加载FD游戏：", src);
        } catch (err) {
            console.warn("⚠️FD游戏文件加载跳过：", src, err);
        } finally {
            loadedCount++;
            if (typeof window.onFDGameLoadProgress === "function") {
                window.onFDGameLoadProgress(loadedCount, total);
            }
        }
    });
    await Promise.all(importPromises);
    console.log("✅FD游戏加载流程执行完毕，总数量：", window.fdGameList.length);
}
window.loadAllFDGames = loadAllFDGames;
export { loadAllFDGames };
