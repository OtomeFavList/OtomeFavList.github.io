// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game025", // 全局唯一ID，不可重复
    name: "花之女王",
    year: "2023",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"小縞なお", lang:"zh"},
        {name:"有野幸", lang:"zh"},
        {name:"長野和泉", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"いわた志信", lang:"ja"}
    ],
    art: [
        {name:"薄葉カゲロー", lang:"zh"}
    ],
    cover: "game/025.jpg",
    charList: [
        // 薇欧蕾特
        {
            id: "g025_f01",
            name: "薇欧蕾特",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/025/Violette.jpg"], type: "base" }
            ]
        },
        // 吉斯兰
        {
            id: "g025_m01",
            name: "吉斯兰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/025/Ghislain.jpg"], type: "base" }
            ]
        },
        // 尤贝尔
        {
            id: "g025_m02",
            name: "尤贝尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/025/Hubert.jpg"], type: "base" }
            ]
        },
        // 雷欧
        {
            id: "g025_m03",
            name: "雷欧",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/025/Leon.jpg"], type: "base" }
            ]
        },
        // 路易
        {
            id: "g025_m04",
            name: "路易",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/025/Louis.jpg"], type: "base" }
            ]
        },
        // 奥菲
        {
            id: "g025_m05",
            name: "奥菲",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/025/Orpheus.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game025", // 全局唯一ID，不可重复
    name: "花之女王",
    year: "2023",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"小縞なお", lang:"zh"},
        {name:"有野幸", lang:"zh"},
        {name:"長野和泉", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"いわた志信", lang:"ja"}
    ],
    art: [
        {name:"薄葉カゲロー", lang:"zh"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/025.jpg",
    charList: [
        // 薇欧蕾特
        {
            id: "g025_f01",
            name: "薇欧蕾特",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/025/Violette.jpg"], type: "base" },
            ]
        },
        // 吉斯兰
        {
            id: "g025_m01",
            name: "吉斯兰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/025/Ghislain.jpg"], type: "base" },
            ]
        },
        // 尤贝尔
        {
            id: "g025_m02",
            name: "尤贝尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/025/Hubert.jpg"], type: "base" },
            ]
        },
        // 雷欧
        {
            id: "g025_m03",
            name: "雷欧",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/025/Leon.jpg"], type: "base" },
            ]
        },
        // 路易
        {
            id: "g025_m04",
            name: "路易",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/025/Louis.jpg"], type: "base" },
            ]
        },
        // 奥菲
        {
            id: "g025_m05",
            name: "奥菲",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/025/Orpheus.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
