// data/games/game002.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game002",
    name: "第六妖守",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"仰木サヤ", lang:"zh"},
        {name:"七瀬みお", lang:"zh"},
        {name:"紫堂零", lang:"zh"},
        {name:"みぞおち鳩子", lang:"ja"}
    ],
    art: [
        {name:"スオウ", lang:"ja"}
    ],
    cover: "img/game/002.jpg",
    charList: [
        // 秋津志乃
        {
            id: "g002_f01",
            name: "秋津志乃",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/002/Shino.jpg"], type: "base" }
            ]
        },
        // 恶露王
        {
            id: "g002_m01",
            name: "恶露王",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/002/Akuroou.jpg","img/char/002/Akuroou2.jpg"], type: "base" }
            ]
        },
        // 比良
        {
            id: "g002_m02",
            name: "比良",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/002/Hira.jpg","img/char/002/Hira2.jpg"], type: "base" }
            ]
        },
        // 濑见季继
        {
            id: "g002_m03",
            name: "濑见季继",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/002/Semi.jpg","img/char/002/Semi2.jpg"], type: "base" }
            ]
        },
        // 白月
        {
            id: "g002_m04",
            name: "白月",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/002/Shiratsuki.jpg","img/char/002/Shiratsuki2.jpg"], type: "base" }
            ]
        },
        // 湫
        {
            id: "g002_m05",
            name: "湫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/002/Shuu.jpg","img/char/002/Shuu2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
