// Blackish House sideA→ -Retour-
// 开发: honeybee black
// 发行: アリスマティック、エディア
// 人物设定: カズアキ
// 平台: Nintendo Switch
// 官方网站: honeybee-cd.com/BlackishHouse/switch_sideA/

// Blackish House sideA→
// 开发: honeybee black
// 发行: honeybee black
// 剧本: 中村幸代（円线）、みなづきともこ、ゆずみやともめ、乙月ありさ、伊原恵、桜ゆづき、柿本悠理、煌矢まな、谷村知子
// 人物设定: カズアキ
// 主题歌作曲: あるるかん
// 主题歌作词: あるるかん
// 主题歌演出: 石川界人
// 插入歌演出: 蒼井翔太
// 原画: カズアキ
// 导演: 高木彩佳（共通、公演部分、其它3线）
// 平台: PC
// 游戏类型: ダメ人間カウンセリング恋愛ADV
// 游玩人数: 1
// 发行日期: 2016-08-26
// 售价:
// 通常版 6,264 円
// 初回限定版 8,424 円
// 官方网站: honeybee-cd.com/BlackishHouse/sideA/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game090", // 全局唯一ID，不可重复，如 game001
    name: "Blackish House sideA→ -Retour-",
    year: "2025",
    publisher: ["honeybee black"],
    cnStudio: "暂无",
    writer: [
        {name:"中村幸代", lang:"zh"},
        {name:"乙月ありさ", lang:"zh"},
        {name:"伊原恵", lang:"zh"},
        {name:"桜ゆづき", lang:"zh"},
        {name:"柿本悠理", lang:"zh"},
        {name:"煌矢まな", lang:"zh"},
        {name:"谷村知子", lang:"zh"},
        {name:"みなづきともこ", lang:"ja"},
        {name:"ゆずみやともめ", lang:"ja"}
    ],
    art: [
        {name:"カズアキ", lang:"ja"}
    ],
    cover: "game/090.jpg", // 相对路径，游戏封面
    charList: [
        // 亜麻乃雛
        {
            id: "g090_f01",
            name: "亜麻乃雛",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/090/Hina.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 姫崎藤吾
        {
            id: "g090_m01",
            name: "姫崎藤吾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/090/Kisaki.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 久世円
        {
            id: "g090_m02",
            name: "久世円",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/090/Kuze.jpg"], type: "base" },
            ]
        },
        // 宇賀神澪
        {
            id: "g090_m03",
            name: "宇賀神澪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/090/Rei.jpg"], type: "base" },
            ]
        },
        // 椎葉剛
        {
            id: "g090_m04",
            name: "椎葉剛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/090/Shiiba.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
