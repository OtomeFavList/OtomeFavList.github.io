// data/games/game011.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game011",
    name: "毘卢遮那战姬 ~源平飞花梦想~",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"伊東愛", lang:"zh"},
        {name:"崎本知世", lang:"zh"},
        {name:"庵原ふじ", lang:"zh"},
        {name:"榛乃綾子", lang:"zh"},
        {name:"春森よしちか", lang:"zh"},
    ],
    art: [
        {name:"読", lang:"zh"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/011.jpg",
    charList: [
        // 源义经
        {
            id: "g011_f01",
            name: "源义经",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Shanaou.jpg"], type: "base" }
            ]
        },
        // 武藏坊弁庆
        {
            id: "g011_m01",
            name: "武藏坊弁庆",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Benkei.jpg"], type: "base" }
            ]
        },
        // 平教经
        {
            id: "g011_m02",
            name: "平教经",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Noritsune.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Noritsune2.jpg"], type: "base" }
            ]
        },
        // 春玄
        {
            id: "g011_m03",
            name: "春玄",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Shungen.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Shungen2.jpg"], type: "base" }
            ]
        },
        // 平知盛
        {
            id: "g011_m04",
            name: "平知盛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Tomomori.jpg"], type: "base" }
            ]
        },
        // 源赖朝
        {
            id: "g011_m05",
            name: "源赖朝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Yoritomo.jpg"], type: "base" }
            ]
        },
        // 佐佐木高纲
        {
            id: "g011_fd01",
            name: "佐佐木高纲",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Sasaki.jpg"], type: "base" }
            ]
        },
        // 平重衡
        {
            id: "g011_fd02",
            name: "平重衡",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Shigehira.jpg"], type: "base" }
            ]
        },
        // 佐藤忠信
        {
            id: "g011_fd03",
            name: "佐藤忠信",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Tadanobu.jpg"], type: "base" }
            ]
        },
        // 佐藤继信
        {
            id: "g011_fd04",
            name: "佐藤继信",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/011/Tsugunobu.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
