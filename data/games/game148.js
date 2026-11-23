// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game148", // 全局唯一ID，不可重复，如 game001
    name: "幕末恋华新选组",
    year: "2021",
    publisher: ["D3 Publisher"],
    cnStudio: "D3 Publisher",
    writer: [
        {name:"館山緑", lang:"zh"}
    ],
    art: [
        {name:"TOKO", lang:"en"}
    ],
    cover: "game/148.jpg", // 相对路径，游戏封面
    charList: [
        // 樱庭铃花
        {
            id: "g148_f01",
            name: "樱庭铃花",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Midori.jpg"], type: "base" },
            ]
        },
        // 斎藤一
        {
            id: "g148_m01",
            name: "斎藤一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Hajime.jpg"], type: "base" }
            ]
        },
        // 藤堂平助
        {
            id: "g148_m02",
            name: "藤堂平助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Heisuke.jpg"], type: "base" }
            ]
        },
        // 近藤勇
        {
            id: "g148_m03",
            name: "近藤勇",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Isami.jpg"], type: "base" }
            ]
        },
        // 山南敬助
        {
            id: "g148_m04",
            name: "山南敬助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Keisuke.jpg"], type: "base" }
            ]
        },
        // 才谷梅太郎
        {
            id: "g148_m05",
            name: "才谷梅太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Saidani.jpg"], type: "base" }
            ]
        },
        // 原田左之助
        {
            id: "g148_m05",
            name: "原田左之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Sanosuke.jpg"], type: "base" }
            ]
        },
        // 永仓新八
        {
            id: "g148_m05",
            name: "永仓新八",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Shinpachi.jpg"], type: "base" }
            ]
        },
        // 冲田总司
        {
            id: "g148_m05",
            name: "冲田总司",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Souji.jpg"], type: "base" }
            ]
        },
        // 山崎烝
        {
            id: "g148_m05",
            name: "山崎烝",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Susumu.jpg"], type: "base" }
            ]
        },
        // 土方岁三
        {
            id: "g148_m10",
            name: "土方岁三",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Toshizou.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
