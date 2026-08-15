// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game064", // 全局唯一ID，不可重复
    name: "圣灵家族-Rinato-",
    year: "2026",
    publisher: ["Comfort","HuneX"],
    cnStudio: "GSE",
    writer: [
        {name:"楠まどか", lang:"zh"}
    ],
    art: [
        {name:"さらちよみ", lang:"ja"}
    ],
    cover: "game/064.jpg",
    charList: [
        // 菲丽琪塔
        {
            id: "g064_f01",
            name: "菲丽琪塔",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Felicita.jpg",
                            "char/064/Felicita2.jpg"], type: "base" }
            ]
        },
        // 但丁
        {
            id: "g064_m01",
            name: "但丁",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Dante.jpg",
                            "char/064/Dante2.jpg"], type: "base" }
            ]
        },
        // 戴维特
        {
            id: "g064_m02",
            name: "戴维特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Debito.jpg",
                            "char/064/Debito2.jpg"], type: "base" }
            ]
        },
        // 乔利
        {
            id: "g064_m03",
            name: "乔利",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Jolly.jpg",
                            "char/064/Jolly2.jpg"], type: "base" }
            ]
        },
        // 利贝罗塔
        {
            id: "g064_m04",
            name: "利贝罗塔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Liberta.jpg",
                            "char/064/Liberta2.jpg"], type: "base" }
            ]
        },
        // 路卡
        {
            id: "g064_m05",
            name: "路卡",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Luca.jpg",
                            "char/064/Luca2.jpg"], type: "base" }
            ]
        },
        // 诺瓦
        {
            id: "g064_m06",
            name: "诺瓦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Nova.jpg",
                            "char/064/Nova2.jpg"], type: "base" }
            ]
        },
        // 帕契
        {
            id: "g064_m07",
            name: "帕契",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/064/Pace.jpg",
                            "char/064/Pace2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
