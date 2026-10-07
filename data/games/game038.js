// data/games/game038.js
// ✅已核对信息
// ℹ️续作内容未汉化
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
                            "char/038/Naya3.png",
                            "char/038/Naya8.png"], type: "base" },
                { srcList: ["char/038/Naya4.jpg",
                            "char/038/Naya5.jpg",
                            "char/038/Naya6.jpg",
                            "char/038/Naya7.jpg"], type: "fd" }
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
                            "char/038/Enrai3.png",
                            "char/038/Enrai5.png"], type: "base" },
                { srcList: ["char/038/Enrai4.jpg"], type: "fd" }
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
                            "char/038/Fey3.png",
                            "char/038/Fey4.png"], type: "base" }
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
                            "char/038/Ruwo3.png",
                            "char/038/Ruwo5.png"], type: "base" },
                { srcList: ["char/038/Ruwo4.jpg"], type: "fd" }
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
                            "char/038/Seirin3.png",
                            "char/038/Seirin5.png"], type: "base" },
                { srcList: ["char/038/Seirin4.jpg"], type: "fd" }
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
                            "char/038/Zebenera3.jpg",
                            "char/038/Zebenera5.png"], type: "base" },
                { srcList: ["char/038/SZebenera4.jpg"], type: "fd" }
            ]
        },
        // 羯磨
        {
            id: "g038_h01",
            name: "二角兽",
            hiddenName: ["羯磨"],
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["char/038/Bicorn.jpg",
                            "char/038/Bicorn2.jpg",
                            "char/038/Bicorn3.jpg",
                            "char/038/Bicorn4.png",
                            "char/038/Bicorn6.png"], type: "base" },
                { srcList: ["char/038/Bicorn5.jpg"], type: "fd" }
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
        },
        // 玉彗
        {
            id: "g038_fd01",
            name: "玉彗",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/038/Gyokusui.jpg",
                            "char/038/Gyokusui2.jpg",
                            "char/038/Gyokusui3.png"], type: "base" }
            ]
        },
        // 阿格多
        {
            id: "g038_s01",
            name: "阿格多",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/038/Agedo.jpg",
                            "char/038/Agedo2.png"], type: "base" }
            ]
        },
        // 巴敖
        {
            id: "g038_s02",
            name: "巴敖",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/038/Bao.jpg",
                            "char/038/Bao2.png"], type: "base" }
            ]
        },
        // 后主大人
        {
            id: "g038_s03",
            name: "后主大人",
            hiddenName: ["玖燕粋"],
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/038/Kousyu.jpg",
                            "char/038/Kousyu2.png"], type: "base" }
            ]
        },
        // 丽穹
        {
            id: "g038_s04",
            name: "丽穹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/038/Reikyu.jpg",
                            "char/038/Reikyu2.png"], type: "base" }
            ]
        },
        // 紫惺
        {
            id: "g038_s05",
            name: "紫惺",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/038/Shisei.jpg",
                            "char/038/Shisei2.png"], type: "base" }
            ]
        },
        // 小蝶
        {
            id: "g038_s06",
            name: "小蝶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/038/Shoucho.jpg",
                            "char/038/Shoucho2.png"], type: "base" }
            ]
        },
        // 妖魔
        {
            id: "g038_s07",
            name: "妖魔",
            hiddenName: ["穷奇"],
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/038/Youma.jpg",
                            "char/038/Youma2.png"], type: "base" }
            ]
        },
        // マリク
        {
            id: "g038_fs01",
            name: "マリク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/038/Malik.jpg",
                            "char/038/Malik2.png"], type: "base" }
            ]
        },
        // 央零
        {
            id: "g038_fs02",
            name: "央零",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/038/Ourei.jpg",
                            "char/038/Ourei2.png"], type: "base" }
            ]
        },
        // 緑蓉
        {
            id: "g038_fs03",
            name: "緑蓉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/038/Ryokuyo.jpg",
                            "char/038/Ryokuyo2.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
