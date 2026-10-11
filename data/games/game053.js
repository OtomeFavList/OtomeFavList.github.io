// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game053", // 全局唯一ID，不可重复
    name: "绯色的碎片 玉依姬奇谭 ~记忆中的颜色~",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"西村悠", lang:"zh"}
    ],
    art: [
        {name:"カズキヨネ", lang:"ja"}
    ],
    cover: "game/053.jpg",
    charList: [
        // 春日珠纪
        {
            id: "g053_f01",
            name: "春日珠纪",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Tamaki.jpg"], type: "base" }
            ]
        },
        // 鸦取真弘
        {
            id: "g053_m01",
            name: "鸦取真弘",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Mahiro.jpg",
                            "char/053/Mahiro2.jpg",
                            "char/053/Mahiro3.jpg"], type: "base" }
            ]
        },
        // 狗谷辽
        {
            id: "g053_m02",
            name: "狗谷辽",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Ryou.jpg",
                            "char/053/Ryou2.jpg",
                            "char/053/Ryou3.jpg"], type: "base" }
            ]
        },
        // 犬戒慎司
        {
            id: "g053_m03",
            name: "犬戒慎司",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Shinji.jpg",
                            "char/053/Shinji2.jpg",
                            "char/053/Shinji3.jpg"], type: "base" }
            ]
        },
        // 大蛇草
        {
            id: "g053_m04",
            name: "大蛇草",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Suguru.jpg",
                            "char/053/Suguru2.jpg",
                            "char/053/Suguru3.jpg"], type: "base" }
            ]
        },
        // 鬼崎拓磨
        {
            id: "g053_m05",
            name: "鬼崎拓磨",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Takuma.jpg",
                            "char/053/Takuma2.jpg",
                            "char/053/Takuma3.jpg"], type: "base" }
            ]
        },
        // 狐邑祐一
        {
            id: "g053_m06",
            name: "狐邑祐一",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Yuuichi.jpg",
                            "char/053/Yuuichi2.jpg",
                            "char/053/Yuuichi3.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g053_s01",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g053_s02",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g053_s03",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g053_s04",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g053_s05",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g053_s06",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g053_s07",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g053_s08",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g053_s09",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g053_s10",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
