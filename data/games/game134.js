// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game134", // 全局唯一ID，不可重复，如 game001
    name: "ひめひび 続!二学期-New Princess Days!!-",
    year: "2020",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"柚木隼人", lang:"zh"},
        {name:"ゆずしお", lang:"ja"}
    ],
    art: [
        {name:"仁神ユキタカ", lang:"zh"}
    ],
    cover: "game/134.jpg", // 相对路径，游戏封面
    charList: [
        // 上河菜々美
        {
            id: "g134_f01",
            name: "上河菜々美",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/134/Nanami.jpg",
                            "char/134/Nanami2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 上河明良
        {
            id: "g134_m01",
            name: "上河明良",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/134/Akira.jpg",
                            "char/134/Akira2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 神代アルバート
        {
            id: "g134_m02",
            name: "神代アルバート",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/134/Albert.jpg",
                            "char/134/Albert2.jpg"], type: "base" },
            ]
        },
        // 小日向風太
        {
            id: "g134_m03",
            name: "小日向風太",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/134/Fuuta.jpg",
                            "char/134/Fuuta2.jpg"], type: "base" },
            ]
        },
        // 橘伊吹
        {
            id: "g134_m04",
            name: "橘伊吹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/134/Ibuki.jpg",
                            "char/134/Ibuki2.jpg"], type: "base" },
            ]
        },
        // 小泉顕
        {
            id: "g134_m05",
            name: "小泉顕",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/134/Ken.jpg",
                            "char/134/Ken2.jpg"], type: "base" },
            ]
        },
        // 桐山大楽
        {
            id: "g134_m06",
            name: "桐山大楽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/134/Taira.jpg",
                            "char/134/Taira2.jpg"], type: "base" },
            ]
        },
        // 夏八木光
        {
            id: "g134_s01",
            name: "夏八木光",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/134/Hikaru.jpg",
                            "char/134/Hikaru2.jpg"], type: "base" }
            ]
        },
        // 柏木林斗
        {
            id: "g134_s02",
            name: "柏木林斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/134/Rinto.jpg",
                            "char/134/Rinto2.jpg"], type: "base" }
            ]
        },
        // 直村琉耶
        {
            id: "g134_s03",
            name: "直村琉耶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/134/Ryuuya.jpg",
                            "char/134/Ryuuya2.jpg",
                            "char/134/Ryuuya3.jpg"], type: "base" }
            ]
        },
        // 高城大和
        {
            id: "g134_s04",
            name: "高城大和",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/134/Yamato.jpg",
                            "char/134/Yamato2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
