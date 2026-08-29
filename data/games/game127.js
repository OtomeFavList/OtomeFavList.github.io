// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game127", // 全局唯一ID，不可重复，如 game001
    name: "片恋いコントラスト -collection of branch-",
    year: "2019",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"紫藤零", lang:"zh"},
        {name:"黒澤琴音", lang:"zh"},
        {name:"高木亜由美", lang:"zh"},
        {name:"みぞおち鳩子", lang:"ja"}
    ],
    art: [
        {name:"ウダジョ", lang:"ja"}
    ],
    cover: "game/127.jpg", // 相对路径，游戏封面
    charList: [
        // 橘川冴子
        {
            id: "g127_f01",
            name: "橘川冴子",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/127/Saeko.jpg",
                            "char/127/Saeko2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 椎葉亜樹那
        {
            id: "g127_m01",
            name: "椎葉亜樹那",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/127/Akina.jpg",
                            "char/127/Akina2.jpg",
                            "char/127/Akina3.jpg",
                            "char/127/Akina4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 樫永和兎
        {
            id: "g127_m02",
            name: "樫永和兎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/127/Kazuto.jpg",
                            "char/127/Kazuto2.jpg",
                            "char/127/Kazuto3.jpg",
                            "char/127/Kazuto4.jpg"], type: "base" },
            ]
        },
        // 楠見清孝
        {
            id: "g127_m03",
            name: "楠見清孝",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/127/Kusumi.jpg",
                            "char/127/Kusumi2.jpg",
                            "char/127/Kusumi3.jpg",
                            "char/127/Kusumi4.jpg"], type: "base" },
            ]
        },
        // 楡居凪
        {
            id: "g127_m04",
            name: "楡居凪",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/127/Nagi.jpg",
                            "char/127/Nagi2.jpg",
                            "char/127/Nagi3.jpg",
                            "char/127/Nagi4.jpg"], type: "base" },
            ]
        },
        // 檜渡鈴太朗
        {
            id: "g127_m05",
            name: "檜渡鈴太朗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/127/Rintarou.jpg",
                            "char/127/Rintarou2.jpg",
                            "char/127/Rintarou3.jpg",
                            "char/127/Rintarou4.jpg"], type: "base" },
            ]
        },
        // 桐阪保
        {
            id: "g127_m06",
            name: "桐阪保",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/127/Tamotsu.jpg",
                            "char/127/Tamotsu2.jpg",
                            "char/127/Tamotsu3.jpg",
                            "char/127/Tamotsu4.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
