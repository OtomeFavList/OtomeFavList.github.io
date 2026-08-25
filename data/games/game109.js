// Le Mirage Mystique
// 开发: ティズクリエイション株式会社、LicoBiTs
// 发行: 株式会社ブロッコリー
// 剧本: メインシナリオ：いちの恵理（かずら本舗）、シナリオディレクション：かずら林檎（かずら本舗）
// 音乐: 和田俊輔
// 人物设定: およ
// 原画: およ
// 监修: かずら林檎
// 企画: ティズクリエイション株式会社
// 制作人: 高村旭
// 别名: ル ミラージュ ミスティーク
// 平台: Nintendo Switch
// 游戏类型: 女性向け恋愛ADV
// 游玩人数: 1人
// 发行日期: 2026-09-17
// 导演: 佐東樹
// 链接: X
// 官方网站: licobits-game.com/mirage/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game109", // 全局唯一ID，不可重复，如 game001
    name: "Le Mirage Mystique",
    year: "2026",
    publisher: ["BROCCOLI","LicoBiTs"],
    cnStudio: "暂无",
    writer: [
        {name:"かずら林檎", lang:"ja"},
        {name:"いちの恵理", lang:"ja"}
    ],
    art: [
        {name:"およ", lang:"ja"}
    ],
    cover: "game/109.jpg", // 相对路径，游戏封面
    charList: [
        // アリア·ラプラード
        {
            id: "g109_f01",
            name: "アリア·ラプラード",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: true,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // シャルル·パラディール
        {
            id: "g109_m01",
            name: "シャルル·パラディール",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // エヴァン·クロフォード
        {
            id: "g109_m02",
            name: "エヴァン·クロフォード",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ジャック·レスター
        {
            id: "g109_m03",
            name: "ジャック·レスター",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // レオン·ヴィトリー
        {
            id: "g109_m04",
            name: "レオン·ヴィトリー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ルディ·ロシュフォール
        {
            id: "g109_m05",
            name: "ルディ·ロシュフォール",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
