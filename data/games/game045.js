// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game045", // 全局唯一ID，不可重复
    name: "绚烂传说",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"中文编剧", lang:"zh"},
        {name:"日文编剧", lang:"ja"},
        {name:"英文编剧", lang:"en"}
    ],
    art: [
        {name:"中文原画", lang:"zh"},
        {name:"日文原画", lang:"ja"},
        {name:"英文原画", lang:"en"}
    ],
    cover: "img/game/045.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 蒂法莉娅
        {
            id: "g045_f01",
            name: "蒂法莉娅",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/g001_f0_1.jpg","img/char/g001_f0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g001_f0_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g001_f0_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 伊昂
        {
            id: "g045_m01",
            name: "伊昂",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 帕斯哈里亚
        {
            id: "g045_m02",
            name: "帕斯哈里亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 拉蒂
        {
            id: "g045_m03",
            name: "拉蒂",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 威利欧
        {
            id: "g045_m04",
            name: "威利欧",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 札弗拉
        {
            id: "g045_m05",
            name: "札弗拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 吉尼亚
        {
            id: "g045_fd01",
            name: "吉尼亚",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 里昂
        {
            id: "g045_fd02",
            name: "里昂",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/g001_fd01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
