// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game072", // 全局唯一ID，不可重复，如 game001
    name: "燃烧吧!乙女道士 ~华游恋语~",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"佐々木麿", lang:"zh"},
        {name:"吉村りりか", lang:"zh"},
        {name:"中山智美", lang:"zh"}
    ],
    art: [
        {name:"猫井アユ", lang:"zh"}
    ],
    cover: "game/072.jpg", // 相对路径，游戏封面
    charList: [
        // 秀铃
        {
            id: "g072_f01",
            name: "秀铃",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/072/Shunlin.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 皓岚
        {
            id: "g072_m01",
            name: "皓岚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/072/Haoran.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 龙琍
        {
            id: "g072_m02",
            name: "龙琍",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/072/Longlei.jpg"], type: "base" },
            ]
        },
        // 阿虚
        {
            id: "g072_m03",
            name: "阿虚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/072/Uro.jpg"], type: "base" },
            ]
        },
        // 赦泓
        {
            id: "g72_m04",
            name: "赦泓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/072/Xiao.jpg"], type: "base" },
            ]
        },
        // 宇珩
        {
            id: "g072_m05",
            name: "宇珩",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/072/Yuhan.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
