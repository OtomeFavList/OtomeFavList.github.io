忍び、恋うつつ
中文名: 恋爱忍法帖
开发: オトメイト
发行: アイディアファクトリー株式会社
剧本: 株式会社エッジワークス、ムネオカミエ、狐塚冬里、カナエアリス
人物设定: 中村龍徳
主题歌作曲: 川上博之、rino
主题歌演出: 織田かおり
原画: 中村龍徳
导演: 藤村マオ
官方网站: otomate.jp/nin_koi/
switch版网站：

忍び、恋うつつ ― 雪月花恋絵巻 ―
开发: オトメイト
剧本: 狐塚冬里、桜葉ユウ、カナエアリス、ムネオカミエ
主题歌作曲: myu
主题歌演出: 織田かおり
原画: 中村龍徳
官方网站: otomate.jp/nin_koi/vita/

忍び、恋うつつ ― 甘蜜花絵巻 ―
开发: オトメイト
发行: アイディアファクトリー株式会社
剧本: カナエアリス
人物设定: 中村龍徳
主题歌演出: ヒサノ
原画: 中村龍徳
主题歌作曲: 鞠
主题歌作词: 言乃葉たま
链接: ErogameScape VNDB
官方网站: otomate.jp/nin_koi/kanmitsu/

忍び、恋うつつ ― 万花彩絵巻 ―
开发: オトメイト
发行: アイディアファクトリー株式会社
人物设定: 中村龍徳
主题歌演出: ヒサノ
平台:
PS4 Nintendo Switch
官方网站: otomate.jp/nin_koi/banka/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game121", // 全局唯一ID，不可重复，如 game001
    name: "忍び、恋うつつ",
    year: "2020",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"株式会社エッジワークス", lang:"zh"},
        {name:"狐塚冬里", lang:"zh"},
        {name:"桜葉ユウ", lang:"zh"},
        {name:"ムネオカミエ", lang:"ja"},
        {name:"カナエアリス", lang:"ja"}
    ],
    art: [
        {name:"中村龍徳", lang:"zh"}
    ],
    cover: "game/121.jpg", // 相对路径，游戏封面
    charList: [
        // 片桐かえで
        {
            id: "g121_f01",
            name: "片桐かえで",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 穴山大介
        {
            id: "g121_m01",
            name: "穴山大介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 我来也
        {
            id: "g121_m02",
            name: "我来也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 服部半蔵
        {
            id: "g121_m03",
            name: "服部半蔵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 豊臣秀虎
        {
            id: "g121_m04",
            name: "豊臣秀虎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 霧隠蔵人
        {
            id: "g121_m05",
            name: "霧隠蔵人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 真田幸影
        {
            id: "g121_m06",
            name: "真田幸影",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 猿飛咲助
        {
            id: "g121_m07",
            name: "猿飛咲助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 霧隠忠人
        {
            id: "g121_m08",
            name: "霧隠忠人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 宇喜多義家
        {
            id: "g121_m09",
            name: "宇喜多義家",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 由利鎌清
        {
            id: "g121_m10",
            name: "由利鎌清",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
