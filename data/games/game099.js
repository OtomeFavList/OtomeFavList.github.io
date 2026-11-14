// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game099", // 全局唯一ID，不可重复，如 game001
    name: "CRAZY CHA!N -エルピスの鎖-",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"中山智美", lang:"zh"}
    ],
    art: [
        {name:"読", lang:"zh"}
    ],
    cover: "game/099.jpg", // 相对路径，游戏封面
    charList: [
        // ソフィア
        {
            id: "g099_f01",
            name: "ソフィア",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/099/Sophia.jpg",
                            "char/099/Sophia2.jpg",
                            "char/099/Sophia3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // クロノール
        {
            id: "g099_m01",
            name: "クロノール",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/Cronoll.jpg",
                            "char/099/Cronoll2.jpg",
                            "char/099/Cronoll3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // フラトニス·ライラプス
        {
            id: "g099_m02",
            name: "フラトニス·ライラプス",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/Flatnis.jpg",
                            "char/099/Flatnis2.jpg",
                            "char/099/Flatnis3.jpg"], type: "base" },
            ]
        },
        // God
        {
            id: "g099_m03",
            name: "God",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/God.jpg",
                            "char/099/God2.jpg",
                            "char/099/God3.jpg"], type: "base" },
            ]
        },
        // リーズ·ルネ·シャナ
        {
            id: "g099_m04",
            name: "リーズ·ルネ·シャナ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/Lise.jpg",
                            "char/099/Lise2.jpg",
                            "char/099/Lise3.jpg"], type: "base" },
            ]
        },
        // レクス·ド·クラーシェル
        {
            id: "g099_m05",
            name: "レクス·ド·クラーシェル",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/Rex.jpg",
                            "char/099/Rex2.jpg",
                            "char/099/Rex3.jpg"], type: "base" },
            ]
        },
        // ヴァーデス
        {
            id: "g099_m06",
            name: "ヴァーデス",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/Vardis.jpg",
                            "char/099/Vardis2.jpg",
                            "char/099/Vardis3.jpg"], type: "base" },
            ]
        },
        // アルト
        {
            id: "g099_s01",
            name: "アルト",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/099/Alto.jpg",
                            "char/099/Alto2.jpg"], type: "base" }
            ]
        },
        // カルム·ド·クラーシェル
        {
            id: "g099_s02",
            name: "カルム·ド·クラーシェル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/099/Calme.jpg",
                            "char/099/Calme2.jpg"], type: "base" }
            ]
        },
        // キャスパー
        {
            id: "g099_s03",
            name: "キャスパー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/099/Casper.jpg"], type: "base" }
            ]
        },
        // デュランダル
        {
            id: "g099_s04",
            name: "デュランダル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/099/Durandal.jpg",
                            "char/099/Durandal2.jpg"], type: "base" }
            ]
        },
        // イザーク·アージェンス
        {
            id: "g099_s05",
            name: "イザーク·アージェンス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/099/Isaac.jpg",
                            "char/099/Isaac2.jpg"], type: "base" }
            ]
        },
        // ノックス·フォル·アルベド
        {
            id: "g099_s06",
            name: "ノックス·フォル·アルベド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/099/Knox.jpg",
                            "char/099/Knox2.jpg"], type: "base" }
            ]
        },
        // リビティナ
        {
            id: "g099_s07",
            name: "リビティナ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/099/Libitina.jpg",
                            "char/099/Libitina2.jpg"], type: "base" }
            ]
        },
        // リコールド
        {
            id: "g099_s08",
            name: "リコールド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/099/Ricold.jpg",
                            "char/099/Ricold2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
