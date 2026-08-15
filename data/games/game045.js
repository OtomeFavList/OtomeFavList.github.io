// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game045", // 全局唯一ID，不可重复
    name: "绚烂传说",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"小縞なお", lang:"zh"},
        {name:"有野幸", lang:"zh"},
        {name:"北弓しほ", lang:"zh"}
    ],
    art: [
        {name:"薄葉カゲロー", lang:"zh"},
        {name:"朱玖", lang:"zh"},
        {name:"miko", lang:"en"}
    ],
    cover: "game/045.jpg",
    charList: [
        // 蒂法莉娅
        {
            id: "g045_f01",
            name: "蒂法莉娅",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Tifalia.jpg",
                            "char/045/Tifalia2.jpg"], type: "base" }
            ]
        },
        // 伊昂
        {
            id: "g045_m01",
            name: "伊昂",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Ion.jpg",
                            "char/045/Ion2.jpg"], type: "base" }
            ]
        },
        // 帕斯哈里亚
        {
            id: "g045_m02",
            name: "帕斯哈里亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Paschalia.jpg",
                            "char/045/Paschalia2.jpg"], type: "base" }
            ]
        },
        // 拉蒂
        {
            id: "g045_m03",
            name: "拉蒂",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Radie.jpg",
                            "char/045/Radie2.jpg",
                            "char/045/Radie3.jpg"], type: "base" }
            ]
        },
        // 威利欧
        {
            id: "g045_m04",
            name: "威利欧",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Vilio.jpg",
                            "char/045/Vilio2.jpg"], type: "base" }
            ]
        },
        // 札弗拉
        {
            id: "g045_m05",
            name: "札弗拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/045/Zafora.jpg",
                            "char/045/Zafora2.jpg"], type: "base" }
            ]
        },
        // 吉尼亚
        {
            id: "g045_fd01",
            name: "吉尼亚",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/045/Jinnia.jpg",
                            "char/045/Jinnia2.jpg",
                            "char/045/Jinnia3.jpg"], type: "base" }
            ]
        },
        // 里昂
        {
            id: "g045_fd02",
            name: "里昂",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/045/Liyan.jpg",
                            "char/045/Liyan2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
