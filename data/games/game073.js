// data/games/game073.js
// ✅已核对信息
const gameData = {
    id: "game073", // 全局唯一ID，不可重复，如 game001
    name: "明治东京恋语 Full Moon",
    year: "2024",
    publisher: ["MAGES."],
    cnStudio: "dramatic create",
    writer: [
        {name:"魚住ユキコ", lang:"zh"}
    ],
    art: [
        {name:"かる", lang:"ja"}
    ],
    cover: "game/073.jpg", // 相对路径，游戏封面
    charList: [
        // 绫月芽衣
        {
            id: "g073_f01",
            name: "绫月芽衣",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Mei.jpg"], type: "base" }
            ]
        },
        // 查理
        {
            id: "g073_m01",
            name: "查理",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Charlie.jpg",
                            "char/073/Charlie2.jpg"], type: "base" },
                { srcList: ["char/073/Charlie3.jpg"], type: "fd" }
            ]
        },
        // 藤田五郎
        {
            id: "g073_m02",
            name: "藤田五郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Gorou.jpg",
                            "char/073/Gorou2.jpg"], type: "base" },
                { srcList: ["char/073/Gorou3.jpg"], type: "fd" }
            ]
        },
        // 泉镜花
        {
            id: "g073_m03",
            name: "泉镜花",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Kyouka.jpg",
                            "char/073/Kyouka2.jpg"], type: "base" },
                { srcList: ["char/073/Kyouka3.jpg"], type: "fd" }
            ]
        },
        // 森鸥外
        {
            id: "g073_m04",
            name: "森鸥外",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Mori.jpg",
                            "char/073/Mori2.jpg"], type: "base" },
                { srcList: ["char/073/Mori3.jpg"], type: "fd" }
            ]
        },
        // 川上音二郎
        {
            id: "g073_m05",
            name: "川上音二郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Otojirou.jpg",
                            "char/073/Otojirou2.jpg"], type: "base" },
                { srcList: ["char/073/Otojirou3.jpg"], type: "fd" }
            ]
        },
        // 菱田春草
        {
            id: "g073_m06",
            name: "菱田春草",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Shunsou.jpg",
                            "char/073/Shunsou2.jpg"], type: "base" },
                { srcList: ["char/073/Shunsou3.jpg"], type: "fd" }
            ]
        },
        // 岩崎桃介
        {
            id: "g073_m07",
            name: "岩崎桃介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Tousuke.jpg",
                            "char/073/Tousuke2.jpg"], type: "base" }
            ]
        },
        // 小泉八云
        {
            id: "g073_m08",
            name: "小泉八云",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Yakumo.jpg",
                            "char/073/Yakumo2.jpg"], type: "base" },
                { srcList: ["char/073/Yakumo3.jpg"], type: "fd" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
