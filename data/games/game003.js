// data/games/game003.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game003",
    name: "幻奏咖啡厅-Enchanté-",
    year: "2020",
    publisher: "Otomate",
    cnStudio: "GSE",
    writer: ["中山智美","佐々木麿","吉村りりか","小縞なお"],
    art: "ユウヤ",
    cover: "img/game/003.jpg",
    charList: [
        // 淡木琴音
        {
            id: "g003_f01",
            name: "淡木琴音",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/003/Awaki.jpg","img/char/003/Awaki2.jpg"], type: "base" }
            ]
        },
        // 卡努斯·埃斯帕达
        {
            id: "g003_m01",
            name: "卡努斯·埃斯帕达",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/003/Canus.jpg","img/char/003/Canus2.jpg"], type: "base" }
            ]
        },
        // 伊格尼斯·卡里本库鲁斯
        {
            id: "g003_m02",
            name: "伊格尼斯·卡里本库鲁斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/003/Ignis.jpg","img/char/003/Ignis2.jpg"], type: "base" }
            ]
        },
        // 伊尔·法多·德·里艾
        {
            id: "g003_m03",
            name: "伊尔·法多·德·里艾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/003/Il.jpg","img/char/003/Il2.jpg"], type: "base" }
            ]
        },
        // 米歇尔·阿雷克斯
        {
            id: "g003_m04",
            name: "米歇尔·阿雷克斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/003/Misyr.jpg","img/char/003/Misyr2.jpg"], type: "base" }
            ]
        },
        // 凜堂香
        {
            id: "g003_m05",
            name: "凜堂香",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/003/Rindou.jpg","img/char/003/Rindou2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
