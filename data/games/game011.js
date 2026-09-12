// data/games/game011.js
// ✅已核对信息
const gameData = {
    id: "game011",
    name: "毘卢遮那战姬 ~源平飞花梦想~",
    year: "2022",
    publisher: ["Otomate","RED"],
    cnStudio: "JSD",
    writer: [
        {name:"伊東愛", lang:"zh"},
        {name:"崎本知世", lang:"zh"},
        {name:"庵原ふじ", lang:"zh"},
        {name:"榛乃綾子", lang:"zh"},
        {name:"春森よしちか", lang:"zh"}
    ],
    art: [
        {name:"田中亜季", lang:"zh"}
    ],
    cover: "game/011.jpg",
    charList: [
        // 源义经
        {
            id: "g011_f01",
            name: "源义经",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/011/Shanaou.jpg"], type: "base" }
            ]
        },
        // 武藏坊弁庆
        {
            id: "g011_m01",
            name: "武藏坊弁庆",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/011/Benkei.jpg"], type: "base" }
            ]
        },
        // 平教经
        {
            id: "g011_m02",
            name: "平教经",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/011/Noritsune.jpg",
                            "char/011/Noritsune2.jpg"], type: "base" }
            ]
        },
        // 春玄
        {
            id: "g011_m03",
            name: "春玄",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/011/Shungen.jpg",
                            "char/011/Shungen2.jpg"], type: "base" }
            ]
        },
        // 平知盛
        {
            id: "g011_m04",
            name: "平知盛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/011/Tomomori.jpg"], type: "base" }
            ]
        },
        // 源赖朝
        {
            id: "g011_m05",
            name: "源赖朝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/011/Yoritomo.jpg"], type: "base" }
            ]
        },
        // 佐佐木高纲
        {
            id: "g011_fd01",
            name: "佐佐木高纲",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/011/Sasaki.jpg"], type: "base" }
            ]
        },
        // 平重衡
        {
            id: "g011_fd02",
            name: "平重衡",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/011/Shigehira.jpg"], type: "base" }
            ]
        },
        // 佐藤忠信
        {
            id: "g011_fd03",
            name: "佐藤忠信",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/011/Tadanobu.jpg"], type: "base" }
            ]
        },
        // 佐藤继信
        {
            id: "g011_fd04",
            name: "佐藤继信",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/011/Tsugunobu.jpg"], type: "base" }
            ]
        },
        // 藤原秀衡
        {
            id: "g011_s01",
            name: "藤原秀衡",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/011/Hidehira.png"], type: "base" }
            ]
        },
        // 梶原景时
        {
            id: "g011_s02",
            name: "梶原景时",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/011/Kagetoki.jpg"], type: "base" }
            ]
        },
        // 觉日
        {
            id: "g011_s03",
            name: "觉日",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/011/Kakunichi.jpg"], type: "base" }
            ]
        },
        // 吉次信高
        {
            id: "g011_s04",
            name: "吉次信高",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/011/Kichiji.jpg"], type: "base" }
            ]
        },
        // 平清盛
        {
            id: "g011_s05",
            name: "平清盛",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/011/Kiyomori.jpg"], type: "base" }
            ]
        },
        // 平教盛
        {
            id: "g011_s06",
            name: "平教盛",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/011/Norimori.jpg"], type: "base" }
            ]
        },
        // 藤原泰衡
        {
            id: "g011_s07",
            name: "藤原泰衡",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/011/Yasuhira.jpg"], type: "base" }
            ]
        },
        // 源义仲
        {
            id: "g011_s08",
            name: "源义仲",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/011/Yoshinaka.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
