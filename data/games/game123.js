戦場の円舞曲
开发: オトメイト
发行: アイディアファクトリー株式会社
剧本: 片桐由摩
音乐: 堀江晶太(kemu、塚本けむ)
人物设定: 武村ゆみこ
主题歌作曲: 堀江晶太
主题歌演出: アキノ、bless4
原画: 武村ゆみこ
导演: 大野博規
官方网站: otomate.jp/waltz/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
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
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
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
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
