猛獣使いと王子様 ～Flower ＆ Snow～
开发: オトメイト
发行: Design Factory、アイディアファクトリー、デザインファクトリー
原画: miko
剧本: 山崎浅吏
链接: ErogameScape VNDB
官方网站: otomate.jp/beast/flower_snow/

猛獣使いと王子様
开发: design factory、オトメイト、デザインファクトリー
发行: design factory、アイディアファクトリー株式会社、オトメイト、デザインファクトリー
剧本: シナリオライター：山崎浅吏 サブライター：ちゃい、森田彩莉、吉村りりか、ムネオカミエ、桜葉ユウ
主题歌作词: こだまさおり、瀬名
主题歌演出: 結城アイラ
原画: miko、佐倉たくと
导演: 中村和騎
人物设定: miko
主题歌作曲: TODA KOHEI、瀬名
官方网站: otomate.jp/beast_psp

猛獣使いと王子様 ～Snow Bride～
开发: オトメイト、Design Factory、デザインファクトリー
发行: アイディアファクトリー株式会社、オトメイト、Design Factory、デザインファクトリー
剧本: 山本浅吏、山崎浅吏
主题歌作词: しほり
主题歌演出: 結城アイラ
原画: miko、佐倉たくと
人物设定: miko
主题歌作曲: TODA KOHEI
官方网站: otomate.jp/beast_fd_psp/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game117", // 全局唯一ID，不可重复，如 game001
    name: "猛獣使いと王子様 ~Flower & Snow~",
    year: "2019",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"山崎浅吏", lang:"zh"},
        {name:"森田彩莉", lang:"zh"},
        {name:"吉村りりか", lang:"zh"},
        {name:"桜葉ユウ", lang:"zh"},
        {name:"ちゃい", lang:"ja"},
        {name:"ムネオカミエ", lang:"ja"}
    ],
    art: [
        {name:"miko", lang:"en"}
    ],
    cover: "game/117.jpg", // 相对路径，游戏封面
    charList: [
        // ティアナ
        {
            id: "g117_f01",
            name: "ティアナ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アルフレード
        {
            id: "g117_m01",
            name: "アルフレード",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // エリク
        {
            id: "g117_m02",
            name: "エリク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // クラウス
        {
            id: "g117_m03",
            name: "クラウス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ルシア
        {
            id: "g117_m04",
            name: "ルシア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // マティアス
        {
            id: "g117_m05",
            name: "マティアス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
        // シルビオ
        {
            id: "g117_m06",
            name: "シルビオ",
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
