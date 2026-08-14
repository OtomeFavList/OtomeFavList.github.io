// data/games/game015.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game015", // 全局唯一ID，不可重复
    name: "君于雪中希冀",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"佐々木麿", lang:"zh"},
        {name:"結城由乃", lang:"zh"},
        {name:"仰木サヤ", lang:"zh"},
        {name:"みぞおち鳩子", lang:"ja"}
    ],
    art: [
        {name:"ナガオカ", lang:"ja"},
        {name:"Team.", lang:"en"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/015.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 纱乃
        {
            id: "g015_f01",
            name: "纱乃",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/015/Suzuno.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 锦次
        {
            id: "g015_m01",
            name: "锦次",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/015/Kinji.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 久贺源十郎
        {
            id: "g015_m02",
            name: "久贺源十郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/015/Kuga.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 东条国孝
        {
            id: "g015_m03",
            name: "东条国孝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/015/Kunitaka.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 樱太郎
        {
            id: "g015_m04",
            name: "樱太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/015/Outarou.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 篁智成
        {
            id: "g015_m05",
            name: "篁智成",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/015/Tomonari.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 与市
        {
            id: "g015_m06",
            name: "与市",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/015/Yoichi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
