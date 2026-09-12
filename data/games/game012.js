// data/games/game012.js
// ✅已核对信息
const gameData = {
    id: "game012",
    name: "谎月香格里拉",
    year: "2022",
    publisher: ["Rejet"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"真崎結衣", lang:"zh"},
        {name:"鷹匠早紀", lang:"zh"},
        {name:"秋月ひろ", lang:"zh"},
        {name:"久遠まひろ", lang:"zh"},
        {name:"由女川萩", lang:"zh"},
        {name:"竹藤夜宵", lang:"zh"},
        {name:"やまだ有見", lang:"ja"},
        {name:"こたに白子", lang:"ja"}
    ],
    art: [
        {name:"hagi", lang:"en"}
    ],
    cover: "game/012.jpg",
    charList: [
        // 晦光
        {
            id: "g012_f01",
            name: "晦光",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/012/Akari.jpg",
                            "char/012/Akari2.jpg"], type: "base" }
            ]
        },
        // 恩德
        {
            id: "g012_m01",
            name: "恩德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/012/Ende.jpg",
                            "char/012/Ende2.jpg",
                            "char/012/Ende3.jpg"], type: "base" }
            ]
        },
        // 芬里尔
        {
            id: "g012_m02",
            name: "芬里尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/012/Fenrir.jpg",
                            "char/012/Fenrir2.jpg",
                            "char/012/Fenrir3.jpg",
                            "char/012/Fenrir4.jpg"], type: "base" }
            ]
        },
        // 哈提
        {
            id: "g012_m03",
            name: "哈提",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/012/Hati.jpg",
                            "char/012/Hati2.jpg",
                            "char/012/Hati3.jpg"], type: "base" }
            ]
        },
        // 海拉
        {
            id: "g012_m04",
            name: "海拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/012/Hel.jpg",
                            "char/012/Hel2.jpg",
                            "char/012/Hel3.jpg",
                            "char/012/Hel4.jpg"], type: "base" }
            ]
        },
        // 耶梦加得
        {
            id: "g012_m05",
            name: "耶梦加得",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/012/Jorm.jpg",
                            "char/012/Jorm2.jpg",
                            "char/012/Jorm3.jpg",
                            "char/012/Jorm4.jpg"], type: "base" }
            ]
        },
        // 洛基
        {
            id: "g012_s01",
            name: "洛基",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/012/Loki.jpg"], type: "base" }
            ]
        },
        // 奥尔森
        {
            id: "g012_s02",
            name: "奥尔森",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/012/Olsen.jpg"], type: "base" }
            ]
        },
        // 斯洛特拉
        {
            id: "g012_s03",
            name: "斯洛特拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/012/Snotra.jpg"], type: "base" }
            ]
        },
        // 索尼娅
        {
            id: "g012_s04",
            name: "索尼娅",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/012/Sonia.jpg"], type: "base" }
            ]
        },
        // 泰特拉
        {
            id: "g012_s05",
            name: "泰特拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/012/Tetra.jpg"], type: "base" }
            ]
        },
        // 蒂尔
        {
            id: "g012_s06",
            name: "蒂尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/012/Tyr.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
