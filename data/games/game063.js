// data/games/game063.js
// ✅已核对信息
const gameData = {
    id: "game063", // 全局唯一ID，不可重复
    name: "三国恋战记~少女的兵法!~",
    year: "2026",
    publisher: ["Daisy²"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"宙地", lang:"zh"},
        {name:"陣内", lang:"zh"},
        {name:"トム", lang:"ja"}
    ],
    art: [
        {name:"スズケン", lang:"ja"}
    ],
    cover: "game/063.jpg",
    charList: [
        // 山田花
        {
            id: "g063_f01",
            name: "山田花",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/063/Hana.jpg",
                            "char/063/Hana2.jpg",
                            "char/063/Hana3.jpg",
                            "char/063/Hana4.jpg",
                            "char/063/Hana5.jpg"], type: "base" },
                { srcList: ["char/063/Hana7.jpg",
                            "char/063/Hana7.png"], type: "fd" }
            ]
        },
        // 文若
        {
            id: "g063_m01",
            name: "文若",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/063/Bunjaku.jpg"], type: "base" },
                { srcList: ["char/063/Bunjaku.2.jpg",
                            "char/063/Bunjaku.3.png"], type: "fd" }
            ]
        },
        // 仲谋
        {
            id: "g063_m02",
            name: "仲谋",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/063/Chuubou.jpg"], type: "base" },
                { srcList: ["char/063/Chuubou.2.jpg",
                            "char/063/Chuubou.3.png"], type: "fd" }
            ]
        },
        // 玄德
        {
            id: "g063_m03",
            name: "玄德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/063/Gentoku.jpg"], type: "base" },
                { srcList: ["char/063/Gentoku.2.jpg",
                            "char/063/Gentoku3.png"], type: "fd" }
            ]
        },
        // 公瑾
        {
            id: "g063_m04",
            name: "公瑾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/063/Koukin.jpg"], type: "base" },
                { srcList: ["char/063/Koukin2.jpg",
                            "char/063/Koukin3.png"], type: "fd" }
            ]
        },
        // 孔明
        {
            id: "g063_m05",
            name: "孔明",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/063/Koumei.jpg"], type: "base" },
                { srcList: ["char/063/Koumei2.jpg",
                            "char/063/Koumei3.png"], type: "fd" }
            ]
        },
        // 孟德
        {
            id: "g063_m06",
            name: "孟德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/063/Moutoku.jpg"], type: "base" },
                { srcList: ["char/063/Moutoku2.jpg",
                            "char/063/Moutoku3.png"], type: "fd" }
            ]
        },
        // 子龙
        {
            id: "g063_m07",
            name: "子龙",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/063/Shiryuu.jpg"], type: "base" },
                { srcList: ["char/063/Shiryuu2.jpg",
                            "char/063/Shiryuu3.png"], type: "fd" }
            ]
        },
        // 云长
        {
            id: "g063_m08",
            name: "云长",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/063/Unchou.jpg"], type: "base" },
                { srcList: ["char/063/Unchou2.jpg",
                            "char/063/Unchou3.png"], type: "fd" }
            ]
        },
        // 翼德
        {
            id: "g063_m09",
            name: "翼德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/063/Yokutoku.jpg"], type: "base" },
                { srcList: ["char/063/Yokutoku2.jpg",
                            "char/063/Yokutoku3.png"], type: "fd" }
            ]
        },
        // 元让
        {
            id: "g063_s01",
            name: "元让",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/063/Genjou.jpg"], type: "base" },
                { srcList: ["char/063/Genjou2.jpg"], type: "fd" }
            ]
        },
        // 芙蓉姬
        {
            id: "g063_s02",
            name: "芙蓉姬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/063/Huyou.jpg"], type: "base" },
                { srcList: ["char/063/Huyou2.jpg"], type: "fd" }
            ]
        },
        // 早安
        {
            id: "g063_s03",
            name: "早安",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/063/Souan.jpg"], type: "base" },
                { srcList: ["char/063/Souan2.jpg"], type: "fd" }
            ]
        },
        // 尚香
        {
            id: "g063_s04",
            name: "尚香",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/063/Syoukou.jpg"], type: "base" },
                { srcList: ["char/063/Syoukou2.jpg"], type: "fd" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
