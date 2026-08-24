// Side Kicks! beyond
// 开发: 文化放送エクステンド
// 发行: 文化放送エクステンド
// 剧本: minetaka（文化放送エクステンド）
// 音乐: 上倉紀行、伊藤賢治、アネモネ・モーニアン
// 人物设定: すめらぎ琥珀
// 主题歌作曲: 西岡和哉
// 主题歌作词: 森久保祥太郎
// 主题歌演出: 森久保祥太郎
// 原画: すめらぎ琥珀
// joqrextend.co.jp/extend/sidekicks/

// Side Kicks!
// 开发: 文化放送エクステンド、トイボックス株式会社
// 发行: 文化放送エクステンド
// 剧本: Team SK、minetaka、海堂めぐる
// 音乐: 上倉紀行、伊藤賢治
// 人物设定: すめらぎ琥珀
// 主题歌作曲: 井上日徳、森久保祥太郎
// 主题歌作词: 森久保祥太郎
// 主题歌演出: 森久保祥太郎
// 插入歌演出: アネモネ・モーニアン
// 原画: すめらぎ琥珀
// 企画: 文化放送エクステンド
// joqrextend.co.jp/extend/sidekicks/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game088", // 全局唯一ID，不可重复，如 game001
    name: "Side Kicks!beyond",
    year: "2025",
    publisher: ["eXtend"],
    cnStudio: "暂无",
    writer: [
        {name:"minetaka", lang:"en"}
    ],
    art: [
        {name:"すめらぎ琥珀", lang:"ja"}
    ],
    cover: "game/088.jpg", // 相对路径，游戏封面
    charList: [
        // 女イノリ
        {
            id: "g088_f01",
            name: "イノリ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/088/Inori.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // チカ
        {
            id: "g088_m01",
            name: "チカ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Chika.jpg], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ヒバリ
        {
            id: "g088_m02",
            name: "ヒバリ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Hibari.jpg"], type: "base" },
            ]
        },
        // ノラ
        {
            id: "g088_m03",
            name: "ノラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Nora.jpg"], type: "base" },
            ]
        },
        // リコ
        {
            id: "g088_m04",
            name: "リコ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Rico.jpg"], type: "base" },
            ]
        },
        // シシバ
        {
            id: "g088_m05",
            name: "シシバ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Shishiba.jpg"], type: "base" },
            ]
        },
        // タテワキ
        {
            id: "g088_m06",
            name: "タテワキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/088/Tatewaki.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
