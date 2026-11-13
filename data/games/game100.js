const gameData = {
    id: "game100", // 全局唯一ID，不可重复，如 game001
    name: "sins of KALEIDO 塔巡りし因果の魔女",
    year: "2026",
    publisher: ["AmuLit"],
    cnStudio: "暂无",
    writer: [
        {name:"潮文音", lang:"zh"}
    ],
    art: [
        {name:"Tana Khaki", lang:"en"}
    ],
    cover: "game/100.jpg", // 相对路径，游戏封面
    charList: [
        // ヨルカ·ユールウッド
        {
            id: "g100_f01",
            name: "ヨルカ·ユールウッド",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/100/Yolca.jpg",
                            "char/100/Yolca2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ユージーン
        {
            id: "g100_m01",
            name: "ユージーン",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/100/Eugene.jpg",
                            "char/100/Eugene2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ヒース·クレセント
        {
            id: "g100_m02",
            name: "ヒース·クレセント",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/100/Heath.jpg",
                            "char/100/Heath2.jpg"], type: "base" },
            ]
        },
        // カノア·フォルティス
        {
            id: "g100_m03",
            name: "カノア·フォルティス",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/100/Kanoa.jpg",
                            "char/100/Kanoa2.jpg"], type: "base" },
            ]
        },
        // オルセム·ヘルハンド
        {
            id: "g100_m04",
            name: "オルセム·ヘルハンド",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/100/Orsem.jpg",
                            "char/100/Orsem2.jpg"], type: "base" },
            ]
        },
        // ティルケット·ハルムショー
        {
            id: "g100_m05",
            name: "ティルケット·ハルムショー",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/100/Tilkett.jpg",
                            "char/100/Tilkett2.jpg"], type: "base" },
            ]
        },
        // アンブローズ
        {
            id: "g100_s01",
            name: "アンブローズ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Ambrose.jpg"], type: "base" }
            ]
        },
        // セシル·グローヴァー
        {
            id: "g100_s02",
            name: "セシル·グローヴァー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Cecil.jpg"], type: "base" }
            ]
        },
        // ダレン·ユールウッド
        {
            id: "g100_s03",
            name: "ダレン·ユールウッド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Dalen.jpg"], type: "base" }
            ]
        },
        // ドレイク·ブレークリー
        {
            id: "g100_s04",
            name: "ドレイク·ブレークリー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Drake.jpg"], type: "base" }
            ]
        },
        // エイラ·ハーウィック
        {
            id: "g100_s05",
            name: "エイラ·ハーウィック",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Eira.jpg"], type: "base" }
            ]
        },
        // インレイ·グッドマン
        {
            id: "g100_s06",
            name: "インレイ·グッドマン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Inley.jpg"], type: "base" }
            ]
        },
        // リアム·ノット
        {
            id: "g100_s07",
            name: "リアム·ノット",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Riasu.jpg"], type: "base" }
            ]
        },
        // ロア·シャドウモア
        {
            id: "g100_s08",
            name: "ロア·シャドウモア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Loa.jpg"], type: "base" }
            ]
        },
        // ラック·バースデン
        {
            id: "g100_s09",
            name: "ラック·バースデン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Luc.jpg"], type: "base" }
            ]
        },
        // マウロ·シャドウモア
        {
            id: "g100_s10",
            name: "マウロ·シャドウモア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Maulo.jpg"], type: "base" }
            ]
        },
        // モーフィア·ハルムショー
        {
            id: "g100_s11",
            name: "モーフィア·ハルムショー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Morphia.jpg"], type: "base" }
            ]
        },
        // シャノン·メロウェイ
        {
            id: "g100_s12",
            name: "シャノン·メロウェイ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Shanan.jpg"], type: "base" }
            ]
        },
        // ウィロウ·アコニット
        {
            id: "g100_s13",
            name: "ウィロウ·アコニット",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/Willow.jpg"], type: "base" }
            ]
        },
        // ？？？
        {
            id: "g100_s14",
            name: "？？？",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/？？.jpg"], type: "base" }
            ]
        },
        // ？？？
        {
            id: "g100_s15",
            name: "？？？",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/100/？？？.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
