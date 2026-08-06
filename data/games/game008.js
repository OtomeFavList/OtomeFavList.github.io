// data/games/game008.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game008",
    name: "剑为君舞",
    year: "2021",
    publisher: "Rejet",
    cnStudio: "JOYOLAND",
    writer: ["やまだ有見","加納高子","吉村りりか","夏野景","小和泉いづみ","山田かのこ","砂原有季","関涼子","谷村日名子","真崎結衣","都井きつき","海桐ユキチカ",],
    art: "読",
    cover: "img/game/008.jpg",
    charList: [
        // 香夜
        {
            id: "g008_f01",
            name: "香夜",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/008/Kayo.jpg","img/char/008/Kayo2.jpg"], type: "base" }
            ]
        },
        // 缘
        {
            id: "g008_m01",
            name: "缘",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/008/Enishi.jpg","img/char/008/Enishi2.jpg"], type: "base" }
            ]
        },
        // 萤
        {
            id: "g008_m02",
            name: "萤",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/008/Kei.jpg","img/char/008/Kei2.jpg"], type: "base" }
            ]
        },
        // 黑羽实彰
        {
            id: "g008_m03",
            name: "黑羽实彰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/008/Kuroba.jpg","img/char/008/Kuroba2.jpg"], type: "base" }
            ]
        },
        // 鹭原左京
        {
            id: "g008_m04",
            name: "鹭原左京",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/008/Sakyou.jpg","img/char/008/Sakyou2.jpg"], type: "base" }
            ]
        },
        // 铃悬
        {
            id: "g008_m05",
            name: "铃悬",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/008/Suzukake.jpg","img/char/008/Suzukake2.jpg"], type: "base" }
            ]
        }, // ✅修复：补上缺失逗号
        // 九十九丸
        {
            id: "g008_m06",
            name: "九十九丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/008/Tsuzuramaru.jpg","img/char/008/Tsuzuramaru2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
