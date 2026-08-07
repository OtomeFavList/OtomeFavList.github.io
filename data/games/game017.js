// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game017",
    name: "暗之眷属",
    year: "2023",
    publisher: "HuneX",
    cnStudio: "GSE",
    writer: ["平野ヒロ"],
    art: "永原キナミ",
    cover: "img/game/017.jpg",
    charList: [
        // 克洛伊
        {
            id: "g017_f01",
            name: "克洛伊",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/017/Chloe.jpg"], type: "base" }
            ]
        },
        // 奈杰
        {
            id: "g017_m01",
            name: "奈杰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/017/Nagi.jpg"], type: "base" }
            ]
        },
        // 纳兹米
        {
            id: "g017_m02",
            name: "纳兹米",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/017/Natsume.jpg"], type: "base" }
            ]
        },
        // 雷
        {
            id: "g017_m03",
            name: "雷",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/017/Ray.jpg"], type: "base" }
            ]
        },
        // 斯巴
        {
            id: "g017_m04",
            name: "斯巴",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/017/Shiba.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出，和其他游戏保持一致
export { gameData };
