// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game068", // 全局唯一ID，不可重复，如 game001
    name: "黑蝶幻境",
    year: "2018",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"紅原香", lang:"zh"},
        {name:"雨宮うた", lang:"zh"},
        {name:"ゆり路", lang:"ja"}
    ],
    art: [
        {name:"結賀さとる", lang:"zh"}
    ],
    cover: "game/068.jpg", // 相对路径，游戏封面
    charList: [
        // 红百合
        {
            id: "g068_f01",
            name: "红百合",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/068/Ai.jpg",
                            "char/068/Ai2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 绯影
        {
            id: "g068_m01",
            name: "绯影",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Hikage.jpg",
                            "char/068/Hikage2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 钩翅
        {
            id: "g068_m02",
            name: "钩翅",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Kagiha.jpg",
                            "char/068/Kagiha2.jpg"], type: "base" },
            ]
        },
        // 鸦翅
        {
            id: "g068_m03",
            name: "鸦翅",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Karasuba.jpg",
                            "char/068/Karasuba2.jpg"], type: "base" },
            ]
        },
        // 纹白
        {
            id: "g068_m04",
            name: "纹白",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Monshiro.jpg",
                            "char/068/Monshiro2.jpg"], type: "base" },
            ]
        },
        // 山都
        {
            id: "g068_m05",
            name: "山都",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Yamato.jpg",
                            "char/068/Yamato2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
