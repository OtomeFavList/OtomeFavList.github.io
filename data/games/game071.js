// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game071", // 全局唯一ID，不可重复，如 game001
    name: "副作用之瞳",
    year: "2021",
    publisher: ["Frontier Works","Otomate"],
    cnStudio: "JoyMoe",
    writer: [
        {name:"紅原香", lang:"zh"},
        {name:"若宮たすく", lang:"zh"},
        {name:"深瀬カエル", lang:"zh"}
    ],
    art: [
        {name:"さらちよみ", lang:"ja"}
    ],
    cover: "game/071.jpg", // 相对路径，游戏封面
    charList: [
        // 东地葵
        {
            id: "g071_f01",
            name: "东地葵",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/071/Aoi.jpg",
                            "char/071/Aoi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 东地枣
        {
            id: "g071_f02",
            name: "东地枣",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/071/Natsume.jpg",
                            "char/071/Natsume2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 东地樱
        {
            id: "g071_f03",
            name: "东地樱",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/071/Sakura.jpg",
                            "char/071/Sakura2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 翠川智裕
        {
            id: "g071_m01",
            name: "翠川智裕",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Chihiro.jpg",
                            "char/071/Chihiro2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 榊原洸
        {
            id: "g071_m02",
            name: "榊原洸",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Kou.jpg",
                            "char/071/Kou2.jpg"], type: "base" },
            ]
        },
        // 小野泽正人
        {
            id: "g071_m03",
            name: "小野泽正人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Masato.jpg",
                            "char/071/Masato2.jpg"], type: "base" },
            ]
        },
        // 仙波亘
        {
            id: "g071_m04",
            name: "仙波亘",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Wataru.jpg",
                            "char/071/Wataru2.jpg"], type: "base" },
            ]
        },
        // 望月要介
        {
            id: "g071_m05",
            name: "望月要介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Yousuke.jpg",
                            "char/071/Yousuke2.jpg"], type: "base" },
            ]
        },
        // 榊原悠
        {
            id: "g071_m06",
            name: "榊原悠",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Yuu.jpg",
                            "char/071/Yuu2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
