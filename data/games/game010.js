// data/games/game010.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 games.js 的 allGameFiles数组追加本文件路径
const gameData = {
    id: "game010",
    name: "冷然之天秤：帝都幻惑绮谭",
    year: "2022",
    publisher: "Otomate",
    cnStudio: "GSE",
    writer: ["片桐由摩"],
    art: "さとい",
    cover: "img/game/010.jpg",
    charList: [
        // 久世鸫
        {
            id: "g010_f01",
            name: "久世鸫",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/010/Tsugumi.jpg","img/char/010/Tsugumi2.jpg"], type: "base" }
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
                { srcList: ["img/char/010/Akira.jpg","img/char/010/Akira2.jpg"], type: "base" }
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
                { srcList: ["img/char/010/Hoshikawa.jpg","img/char/010/Hoshikawa2.jpg"], type: "base" }
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
                { srcList: ["img/char/010/Migiwa.jpg","img/char/010/Migiwa2.jpg"], type: "base" }
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
                { srcList: ["img/char/010/Ozaki.jpg","img/char/010/Ozaki2.jpg"], type: "base" }
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
                { srcList: ["img/char/010/Rui.jpg","img/char/010/Rui2.jpg"], type: "base" }
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
                { srcList: ["img/char/010/Ukai.jpg","img/char/010/Ukai2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
