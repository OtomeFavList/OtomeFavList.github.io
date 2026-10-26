// Blackish House sideA→ -Retour-
// 开发: honeybee black
// 发行: アリスマティック、エディア
// 人物设定: カズアキ
// 平台: Nintendo Switch
// 官方网站: honeybee-cd.com/BlackishHouse/switch_sideA/

// Blackish House sideA→
// 开发: honeybee black
// 发行: honeybee black
// 剧本: 中村幸代（円线）、みなづきともこ、ゆずみやともめ、乙月ありさ、伊原恵、桜ゆづき、柿本悠理、煌矢まな、谷村知子
// 人物设定: カズアキ
// 主题歌作曲: あるるかん
// 主题歌作词: あるるかん
// 主题歌演出: 石川界人
// 插入歌演出: 蒼井翔太
// 原画: カズアキ
// 导演: 高木彩佳（共通、公演部分、其它3线）
// 平台: PC
// 游戏类型: ダメ人間カウンセリング恋愛ADV
// 游玩人数: 1
// 发行日期: 2016-08-26
// 售价:
// 通常版 6,264 円
// 初回限定版 8,424 円
// 官方网站: honeybee-cd.com/BlackishHouse/sideA/
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

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
