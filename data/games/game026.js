// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game026", // 全局唯一ID，不可重复
    name: "even if TEMPEST 黄昏中魔女如是说",
    year: "2023",
    publisher: ["Voltage"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"潮文音", lang:"zh"}
    ],
    art: [
        {name:"のりた", lang:"ja"}
    ],
    cover: "game/026.jpg",
    charList: [
        // 安娜斯塔西娅·林赛尔
        {
            id: "g026_f01",
            name: "安娜斯塔西娅·林赛尔",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/026/Anastasia.jpg",
                            "char/026/Anastasia2.jpg"], type: "base" }
            ]
        },
        // 克莱奥斯·卡索洛克
        {
            id: "g026_m01",
            name: "克莱奥斯·卡索洛克",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/026/Crius.jpg",
                            "char/026/Crius2.jpg",
                            "char/026/Crius3.jpg"], type: "base" }
            ]
        },
        // 路西恩·诺伊施本
        {
            id: "g026_m02",
            name: "路西恩·诺伊施本",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/026/Lucien.jpg",
                            "char/026/Lucien2.jpg",
                            "char/026/Lucien3.jpg"], type: "base" }
            ]
        },
        // 提瑞尔·I·利斯特
        {
            id: "g026_m03",
            name: "提瑞尔·I·利斯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/026/Tyril.jpg",
                            "char/026/Tyril2.jpg",
                            "char/026/Tyril3.jpg"], type: "base" }
            ]
        },
        // 泽恩·索菲尔德
        {
            id: "g026_m04",
            name: "泽恩·索菲尔德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/026/Zenn.jpg",
                            "char/026/Zenn2.jpg",
                            "char/026/Zenn3.jpg"], type: "base" }
            ]
        },
        // 伊什
        {
            id: "g026_fd01",
            name: "伊什",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/026/Majo.jpg",
                            "char/026/Majo2.jpg",
                            "char/026/Majo3.jpg",
                            "char/026/Majo4.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
