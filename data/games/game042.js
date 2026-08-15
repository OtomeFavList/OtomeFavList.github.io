// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game042", // 全局唯一ID，不可重复
    name: "蛇香之夜~Trap of MUSK~",
    year: "2024",
    publisher: ["Frontier Work","Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"吉村りりか", lang:"zh"}
    ],
    art: [
        {name:"アサダモチコ", lang:"ja"},
        {name:"ユウヤ", lang:"ja"}
    ],
    cover: "game/042.jpg",
    charList: [
        // 席琳
        {
            id: "g042_f01",
            name: "席琳",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/042/Shirien.jpg",
                            "char/042/Shirien2.jpg"], type: "base" }
            ]
        },
        // 杰米尔
        {
            id: "g042_m01",
            name: "杰米尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/042/Jemiru.jpg",
                            "char/042/Jemiru2.jpg",
                            "char/042/Jemiru3.jpg"], type: "base" }
            ]
        },
        // 鳞希骊
        {
            id: "g042_m02",
            name: "鳞希骊",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/042/Kirei.jpg",
                            "char/042/Kirei2.jpg",
                            "char/042/Kirei3.jpg"], type: "base" }
            ]
        },
        // 鳞皇骊
        {
            id: "g042_m03",
            name: "鳞皇骊",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/042/Korei.jpg",
                            "char/042/Korei2.jpg",
                            "char/042/Korei3.jpg"], type: "base" }
            ]
        },
        // 莱扎尔·沙纳萨
        {
            id: "g042_m04",
            name: "莱扎尔·沙纳萨",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/042/Lizaru.jpg",
                            "char/042/Lizaru2.jpg",
                            "char/042/Lizaru3.jpg"], type: "base" }
            ]
        },
        // 罗岚·克莱德尔
        {
            id: "g042_m05",
            name: "罗岚·克莱德尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/042/Rollan.jpg",
                            "char/042/Rollan2.jpg",
                            "char/042/Rollan3.jpg"], type: "base" }
            ]
        },
        // 文斯·卢根
        {
            id: "g042_m06",
            name: "文斯·卢根",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/042/Vince.jpg",
                            "char/042/Vince2.jpg",
                            "char/042/Vince3.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
