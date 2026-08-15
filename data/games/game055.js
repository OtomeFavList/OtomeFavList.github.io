// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game055", // 全局唯一ID，不可重复
    name: "Honey Vibes",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"喜多南", lang:"zh"},
        {name:"彩月レイ", lang:"zh"},
        {name:"鵜森はだし", lang:"zh"},
        {name:"海野凛久", lang:"zh"},
        {name:"春野せり", lang:"zh"},
        {name:"Salala", lang:"en"}
    ],
    art: [
        {name:"くらげ壱", lang:"ja"}
    ],
    cover: "game/055.jpg",
    charList: [
        // 天野凪咲
        {
            id: "g055_f01",
            name: "天野凪咲",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Nagisa.jpg",
                            "char/055/Nagisa2.jpg"], type: "base" }
            ]
        },
        // 埃尔文
        {
            id: "g055_m01",
            name: "埃尔文",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Alvin.jpg",
                            "char/055/Alvin2.jpg"], type: "base" }
            ]
        },
        // 以利亚
        {
            id: "g055_m02",
            name: "以利亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Elijah.jpg",
                            "char/055/Elijah2.jpg"], type: "base" }
            ]
        },
        // 伊诺
        {
            id: "g055_m03",
            name: "伊诺",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Eno.jpg",
                            "char/055/Eno2.jpg"], type: "base" }
            ]
        },
        // 费恩
        {
            id: "g055_m04",
            name: "费恩",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Finn.jpg",
                            "char/055/Finn2.jpg"], type: "base" }
            ]
        },
        // 米洛
        {
            id: "g055_m05",
            name: "米洛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Milo.jpg",
                            "char/055/Milo2.jpg"], type: "base" }
            ]
        },
        // 狄奥
        {
            id: "g055_m06",
            name: "狄奥",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Theo.jpg",
                            "char/055/Theo2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
