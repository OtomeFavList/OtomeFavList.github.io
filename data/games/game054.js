// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game054", // 全局唯一ID，不可重复
    name: "冬园的祭奠",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"喜多南", lang:"zh"},
        {name:"星野彼方", lang:"zh"},
        {name:"山吹てふ", lang:"zh"},
        {name:"炭水化物", lang:"zh"},
        {name:"長野和泉", lang:"zh"},
        {name:"有野幸", lang:"zh"},
        {name:"小縞なお", lang:"zh"}
    ],
    art: [
        {name:"御堂マヰカ", lang:"zh"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/054.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 莱蒂西娅
        {
            id: "g054_f01",
            name: "莱蒂西娅",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/054/Laetitia.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 迪兰·纪拜尔
        {
            id: "g054_m01",
            name: "迪兰·纪拜尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/054/Dylan.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 埃利亚斯·贝尔耶
        {
            id: "g054_m02",
            name: "埃利亚斯·贝尔耶",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/054/Elias.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 伊维尔
        {
            id: "g054_m03",
            name: "伊维尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/054/Hiver.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 奥斯卡·希尔维斯特
        {
            id: "g054_m04",
            name: "奥斯卡·希尔维斯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/054/Oscar.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 雷吉斯·德·卢佩提
        {
            id: "g054_m05",
            name: "雷吉斯·德·卢佩提",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/054/Régis.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
