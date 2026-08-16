// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game066", // 全局唯一ID，不可重复，如 game001
    name: "百花百狼 ~战国忍法帖~",
    year: "2018",
    publisher: ["D3 Publisher","RED"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"伊東愛", lang:"zh"},
        {name:"阿智太郎", lang:"zh"},
        {name:"雨宮うた", lang:"zh"}
    ],
    art: [
        {name:"悌太", lang:"zh"}
    ],
    cover: "game/066.jpg", // 相对路径，游戏封面
    charList: [
        // 上野槐
        {
            id: "g066_f01",
            name: "上野槐",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/066/Enju.jpg",
                            "char/066/Enju2.jpg",
                            "char/066/Enju3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 百地蝶治郎
        {
            id: "g066_m01",
            name: "百地蝶治郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/066/Choujirou.jpg",
                            "char/066/Choujirou2.jpg",
                            "char/066/Choujirou3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 月下丸
        {
            id: "g066_m02",
            name: "月下丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/066/Gekkamaru.jpg",
                            "char/066/Gekkamaru2.jpg",
                            "char/066/Gekkamaru3.jpg"], type: "base" },
            ]
        },
        // 石川五右卫门
        {
            id: "g066_m03",
            name: "石川五右卫门",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/066/Goemon.jpg",
                            "char/066/Goemon2.jpg",
                            "char/066/Goemon3.jpg"], type: "base" },
            ]
        },
        // 服部半藏
        {
            id: "g066_m04",
            name: "服部半藏",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/066/Hattori.jpg",
                            "char/066/Hattori2.jpg",
                            "char/066/Hattori3.jpg"], type: "base" },
            ]
        },
        // 黑雪
        {
            id: "g066_m05",
            name: "黑雪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/066/Kuroyuki.jpg",
                            "char/066/Kuroyuki2.jpg",
                            "char/066/Kuroyuki3.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
