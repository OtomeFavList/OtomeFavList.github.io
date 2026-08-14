// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game033", // 全局唯一ID，不可重复
    name: "MAJESTIC☆MAJOLICAL",
    year: "2024",
    publisher: ["dazkarat"],
    cnStudio: "GSE",
    writer: [
        {name:"風花琴梨", lang:"zh"}
    ],
    art: [
        {name:"白皙", lang:"zh"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/033.jpg",
    charList: [
        // 拉碧丝
        {
            id: "g033_f01",
            name: "拉碧丝",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Lapis.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Mitsuki.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Ruu.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Shell.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Shiki.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Shinnosuke.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Soutarou.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Chalcedony.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Euc.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Hauyne.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Jasper.jpg"], type: "base" },
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
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/033/Lase.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
