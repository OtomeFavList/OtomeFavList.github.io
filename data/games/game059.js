// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game059", // 全局唯一ID，不可重复
    name: "妖怪饭 ~大碗开动！~",
    year: "2026",
    publisher: ["EDIA","honeybee"],
    cnStudio: "JSD",
    writer: [
        {name:"泉りお", lang:"zh"},
        {name:"伊原恵", lang:"zh"},
        {name:"若宮たすく", lang:"zh"},
        {name:"雨宮うた", lang:"zh"},
        {name:"水井としえ", lang:"zh"},
        {name:"葉山いずみ", lang:"zh"},
        {name:"雅夜美竜", lang:"zh"},
        {name:"柚子みかん", lang:"zh"},
        {name:"株式会社エッジワークス", lang:"zh"},
        {name:"みなづきともこ", lang:"ja"},
        {name:"ゆずみやともめ", lang:"ja"},
        {name:"もち大福", lang:"ja"},
    ],
    art: [
        {name:"カズアキ", lang:"ja"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/059.jpg",
    charList: [
        // 朱音凜
        {
            id: "g059_f01",
            name: "朱音凜",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/059/Rin.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/059/Rin2.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/059/Rin3.jpg"], type: "base" },
            ]
        },
        // 木邑浅葱
        {
            id: "g059_m01",
            name: "木邑浅葱",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/059/Asagi.jpg"], type: "base" },
            ]
        },
        // 伊吹萩之介
        {
            id: "g059_m02",
            name: "伊吹萩之介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/059/Ibuki.jpg"], type: "base" },
            ]
        },
        // 芹野真夏
        {
            id: "g059_m03",
            name: "芹野真夏",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/059/Manatsu.jpg"], type: "base" },
            ]
        },
        // 花苏芳
        {
            id: "g059_m04",
            name: "花苏芳",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/059/Suou.jpg"], type: "base" },
            ]
        },
        // 犬嶌谣
        {
            id: "g059_m05",
            name: "犬嶌谣",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/059/Uta.jpg"], type: "base" },
            ]
        },
        // 犬嶌咏
        {
            id: "g059_m06",
            name: "犬嶌咏",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/059/Yomi.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
