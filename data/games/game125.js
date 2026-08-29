// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game125", // 全局唯一ID，不可重复，如 game001
    name: "明治活劇 ハイカラ流星組 -成敗しませう、世直し稼業-",
    year: "2020",
    publisher: ["ichicolumn","Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"高木亜由美", lang:"zh"}
    ],
    art: [
        {name:"清白かりん", lang:"zh"}
    ],
    cover: "game/125.jpg", // 相对路径，游戏封面
    charList: [
        // 芳川けい
        {
            id: "g125_f01",
            name: "芳川けい",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/125/Kei.jpg",
                            "char/125/Kei2.jpg",
                            "char/125/Kei3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 守田楓花
        {
            id: "g125_m01",
            name: "守田楓花",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/125/Fuuka.jpg",
                            "char/125/Fuuka2.jpg",
                            "char/125/Fuuka3.jpg",
                            "char/125/Fuuka4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 松原銀之助
        {
            id: "g125_m02",
            name: "松原銀之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/125/Ginnosuke.jpg",
                            "char/125/Ginnosuke2.jpg",
                            "char/125/Ginnosuke3.jpg",
                            "char/125/Ginnosuke4.jpg"], type: "base" },
            ]
        },
        // 咲村賢
        {
            id: "g125_m03",
            name: "咲村賢",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/125/Ken.jpg",
                            "char/125/Ken2.jpg",
                            "char/125/Ken3.jpg",
                            "char/125/Ken4.jpg"], type: "base" },
            ]
        },
        // 南郷久史
        {
            id: "g125_m04",
            name: "南郷久史",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/125/Nangou.jpg",
                            "char/125/Nangou2.jpg",
                            "char/125/Nangou3.jpg",
                            "char/125/Nangou4.jpg"], type: "base" },
            ]
        },
        // 中井徳治郎
        {
            id: "g125_m05",
            name: "中井徳治郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/125/Tokujirou.jpg",
                            "char/125/Tokujirou2.jpg",
                            "char/125/Tokujirou3.jpg",
                            "char/125/Tokujirou4.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
