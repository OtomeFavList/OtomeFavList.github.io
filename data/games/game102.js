// My9Swallows TOPSTARS LEAGUE
// 开发: オトメイト
// 发行: オトメイト、アイディアファクトリー
// 剧本: メインシナリオ：紅原香 シナリオ：中山智美、暦野まち（詠野万知子）、坂本はしら、堂島チロル
// 原画：凪月つばさ
// 音乐: TrioDesign
// 主题歌作曲: 杉浦勇紀
// 主题歌作词: 杉浦勇紀
// 主题歌演出: 八代拓、堀江瞬、小松昌平、島倉凱隼、廣瀬大介、松岡禎丞、熊谷健太郎、笠間淳、羽多野渉
// 平台: Nintendo Switch
// 游戏类型: 野球とエンタメの新感覚恋愛ADV
// 游玩人数: 1
// 发行日期: 2024-08-29
// 售价:
// 通常版 8,580 円
// 特装版 10,780 円
// オトメイト スイート BOX 18,700 円
// ＤＬ版 8,580 円
// 导演: 瑞澤李和
// 链接: ErogameScape
// 官方网站: otomate.jp/my9swallows/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game102", // 全局唯一ID，不可重复，如 game001
    name: "My9Swallows TOPSTARS LEAGUE",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"紅原香", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"暦野まち", lang:"zh"},
        {name:"坂本はしら", lang:"zh"},
        {name:"堂島チロル", lang:"zh"}
    ],
    art: [
        {name:"凪月つばさ", lang:"zh"}
    ],
    cover: "game/102.jpg", // 相对路径，游戏封面
    charList: [
        // 杉沢つばめ
        {
            id: "g102_f01",
            name: "杉沢つばめ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/102/Tsubame.jpg",
                            "char/102/Tsubame2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 甘城奏汰
        {
            id: "g102_m01",
            name: "甘城奏汰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Amagi.jpg",
                            "char/102/Amagi2.jpg",
                            "char/102/Amagi3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // クラン
        {
            id: "g102_m02",
            name: "クラン",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Clan.jpg",
                            "char/102/Clan2.jpg",
                            "char/102/Clan3.png"], type: "base" },
            ]
        },
        // 時透晴生
        {
            id: "g102_m03",
            name: "時透晴生",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Haruki.jpg",
                            "char/102/Haruki2.jpg",
                            "char/102/Haruki3.png"], type: "base" },
            ]
        },
        // 柊翔琉
        {
            id: "g102_m04",
            name: "柊翔琉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Hiiragi.jpg",
                            "char/102/Hiiragi2.jpg",
                            "char/102/Hiiragi3.png"], type: "base" },
            ]
        },
        // 永末尋斗
        {
            id: "g102_m05",
            name: "永末尋斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Hiroto.jpg",
                            "char/102/Hiroto2.jpg",
                            "char/102/Hiroto3.png"], type: "base" },
            ]
        },
        // 紗武郁実
        {
            id: "g102_m06",
            name: "紗武郁実",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Ikumi.jpg",
                            "char/102/Ikumi2.jpg",
                            "char/102/Ikumi3.png"], type: "base" },
            ]
        },
        // ミラ
        {
            id: "g102_m07",
            name: "ミラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Milla.jpg",
                            "char/102/Milla2.jpg",
                            "char/102/Milla3.png"], type: "base" },
            ]
        },
        // 仲大路蓮
        {
            id: "g102_m08",
            name: "仲大路蓮",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Renn.jpg",
                            "char/102/Renn2.jpg",
                            "char/102/Renn3.png"], type: "base" },
            ]
        },
        // 司良堂達治
        {
            id: "g102_m09",
            name: "司良堂達治",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/102/Tatsuji.jpg",
                            "char/102/Tatsuji2.jpg",
                            "char/102/Tatsuji3.png"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
