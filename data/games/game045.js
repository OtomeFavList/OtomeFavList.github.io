// data/games/game045.js
// ✅已核对信息
// ℹ️配角名未校对
const gameData = {
    id: "game045", // 全局唯一ID，不可重复
    name: "绚烂传说",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"小縞なお", lang:"zh"},
        {name:"有野幸", lang:"zh"},
        {name:"北弓しほ", lang:"zh"}
    ],
    art: [
        {name:"薄葉カゲロー", lang:"zh"},
        {name:"朱玖", lang:"zh"},
        {name:"miko", lang:"en"}
    ],
    cover: "game/045.jpg",
    charList: [
        // 蒂法莉娅
        {
            id: "g045_f01",
            name: "蒂法莉娅",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Tifalia.jpg",
                            "char/045/Tifalia2.jpg"], type: "base" }
            ]
        },
        // 伊昂
        {
            id: "g045_m01",
            name: "伊昂",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Ion.jpg",
                            "char/045/Ion3.jpg"], type: "base" }
            ]
        },
        // 帕斯哈里亚
        {
            id: "g045_m02",
            name: "帕斯哈里亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Paschalia.jpg",
                            "char/045/Paschalia2.jpg"], type: "base" }
            ]
        },
        // 拉蒂
        {
            id: "g045_m03",
            name: "拉蒂",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Radie.jpg",
                            "char/045/Radie2.jpg",
                            "char/045/Radie3.jpg"], type: "base" }
            ]
        },
        // 威利欧
        {
            id: "g045_m04",
            name: "威利欧",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Vilio.jpg",
                            "char/045/Vilio2.jpg"], type: "base" }
            ]
        },
        // 札弗拉
        {
            id: "g045_m05",
            name: "札弗拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Zafora.jpg",
                            "char/045/Zafora2.jpg"], type: "base" }
            ]
        },
        // 吉尼亚
        {
            id: "g045_fd01",
            name: "吉尼亚",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/045/Jinnia.jpg",
                            "char/045/Jinnia2.jpg",
                            "char/045/Jinnia3.jpg"], type: "base" }
            ]
        },
        // 里昂
        {
            id: "g045_fd02",
            name: "里昂",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/045/Liyan.jpg",
                            "char/045/Liyan2.jpg"], type: "base" }
            ]
        },
        // 阿莱斯特
        {
            id: "g45_s01",
            name: "阿莱斯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/045/Alest.jpg"], type: "base" }
            ]
        },
        // 阿维
        {
            id: "g45_s02",
            name: "阿维",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/045/Avi.jpg"], type: "base" }
            ]
        },
        // 巴尔托
        {
            id: "g45_s03",
            name: "巴尔托",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/045/Balto.jpg"], type: "base" }
            ]
        },
        // 柯里乌斯
        {
            id: "g45_s04",
            name: "柯里乌斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/045/Colivus.jpg",
                            "char/045/Colivus2.jpg"], type: "base" }
            ]
        },
        // 露娜
        {
            id: "g45_s05",
            name: "露娜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/045/Luna.jpg"], type: "base" }
            ]
        },
        // 菲罗
        {
            id: "g45_s06",
            name: "菲罗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/045/Phiro.jpg"], type: "base" }
            ]
        },
        // 斯皮雷亚
        {
            id: "g45_s07",
            name: "斯皮雷亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/045/Spirea.jpg"], type: "base" }
            ]
        },
        // 维戈尼亚
        {
            id: "g45_s08",
            name: "维戈尼亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/045/Vigonia.jpg"], type: "base" }
            ]
        },
        // 娜莉亚
        {
            id: "g45_fs01",
            name: "娜莉亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/045/Naria.jpg"], type: "base" }
            ]
        },
        // 拉吉艾尔
        {
            id: "g45_fs02",
            name: "拉吉艾尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/045/Raijieru.jpg"], type: "base" }
            ]
        },
        // 雷夫
        {
            id: "g45_fs03",
            name: "雷夫",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/045/Reve.jpg"], type: "base" }
            ]
        },
        // 乌塔
        {
            id: "g45_fs04",
            name: "乌塔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/045/Vta.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
