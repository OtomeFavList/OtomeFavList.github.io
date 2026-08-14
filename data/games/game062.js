// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game062", // 全局唯一ID，不可重复
    name: "悠久的钢刃列骑",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"中村和騎", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"佐々木麿", lang:"zh"},
        {name:"结良あや", lang:"zh"}
    ],
    art: [
        {name:"いけ", lang:"ja"},
        {name:"きなみ由希", lang:"ja"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/062.jpg",
    charList: [
        // 伊芙
        {
            id: "g062_f01",
            name: "伊芙",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/062/Eve.jpg"], type: "base" },
            ]
        },
        // 阿塔尔瓦
        {
            id: "g062_m01",
            name: "阿塔尔瓦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/062/Atharva.jpg"], type: "base" },
            ]
        },
        // 克莱德尔
        {
            id: "g062_m02",
            name: "克莱德尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/062/Cradle.jpg"], type: "base" },
            ]
        },
        // 罗
        {
            id: "g062_m03",
            name: "罗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/062/Row.jpg"], type: "base" },
            ]
        },
        // 修德
        {
            id: "g062_m04",
            name: "修德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/062/Sud.jpg"], type: "base" },
            ]
        },
        // 约叙尔
        {
            id: "g062_m05",
            name: "约叙尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/062/Yajur.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
