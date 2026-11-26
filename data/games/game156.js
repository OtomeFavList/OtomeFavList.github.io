// ✅已核对信息
// ℹ️配角名未校对/未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game156", // 全局唯一ID，不可重复，如 game001
    name: "Starry☆Sky~Summer Stories~",
    year: "2017",
    publisher: ["honeybee"],
    cnStudio: "暂无",
    writer: [
        {name:"浅生柚子", lang:"zh"},
        {name:"水井としえ", lang:"zh"},
        {name:"藤谷燈子", lang:"zh"},
        {name:"春名佳純", lang:"zh"},
        {name:"高木聖子", lang:"zh"},
        {name:"", lang:"zh"},
        {name:"株式会社エッジワークス", lang:"zh"}
    ],
    art: [
        {name:"カズアキ", lang:"ja"},
        {name:"ゑむ", lang:"ja"},
    ],
    cover: "game/156.jpg", // 相对路径，游戏封面
    charList: [
        // 夜久月子
        {
            id: "g156_f01",
            name: "夜久月子",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/097/Tsukiko.jpg",
                            "char/097/Tsukiko2.jpg",
                            "char/155/Tsukiko.jpg",
                            "char/155/Tsukiko2.jpg",
                            "char/097/Tsukiko3.jpg",
                            "char/155/Tsukiko3.jpg"], type: "base" },
            ]
        },
        // 金久保誉
        {
            id: "g156_m01",
            name: "金久保誉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Kanakubo.png",
                            "char/156/Kanakubo2.jpg",
                            "char/156/Kanakubo3.png",
                            "char/156/Kanakubo4.png",
                            "char/156/Kanakubo5.jpg",
                            "char/156/Kanakubo6.png",
                            "char/156/Kanakubo7.png"], type: "base" }
            ]
        },
        // 木ノ瀬梓
        {
            id: "g156_m02",
            name: "木ノ瀬梓",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Kinose.png",
                            "char/156/Kinose2.png",
                            "char/156/Kinose3.png",
                            "char/156/Kinose4.png",
                            "char/156/Kinose5.jpg",
                            "char/156/Kinose6.png",
                            "char/156/Kinose7.png"], type: "base" }
            ]
        },
        // 宮地龍之介
        {
            id: "g156_m03",
            name: "宮地龍之介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Miyaji.png",
                            "char/156/Miyaji2.png",
                            "char/156/Miyaji3.png",
                            "char/156/Miyaji4.png",
                            "char/156/Miyaji5.jpg",
                            "char/156/Miyaji6.png",
                            "char/156/Miyaji8.png"], type: "base" }
            ]
        },
        // 暁藍
        {
            id: "g156_s01",
            name: "暁藍",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Ai.png"], type: "base" }
            ]
        },
        // 金久保環
        {
            id: "g156_s02",
            name: "金久保環",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Amane.png"], type: "base" }
            ]
        },
        // 金久保綾子
        {
            id: "g156_s03",
            name: "金久保綾子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Ayako.png"], type: "base" }
            ]
        },
        // 矢来射弦
        {
            id: "g156_s04",
            name: "矢来射弦",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Izuru.png"], type: "base" }
            ]
        },
        // 金久保奏
        {
            id: "g156_s05",
            name: "金久保奏",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Kanade.png"], type: "base" }
            ]
        },
        // 春名真琴
        {
            id: "g156_s06",
            name: "春名真琴",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Makoto.png"], type: "base" }
            ]
        },
        // 金久保詩
        {
            id: "g156_s07",
            name: "金久保詩",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Shirabe.png"], type: "base" }
            ]
        },
        // 小熊伸也
        {
            id: "g156_s08",
            name: "小熊伸也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Sinya.png",
                            "char/156/Sinya2.png",
                            "char/156/Sinya3.png"], type: "base" }
            ]
        },
        // 金久保宗庵
        {
            id: "g156_s09",
            name: "金久保宗庵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Souan.png"], type: "base" }
            ]
        },
        // 宮地虎牙
        {
            id: "g156_s10",
            name: "宮地虎牙",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Taiga.png"], type: "base" }
            ]
        },
        // 犬飼隆文
        {
            id: "g156_s11",
            name: "犬飼隆文",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Takahumi.png",
                            "char/156/Takahumi2.png",
                            "char/156/Takahumi3.png"], type: "base" }
            ]
        },
        // 白鳥弥彦
        {
            id: "g156_s12",
            name: "白鳥弥彦",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Yahiko.png",
                            "char/156/Yahiko2.png",
                            "char/156/Yahiko3.png"], type: "base" }
            ]
        },
        // 宮地鷹介
        {
            id: "g156_s13",
            name: "宮地鷹介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Yousuke.png"], type: "base" }
            ]
        },
        // 矢来弓弦
        {
            id: "g156_s14",
            name: "矢来弓弦",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/156/Yuzuru.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
