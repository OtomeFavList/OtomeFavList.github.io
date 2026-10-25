// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game077", // 全局唯一ID，不可重复，如 game001
    name: "DYNAMIC CHORD feat.Liar-S Remaster edition",
    year: "2025",
    publisher: ["honeybee black"],
    cnStudio: "暂无",
    writer: [
        {name:"高木彩佳", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"相川暁子", lang:"zh"},
        {name:"森田彩莉", lang:"zh"},
        {name:"桜ゆづき", lang:"zh"},
        {name:"葉山いずみ", lang:"zh"},
        {name:"株式会社エッジワークス", lang:"zh"},
        {name:"もち大福", lang:"ja"}
    ],
    art: [
        {name:"冨士原良", lang:"zh"}
    ],
    cover: "game/077.jpg",
    charList: [
        // 双海仁菜
        {
            id: "g077_f01",
            name: "双海仁菜",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/077/Nina.jpg",
                            "char/077/Nina2.jpg"], type: "base" },
            ]
        },
        // 榛名宗太郎
        {
            id: "g077_m01",
            name: "榛名宗太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/077/Haruna.jpg",
                            "char/077/Haruna2.jpg",
                            "char/077/Haruna3.jpg",
                            "char/077/Haruna4.jpg",
                            "char/077/Haruna5.jpg",
                            "char/077/Haruna6.jpg",
                            "char/077/Haruna7.jpg",
                            "char/077/Haruna8.jpg",
                            "char/077/Haruna9.jpg",
                            "char/077/Haruna10.jpg",
                            "char/077/Haruna11.jpg"], type: "base" },
            ]
        },
        // 檜山朔良
        {
            id: "g077_m02",
            name: "檜山朔良",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/077/Hinoyama.jpg",
                            "char/077/Hinoyama2.jpg",
                            "char/077/Hinoyama3.jpg",
                            "char/077/Hinoyama4.jpg",
                            "char/077/Hinoyama5.jpg",
                            "char/077/Hinoyama6.jpg",
                            "char/077/Hinoyama7.jpg",
                            "char/077/Hinoyama8.jpg",
                            "char/077/Hinoyama9.jpg",
                            "char/077/Hinoyama10.jpg",
                            "char/077/Hinoyama11.jpg"], type: "base" },
            ]
        },
        // 珠洲乃千哉
        {
            id: "g077_m03",
            name: "珠洲乃千哉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/077/Suzuno.jpg",
                            "char/077/Suzuno2.jpg",
                            "char/077/Suzuno3.jpg",
                            "char/077/Suzuno4.jpg",
                            "char/077/Suzuno5.jpg",
                            "char/077/Suzuno6.jpg",
                            "char/077/Suzuno7.jpg",
                            "char/077/Suzuno8.jpg",
                            "char/077/Suzuno9.jpg",
                            "char/077/Suzuno10.jpg",
                            "char/077/Suzuno11.jpg"], type: "base" },
            ]
        },
        // 結崎芹
        {
            id: "g077_m04",
            name: "結崎芹",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/077/Yuisaki.jpg",
                            "char/077/Yuisaki2.jpg",
                            "char/077/Yuisaki3.jpg",
                            "char/077/Yuisaki4.jpg",
                            "char/077/Yuisaki5.jpg",
                            "char/077/Yuisaki6.jpg",
                            "char/077/Yuisaki7.jpg",
                            "char/077/Yuisaki8.jpg",
                            "char/077/Yuisaki9.jpg",
                            "char/077/Yuisaki10.jpg",
                            "char/077/Yuisaki11.jpg"], type: "base" },
            ]
        },
        // 加賀真実
        {
            id: "g077_s01",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/077/Kaga.jpg",
                            "char/077/Kaga2.jpg"], type: "base" }
            ]
        },
        // MERI
        {
            id: "g077_s02",
            name: "MERI",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/077/Meri.jpg",
                            "char/077/Meri2.jpg"], type: "base" }
            ]
        },
        // 槇慎也
        {
            id: "g077_s03",
            name: "槇慎也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/077/Shinya.jpg",
                            "char/077/Shinya2.jpg"], type: "base" }
            ]
        },
        // 雨宮詩央
        {
            id: "g077_s04",
            name: "雨宮詩央",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/077/Shio.jpg",
                            "char/077/Shio2.jpg"], type: "base" }
            ]
        },
        // 伊澄久臣
        {
            id: "g077_s05",
            name: "伊澄久臣",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/077/Syacho.jpg",
                            "char/077/Syacho2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
