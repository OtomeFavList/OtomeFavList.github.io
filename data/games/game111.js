中文名: 穿军靴的猫
开发: Primula
发行: Primula、株式会社プロトタイプ 、PRODUCTION PENCIL
剧本: 藤文、千草、清水月子
音乐: solfa
人物设定: 紫真依、稲葉せいこ（SD）
主题歌演出: Ether
原画: 紫真依
导演: 犬小屋権太
SD原画: 稲葉せいこ
企画: Primula
别名: 軍猫
官方网站: primula.jpn.com/gunneko/

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
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
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
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
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
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
