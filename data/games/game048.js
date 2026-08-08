// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game048", // 全局唯一ID，不可重复
    name: "CLOCK ZERO ~終焉之一秒~ Devote",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"砂原有季", lang:"zh"},
        {name:"果村なずな", lang:"zh"}
    ],
    art: [
        {name:"ナガオカ ", lang:"ja"}
    ],
    cover: "img/game/048.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 九楼抚子
        {
            id: "g048_f01",
            name: "九楼抚子",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/g001_f0_1.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g001_f0_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
            ]
        },
        // 英圆
        {
            id: "g048_m01",
            name: "英圆",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg","img/char/g001_m0_2.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
            ]
        },
        // 英央
        {
            id: "g048_m02",
            name: "英央",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg","img/char/g001_m0_2.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
            ]
        },
        // 加纳理一郎
        {
            id: "g048_m03",
            name: "加纳理一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg","img/char/g001_m0_2.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
            ]
        },
        // 西园寺寅之助
        {
            id: "g048_m04",
            name: "西园寺寅之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg","img/char/g001_m0_2.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
            ]
        },
        // 时田终夜
        {
            id: "g048_m05",
            name: "时田终夜",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg","img/char/g001_m0_2.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
            ]
        },
        // 海棠鹰斗
        {
            id: "g048_m05",
            name: "海棠鹰斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg","img/char/g001_m0_2.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
            ]
        },
        // 筱宫枫
        {
            id: "g048_h01",
            name: "筱宫枫",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["img/char/g001_h01_1.jpg"], type: "base" }
            ]
        },
        // 雷恩
        {
            id: "g048_h01",
            name: "雷恩",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["img/char/g001_h01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
