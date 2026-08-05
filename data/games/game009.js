// data/games/game009.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game009",
    name: "共生丘比特",
    year: "2021",
    publisher: "Otomate",
    cnStudio: "GSE",
    writer: ["吉村りりか"],
    art: "ユウヤ",
    cover: "img/game/009.jpg",
    charList: [
        // 莉涅特‧米勒
        {
            id: "g009_f01",
            name: "莉涅特‧米勒",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/009/Lynette.jpg","img/char/009/Lynette2.jpg"], type: "base" }
            ]
        },
        // 艾伦·梅尔维尔
        {
            id: "g009_m01",
            name: "艾伦·梅尔维尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/009/Allan.jpg","img/char/009/Allan2.jpg"], type: "base" }
            ]
        },
        // 吉尔‧洛夫克拉夫特
        {
            id: "g009_m02",
            name: "吉尔‧洛夫克拉夫特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/009/Gill.jpg","img/char/009/Gill2.jpg"], type: "base" }
            ]
        },
        // 萤彩院‧Ｆ‧琉辉
        {
            id: "g009_m03",
            name: "萤彩院‧Ｆ‧琉辉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/009/Keisaiin.jpg","img/char/009/Keisaiin2.jpg"], type: "base" }
            ]
        },
        // 劳尔‧亚克尼特
        {
            id: "g009_m04",
            name: "劳尔‧亚克尼特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/009/Raul.jpg","img/char/009/Raul2.jpg"], type: "base" }
            ]
        },
        // 薛尔比‧史奈尔
        {
            id: "g009_m05",
            name: "薛尔比‧史奈尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/009/Shelby.jpg","img/char/009/Shelby2.jpg"], type: "base" }
            ]
        }
      // 彼得‧弗拉修
        {
            id: "g009_h01",
            name: "彼得‧弗拉修",
            gender: "male",
            isHidden: true,
            isFD: true,
            images: [
                { src: ["img/char/009/Peter.jpg","img/char/009/Peter2.jpg"], type: "base" }
            ]
        },
        // 伊萊‧奧马尔
        {
            id: "g009_fd01",
            name: "伊萊‧奧马尔",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { src: ["img/char/009/Eli.png"], type: "base" }
            ]
        }
        // 梅列尼斯‧莱文
        {
            id: "g009_fd02",
            name: "梅列尼斯‧莱文",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { src: ["img/char/009/Merenice.jpg"], type: "base" }
            ]
        }
        // 欧文·赫里欧
        {
            id: "g009_fd03",
            name: "欧文·赫里欧",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { src: ["img/char/009/Owen.jpg","img/char/009/Owen2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
