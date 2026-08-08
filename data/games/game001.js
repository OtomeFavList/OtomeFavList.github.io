// data/games/game001.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game001",
    name: "虔诚之花的晚钟 -ricordo-",
    year: "2020",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"かずら林檎", lang:"ja"}
    ],
    art: [
        {name:"RiRi", lang:"en"}
    ],
    cover: "img/game/001.jpg",
    charList: [
        // 莉莉安娜
        {
            id: "g001_f01",
            name: "莉莉安娜·亚多尔纳特",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/001/Liliana.jpg","img/char/001/Liliana2.jpg"], type: "base" }
            ]
        },
        // 但丁·法尔宗
        {
            id: "g001_m01",
            name: "但丁·法尔宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/001/Dante.jpg","img/char/001/Dante2.jpg","img/char/001/Dante3.jpg"], type: "base" }
            ]
        },
        // 吉尔伯特·烈福
        {
            id: "g001_m02",
            name: "吉尔伯特·烈福",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/001/Gilbert.jpg","img/char/001/Gilbert2.jpg","img/char/001/Gilbert3.jpg"], type: "base" }
            ]
        },
        // 尼古拉·法兰捷斯卡
        {
            id: "g001_m03",
            name: "尼古拉·法兰捷斯卡",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/001/Nicola.jpg","img/char/001/Nicola2.jpg","img/char/001/Nicola3.jpg"], type: "base" }
            ]
        },
        // 奥罗克
        {
            id: "g001_m04",
            name: "奥罗克",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/001/Orlok.jpg","img/char/001/Orlok2.jpg","img/char/001/Orlok3.jpg"], type: "base" }
            ]
        },
        // 杨
        {
            id: "g001_m05",
            name: "杨",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/001/Yang.jpg","img/char/001/Yang2.jpg","img/char/001/Yang3.jpg"], type: "base" }
            ]
        },
        // 亨利·兰伯特
        {
            id: "g001_h01",
            name: "亨利·兰伯特",
            gender: "male",
            isHidden: true,
            isFD: true,
            images: [
                { srcList: ["img/char/001/Henri.jpg"], type: "base" }
            ]
        }
    ]
};

// 移除旧全局push写法！使用ESModule导出
export { gameData };
