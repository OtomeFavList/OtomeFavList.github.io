// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game050", // 全局唯一ID，不可重复
    name: "如果这个世界有神明大人存在的话",
    year: "2025",
    publisher: ["Rejet"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"三芳秀克", lang:"zh"},
        {name:"中越麻朝", lang:"zh"},
        {name:"久遠まひろ", lang:"zh"},
        {name:"如月蒼", lang:"zh"},
        {name:"小和泉いづみ", lang:"zh"},
        {name:"有栖川あやみ", lang:"zh"},
        {name:"桜木鈴音", lang:"zh"},
        {name:"真崎結衣", lang:"zh"},
        {name:"秋月ひろ", lang:"zh"},
        {name:"関涼子", lang:"zh"},
        {name:"鷹匠早紀", lang:"zh"},
        {name:"こたに白子", lang:"ja"},
        {name:"やまだ有見", lang:"ja"}
    ],
    art: [
        {name:"ワカツキ", lang:"ja"}
    ],
    cover: "img/game/050.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 来实春香
        {
            id: "g050_f01",
            name: "来实春香",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/050/Haruka.jpg","img/char/050/Haruka2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 细波艾斯
        {
            id: "g050_m01",
            name: "细波艾斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/050/Ace.jpg","img/char/050/Ace2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 神里晓
        {
            id: "g050_m02",
            name: "神里晓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/050/Kyou.jpg","img/char/050/Kyou2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 来实雅人
        {
            id: "g050_m03",
            name: "来实雅人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/050/Masato.jpg","img/char/050/Masato2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 弓仓音时
        {
            id: "g050_m04",
            name: "弓仓音时",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/050/Neji.jpg","img/char/050/Neji2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 指乃朱理
        {
            id: "g050_m05",
            name: "指乃朱理",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/050/Shuri.jpg","img/char/050/Shuri2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 九鬼辉
        {
            id: "g050_m06",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/050/Haruka.jpg","img/char/050/Haruka2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 九鬼光
        {
            id: "g050_m07",
            name: "九鬼光",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/050/Hikaru.jpg","img/char/050/Hikaru2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 九鬼静
        {
            id: "g050_m08",
            name: "九鬼静",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/050/Shizuka.jpg","img/char/050/Shizuka2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
