// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game044", // 全局唯一ID，不可重复
    name: "9 R.I.P.",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"喜多南", lang:"zh"},
        {name:"亜文", lang:"zh"},
        {name:"小縞なお", lang:"zh"},
        {name:"鵜森はだし", lang:"zh"},
        {name:"葉月ネリカ", lang:"zh"},
        {name:"海野凛久", lang:"zh"},
        {name:"藤川ちより", lang:"zh"},
        {name:"長田大夢", lang:"zh"},
        {name:"長野和泉", lang:"zh"},
        {name:"ゆきみなべ", lang:"ja"},
        {name:"Salala", lang:"en"}
    ],
    art: [
        {name:"ユウヤ", lang:"ja"}
    ],
    cover: "game/044.jpg",
    charList: [
        // 逸色珠沙
        {
            id: "g044_f01",
            name: "逸色珠沙",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/044/Misa.jpg",
                            "char/044/Misa2.png"], type: "base" },
                { srcList: ["char/044/Misa3.jpg"], type: "fd" }
            ]
        },
        // 响
        {
            id: "g044_m01",
            name: "响",
            fdName: ["伊音响"],
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/044/Hibiki.jpg",
                            "char/044/Hibiki2.png",
                            "char/044/Hibiki3.jpg"], type: "base" },
                { srcList: ["char/044/Hibiki4.jpg",
                            "char/044/Hibiki5.jpg"], type: "fd" }
            ]
        },
        // 狐春
        {
            id: "g044_m02",
            name: "狐春",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/044/Koharu.jpg",
                            "char/044/Koharu2.png",
                            "char/044/Koharu3.jpg"], type: "base" },
                { srcList: ["char/044/Koharu4.jpg",
                            "char/044/Koharu5.jpg"], type: "fd" }
            ]
        },
        // 香羊
        {
            id: "g044_m03",
            name: "香羊",
            fdName: ["秋月香羊"],
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/044/Kouyou.jpg",
                            "char/044/Kouyou2.png",
                            "char/044/Kouyou3.jpg"], type: "base" },
                { srcList: ["char/044/Kouyou4.jpg",
                            "char/044/Kouyou5.jpg"], type: "fd" }
            ]
        },
        // 红华
        {
            id: "g044_m04",
            name: "红华",
            fdName: ["天堂红华"],
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/044/Kureha.jpg",
                            "char/044/Kureha2.png",
                            "char/044/Kureha3.jpg"], type: "base" },
                { srcList: ["char/044/Kureha4.jpg",
                            "char/044/Kureha5.jpg"], type: "fd" }
            ]
        },
        // 魅勿鬽
        {
            id: "g044_m05",
            name: "魅勿鬽",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/044/Minami.jpg",
                            "char/044/Minami2.png",
                            "char/044/Minami3.jpg"], type: "base" },
                { srcList: ["char/044/Minami4.jpg",
                            "char/044/Minami5.jpg"], type: "fd" }
            ]
        },
        // 圣夜
        {
            id: "g044_m06",
            name: "圣夜",
            fdName: ["柚木永圣夜"],
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/044/Seiya.jpg",
                            "char/044/Seiya2.png",
                            "char/044/Seiya3.jpg"], type: "base" },
                { srcList: ["char/044/Seiya4.jpg",
                            "char/044/Seiya5.jpg"], type: "fd" }
            ]
        },
        // 星绊
        {
            id: "g044_m07",
            name: "星绊",
            fdName: ["水镜星绊"],
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/044/Sena.jpg",
                            "char/044/Sena2.png",
                            "char/044/Sena3.jpg"], type: "base" },
                { srcList: ["char/044/Sena4.jpg",
                            "char/044/Sena5.jpg"], type: "fd" }
            ]
        },
        // 幸麿
        {
            id: "g044_m08",
            name: "幸麿",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/044/Yukimaro.jpg",
                            "char/044/Yukimaro2.png",
                            "char/044/Yukimaro3.jpg"], type: "base" },
                { srcList: ["char/044/Yukimaro4.jpg",
                            "char/044/Yukimaro5.jpg"], type: "fd" }
            ]
        },
        // 桃嘉
        {
            id: "g044_h01",
            name: "桃嘉",
            fdName: ["久远桃嘉"],
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["char/044/Toka.jpg",
                            "char/044/Toka2.png",
                            "char/044/Toka3.jpg"], type: "base" },
                { srcList: ["char/044/Toka4.jpg"], type: "fd" }
            ]
        },
        // 逸色绚芽
        {
            id: "g044_s01",
            name: "逸色绚芽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/044/Ayame.jpg",
                            "char/044/Ayame2.jpg"], type: "base" }
            ]
        },
        // 飞騨咲耶果
        {
            id: "g044_s02",
            name: "飞騨咲耶果",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/044/Hida.jpg",
                            "char/044/Hida2.jpg"], type: "base" }
            ]
        },
        // 逸色翼
        {
            id: "g044_s03",
            name: "逸色翼",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/044/Isshiki.jpg",
                            "char/044/Isshiki2.jpg"], type: "base" }
            ]
        },
        // 美住丽歌
        {
            id: "g044_s04",
            name: "美住丽歌",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/044/Misumi.jpg"], type: "base" }
            ]
        },
        // 神主
        {
            id: "g044_s05",
            name: "神主",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/044/Priest.jpg"], type: "base" }
            ]
        },
        // 月神优衣
        {
            id: "g044_s06",
            name: "优衣",
            fdName: ["月神优衣"],
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/044/Yui.jpg"], type: "base" }
            ]
        },
        // 天堂雏菊
        {
            id: "g044_fs01",
            name: "天堂雏菊",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/044/Hinagiku.jpg"], type: "base" }
            ]
        },
        // 幸我
        {
            id: "g044_fs02",
            name: "幸我",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/044/Koga.jpg"], type: "base" }
            ]
        },
        // 狐之依丸
        {
            id: "g044_fs03",
            name: "狐之依丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/044/Konoemaru.jpg"], type: "base" }
            ]
        },
        // 冥命
        {
            id: "g044_fs04",
            name: "冥命",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/044/Meimei.jpg"], type: "base" }
            ]
        },
        // 津津良未子
        {
            id: "g044_fs05",
            name: "津津良未子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/044/Miko.jpg"], type: "base" }
            ]
        },
        // 朱里
        {
            id: "g044_fs06",
            name: "朱里",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/044/Shuri.jpg"], type: "base" }
            ]
        },
        // 空兰
        {
            id: "g044_fs07",
            name: "空兰",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/044/Soran.jpg"], type: "base" }
            ]
        },
        // 朱雀
        {
            id: "g044_fs08",
            name: "朱雀",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/044/Susaku.jpg"], type: "base" }
            ]
        },
        // 铃岛拓海
        {
            id: "g044_fs09",
            name: "铃岛拓海",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/044/Takumi.jpg"], type: "base" }
            ]
        },
        // 户田和真
        {
            id: "g044_fs10",
            name: "户田和真",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/044/Toda.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
