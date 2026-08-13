// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game056", // 全局唯一ID，不可重复
    name: "红铃的恸哭",
    year: "2026",
    publisher: ["Voltage"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"夕月", lang:"zh"}
    ],
    art: [
        {name:"のりた", lang:"ja"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/056.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 朱丽叶·露斯
        {
            id: "g056_f01",
            name: "朱丽叶·露斯",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/056/Juliet.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 亚设·汤普森
        {
            id: "g056_m01",
            name: "亚设·汤普森",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/056/Asher.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普奇兰·洛厄尔
        {
            id: "g056_m02",
            name: "奇兰·洛厄尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/056/Ciaran.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 加勒特·威尔金
        {
            id: "g056_m03",
            name: "加勒特·威尔金",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/056/Garrett.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 罗德斯·哈特菲尔德
        {
            id: "g056_m04",
            name: "罗德斯·哈特菲尔德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/056/Rhodes.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
