// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game142", // 全局唯一ID，不可重复，如 game001
    name: "白華の檻 ~緋色の欠片4~",
    year: "2012",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"西村悠", lang:"zh"},
        {name:"水澤なな", lang:"zh"}
    ],
    art: [
        {name:"いけ", lang:"ja"}
    ],
    cover: "game/142.jpg", // 相对路径，游戏封面
    charList: [
        // 詞紀
        {
            id: "g142_f01",
            name: "詞紀",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Shiki.png"], type: "base" },
            ]
        },
        // 秋篠古嗣
        {
            id: "g142_m01",
            name: "秋篠古嗣",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Furutsugu.png"], type: "base" },
            ]
        },
        // 幻灯火
        {
            id: "g142_m02",
            name: "幻灯火",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Gentouka.png"], type: "base" },
            ]
        },
        // 胡土前
        {
            id: "g142_m03",
            name: "胡土前",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Mae.png"], type: "base" },
            ]
        },
        // 空疎尊
        {
            id: "g142_m04",
            name: "空疎尊",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Mikoto.png"], type: "base" },
            ]
        },
        // 隠岐秋房
        {
            id: "g142_m05",
            name: "隠岐秋房",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Oki.png"], type: "base" },
            ]
        },
        // 悪路王
        {
            id: "g142_fd01",
            name: "悪路王",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Akuroou.png"], type: "base" }
            ]
        },
        // 言蔵智則
        {
            id: "g142_fd02",
            name: "言蔵智則",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Tomonori.png"], type: "base" }
            ]
        },
        // 芦屋道満
        {
            id: "g142_s01",
            name: "芦屋道満",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Douman.png"], type: "base" }
            ]
        },
        // 神産巣日神
        {
            id: "g142_s02",
            name: "神産巣日神",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Kami.png"], type: "base" }
            ]
        },
        // 風波尊
        {
            id: "g142_s03",
            name: "風波尊",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Kazanami.png"], type: "base" }
            ]
        },
        // 藤原貞繁
        {
            id: "g142_s04",
            name: "藤原貞繁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Sadashige.png"], type: "base" }
            ]
        },
        // 秋篠吉影
        {
            id: "g142_s05",
            name: "秋篠吉影",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/142/Yoshikage.png"], type: "base" }
            ]
        },
        // 綾読
        {
            id: "g142_fs01",
            name: "綾読",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/142/Oyayomi.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
