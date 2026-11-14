// ✅已核对信息
// ⚠️已核对信息/未发售官网信息未完善/信息不确切，FD内容未添加/FD官网差分未制作/续作官网差分未制作/立绘差分未制作/立绘未重置/配角未添加/封面不清晰
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game123", // 全局唯一ID，不可重复，如 game001
    name: "戦場の円舞曲",
    year: "2023",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"片桐由摩", lang:"zh"}
    ],
    art: [
        {name:"武村ゆみこ", lang:"zh"}
    ],
    cover: "game/123.jpg", // 相对路径，游戏封面
    charList: [
        // ラン
        {
            id: "g123_f01",
            name: "ラン",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/123/Lan.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アベル
        {
            id: "g123_m01",
            name: "アベル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/123/Abel.jpg",
                            "char/123/Abel2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ラスティン
        {
            id: "g123_m02",
            name: "ラスティン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/123/Lustin.jpg",
                            "char/123/Lustin2.jpg"], type: "base" },
            ]
        },
        // 魔剣ヴィルヘルム
        {
            id: "g123_m03",
            name: "魔剣ヴィルヘルム",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/123/Maken.jpg"], type: "base" },
            ]
        },
        // ニケ
        {
            id: "g123_m04",
            name: "ニケ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/123/Nike.jpg"], type: "base" },
            ]
        },
        // パシュ
        {
            id: "g123_m05",
            name: "パシュ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/123/Pash.jpg",
                            "char/123/Pash2.jpg"], type: "base" },
            ]
        },
        // ティファレト
        {
            id: "g123_m06",
            name: "ティファレト",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/123/Tifalet.jpg"], type: "base" },
            ]
        },
        // ヴィルヘルム
        {
            id: "g123_m07",
            name: "ヴィルヘルム",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/123/Wilhelm.jpg",
                            "char/123/Wilhelm2.jpg"], type: "base" },
            ]
        },
        // エリアス
        {
            id: "g123_s01",
            name: "エリアス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Alias.jpg"], type: "base" }
            ]
        },
        // アサカ
        {
            id: "g123_s02",
            name: "アサカ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Asaka.jpg",
                            "char/123/Asaka2.jpg"], type: "base" }
            ]
        },
        // コレット
        {
            id: "g123_s03",
            name: "コレット",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Collette.jpg"], type: "base" }
            ]
        },
        // ギード
        {
            id: "g123_s04",
            name: "ギード",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Ghido.jpg"], type: "base" }
            ]
        },
        // イグニス
        {
            id: "g123_s05",
            name: "イグニス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Ignis.jpg"], type: "base" }
            ]
        },
        // イルダス
        {
            id: "g123_s06",
            name: "イルダス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Ildas.jpg"], type: "base" }
            ]
        },
        // レオニダス
        {
            id: "g123_s07",
            name: "レオニダス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Leonidas.jpg"], type: "base" }
            ]
        },
        // メフィスト
        {
            id: "g123_s08",
            name: "メフィスト",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Mephisto.jpg"], type: "base" }
            ]
        },
        // キオラ
        {
            id: "g123_s09",
            name: "キオラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Qiora.jpg"], type: "base" }
            ]
        },
        // リシャール
        {
            id: "g123_s10",
            name: "リシャール",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Richard.jpg"], type: "base" }
            ]
        },
        // シェラザール
        {
            id: "g123_s11",
            name: "シェラザール",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Serazar.jpg"], type: "base" }
            ]
        },
        // シャオレイ
        {
            id: "g123_s12",
            name: "シャオレイ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Xiaolei.jpg"], type: "base" }
            ]
        },
        // ユリアナ
        {
            id: "g123_s13",
            name: "ユリアナ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/123/Yuriana.jpg",
                            "char/123/Yuriana.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
