// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game133", // 全局唯一ID，不可重复，如 game001
    name: "ひめひび -Princess Days-",
    year: "2020",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"柚木隼人", lang:"zh"},
        {name:"小野真太郎", lang:"zh"},
        {name:"藤元", lang:"zh"},
        {name:"NaO@猫の手", lang:"en"}
    ],
    art: [
        {name:"仁神ユキタカ", lang:"zh"}
    ],
    cover: "game/133.jpg", // 相对路径，游戏封面
    charList: [
        // 相崎恋
        {
            id: "g133_f01",
            name: "相崎恋",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/133/Koi.jpg",
                            "char/133/Koi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 夏八木光
        {
            id: "g133_m01",
            name: "夏八木光",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/133/Hikaru.jpg",
                            "char/133/Hikaru2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 速水尚仁
        {
            id: "g133_m02",
            name: "速水尚仁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/133/Naohito.jpg",
                            "char/133/Naohito2.jpg"], type: "base" },
            ]
        },
        // 柏木林斗
        {
            id: "g133_m03",
            name: "柏木林斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/133/Rinto.jpg"], type: "base" },
            ]
        },
        // 月元忍
        {
            id: "g133_m04",
            name: "月元忍",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/133/Shinobu.jpg",
                            "char/133/Shinobu2.jpg"], type: "base" },
            ]
        },
        // 天城寺雅哉
        {
            id: "g133_m05",
            name: "天城寺雅哉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/133/Tenjouji.jpg",
                            "char/133/Tenjouji2.jpg"], type: "base" },
            ]
        },
        // 高城大和
        {
            id: "g133_m06",
            name: "高城大和",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/133/Yamato.jpg",
                            "char/133/Yamato2.jpg"], type: "base" },
            ]
        },
        // 春村真亜耶
        {
            id: "g133_s01",
            name: "春村真亜耶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/133/Maaya.jpg"], type: "base" }
            ]
        },
        // 天城寺善
        {
            id: "g133_s02",
            name: "天城寺善",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/133/Zen.jpg"], type: "base" }
            ]
        }
    ]
};

/// ESModule导出
export { gameData };
