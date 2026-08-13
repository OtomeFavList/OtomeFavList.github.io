// data/games/game008.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game008",
    name: "剑为君舞 for S",
    year: "2021",
    publisher: ["Rejet"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"加納高子", lang:"zh"},
        {name:"吉村りりか", lang:"zh"},
        {name:"夏野景", lang:"zh"},
        {name:"小和泉いづみ", lang:"zh"},
        {name:"山田かのこ", lang:"zh"},
        {name:"砂原有季", lang:"zh"},
        {name:"関涼子", lang:"zh"},
        {name:"谷村日名子", lang:"zh"},
        {name:"真崎結衣", lang:"zh"},
        {name:"都井きつき", lang:"zh"},
        {name:"海桐ユキチカ", lang:"zh"},
        {name:"やまだ有見", lang:"ja"}
    ],
    art: [
        {name:"読", lang:"zh"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/008.jpg",
    charList: [
        // 香夜
        {
            id: "g008_f01",
            name: "香夜",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Kayo.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Kayo2.jpg"], type: "base" }
            ]
        },
        // 缘
        {
            id: "g008_m01",
            name: "缘",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Enishi.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Enishi2.jpg"], type: "base" }
            ]
        },
        // 萤
        {
            id: "g008_m02",
            name: "萤",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Kei.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Kei2.jpg"], type: "base" }
            ]
        },
        // 黑羽实彰
        {
            id: "g008_m03",
            name: "黑羽实彰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Kuroba.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Kuroba2.jpg"], type: "base" }
            ]
        },
        // 鹭原左京
        {
            id: "g008_m04",
            name: "鹭原左京",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Sakyou.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Sakyou2.jpg"], type: "base" }
            ]
        },
        // 铃悬
        {
            id: "g008_m05",
            name: "铃悬",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Suzukake.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Suzukake2.jpg"], type: "base" }
            ]
        }, // ✅修复：补上缺失逗号
        // 九十九丸
        {
            id: "g008_m06",
            name: "九十九丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Tsuzuramaru.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/008/Tsuzuramaru2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
