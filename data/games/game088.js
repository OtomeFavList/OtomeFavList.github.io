// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game088", // 全局唯一ID，不可重复，如 game001
    name: "Side Kicks!beyond",
    year: "2025",
    publisher: ["eXtend"],
    cnStudio: "暂无",
    writer: [
        {name:"海堂めぐる", lang:"zh"},
        {name:"Team SK", lang:"en"},
        {name:"minetaka", lang:"en"},
    ],
    art: [
        {name:"すめらぎ琥珀", lang:"ja"}
    ],
    cover: "game/088.jpg",
    charList: [
        // イノリ
        {
            id: "g088_f01",
            name: "イノリ",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Inori.jpg"], type: "base" },
            ]
        },
        // チカ
        {
            id: "g088_m01",
            name: "チカ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Chika.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ヒバリ
        {
            id: "g088_m02",
            name: "ヒバリ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Hibari.jpg"], type: "base" },
            ]
        },
        // ノラ
        {
            id: "g088_m03",
            name: "ノラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Nora.jpg"], type: "base" },
            ]
        },
        // リコ
        {
            id: "g088_m04",
            name: "リコ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Rico.jpg"], type: "base" },
            ]
        },
        // シシバ
        {
            id: "g088_m05",
            name: "シシバ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Shishiba.jpg"], type: "base" },
            ]
        },
        // タテワキ
        {
            id: "g088_m06",
            name: "タテワキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Tatewaki.jpg"], type: "base" },
            ]
        },
        // アヤメ
        {
            id: "g088_s01",
            name: "アヤメ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/088/Ayame.jpg"], type: "base" }
            ]
        },
        // キララ
        {
            id: "g088_s02",
            name: "キララ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/088/Kirara.jpg"], type: "base" }
            ]
        },
        // クルミ
        {
            id: "g088_s03",
            name: "クルミ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/088/Kurumi.jpg"], type: "base" }
            ]
        },
        // マキ
        {
            id: "g088_s04",
            name: "マキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/088/Maki.jpg"], type: "base" }
            ]
        },
        // シオン
        {
            id: "g088_s05",
            name: "シオン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/088/Shion.jpg"], type: "base" }
            ]
        },
        // シスイ
        {
            id: "g088_s06",
            name: "シスイ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/088/Shisui.jpg"], type: "base" }
            ]
        },
        // ツバキ
        {
            id: "g088_s07",
            name: "ツバキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/088/Tsubaki.jpg"], type: "base" }
            ]
        },
        // ヤシロ
        {
            id: "g088_s08",
            name: "ヤシロ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/088/Yashiro.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
