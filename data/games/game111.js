// ✅已核对信息
const gameData = {
    id: "game111", // 全局唯一ID，不可重复，如 game001
    name: "穿军靴的猫",
    year: "2023",
    publisher: ["Primula"],
    cnStudio: "pencil",
    writer: [
        {name:"藤文", lang:"zh"},
        {name:"千草", lang:"zh"},
        {name:"清水月子", lang:"zh"}
    ],
    art: [
        {name:"紫真依", lang:"zh"},
        {name:"稲葉せいこ", lang:"zh"}
    ],
    cover: "game/111.jpg", // 相对路径，游戏封面
    charList: [
        // 玉
        {
            id: "g111_f01",
            name: "玉",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/111/Tama3.jpg",
                            "char/111/Tama2.jpg",
                            "char/111/Tama4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 神谷一飒
        {
            id: "g111_m01",
            name: "神谷一飒",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/Kamiya3.jpg",
                            "char/111/Kamiya.jpg",
                            "char/111/Kamiya2.jpg",
                            "char/111/Kamiya4.jpg",
                            "char/111/Kamiya5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 凯迪
        {
            id: "g111_m02",
            name: "凯迪",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/Kitty3.jpg",
                            "char/111/Kitty.jpg",
                            "char/111/Kitty2.jpg",
                            "char/111/Kitty4.jpg"], type: "base" },
            ]
        },
        // 小太郎
        {
            id: "g111_m03",
            name: "小太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/Kotarou3.jpg",
                            "char/111/Kotarou2.jpg",
                            "char/111/Kotarou4.jpg"], type: "base" },
            ]
        },
        // 小咕
        {
            id: "g111_m04",
            name: "小咕",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/KuNyan3.jpg",
                            "char/111/KuNyan2.jpg",
                            "char/111/KuNyan4.jpg"], type: "base" },
            ]
        },
        // 施德
        {
            id: "g111_m05",
            name: "施德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/Shed3.jpg",
                            "char/111/Shed2.jpg",
                            "char/111/Shed4.jpg"], type: "base" },
            ]
        },
        // 柚
        {
            id: "g111_m06",
            name: "柚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/111/Yuzu3.jpg",
                            "char/111/Yuzu2.jpg",
                            "char/111/Yuzu4.jpg"], type: "base" },
            ]
        },
        // 狛
        {
            id: "g111_s01",
            name: "狛",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Haku.jpg",
                            "char/111/Haku2.jpg"], type: "base" }
            ]
        },
        // 因克
        {
            id: "g111_s02",
            name: "因克",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Ink.jpg",
                            "char/111/Ink2.jpg",
                            "char/111/Ink3.jpg"], type: "base" }
            ]
        },
        // 修瓦茨
        {
            id: "g111_s03",
            name: "修瓦茨",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Schwartz.jpg",
                            "char/111/Schwartz2.jpg"], type: "base" }
            ]
        },
        // 皙
        {
            id: "g111_s04",
            name: "皙",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Seki.jpg",
                            "char/111/Seki2.jpg"], type: "base" }
            ]
        },
        // 空
        {
            id: "g111_s05",
            name: "空",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Sora.jpg",
                            "char/111/Sora2.jpg",
                            "char/111/Sora3.jpg"], type: "base" }
            ]
        },
        // 提格
        {
            id: "g111_s06",
            name: "提格",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Tigger.jpg",
                            "char/111/Tigger2.jpg"], type: "base" }
            ]
        },
        // 维洛
        {
            id: "g111_s07",
            name: "维洛",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/111/Willow.jpg",
                            "char/111/Willow2.jpg",
                            "char/111/Willow3.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
