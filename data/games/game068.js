// data/games/game068.js
// ✅已核对信息
// ℹ️info图
const gameData = {
    id: "game068", // 全局唯一ID，不可重复，如 game001
    name: "黑蝶幻境",
    year: "2018",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"紅原香", lang:"zh"},
        {name:"雨宮うた", lang:"zh"},
        {name:"ゆり路", lang:"ja"}
    ],
    art: [
        {name:"結賀さとる", lang:"zh"}
    ],
    cover: "game/068.jpg", // 相对路径，游戏封面
    charList: [
        // 红百合
        {
            id: "g068_f01",
            name: "红百合",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Ai.jpg",
                            "char/068/Ai2.jpg"], type: "base" },
            ]
        },
        // 绯影
        {
            id: "g068_m01",
            name: "绯影",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Hikage.jpg",
                            "char/068/Hikage2.jpg"], type: "base" },
            ]
        },
        // 钩翅
        {
            id: "g068_m02",
            name: "钩翅",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Kagiha.jpg",
                            "char/068/Kagiha2.jpg"], type: "base" },
            ]
        },
        // 鸦翅
        {
            id: "g068_m03",
            name: "鸦翅",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Karasuba.jpg",
                            "char/068/Karasuba2.jpg"], type: "base" },
            ]
        },
        // 纹白
        {
            id: "g068_m04",
            name: "纹白",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Monshiro.jpg",
                            "char/068/Monshiro2.jpg"], type: "base" },
            ]
        },
        // 山都
        {
            id: "g068_m05",
            name: "山都",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/068/Yamato.jpg",
                            "char/068/Yamato2.jpg"], type: "base" },
            ]
        },
        // 兔子
        {
            id: "g068_s01",
            name: "兔子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/068/Wusagi.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
