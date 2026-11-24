// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game152", // 全局唯一ID，不可重复，如 game001
    name: "幕末恋華 花柳剣士伝",
    year: "2007",
    publisher: ["D3 Publisher"],
    cnStudio: "暂无",
    writer: [
        {name:"館山緑", lang:"zh"},
        {name:"砂原有季", lang:"zh"}
    ],
    art: [
        {name:"TOKO", lang:"en"}
    ],
    cover: "game/152.png", // 相对路径，游戏封面
    ]
};

// ESModule导出
export { gameData };
