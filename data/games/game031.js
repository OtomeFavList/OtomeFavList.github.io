// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game031", // 全局唯一ID，不可重复
    name: "百密一疏少女心",
    year: "2023",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"小縞なお", lang:"zh"},
        {name:"中村和騎", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"佐々木麿", lang:"zh"},
        {name:"いわた志信", lang:"ja"}
    ],
    art: [
        {name:"薄葉カゲロー", lang:"zh"},
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/031.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 东条云雀
        {
            id: "g031_f01",
            name: "东条云雀",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Hibari.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Hibari2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 光森一哉
        {
            id: "g031_m01",
            name: "光森一哉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Ichiya.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Ichiya2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 八神那由太
        {
            id: "g031_m02",
            name: "八神那由太",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Nayuta.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Nayuta2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 黛汐音
        {
            id: "g031_m03",
            name: "黛汐音",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Shion.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Shion2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 石动大我
        {
            id: "g031_m04",
            name: "石动大我",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Taiga.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Taiga2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 春日
        {
            id: "g031_h01",
            name: "春日",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Kasuga.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/031/Kasuga2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
