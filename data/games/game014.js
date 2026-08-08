// data/games/game014.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game014", // 全局唯一ID，不可重复
    name: "与魔共舞",
    year: "2022",
    publisher: ["Rejet"],
    cnStudio: "JOYOLAND",
    writer: ["やまだ有見","真崎結衣","小和泉いづみ","三芳秀克","こたに白子","久遠まひろ","関涼子"],
    art: ["前田浩孝"],
    cover: "img/game/014.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 立华律香
        {
            id: "g014_f01",
            name: "立华律香",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/014/Ritsuka.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 立华林多
        {
            id: "g014_m01",
            name: "立华林多",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/014/Lindo.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 南那城梅吉
        {
            id: "g014_m02",
            name: "南那城梅吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/014/Mage.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 钩贯雷姆
        {
            id: "g014_m03",
            name: "钩贯雷姆",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/014/Rem.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 罗恩
        {
            id: "g014_m04",
            name: "罗恩",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/014/Roen.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 枣坂四季
        {
            id: "g014_m05",
            name: "枣坂四季",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/014/Shiki.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 楚神乌列
        {
            id: "g014_m06",
            name: "楚神乌列",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/014/Urie.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
