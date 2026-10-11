// data/games/game050.js
// ✅已核对信息
const gameData = {
    id: "game051", // 全局唯一ID，不可重复
    name: "夏空的独白 ~Another Memory~",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"西村悠", lang:"zh"}
    ],
    art: [
        {name:"花邑まい", lang:"zh"},
        {name:"佐倉たくと", lang:"zh"},
        {name:"ろく丸", lang:"ja"}
    ],
    cover: "game/051.jpg",
    charList: [
        // 小川葵
        {
            id: "g051_f01",
            name: "小川葵",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Aoi.jpg",
                            "char/051/Aoi2.png"], type: "base" }
            ]
        },
        // 加贺阳
        {
            id: "g051_m01",
            name: "加贺阳",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Haru.jpg",
                            "char/051/Haru2.jpg",
                            "char/051/Haru3.png"], type: "base" }
            ]
        },
        // 绵森枫
        {
            id: "g051_m02",
            name: "绵森枫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Kaede.jpg",
                            "char/051/Kaede2.png"], type: "base" }
            ]
        },
        // 木野濑一辉
        {
            id: "g051_m03",
            name: "木野濑一辉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Kazuki.jpg",
                            "char/051/Kazuki2.jpg",
                            "char/051/Kazuki3.png"], type: "base" }
            ]
        },
        // 浅浪皓
        {
            id: "g051_m04",
            name: "浅浪皓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Kou.jpg",
                            "char/051/Kou2.jpg",
                            "char/051/Kou3.png"], type: "base" }
            ]
        },
        // 篠原涼太
        {
            id: "g051_m05",
            name: "篠原涼太",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Ryouta.jpg",
                            "char/051/Ryouta2.jpg",
                            "char/051/Ryouta3.png"], type: "base" }
            ]
        },
        // 泽野井宗介
        {
            id: "g051_m06",
            name: "泽野井宗介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Sousuke.jpg",
                            "char/051/Sousuke2.jpg",
                            "char/051/Sousuke3.png"], type: "base" }
            ]
        },
        // 浅浪翔
        {
            id: "g051_s01",
            name: "浅浪翔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/051/Shou.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
