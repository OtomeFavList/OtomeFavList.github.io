// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game147", // 全局唯一ID，不可重复，如 game001
    name: "カエル畑DEつかまえて",
    year: "2019",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"井上愁", lang:"zh"},
        {name:"白鳥ユアン", lang:"zh"}
    ],
    art: [
        {name:"ヒロセアヅミ", lang:"ja"}
    ],
    cover: "game/147.jpg", // 相对路径，游戏封面
    charList: [
        // 菅野風羽
        {
            id: "g147_f01",
            name: "菅野風羽",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Fuu.jpg",
                            "char/147/Fuu2.jpg",
                            "char/147/Fuu3.jpg",
                            "char/147/Fuu4.jpg",
                            "char/147/Fuu5.jpg",
                            "char/147/Fuu6.jpg"], type: "base" }
            ]
        },
        // 戸神明杜
        {
            id: "g147_m01",
            name: "戸神明杜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Akimori.jpg",
                            "char/147/Akimori2.jpg",
                            "char/147/Akimori3.jpg",
                            "char/147/Akimori4.jpg",
                            "char/147/Akimori5.jpg"], type: "base" }
            ]
        },
        // 空閑正臣
        {
            id: "g147_m02",
            name: "空閑正臣",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Masaomi.jpg",
                            "char/147/Masaomi2.jpg",
                            "char/147/Masaomi3.jpg",
                            "char/147/Masaomi4.jpg",
                            "char/147/Masaomi5.jpg",
                            "char/147/Masaomi6.jpg"], type: "base" }
            ]
        },
        // 米原美咲
        {
            id: "g147_m03",
            name: "米原美咲",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Misaki.jpg",
                            "char/147/Misaki2.jpg",
                            "char/147/Misaki3.jpg",
                            "char/147/Misaki4.jpg",
                            "char/147/Misaki5.jpg"], type: "base" }
            ]
        },
        // 葉村椋人
        {
            id: "g147_m04",
            name: "葉村椋人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Mukuto.jpg",
                            "char/147/Mukuto2.jpg",
                            "char/147/Mukuto3.jpg",
                            "char/147/Mukuto4.jpg",
                            "char/147/Mukuto5.jpg",
                            "char/147/Mukuto6.jpg"], type: "base" }
            ]
        },
        // 法月蓮
        {
            id: "g147_m05",
            name: "法月蓮",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Ren.jpg",
                            "char/147/Ren2.jpg",
                            "char/147/Ren3.jpg",
                            "char/147/Ren4.jpg",
                            "char/147/Ren5.jpg",
                            "char/147/Ren6.jpg"], type: "base" }
            ]
        },
        // 広瀬優希
        {
            id: "g147_m06",
            name: "広瀬優希",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Yuuki.jpg",
                            "char/147/Yuuki2.jpg",
                            "char/147/Yuuki3.jpg",
                            "char/147/Yuuki4.jpg",
                            "char/147/Yuuki5.jpg",
                            "char/147/Yuuki6.jpg"], type: "base" }
            ]
        },
        // 千木良工
        {
            id: "g147_fd01",
            name: "千木良工",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Takumi.jpg",
                            "char/147/Takumi2.jpg",
                            "char/147/Takumi3.jpg",
                            "char/147/Takumi4.jpg",
                            "char/147/Takumi5.jpg"], type: "base" }
            ]
            
        },
        // 謎のカエルその1
        {
            id: "g147_s01",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Kaeru.jpg"], type: "base" }
            ]
        },
        // 謎のカエルその2
        {
            id: "g147_s02",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Kaeru2.jpg"], type: "base" }
            ]
        },
        // 水城一陽
        {
            id: "g147_s03",
            name: "水城一陽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Kazuhi.jpg",
                            "char/147/Kazuhi2.jpg",
                            "char/147/Kazuhi3.jpg",
                            "char/147/Kazuhi4.jpg"], type: "base" }
            ]
        },
        // 兼子佐希子
        {
            id: "g147_s04",
            name: "兼子佐希子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Sakiko.jpg",
                            "char/147/Sakiko2.jpg",
                            "char/147/Sakiko3.jpg",
                            "char/147/Sakiko4.jpg"], type: "base" }
            ]
        },
        // 小田島創一
        {
            id: "g147_s05",
            name: "小田島創一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Souichi.jpg",
                            "char/147/Souichi2.jpg",
                            "char/147/Souichi3.jpg",
                            "char/147/Souichi4.jpg"], type: "base" }
            ]
        },
        // 十九波十夜
        {
            id: "g147_s06",
            name: "十九波十夜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Touya.jpg",
                            "char/147/Touya2.jpg",
                            "char/147/Touya3.jpg",
                            "char/147/Touya4.jpg"], type: "base" }
            ]
        },
        // 川奈芳子
        {
            id: "g147_s07",
            name: "川奈芳子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/147/Yoshiko.jpg",
                            "char/147/Yoshiko2.jpg",
                            "char/147/Yoshiko3.jpg",
                            "char/147/Yoshiko4.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
