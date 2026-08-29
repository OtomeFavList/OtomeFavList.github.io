// 君に惑い、君に溺れる。
// 开发: オトメイト、デザインファクトリー
// 发行: アイディアファクトリー
// 剧本: Re,AER
// 监修: 一ジョー
// 别名: わくでき
// 平台: Nintendo Switch
// 游戏类型: 女性向け恋愛ADV
// 游玩人数: 1
// 发行日期: 2026-07-30
// 售价: 通常版　8,580円（税込）
// 特装版　10,780円（税込）
// ダウンロード版　8,580円（税込）
// 导演: 大山小波
// 原画: 董火
// 官方网站: otomate.jp/kiminimadoi/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game098", // 全局唯一ID，不可重复，如 game001
    name: "君に惑い、君に溺れる。",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"合同会社Re,AER", lang:"zh"}
    ],
    art: [
        {name:"董火", lang:"zh"}
    ],
    cover: "game/098.jpg", // 相对路径，游戏封面
    charList: [
        // 露木紗世
        {
            id: "g098_f01",
            name: "露木紗世",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/098/Sayo.jpg",
                            "char/098/Sayo2.jpg",
                            "char/098/Sayo3.jpg",
                            "char/098/Sayo4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 山科瑛
        {
            id: "g098_m01",
            name: "山科瑛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/098/Akira.jpg",
                            "char/098/Akira2.jpg",
                            "char/098/Akira3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 棗陽凪
        {
            id: "g098_m02",
            name: "棗陽凪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/098/Hinagi.jpg",
                            "char/098/Hinagi2.jpg",
                            "char/098/Hinagi3.jpg",
                            "char/098/Hinagi4.jpg"], type: "base" },
            ]
        },
        // 日下部恭也
        {
            id: "g098_m03",
            name: "日下部恭也",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/098/Kyouya.jpg",
                            "char/098/Kyouya2.jpg",
                            "char/098/Kyouya3.jpg",
                            "char/098/Kyouya4.jpg"], type: "base" },
            ]
        },
        // 瀬尾叶多
        {
            id: "g098_m04",
            name: "瀬尾叶多",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/098/Seo.jpg",
                            "char/098/Seo2.jpg",
                            "char/098/Seo3.jpg",
                            "char/098/Seo4.jpg"], type: "base" },
            ]
        },
        // 露木理都
        {
            id: "g098_m05",
            name: "露木理都",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/098/Tsuyuki.jpg",
                            "char/098/Tsuyuki2.jpg",
                            "char/098/Tsuyuki3.jpg",
                            "char/098/Tsuyuki4.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
