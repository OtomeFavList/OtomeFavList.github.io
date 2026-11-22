// ⚠️已核对信息，角色未添加
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game141", // 全局唯一ID，不可重复，如 game001
    name: "真·翡翠の雫 緋色の欠片2",
    year: "2011",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"日野光里", lang:"zh"},
        {name:"西村悠", lang:"zh"},
        {name:"立花ひめ", lang:"zh"},
        {name:"株式会社エレファンテ", lang:"zh"},
        {name:"やまだ有見", lang:"ja"}
    ],
    art: [
        {name:"カズキヨネ", lang:"ja"}
    ],
    cover: "game/141.jpg", // 相对路径，游戏封面
};

// ESModule导出
export { gameData };
