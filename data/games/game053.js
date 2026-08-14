// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game053", // 全局唯一ID，不可重复
    name: "绯色的碎片 玉依姬奇谭 ~记忆中的颜色~",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"西村悠", lang:"zh"}
    ],
    art: [
        {name:"カズキヨネ", lang:"ja"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/053.jpg",
    charList: [
        // 春日珠纪
        {
            id: "g053_f01",
            name: "女主A",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/053/Tamaki.jpg"], type: "base" },
            ]
        },
        // 鸦取真弘
        {
            id: "g053_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/053/Mahiro.jpg"], type: "base" },
            ]
        },
        // 狗谷辽
        {
            id: "g053_m02",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/053/Ryou.jpg"], type: "base" },
            ]
        },
        // 犬戒慎司
        {
            id: "g053_m03",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/053/Shinji.jpg"], type: "base" },
            ]
        },
        // 大蛇草
        {
            id: "g053_m04",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/053/Suguru.jpg"], type: "base" },
            ]
        },
        // 鬼崎拓磨
        {
            id: "g053_m05",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/053/Takuma.jpg"], type: "base" },
            ]
        },
        // 狐邑祐一
        {
            id: "g053_m06",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/053/Yuuichi.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
