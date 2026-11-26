// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game155", // 全局唯一ID，不可重复，如 game001
    name: "Starry☆Sky~Winter Memories~",
    year: "2027",
    publisher: ["honeybee"],
    cnStudio: "暂无",
    writer: [
        {name:"高木聖子", lang:"zh"},
        {name:"清水慶", lang:"zh"},
        {name:"春名佳純", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"株式会社エッジワークス", lang:"zh"}
    ],
    art: [
        {name:"カズアキ", lang:"ja"},
        {name:"ゑむ", lang:"ja"},
    ],
    cover: "game/155.jpg", // 相对路径，游戏封面
    charList: [
        // 夜久月子
        {
            id: "g155_f01",
            name: "夜久月子",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Tsukiko.jpg",
                            "char/155/Tsukiko2.jpg",
                            "char/155/Tsukiko3.jpg"], type: "base" },
            ]
        },
        // 天羽翼
        {
            id: "g155_m01",
            name: "天羽翼",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Amaha.png",
                            "char/155/Amaha2.png",
                            "char/155/Amaha3.jpg",
                            "char/155/Amaha4.png",
                            "char/155/Amaha5.png",
                            "char/155/Amaha6.png",
                            "char/155/Amaha7.png"], type: "base" }
            ]
        },
        // 青空颯斗
        {
            id: "g155_m02",
            name: "青空颯斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Aozora.png",
                            "char/155/Aozora2.jpg",
                            "char/155/Aozora3.png",
                            "char/155/Aozora4.png",
                            "char/155/Aozora5.png",
                            "char/155/Aozora6.png",
                            "char/155/Aozora7.png"], type: "base" }
            ]
        },
        // 神楽坂四季
        {
            id: "g155_m03",
            name: "神楽坂四季",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Shiki.png",
                            "char/155/Shiki2.jpg",
                            "char/155/Shiki3.png",
                            "char/155/Shiki4.png",
                            "char/155/Shiki5.png",
                            "char/155/Shiki6.png"], type: "base" }
            ]
        },
        // 不知火一樹
        {
            id: "g155_m04",
            name: "不知火一樹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Shiranui.png",
                            "char/155/Shiranui2.jpg",
                            "char/155/Shiranui3.png",
                            "char/155/Shiranui4.png",
                            "char/155/Shiranui5.png",
                            "char/155/Shiranui6.png",
                            "char/155/Shiranui7.png"], type: "base" }
            ]
        },
        // 高梨あい
        {
            id: "g155_s01",
            name: "高梨あい",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Ai.png"], type: "base" }
            ]
        },
        // 青空空翔
        {
            id: "g155_s02",
            name: "青空空翔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Akito.png"], type: "base" }
            ]
        },
        // 青空隼風
        {
            id: "g155_s03",
            name: "青空隼風",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Hayate.png"], type: "base" }
            ]
        },
        // 犬飼隆文
        {
            id: "g155_s04",
            name: "犬飼隆文",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Inukai.png"], type: "base" }
            ]
        },
        // 青空風音
        {
            id: "g155_s05",
            name: "青空風音",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Kazane.png"], type: "base" }
            ]
        },
        // 白銀桜土郎
        {
            id: "g155_s06",
            name: "白銀桜土郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Oushirou.png",
                            "char/155/Oushirou2.png"], type: "base" }
            ]
        },
        // 雪城律
        {
            id: "g155_s07",
            name: "雪城律",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Ritsu.png",
                            "char/155/Ritsu2.png"], type: "base" }
            ]
        },
        // 天羽志乃
        {
            id: "g155_s08",
            name: "天羽志乃",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Shino.png"], type: "base" }
            ]
        },
        // 不知火宗次郎
        {
            id: "g155_s09",
            name: "不知火宗次郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/155/Soujirou.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
