// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game050", // 全局唯一ID，不可重复
    name: "如果这个世界有神明大人存在的话",
    year: "2025",
    publisher: ["Rejet"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"三芳秀克", lang:"zh"},
        {name:"中越麻朝", lang:"zh"},
        {name:"久遠まひろ", lang:"zh"},
        {name:"如月蒼", lang:"zh"},
        {name:"小和泉いづみ", lang:"zh"},
        {name:"有栖川あやみ", lang:"zh"},
        {name:"桜木鈴音", lang:"zh"},
        {name:"真崎結衣", lang:"zh"},
        {name:"秋月ひろ", lang:"zh"},
        {name:"関涼子", lang:"zh"},
        {name:"鷹匠早紀", lang:"zh"},
        {name:"こたに白子", lang:"ja"},
        {name:"やまだ有見", lang:"ja"}
    ],
    art: [
        {name:"ワカツキ", lang:"ja"}
    ],
    cover: "game/050.jpg",
    charList: [
        // 来实春香
        {
            id: "g050_f01",
            name: "来实春香",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Haruka.jpg",
                            "char/050/Haruka2.jpg"], type: "base" }
            ]
        },
        // 细波艾斯
        {
            id: "g050_m01",
            name: "细波艾斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Ace.jpg",
                            "char/050/Ace2.jpg"], type: "base" }
            ]
        },
        // 神里晓
        {
            id: "g050_m02",
            name: "神里晓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Kyou.jpg",
                            "char/050/Kyou2.jpg"], type: "base" }
            ]
        },
        // 来实雅人
        {
            id: "g050_m03",
            name: "来实雅人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Masato.jpg",
                            "char/050/Masato2.jpg"], type: "base" }
            ]
        },
        // 弓仓音时
        {
            id: "g050_m04",
            name: "弓仓音时",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Neji.jpg",
                            "char/050/Neji2.jpg"], type: "base" }
            ]
        },
        // 指乃朱理
        {
            id: "g050_m05",
            name: "指乃朱理",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Shuri.jpg",
                            "char/050/Shuri2.jpg"], type: "base" }
            ]
        },
        // 九鬼辉
        {
            id: "g050_m06",
            name: "九鬼辉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Haruka.jpg",
                            "char/050/Haruka2.jpg"], type: "base" }
            ]
        },
        // 九鬼光
        {
            id: "g050_m07",
            name: "九鬼光",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Hikaru.jpg",
                            "char/050/Hikaru2.jpg"], type: "base" }
            ]
        },
        // 九鬼静
        {
            id: "g050_m08",
            name: "九鬼静",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/050/Shizuka.jpg",
                            "char/050/Shizuka2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
