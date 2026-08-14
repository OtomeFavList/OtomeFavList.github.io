// data/games/game005.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game005",
    name: "安琪莉可 Luminarise",
    year: "2021",
    publisher: ["KOEI"],
    cnStudio: "KOEI",
    writer: [
        {name:"雨宮うた", lang:"zh"}
    ],
    art: [
        {name:"紗与イチ", lang:"zh"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/005.jpg",
    charList: [
        // 杏树
        {
            id: "g005_f01",
            name: "杏树",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Ange.jpg"], type: "base" }
            ]
        },
        // 菲利克斯
        {
            id: "g005_m01",
            name: "菲利克斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Felix.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Felix2.png"], type: "base" }
            ]
        },
        // 奏太
        {
            id: "g005_m02",
            name: "奏太",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Kanata.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Kanata2.png"], type: "base" }
            ]
        },
        // 罗伦佐
        {
            id: "g005_m03",
            name: "罗伦佐",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Lorenzo.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Lorenzo2.png"], type: "base" }
            ]
        },
        // 米兰
        {
            id: "g005_m04",
            name: "米兰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Milan.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Milan2.png"], type: "base" }
            ]
        },
        // 诺亚
        {
            id: "g005_m05",
            name: "诺亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Noah.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Noah2.png"], type: "base" }
            ]
        },
        // 舒里
        {
            id: "g005_m06",
            name: "舒里",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Shuri.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Shuri2.png"], type: "base" }
            ]
        },
        // 维吉尔
        {
            id: "g005_m07",
            name: "维吉尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Vergil.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Vergil2.png"], type: "base" }
            ]
        },
        // 杰诺
        {
            id: "g005_m08",
            name: "杰诺",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Xeno.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Xeno2.png"], type: "base" }
            ]
        },
        // 犹月
        {
            id: "g005_m09",
            name: "犹月",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Yue.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/005/Yue2.png"], type: "base" }
            ]
        }
    ]
};

// 移除旧全局push写法！使用ESModule导出
export { gameData };
