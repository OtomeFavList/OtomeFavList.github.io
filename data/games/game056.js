// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game056", // 全局唯一ID，不可重复
    name: "红铃的恸哭",
    year: "2026",
    publisher: ["Voltage"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"夕月", lang:"zh"}
    ],
    art: [
        {name:"のりた", lang:"ja"}
    ],
    cover: "game/056.jpg",
    charList: [
        // 朱丽叶·露斯
        {
            id: "g056_f01",
            name: "朱丽叶·露斯",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/056/Juliet.jpg"], type: "base" }
            ]
        },
        // 亚设·汤普森
        {
            id: "g056_m01",
            name: "亚设·汤普森",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/056/Asher.jpg"], type: "base" }
            ]
        },
        // 奇兰·洛厄尔
        {
            id: "g056_m02",
            name: "奇兰·洛厄尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/056/Ciaran.jpg"], type: "base" }
            ]
        },
        // 加勒特·威尔金
        {
            id: "g056_m03",
            name: "加勒特·威尔金",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/056/Garrett.jpg"], type: "base" }
            ]
        },
        // 罗德斯·哈特菲尔德
        {
            id: "g056_m04",
            name: "罗德斯·哈特菲尔德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/056/Rhodes.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
