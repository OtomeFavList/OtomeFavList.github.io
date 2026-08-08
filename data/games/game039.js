// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game039", // 全局唯一ID，不可重复
    name: "天狱乱斗 -strayside-",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"片桐由摩", lang:"zh"}
    ],
    art: [
        {name:"さとい", lang:"ja"}
    ],
    cover: "img/game/039.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 阎魔凛
        {
            id: "g039_f01",
            name: "阎魔凛",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/039/Rin.jpg","img/char/039/Rin2.jpg","img/char/039/Rin3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 石川五右卫门
        {
            id: "g039_m01",
            name: "石川五右卫门",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/039/Goemon.jpg","img/char/039/Goemon2.jpg","img/char/039/Goemon3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // JacK
        {
            id: "g039_m02",
            name: "JacK",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/039/Jack.jpg","img/char/039/Jack2.jpg","img/char/039/Jack3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 宇贺菊之助
        {
            id: "g039_m03",
            name: "宇贺菊之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/039/Kikunosuke.jpg","img/char/039/Kikunosuke2.jpg","img/char/039/Kikunosuke3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 东洲斋写乐
        {
            id: "g039_m04",
            name: "东洲斋写乐",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/039/Sharaku.jpg","img/char/039/Sharaku2.jpg","img/char/039/Sharaku3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 村上誉那
        {
            id: "g039_m05",
            name: "村上誉那",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/039/Yona.jpg","img/char/039/Yona2.jpg","img/char/039/Yona3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
