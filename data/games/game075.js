// data/games/game075.js
// ✅已核对信息
const gameData = {
    id: "game075", // 全局唯一ID，不可重复，如 game001
    name: "OVER REQUIEMZ 奥兹国安魂曲",
    year: "2026",
    publisher: ["工画堂スタジオ","Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"根岸十郎", lang:"zh"},
        {name:"夏野景", lang:"zh"},
        {name:"中越麻朝", lang:"zh"}
    ],
    art: [
        {name:"風李たゆ", lang:"zh"}
    ],
    cover: "game/075.jpg", // 相对路径，游戏封面
    charList: [
        // 言京
        {
            id: "g075_f01",
            name: "言京",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/075/Yuhiru.jpg",
                            "char/075/Yuhiru2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 克劳德·格莱因
        {
            id: "g075_m01",
            name: "克劳德·格莱因",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/075/Claude.jpg",
                            "char/075/Claude2.jpg",
                            "char/075/Claude3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 多萝西
        {
            id: "g075_m02",
            name: "多萝西",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/075/Dorothy.jpg",
                            "char/075/Dorothy2.jpg",
                            "char/075/Dorothy3.jpg"], type: "base" },
            ]
        },
        // 莫利·伍德兰
        {
            id: "g075_m03",
            name: "莫利·伍德兰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/075/Molly.jpg",
                            "char/075/Molly2.jpg",
                            "char/075/Molly3.jpg"], type: "base" },
            ]
        },
        // 诺伊尔·贝斯蒂亚
        {
            id: "g075_m04",
            name: "诺伊尔·贝斯蒂亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/075/Noil.jpg",
                            "char/075/Noil2.jpg",
                            "char/075/Noil3.jpg"], type: "base" },
            ]
        },
        // 凯泽·奥兹玛
        {
            id: "g075_m05",
            name: "凯泽·奥兹玛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/075/Ozma.jpg",
                            "char/075/Ozma2.jpg",
                            "char/075/Ozma3.jpg"], type: "base" },
            ]
        },
        // 阿克雷
        {
            id: "g075_s01",
            name: "阿克雷",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/075/Archray.jpg",
                            "char/075/Archray2.jpg"], type: "base" }
            ]
        },
        // 尤金·普尔波
        {
            id: "g075_s02",
            name: "尤金·普尔波",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/075/Eugene.jpg",
                            "char/075/Eugene2.jpg"], type: "base" }
            ]
        },
        // 格琳达·菲利斯
        {
            id: "g075_s03",
            name: "格琳达·菲利斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/075/Glinda.jpg",
                            "char/075/Glinda2.jpg"], type: "base" }
            ]
        },
        // 尼诺斯·乌洛
        {
            id: "g075_s04",
            name: "尼诺斯·乌洛",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/075/Nenohs.jpg",
                            "char/075/Nenohs2.jpg"], type: "base" }
            ]
        },
        // 奥瑟·伍德兰
        {
            id: "g075_s05",
            name: "奥瑟·伍德兰",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/075/Osser.jpg",
                            "char/075/Osser2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
