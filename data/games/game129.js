// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game129", // 全局唯一ID，不可重复，如 game001
    name: "殺し屋とストロベリー Plus",
    year: "2022",
    publisher: ["BROCCOLI"],
    cnStudio: "暂无",
    writer: [
        {name:"望月柚枝", lang:"zh"},
        {name:"ナミサキ シキ", lang:"ja"},
        {name:"isora", lang:"en"}
    ],
    art: [
        {name:"カズキヨネ", lang:"ja"}
    ],
    cover: "game/129.jpg", // 相对路径，游戏封面
    charList: [
        // イチゴ
        {
            id: "g129_f01",
            name: "イチゴ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/129/Ichigo.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アモン
        {
            id: "g129_m01",
            name: "アモン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Amon.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 長谷川
        {
            id: "g129_m02",
            name: "長谷川",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Hasegawa.jpg"], type: "base" },
            ]
        },
        // イズナ
        {
            id: "g129_m03",
            name: "イズナ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Izuna.jpg"], type: "base" },
            ]
        },
        // クラマ
        {
            id: "g129_m04",
            name: "クラマ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Kurama.jpg"], type: "base" },
            ]
        },
        // ノイン
        {
            id: "g129_m05",
            name: "ノイン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Noin.jpg"], type: "base" },
            ]
        },
        // ツキミ
        {
            id: "g129_m06",
            name: "ツキミ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Tsukimi.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
