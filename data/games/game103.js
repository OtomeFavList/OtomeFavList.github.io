// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game103", // 全局唯一ID，不可重复，如 game001
    name: "月影の鎖 -錯乱パラノイア-",
    year: "2023",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"白鳥ユアン", lang:"zh"},
        {name:"藤元", lang:"zh"},
        {name:"井上愁", lang:"zh"},
        {name:"犬小屋煙突", lang:"zh"}
    ],
    art: [
        {name:"ヒロセアヅミ", lang:"ja"}
    ],
    cover: "game/103.jpg", // 相对路径，游戏封面
    charList: [
        // 冬浦めぐみ
        {
            id: "g103_f01",
            name: "冬浦めぐみ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/103/Megumi.jpg",
                            "char/103/Megumi3.jpg",
                            "char/103/Megumi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 神楽坂響
        {
            id: "g103_m01",
            name: "神楽坂響",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/103/Hibiki.jpg",
                            "char/103/Hibiki3.jpg",
                            "char/103/Hibiki2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 榛名望
        {
            id: "g103_m02",
            name: "榛名望",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/103/Nozomu.jpg",
                            "char/103/Nozomu3.jpg",
                            "char/103/Nozomu2.jpg"], type: "base" },
            ]
        },
        // 望月理也
        {
            id: "g103_m03",
            name: "望月理也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/103/Satoya.jpg",
                            "char/103/Satoya3.jpg",
                            "char/103/Satoya2.jpg"], type: "base" },
            ]
        },
        // 猪口渉
        {
            id: "g103_m04",
            name: "猪口渉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/103/Wataru.jpg",
                            "char/103/Wataru3.jpg",
                            "char/103/Wataru2.jpg"], type: "base" },
            ]
        },
        // 藤堂樹
        {
            id: "g103_fd01",
            name: "藤堂樹",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/103/Itsuki.jpg"], type: "base" }
            ]
        },
        // 大井川護
        {
            id: "g103_fd02",
            name: "大井川護",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/103/Mamoru.jpg",
                            "char/103/Mamoru2.jpg",
                            "char/103/Mamoru3.jpg"], type: "base" }
            ]
        },
        // 藤堂雅
        {
            id: "g103_fd03",
            name: "藤堂雅",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/103/Miyabi.jpg"], type: "base" }
            ]
        },
        // 菖蒲
        {
            id: "g103_s01",
            name: "菖蒲",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/103/Ayame.jpg",
                            "char/103/Ayame2.jpg"], type: "base" }
            ]
        },
        // 深海尊人
        {
            id: "g103_s02",
            name: "深海尊人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/103/Mikoto.jpg",
                            "char/103/Mikoto2.jpg"], type: "base" }
            ]
        },
        // 猪口ノア
        {
            id: "g103_s03",
            name: "猪口ノア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/103/Noa.jpg",
                            "char/103/Noa2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
