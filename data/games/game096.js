// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game096", // 全局唯一ID，不可重复，如 game001
    name: "闇色の魔珠",
    year: "2025",
    publisher: ["Daisy²"],
    cnStudio: "暂无",
    writer: [
        {name:"雨宮うた", lang:"zh"}
    ],
    art: [
        {name:"めろ", lang:"ja"}
    ],
    cover: "game/096.jpg", // 相对路径，游戏封面
    charList: [
        // ガリカ·ローサ·スターニス
        {
            id: "g096_f01",
            name: "ガリカ·ローサ·スターニス",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/096/Garika.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // キャル·アイ·ミガット
        {
            id: "g096_m01",
            name: "キャル·アイ·ミガット",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/096/Cal.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // フィン·シディム·スターニス
        {
            id: "g096_m02",
            name: "フィン·シディム·スターニス",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/096/Fin.jpg"], type: "base" },
            ]
        },
        // グラン·エリコ·プレゼンス
        {
            id: "g096_m03",
            name: "グラン·エリコ·プレゼンス",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/096/Gran.jpg"], type: "base" },
            ]
        },
        // シルヴァ
        {
            id: "g096_m04",
            name: "シルヴァ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/096/Silva.jpg"], type: "base" },
            ]
        },
        // ヴィクトル·エリコ·ミガット
        {
            id: "g096_m05",
            name: "ヴィクトル·エリコ·ミガット",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/096/Victor.jpg"], type: "base" },
            ]
        },
        // アドナイ
        {
            id: "g096_s01",
            name: "アドナイ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/096/Adonai.jpg"], type: "base" }
            ]
        },
        // アニス·エリコ·プレゼンス
        {
            id: "g096_s02",
            name: "アニス·エリコ·プレゼンス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/096/Anis.jpg"], type: "base" }
            ]
        },
        // ビルシャ·シディム·スターニス
        {
            id: "g096_s03",
            name: "ビルシャ·シディム·スターニス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/096/Birsha.jpg"], type: "base" }
            ]
        },
        // カルドゥエーリス·エリコ·ホレグ
        {
            id: "g096_s04",
            name: "カルドゥエーリス·エリコ·ホレグ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/096/Carduelis.jpg"], type: "base" }
            ]
        },
        // クーラ·エリコ·プレゼンス
        {
            id: "g096_s05",
            name: "クーラ·エリコ·プレゼンス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/096/Cura.jpg"], type: "base" }
            ]
        },
        // レメク
        {
            id: "g096_s06",
            name: "レメク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/096/Lamech.jpg"], type: "base" }
            ]
        },
        // リヒトオート·リブナ·シャローシュ
        {
            id: "g096_s07",
            name: "リヒトオート·リブナ·シャローシュ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/096/Lichtort.jpg"], type: "base" }
            ]
        },
        // リルモッド·エリコ·ミガッド
        {
            id: "g096_s08",
            name: "リルモッド·エリコ·ミガッド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/096/Lilmod.jpg"], type: "base" }
            ]
        },
        // ミシュマール·リブナ·ヴァーチュ
        {
            id: "g096_s09",
            name: "ミシュマール·リブナ·ヴァーチュ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/096/Mishmar.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
