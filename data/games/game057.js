// data/games/game057.js
// ✅已核对信息
// ℹ️info图
const gameData = {
    id: "game057", // 全局唯一ID，不可重复
    name: "吉原彼岸花 久远之契",
    year: "2026",
    publisher: ["MariaCrown"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"葉月エリカ", lang:"zh"}
    ],
    art: [
        {name:"らんぷみ", lang:"ja"}
    ],
    cover: "game/057.jpg",
    charList: [
        // 凛
        {
            id: "g057_f01",
            name: "千早",
            hiddenName: ["凛"],
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/057/Rin.jpeg",
                            "char/057/Rin2.jpg",
                            "char/057/Rin3.jpg"], type: "base" }
            ]
        },
        // 伊势屋惣一郎
        {
            id: "g057_m01",
            name: "伊势屋惣一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/057/Iseya.jpg",
                            "char/057/Iseya2.jpg"], type: "base" }
            ]
        },
        // 神乐屋彰人
        {
            id: "g057_m02",
            name: "神乐屋彰人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/057/Kaguraya.jpg",
                            "char/057/Kaguraya2.jpg"], type: "base" }
            ]
        },
        // 朔夜
        {
            id: "g057_m03",
            name: "朔夜",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/057/Sakuya.jpg",
                            "char/057/Sakuya2.jpg"], type: "base" }
            ]
        },
        // 樱华屋时雨
        {
            id: "g057_m04",
            name: "樱华屋时雨",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/057/Shigure.jpg",
                            "char/057/Shigure2.jpg"], type: "base" }
            ]
        },
        // 大月忍
        {
            id: "g057_m05",
            name: "大月忍",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/057/Shinobu.jpg",
                            "char/057/Shinobu2.jpg"], type: "base" }
            ]
        },
        // 辰吉
        {
            id: "g057_m06",
            name: "辰吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/057/Tatsukichi.jpg",
                            "char/057/Tatsukichi2.jpg"], type: "base" }
            ]
        },
        // 喜蝶
        {
            id: "g057_s01",
            name: "喜蝶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/057/Kichou.jpg"], type: "base" }
            ]
        },
        // 柚
        {
            id: "g057_s02",
            name: "柚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/057/Yuzu.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
