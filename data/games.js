// data/games.js
// 聚合games/下所有独立游戏数据，自动合并全局数组
// 新增游戏只新建games/gameXXX.js，仅需要在下方数组追加文件名，本文件其余代码永久不用修改
const allGameFileNames = [
    "game044.js"
    // 后续新增游戏仅在此添加一行文件名即可
];

// 全局游戏数据存储容器
window.gameDataList = [];

// 使用网站根绝对路径，彻底消除模块相对路径错乱
async function loadAllGames() {
    const baseUrl = "./games/";
    const total = allGameFileNames.length;
    let loadedCount = 0;
    // 注意：window.gameDataList 已在外部初始化，不重复重置保留原有兼容性

    // 构建全部导入Promise数组，实现并发批量加载
    const importPromises = allGameFileNames.map(async (fname) => {
        const src = baseUrl + fname;
        try {
            const mod = await import(src);
            if (mod.gameData) {
                window.gameDataList.push(mod.gameData);
            }
            console.log("✅已加载：", src);
        } catch (err) {
            console.warn("⚠️该游戏文件加载跳过：", src, err);
        } finally {
            loadedCount++;
            // 调用全局进度回调更新弹窗文字
            if (typeof window.onGameLoadProgress === "function") {
                window.onGameLoadProgress(loadedCount, total);
            }
        }
    });

    // 等待所有并发导入完成
    await Promise.all(importPromises);

    console.log("✅游戏加载流程执行完毕，总数量：", window.gameDataList.length);
    if (typeof window.renderGameSelectList === "function") {
        window.renderGameSelectList();
    }
}
window.loadAllGames = loadAllGames;
