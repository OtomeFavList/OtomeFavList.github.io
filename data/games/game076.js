// 中文名: 十鬼之绊 for Nintendo Switch
// 开发: オトメイト、Design Factory、デザインファクトリー
// 发行: アイディアファクトリー、欢乐百世
// 原画: miko
// SD原画: うた
// 制作人: 藤澤経清
// 剧本: 春日直登、長野和泉
// otomate.jp/toki/switch/

// 中文名: 十鬼之绊 关原奇谭
// 开发: オトメイト、デザインファクトリー
// 发行: アイディアファクトリー株式会社
// 剧本: 長野和泉、春河ミライ、春日直登、里家雅猛、七海ユウリ
// 人物设定: miko
// 主题歌作曲: 出羽良彰、井内舞子
// 主题歌作词: 黒崎真音
// 主题歌演出: Ray、黒崎真音
// 原画: miko
// SD原画: うた
// 制作人: 藤澤経清
// 别名: 十鬼の絆
// otomate-p.jp/game/game-112/
// otomate.jp/toki/

// 中文名: 十鬼之绊 花结缀
// 开发: オトメイト、デザインファクトリー
// 发行: アイディアファクトリー株式会社
// 剧本: 茂木あや、春河ミライ
// 人物设定: miko
// 主题歌作曲: fu_mou、中沢伴行、出羽良彰
// // 主题歌作词: 黒崎真音
// 主题歌演出: Ray、黒崎真音
// 原画: miko
// SD原画: うた
// 制作人: 藤澤経清
// otomate.jp/toki/fd/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game076", // 全局唯一ID，不可重复，如 game001
    name: "十鬼之绊",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"長野和泉", lang:"zh"},
        {name:"春河ミライ", lang:"zh"},
        {name:"春日直登", lang:"zh"},
        {name:"里家雅猛", lang:"zh"},
        {name:"七海ユウリ", lang:"zh"},
        {name:"茂木あや", lang:"zh"}
    ],
    art: [
        {name:"うた", lang:"ja"},
        {name:"miko", lang:"en"}
    ],
    cover: "game/076.jpg", // 相对路径，游戏封面
    charList: [
        // 涼森雪奈
        {
            id: "g076_f01",
            name: "涼森雪奈",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/076/Yukina.jpg",
                            "char/076/Yukina2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 千歳
        {
            id: "g076_m01",
            name: "千歳",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/076/Chitose.jpg",
                            "char/076/Chitose2.jpg",
                            "char/076/Chitose3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 千岳
        {
            id: "g076_m02",
            name: "千岳",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/076/Kazutake.jpg",
                            "char/076/Kazutake2.jpg",
                            "char/076/Kazutake3.jpg",], type: "base" },
            ]
        },
        // 千耶
        {
            id: "g076_m03",
            name: "千耶",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/076/Kazuya.jpg",
                            "char/076/Kazuya2.jpg",
                            "char/076/Kazuya3.jpg"], type: "base" },
            ]
        },
        // 千鬼丸
        {
            id: "g076_m04",
            name: "千鬼丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/076/Senkimaru.jpg",
                            "char/076/Senkimaru2.jpg"], type: "base" },
            ]
        },
        // 秦
        {
            id: "g076_m05",
            name: "男主5",
            gender: "秦",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/076/Shin.jpg",
                            "img/char/076/Shin2.jpg",
                            "img/char/076/Shin3.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
