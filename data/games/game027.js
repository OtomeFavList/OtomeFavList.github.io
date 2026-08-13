// data/games/game027.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game027", // 全局唯一ID，不可重复
    name: "失忆症",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"望月柚枝", lang:"zh"},
        {name:"果村なずな", lang:"zh"},
        {name:"やまだ有見", lang:"ja"}
    ],
    art: [
        {name:"花邑まい", lang:"zh"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/027.jpg", // 封面图路径，统一前缀img/
    charList: [
        // Heroine
        {
            id: "g027_f01",
            name: "Heroine",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Protagonist.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // IKKI
        {
            id: "g027_m01",
            name: "IKKI",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ikki.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ikki2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ikki3.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ikki4.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ikki5.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ikki6.jpg"], type: "fd" },     // 需要开启FD开关才展示的图片
            ]
        },
        // KENT
        {
            id: "g027_m02",
            name: "KENT",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Kent.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Kent2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Kent3.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Kent4.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Kent5.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Kent6.jpg"], type: "fd" },     // 需要开启FD开关才展示的图片
            ]
        },
        // SHIN
        {
            id: "g027_m03",
            name: "SHIN",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Shin.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Shin2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Shin3.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Shin4.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Shin5.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Shin6.jpg"], type: "fd" },     // 需要开启FD开关才展示的图片
            ]
        },
        // TOMA
        {
            id: "g027_m04",
            name: "TOMA",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Toma.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Toma2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Toma3.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Toma4.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Toma5.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Toma6.jpg"], type: "fd" },     // 需要开启FD开关才展示的图片
            ]
        },
        // UKYO
        {
            id: "g027_h01",
            name: "UKYO",
            gender: "male",
            isHidden: true,
            isFD: true,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ukyo.jpg"], type: "base" },
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ukyo2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ukyo3.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ukyo4.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/027/Ukyo5.jpg"], type: "fd" },     // 需要开启FD开关才展示的图片
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
