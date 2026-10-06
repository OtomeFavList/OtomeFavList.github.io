// data/games/game034.js
// ✅已核对信息
const gameData = {
    id: "game034", // 全局唯一ID，不可重复
    name: "我的超级现充生活",
    year: "2024",
    publisher: ["TetraScope"],
    cnStudio: "TetraScope",
    writer: [
        {name:"kaiso", lang:"en"}
    ],
    art: [
        {name:"ne-on", lang:"en"}
    ],
    cover: "game/034.jpg",
    charList: [
        // 姐崎希美
        {
            id: "g034_f01",
            name: "姐崎希美",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/034/Nozomi.jpg",
                            "char/034/Nozomi2.jpg",
                            "char/034/Nozomi3.jpg",
                            "char/034/Nozomi4.jpg"], type: "base" }
            ]
        },
        // 仓口步
        {
            id: "g034_m01",
            name: "仓口步",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/034/Ayumu.jpg",
                            "char/034/Ayumu2.jpg",
                            "char/034/Ayumu3.jpg",
                            "char/034/Ayumu4.jpg"], type: "base" }
            ]
        },
        // 星名穗积
        {
            id: "g034_m02",
            name: "星名穗积",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/034/Hozumi.jpg",
                            "char/034/Hozumi2.jpg",
                            "char/034/Hozumi3.jpg",
                            "char/034/Hozumi4.jpg"], type: "base" }
            ]
        },
        // 姐崎隼
        {
            id: "g034_m03",
            name: "姐崎隼",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/034/Shun.jpg",
                            "char/034/Shun2.jpg",
                            "char/034/Shun3.jpg",
                            "char/034/Shun4.jpg"], type: "base" }
            ]
        },
        // 折笠未步
        {
            id: "g034_s01",
            name: "折笠未步",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/034/Miho.jpg",
                            "char/034/Miho2.jpg",
                            "char/034/Miho3.jpg",
                            "char/034/Miho4.jpg"], type: "base" }
            ]
        },
        // 星名瑞穗
        {
            id: "g034_s02",
            name: "星名瑞穗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/034/Mizuho.jpg",
                            "char/034/Mizuho2.jpg",
                            "char/034/Mizuho3.jpg",
                            "char/034/Mizuho4.jpg"], type: "base" }
            ]
        },
        // 柊闲音
        {
            id: "g034_s03",
            name: "柊闲音",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/034/Shizune.jpg",
                            "char/034/Shizune2.jpg",
                            "char/034/Shizune3.jpg",
                            "char/034/Shizune4.jpg"], type: "base" }
            ]
        },
        // 押井有
        {
            id: "g034_s04",
            name: "押井有",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/034/Yu.jpg",
                            "char/034/Yu2.jpg",
                            "char/034/Yu3.jpg",
                            "char/034/Yu4.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
