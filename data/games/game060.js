// data/games/game060.js
// ✅已核对信息
const gameData = {
    id: "game060", // 全局唯一ID，不可重复
    name: "绝对阶级学园",
    year: "2026",
    publisher: ["Daisy²"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"夏野景", lang:"zh"},
        {name:"宙地", lang:"zh"},
        {name:"伽那ノ光", lang:"zh"},
        {name:"喜屋武米助", lang:"zh"}
    ],
    art: [
        {name:"和田ベコ", lang:"zh"}
    ],
    cover: "game/060.jpg",
    charList: [
        // 藤枝音理
        {
            id: "g060_f01",
            name: "藤枝音理",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Neri.jpg",
                            "char/060/Neri2.jpg",
                            "char/060/Neri3.jpg"], type: "base" }
            ]
        },
        // 五十岚春
        {
            id: "g060_m01",
            name: "五十岚春",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Haru.jpg"], type: "base" }
            ]
        },
        // 加地一波
        {
            id: "g060_m02",
            name: "加地一波",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Ichiha.jpg"], type: "base" }
            ]
        },
        // 鹭之宫零
        {
            id: "g060_m03",
            name: "鹭之宫零",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Rei.jpg"], type: "base" }
            ]
        },
        // 鹰岭陆
        {
            id: "g060_m04",
            name: "鹰岭陆",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Riku.jpg"], type: "base" }
            ]
        },
        // 七濑十矢
        {
            id: "g060_m05",
            name: "七濑十矢",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/060/Touya.jpg"], type: "base" }
            ]
        },
        // 玖珂叁月
        {
            id: "g60_s01",
            name: "玖珂叁月",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/060/Mitsuki.jpg"], type: "base" }
            ]
        },
        // 八木泽萌花
        {
            id: "g60_s02",
            name: "八木泽萌花",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/060/Moeka.jpg"], type: "base" }
            ]
        },
        // 女王
        {
            id: "g60_s03",
            name: "女王",
            hiddenName: ["藤枝麻理亚"],
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/060/Queen.jpg"], type: "base" }
            ]
        },
        // 玖珂真一
        {
            id: "g60_s04",
            name: "玖珂真一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/060/Shinichi.jpg"], type: "base" }
            ]
        },
        // 镝木苍一郎
        {
            id: "g60_s05",
            name: "镝木苍一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/060/Souichirou.jpg"], type: "base" }
            ]
        },
        // 爱德华·高崎
        {
            id: "g60_s06",
            name: "爱德华·高崎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/060/Takasaki.jpg"], type: "base" }
            ]
        }
};

// ESModule导出
export { gameData };
