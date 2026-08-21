// Panic Palette
// 中文名: 恐慌调色盘
// 开发: TAKUYO
// 发行: TAKUYO
// 剧本: 井上愁、藤元（藤文）
// 人物设定: 仁神ユキタカ
// 主题歌作曲: 森藤晶司、ざっとん、カケリネ
// 主题歌作词: CAO、アキレスKEN、カケリネ
// 主题歌演出: flaque、ラムソアーズ
// 原画: 仁神ユキタカ
// 别名: Panic Palette~パニック パレット~
// takuyo.co.jp/products/panipare/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game083", // 全局唯一ID，不可重复，如 game001
    name: "Panic Palette",
    year: "2025",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"井上愁", lang:"zh"},
        {name:"藤元", lang:"zh"},
    ],
    art: [
        {name:"仁神ユキタカ", lang:"zh"}
    ],
    cover: "game/083.jpg", // 相对路径，游戏封面
    charList: [
        // 依藤亜貴
        {
            id: "g083_f01",
            name: "依藤亜貴",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 烏羽一徒
        {
            id: "g083_m01",
            name: "烏羽一徒",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 真朱柑
        {
            id: "g083_m02",
            name: "真朱柑",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 乃凪範尚
        {
            id: "g083_m03",
            name: "乃凪範尚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 内沼葛
        {
            id: "g083_m04",
            name: "内沼葛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 白原尋也
        {
            id: "g083_m05",
            name: "白原尋也",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 黄朽葉宰
        {
            id: "g083_m06",
            name: "黄朽葉宰",
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
