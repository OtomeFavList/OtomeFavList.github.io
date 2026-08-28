// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game117", // 全局唯一ID，不可重复，如 game001
    name: "猛獣使いと王子様 ~Flower & Snow~",
    year: "2019",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"山崎浅吏", lang:"zh"},
        {name:"森田彩莉", lang:"zh"},
        {name:"吉村りりか", lang:"zh"},
        {name:"桜葉ユウ", lang:"zh"},
        {name:"ちゃい", lang:"ja"},
        {name:"ムネオカミエ", lang:"ja"}
    ],
    art: [
        {name:"miko", lang:"en"}
    ],
    cover: "game/117.jpg", // 相对路径，游戏封面
    charList: [
        // ティアナ
        {
            id: "g117_f01",
            name: "ティアナ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/117/Tiana.jpg",
                            "char/117/Tiana2.jpg",
                            "char/117/Tiana3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アルフレード
        {
            id: "g117_m01",
            name: "アルフレード",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/117/Alfred.jpg",
                            "char/117/Alfred2.jpg",
                            "char/117/Alfred3.jpg",
                            "char/117/Alfred4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // エリク
        {
            id: "g117_m02",
            name: "エリク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/117/Erik.jpg",
                            "char/117/Erik2.jpg",
                            "char/117/Erik3.jpg",
                            "char/117/Erik4.jpg"], type: "base" },
            ]
        },
        // クラウス
        {
            id: "g117_m03",
            name: "クラウス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/117/Klaus.jpg",
                            "char/117/Klaus2.jpg",
                            "char/117/Klaus3.jpg",
                            "char/117/Klaus4.jpg"], type: "base" },
            ]
        },
        // ルシア
        {
            id: "g117_m04",
            name: "ルシア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/117/Lucia.jpg",
                            "char/117/Lucia2.jpg",
                            "char/117/Lucia3.jpg",
                            "char/117/Lucia4.jpg"], type: "base" },
            ]
        },
        // マティアス
        {
            id: "g117_m05",
            name: "マティアス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/117/Matheus.jpg",
                            "char/117/Matheus2.jpg",
                            "char/117/Matheus3.jpg",
                            "char/117/Matheus4.jpg"], type: "base" },
            ]
        },
        // シルビオ
        {
            id: "g117_m06",
            name: "シルビオ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/117/Silvio.jpg",
                            "char/117/Silvio2.jpg",
                            "char/117/Silvio3.jpg",
                            "char/117/Silvio4.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
