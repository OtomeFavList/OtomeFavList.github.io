// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game067", // 全局唯一ID，不可重复，如 game001
    name: "大正×对称爱丽丝 all in one",
    year: "2026",
    publisher: ["Primula"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"藤文", lang:"zh"}
    ],
    art: [
        {name:"めろ", lang:"ja"}
    ],
    cover: "game/067.jpg", // 相对路径，游戏封面
    charList: [
        // 有栖百合花
        {
            id: "g067_f01",
            name: "有栖百合花",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/067/Yurika.jpg",
                            "char/067/Yurika2.jpg",
                            "char/067/Yurika3.jpg",
                            "char/067/Yurika4.jpg",
                            "char/067/Yurika5.jpg",
                            "char/067/Yurika6.jpg",
                            "char/067/Yurika7.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 小红帽
        {
            id: "g067_m01",
            name: "小红帽",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Akazukin.jpg",
                            "char/067/Akazukin2.jpg",
                            "char/067/Akazukin3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 爱丽丝
        {
            id: "g067_m02",
            name: "爱丽丝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Alice.jpg",
                            "char/067/Alice2.jpg",
                            "char/067/Alice3.jpg",
                            "char/067/Alice4.jpg",
                            "char/067/Alice5.jpg",
                            "char/067/Alice6.jpg",
                            "char/067/Alice7.jpg"], type: "base" },
            ]
        },
        // 仙杜瑞拉
        {
            id: "g067_m03",
            name: "仙杜瑞拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Cinderella.jpg",
                            "char/067/Cinderella2.jpg",
                            "char/067/Cinderella3.jpg"], type: "base" },
            ]
        },
        // 格莱特
        {
            id: "g067_m04",
            name: "格莱特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Gretel.jpg",
                            "char/067/Gretel2.jpg",
                            "char/067/Gretel3.jpg",
                            "char/067/Gretel4.jpg",
                            "char/067/Gretel5.jpg"], type: "base" },
            ]
        },
        // 辉夜姬
        {
            id: "g067_m05",
            name: "辉夜姬",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Kaguya.jpg",
                            "char/067/Kaguya2.jpg",
                            "char/067/Kaguya3.jpg"], type: "base" },
            ]
        },
        // 魔法师
        {
            id: "g067_m06",
            name: "魔法师",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Mahoutsukai.jpg",
                            "char/067/Mahoutsukai2.jpg",
                            "char/067/Mahoutsukai3.jpg",
                            "char/067/Mahoutsukai4.jpg"], type: "base" },
            ]
        },
        // 白雪
        {
            id: "g067_m07",
            name: "白雪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Shirayuki.jpg",
                            "char/067/Shirayuki2.jpg",
                            "char/067/Shirayuki3.jpg",
                            "char/067/Shirayuki4.jpg",
                            "char/067/Shirayuki5.jpg",
                            "char/067/Shirayuki6.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
