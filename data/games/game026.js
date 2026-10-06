// data/games/game026.js
// ✅已核对信息
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
                { srcList: ["char/026/Anastasia.jpg"], type: "base" },
                { srcList: ["char/026/Anastasia2.jpg"], type: "fd" }
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
                            "char/026/Crius3.jpg"], type: "base" },
                { srcList: ["char/026/Crius4.jpg",
                            "char/026/Crius5.jpg"], type: "fd" }
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
                            "char/026/Lucien3.jpg"], type: "base" },
                { srcList: ["char/026/Lucien4.jpg",
                            "char/026/Lucien5.jpg"], type: "fd" }
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
                            "char/026/Tyril3.jpg"], type: "base" },
                { srcList: ["char/026/Tyril4.jpg",
                            "char/026/Tyril5.jpg"], type: "fd" }
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
                            "char/026/Zenn3.jpg"], type: "base" },
                { srcList: ["char/026/Zenn4.jpg",
                            "char/026/Zenn5.jpg"], type: "fd" }
            ]
        },
        // 伊什
        {
            id: "g026_fd01",
            name: "伊什",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/026/Majo.jpg",
                            "char/026/Majo2.jpg",
                            "char/026/Majo3.jpg"], type: "base" }
            ]
        },
        // 康拉德·诺伊施本
        {
            id: "g026_s01",
            name: "康拉德·诺伊施本",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Conrad.jpg"], type: "base" }
            ]
        },
        // 恩迪
        {
            id: "g026_s02",
            name: "恩迪",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Endy.jpg"], type: "base" }
            ]
        },
        // 埃维莉娜·林赛尔
        {
            id: "g026_s03",
            name: "埃维莉娜·林赛尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Evelina.jpg"], type: "base" }
            ]
        },
        // 雨果·斯宾塞
        {
            id: "g026_s04",
            name: "雨果·斯宾塞",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Hugo.jpg"], type: "base" }
            ]
        },
        // 兰登·伍利
        {
            id: "g026_s05",
            name: "兰登·伍利",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Landon.jpg"], type: "base" }
            ]
        },
        // 梅尔·迪亚斯
        {
            id: "g026_s06",
            name: "梅尔·迪亚斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Mael.jpg"], type: "base" }
            ]
        },
        // 玛雅·卡克兰德
        {
            id: "g026_s07",
            name: "玛雅·卡克兰德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Maya.jpg"], type: "base" }
            ]
        },
        // 米切尔·霍华德
        {
            id: "g026_s08",
            name: "米切尔·霍华德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Mitchell.jpg"], type: "base" }
            ]
        },
        // 奥拉·林赛尔
        {
            id: "g026_s09",
            name: "奥拉·林赛尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Orla.jpg"], type: "base" }
            ]
        },
        // 帕克·诺伊施本
        {
            id: "g026_s10",
            name: "帕克·诺伊施本",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Parker.jpg"], type: "base" }
            ]
        },
        // 瑞克·莫纳汉
        {
            id: "g026_s11",
            name: "瑞克·莫纳汉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Rick.jpg"], type: "base" }
            ]
        },
        // 卢恩
        {
            id: "g026_s12",
            name: "卢恩",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Rune.jpg"], type: "base" }
            ]
        },
        // 萨米·提佩特
        {
            id: "g026_s13",
            name: "萨米·提佩特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Sammy.jpg"], type: "base" }
            ]
        },
        // 托马斯·安鲁
        {
            id: "g026_s14",
            name: "托马斯·安鲁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/026/Thomas.jpg"], type: "base" }
            ]
        },
        // 哈里森·沃恩
        {
            id: "g026_fs01",
            name: "哈里森·沃恩",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/026/Harrison.jpg"], type: "base" }
            ]
        },
        // 詹姆斯·诺伊施本
        {
            id: "g026_fs02",
            name: "詹姆斯·诺伊施本",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/026/James.jpg"], type: "base" }
            ]
        },
        // 卡拉丽丝
        {
            id: "g026_fs03",
            name: "卡拉丽丝",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/026/Karalis.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
