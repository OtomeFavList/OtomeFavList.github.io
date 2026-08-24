// sins of KALEIDO 塔巡りし因果の魔女
// 开发: Voltage, Inc.、AmuLit
// 发行: Voltage, Inc.
// 剧本: 潮文音
// 音乐: 浅野隼人
// 主题歌演出: DUSTCELL
// 导演: 潮文音
// 企画: Voltage, Inc.
// 平台: Nintendo Switch
// 游玩人数: 1人
// 发行日期: 2026-7-16
// 原画: Tana Khaki
// 服装设计: ウニコ
// 背景: 清井fen
// 官方网站: products.voltage.co.jp/kaleido/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game100", // 全局唯一ID，不可重复，如 game001
    name: "sins of KALEIDO 塔巡りし因果の魔女",
    year: "2026",
    publisher: ["Voltage"],
    cnStudio: "暂无",
    writer: [
        {name:"潮文音", lang:"zh"}
    ],
    art: [
        {name:"Tana Khaki", lang:"en"}
    ],
    cover: "game/100.jpg", // 相对路径，游戏封面
    charList: [
        // ヨルカ·ユールウッド
        {
            id: "g100_f01",
            name: "ヨルカ·ユールウッド",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ユージーン
        {
            id: "g100_m01",
            name: "ユージーン",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ヒース·クレセント
        {
            id: "g100_m02",
            name: "ヒース·クレセント",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // カノア·フォルティス
        {
            id: "g100_m03",
            name: "カノア·フォルティス",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // オルセム·ヘルハンド
        {
            id: "g100_m04",
            name: "オルセム·ヘルハンド",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ティルケット·ハルムショー
        {
            id: "g100_m05",
            name: "ティルケット·ハルムショー",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
