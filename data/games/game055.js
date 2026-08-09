// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game055", // 全局唯一ID，不可重复
    name: "Honey Vibes",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"喜多南", lang:"zh"},
        {name:"彩月レイ", lang:"zh"},
        {name:"鵜森はだし", lang:"zh"},
        {name:"海野凛久", lang:"zh"},
        {name:"春野せり", lang:"zh"},
        {name:"Salala", lang:"en"}
    ],
    art: [
        {name:"くらげ壱", lang:"ja"}
    ],
    cover: "img/game/055.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 天野凪咲
        {
            id: "g055_f01",
            name: "天野凪咲",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/055/Nagisa.jpg","img/char/055/Nagisa2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 埃尔文
        {
            id: "g055_m01",
            name: "埃尔文",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/055/Alvin.jpg","img/char/055/Alvin2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 以利亚
        {
            id: "g055_m02",
            name: "以利亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/055/Elijah.jpg","img/char/055/Elijah2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 伊诺
        {
            id: "g055_m03",
            name: "伊诺",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/055/Eno.jpg","img/char/055/Eno2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 费恩
        {
            id: "g055_m04",
            name: "费恩",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/055/Finn.jpg","img/char/055/Finn2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 米洛
        {
            id: "g055_m05",
            name: "米洛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/055/Milo.jpg","img/char/055/Milo2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 狄奥
        {
            id: "g055_m06",
            name: "狄奥",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/055/Theo.jpg","img/char/055/Theo2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
