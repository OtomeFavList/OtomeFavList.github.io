// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game128", // 全局唯一ID，不可重复，如 game001
    name: "神々の悪戯 Unite Edition",
    year: "2022",
    publisher: ["BROCCOLI"],
    cnStudio: "暂无",
    writer: [
        {name:"武口碧", lang:"zh"},
        {name:"櫻間ろに", lang:"zh"},
        {name:"ひらやま", lang:"ja"}
    ],
    art: [
        {name:"カズキヨネ", lang:"ja"}
    ],
    cover: "game/128.jpg", // 相对路径，游戏封面
    charList: [
        // 草薙結衣
        {
            id: "g128_f01",
            name: "草薙結衣",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/128/Yui.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 戸塚陽
        {
            id: "g128_m01",
            name: "戸塚陽1",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Akira.jpg",
                            "char/128/Akira2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アヌビス·マアト
        {
            id: "アヌビス·マアト",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Anubis.jpg",
                            "char/128/Anubis2.jpg"], type: "base" },
            ]
        },
        // アポロン·アガナ·ベレア
        {
            id: "g128_m03",
            name: "アポロン·アガナ·ベレア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Apollon.jpg",
                            "char/128/Apollon2.jpg"], type: "base" },
            ]
        },
        // バルドル·フリングホルニ
        {
            id: "g128_m04",
            name: "バルドル·フリングホルニ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Balder.jpg",
                            "char/128/Balder2.jpg"], type: "base" },
            ]
        },
        // ディオニュソス·テュルソス
        {
            id: "g128_m05",
            name: "ディオニュソス·テュルソス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Dionysus.jpg",
                            "char/128/Dionysus2.jpg"], type: "base" },
            ]
        },
        // ハデス·アイドネウス
        {
            id: "g128_m06",
            name: "ハデス·アイドネウス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Hades.jpg",
                            "char/128/Hades2.jpg"], type: "base" },
            ]
        },
        // ロキ·レーヴァテイン
        {
            id: "g128_m07",
            name: "ロキ·レーヴァテイン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Loki.jpg",
                            "char/128/Loki2.jpg"], type: "base" },
            ]
        },
        // メリッサ
        {
            id: "g128_m08",
            name: "メリッサ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Melissa.jpg",
                            "char/128/Melissa2.jpg",
                            "char/128/Melissa3.jpg"], type: "base" },
            ]
        },
        // 戸塚尊
        {
            id: "g128_m09",
            name: "戸塚尊",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Takeru.jpg",
                            "char/128/Takeru2.jpg"], type: "base" },
            ]
        },
        // トール·メギンギョルズ
        {
            id: "g128_m10",
            name: "トール·メギンギョルズ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Thor.jpg",
                            "char/128/Thor2.jpg"], type: "base" },
            ]
        },
        // トト·カドゥケウス
        {
            id: "g128_m11",
            name: "トト·カドゥケウス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Thoth.jpg",
                            "char/128/Thoth2.jpg"], type: "base" },
            ]
        },
        // 戸塚月人
        {
            id: "g128_m12",
            name: "戸塚月人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/128/Tsukito.jpg",
                            "char/128/Tsukito2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
