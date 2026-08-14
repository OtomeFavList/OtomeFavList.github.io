// data/games/game010.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 games.js 的 allGameFiles数组追加本文件路径
const gameData = {
    id: "game010",
    name: "冷然之天秤：帝都幻惑绮谭",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"片桐由摩", lang:"zh"}
    ],
    art: [
        {name:"さとい", lang:"ja"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/010.jpg",
    charList: [
        // 久世鸫
        {
            id: "g010_f01",
            name: "久世鸫",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Tsugumi.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Tsugumi2.jpg"], type: "base" }
            ]
        },
        // 鸿上滉
        {
            id: "g010_m01",
            name: "鸿上滉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Akira.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Akira2.jpg"], type: "base" }
            ]
        },
        // 星川翡翠
        {
            id: "g010_m02",
            name: "星川翡翠",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Hoshikawa.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Hoshikawa2.jpg"], type: "base" }
            ]
        },
        // 汀紫鹤
        {
            id: "g010_m03",
            name: "汀紫鹤",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Migiwa.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Migiwa2.jpg"], type: "base" }
            ]
        },
        // 尾崎隼人
        {
            id: "g010_m04",
            name: "尾崎隼人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Ozaki.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Ozaki2.jpg"], type: "base" }
            ]
        },
        // 鹭泽累
        {
            id: "g010_m05",
            name: "鹭泽累",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Rui.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Rui2.jpg"], type: "base" }
            ]
        },
        // 鹈饲昌吾
        {
            id: "g010_m06",
            name: "鹈饲昌吾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Ukai.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/010/Ukai2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
