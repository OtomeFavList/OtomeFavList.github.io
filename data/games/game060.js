// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game060", // 全局唯一ID，不可重复
    name: "绝对阶级学园",
    year: "2026",
    publisher: ["Daisy²","PROTOTYPE"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"夏野景", lang:"zh"},
        {name:"宙地", lang:"zh"},
        {name:"伽那ノ光", lang:"zh"},
        {name:"喜屋武米助", lang:"zh"},
    ],
    art: [
        {name:"和田ベコ", lang:"zh"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/060.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 藤枝音理
        {
            id: "g060_f01",
            name: "藤枝音理",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/060/Neri.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 五十岚春
        {
            id: "g060_m01",
            name: "五十岚春",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/060/Haru.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 加地一波
        {
            id: "g060_m02",
            name: "加地一波",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/060/Ichiha.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 鹭之宫零
        {
            id: "g060_m03",
            name: "鹭之宫零",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/060/Rei.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 鹰岭陆
        {
            id: "g060_m04",
            name: "鹰岭陆",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/060/Riku.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 七濑十矢
        {
            id: "g060_m05",
            name: "七濑十矢",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/060/Touya.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
