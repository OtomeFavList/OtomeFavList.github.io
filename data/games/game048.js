// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game048", // 全局唯一ID，不可重复
    name: "CLOCK ZERO ~終焉之一秒~ Devote",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"砂原有季", lang:"zh"},
        {name:"果村なずな", lang:"zh"}
    ],
    art: [
        {name:"ナガオカ", lang:"ja"}
    ],
    cover: "game/048.jpg",
    charList: [
        // 九楼抚子
        {
            id: "g048_f01",
            name: "九楼抚子",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/048/Nadeshiko.jpg"], type: "base" },
                { srcList: ["char/048/Nadeshiko2.jpg"], type: "hidden" }
            ]
        },
        // 英圆
        {
            id: "g048_m01",
            name: "英圆",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/048/Madoka.jpg"], type: "base" },
                { srcList: ["char/048/Bishop.jpg",
                            "char/048/Bishop2.jpg",
                            "char/048/Madoka2.jpg"], type: "hidden" }
            ]
        },
        // 英央
        {
            id: "g048_m02",
            name: "英央",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/048/Nakaba.jpg"], type: "base" },
                { srcList: ["char/048/Journalist.jpg",
                            "char/048/Journalist2.jpg",
                            "char/048/Nakaba2.jpg"], type: "hidden" }
            ]
        },
        // 加纳理一郎
        {
            id: "g048_m03",
            name: "加纳理一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/048/Riichiro.jpg"], type: "base" },
                { srcList: ["char/048/Wanderer.jpg",
                            "char/048/Wanderer2.jpg",
                            "char/048/Riichiro2.jpg"], type: "hidden" }
            ]
        },
        // 西园寺寅之助
        {
            id: "g048_m04",
            name: "西园寺寅之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/048/Saionji.jpg"], type: "base" },
                { srcList: ["char/048/Traitor.jpg",
                            "char/048/Traitor2.jpg",
                            "char/048/Saionji2.jpg"], type: "hidden" }
            ]
        },
        // 时田终夜
        {
            id: "g048_m05",
            name: "时田终夜",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/048/Shuya.jpg"], type: "base" },
                { srcList: ["char/048/Philosopher.jpg",
                            "char/048/Philosopher2.jpg",
                            "char/048/Shuya2.jpg"], type: "hidden" }
            ]
        },
        // 海棠鹰斗
        {
            id: "g048_m06",
            name: "海棠鹰斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/048/Takato.jpg"], type: "base" },
                { srcList: ["char/048/Kaga.jpg",
                            "char/048/Kaga2.jpg",
                            "char/048/Takato2.jpg"], type: "hidden" }
            ]
        },
        // 筱宫枫
        {
            id: "g048_h01",
            name: "筱宫枫",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["char/048/Kaede.jpg"], type: "base" }
            ]
        },
        // 雷恩
        {
            id: "g048_h02",
            name: "雷恩",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["char/048/Rook.jpg",
                            "char/048/Rook2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
