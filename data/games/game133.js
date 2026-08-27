ひめひび 1学期 -Princess Days-
开发: TAKUYO
剧本: 柚木隼人 小野真太郎　藤元（藤文）　Nao@猫の手
主题歌作曲: 森藤晶司
原画: 仁神ユキタカ
主题歌作词: CAO、アキレスKEN
主题歌演出: flaque
http://www.takuyo.co.jp/products/himehibi_switch/
http://www.takuyo.co.jp/products/himehibi/himehibi_portable.html
http://www.takuyo.co.jp/products/himehibi/himehibivita/
takuyo.co.jp/products/himehibi/index.html

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game133", // 全局唯一ID，不可重复，如 game001
    name: "ひめひび -Princess Days-",
    year: "2020",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"柚木隼人", lang:"zh"},
        {name:"小野真太郎", lang:"zh"},
        {name:"藤文", lang:"zh"},
        {name:"NaO@猫の手", lang:"en"}
    ],
    art: [
        {name:"仁神ユキタカ", lang:"zh"}
    ],
    cover: "game/133.jpg", // 相对路径，游戏封面
    charList: [
        // 相崎恋
        {
            id: "g133_f01",
            name: "相崎恋",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 夏八木光
        {
            id: "g133_m01",
            name: "夏八木光",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 速水尚仁
        {
            id: "g133_m02",
            name: "速水尚仁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 柏木林斗
        {
            id: "g133_m03",
            name: "柏木林斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 月元忍
        {
            id: "g133_m04",
            name: "月元忍",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 天城寺雅哉
        {
            id: "g133_m05",
            name: "天城寺雅哉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 高城大和
        {
            id: "g133_m06",
            name: "高城大和",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
