// ⚠️配角未添加
const gameData = {
    id: "game129", // 全局唯一ID，不可重复，如 game001
    name: "殺し屋とストロベリー Plus",
    year: "2022",
    publisher: ["BROCCOLI"],
    cnStudio: "暂无",
    writer: [
        {name:"望月柚枝", lang:"zh"},
        {name:"ナミサキ シキ", lang:"ja"},
        {name:"isora", lang:"en"}
    ],
    art: [
        {name:"カズキヨネ", lang:"ja"}
    ],
    cover: "game/129.jpg", // 相对路径，游戏封面
    charList: [
        // イチゴ
        {
            id: "g129_f01",
            name: "イチゴ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/129/Ichigo.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アモン
        {
            id: "g129_m01",
            name: "アモン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Amon.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 長谷川
        {
            id: "g129_m02",
            name: "長谷川",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Hasegawa.jpg"], type: "base" },
            ]
        },
        // イズナ
        {
            id: "g129_m03",
            name: "イズナ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Izuna.jpg"], type: "base" },
            ]
        },
        // クラマ
        {
            id: "g129_m04",
            name: "クラマ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Kurama.jpg"], type: "base" },
            ]
        },
        // ノイン
        {
            id: "g129_m05",
            name: "ノイン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Noin.jpg"], type: "base" },
            ]
        },
        // ツキミ
        {
            id: "g129_m06",
            name: "ツキミ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/129/Tsukimi.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
