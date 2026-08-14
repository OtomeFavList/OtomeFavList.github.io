// data/games/game016.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game016", // 全局唯一ID，不可重复
    name: "终远的威尔修 -ErroR:salvation-",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"中山智美", lang:"zh"},
        {name:"夕月", lang:"zh"},
        {name:"浅海藍子", lang:"zh"}
    ],
    art: [
        {name:"読", lang:"zh"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/016.jpg",
    charList: [
        // 瑟蕾思
        {
            id: "g016_f01",
            name: "瑟蕾思",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Ceres.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Ceres2.jpg"], type: "base" },
            ]
        },
        // 阿道夫
        {
            id: "g016_m01",
            name: "阿道夫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Adolphe.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Adolphe2.jpg"], type: "base" },
            ]
        },
        // 安库
        {
            id: "g016_m02",
            name: "安库",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Ankou.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Ankou2.jpg"], type: "base" },
            ]
        },
        // 璐卡·普鲁斯特
        {
            id: "g016_m03",
            name: "璐卡·普鲁斯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Lucas.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Lucas2.jpg"], type: "base" },
            ]
        },
        // 马蒂斯·克洛德
        {
            id: "g016_m04",
            name: "马蒂斯·克洛德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Mathis.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Mathis2.jpg"], type: "base" },
            ]
        },
        // 席安·布洛菲沃思
        {
            id: "g016_m05",
            name: "席安·布洛菲沃思",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Scien.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Scien2.jpg"], type: "base" },
            ]
        },
        // 伊孚
        {
            id: "g016_m06",
            name: "伊孚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Yves.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/016/Yves2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
