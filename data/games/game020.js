// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game020", // 全局唯一ID，不可重复
    name: "不可逾越的红花 ~双月~",
    year: "2023",
    publisher: ["HuneX"],
    cnStudio: "dramatic create",
    writer: ["松竹梅"],
    art: ["月野御豆"],
    cover: "img/game/020.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 娜拉
        {
            id: "g020_f01",
            name: "娜拉",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/020/Naala.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 赛弗
        {
            id: "g020_m01",
            name: "赛弗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/020/Cef.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 艾斯塔
        {
            id: "g020_m02",
            name: "艾斯塔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/020/Esta.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 泽奇
        {
            id: "g020_m03",
            name: "泽奇",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/020/Jigi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 纳朗
        {
            id: "g020_m04",
            name: "纳朗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/020/Naran.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 诺尔
        {
            id: "g020_m05",
            name: "诺尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/020/Nohl.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 卢奇
        {
            id: "g020_m06",
            name: "卢奇",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/020/Ruzi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 斯兰
        {
            id: "g020_m07",
            name: "斯兰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/020/Suren.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 托亚
        {
            id: "g020_m08",
            name: "托亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/020/Touya.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
