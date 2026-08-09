// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game049", // 全局唯一ID，不可重复
    name: "花好似他 & bloom",
    year: "2025",
    publisher: ["MintLip"],
    cnStudio: "JSD",
    writer: [
        {name:"浅生柚子", lang:"zh"},
        {name:"雨宮うた", lang:"zh"}
    ],
    art: [
        {name:"ユウヤ", lang:"ja"}
    ],
    cover: "img/game/049.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 明石亚未
        {
            id: "g049_f01",
            name: "明石亚未",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/049/Ami.jpg","img/char/049/Ami2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 春芳风花
        {
            id: "g049_f02",
            name: "春芳风花",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/049/Fuuka.jpg","img/char/049/Fuuka2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 雪平实红
        {
            id: "g049_f03",
            name: "雪平实红",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/049/Miku.jpg","img/char/049/Miku2.jpgg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 碧木星利奈
        {
            id: "g049_f04",
            name: "碧木星利奈",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/049/Serina.jpgg","img/char/049/Serina2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 栖川银之助
        {
            id: "g049_m01",
            name: "栖川银之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/049/Ginnosuke.jpg","img/char/049/Ginnosuke2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 市毛北斗
        {
            id: "g049_m02",
            name: "市毛北斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/049/Hokuto.jpg","img/char/049/Hokuto2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 美波天弥
        {
            id: "g049_m03",
            name: "美波天弥",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/049/Tenya.jpg","img/char/049/Tenya2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 东里环
        {
            id: "g049_m04",
            name: "东里环",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/049/Wataru.jpg","img/char/049/Wataru2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
