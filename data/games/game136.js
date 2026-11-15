// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game136", // 全局唯一ID，不可重复，如 game001
    name: "蝶の毒 華の鎖~大正艶恋異聞~",
    year: "2020",
    publisher: ["Aromarie"],
    cnStudio: "暂无",
    writer: [
        {name:"丸木文華", lang:"zh"}
    ],
    art: [
        {name:"天野ちぎり", lang:"zh"}
    ],
    cover: "game/136.jpg", // 相对路径，游戏封面
    charList: [
        // 野宮百合子
        {
            id: "g136_f01",
            name: "野宮百合子",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/136/Yuriko.jpg",
                            "char/136/Yuriko2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 藤田均
        {
            id: "g136_m01",
            name: "藤田均",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/136/Fujita.jpg",
                            "char/136/Fujita2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 尾崎秀雄
        {
            id: "g136_m02",
            name: "尾崎秀雄",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/136/Hideo.jpg",
                            "char/136/Hideo2.jpg"], type: "base" },
            ]
        },
        // 真島芳樹
        {
            id: "g136_m03",
            name: "真島芳樹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/136/Majima.jpg"], type: "base" },
            ]
        },
        // 野宮瑞人
        {
            id: "g136_m04",
            name: "野宮瑞人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/136/Mizuhito.jpg"], type: "base" },
            ]
        },
        // 斯波純一
        {
            id: "g136_m05",
            name: "斯波純一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/136/Shiba.jpg",
                            "char/136/Shiba2.jpg"], type: "base" },
            ]
        },
        // 天海鏡子
        {
            id: "g136_s01",
            name: "天海鏡子",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/136/Kyouko.jpg",
                            "char/136/Kyouko2.jpg"], type: "base" },
            ]
        }
    ]
};

// ESModule导出
export { gameData };
