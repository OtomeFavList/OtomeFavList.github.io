// data/games/game069.js
// ✅已核对信息
const gameData = {
    id: "game069", // 全局唯一ID，不可重复，如 game001
    name: "灰鹰幻境",
    year: "2019",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"鈴木俊行", lang:"zh"},
        {name:"雨宮うた", lang:"zh"}
    ],
    art: [
        {name:"結賀さとる", lang:"zh"}
    ],
    cover: "game/069.jpg",
    charList: [
        // 杰德
        {
            id: "g069_f01",
            name: "杰德",
            hiddenName: ["艾儿"],
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/069/Jed.jpg",
                            "char/069/Jed2.jpg",
                            "char/069/Jed3.jpg"], type: "base" },
            ]
        },
        // 休
        {
            id: "g069_m01",
            name: "休",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/069/Hugh.jpg",
                            "char/069/Hugh2.jpg",
                            "char/069/Hugh3.jpg"], type: "base" },
            ]
        },
        // 拉凡
        {
            id: "g069_m02",
            name: "拉凡",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/069/Lavan.jpg",
                            "char/069/Lavan2.jpg",
                            "char/069/Lavan3.jpg"], type: "base" },
            ]
        },
        // 莱维
        {
            id: "g069_m03",
            name: "莱维",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/069/Levi.jpg",
                            "char/069/Levi2.jpg",
                            "char/069/Levi3.jpg"], type: "base" },
            ]
        },
        // 卢格斯
        {
            id: "g069_m04",
            name: "卢格斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/069/Lugus.jpg",
                            "char/069/Lugus2.jpg",
                            "char/069/Lugus3.jpg"], type: "base" },
            ]
        },
        // 塔之主
        {
            id: "g069_m05",
            name: "塔之主",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/069/Tower.jpg",
                            "char/069/Tower2.jpg",
                            "char/069/Tower3.jpg"], type: "base" },
            ]
        },
        // 艾尔利克
        {
            id: "g069_s01",
            name: "艾尔利克",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/069/Elric.jpg",
                            "char/069/Elric2.jpg"], type: "base" }
            ]
        },
        // 弗朗西丝卡
        {
            id: "g069_s02",
            name: "弗朗西丝卡",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/069/Francisca.jpg",
                            "char/069/Francisca2.jpg"], type: "base" }
            ]
        },
        // 劳伦斯
        {
            id: "g069_s03",
            name: "劳伦斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/069/Lawrence.jpg",
                            "char/069/Lawrence2.jpg"], type: "base" }
            ]
        },
        // 奥尔迦
        {
            id: "g069_s04",
            name: "奥尔迦",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/069/Olga.jpg",
                            "char/069/Olga2.jpg"], type: "base" }
            ]
        },
        // 缇伊
        {
            id: "g069_s05",
            name: "缇伊",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/069/Tee.jpg",
                            "char/069/Tee2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
