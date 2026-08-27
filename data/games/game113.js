崩坏世界的指引之人
开发: Primula
剧本: 中山智美
音乐: solfa
人物设定: じく
原画: じく
导演: 犬小屋権太
企画: Primula
别名: Navigatore of the Ruined World
官方网站: primula.jpn.com/hounavi/index.html

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game1", // 全局唯一ID，不可重复，如 game001
    name: "崩坏世界的指引之人",
    year: "2026",
    publisher: ["Primula"],
    cnStudio: "pencil",
    writer: [
        {name:"中山智美", lang:"zh"}
    ],
    art: [
        {name:"じく", lang:"ja"}
    ],
    cover: "game/113.jpg", // 相对路径，游戏封面
    charList: [
        // 桃井ひかり
        {
            id: "g113_f01",
            name: "桃井ひかり",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 夏秋冬実果
        {
            id: "g113_m01",
            name: "夏秋冬実果",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
