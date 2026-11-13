const gameData = {
    id: "game095", // 全局唯一ID，不可重复，如 game001
    name: "DYNAMIC CHORD feat.KYOHSO Remaster Edition",
    year: "2025",
    publisher: ["honeybee black"],
    cnStudio: "暂无",
    writer: [
        {name:"石川奈津季", lang:"zh"},
        {name:"中村幸代", lang:"zh"},
        {name:"柚子みかん", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"相川暁子", lang:"zh"},
        {name:"春名佳純", lang:"zh"},
        {name:"水井としえ", lang:"zh"},
        {name:"伊原恵", lang:"zh"},
        {name:"株式会社エッジワークス", lang:"zh"},
        {name:"さつき", lang:"ja"},
        {name:"みなづきともこ", lang:"ja"},
        {name:"ふくだりょうこ", lang:"ja"}
    ],
    art: [
        {name:"冨士原良", lang:"zh"},
    ],
    cover: "game/095.jpg", // 相对路径，游戏封面
    charList: [
        // 霧下このは
        {
            id: "g095_f01",
            name: "霧下このは",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/095/Konoha.jpg",
                            "char/095/Konoha2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 城坂依都
        {
            id: "g095_m01",
            name: "城坂依都",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/095/Kisaka.jpg",
                            "char/095/Kisaka2.jpg",
                            "char/095/Kisaka3.jpg",
                            "char/095/Kisaka4.jpg",
                            "char/095/Kisaka5.jpg",
                            "char/095/Kisaka6.jpg",
                            "char/095/Kisaka7.jpg",
                            "char/095/Kisaka8.jpg",
                            "char/095/Kisaka9.jpg",
                            "char/095/Kisaka10.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 諏宮篠宗
        {
            id: "g095_m02",
            name: "諏宮篠宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/095/Sumiya.jpg",
                            "char/095/Sumiya2.jpg",
                            "char/095/Sumiya3.jpg",
                            "char/095/Sumiya4.jpg",
                            "char/095/Sumiya5.jpg",
                            "char/095/Sumiya6.jpg",
                            "char/095/Sumiya7.jpg",
                            "char/095/Sumiya8.jpg",
                            "char/095/Sumiya9.jpg",
                            "char/095/Sumiya10.jpg"], type: "base" },
            ]
        },
        // 英時明
        {
            id: "g095_m03",
            name: "英時明",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/095/Tokiharu.jpg",
                            "char/095/Tokiharu2.jpg",
                            "char/095/Tokiharu3.jpg",
                            "char/095/Tokiharu4.jpg",
                            "char/095/Tokiharu5.jpg",
                            "char/095/Tokiharu6.jpg",
                            "char/095/Tokiharu7.jpg",
                            "char/095/Tokiharu8.jpg",
                            "char/095/Tokiharu9.jpg",
                            "char/095/Tokiharu10.jpg"], type: "base" },
            ]
        },
        // 黒谷優
        {
            id: "g095_m04",
            name: "黒谷優",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/095/Yuu.jpg",
                            "char/095/Yuu2.jpg",
                            "char/095/Yuu3.jpg",
                            "char/095/Yuu4.jpg",
                            "char/095/Yuu5.jpg",
                            "char/095/Yuu6.jpg",
                            "char/095/Yuu7.jpg",
                            "char/095/Yuu8.jpg",
                            "char/095/Yuu9.jpg",
                            "char/095/Yuu10.jpg"], type: "base" },
            ]
        },
        // 安曇涼羽
        {
            id: "g095_s01",
            name: "安曇涼羽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/095/Azumi.jpg"], type: "base" }
            ]
        },
        // クロウ
        {
            id: "g095_s02",
            name: "クロウ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/095/Crovv.jpg"], type: "base" }
            ]
        },
        // 福志智樹
        {
            id: "g095_s03",
            name: "福志智樹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/095/Hukushi.jpg"], type: "base" }
            ]
        },
        // 伊澄久臣
        {
            id: "g095_s04",
            name: "伊澄久臣",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/095/Izumi.jpg"], type: "base" }
            ]
        },
        // ジン
        {
            id: "g095_s05",
            name: "ジン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/095/Jin.jpg"], type: "base" }
            ]
        },
        // 高瀬マサキ
        {
            id: "g095_s06",
            name: "高瀬マサキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/095/Masaki.jpg"], type: "base" }
            ]
        },
        // ニャン吉
        {
            id: "g095_s07",
            name: "ニャン吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/095/Nyan.jpg"], type: "base" }
            ]
        },
        // 五十嵐八雲
        {
            id: "g095_s08",
            name: "五十嵐八雲",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/095/Yakumo.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
