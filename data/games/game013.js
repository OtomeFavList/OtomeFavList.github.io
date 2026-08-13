// data/games/game013.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 games.js 的 allGameFiles数组追加本文件路径
const gameData = {
    id: "game013",
    name: "Code:Realize ~创世的公主~",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"小縞なお", lang:"zh"},
        {name:"西村悠", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"有野幸", lang:"zh"}
    ],
    art: [
        {name:"miko", lang:"en"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/013.jpg",
    charList: [
        // 卡尔迪娅·贝克福德
        {
            id: "g013_f01",
            name: "卡尔迪娅·贝克福德",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Cardia.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Cardia2.jpg"], type: "base" }
            ]
        },
        // 维克多·弗兰肯斯坦
        {
            id: "g013_m01",
            name: "维克多·弗兰肯斯坦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Frankenstein.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Frankenstein2.jpg"], type: "base" }
            ]
        },
        // 圣·日耳曼
        {
            id: "g013_m02",
            name: "圣·日耳曼",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Germain.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Germain2.jpg"], type: "base" }
            ]
        },
        // 因倍·巴比康
        {
            id: "g013_m03",
            name: "因倍·巴比康",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Impey.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Impey2.jpg"], type: "base" }
            ]
        },
        // 亚森·罗宾
        {
            id: "g013_m04",
            name: "亚森·罗宾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Lupin.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Lupin2.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Lupin3.jpg"], type: "base" }
            ]
        },
        // 亚伯拉罕·范·海辛
        {
            id: "g013_m05",
            name: "亚伯拉罕·范·海辛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Van.jpg",
                            "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/013/Van2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
