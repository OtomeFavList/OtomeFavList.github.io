// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game153", // 全局唯一ID，不可重复，如 game001
    name: "維新恋華 龍馬外伝",
    year: "2014",
    publisher: ["D3 Publisher"],
    cnStudio: "暂无",
    writer: [
        {name:"珠希けい", lang:"zh"},
        {name:"寺山宗宏", lang:"zh"}
    ],
    art: [
        {name:"加藤さやか", lang:"zh"}
    ],
    cover: "game/153.jpg", // 相对路径，游戏封面
    ]
};

// ESModule导出
export { gameData };
