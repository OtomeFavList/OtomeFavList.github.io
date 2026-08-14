// data/games/game027.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game027", // 全局唯一ID，不可重复
    name: "失忆症",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"望月柚枝", lang:"zh"},
        {name:"果村なずな", lang:"zh"},
        {name:"やまだ有見", lang:"ja"}
    ],
    art: [
        {name:"花邑まい", lang:"zh"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/027.jpg",
    charList: [
        // Heroine
        {
            id: "g027_f01",
            name: "Heroine",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Protagonist.jpg"], type: "base" },
            ]
        },
        // IKKI
        {
            id: "g027_m01",
            name: "IKKI",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ikki.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ikki2.jpg"], type: "base" },
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ikki3.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ikki4.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ikki5.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ikki6.jpg"], type: "fd" },
            ]
        },
        // KENT
        {
            id: "g027_m02",
            name: "KENT",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Kent.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Kent2.jpg"], type: "base" },
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Kent3.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Kent4.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Kent5.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Kent6.jpg"], type: "fd" },
            ]
        },
        // SHIN
        {
            id: "g027_m03",
            name: "SHIN",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Shin.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Shin2.jpg"], type: "base" },
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Shin3.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Shin4.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Shin5.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Shin6.jpg"], type: "fd" },
            ]
        },
        // TOMA
        {
            id: "g027_m04",
            name: "TOMA",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Toma.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Toma2.jpg"], type: "base" },
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Toma3.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Toma4.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Toma5.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Toma6.jpg"], type: "fd" },
            ]
        },
        // UKYO
        {
            id: "g027_h01",
            name: "UKYO",
            gender: "male",
            isHidden: true,
            isFD: true,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ukyo.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ukyo2.jpg"], type: "base" },
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ukyo3.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ukyo4.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ukyo5.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/027/Ukyo6.jpg"], type: "fd" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
