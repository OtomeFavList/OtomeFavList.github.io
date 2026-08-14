// data/games/game014.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game014", // 全局唯一ID，不可重复
    name: "与魔共舞",
    year: "2022",
    publisher: ["Rejet"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"真崎結衣", lang:"zh"},
        {name:"小和泉いづみ", lang:"zh"},
        {name:"三芳秀克", lang:"zh"},
        {name:"久遠まひろ", lang:"zh"},
        {name:"関涼子", lang:"zh"},
        {name:"やまだ有見", lang:"ja"},
        {name:"こたに白子", lang:"ja"}
    ],
    art: [
        {name:"前田浩孝", lang:"zh"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/014.jpg",
    charList: [
        // 立华律香
        {
            id: "g014_f01",
            name: "立华律香",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/014/Ritsuka.jpg"], type: "base" },
            ]
        },
        // 立华林多
        {
            id: "g014_m01",
            name: "立华林多",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/014/Lindo.jpg"], type: "base" },
            ]
        },
        // 南那城梅吉
        {
            id: "g014_m02",
            name: "南那城梅吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/014/Mage.jpg"], type: "base" },
            ]
        },
        // 钩贯雷姆
        {
            id: "g014_m03",
            name: "钩贯雷姆",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/014/Rem.jpg"], type: "base" },
            ]
        },
        // 罗恩
        {
            id: "g014_m04",
            name: "罗恩",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/014/Roen.jpg"], type: "base" },
            ]
        },
        // 枣坂四季
        {
            id: "g014_m05",
            name: "枣坂四季",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/014/Shiki.jpg"], type: "base" },
            ]
        },
        // 楚神乌列
        {
            id: "g014_m06",
            name: "楚神乌列",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/014/Urie.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
