// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game098", // 全局唯一ID，不可重复，如 game001
    name: "君に惑い、君に溺れる。",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"合同会社Re,AER", lang:"zh"}
    ],
    art: [
        {name:"董火", lang:"zh"}
    ],
    cover: "game/098.jpg", // 相对路径，游戏封面
    charList: [
        // 露木紗世
        {
            id: "g098_f01",
            name: "露木紗世",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/098/Sayo.jpg",
                            "char/098/Sayo2.jpg",
                            "char/098/Sayo3.jpg",
                            "char/098/Sayo4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 山科瑛
        {
            id: "g098_m01",
            name: "山科瑛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/098/Akira.jpg",
                            "char/098/Akira2.jpg",
                            "char/098/Akira3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 棗陽凪
        {
            id: "g098_m02",
            name: "棗陽凪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/098/Hinagi.jpg",
                            "char/098/Hinagi2.jpg",
                            "char/098/Hinagi3.jpg",
                            "char/098/Hinagi4.jpg"], type: "base" },
            ]
        },
        // 日下部恭也
        {
            id: "g098_m03",
            name: "日下部恭也",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/098/Kyouya.jpg",
                            "char/098/Kyouya2.jpg",
                            "char/098/Kyouya3.jpg",
                            "char/098/Kyouya4.jpg"], type: "base" },
            ]
        },
        // 瀬尾叶多
        {
            id: "g098_m04",
            name: "瀬尾叶多",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/098/Seo.jpg",
                            "char/098/Seo2.jpg",
                            "char/098/Seo3.jpg",
                            "char/098/Seo4.jpg"], type: "base" },
            ]
        },
        // 露木理都
        {
            id: "g098_m05",
            name: "露木理都",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/098/Tsuyuki.jpg",
                            "char/098/Tsuyuki2.jpg",
                            "char/098/Tsuyuki3.jpg",
                            "char/098/Tsuyuki4.jpg"], type: "base" },
            ]
        },
        // 水島明日香
        {
            id: "g098_s01",
            name: "水島明日香",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/098/Asuka.jpg"], type: "base" }
            ]
        },
        // オヤカタ
        {
            id: "g098_s02",
            name: "オヤカタ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/098/Oyakata.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
