// data/games/game018.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game018", // 全局唯一ID，不可重复
    name: "命运九重奏",
    year: "2023",
    publisher: "Otomate",
    cnStudio: "GSE",
    writer: ["潮文音","一二階"],
    art: ["悌太","清白かりん"],
    cover: "img/game/game018.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 女主模板 female
        {
            id: "g018_f01",
            name: "女主A",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { src: ["img/char/g001_f0_1.jpg","img/char/g001_f0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 女主模板 female
        {
            id: "g018_f02",
            name: "女主A",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { src: ["img/char/g001_f0_1.jpg","img/char/g001_f0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 女主模板 female
        {
            id: "g018_f03",
            name: "女主A",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { src: ["img/char/g001_f0_1.jpg","img/char/g001_f0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g018_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g018_m02",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g018_m03",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g018_m04",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g018_m05",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g018_m06",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
      // 普通可攻略男主 male
        {
            id: "g018_m07",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
      // 普通可攻略男主 male
        {
            id: "g018_m08",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
      // 普通可攻略男主 male
        {
            id: "g018_m09",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
