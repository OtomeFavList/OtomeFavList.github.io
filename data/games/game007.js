// data/games/game007.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game007",
    name: "Collar×Malice",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"有野幸", lang:"zh"},
        {name:"砂原有季", lang:"zh"},
        {name:"小縞なお", lang:"zh"},
        {name:"いわた志信", lang:"ja"}
    ],
    art: [
        {name:"花邑まい", lang:"zh"}
    ],
    cover: "game/007.jpg",
    charList: [
        // 星野市香
        {
            id: "g007_f01",
            name: "星野市香",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Ichika.jpg",
                            "char/007/Ichika2.jpg"], type: "base" }
            ]
        },
        // 柳爱时
        {
            id: "g007_m01",
            name: "柳爱时",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Aiji.jpg"], type: "base" }
            ]
        },
        // 冈崎契
        {
            id: "g007_m02",
            name: "冈崎契",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Kei.jpg"], type: "base" }
            ]
        },
        // 榎本峰雄
        {
            id: "g007_m03",
            name: "榎本峰雄",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Mineo.jpg"], type: "base" }
            ]
        },
        // 白石景之
        {
            id: "g007_m04",
            name: "白石景之",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Shiraishi.jpg"], type: "base" }
            ]
        },
        // 笹塚尊
        {
            id: "g007_m05",
            name: "笹塚尊",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Takeru.jpg"], type: "base" }
            ]
        },
        // 冴木弓弦
        {
            id: "g007_h01",
            name: "冴木弓弦",
            gender: "male",
            isHidden: true,
            isFD: true,
            images: [
                { srcList: ["char/007/Yuzuru.jpg",
                            "char/007/Yuzuru2.jpg",
                            "char/Default.jpg",
                            "char/Default2.jpg"], type: "base" }
            ]
        },
        // 峰岸誠司
        {
            id: "g007_fd01",
            name: "峰岸誠司",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/007/Minegishi.jpg"], type: "base" }
            ]
        },
        // 吉成秀明
        {
            id: "g007_fd02",
            name: "吉成秀明",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/007/Yoshinari.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
