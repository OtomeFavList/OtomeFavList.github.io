// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game063", // 全局唯一ID，不可重复
    name: "三国恋战记 ~少女的兵法！~",
    year: "2026",
    publisher: ["Daisy²","PROTOTYPE"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"宙地", lang:"zh"},
        {name:"陣内", lang:"zh"},
        {name:"トム", lang:"ja"}
    ],
    art: [
        {name:"スズケン", lang:"ja"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/063.jpg",
    charList: [
        // 山田花
        {
            id: "g063_f01",
            name: "山田花",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Hana.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Hana2.jpg"], type: "base" },
            ]
        },
        // 文若
        {
            id: "g063_m01",
            name: "文若",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Bunjaku.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Bunjaku2.jpg"], type: "base" },
            ]
        },
        // 仲谋
        {
            id: "g063_m02",
            name: "仲谋",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Chuubou.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Chuubou2.jpg"], type: "base" },
            ]
        },
        // 玄德
        {
            id: "g063_m03",
            name: "玄德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Gentoku.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Gentoku2.jpg"], type: "base" },
            ]
        },
        // 公瑾
        {
            id: "g063_m04",
            name: "公瑾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Koukin.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Koukin2.jpg"], type: "base" },
            ]
        },
        // 孔明
        {
            id: "g063_m05",
            name: "孔明",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Koumei.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Koumei2.jpg"], type: "base" },
            ]
        },
        // 孟德
        {
            id: "g063_m06",
            name: "孟德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Moutoku.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Moutoku2.jpg"], type: "base" },
            ]
        },
        // 子龙
        {
            id: "g063_m07",
            name: "子龙",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Shiryuu.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Shiryuu2.jpg"], type: "base" },
            ]
        },
        // 云长
        {
            id: "g063_m08",
            name: "云长",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Unchou.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Unchou2.jpg"], type: "base" },
            ]
        },
        // 翼德
        {
            id: "g063_m09",
            name: "翼德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Yokutoku.jpg",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/063/Yokutoku2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
