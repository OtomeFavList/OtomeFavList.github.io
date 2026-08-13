// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game057", // 全局唯一ID，不可重复
    name: "吉原彼岸花 久远之契",
    year: "2026",
    publisher: ["MariaCrown","PROTOTYPE"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"葉月エリカ", lang:"zh"}
    ],
    art: [
        {name:"らんぷみ", lang:"ja"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/057.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 凛
        {
            id: "g057_f01",
            name: "凛",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/057/Rin.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 伊势屋惣一郎
        {
            id: "g057_m01",
            name: "伊势屋惣一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/057/Iseya.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 神乐屋彰人
        {
            id: "g057_m02",
            name: "神乐屋彰人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/057/Kaguraya.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 朔夜
        {
            id: "g057_m03",
            name: "朔夜",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/057/Sakuya.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 樱华屋时雨
        {
            id: "g057_m04",
            name: "樱华屋时雨",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/057/Shigure.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 大月忍
        {
            id: "g057_m05",
            name: "大月忍",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/057/Shinobu.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 辰吉
        {
            id: "g057_m06",
            name: "辰吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/057/Tatsukichi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
