// ℹ️配角名未校对，续作内容未汉化
const gameData = {
    id: "game053", // 全局唯一ID，不可重复
    name: "绯色的碎片 玉依姬奇谭 ~记忆中的颜色~",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"西村悠", lang:"zh"}
    ],
    art: [
        {name:"カズキヨネ", lang:"ja"}
    ],
    cover: "game/053.jpg",
    charList: [
        // 春日珠纪
        {
            id: "g053_f01",
            name: "春日珠纪",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Tamaki.jpg"], type: "base" },
                { srcList: ["char/053/Tamaki2.jpg"], type: "fd" }
            ]
        },
        // 鸦取真弘
        {
            id: "g053_m01",
            name: "鸦取真弘",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Mahiro.jpg",
                            "char/053/Mahiro2.jpg",
                            "char/053/Mahiro3.jpg"], type: "base" },
                { srcList: ["char/053/Mahiro4.jpg"], type: "fd" }
            ]
        },
        // 狗谷辽
        {
            id: "g053_m02",
            name: "狗谷辽",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Ryou.jpg",
                            "char/053/Ryou2.jpg",
                            "char/053/Ryou3.jpg"], type: "base" },
                { srcList: ["char/053/Ryou4.jpg"], type: "fd" }
            ]
        },
        // 犬戒慎司
        {
            id: "g053_m03",
            name: "犬戒慎司",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Shinji.jpg",
                            "char/053/Shinji2.jpg",
                            "char/053/Shinji3.jpg"], type: "base" },
                { srcList: ["char/053/Shinji4.jpg"], type: "fd" }
            ]
        },
        // 大蛇草
        {
            id: "g053_m04",
            name: "大蛇草",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Suguru.jpg",
                            "char/053/Suguru2.jpg",
                            "char/053/Suguru3.jpg"], type: "base" },
                { srcList: ["char/053/Suguru4.jpg"], type: "fd" }
            ]
        },
        // 鬼崎拓磨
        {
            id: "g053_m05",
            name: "鬼崎拓磨",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Takuma.jpg",
                            "char/053/Takuma2.jpg",
                            "char/053/Takuma3.jpg"], type: "base" },
                { srcList: ["char/053/Takuma4.jpg"], type: "fd" }
            ]
        },
        // 狐邑祐一
        {
            id: "g053_m06",
            name: "狐邑祐一",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/053/Yuuichi.jpg",
                            "char/053/Yuuichi2.jpg",
                            "char/053/Yuuichi3.jpg"], type: "base" },
                { srcList: ["char/053/Yuuichi4.jpg"], type: "fd" }
            ]
        },
        // ケテル
        {
            id: "g053_fd01",
            name: "ケテル",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Keter.jpg"], type: "base" }
            ]
        },
        // 凛
        {
            id: "g053_fd01",
            name: "凛",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Rin.jpg"], type: "base" }
            ]
        },
        // 艾利亚·罗森伯格
        {
            id: "g053_s01",
            name: "艾利亚·罗森伯格",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Aria.jpg",
                            "char/053/Aria2.jpg"], type: "base" },
                { srcList: ["char/053/Aria3.jpg"], type: "fd" }
            ]
        },
        // 多莱尔
        {
            id: "g053_s02",
            name: "多莱尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Drei.jpg",
                            "char/053/Drei2.jpg"], type: "base" }
            ]
        },
        // 艾恩
        {
            id: "g053_s03",
            name: "艾恩",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Ein.jpg",
                            "char/053/Ein2.jpg"], type: "base" }
            ]
        },
        // 言藏美鹤
        {
            id: "g053_s04",
            name: "言藏美鹤",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Kotokura.jpg",
                            "char/053/Kotokura2.jpg"], type: "base" },
                { srcList: ["char/053/Kotokura3.jpg"], type: "fd" }
            ]
        },
        // 御先狐
        {
            id: "g053_s05",
            name: "御先狐",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Oochan.jpg",
                            "char/053/Oochan3.jpg",
                            "char/053/Oochan2.jpg"], type: "base" }
            ]
        },
        // 芦屋正隆
        {
            id: "g053_s06",
            name: "芦屋正隆",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Oshiya.jpg",
                            "char/053/Oshiya2.jpg"], type: "base" },
                { srcList: ["char/053/Oshiya3.jpg"], type: "fd" }
            ]
        },
        // 多家良清乃
        {
            id: "g053_s07",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Takara.jpg",
                            "char/053/Takara2.jpg"], type: "base" },
                { srcList: ["char/053/Takara3.jpg"], type: "fd" }
            ]
        },
        // 宇贺谷静纪
        {
            id: "g053_s08",
            name: "宇贺谷静纪",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Ugaya.jpg"], type: "base" }
            ]
        },
        // 菲亚
        {
            id: "g053_s09",
            name: "菲亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Vier.jpg",
                            "char/053/Vier2.jpg"], type: "base" },
                { srcList: ["char/053/Vier3.jpg"], type: "fd" }
            ]
        },
        // 兹拜
        {
            id: "g053_s10",
            name: "兹拜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/053/Zwei.jpg",
                            "char/053/Zwei2.jpg"], type: "base" }
            ]
        },
        // ニール
        {
            id: "g053_fs01",
            name: "ニール",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/053/Neil.jpg"], type: "base" }
            ]
        },
        // 五瀨新
        {
            id: "g053_fs02",
            name: "五瀨新",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/053/Shin.jpg"], type: "base" }
            ]
        }
    ]
};


// ESModule导出
export { gameData };
