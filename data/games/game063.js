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
                            "char/063/Hana5.jpg"], type: "base" }
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
                { srcList: ["char/063/Bunjaku.jpg"], type: "base" }
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
                { srcList: ["char/063/Chuubou.jpg"], type: "base" }
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
                { srcList: ["char/063/Gentoku.jpg"], type: "base" }
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
                { srcList: ["char/063/Koukin.jpg"], type: "base" }
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
                { srcList: ["char/063/Koumei.jpg"], type: "base" }
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
                { srcList: ["char/063/Moutoku.jpg"], type: "base" }
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
                { srcList: ["char/063/Shiryuu.jpg"], type: "base" }
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
                { srcList: ["char/063/Unchou.jpg"], type: "base" }
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
                { srcList: ["char/063/Yokutoku.jpg"], type: "base" }
            ]
        },
        // 元让
        {
            id: "g063_s01",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/063/Genjou.jpg"], type: "base" }
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
                { srcList: ["char/063/Huyou.jpg"], type: "base" }
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
                { srcList: ["char/063/Souan.jpg"], type: "base" }
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
                { srcList: ["char/063/Syoukou.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
