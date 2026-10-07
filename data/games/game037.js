// data/games/game037.js
// ✅已核对信息
const gameData = {
    id: "game037", // 全局唯一ID，不可重复
    name: "喧哗番长 乙女 Double Pack",
    year: "2024",
    publisher: ["RED","Spike Chunsoft"],
    cnStudio: "JSD",
    writer: [
        {name:"伊東愛", lang:"zh"},
        {name:"雨宮うた", lang:"zh"},
        {name:"真青テテ", lang:"zh"}
    ],
    art: [
        {name:"黒蜜きなこ", lang:"zh"}
    ],
    cover: "game/037.jpg",
    charList: [
        // 中山日南子
        {
            id: "g037_f01",
            name: "中山日南子",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/037/Hinako.jpg",
                            "char/037/Hinako2.png"], type: "base" }
            ]
        },
        // 鬼岛凤凰
        {
            id: "g037_m01",
            name: "鬼岛凤凰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/037/Houou.jpg",
                            "char/037/Houou2.jpg",
                            "char/037/Houou3.png"], type: "base" }
            ]
        },
        // 吉良麟太郎
        {
            id: "g037_m02",
            name: "吉良麟太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/037/Rintarou.jpg",
                            "char/037/Rintarou2.png"], type: "base" }
            ]
        },
        // 金春贵之
        {
            id: "g037_m03",
            name: "金春贵之",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/037/Takayuki.jpg",
                            "char/037/Takayuki2.png"], type: "base" }
            ]
        },
        // 箕轮斗斗丸
        {
            id: "g037_m04",
            name: "箕轮斗斗丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/037/Totomaru.jpg",
                            "char/037/Totomaru2.png"], type: "base" }
            ]
        },
        // 未良子裕太
        {
            id: "g037_m05",
            name: "未良子裕太",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/037/Yuuta.jpg",
                            "char/037/Yuuta2.png"], type: "base" }
            ]
        },
        // 相乐天马
        {
            id: "g037_fd01",
            name: "相乐天马",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/037/Tenma.jpg",
                            "char/037/Tenma2.jpg",
                            "char/037/Tenma3.png"], type: "base" }
            ]
        },
        // 坂口春生
        {
            id: "g037_s01",
            name: "坂口春生",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/037/Haruo.jpg",
                            "char/037/Haruo2.png"], type: "base" }
            ]
        },
        // 鬼岛光
        {
            id: "g037_s02",
            name: "鬼岛光",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/037/Hikaru.jpg",
                            "char/037/Hikaru2.png"], type: "base" }
            ]
        },
        // 吉良希
        {
            id: "g037_s03",
            name: "吉良希",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/037/Nozomi.jpg",
                            "char/037/Nozomi2.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
