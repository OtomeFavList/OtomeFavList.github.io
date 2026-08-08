// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game033", // 全局唯一ID，不可重复
    name: "MAJESTIC☆MAJOLICAL",
    year: "2024",
    publisher: "dazkarat",
    cnStudio: "GSE",
    writer: ["風花琴梨"],
    art: "白皙",
    cover: "img/game/033.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 拉碧丝
        {
            id: "g033_f01",
            name: "拉碧丝",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/033/Lapis.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 樫森光希
        {
            id: "g033_m01",
            name: "樫森光希",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Mitsuki.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 月石瑠羽
        {
            id: "g033_m02",
            name: "月石瑠羽",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Ruu.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 希尔·瑟瑞斯泰特
        {
            id: "g033_m03",
            name: "希尔·瑟瑞斯泰特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Shell.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 小坂四季
        {
            id: "g033_m04",
            name: "小坂四季",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Shiki.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 壬生心乃助
        {
            id: "g033_m05",
            name: "壬生心乃助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Shinnosuke.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 壬生惣太郎
        {
            id: "g033_m06",
            name: "壬生惣太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Soutarou.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 卡鲁赛多尼·艾德克雷兹
        {
            id: "g033_m07",
            name: "卡鲁赛多尼·艾德克雷兹",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Chalcedony.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 尤克·艾德克雷兹
        {
            id: "g033_m08",
            name: "尤克·艾德克雷兹",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Euc.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 奥茵·艾德克雷兹
        {
            id: "g033_m09",
            name: "奥茵·艾德克雷兹",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Hauyne.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 贾斯帕
        {
            id: "g033_m10",
            name: "贾斯帕",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Jasper.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 莱斯·艾德克雷兹
        {
            id: "g033_m11",
            name: "莱斯·艾德克雷兹",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/033/Lase.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
