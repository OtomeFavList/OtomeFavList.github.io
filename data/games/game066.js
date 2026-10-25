// data/games/game066.js
// ✅已核对信息
const gameData = {
    id: "game066", // 全局唯一ID，不可重复，如 game001
    name: "Nightshade/百花百狼",
    year: "2018",
    publisher: ["D3 Publisher","RED"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"伊東愛", lang:"zh"},
        {name:"阿智太郎", lang:"zh"},
        {name:"雨宮うた", lang:"zh"}
    ],
    art: [
        {name:"悌太", lang:"zh"}
    ],
    cover: "game/066.jpg", // 相对路径，游戏封面
    charList: [
        // 上野槐
        {
            id: "g066_f01",
            name: "上野槐",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/066/Enju.jpg",
                            "char/066/Enju2.jpg",
                            "char/066/Enju3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 百地蝶治郎
        {
            id: "g066_m01",
            name: "百地蝶治郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/066/Choujirou.jpg",
                            "char/066/Choujirou2.jpg",
                            "char/066/Choujirou3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 月下丸
        {
            id: "g066_m02",
            name: "月下丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/066/Gekkamaru.jpg",
                            "char/066/Gekkamaru2.jpg",
                            "char/066/Gekkamaru3.png"], type: "base" },
            ]
        },
        // 石川五右卫门
        {
            id: "g066_m03",
            name: "石川五右卫门",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/066/Goemon.jpg",
                            "char/066/Goemon2.jpg",
                            "char/066/Goemon3.png"], type: "base" },
            ]
        },
        // 服部半藏
        {
            id: "g066_m04",
            name: "服部半藏",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/066/Hattori.jpg",
                            "char/066/Hattori2.jpg",
                            "char/066/Hattori3.png"], type: "base" },
            ]
        },
        // 黑雪
        {
            id: "g066_m05",
            name: "黑雪",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/066/Kuroyuki.jpg",
                            "char/066/Kuroyuki2.jpg",
                            "char/066/Kuroyuki3.png"], type: "base" },
            ]
        },
        // 山仓猿之介
        {
            id: "g066_s01",
            name: "山仓猿之介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/066/Ennosuke.jpg",
                            "char/066/Ennosuke2.jpg"], type: "base" }
            ]
        },
        // 石田三成
        {
            id: "g066_s02",
            name: "石田三成",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/066/Ishida.jpg"], type: "base" }
            ]
        },
        // 上野勘道
        {
            id: "g066_s03",
            name: "上野勘道",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/066/Kandou.jpg"], type: "base" }
            ]
        },
        // 霞
        {
            id: "g066_s04",
            name: "霞",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/066/Kasumi.jpg",
                            "char/066/Kasumi2.jpg"], type: "base" }
            ]
        },
        // 三云伽罗
        {
            id: "g066_s05",
            name: "三云伽罗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/066/Kyara.jpg",
                            "char/066/Kyara2.jpg"], type: "base" }
            ]
        },
        // 徳川家康
        {
            id: "g066_s06",
            name: "徳川家康",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/066/Tokugawa.jpg",
                            "char/066/Tokugawa2.jpg"], type: "base" }
            ]
        },
        // 丰臣秀吉
        {
            id: "g066_s07",
            name: "丰臣秀吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/066/Toyotomi.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
