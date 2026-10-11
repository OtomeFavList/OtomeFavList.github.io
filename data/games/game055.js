// data/games/game055.js
// ✅已核对信息
const gameData = {
    id: "game055", // 全局唯一ID，不可重复
    name: "Honey Vibes",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"喜多南", lang:"zh"},
        {name:"彩月レイ", lang:"zh"},
        {name:"鵜森はだし", lang:"zh"},
        {name:"海野凛久", lang:"zh"},
        {name:"春野せり", lang:"zh"},
        {name:"合同会社Re,AER", lang:"zh"},
        {name:"Salala", lang:"en"}
    ],
    art: [
        {name:"くらげ壱", lang:"ja"}
    ],
    cover: "game/055.jpg",
    charList: [
        // 天野凪咲
        {
            id: "g055_f01",
            name: "天野凪咲",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Nagisa.jpg",
                            "char/055/Nagisa2.jpg",
                            "char/055/Nagisa4.jpg"], type: "base" }
            ]
        },
        // 埃尔文
        {
            id: "g055_m01",
            name: "埃尔文",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Alvin.jpg",
                            "char/055/Alvin2.jpg",
                            "char/055/Alvin3.jpg",
                            "char/055/Alvin4.jpg"], type: "base" }
            ]
        },
        // 以利亚
        {
            id: "g055_m02",
            name: "以利亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Elijah.jpg",
                            "char/055/Elijah2.jpg",
                            "char/055/Elijah3.jpg",
                            "char/055/Elijah4.jpg"], type: "base" }
            ]
        },
        // 伊诺
        {
            id: "g055_m03",
            name: "伊诺",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Eno.jpg",
                            "char/055/Eno2.jpg",
                            "char/055/Eno3.jpg",
                            "char/055/Eno4.jpg"], type: "base" }
            ]
        },
        // 费恩
        {
            id: "g055_m04",
            name: "费恩",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Finn.jpg",
                            "char/055/Finn2.jpg",
                            "char/055/Finn3.jpg",
                            "char/055/Finn4.jpg"], type: "base" }
            ]
        },
        // 米洛
        {
            id: "g055_m05",
            name: "米洛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Milo.jpg",
                            "char/055/Milo2.jpg",
                            "char/055/Milo3.jpg",
                            "char/055/Milo4.jpg"], type: "base" }
            ]
        },
        // 狄奥
        {
            id: "g055_m06",
            name: "狄奥",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/055/Theo.jpg",
                            "char/055/Theo2.jpg",
                            "char/055/Theo3.jpg",
                            "char/055/Theo4.jpg"], type: "base" }
            ]
        },
        // 贝蒂
        {
            id: "g055_s01",
            name: "贝蒂",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/055/Bertie.jpg"], type: "base" }
            ]
        },
        // 科特
        {
            id: "g055_s02",
            name: "卡特",
            hiddenName: ["科特"],
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/055/Colt2.jpg"], type: "base" },
                { srcList: ["char/055/Colt.jpg"], type: "hidden" }
            ]
        },
        // 海达尔
        {
            id: "g055_s03",
            name: "海达尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/055/Haidar.jpg"], type: "base" }
            ]
        },
        // 埃娜奥
        {
            id: "g055_s04",
            name: "埃娜奥",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/055/Henao.jpg"], type: "base" }
            ]
        },
        // 皮特
        {
            id: "g055_s05",
            name: "皮特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/055/Pete.jpg"], type: "base" }
            ]
        },
        // 史凯拉
        {
            id: "g055_s06",
            name: "史凯拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/055/Skylar.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
