// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game038", // 全局唯一ID，不可重复
    name: "茉莉花之炯 天命胤异传",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"吉村りりか", lang:"zh"}
    ],
    art: [
        {name:"蓮本リョウ", lang:"zh"}
    ],
    cover: "game/038.jpg",
    charList: [
        // 娜雅
        {
            id: "g038_f01",
            name: "娜雅",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/038/Naya.jpg",
                            "char/038/Naya2.jpg",
                            "char/038/Naya3.png"], type: "base" }
            ]
        },
        // 玖燕来
        {
            id: "g038_m01",
            name: "玖燕来",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/038/Enrai.jpg",
                            "char/038/Enrai2.jpg",
                            "char/038/Enrai3.png"], type: "base" }
            ]
        },
        // 斐伊
        {
            id: "g038_m02",
            name: "斐伊",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/038/Fey.jpg",
                            "char/038/Fey2.jpg",
                            "char/038/Fey3.png"], type: "base" }
            ]
        },
        // 洛欧
        {
            id: "g038_m03",
            name: "洛欧",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/038/Ruwo.jpg",
                            "char/038/Ruwo2.jpg",
                            "char/038/Ruwo3.png"], type: "base" }
            ]
        },
        // 胡青凛
        {
            id: "g038_m04",
            name: "胡青凛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/038/Seirin.jpg",
                            "char/038/Seirin2.jpg",
                            "char/038/Seirin3.png"], type: "base" }
            ]
        },
        // 臧布尼勒
        {
            id: "g038_m05",
            name: "臧布尼勒",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/038/Zebenera.jpg",
                            "char/038/Zebenera2.jpg",
                            "char/038/Zebenera3.png"], type: "base" }
            ]
        },
        // 羯磨
        {
            id: "g038_h01",
            name: "羯磨",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["char/038/Bicorn.jpg",
                            "char/038/Bicorn2.jpg",
                            "char/038/Bicorn3.png"], type: "base" }
            ]
        },
        // 斐恩
        {
            id: "g038_h02",
            name: "斐恩",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["char/038/Fuen.jpg",
                            "char/038/Fuen2.jpg",
                            "char/038/Fuen3.jpg",
                            "char/038/Fuen4.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
