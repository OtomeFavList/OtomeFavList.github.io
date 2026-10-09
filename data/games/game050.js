// data/games/game050.js
// ✅已核对信息
const gameData = {
    id: "game050", // 全局唯一ID，不可重复
    name: "如果这个世界有神明大人存在的话",
    year: "2025",
    publisher: ["Rejet"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"三芳秀克", lang:"zh"},
        {name:"中越麻朝", lang:"zh"},
        {name:"久遠まひろ", lang:"zh"},
        {name:"如月蒼", lang:"zh"},
        {name:"小和泉いづみ", lang:"zh"},
        {name:"有栖川あやみ", lang:"zh"},
        {name:"桜木鈴音", lang:"zh"},
        {name:"真崎結衣", lang:"zh"},
        {name:"秋月ひろ", lang:"zh"},
        {name:"関涼子", lang:"zh"},
        {name:"鷹匠早紀", lang:"zh"},
        {name:"こたに白子", lang:"ja"},
        {name:"やまだ有見", lang:"ja"}
    ],
    art: [
        {name:"ワカツキ", lang:"ja"}
    ],
    cover: "game/050.jpg",
    charList: [
        // 来实春香
        {
            id: "g050_f01",
            name: "来实春香",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Haruka.jpg",
                            "char/050/Haruka2.jpg",
                            "char/050/Haruka3.jpg"], type: "base" }
            ]
        },
        // 细波艾斯
        {
            id: "g050_m01",
            name: "细波艾斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Ace.jpg",
                            "char/050/Ace2.jpg",
                            "char/050/Ace3.jpg"], type: "base" }
            ]
        },
        // 神里晓
        {
            id: "g050_m02",
            name: "神里晓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Kyou.jpg",
                            "char/050/Kyou2.jpg",
                            "char/050/Kyou3.jpg"], type: "base" }
            ]
        },
        // 来实雅人
        {
            id: "g050_m03",
            name: "来实雅人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Masato.jpg",
                            "char/050/Masato2.jpg",
                            "char/050/Masato3.jpg"], type: "base" }
            ]
        },
        // 弓仓音时
        {
            id: "g050_m04",
            name: "弓仓音时",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Neji.jpg",
                            "char/050/Neji2.jpg",
                            "char/050/Neji3.jpg"], type: "base" }
            ]
        },
        // 指乃朱理
        {
            id: "g050_m05",
            name: "指乃朱理",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Shuri.jpg",
                            "char/050/Shuri2.jpg",
                            "char/050/Shuri3.jpg"], type: "base" }
            ]
        },
        // 九鬼辉
        {
            id: "g050_m06",
            name: "九鬼辉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/050/Akira.jpg",
                            "char/050/Akira2.jpg",
                            "char/050/Akira3.jpg"], type: "base" }
            ]
        },
        // 九鬼光
        {
            id: "g050_m07",
            name: "九鬼光",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/050/Hikaru.jpg",
                            "char/050/Hikaru2.jpg",
                            "char/050/Hikaru3.jpg"], type: "base" }
            ]
        },
        // 九鬼静
        {
            id: "g050_m08",
            name: "九鬼静",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/050/Shizuka.jpg",
                            "char/050/Shizuka2.jpg",
                            "char/050/Shizuka3.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
