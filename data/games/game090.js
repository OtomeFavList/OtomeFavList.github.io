// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game090", // 全局唯一ID，不可重复，如 game001
    name: "Blackish House sideA→ -Retour-",
    year: "2025",
    publisher: ["honeybee black"],
    cnStudio: "暂无",
    writer: [
        {name:"中村幸代", lang:"zh"},
        {name:"乙月ありさ", lang:"zh"},
        {name:"伊原恵", lang:"zh"},
        {name:"桜ゆづき", lang:"zh"},
        {name:"柿本悠理", lang:"zh"},
        {name:"煌矢まな", lang:"zh"},
        {name:"谷村知子", lang:"zh"},
        {name:"みなづきともこ", lang:"ja"},
        {name:"ゆずみやともめ", lang:"ja"}
    ],
    art: [
        {name:"カズアキ", lang:"ja"}
    ],
    cover: "game/090.jpg", // 相对路径，游戏封面
    charList: [
        // 亜麻乃雛
        {
            id: "g090_f01",
            name: "亜麻乃雛",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/090/Hina.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 姫崎藤吾
        {
            id: "g090_m01",
            name: "姫崎藤吾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/090/Kisaki.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 久世円
        {
            id: "g090_m02",
            name: "久世円",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/090/Kuze.jpg"], type: "base" },
            ]
        },
        // 宇賀神澪
        {
            id: "g090_m03",
            name: "宇賀神澪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/090/Rei.jpg"], type: "base" },
            ]
        },
        // 椎葉剛
        {
            id: "g090_m04",
            name: "椎葉剛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/090/Shiiba.jpg"], type: "base" },
            ]
        },
        // 阿久根セラ
        {
            id: "g090_s01",
            name: "阿久根セラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Akune.jpg"], type: "base" }
            ]
        },
        // 三嶋杏
        {
            id: "g090_s02",
            name: "三嶋杏",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/An.jpg"], type: "base" }
            ]
        },
        // 有村乃亜
        {
            id: "g090_s03",
            name: "有村乃亜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Arimura.jpg"], type: "base" }
            ]
        },
        // 千羽駆
        {
            id: "g090_s04",
            name: "千羽駆",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Chiba.jpg"], type: "base" }
            ]
        },
        // 神林圭吾
        {
            id: "g090_s05",
            name: "神林圭吾",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Kanbayashi.jpg"], type: "base" }
            ]
        },
        // 久世華純
        {
            id: "g090_s06",
            name: "久世華純",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Kasumi.jpg"], type: "base" }
            ]
        },
        // 北大路リカ
        {
            id: "g090_s07",
            name: "北大路リカ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Kitaooji.jpg"], type: "base" }
            ]
        },
        // 前園マミ
        {
            id: "g090_s08",
            name: "前園マミ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Maezono.jpg"], type: "base" }
            ]
        },
        // 桜坂悠翔
        {
            id: "g090_s09",
            name: "桜坂悠翔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Ousaka.jpg"], type: "base" }
            ]
        },
        // 神田麗子
        {
            id: "g090_s10",
            name: "神田麗子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Reiko.jpg"], type: "base" }
            ]
        },
        // 佐伯和泉
        {
            id: "g090_s11",
            name: "佐伯和泉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Saeki.jpg"], type: "base" }
            ]
        },
        // 興田重虎
        {
            id: "g090_s12",
            name: "興田重虎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Yoda.jpg"], type: "base" }
            ]
        },
        // YUE
        {
            id: "g090_s13",
            name: "YUE",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Yue.jpg"], type: "base" }
            ]
        },
        // 結城那由多
        {
            id: "g090_s14",
            name: "結城那由多",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/090/Yuuki.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
