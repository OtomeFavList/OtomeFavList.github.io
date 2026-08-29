// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game126", // 全局唯一ID，不可重复，如 game001
    name: "Princess Arthur",
    year: "2023",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"片桐由摩", lang:"zh"}
    ],
    art: [
        {name:"東夕陽", lang:"zh"}
    ],
    cover: "game/126.jpg", // 相对路径，游戏封面
    charList: [
        // アル
        {
            id: "g126_f01",
            name: "アル",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/126/Aru.jpg",
                            "char/126/Aru2.jpg",
                            "char/126/Aru3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ガラハッド
        {
            id: "g126_m01",
            name: "ガラハッド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/126/Galahad.jpg",
                            "char/126/Galahad2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ガウェイン
        {
            id: "g126_m02",
            name: "ガウェイン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/126/Gawain.jpg",
                            "char/126/Gawain2.jpg"], type: "base" },
            ]
        },
        // ランスロット
        {
            id: "g126_m03",
            name: "ランスロット",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/126/Lancelot.jpg",
                            "char/126/Lancelot2.jpg"], type: "base" },
            ]
        },
        // マーリン
        {
            id: "g126_m04",
            name: "マーリン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/126/Merlin.jpg",
                            "char/126/Merlin2.jpg"], type: "base" },
            ]
        },
        // モードレッド
        {
            id: "g126_m05",
            name: "モードレッド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/126/Mordred.jpg",
                            "char/126/Mordred2.jpg"], type: "base" },
            ]
        },
        // トリスタン
        {
            id: "g126_m06",
            name: "トリスタン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/126/Tristan.jpg",
                            "char/126/Tristan2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
