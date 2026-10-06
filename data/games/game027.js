// data/games/game027.js
// ✅已核对信息
const gameData = {
    id: "game027", // 全局唯一ID，不可重复
    name: "失忆症 -Amnesia-",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"望月柚枝", lang:"zh"},
        {name:"果村なずな", lang:"zh"}
    ],
    art: [
        {name:"花邑まい", lang:"zh"},
        {name:"夏目ウタ", lang:"zh"}
    ],
    cover: "game/027.jpg",
    charList: [
        // Heroine
        {
            id: "g027_f01",
            name: "Heroine",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/027/Protagonist.jpg"], type: "base" }
            ]
        },
        // IKKI
        {
            id: "g027_m01",
            name: "IKKI",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/027/Ikki.jpg",
                            "char/027/Ikki2.jpg"], type: "base" },
                { srcList: ["char/027/Ikki3.jpg",
                            "char/027/Ikki4.jpg",
                            "char/027/Ikki5.jpg",
                            "char/027/Ikki6.jpg"], type: "fd" }
            ]
        },
        // KENT
        {
            id: "g027_m02",
            name: "KENT",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/027/Kent.jpg",
                            "char/027/Kent2.jpg"], type: "base" },
                { srcList: ["char/027/Kent3.jpg",
                            "char/027/Kent4.jpg",
                            "char/027/Kent5.jpg",
                            "char/027/Kent6.jpg"], type: "fd" }
            ]
        },
        // SHIN
        {
            id: "g027_m03",
            name: "SHIN",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/027/Shin.jpg",
                            "char/027/Shin2.jpg"], type: "base" },
                { srcList: ["char/027/Shin3.jpg",
                            "char/027/Shin4.jpg",
                            "char/027/Shin5.jpg",
                            "char/027/Shin6.jpg"], type: "fd" }
            ]
        },
        // TOMA
        {
            id: "g027_m04",
            name: "TOMA",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/027/Toma.jpg",
                            "char/027/Toma2.jpg"], type: "base" },
                { srcList: ["char/027/Toma3.jpg",
                            "char/027/Toma4.jpg",
                            "char/027/Toma5.jpg",
                            "char/027/Toma6.jpg"], type: "fd" }
            ]
        },
        // UKYO
        {
            id: "g027_h01",
            name: "UKYO",
            gender: "male",
            isHidden: true,
            isFD: true,
            images: [
                { srcList: ["char/027/Ukyo.jpg",
                            "char/027/Ukyo2.jpg"], type: "base" },
                { srcList: ["char/027/Ukyo3.jpg",
                            "char/027/Ukyo4.jpg",
                            "char/027/Ukyo5.jpg",
                            "char/027/Ukyo6.jpg"], type: "fd" }
            ]
        },
        // MINE
        {
            id: "g027_s01",
            name: "MINE",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/027/Mine.jpg"], type: "base" }
            ]
        },
        // ORION
        {
            id: "g027_s02",
            name: "ORION",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/027/Orion.jpg",
                            "char/027/Orion2.jpg"], type: "base" }
            ]
        },
        // RIKA
        {
            id: "g027_s03",
            name: "RIKA",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/027/Rika.jpg"], type: "base" }
            ]
        },
        // SAWA
        {
            id: "g027_s04",
            name: "SAWA",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/027/Sawa.jpg"], type: "base" }
            ]
        },
        // WAKA
        {
            id: "g027_s05",
            name: "WAKA",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/027/Waka.jpg"], type: "base" }
            ]
        },
        // LUKA
        {
            id: "g027_fs01",
            name: "Luka",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/027/Luka.jpg"], type: "base" }
            ]
        },
        // NOVA
        {
            id: "g027_fs02",
            name: "Nova",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/027/Nova.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
