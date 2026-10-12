// data/games/game062.js
// ✅已核对信息
const gameData = {
    id: "game062", // 全局唯一ID，不可重复
    name: "悠久的钢刃列骑",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"中村和騎", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"佐々木麿", lang:"zh"}
    ],
    art: [
        {name:"いけ", lang:"ja"},
        {name:"きなみ由希", lang:"ja"}
    ],
    cover: "game/062.jpg",
    charList: [
        // 伊芙
        {
            id: "g062_f01",
            name: "伊芙",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/062/Eve.jpg",
                            "char/062/Eve2.jpg",
                            "char/062/Eve3.jpg",
                            "char/062/Eve4.jpg"], type: "base" }
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
                { srcList: ["char/062/Atharva.jpg",
                            "char/062/Atharva2.jpg",
                            "char/062/Atharva3.jpg",
                            "char/062/Atharva4.jpg"], type: "base" }
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
                { srcList: ["char/062/Cradle.jpg",
                            "char/062/Cradle2.jpg",
                            "char/062/Cradle3.jpg",
                            "char/062/Cradle4.jpg"], type: "base" }
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
                { srcList: ["char/062/Row.jpg",
                            "char/062/Row2.jpg",
                            "char/062/Row3.jpg",
                            "char/062/Row4.jpg"], type: "base" }
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
                { srcList: ["char/062/Sud.jpg",
                            "char/062/Sud2.jpg",
                            "char/062/Sud3.jpg",
                            "char/062/Sud4.jpg"], type: "base" }
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
                { srcList: ["char/062/Yajur.jpg",
                            "char/062/Yajur2.jpg",
                            "char/062/Yajur3.jpg",
                            "char/062/Yajur4.jpg",
                            "char/062/Yajur5.jpg"], type: "base" }
            ]
        },
        // 爱娜
        {
            id: "g062_s01",
            name: "爱娜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Aina.jpg"], type: "base" }
            ]
        },
        // 阿卡迪亚
        {
            id: "g062_s02",
            name: "阿卡迪亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Arcadia.jpg"], type: "base" }
            ]
        },
        // 卡曼因
        {
            id: "g062_s03",
            name: "卡曼因",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Carmine.jpg",
                            "char/062/Carmine2.jpg"], type: "base" }
            ]
        },
        // 丹佐伊德
        {
            id: "g062_s04",
            name: "丹佐伊德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Dezoid.jpg"], type: "base" }
            ]
        },
        // 艾利希恩
        {
            id: "g062_s05",
            name: "艾利希恩",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Elysion.jpg"], type: "base" }
            ]
        },
        // 艾尔泽
        {
            id: "g062_s06",
            name: "艾尔泽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Eruze.jpg"], type: "base" }
            ]
        },
        // 方
        {
            id: "g062_s07",
            name: "方",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Fou.jpg"], type: "base" }
            ]
        },
        // 加尔加德
        {
            id: "g062_s08",
            name: "加尔加德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Gargado.jpg"], type: "base" }
            ]
        },
        // 基尔
        {
            id: "g062_s09",
            name: "基尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Gill.jpg"], type: "base" }
            ]
        },
        // 罗兰特
        {
            id: "g062_s10",
            name: "罗兰特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Lorant.jpg"], type: "base" }
            ]
        },
        // 雷
        {
            id: "g062_s11",
            name: "雷",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Ray..jpg"], type: "base" }
            ]
        },
        // 悠久的钢刃列骑
        {
            id: "g062_s12",
            name: "悠久的钢刃列骑",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/062/Tierblade.jpg",
                            "char/062/Tierblade2.jpg",
                            "char/062/Tierblade3.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
