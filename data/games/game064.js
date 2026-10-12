// data/games/game064.js
// ✅已核对信息
const gameData = {
    id: "game064", // 全局唯一ID，不可重复
    name: "圣灵家族 Rinato",
    year: "2025",
    publisher: ["COMFORT","HuneX"],
    cnStudio: "GSE",
    writer: [
        {name:"海堂めぐる", lang:"zh"},
        {name:"生田美和", lang:"zh"}
    ],
    art: [
        {name:"さらちよみ", lang:"ja"}
    ],
    cover: "game/064.jpg",
    charList: [
        // 菲丽琪塔
        {
            id: "g064_f01",
            name: "菲丽琪塔",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Felicita.jpg",
                            "char/064/Felicita2.jpg"], type: "base" }
            ]
        },
        // 但丁
        {
            id: "g064_m01",
            name: "但丁",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Dante.jpg",
                            "char/064/Dante2.jpg"], type: "base" }
            ]
        },
        // 戴维特
        {
            id: "g064_m02",
            name: "戴维特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Debito.jpg",
                            "char/064/Debito2.jpg"], type: "base" }
            ]
        },
        // 乔利
        {
            id: "g064_m03",
            name: "乔利",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Jolly.jpg",
                            "char/064/Jolly2.jpg"], type: "base" }
            ]
        },
        // 利贝罗塔
        {
            id: "g064_m04",
            name: "利贝罗塔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Liberta.jpg",
                            "char/064/Liberta2.jpg"], type: "base" }
            ]
        },
        // 路卡
        {
            id: "g064_m05",
            name: "路卡",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Luca.jpg",
                            "char/064/Luca2.jpg"], type: "base" }
            ]
        },
        // 诺瓦
        {
            id: "g064_m06",
            name: "诺瓦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Nova.jpg",
                            "char/064/Nova2.jpg"], type: "base" }
            ]
        },
        // 帕契
        {
            id: "g064_m07",
            name: "帕契",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Pace.jpg",
                            "char/064/Pace2.jpg"], type: "base" }
            ]
        },
        // 默德
        {
            id: "g064_s01",
            name: "默德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/064/Mondo.jpg"], type: "base" }
            ]
        },
        // 堇
        {
            id: "g064_s02",
            name: "堇",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/064/Sumire.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
