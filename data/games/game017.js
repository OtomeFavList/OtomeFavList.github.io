// data/games/game017.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game017", // 全局唯一ID，不可重复
    name: "暗之眷属",
    year: "2023",
    publisher: "HuneX",
    cnStudio: "GSE",
    writer: ["平野ヒロ"],
    art: "永原キナミ",
    cover: "img/game/game017.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 克洛伊
        {
            id: "g017_f01",
            name: "克洛伊",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/017/Chloe.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 奈杰
        {
            id: "g017_m01",
            name: "奈杰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/017/Nagi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 纳兹米
        {
            id: "g017_m02",
            name: "纳兹米",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/017/Natsume.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 雷
        {
            id: "g017_m03",
            name: "雷",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/017/Ray.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 斯巴
        {
            id: "g017_m04",
            name: "斯巴",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/017/Shiba.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
