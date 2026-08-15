// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game047", // 全局唯一ID，不可重复
    name: "璃梦泡影之世外浮城",
    year: "2025",
    publisher: ["BROCCOLI"],
    cnStudio: "GSE",
    writer: [
        {name:"かずら林檎", lang:"ja"}
    ],
    art: [
        {name:"RiRi", lang:"en"}
    ],
    cover: "game/047.jpg",
    charList: [
        // 雏菊
        {
            id: "g047_f01",
            name: "雏菊",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/047/Hinagiku.jpg",
                            "char/047/Hinagiku2.jpg"], type: "base" }
            ]
        },
        // 淡雪
        {
            id: "g047_m01",
            name: "淡雪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/047/Awayuki.jpg",
                            "char/047/Awayuki2.jpg"], type: "base" }
            ]
        },
        // 帷
        {
            id: "g047_m02",
            name: "帷",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/047/Tobari.jpg",
                            "char/047/Tobari2.jpg"], type: "base" }
            ]
        },
        // 露草
        {
            id: "g047_m03",
            name: "露草",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/047/Tsuyukusa.jpg",
                            "char/047/Tsuyukusa2.jpg"], type: "base" }
            ]
        },
        // 矢代
        {
            id: "g047_m04",
            name: "矢代",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/047/Yashiro.jpg",
                            "char/047/Yashiro2.jpg"], type: "base" }
            ]
        },
        // 依
        {
            id: "g047_m05",
            name: "依",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/047/Yori.jpg",
                            "char/047/Yori2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
