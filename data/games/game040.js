// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game040", // 全局唯一ID，不可重复
    name: "时钟机关默示录",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"雨宮うた", lang:"zh"},
        {name:"笹川チエ", lang:"zh"}
    ],
    art: [
        {name:"花羽彩", lang:"zh"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/040.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 拉奇娅·菲利茨
        {
            id: "g040_f01",
            name: "拉奇娅·菲利茨",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Latchia.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Latchia2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Latchia3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 利亚姆·耶布兰
        {
            id: "g040_m01",
            name: "利亚姆·耶布兰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Liam.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Liam2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Liam3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 库厄特·赫尔特林
        {
            id: "g040_m02",
            name: "库厄特·赫尔特林",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Quat.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Quat2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Quat3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 鲁德尔·克洛伊兹
        {
            id: "g040_m03",
            name: "鲁德尔·克洛伊兹",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Rudel.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Rudel2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Rudel3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 尤纳卡·基斯贝尔特
        {
            id: "g040_m04",
            name: "尤纳卡·基斯贝尔特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Unka.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Unka2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Unka3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 吉尔·哈尼什
        {
            id: "g040_m05",
            name: "吉尔·哈尼什",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Zir.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Zir2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Zir3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 加奈特
        {
            id: "g040_h01",
            name: "加奈特",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/040/Gannet.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
