// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game030", // 全局唯一ID，不可重复
    name: "花合朔",
    year: "2023",
    publisher: ["HuneX"],
    cnStudio: "dramatic create",
    writer: [
        {name:"月花", lang:"zh"}
    ],
    art: [
        {name:"由良", lang:"zh"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/030.jpg",
    charList: [
        // 美琴
        {
            id: "g030_f01",
            name: "美琴",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/030/Mikoto.jpg"], type: "base" },
            ]
        },
        // 姬空木
        {
            id: "g030_m01",
            name: "姬空木",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/030/Himeutsugi.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/030/Himeutsugi2.jpg"], type: "base" },
            ]
        },
        // 伊吕波
        {
            id: "g030_m02",
            name: "伊吕波",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/030/Iroha.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/030/Iroha2.jpg"], type: "base" },
            ]
        },
        // 唐红
        {
            id: "g030_m03",
            name: "唐红",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/030/Karakurenai.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/030/Karakurenai2.jpg"], type: "base" },
            ]
        },
        // 蛟
        {
            id: "g030_m04",
            name: "蛟",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/030/Mizuchi.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/030/Mizuchi2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
