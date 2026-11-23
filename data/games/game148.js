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
        // 桜庭鈴花
        {
            id: "g148_f01",
            name: "桜庭鈴花",
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
        // 普通可攻略男主 male
        {
            id: "g148_m05",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/.jpg"], type: "base" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g148_m05",
            name: "男主6",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/.jpg"], type: "base" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g148_m05",
            name: "男主7",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/.jpg"], type: "base" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g148_m05",
            name: "男主8",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/.jpg"], type: "base" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g148_m05",
            name: "男主9",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/.jpg"], type: "base" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g148_m10",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/148/.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
