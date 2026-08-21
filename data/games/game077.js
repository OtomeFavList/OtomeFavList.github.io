// 中文名: DYNAMIC CHORD 动态和弦 feat.Liar-S Remaster edition
// 开发: honeybee black
// 发行: アリスマティック、dramatic create、欢乐百世
// 人物设定: 冨士原良
// 原画: 冨士原良
// 别名: ダイナミックコード フィーチャリング ライアーズ リマスター エディション
// honeybee-cd.com/dynamic/switch-liar/

// DYNAMIC CHORD feat.Liar-S
// 剧本: Plot：高木彩佳；执笔：もち大福、株式会社エッジワークス（浅生柚子、相川暁子、森田彩莉、桜ゆづき、葉山いずみ）
// honeybee-cd.com/dynamic/liar/index.html

// DYNAMIC CHORD feat.Liar-S Append Disc
// 剧本: 桜ゆづき、相川暁子、葉山いずみ
// honeybee-cd.com/dynamic/liar/append.html

// DYNAMIC CHORD feat.Liar-S V edition
// 开发: honeybee black
// 发行: honeybee black
// 剧本: もち大福、株式会社エッジワークス、桜ゆづき、森田彩莉、浅生柚子、相川暁子、葉山いずみ
// 人物设定: 冨士原良
// 原画: 冨士原良
// honeybee-cd.com/dynamic/vita-liar/index.html

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game077", // 全局唯一ID，不可重复，如 game001
    name: "DYNAMIC CHORD feat.Liar-S Remaster edition",
    year: "2025",
    publisher: ["dramatic create","honeybee black"],
    cnStudio: "暂无",
    writer: [
        {name:"高木彩佳", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"相川暁子", lang:"zh"},
        {name:"森田彩莉", lang:"zh"},
        {name:"桜ゆづき", lang:"zh"},
        {name:"葉山いずみ", lang:"zh"},
        {name:"もち大福", lang:"ja"}
    ],
    art: [
        {name:"冨士原良", lang:"zh"}
    ],
    cover: "game/077.jpg", // 相对路径，游戏封面
    charList: [
        // 双海仁菜
        {
            id: "g077_f01",
            name: "双海仁菜",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 榛名宗太郎
        {
            id: "g077_m01",
            name: "榛名宗太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 檜山朔良
        {
            id: "g077_m02",
            name: "檜山朔良",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 珠洲乃千哉
        {
            id: "g077_m03",
            name: "珠洲乃千哉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 結崎芹
        {
            id: "g077_m04",
            name: "結崎芹",
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
