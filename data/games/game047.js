// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game047", // 全局唯一ID，不可重复
    name: "璃梦泡影之世外浮城",
    year: "2025",
    publisher: ["BROCCOLI"],
    cnStudio: "GSE",
    writer: [
        {name:"かずら林檎", lang:"zh"}
    ],
    art: [
        {name:"RiRi", lang:"en"}
    ],
    cover: "img/game/047.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 雏菊
        {
            id: "g047_f01",
            name: "雏菊",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/047/Hinagiku.jpg","img/char/047/Hinagiku2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 淡雪
        {
            id: "g047_m01",
            name: "淡雪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/047/Awayuki.jpg","img/char/047/Awayuki2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 帷
        {
            id: "g047_m02",
            name: "帷",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/047/Tobari.jpg","img/char/047/Tobari2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 露草
        {
            id: "g047_m03",
            name: "露草",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/047/Tsuyukusa.jpg","img/char/047/Tsuyukusa2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 矢代
        {
            id: "g047_m04",
            name: "矢代",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/047/Yashiro.jpg","img/char/047/Yashiro2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 依
        {
            id: "g047_m05",
            name: "男主1",
            gender: "依",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/047/Yori.jpg","img/char/047/Yori2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
