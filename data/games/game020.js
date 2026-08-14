// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game020", // 全局唯一ID，不可重复
    name: "不可逾越的红花 ~双月~",
    year: "2023",
    publisher: ["HuneX"],
    cnStudio: "dramatic create",
    writer: [
        {name:"松竹梅", lang:"zh"}
    ],
    art: [
        {name:"月野御豆", lang:"zh"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/020.jpg",
    charList: [
        // 娜拉
        {
            id: "g020_f01",
            name: "娜拉",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/020/Naala.jpg"], type: "base" },
            ]
        },
        // 赛弗
        {
            id: "g020_m01",
            name: "赛弗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/020/Cef.jpg"], type: "base" },
            ]
        },
        // 艾斯塔
        {
            id: "g020_m02",
            name: "艾斯塔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/020/Esta.jpg"], type: "base" },
            ]
        },
        // 泽奇
        {
            id: "g020_m03",
            name: "泽奇",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/020/Jigi.jpg"], type: "base" },
            ]
        },
        // 纳朗
        {
            id: "g020_m04",
            name: "纳朗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/020/Naran.jpg"], type: "base" },
            ]
        },
        // 诺尔
        {
            id: "g020_m05",
            name: "诺尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/020/Nohl.jpg"], type: "base" },
            ]
        },
        // 卢奇
        {
            id: "g020_m06",
            name: "卢奇",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/020/Ruzi.jpg"], type: "base" },
            ]
        },
        // 斯兰
        {
            id: "g020_m07",
            name: "斯兰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/020/Suren.jpg"], type: "base" },
            ]
        },
        // 托亚
        {
            id: "g020_m08",
            name: "托亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/020/Touya.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
