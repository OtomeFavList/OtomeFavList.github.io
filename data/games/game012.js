// data/games/game012.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
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
                            "char/012/Ende2.jpg"], type: "base" }
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
                            "char/012/Fenrir3.jpg"], type: "base" }
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
                            "char/012/Hati2.jpg"], type: "base" }
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
                            "char/012/Hel3.jpg"], type: "base" }
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
                            "char/012/Jorm3.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
