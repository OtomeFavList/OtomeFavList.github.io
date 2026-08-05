// data/games/game010.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
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
                { srcList: ["img/char/003/Awaki.jpg","img/char/003/Awaki2.jpg"], type: "base" }
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
                { srcList: ["img/char/003/Canus.jpg","img/char/003/Canus2.jpg"], type: "base" }
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
                { srcList: ["img/char/003/Ignis.jpg","img/char/003/Ignis2.jpg"], type: "base" }
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
                { srcList: ["img/char/003/Il.jpg","img/char/003/Il2.jpg"], type: "base" }
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
                { srcList: ["img/char/003/Misyr.jpg","img/char/003/Misyr2.jpg"], type: "base" }
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
                { srcList: ["img/char/003/Rindou.jpg","img/char/003/Rindou2.jpg"], type: "base" }
            ]
        }
        // 鹈饲昌吾
        {
            id: "g010_m06",
            name: "鹈饲昌吾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/003/Rindou.jpg","img/char/003/Rindou2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
