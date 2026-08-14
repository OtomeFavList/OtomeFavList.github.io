// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game023", // 全局唯一ID，不可重复
    name: "JACKJEANNE",
    year: "2023",
    publisher: ["BROCCOLI"],
    cnStudio: "GSE",
    writer: [
        {name:"石田翠", lang:"zh"},
        {name:"十和田シン", lang:"zh"}
    ],
    art: [
        {name:"石田翠", lang:"zh"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/023.jpg",
    charList: [
        // 立花希佐
        {
            id: "g023_f01",
            name: "立花希佐",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Kisa.png",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Kisa2.png"], type: "base" },
            ]
        },
        // 睦实介
        {
            id: "g023_m01",
            name: "睦实介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Kai.png",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Kai2.png"], type: "base" },
            ]
        },
        // 白田美骑
        {
            id: "g023_m02",
            name: "白田美骑",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Mitsuki.png",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Mitsuki2.png"], type: "base" },
            ]
        },
        // 根地黑门
        {
            id: "g023_m03",
            name: "根地黑门",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Neji.png",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Neji2.png"], type: "base" },
            ]
        },
        // 高科更文
        {
            id: "g023_m04",
            name: "高科更文",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Sarafumi.png",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Sarafumi2.png"], type: "base" },
            ]
        },
        // 世长创司郎
        {
            id: "g023_m05",
            name: "世长创司郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Soushirou.png",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Soushirou2.png"], type: "base" },
            ]
        },
        // 织卷寿寿
        {
            id: "g023_m06",
            name: "织卷寿寿",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Suzu.png",
                            "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Suzu2.png"], type: "base" },
            ]
        },
        // 田中右宙为
        {
            id: "g023_m07",
            name: "田中右宙为",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Chui.png"], type: "base" },
            ]
        },
        // 加斋中
        {
            id: "g023_m08",
            name: "加斋中",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/023/Kasai.png"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
