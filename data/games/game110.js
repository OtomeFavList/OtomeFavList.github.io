// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game110", // 全局唯一ID，不可重复，如 game001
    name: "うたの☆プリンスさまっ♪ Repeat LOVE",
    year: "2019",
    publisher: ["BROCCOLI"],
    cnStudio: "汉化组/汉化厂商",
    writer: [
        {name:"武口碧", lang:"zh"},
        {name:"神城咲弥", lang:"zh"},
        {name:"クレイ·シーゴット", lang:"ja"}
    ],
    art: [
        {name:"工画堂スタジオ", lang:"zh"}
    ],
    cover: "game/110.jpg", // 相对路径，游戏封面
    charList: [
        // 七海春歌
        {
            id: "g110_f01",
            name: "七海春歌",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 愛島セシル
        {
            id: "g110_m01",
            name: "愛島セシル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["char/001/男主13.jpg"], type: "hidden" },
                { srcList: ["char/001/男主14.jpg"], type: "fd" }
            ]
        },
        // 一ノ瀬トキヤ
        {
            id: "g110_m02",
            name: "一ノ瀬トキヤ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 聖川真斗
        {
            id: "g110_m03",
            name: "聖川真斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 四ノ宮那月
        {
            id: "g110_m04",
            name: "四ノ宮那月",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 一十木音也
        {
            id: "g110_m05",
            name: "一十木音也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 神宮寺レン
        {
            id: "g110_m06",
            name: "神宮寺レン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 来栖翔
        {
            id: "g110_m07",
            name: "来栖翔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 美風藍
        {
            id: "g110_fd01",
            name: "美風藍",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // カミュ
        {
            id: "g110_fd02",
            name: "カミュ",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 黒崎蘭丸
        {
            id: "g110_fd03",
            name: "黒崎蘭丸",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 早乙女光男
        {
            id: "g110_fd04",
            name: "早乙女光男",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 寿嶺二
        {
            id: "g110_fd05",
            name: "寿嶺二",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 月宮林檎
        {
            id: "g110_fd06",
            name: "月宮林檎",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 日向龍也
        {
            id: "g110_fd07",
            name: "日向龍也",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
