// data/games/game067.js
// ✅已核对信息
const gameData = {
    id: "game067", // 全局唯一ID，不可重复，如 game001
    name: "大正×对称爱丽丝 all in one",
    year: "2026",
    publisher: ["Primula"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"藤文", lang:"zh"}
    ],
    art: [
        {name:"めろ", lang:"ja"}
    ],
    cover: "game/067.jpg",
    charList: [
        // 有栖百合花
        {
            id: "g067_f01",
            name: "有栖百合花",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Yurika.jpg",
                            "char/067/Yurika2.jpg",
                            "char/067/Yurika3.jpg",
                            "char/067/Yurika4.jpg",
                            "char/067/Yurika5.jpg",
                            "char/067/Yurika6.jpg"], type: "base" },
            ]
        },
        // 小红帽
        {
            id: "g067_m01",
            name: "小红帽",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Akazukin.jpg",
                            "char/067/Akazukin2.jpg",
                            "char/067/Akazukin3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 爱丽丝
        {
            id: "g067_m02",
            name: "爱丽丝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Alice.jpg",
                            "char/067/Alice2.jpg",
                            "char/067/Alice3.jpg",
                            "char/067/Alice4.jpg",
                            "char/067/Alice5.jpg",
                            "char/067/Alice6.jpg"], type: "base" },
            ]
        },
        // 仙杜瑞拉
        {
            id: "g067_m03",
            name: "仙杜瑞拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Cinderella.jpg",
                            "char/067/Cinderella2.jpg",
                            "char/067/Cinderella3.jpg",
                            "char/067/Cinderella4.jpg"], type: "base" },
            ]
        },
        // 格莱特
        {
            id: "g067_m04",
            name: "格莱特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Gretel.jpg",
                            "char/067/Gretel2.jpg",
                            "char/067/Gretel3.jpg",
                            "char/067/Gretel4.jpg"], type: "base" },
            ]
        },
        // 辉夜
        {
            id: "g067_m05",
            name: "辉夜",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Kaguya.jpg",
                            "char/067/Kaguya2.jpg",
                            "char/067/Kaguya3.jpg"], type: "base" },
            ]
        },
        // 魔法师
        {
            id: "g067_m06",
            name: "魔法师",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Mahoutsukai.jpg",
                            "char/067/Mahoutsukai2.jpg",
                            "char/067/Mahoutsukai3.jpg",
                            "char/067/Mahoutsukai4.jpg"], type: "base" },
            ]
        },
        // 白雪
        {
            id: "g067_m07",
            name: "白雪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/067/Shirayuki.jpg",
                            "char/067/Shirayuki2.jpg",
                            "char/067/Shirayuki3.jpg"], type: "base" },
            ]
        },
        // 大神
        {
            id: "g067_fd01",
            name: "大神",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/067/Ookami.jpg",
                            "char/067/Ookami2.jpg",
                            "char/067/Ookami4.jpg"], type: "base" }
            ]
        },
        // 猎师
        {
            id: "g067_fd02",
            name: "猎师",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/067/Ryoushi.jpg",
                            "char/067/Ryoushi2.jpg"], type: "base" }
            ]
        },
        // 母亲
        {
            id: "g067_s01",
            name: "母亲",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/067/Hahaoya.jpg",
                            "char/067/Hahaoya2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
