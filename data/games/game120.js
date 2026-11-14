// ✅已核对信息
// ⚠️已核对信息/未发售官网信息未完善/信息不确切，FD内容未添加/FD官网差分未制作/续作官网差分未制作/立绘差分未制作/立绘未重置/配角未添加/封面不清晰
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game120", // 全局唯一ID，不可重复，如 game001
    name: "Paradigm Paradox",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"橘夕月", lang:"zh"},
        {name:"仰木サヤ", lang:"zh"},
        {name:"藤谷燈子", lang:"zh"}
    ],
    art: [
        {name:"野崎つばた", lang:"zh"},
        {name:"夏生", lang:"zh"},
    ],
    cover: "game/120.jpg", // 相对路径，游戏封面
    charList: [
        // 小鳥遊ユウキ
        {
            id: "g120_f01",
            name: "小鳥遊ユウキ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/120/Yuuki.jpg",
                            "char/120/Yuuki2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 間宮アユム
        {
            id: "g120_m01",
            name: "間宮アユム",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/120/Ayumu.jpg",
                            "char/120/Ayumu2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 日向
        {
            id: "g120_m02",
            name: "日向",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/120/Hyuuga.jpg"], type: "base" },
            ]
        },
        // 伊吹
        {
            id: "g120_m03",
            name: "伊吹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/120/Ibuki.jpg",
                            "char/120/Ibuki2.jpg"], type: "base" },
            ]
        },
        // 栖原カムイ
        {
            id: "g120_m04",
            name: "栖原カムイ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/120/Kamui.jpg",
                            "char/120/Kamui2.jpg"], type: "base" },
            ]
        },
        // 新記ミハヤ
        {
            id: "g120_m05",
            name: "新記ミハヤ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/120/Mihaya.jpg",
                            "char/120/Mihaya2.jpg"], type: "base" },
            ]
        },
        // 冨司リョウ
        {
            id: "g120_m06",
            name: "冨司リョウ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/120/Ryou.jpg"], type: "base" },
            ]
        },
        // 高遠トキオ
        {
            id: "g120_m07",
            name: "高遠トキオ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/120/Tokio.jpg",
                            "char/120/Tokio2.jpg"], type: "base" },
            ]
        },
        // 雪波
        {
            id: "g120_m08",
            name: "雪波",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/120/Yukinami.jpg"], type: "base" },
            ]
        },
        // 護堂ヤシマ
        {
            id: "g120_s01",
            name: "護堂ヤシマ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/120/Goudou.jpg"], type: "base" }
            ]
        },
        // 東雲リーゼ
        {
            id: "g120_s02",
            name: "東雲リーゼ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/120/Lize.jpg"], type: "base" }
            ]
        },
        // 間宮リツ
        {
            id: "g120_s03",
            name: "間宮リツ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/120/Mamiya.jpg"], type: "base" }
            ]
        },
        // 倉守マサキ
        {
            id: "g120_s04",
            name: "倉守マサキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/120/Masaki.jpg"], type: "base" }
            ]
        },
        // 横原ゼンジ
        {
            id: "g120_s05",
            name: "横原ゼンジ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/120/Zenji.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
