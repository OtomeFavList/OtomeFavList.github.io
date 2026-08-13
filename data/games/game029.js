// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game029", // 全局唯一ID，不可重复
    name: "白与黑的爱丽丝",
    year: "2023",
    publisher: ["Otomate"],
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
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/029.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 爱日梨
        {
            id: "g029_f01",
            name: "爱日梨",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Airi.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Airi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 露娜
        {
            id: "g029_f02",
            name: "露娜",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Luna.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Luna2.jpg"], type: "base" },      // 默认基础图，始终加载
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
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Jack.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Jack2.jpg"], type: "base" },      // 默认基础图，始终加载
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
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Kanon.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Kanon2.jpg"], type: "base" },      // 默认基础图，始终加载
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
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Minette.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Minette2.jpg"], type: "base" },      // 默认基础图，始终加载
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
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Nello.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Nello2.jpg"], type: "base" },      // 默认基础图，始终加载
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
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Rain.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Rain2.jpg"], type: "base" },      // 默认基础图，始终加载
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
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Snow.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/029/Snow2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
