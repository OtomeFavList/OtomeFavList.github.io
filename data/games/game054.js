// ℹ️配角名未校对
const gameData = {
    id: "game054", // 全局唯一ID，不可重复
    name: "冬园的祭奠",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"喜多南", lang:"zh"},
        {name:"星野彼方", lang:"zh"},
        {name:"山吹てふ", lang:"zh"},
        {name:"炭水化物", lang:"zh"},
        {name:"長野和泉", lang:"zh"},
        {name:"有野幸", lang:"zh"},
        {name:"小縞なお", lang:"zh"}
    ],
    art: [
        {name:"御堂マヰカ", lang:"zh"}
    ],
    cover: "game/054.jpg",
    charList: [
        // 莱蒂西娅·夏尔丹
        {
            id: "g054_f01",
            name: "莱蒂西娅·夏尔丹",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/054/Laetitia.jpg",
                            "char/054/Laetitia2.png"], type: "base" }
            ]
        },
        // 迪兰·纪拜尔
        {
            id: "g054_m01",
            name: "迪兰·纪拜尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/054/Dylan.jpg",
                            "char/054/Dylan2.png"], type: "base" }
            ]
        },
        // 埃利亚斯·贝尔尼耶
        {
            id: "g054_m02",
            name: "埃利亚斯·贝尔尼耶",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/054/Elias.jpg",
                            "char/054/Elias2.png"], type: "base" }
            ]
        },
        // 伊维尔
        {
            id: "g054_m03",
            name: "伊维尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/054/Hiver.jpg",
                            "char/054/Hiver2.png"], type: "base" }
            ]
        },
        // 奥斯卡·希尔维斯特
        {
            id: "g054_m04",
            name: "奥斯卡·希尔维斯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/054/Oscar.jpg",
                            "char/054/Oscar2.png"], type: "base" }
            ]
        },
        // 雷吉斯·德·卢佩提耶
        {
            id: "g054_m05",
            name: "雷吉斯·德·卢佩提耶",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/054/Régis.jpg",
                            "char/054/Régis2.png"], type: "base" }
            ]
        },
        // 夏尔·德·贝尔尼耶
        {
            id: "g054_s01",
            name: "夏尔·德·贝尔尼耶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/054/Charles.jpg",
                            "char/054/Charles2.png"], type: "base" }
            ]
        },
        // 埃雷加尔
        {
            id: "g054_s02",
            name: "埃雷加尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/054/Elégal.jpg",
                            "char/054/Elégal2.png"], type: "base" }
            ]
        },
        // 芙蕾迪娅
        {
            id: "g054_s03",
            name: "芙蕾迪娅",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/054/Frédia.jpg",
                            "char/054/Frédia2.png"], type: "base" }
            ]
        },
        // 玛特蕾亚
        {
            id: "g054_s04",
            name: "玛特蕾亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/054/Matéreas.jpg",
                            "char/054/Matéreas2.png"], type: "base" }
            ]
        },
        // 提诺斯
        {
            id: "g054_s05",
            name: "提诺斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/054/Tinos.jpg",
                            "char/054/Tinos2.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
