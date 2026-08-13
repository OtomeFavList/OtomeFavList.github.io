// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game044", // 全局唯一ID，不可重复
    name: "9 R.I.P.",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"喜多南", lang:"zh"},
        {name:"亜文", lang:"zh"},
        {name:"小縞なお", lang:"zh"},
        {name:"鵜森はだし", lang:"zh"},
        {name:"葉月ネリカ", lang:"zh"},
        {name:"海野凛久", lang:"zh"},
        {name:"藤川ちより", lang:"zh"},
        {name:"長田大夢", lang:"zh"},
        {name:"長野和泉", lang:"zh"},
        {name:"ゆきみなべ", lang:"ja"},
        {name:"Salala", lang:"en"}
    ],
    art: [
        {name:"ユウヤ", lang:"ja"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/044.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 逸色珠沙
        {
            id: "g044_f01",
            name: "逸色珠沙",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Misa.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Misa2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 响
        {
            id: "g044_m01",
            name: "响",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Hibiki.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Hibiki2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 狐春
        {
            id: "g044_m02",
            name: "狐春",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Koharu.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Koharu2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 香羊
        {
            id: "g044_m03",
            name: "香羊",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Kouyou.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Kouyou2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 红华
        {
            id: "g044_m04",
            name: "红华",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Kureha.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Kureha2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 魅勿鬽
        {
            id: "g044_m05",
            name: "魅勿鬽",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Minami.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Minami2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 圣夜
        {
            id: "g044_m06",
            name: "圣夜",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Seiya.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Seiya2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 星绊
        {
            id: "g044_m07",
            name: "星绊",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Sena.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Sena2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 幸麿
        {
            id: "g044_m08",
            name: "幸麿",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Yukimaro.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Yukimaro2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 桃嘉
        {
            id: "g044_h01",
            name: "桃嘉",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Toka.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/044/Toka2.png"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
