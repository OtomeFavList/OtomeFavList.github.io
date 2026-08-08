// data/games/game016.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game016", // 全局唯一ID，不可重复
    name: "终远的威尔修 -ErroR:salvation-",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: ["中山智美","夕月","浅海藍子"],
    art: ["読"],
    cover: "img/game/016.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 瑟蕾思
        {
            id: "g016_f01",
            name: "瑟蕾思",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/016/Ceres.jpg","img/char/016/Ceres2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 阿道夫
        {
            id: "g016_m01",
            name: "阿道夫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/016/Adolphe.jpg","img/char/016/Adolphe2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 安库
        {
            id: "g016_m02",
            name: "安库",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/016/Ankou.jpg","img/char/016/Ankou2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 璐卡·普鲁斯特
        {
            id: "g016_m03",
            name: "璐卡·普鲁斯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/016/Lucas.jpg","img/char/016/Lucas2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 马蒂斯·克洛德
        {
            id: "g016_m04",
            name: "马蒂斯·克洛德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/016/Mathis.jpg","img/char/016/Mathis2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 席安·布洛菲沃思
        {
            id: "g016_m05",
            name: "席安·布洛菲沃思",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/016/Scien.jpg","img/char/016/Scien2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 伊孚
        {
            id: "g016_m06",
            name: "伊孚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/016/Yves.jpg","img/char/016/Yves2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
