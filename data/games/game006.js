// data/games/game006.js
// ✅已核对信息
const gameData = {
    id: "game006",
    name: "奥林匹亚的晚宴",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"片桐由摩", lang:"zh"}
    ],
    art: [
        {name:"さとい", lang:"ja"}
    ],
    cover: "game/006.jpg",
    charList: [
        // 奥林匹亚
        {
            id: "g006_f01",
            name: "奥林匹亚",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/006/Olympia.jpg",
                            "char/006/Olympia2.png",
                            "char/006/Olympia3.jpeg",
                            "char/006/Olympia4.jpeg"], type: "base" }
            ]
        },
        // 朱砂
        {
            id: "g006_m01",
            name: "朱砂",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/006/Akaza.jpg",
                            "char/006/Akaza2.png",
                            "char/006/Akaza3.jpeg",
                            "char/006/Akaza4.jpeg"], type: "base" }
            ]
        },
        // 天草四郎时贞
        {
            id: "g006_m02",
            name: "天草四郎时贞",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/006/Amakusa.jpg",
                            "char/006/Amakusa2.png",
                            "char/006/Amakusa3.jpeg",
                            "char/006/Amakusa4.jpeg"], type: "base" }
            ]
        },
        // 火向
        {
            id: "g006_m03",
            name: "火向",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/006/Himuka.jpg",
                            "char/006/Himuka2.png",
                            "char/006/Himuka3.jpeg",
                            "char/006/Himuka4.jpeg"], type: "base" }
            ]
        },
        // 玄叶
        {
            id: "g006_m04",
            name: "玄叶",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/006/Kuroba.jpg",
                            "char/006/Kuroba2.png",
                            "char/006/Kuroba3.jpeg",
                            "char/006/Kuroba4.jpeg"], type: "base" }
            ]
        },
        // 璃空
        {
            id: "g006_m05",
            name: "璃空",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/006/Rikuu.jpg",
                            "char/006/Rikuu2.png",
                            "char/006/Rikuu3.jpeg",
                            "char/006/Rikuu4.jpeg"], type: "base" }
            ]
        },
        // 缘
        {
            id: "g006_m06",
            name: "缘",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/006/Yosuga.jpg",
                            "char/006/Yosuga2.png",
                            "char/006/Yosuga3.jpeg",
                            "char/006/Yosuga4.jpeg"], type: "base" }
            ]
        },
        // 明日羽
        {
            id: "g006_s01",
            name: "明日羽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Asuha.jpg"], type: "base" },
                { srcList: ["char/006/Asuha2.png",
                            "char/006/Asuha3.jpeg",
                            "char/006/Asuha4.jpeg"], type: "fd" }
            ]
        },
        // 卡梅莉亚
        {
            id: "g006_s02",
            name: "卡梅莉亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Camelia.jpg",
                            "char/006/Camelia2.jpeg",
                            "char/006/Camelia3.jpeg"], type: "base" }
            ]
        },
        // 大福
        {
            id: "g006_s03",
            name: "大福",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Daifuku.png",
                            "char/006/Daifuku2.jpeg",
                            "char/006/Daifuku3.jpeg"], type: "base" }
            ]
        },
        // 道摩大师
        {
            id: "g006_s04",
            name: "道摩大师",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Douma.jpg",
                            "char/006/Douma2.jpeg",
                            "char/006/Douma3.jpeg"], type: "base" }
            ]
        },
        // 海浬
        {
            id: "g006_s05",
            name: "海浬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Hairi.jpg"], type: "base" },
                { srcList: ["char/006/Hairi2.png",
                            "char/006/Hairi3.jpeg",
                            "char/006/Hairi4.jpeg"], type: "fd" }
            ]
        },
        // 慈眼大师
        {
            id: "g006_s06",
            name: "慈眼大师",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Jigen.jpg",
                            "char/006/Jigen2.jpeg",
                            "char/006/Jigen3.jpeg"], type: "base" }
            ]
        },
        // 茱莉叶
        {
            id: "g006_s07",
            name: "茱莉叶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Juliet.png",
                            "char/006/Juliet2.jpeg",
                            "char/006/Juliet3.jpeg"], type: "base" }
            ]
        },
        // 刈稲
        {
            id: "g006_s08",
            name: "刈稲",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Kaina.jpg",
                            "char/006/Kaina2.jpeg",
                            "char/006/Kaina3.jpeg"], type: "base" }
            ]
        },
        // 柑南
        {
            id: "g006_s09",
            name: "柑南",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Kanan.jpg",
                            "char/006/Kanan2.jpeg",
                            "char/006/Kanan3.jpeg"], type: "base" }
            ]
        },
        // 薙草
        {
            id: "g006_s10",
            name: "薙草",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Nagusa.jpg",
                            "char/006/Nagusa2.jpeg",
                            "char/006/Nagusa3.jpeg"], type: "base" }
            ]
        },
        // 帕里斯
        {
            id: "g006_s11",
            name: "帕里斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Paris.png",
                            "char/006/Paris2.jpeg",
                            "char/006/Paris3.jpeg"], type: "base" }
            ]
        },
        // 叉梗
        {
            id: "g006_s12",
            name: "叉梗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Sakyou.jpg",
                            "char/006/Sakyou2.jpeg",
                            "char/006/Sakyou3.jpeg"], type: "base" }
            ]
        },
        // 珠蓝大姐
        {
            id: "g006_s13",
            name: "珠蓝大姐",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Shura.jpg",
                            "char/006/Shura2.jpeg",
                            "char/006/Shura3.jpeg"], type: "base" }
            ]
        },
        // 月黄泉
        {
            id: "g006_s14",
            name: "月黄泉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/006/Tsukuyomi.jpg",
                            "char/006/Tsukuyomi2.jpeg",
                            "char/006/Tsukuyomi3.jpeg"], type: "base" }
            ]
        },
        // 碧蜘
        {
            id: "g006_fs01",
            name: "碧蜘",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/006/Aogumo.png",
                            "char/006/Aogumo2.jpeg",
                            "char/006/Aogumo3.jpeg"], type: "base" }
            ]
        },
        // 瑪烙
        {
            id: "g006_fs02",
            name: "瑪烙",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/006/Baraku.png",
                            "char/006/Baraku2.jpeg",
                            "char/006/Baraku3.jpeg"], type: "base" }
            ]
        },
        // ムクロギ
        {
            id: "g006_fs03",
            name: "ムクロギ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/006/Mukurogi.png",
                            "char/006/Mukurogi2.jpeg",
                            "char/006/Mukurogi3.jpeg"], type: "base" }
            ]
        },
        // ナタナエル
        {
            id: "g006_fs04",
            name: "ナタナエル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/006/Nathanael.png",
                            "char/006/Nathanael2.jpeg",
                            "char/006/Nathanael3.jpeg"], type: "base" }
            ]
        },
        // 閑紅
        {
            id: "g006_fs05",
            name: "閑紅",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/006/Shizuku.png",
                            "char/006/Shizuku2.jpeg",
                            "char/006/Shizuku3.jpeg"], type: "base" }
            ]
        },
        // 菖愁
        {
            id: "g006_fs06",
            name: "菖愁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/006/Souju.png",
                            "char/006/Souju2.jpeg",
                            "char/006/Souju3.jpeg"], type: "base" }
            ]
        },
        // 灯杜
        {
            id: "g006_fs07",
            name: "灯杜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/006/Tomori.png",
                            "char/006/Tomori2.jpeg",
                            "char/006/Tomori3.jpeg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
