// UN:LOGICAL
// 开发: ティズクリエイション株式会社、LicoBiTs
// 发行: ブロッコリー
// 剧本: 谷本透／尾河依／入賀ましろ／株式会社シナリオテクノロジーカガミ／砂原有季
// 音乐: MANYO(まにょっ、Little Wing、六浦館)
// 人物设定: 花邑まい
// 主题歌演出: PENGUIN RESEARCH
// 原画: 花邑まい
// SD原画: うた
// 企画: ティズクリエイション株式会社
// 制作人: 島れいこ
// 别名: アンロジカル
// 平台: Nintendo Switch
// 游戏类型: 女性向け恋愛ADV
// 游玩人数: 1人
// 发行日期: 2026-01-22
// 售价: 通常版：8,580円（税込）
// 限定版：限定 Revelation BOX（リベレーションボックス）：12,980円（税込）
// ダウンロード版：8,580円（税込）
// 链接: ErogameScape
// 官方网站: licobits-game.com/unlogical/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game093", // 全局唯一ID，不可重复，如 game001
    name: "UN:LOGICAL",
    year: "2026",
    publisher: ["BROCCOLI","LicoBiTs"],
    cnStudio: "暂无",
    writer: [
        {name:"谷本透", lang:"zh"},
        {name:"尾河依", lang:"zh"},
        {name:"入賀ましろ", lang:"zh"},
        {name:"株式会社シナリオテクノロジーカガミ", lang:"zh"},
        {name:"砂原有季", lang:"zh"}
    ],
    art: [
        {name:"花邑まい", lang:"zh"},
        {name:"うた", lang:"ja"}
    ],
    cover: "game/093.jpg", // 相对路径，游戏封面
    charList: [
        // 涼乃環無
        {
            id: "g093_f01",
            name: "涼乃環無",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g093_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g093_m02",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g093_m03",
            name: "男主3",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g093_m04",
            name: "男主4",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g093_m05",
            name: "男主5",
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
