const gameData = {
    id: "game097", // 全局唯一ID，不可重复，如 game001
    name: "Starry☆Sky~Spring Memories~",
    year: "2026",
    publisher: ["honeybee"],
    cnStudio: "暂无",
    writer: [
        {name:"高木聖子", lang:"zh"},
        {name:"桜葉ユウ", lang:"zh"},
        {name:"清水慶", lang:"zh"},
        {name:"春名佳純", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"株式会社エッジワークス", lang:"zh"},
    ],
    art: [
        {name:"カズアキ", lang:"ja"},
        {name:"ゑむ", lang:"ja"}
    ],
    cover: "game/097.jpg", // 相对路径，游戏封面
    charList: [
        // 夜久月子
        {
            id: "g097_f01",
            name: "夜久月子",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/097/Tsukiko.jpg",
                            "char/097/Tsukiko2.jpg",
                            "char/097/Tsukiko3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 七海哉太
        {
            id: "g097_m01",
            name: "七海哉太",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/097/Nanami.jpg",
                            "char/097/Nanami2.jpg",
                            "char/097/Nanami3.jpg",
                            "char/097/Nanami4.jpg",
                            "char/097/Nanami5.jpg",
                            "char/097/Nanami6.jpg",
                            "char/097/Nanami7.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 土萌羊
        {
            id: "g097_m02",
            name: "土萌羊",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/097/Tomoe.jpg",
                            "char/097/Tomoe2.jpg",
                            "char/097/Tomoe3.jpg",
                            "char/097/Tomoe4.jpg",
                            "char/097/Tomoe5.jpg",
                            "char/097/Tomoe6.jpg",
                            "char/097/Tomoe7.jpg"], type: "base" },
            ]
        },
        // 東月錫也
        {
            id: "g097_m03",
            name: "東月錫也",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/097/Touzuki.jpg",
                            "char/097/Touzuki2.jpg",
                            "char/097/Touzuki3.jpg",
                            "char/097/Touzuki4.jpg",
                            "char/097/Touzuki5.jpg",
                            "char/097/Touzuki6.jpg",
                            "char/097/Touzuki7.jpg"], type: "base" },
            ]
        },
        // 和泉崇嗣
        {
            id: "g097_m04",
            name: "和泉崇嗣",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/097/Takatsugu.jpg",
                            "char/097/Takatsugu2.jpg"], type: "base" },
            ]
        },
        // 忍成ハル
        {
            id: "g097_m05",
            name: "忍成ハル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/097/Haru.jpg",
                            "char/097/Haru2.jpg"], type: "base" },
            ]
        },
        // 土萌未莉
        {
            id: "g097_s01",
            name: "土萌未莉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/097/Imari.jpg",
                            "char/097/Imari2.jpg"], type: "base" }
            ]
        },
        // ラウル·マティアス·ジャン·エーメ
        {
            id: "g097_s02",
            name: "ラウル·マティアス·ジャン·エーメ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/097/Rauru.jpg",
                            "char/097/Rauru2.jpg"], type: "base" }
            ]
        },
        // 春名真琴
        {
            id: "g097_s03",
            name: "春名真琴",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/097/Makoto.jpg",
                            "char/097/Makoto2.jpg"], type: "base" }
            ]
        },
        // 七海まゆみ
        {
            id: "g097_s04",
            name: "七海まゆみ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/097/Mayumi.jpg",
                            "char/097/Mayumi2.jpg"], type: "base" }
            ]
        },
        // 東月小百合
        {
            id: "g097_s05",
            name: "東月小百合",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/097/Sayuri.jpg",
                            "char/097/Sayuri2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
