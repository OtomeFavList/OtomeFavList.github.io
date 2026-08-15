// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game046", // 全局唯一ID，不可重复
    name: "米斯托尼亚的翅望 -The Lost Delight-",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"夕月", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"泉水みに", lang:"zh"},
        {name:"夏野景", lang:"zh"}
    ],
    art: [
        {name:"清白かりん", lang:"zh"}
    ],
    cover: "game/046.jpg",
    charList: [
        // 亚普萝丝
        {
            id: "g046_f01",
            name: "亚普萝丝",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/046/Alfred.jpg",
                            "char/046/Alfred2.jpg",
                            "char/046/Alfred3.png"], type: "base" }
            ]
        },
        // 阿尔弗雷德·克雷斯维尔
        {
            id: "g046_m01",
            name: "阿尔弗雷德·克雷斯维尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/046/Alfred.jpg",
                            "char/046/Alfred2.jpg",
                            "char/046/Alfred3.png"], type: "base" }
            ]
        },
        // 亚斯科特·林代尔
        {
            id: "g046_m02",
            name: "亚斯科特·林代尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/046/Ascot.jpg",
                            "char/046/Ascot2.jpg",
                            "char/046/Ascot3.png"], type: "base" }
            ]
        },
        // 爱德华·伯思斯坦
        {
            id: "g046_m03",
            name: "爱德华·伯思斯坦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/046/Edward.jpg",
                            "char/046/Edward2.jpg",
                            "char/046/Edward3.png"], type: "base" }
            ]
        },
        // 约翰
        {
            id: "g046_m04",
            name: "约翰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/046/John.jpg",
                            "char/046/John2.jpg",
                            "char/046/John3.png"], type: "base" }
            ]
        },
        // 莱纳斯·沃德
        {
            id: "g046_m05",
            name: "莱纳斯·沃德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/046/Linus.jpg",
                            "char/046/Linus2.jpg",
                            "char/046/Linus3.png"], type: "base" }
            ]
        },
        // 卢卡斯·沙利文
        {
            id: "g046_m06",
            name: "卢卡斯·沙利文",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/046/Lucas.jpg",
                            "char/046/Lucas2.jpg",
                            "char/046/Lucas3.png"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
