// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game034", // 全局唯一ID，不可重复
    name: "我的超级现充生活",
    year: "2024",
    publisher: ["TetraScope"],
    cnStudio: "TetraScope",
    writer: [
        {name:"kaiso", lang:"en"}
    ],
    art: [
        {name:"ne-on", lang:"en"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/034.jpg",
    charList: [
        // 姐崎希美
        {
            id: "g034_f01",
            name: "姐崎希美",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/034/Nozomi.jpg"], type: "base" },
            ]
        },
        // 仓口步
        {
            id: "g034_m01",
            name: "仓口步",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/034/Ayumu.jpg"], type: "base" },
            ]
        },
        // 星名穗积
        {
            id: "g034_m02",
            name: "星名穗积",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/034/Hozumi.jpg"], type: "base" },
            ]
        },
        // 姐崎隼
        {
            id: "g034_m03",
            name: "姐崎隼",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/034/Shun.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
