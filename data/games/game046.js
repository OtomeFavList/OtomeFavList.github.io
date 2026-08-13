// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game046", // 全局唯一ID，不可重复
    name: "米斯托尼亚的翅望 -The Lost Delight-",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"夕月", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"泉水みに", lang:"zh"},
        {name:"夏野景", lang:"zh"}
    ],
    art: [
        {name:"清白かりん", lang:"zh"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/046.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 亚普萝丝
        {
            id: "g046_f01",
            name: "亚普萝丝",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Alfred.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Alfred2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Alfred3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 阿尔弗雷德·克雷斯维尔
        {
            id: "g046_m01",
            name: "阿尔弗雷德·克雷斯维尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Alfred.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Alfred2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Alfred3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 亚斯科特·林代尔
        {
            id: "g046_m02",
            name: "亚斯科特·林代尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Ascot.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Ascot2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Ascot3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 爱德华·伯思斯坦
        {
            id: "g046_m03",
            name: "爱德华·伯思斯坦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Edward.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Edward2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Edward3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 约翰
        {
            id: "g046_m04",
            name: "约翰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/John.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/John2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/John3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 莱纳斯·沃德
        {
            id: "g046_m05",
            name: "莱纳斯·沃德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Linus.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Linus2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Linus3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 卢卡斯·沙利文
        {
            id: "g046_m05",
            name: "卢卡斯·沙利文",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Lucas.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Lucas2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/046/Lucas3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
