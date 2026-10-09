// data/games/game049.js
// ✅已核对信息
const gameData = {
    id: "game049", // 全局唯一ID，不可重复
    name: "花好似他 & bloom",
    year: "2025",
    publisher: ["MintLip"],
    cnStudio: "JSD",
    writer: [
        {name:"浅生柚子", lang:"zh"},
        {name:"新井菜津美", lang:"zh"},
        {name:"雨宮うた", lang:"zh"}
    ],
    art: [
        {name:"ユウヤ", lang:"ja"}
    ],
    cover: "game/049.jpg",
    charList: [
        // 明石亚未
        {
            id: "g049_f01",
            name: "明石亚未",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/049/Ami.jpg",
                            "char/049/Ami2.jpg"], type: "base" }
            ]
        },
        // 春芳风花
        {
            id: "g049_f02",
            name: "春芳风花",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/049/Fuuka.jpg",
                            "char/049/Fuuka2.jpg"], type: "base" }
            ]
        },
        // 雪平实红
        {
            id: "g049_f03",
            name: "雪平实红",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/049/Miku.jpg",
                            "char/049/Miku2.jpg"], type: "base" }
            ]
        },
        // 碧木星利奈
        {
            id: "g049_f04",
            name: "碧木星利奈",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/049/Serina.jpg",
                            "char/049/Serina2.jpg"], type: "base" }
            ]
        },
        // 栖川银之助
        {
            id: "g049_m01",
            name: "栖川银之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/049/Ginnosuke.jpg",
                            "char/049/Ginnosuke2.jpg"], type: "base" }
            ]
        },
        // 市毛北斗
        {
            id: "g049_m02",
            name: "市毛北斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/049/Hokuto.jpg",
                            "char/049/Hokuto2.jpg"], type: "base" }
            ]
        },
        // 美波天弥
        {
            id: "g049_m03",
            name: "美波天弥",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/049/Tenya.jpg",
                            "char/049/Tenya2.jpg"], type: "base" }
            ]
        },
        // 东里环
        {
            id: "g049_m04",
            name: "东里环",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/049/Wataru.jpg",
                            "char/049/Wataru2.jpg"], type: "base" }
            ]
        },
        // 枪千花志
        {
            id: "g049_s01",
            name: "枪千花志",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/049/Chikashi.jpg",
                            "char/049/Chikashi2.jpg"], type: "base" }
            ]
        },
        // 有泽梢
        {
            id: "g049_s02",
            name: "有泽梢",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/049/Kozue.jpg",
                            "char/049/Kozue2.jpg"], type: "base" }
            ]
        },
        // 唐草黎
        {
            id: "g049_s03",
            name: "唐草黎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/049/Rei.jpg",
                            "char/049/Rei2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
