// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game118", // 全局唯一ID，不可重复，如 game001
    name: "DesperaDrops",
    year: "2023",
    publisher: ["RED"],
    cnStudio: "暂无",
    writer: [
        {name:"吉村りりか", lang:"zh"}
    ],
    art: [
        {name:"コザキユースケ", lang:"ja"}
    ],
    cover: "game/118.jpg", // 相对路径，游戏封面
    charList: [
        // 天峰ミカ
        {
            id: "g118_f01",
            name: "峰ミカ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/118/Mika.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アッシュ·マイヤー
        {
            id: "g118_m01",
            name: "アッシュ·マイヤー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/118/Ash.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // カミュ·アインハルト
        {
            id: "g118_m02",
            name: "カミュ·アインハルト",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/118/Camu.jpg"], type: "base" },
            ]
        },
        // ジブ·ヴァルツァー
        {
            id: "g118_m03",
            name: "ジブ·ヴァルツァー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/118/Gib.jpg"], type: "base" },
            ]
        },
        // ハミエル·ルイス
        {
            id: "g118_m04",
            name: "ハミエル·ルイス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/118/Hamiel.jpg"], type: "base" },
            ]
        },
        // ラミー·カリエール
        {
            id: "g118_m05",
            name: "ラミー·カリエール",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/118/Ramie.jpg"], type: "base" },
            ]
        },
        // サリィ·デル·テスタ
        {
            id: "g118_m06",
            name: "サリィ·デル·テスタ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/118/Sally.jpg"], type: "base" },
            ]
        },
        // アイーダ·ファルコーネ
        {
            id: "g118_s01",
            name: "アイーダ·ファルコーネ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Aida.jpg"], type: "base" }
            ]
        },
        // アルフォンス·ノエル
        {
            id: "g118_s02",
            name: "アルフォンス·ノエル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Alphonse.jpg"], type: "base" }
            ]
        },
        // アントニーノ·ドルチェ
        {
            id: "g118_s03",
            name: "アントニーノ·ドルチェ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Antonino.jpg"], type: "base" }
            ]
        },
        // カルロス·レオン
        {
            id: "g118_s04",
            name: "カルロス·レオン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Carlos.jpg"], type: "base" }
            ]
        },
        // 宰相
        {
            id: "g118_s05",
            name: "宰相",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Chancellor.jpg"], type: "base" }
            ]
        },
        // 子守
        {
            id: "g118_s06",
            name: "子守",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Child.jpg"], type: "base" }
            ]
        },
        // クリステル
        {
            id: "g118_s07",
            name: "クリステル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Christel.jpg"], type: "base" }
            ]
        },
        // 指揮官
        {
            id: "g118_s08",
            name: "指揮官",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Concert.jpg"], type: "base" }
            ]
        },
        // エドワード·ハートフィールド
        {
            id: "g118_s09",
            name: "エドワード·ハートフィールド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Edward.jpg"], type: "base" }
            ]
        },
        // 執行人
        {
            id: "g118_s10",
            name: "執行人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Enforcer.jpg"], type: "base" }
            ]
        },
        // 家令
        {
            id: "g118_s11",
            name: "家令",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/House.jpg"], type: "base" }
            ]
        },
        // ルカ·サルヴァドーリ
        {
            id: "g118_s12",
            name: "ルカ·サルヴァドーリ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Luca.jpg"], type: "base" }
            ]
        },
        // レベッカ·ロッソ
        {
            id: "g118_s13",
            name: "レベッカ·ロッソ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/118/Rebecca.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
