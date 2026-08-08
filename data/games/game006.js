// data/games/game006.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game006",
    name: "奥林匹亚的晚宴",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: ["片桐由摩"],
    art: ["さとい"],
    cover: "img/game/006.jpg",
    charList: [
        // 奥林匹亚
        {
            id: "g006_f01",
            name: "奥林匹亚",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/006/Olympia.jpg","img/char/006/Olympia2.jpg"], type: "base" }
            ]
        },
        // 朱砂
        {
            id: "g006_m01",
            name: "朱砂",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/006/Akaza.jpg","img/char/006/Akaza2.jpg"], type: "base" }
            ]
        },
        // 天草四郎时贞
        {
            id: "g006_m02",
            name: "天草四郎时贞",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/006/Amakusa.jpg","img/char/006/Amakusa2.jpg"], type: "base" }
            ]
        },
        // 火向
        {
            id: "g006_m03",
            name: "火向",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/006/Himuka.jpg","img/char/006/Himuka2.jpg"], type: "base" }
            ]
        },
        // 玄叶
        {
            id: "g006_m04",
            name: "玄叶",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/006/Kuroba.jpg","img/char/006/Kuroba2.jpg"], type: "base" }
            ]
        },
        // 璃空
        {
            id: "g006_m05",
            name: "璃空",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/006/Rikuu.jpg","img/char/006/Rikuu2.jpg"], type: "base" }
            ]
        }, // ←===【修复：补上这里缺失的逗号】===
        // 缘
        {
            id: "g006_m06",
            name: "缘",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/006/Yosuga.jpg","img/char/006/Yosuga2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
