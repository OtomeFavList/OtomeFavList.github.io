// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game052", // 全局唯一ID，不可重复
    name: "提米拉纳国的好运公主与衰运骑士团",
    year: "2025",
    publisher: ["ichicolumn","Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"雨宮うた", lang:"zh"},
        {name:"夏野景", lang:"zh"},
        {name:"夕月", lang:"zh"},
        {name:"卯木悠里", lang:"zh"}
    ],
    art: [
        {name:"煮たか", lang:"zh"}
    ],
    cover: "game/052.jpg",
    charList: [
        // 塞西莉亚·法里亚斯·提米拉纳
        {
            id: "g052_f01",
            name: "塞西莉亚·法里亚斯·提米拉纳",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/052/Cecilia.jpg",
                            "char/052/Cecilia2.jpg",
                            "char/052/Cecilia3.png",
                            "char/052/Cecilia4.jpg",
                            "char/052/Cecilia5.jpg"], type: "base" }
            ]
        },
        // 阿德尔·纳雷斯
        {
            id: "g052_m01",
            name: "阿德尔·纳雷斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/052/Adel.jpg",
                            "char/052/Adel2.jpg",
                            "char/052/Adel3.png",
                            "char/052/Adel4.jpg",
                            "char/052/Adel5.jpg"], type: "base" }
            ]
        },
        // 约瑟菲·康奈希尔德·佐达利克
        {
            id: "g052_m02",
            name: "约瑟菲·康奈希尔德·佐达利克",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/052/Josephy.jpg",
                            "char/052/Josephy2.jpg",
                            "char/052/Josephy3.png",
                            "char/052/Josephy4.jpg",
                            "char/052/Josephy5.jpg"], type: "base" }
            ]
        },
        // 齐亚·奈尔提
        {
            id: "g052_m03",
            name: "齐亚·奈尔提",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/052/Kiya.jpg",
                            "char/052/Kiya2.jpg",
                            "char/052/Kiya3.png",
                            "char/052/Kiya4.jpg",
                            "char/052/Kiya5.jpg"], type: "base" }
            ]
        },
        // 米兰·赫林
        {
            id: "g052_m04",
            name: "米兰·赫林",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/052/Milan.jpg",
                            "char/052/Milan2.jpg",
                            "char/052/Milan3.png",
                            "char/052/Milan4.jpg",
                            "char/052/Milan5.jpg"], type: "base" }
            ]
        },
        // 托比亚斯·哈贝克·弗莱
        {
            id: "g052_m05",
            name: "托比亚斯·哈贝克·弗莱",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/052/Tobias.jpg",
                            "char/052/Tobias2.jpg",
                            "char/052/Tobias3.png",
                            "char/052/Tobias4.jpg",
                            "char/052/Tobias5.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
