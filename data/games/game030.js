// data/games/game030.js
// ✅已核对信息
// ℹ️部分配角名未校对
const gameData = {
    id: "game030", // 全局唯一ID，不可重复
    name: "花合 朔",
    year: "2023",
    publisher: ["WoGa"],
    cnStudio: "dramatic create",
    writer: [
        {name:"月花", lang:"zh"}
    ],
    art: [
        {name:"由良", lang:"zh"}
    ],
    cover: "game/030.jpg",
    charList: [
        // 美琴
        {
            id: "g030_f01",
            name: "美琴",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Mikoto.jpg",
                            "char/030/Mikoto2.jpg",
                            "char/030/Mikoto3.jpg"], type: "base" }
            ]
        },
        // 姬空木
        {
            id: "g030_m01",
            name: "姬空木",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Himeutsugi.jpg",
                            "char/030/Himeutsugi2.jpg",
                            "char/030/Himeutsugi3.jpg",
                            "char/030/Himeutsugi4.jpg"], type: "base" }
            ]
        },
        // 伊吕波
        {
            id: "g030_m02",
            name: "伊吕波",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Iroha.jpg",
                            "char/030/Iroha2.jpg",
                            "char/030/Iroha3.jpg"], type: "base" }
            ]
        },
        // 唐红
        {
            id: "g030_m03",
            name: "唐红",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Karakurenai.jpg",
                            "char/030/Karakurenai2.jpg",
                            "char/030/Karakurenai3.jpg"], type: "base" }
            ]
        },
        // 蛟
        {
            id: "g030_m04",
            name: "蛟",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Mizuchi.jpg",
                            "char/030/Mizuchi2.jpg",
                            "char/030/Mizuchi3.jpg",
                            "char/030/Mizuchi4.jpg"], type: "base" }
            ]
        },
        // 宇津都
        {
            id: "g030_m04",
            name: "宇津都",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Utsutsu.jpg"], type: "base" }
            ]
        },
        // 金时花
        {
            id: "g030_s01",
            name: "金时花",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/030/Awahana.jpg"], type: "base" }
            ]
        },
        // 日向
        {
            id: "g030_s02",
            name: "日向",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/030/Hinata.jpg"], type: "base" }
            ]
        },
        // いめ
        {
            id: "g030_s03",
            name: "いめ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/030/Ime.jpg"], type: "base" }
            ]
        },
        // 阿波花
        {
            id: "g030_s04",
            name: "阿波花",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/030/Kintokiana.jpg"], type: "base" }
            ]
        },
        // 斧定九郎
        {
            id: "g030_s05",
            name: "斧定九郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/030/Kurou.jpg",
                            "char/030/Kurou2.jpg"], type: "base" }
            ]
        },
        // 百岁
        {
            id: "g030_s06",
            name: "百岁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/030/Momotose.jpg",
                            "char/030/Momotose2.jpg"], type: "base" }
            ]
        },
        // 尼诺
        {
            id: "g030_s07",
            name: "尼诺",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/030/Nino.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
