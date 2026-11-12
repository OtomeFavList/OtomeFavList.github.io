// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game111", // 全局唯一ID，不可重复，如 game001
    name: "穿军靴的猫",
    year: "2023",
    publisher: ["Primula"],
    cnStudio: "pencil",
    writer: [
        {name:"藤文", lang:"zh"},
        {name:"千草", lang:"zh"},
        {name:"清水月子", lang:"zh"}
    ],
    art: [
        {name:"紫真依", lang:"zh"}
    ],
    cover: "game/111.jpg", // 相对路径，游戏封面
    charList: [
        // タマ
        {
            id: "g111_f01",
            name: "タマ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/111/Tama3.jpg",
                            "char/111/Tama2.jpg",
                            "char/111/Tama4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 神谷一颯
        {
            id: "g111_m01",
            name: "神谷一颯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/Kamiya3.jpg",
                            "char/111/Kamiya.jpg",
                            "char/111/Kamiya2.jpg",
                            "char/111/Kamiya4.jpg",
                            "char/111/Kamiya5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // キティ
        {
            id: "g111_m02",
            name: "キティ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/Kitty3.jpg",
                            "char/111/Kitty.jpg"
                            "char/111/Kitty2.jpg",
                            "char/111/Kitty4.jpg"], type: "base" },
            ]
        },
        // コタロウ
        {
            id: "g111_m03",
            name: "コタロウ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/Kotarou3.jpg",
                            "char/111/Kotarou2.jpg",
                            "char/111/Kotarou4.jpg"], type: "base" },
            ]
        },
        // くーにゃん
        {
            id: "g111_m04",
            name: "くーにゃん",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/KuNyan3.jpg",
                            "char/111/KuNyan2.jpg",
                            "char/111/KuNyan4.jpg"], type: "base" },
            ]
        },
        // シェド
        {
            id: "g111_m05",
            name: "シェド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/Shed3.jpg",
                            "char/111/Shed2.jpg",
                            "char/111/Shed4.jpg"], type: "base" },
            ]
        },
        // ユズ
        {
            id: "g111_m06",
            name: "ユズ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/Yuzu3.jpg",
                            "char/111/Yuzu2.jpg",
                            "char/111/Yuzu4.jpg"], type: "base" },
            ]
        },
        // ハク
        {
            id: "g111_s01",
            name: "ハク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Haku.jpg",
                            "char/111/Haku2.jpg"], type: "base" }
            ]
        },
        // インク
        {
            id: "g111_s02",
            name: "インク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Ink.jpg",
                            "char/111/Ink2.jpg",
                            "char/111/Ink3.jpg"], type: "base" }
            ]
        },
        // シュバルツ
        {
            id: "g111_s03",
            name: "シュバルツ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Schwartz.jpg",
                            "char/111/Schwartz2.jpg"], type: "base" }
            ]
        },
        // セキ
        {
            id: "g111_s04",
            name: "セキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Seki.jpg",
                            "char/111/Seki2.jpg"], type: "base" }
            ]
        },
        // ソラ
        {
            id: "g111_s05",
            name: "ソラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Sora.jpg",
                            "char/111/Sora2.jpg",
                            "char/111/Sora3.jpg"], type: "base" }
            ]
        },
        // ティガー
        {
            id: "g111_s06",
            name: "ティガー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Tigger.jpg",
                            "char/111/Tigger2.jpg"], type: "base" }
            ]
        },
        // ウィロウ
        {
            id: "g111_s07",
            name: "ウィロウ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Willow.jpg",
                            "char/111/Willow2.jpg",
                            "char/111/Willow3.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
