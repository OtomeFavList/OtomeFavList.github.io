// data/games/game001.js
// ==========【单个游戏独立数据模板】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需修改data/games.js，仅需要在data/games.js的allGameFiles数组追加本文件路径
const singleGameData = {
    id: "game001", // 全局唯一ID，不可重复
    name: "虔诚之花的晚钟",
    year: "2020",
    publisher: "Otomate",
    cnStudio: "GSE",
    writer: "かずら林檎",
    art: "RiRi",
    cover: "img/game/001.jpg", // 封面图路径，统一前缀img/
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
        // 尼古拉‧法兰捷斯卡
        {
            id: "g001_m03",
            name: "尼古拉‧法兰捷斯卡",
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
        // 杨（⚠️你原来名字写错成但丁，一并修正）
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
        // 亨利‧兰伯特
        {
            id: "g001_h01",
            name: "亨利·兰伯特",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["img/char/001/Henri.jpg"], type: "base" }
            ]
        }
    ]
};

// 自动推入全局游戏数组，加载器script统一读取 window.gameDataList
window.gameDataList.push(singleGameData);
