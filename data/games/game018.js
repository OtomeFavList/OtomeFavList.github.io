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
    cover: "img/game/018.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 小春
        {
            id: "g018_f01",
            name: "小春",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/018/Koharu.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 久我深琴
        {
            id: "g018_f02",
            name: "久我深琴",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/018/Mikoto.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 不知火七海
        {
            id: "g018_f03",
            name: "不知火七海",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/018/Nanami.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 宿史晓人
        {
            id: "g018_m01",
            name: "宿史晓人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/018/Akito.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 乙丸平士
        {
            id: "g018_m02",
            name: "乙丸平士",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/018/Heishi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 加贺见一月
        {
            id: "g018_m03",
            name: "加贺见一月",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/018/Itsuki.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 结贺驱
        {
            id: "g018_m04",
            name: "结贺驱",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/018/Kakeru.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 远矢正宗
        {
            id: "g018_m05",
            name: "远矢正宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/018/Masamune.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 吾妻夏彦
        {
            id: "g018_m06",
            name: "吾妻夏彦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/018/Natsuhiko.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 吾妻夏彦
        {
            id: "g018_m06",
            name: "吾妻夏彦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/018/Natsuhiko.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 二条朔也
        {
            id: "g018_m08",
            name: "二条朔也",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/018/Sakuya.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 市之濑千里
        {
            id: "g018_m09",
            name: "市之濑千里",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/018/Senri.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
