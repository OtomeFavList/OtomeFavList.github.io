// data/games/game029.js
// ✅已核对信息
const gameData = {
    id: "game029", // 全局唯一ID，不可重复
    name: "白与黑的爱丽丝",
    year: "2023",
    publisher: ["Otomate","工画堂スタジオ"],
    cnStudio: "JSD",
    writer: [
        {name:"関涼子", lang:"zh"},
        {name:"魚住ユキコ", lang:"zh"},
        {name:"上月はじめ", lang:"zh"},
        {name:"吉村りりか", lang:"zh"},
        {name:"恵村まお", lang:"zh"},
        {name:"夏野景", lang:"zh"},
        {name:"神城咲弥", lang:"zh"},
        {name:"夜空茜", lang:"zh"},
        {name:"石倉みもり", lang:"zh"},
        {name:"花井カオリ", lang:"zh"},
        {name:"猫乃しおり", lang:"zh"},
        {name:"七瀬みお", lang:"zh"},
        {name:"仰木サヤ", lang:"zh"},
        {name:"柿本悠理", lang:"zh"},
        {name:"祁答院慎", lang:"zh"},
        {name:"紅原香", lang:"zh"},
        {name:"天乃聖樹", lang:"zh"},
        {name:"まるや諒", lang:"ja"},
        {name:"センチメンタルべにこ", lang:"ja"}
    ],
    art: [
        {name:"もちもちた", lang:"ja"}
    ],
    cover: "game/029.jpg",
    charList: [
        // 爱日梨
        {
            id: "g029_f01",
            name: "爱日梨",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/029/Airi.jpg",
                            "char/029/Airi2.jpg",
                            "char/029/Airi3.jpg",
                            "char/029/Airi4.jpg"], type: "base" }
            ]
        },
        // 露娜
        {
            id: "g029_f02",
            name: "露娜",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/029/Luna.jpg",
                            "char/029/Luna2.jpg",
                            "char/029/Luna3.jpg",
                            "char/029/Luna4.jpg"], type: "base" }
            ]
        },
        // 杰克
        {
            id: "g029_m01",
            name: "杰克",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/029/Jack.jpg",
                            "char/029/Jack2.jpg",
                            "char/029/Jack3.jpg",
                            "char/029/Jack4.jpg"], type: "base" }
            ]
        },
        // 卡农
        {
            id: "g029_m02",
            name: "卡农",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/029/Kanon.jpg",
                            "char/029/Kanon2.jpg",
                            "char/029/Kanon3.jpg",
                            "char/029/Kanon4.jpg"], type: "base" }
            ]
        },
        // 米涅特
        {
            id: "g029_m03",
            name: "米涅特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/029/Minette.jpg",
                            "char/029/Minette2.jpg",
                            "char/029/Minette3.jpg",
                            "char/029/Minette4.jpg"], type: "base" }
            ]
        },
        // 尼洛
        {
            id: "g029_m04",
            name: "尼洛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/029/Nello.jpg",
                            "char/029/Nello2.jpg",
                            "char/029/Nello3.jpg",
                            "char/029/Nello4.jpg"], type: "base" }
            ]
        },
        // 雷因
        {
            id: "g029_m05",
            name: "雷因",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/029/Rain.jpg",
                            "char/029/Rain2.jpg",
                            "char/029/Rain3.jpg",
                            "char/029/Rain4.jpg"], type: "base" }
            ]
        },
        // 斯诺
        {
            id: "g029_m06",
            name: "斯诺",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/029/Snow.jpg",
                            "char/029/Snow2.jpg",
                            "char/029/Snow3.jpg",
                            "char/029/Snow4.jpg"], type: "base" }
            ]
        },
        // 浅葱
        {
            id: "g029_s01",
            name: "浅葱",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Asagi.jpg"], type: "base" }
            ]
        },
        // 达姆
        {
            id: "g029_s02",
            name: "达姆",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Damu.jpg"], type: "base" }
            ]
        },
        // 迪
        {
            id: "g029_s03",
            name: "迪",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Dei.jpg"], type: "base" }
            ]
        },
        // 卡尔米亚
        {
            id: "g029_s04",
            name: "卡尔米亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Kalmia.jpg"], type: "base" }
            ]
        },
        // 米丝蒂
        {
            id: "g029_s05",
            name: "米丝蒂",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Misty.jpg"], type: "base" }
            ]
        },
        // 美羽
        {
            id: "g029_s06",
            name: "美羽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Miu.jpg",
                            "char/029/Miu2.jpg"], type: "base" }
            ]
        },
        // 奈因
        {
            id: "g029_s07",
            name: "奈因",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Nain.jpg",
                            "char/029/Nain2.jpg"], type: "base" }
            ]
        },
        // 奈津菜
        {
            id: "g029_s08",
            name: "奈津菜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Nazuna.jpg",
                            "char/029/Nazuna2.jpg"], type: "base" }
            ]
        },
        // 拉特
        {
            id: "g029_s09",
            name: "拉特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Ratte.jpg"], type: "base" }
            ]
        },
        // 琉唯
        {
            id: "g029_s10",
            name: "琉唯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Rui.jpg"], type: "base" }
            ]
        },
        // 史黛拉
        {
            id: "g029_s11",
            name: "史黛拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Stella.jpg"], type: "base" }
            ]
        },
        // 洋平
        {
            id: "g029_s12",
            name: "洋平",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/029/Yohei.jpg",
                            "char/029/Yohei2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
