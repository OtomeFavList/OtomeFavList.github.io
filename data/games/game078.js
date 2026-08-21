// ネオンクラッシュ -Echoes of the Lost-
// 中文名: 霓虹三国 -Echoes of the Lost-
// 开发: Voltage, Inc.、AmuLit
// 发行: Voltage, Inc.、欢乐百世
// 剧本: 吉村りりか
// 音乐: 土屋俊輔
// 主题歌演出: 平田志穂子
// 企画: Voltage, Inc.、野原悟史
// 制作人: 野原悟史
// 别名: ネオンクラッシュ
// 平台: Nintendo Switch
// 游戏类型: 女性向けダークファンタジーADV
// 游玩人数: 1人
// 发行日期: 2025-12-11
// 售价: 8,140円
// 导演: 椎名一叶（ボルテージ）
// 原画: 多花緒（ボルテージ）
// products.voltage.co.jp/neonclash/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game078", // 全局唯一ID，不可重复，如 game001
    name: "ネオンクラッシュ -Echoes of the Lost-",
    year: "2025",
    publisher: ["Voltage"],
    cnStudio: "暂无",
    writer: [
        {name:"吉村りりか", lang:"zh"}
    ],
    art: [
        {name:"多花緒", lang:"zh"}
    ],
    cover: "game/078.jpg", // 相对路径，游戏封面
    charList: [
        // リュウ·クロア
        {
            id: "g078_f01",
            name: "リュウ·クロア",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // カンテ·ラウド
        {
            id: "g078_m01",
            name: "カンテ·ラウド",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ソディック·モネ
        {
            id: "g078_m02",
            name: "ソディック·モネ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ソン·マシロ
        {
            id: "g078_m03",
            name: "ソン·マシロ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // チョウ·ヒヨク
        {
            id: "g078_m04",
            name: "チョウ·ヒヨク",
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
