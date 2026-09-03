// data/games/game003.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game003",
    name: "幻奏咖啡厅-Enchanté-",
    year: "2020",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"中山智美", lang:"zh"},
        {name:"佐々木麿", lang:"zh"},
        {name:"吉村りりか", lang:"zh"},
        {name:"小縞なお", lang:"zh"}
    ],
    art: [
        {name:"ユウヤ", lang:"ja"}
    ],
    cover: "game/003.jpg",
    charList: [
        // 淡木琴音
        {
            id: "g003_f01",
            name: "淡木琴音",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/003/Awaki.jpg",
                            "char/003/Awaki2.jpg"], type: "base" }
            ]
        },
        // 卡努斯·埃斯帕达
        {
            id: "g003_m01",
            name: "卡努斯·埃斯帕达",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/003/Canus.jpg",
                            "char/003/Canus2.jpg"], type: "base" }
            ]
        },
        // 伊格尼斯·卡里本库鲁斯
        {
            id: "g003_m02",
            name: "伊格尼斯·卡里本库鲁斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/003/Ignis.jpg",
                            "char/003/Ignis2.jpg"], type: "base" }
            ]
        },
        // 伊尔·法多·德·里艾
        {
            id: "g003_m03",
            name: "伊尔·法多·德·里艾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/003/Il.jpg",
                            "char/003/Il2.jpg"], type: "base" }
            ]
        },
        // 米歇尔·阿雷克斯
        {
            id: "g003_m04",
            name: "米歇尔·阿雷克斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/003/Misyr.jpg",
                            "char/003/Misyr2.jpg"], type: "base" }
            ]
        },
        // 凜堂香
        {
            id: "g003_m05",
            name: "凜堂香",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/003/Rindou.jpg",
                            "char/003/Rindou2.jpg"], type: "base" }
            ]
        },
        // 阿倍狩也
        {
            id: "g003_s01",
            name: "阿倍狩也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Abe.jpg"], type: "base" }
            ]
        },
        // 阿斯莫德
        {
            id: "g003_s02",
            name: "阿斯莫德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Asmodeus.jpg"], type: "base" }
            ]
        },
        // 索利图斯
        {
            id: "g003_s03",
            name: "索利图斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Assistant.jpg"], type: "base" }
            ]
        },
        // 德罗米
        {
            id: "g003_s04",
            name: "德罗米",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Dromi.jpg"], type: "base" }
            ]
        },
        // 艾皮洛基
        {
            id: "g003_s05",
            name: "艾皮洛基",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Epilogi.jpg"], type: "base" }
            ]
        },
        // 克洛洛
        {
            id: "g003_s06",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Kororo.jpg"], type: "base" }
            ]
        },
        // 御门彰
        {
            id: "g003_s07",
            name: "御门彰",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Mikado.jpg"], type: "base" }
            ]
        },
        // 诺亚
        {
            id: "g003_s08",
            name: "诺亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Noah.jpg"], type: "base" }
            ]
        },
        // 淡木草庵
        {
            id: "g003_s09",
            name: "淡木草庵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Souan.jpg"], type: "base" }
            ]
        },
        // 缇塔妮亚
        {
            id: "g003_s10",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Titania.jpg"], type: "base" }
            ]
        },
        // 温尼亚
        {
            id: "g003_s11",
            name: "温尼亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/003/Venia.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
