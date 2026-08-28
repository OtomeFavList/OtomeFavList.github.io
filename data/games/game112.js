// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game112", // 全局唯一ID，不可重复，如 game001
    name: "勿ノ怪契リ",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"彩原優実", lang:"zh"}
    ],
    art: [
        {name:"めろ", lang:"ja"}
    ],
    cover: "game/112.jpg", // 相对路径，游戏封面
    charList: [
        // 渕田結茉
        {
            id: "g112_f01",
            name: "渕田結茉",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/112/Yuma.jpg",
                            "char/112/Yuma2.jpg",
                            "char/112/Yuma3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 煌仁
        {
            id: "g112_m01",
            name: "煌仁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/112/Akihito.jpg",
                            "char/112/Akihito2.jpg",
                            "char/112/Akihito3.jpg",
                            "char/112/Akihito4.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 千暁
        {
            id: "g112_m02",
            name: "千暁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/112/Chiaki.jpg",
                            "char/112/Chiaki2.jpg",
                            "char/112/Chiaki3.jpg",
                            "char/112/Chiaki4.png"], type: "base" },
            ]
        },
        // 雅玖
        {
            id: "g112_m03",
            name: "雅玖",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/112/Gaku.jpg",
                            "char/112/Gaku2.jpg",
                            "char/112/Gaku3.jpg",
                            "char/112/Gaku4.png"], type: "base" },
            ]
        },
        // 佐吉
        {
            id: "g112_m04",
            name: "佐吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/112/Sakichi.jpg",
                            "char/112/Sakichi2.jpg",
                            "char/112/Sakichi3.jpg",
                            "char/112/Sakichi4.png"], type: "base" },
            ]
        },
        // 芦屋総佑
        {
            id: "g112_m05",
            name: "芦屋総佑",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/112/Sousuke.jpg",
                            "char/112/Sousuke2.jpg",
                            "char/112/Sousuke3.png"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
