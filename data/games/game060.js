// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game060", // 全局唯一ID，不可重复
    name: "绝对阶级学园",
    year: "2026",
    publisher: ["Daisy²"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"夏野景", lang:"zh"},
        {name:"宙地", lang:"zh"},
        {name:"伽那ノ光", lang:"zh"},
        {name:"喜屋武米助", lang:"zh"}
    ],
    art: [
        {name:"和田ベコ", lang:"zh"}
    ],
    cover: "game/060.jpg",
    charList: [
        // 藤枝音理
        {
            id: "g060_f01",
            name: "藤枝音理",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Neri.jpg"], type: "base" }
            ]
        },
        // 五十岚春
        {
            id: "g060_m01",
            name: "五十岚春",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Haru.jpg"], type: "base" }
            ]
        },
        // 加地一波
        {
            id: "g060_m02",
            name: "加地一波",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Ichiha.jpg"], type: "base" }
            ]
        },
        // 鹭之宫零
        {
            id: "g060_m03",
            name: "鹭之宫零",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Rei.jpg"], type: "base" }
            ]
        },
        // 鹰岭陆
        {
            id: "g060_m04",
            name: "鹰岭陆",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Riku.jpg"], type: "base" }
            ]
        },
        // 七濑十矢
        {
            id: "g060_m05",
            name: "七濑十矢",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Touya.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
