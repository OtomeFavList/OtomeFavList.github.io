// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game021", // 全局唯一ID，不可重复
    name: "黑桃国的爱丽丝~Wonderful White World~",
    year: "2023",
    publisher: "Otomate",
    cnStudio: "GSE",
    writer: ["七瀬みお","仰木サヤ"],
    art: "藤丸豆ノ介",
    cover: "img/game/021.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 爱丽丝·利德尔
        {
            id: "g021_f01",
            name: "爱丽丝·利德尔",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/g001_f0_1.jpg","img/char/g001_f0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 布拉德·都普雷
        {
            id: "g021_m01",
            name: "布拉德·都普雷",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 崔德尔·迪
        {
            id: "g021_m02",
            name: "崔德尔·迪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 崔德尔·达姆
        {
            id: "g021_m03",
            name: "崔德尔·达姆",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 艾略特·玛奇
        {
            id: "g021_m04",
            name: "艾略特·玛奇",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 路易斯·可萝
        {
            id: "g021_m05",
            name: "路易斯·可萝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 奎恩·希尔凡
        {
            id: "g021_m06",
            name: "奎恩·希尔凡",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 艾斯
        {
            id: "g0_fd01",
            name: "艾斯",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 波利斯‧艾瑞
        {
            id: "g0_fd02",
            name: "波利斯‧艾瑞",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 格雷·林谷马克
        {
            id: "g0_fd03",
            name: "格雷·林谷马克",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 汉尼瓦·葛特
        {
            id: "g0_fd04",
            name: "汉尼瓦·葛特",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // Joker
        {
            id: "g0_fd05",
            name: "Joker",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 奈特梅尔·哥德夏洛克
        {
            id: "g0_fd06",
            name: "奈特梅尔·哥德夏洛克",
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
