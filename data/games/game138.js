// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game138", // 全局唯一ID，不可重复，如 game001
    name: "神凪ノ杜 五月雨綴り",
    year: "2024",
    publisher: ["Matatabi"],
    cnStudio: "暂无",
    writer: [
        {name:"朝比奈夏樹", lang:"zh"}
    ],
    art: [
        {name:"豌豆まめ丸", lang:"zh"}
    ],
    cover: "game/138.jpg", // 相对路径，游戏封面
    charList: [
        // 木南瑞希
        {
            id: "g138_f01",
            name: "木南瑞希",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/138/Mizuki.jpg",
                            "char/138/Mizuki3.jpg",
                            "char/138/Mizuki2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 旭
        {
            id: "g138_m01",
            name: "旭",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/138/Asahi.jpg",
                            "char/138/Asahi3.jpg",
                            "char/138/Asahi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 日向
        {
            id: "g138_m02",
            name: "日向",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/138/Hinata.jpg",
                            "char/138/Hinata3.jpg",
                            "char/138/Hinata2.jpg"], type: "base" },
            ]
        },
        // 市丸
        {
            id: "g138_m03",
            name: "市丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/138/Ichimaru.jpg",
                            "char/138/Ichimaru2.jpg"], type: "base" },
            ]
        },
        // 仁科直
        {
            id: "g138_m04",
            name: "仁科直",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/138/Nao.jpg",
                            "char/138/Nao3.jpg",
                            "char/138/Nao2.jpg"], type: "base" },
            ]
        },
        // 東雲
        {
            id: "g138_m05",
            name: "東雲",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/138/Shinonome.jpg",
                            "char/138/Shinonome2.jpg"], type: "base" },
            ]
        },
        // 沢木宋太
        {
            id: "g138_m06",
            name: "沢木宋太",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/138/Souta.jpg",
                            "char/138/Souta3.jpg",
                            "char/138/Souta2.jpg"], type: "base" },
            ]
        },
        // 仁科葵
        {
            id: "g138_s01",
            name: "仁科葵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Aoi.jpg"], type: "base" }
            ]
        },
        // 南条樹
        {
            id: "g138_s02",
            name: "南条樹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Itsuki.jpg"], type: "base" }
            ]
        },
        // カグナ
        {
            id: "g138_s03",
            name: "カグナ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Kaguna.jpg"], type: "base" }
            ]
        },
        // 仁科浩介
        {
            id: "g138_s04",
            name: "仁科浩介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Kousuke.jpg"], type: "base" }
            ]
        },
        // 高耶
        {
            id: "g138_s05",
            name: "高耶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Kouya.jpg"], type: "base" }
            ]
        },
        // 松永京平
        {
            id: "g138_s06",
            name: "松永京平",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Kyouhei.jpg"], type: "base" }
            ]
        },
        // 水世
        {
            id: "g138_s07",
            name: "水世",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Minase.jpg"], type: "base" }
            ]
        },
        // サカキ
        {
            id: "g138_s08",
            name: "サカキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Sakaki.jpg"], type: "base" }
            ]
        },
        // 南条辰蔵
        {
            id: "g138_s09",
            name: "南条辰蔵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Shinzou.jpg"], type: "base" }
            ]
        },
        // 花山紬
        {
            id: "g138_s10",
            name: "花山紬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Tsumugi.jpg"], type: "base" }
            ]
        },
        // 善右衛門
        {
            id: "g138_s11",
            name: "善右衛門",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/Zenemo.jpg"], type: "base" }
            ]
        },
        // ？？？
        {
            id: "g138_s12",
            name: "？？？",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/138/？？？.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
