// data/games/game072.js
// ✅已核对信息
// ℹ️配角名未汉化
const gameData = {
    id: "game072", // 全局唯一ID，不可重复，如 game001
    name: "燃烧吧!乙女道士 ~华游恋语~",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"佐々木麿", lang:"zh"},
        {name:"吉村りりか", lang:"zh"},
        {name:"中山智美", lang:"zh"}
    ],
    art: [
        {name:"猫井アユ", lang:"zh"}
    ],
    cover: "game/072.jpg", // 相对路径，游戏封面
    charList: [
        // 秀铃
        {
            id: "g072_f01",
            name: "秀铃",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/072/Shunlin.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 皓岚
        {
            id: "g072_m01",
            name: "皓岚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/072/Haoran.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 龙琍
        {
            id: "g072_m02",
            name: "龙琍",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/072/Longlei.jpg"], type: "base" },
            ]
        },
        // 阿虚
        {
            id: "g072_m03",
            name: "阿虚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/072/Uro.jpg"], type: "base" },
            ]
        },
        // 赦泓
        {
            id: "g72_m04",
            name: "赦泓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/072/Xiao.jpg"], type: "base" },
            ]
        },
        // 宇珩
        {
            id: "g072_m05",
            name: "宇珩",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/072/Yuhan.jpg"], type: "base" },
            ]
        },
        // ミーミ
        {
            id: "g072_s01",
            name: "ミーミ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/072/Mimi.jpg"], type: "base" }
            ]
        },
        // リーホン
        {
            id: "g072_s02",
            name: "リーホン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/072/Rihon.jpg"], type: "base" }
            ]
        },
        // ルオジン
        {
            id: "g072_s03",
            name: "ルオジン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/072/Ruojin.jpg"], type: "base" }
            ]
        },
        // セイセツ
        {
            id: "g072_s04",
            name: "セイセツ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/072/Seisetsu.jpg"], type: "base" }
            ]
        },
        // ウェイ
        {
            id: "g072_s05",
            name: "ウェイ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/072/Wei.jpg"], type: "base" }
            ]
        },
        // シユ
        {
            id: "g072_s06",
            name: "シユ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/072/Xiu.jpg"], type: "base" }
            ]
        },
        // イーミン
        {
            id: "g072_s07",
            name: "イーミン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/072/Yimin.jpg"], type: "base" }
            ]
        },
        // ヨキ
        {
            id: "g072_s08",
            name: "ヨキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/072/Yoki.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
