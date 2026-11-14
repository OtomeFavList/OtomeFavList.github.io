// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game102", // 全局唯一ID，不可重复，如 game001
    name: "My9Swallows TOPSTARS LEAGUE",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"紅原香", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"暦野まち", lang:"zh"},
        {name:"坂本はしら", lang:"zh"},
        {name:"堂島チロル", lang:"zh"}
    ],
    art: [
        {name:"凪月つばさ", lang:"zh"}
    ],
    cover: "game/102.jpg", // 相对路径，游戏封面
    charList: [
        // 杉沢つばめ
        {
            id: "g102_f01",
            name: "杉沢つばめ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/102/Tsubame.jpg",
                            "char/102/Tsubame2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 甘城奏汰
        {
            id: "g102_m01",
            name: "甘城奏汰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Amagi.jpg",
                            "char/102/Amagi2.jpg",
                            "char/102/Amagi3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // クラン
        {
            id: "g102_m02",
            name: "クラン",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Clan.jpg",
                            "char/102/Clan2.jpg",
                            "char/102/Clan3.jpg"], type: "base" },
            ]
        },
        // 時透晴生
        {
            id: "g102_m03",
            name: "時透晴生",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Haruki.jpg",
                            "char/102/Haruki2.jpg",
                            "char/102/Haruki3.png"], type: "base" },
            ]
        },
        // 柊翔琉
        {
            id: "g102_m04",
            name: "柊翔琉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Hiiragi.jpg",
                            "char/102/Hiiragi2.jpg",
                            "char/102/Hiiragi3.png"], type: "base" },
            ]
        },
        // 永末尋斗
        {
            id: "g102_m05",
            name: "永末尋斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Hiroto.jpg",
                            "char/102/Hiroto2.jpg",
                            "char/102/Hiroto3.png"], type: "base" },
            ]
        },
        // 紗武郁実
        {
            id: "g102_m06",
            name: "紗武郁実",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Ikumi.jpg",
                            "char/102/Ikumi2.jpg",
                            "char/102/Ikumi3.png"], type: "base" },
            ]
        },
        // ミラ
        {
            id: "g102_m07",
            name: "ミラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Milla.jpg",
                            "char/102/Milla2.jpg",
                            "char/102/Milla3.png"], type: "base" },
            ]
        },
        // 仲大路蓮
        {
            id: "g102_m08",
            name: "仲大路蓮",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Renn.jpg",
                            "char/102/Renn2.jpg",
                            "char/102/Renn3.png"], type: "base" },
            ]
        },
        // 司良堂達治
        {
            id: "g102_m09",
            name: "司良堂達治",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Tatsuji.jpg",
                            "char/102/Tatsuji2.jpg",
                            "char/102/Tatsuji3.png"], type: "base" },
            ]
        },
        // 纱武敏実
        {
            id: "g102_s01",
            name: "紗武敏実",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/102/binjitsu.jpg"], type: "base" }
            ]
        },
        // エレナ·アンダーリン
        {
            id: "g102_s02",
            name: "エレナ·アンダーリン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/102/Erina.jpg"], type: "base" }
            ]
        },
        // 花房健一
        {
            id: "g102_s03",
            name: "花房健一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/102/Kenichi.jpg"], type: "base" }
            ]
        },
        // 篁昂生
        {
            id: "g102_s04",
            name: "篁昂生",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/102/Kosei.jpg"], type: "base" }
            ]
        },
        // つば九郎
        {
            id: "g102_s05",
            name: "つば九郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/102/Kurou.jpg"], type: "base" }
            ]
        },
        // 河見ナツ子
        {
            id: "g102_s06",
            name: "河見ナツ子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/102/Natsuko.jpg"], type: "base" }
            ]
        },
        // ‌リッキー·ガレン
        {
            id: "g102_s07",
            name: "リッキー·ガレン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/102/Riki.jpg"], type: "base" }
            ]
        },
        // 御山紗菜
        {
            id: "g102_s08",
            name: "御山紗菜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/102/Sana.jpg"], type: "base" }
            ]
        },
        // 炉木清史郎
        {
            id: "g102_s09",
            name: "炉木清史郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/102/Seishiro.jpg"], type: "base" }
            ]
        },
        // 岩元哲路
        {
            id: "g102_s10",
            name: "岩元哲路",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/102/Tetsuro.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
