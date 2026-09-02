// data/games/game004.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game004",
    name: "蒸汽监狱",
    year: "2021",
    publisher: ["HuneX"],
    cnStudio: "GSE",
    writer: [
        {name:"ゆーます", lang:"ja"}
    ],
    art: [
        {name:"一色箱", lang:"zh"}
    ],
    cover: "game/004.jpg",
    charList: [
        // 琪丝·提斯特拉
        {
            id: "g004_f01",
            name: "琪丝·提斯特拉",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/004/Cyrus.jpg",
                            "char/004/Cyrus2.jpg"], type: "base" },
                { srcList: ["char/004/Cyrus3.jpg",
                            "char/004/Cyrus4.jpg"], type: "fd" }
            ]
        },
        // 亚达钧
        {
            id: "g004_m01",
            name: "亚达钧",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/004/Adage.jpg",
                            "char/004/Adage2.jpg"], type: "base" },
                { srcList: ["char/004/Adage3.jpg"], type: "fd" }
            ]
        },
        // 埃尔托克里德·瓦伦丁
        {
            id: "g004_m02",
            name: "埃尔托克里德·瓦伦丁",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/004/Eltcreed.jpg",
                            "char/004/Eltcreed2.jpg"], type: "base" },
                { srcList: ["char/004/Eltcreed3.jpg"], type: "fd" }
            ]
        },
        // 芬·尤克列斯
        {
            id: "g004_m03",
            name: "芬·尤克列斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/004/Fin.jpg",
                            "char/004/Fin2.jpg"], type: "base" },
                { srcList: ["char/004/Fin3.jpg",
                            "char/004/Fin4.jpg"], type: "fd" }
            ]
        },
        // 伊内斯·海因里希·海涅
        {
            id: "g004_m04",
            name: "伊内斯·海因里希·海涅",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/004/Ines.jpg",
                            "char/004/Ines2.jpg"], type: "base" },
                { srcList: ["char/004/Ines3.jpg"], type: "fd" }
            ]
        },
        // 乌尔利克·费里尔
        {
            id: "g004_m05",
            name: "乌尔利克·费里尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/004/Ulrik.jpg",
                            "char/004/Ulrik2.jpg"], type: "base" },
                { srcList: ["char/004/Ulrik3.jpg"], type: "fd" }
            ]
        },
        // 尤尼·石英
        {
            id: "g004_m06",
            name: "尤尼·石英",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/004/Yune.jpg",
                            "char/004/Yune2.jpg"], type: "base" },
                { srcList: ["char/004/Yune3.jpg"], type: "fd" }
            ]
        },
        // 杰里姆
        {
            id: "g004_fd01",
            name: "杰里姆",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/004/Jereme.jpg"], type: "base" }
            ]
        },
        // 杰比特
        {
            id: "g004_fd02",
            name: "杰比特",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/004/Jevite.jpg"], type: "base" }
            ]
        },
        // 萨克森·布兰登堡
        {
            id: "g004_fd03",
            name: "萨克森·布兰登堡",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/004/Sachsen.jpg"], type: "base" }
            ]
        },
        // 菲茨杰拉德·埃文斯
        {
            id: "g004_s01",
            name: "菲茨杰拉德·埃文斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 拜斯·加维瑟
        {
            id: "g004_s02",
            name: "拜斯·加维瑟",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 科尔达·哈斯
        {
            id: "g004_s03",
            name: "科尔达·哈斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
