// data/games/game071.js
// ✅已核对信息
const gameData = {
    id: "game071", // 全局唯一ID，不可重复，如 game001
    name: "副作用之瞳",
    year: "2021",
    publisher: ["Frontier Works","Otomate"],
    cnStudio: "JoyMoe",
    writer: [
        {name:"紅原香", lang:"zh"},
        {name:"若宮たすく", lang:"zh"},
        {name:"深瀬カエル", lang:"zh"}
    ],
    art: [
        {name:"さらちよみ", lang:"ja"}
    ],
    cover: "game/071.jpg", // 相对路径，游戏封面
    charList: [
        // 东地葵
        {
            id: "g071_f01",
            name: "东地葵",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Aoi.jpg",
                            "char/071/Aoi2.jpg",
                            "char/071/Aoi3.jpg"], type: "base" },
            ]
        },
        // 东地枣
        {
            id: "g071_f02",
            name: "东地枣",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Natsume.jpg",
                            "char/071/Natsume2.jpg",
                            "char/071/Natsume3.jpg"], type: "base" },
            ]
        },
        // 东地樱
        {
            id: "g071_f03",
            name: "东地樱",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Sakura.jpg",
                            "char/071/Sakura2.jpg",
                            "char/071/Sakura3.jpg"], type: "base" },
            ]
        },
        // 翠川智裕
        {
            id: "g071_m01",
            name: "翠川智裕",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Chihiro.jpg",
                            "char/071/Chihiro2.jpg",
                            "char/071/Chihiro3.jpg",
                            "char/071/Chihiro4.jpg",
                            "char/071/Chihiro5.jpg"], type: "base" },
            ]
        },
        // 榊原洸
        {
            id: "g071_m02",
            name: "榊原洸",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Kou.jpg",
                            "char/071/Kou2.jpg",
                            "char/071/Kou3.jpg",
                            "char/071/Kou4.jpg",
                            "char/071/Kou5.jpg"], type: "base" },
            ]
        },
        // 小野泽正人
        {
            id: "g071_m03",
            name: "小野泽正人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Masato.jpg",
                            "char/071/Masato2.jpg",
                            "char/071/Masato3.jpg",
                            "char/071/Masato4.jpg",
                            "char/071/Masato5.jpg"], type: "base" },
            ]
        },
        // 仙波亘
        {
            id: "g071_m04",
            name: "仙波亘",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Wataru.jpg",
                            "char/071/Wataru2.jpg",
                            "char/071/Wataru3.jpg",
                            "char/071/Wataru4.jpg",
                            "char/071/Wataru5.jpg"], type: "base" },
            ]
        },
        // 望月要介
        {
            id: "g071_m05",
            name: "望月要介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Yousuke.jpg",
                            "char/071/Yousuke2.jpg",
                            "char/071/Yousuke3.jpg",
                            "char/071/Yousuke4.jpg",
                            "char/071/Yousuke5.jpg"], type: "base" },
            ]
        },
        // 榊原悠
        {
            id: "g071_m06",
            name: "榊原悠",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/071/Yuu.jpg",
                            "char/071/Yuu2.jpg",
                            "char/071/Yuu3.jpg",
                            "char/071/Yuu4.jpg",
                            "char/071/Yuu5.jpg",
                            "char/071/Yuu6.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
