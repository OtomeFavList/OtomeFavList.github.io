// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game030", // 全局唯一ID，不可重复
    name: "花合朔",
    year: "2023",
    publisher: ["HuneX"],
    cnStudio: "dramatic create",
    writer: [
        {name:"月花", lang:"zh"}
    ],
    art: [
        {name:"由良", lang:"zh"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/030.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 美琴
        {
            id: "g030_f01",
            name: "美琴",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/030/Mikoto.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 姬空木
        {
            id: "g030_m01",
            name: "姬空木",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/030/Himeutsugi.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/030/Himeutsugi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 伊吕波
        {
            id: "g030_m02",
            name: "伊吕波",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/030/Iroha.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/030/Iroha2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 唐红
        {
            id: "g030_m03",
            name: "唐红",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/030/Karakurenai.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/030/Karakurenai2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 蛟
        {
            id: "g030_m04",
            name: "蛟",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/030/Mizuchi.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/030/Mizuchi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
