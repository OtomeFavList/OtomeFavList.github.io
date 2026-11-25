// FD/续作专用游戏数据，仅annual年度报告弹窗可见；FavList主模式不可见
// ⚠️信息不确切，封面不清晰
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "fd0",
    name: "示例乙女游戏",
    year: "20",
    publisher: ["原发行商/品牌"],
    cnStudio: "汉化厂商",
    writer: [
        {name:"中文编剧", lang:"zh"},
        {name:"日文编剧", lang:"ja"},
        {name:"英文编剧", lang:"en"}
    ],
    art: [
        {name:"中文原画", lang:"zh"},
        {name:"日文原画", lang:"ja"},
        {name:"英文原画", lang:"en"}
    ],
    cover: "game/fd0.jpg",
    baseGameId: "game1"
};
export { gameData };
