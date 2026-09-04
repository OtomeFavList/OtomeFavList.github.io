// data/games/game009.js
// ✅已核对信息
const gameData = {
    id: "game009",
    name: "共生丘比特",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"吉村りりか", lang:"zh"}
    ],
    art: [
        {name:"ユウヤ", lang:"ja"}
    ],
    cover: "game/009.jpg",
    charList: [
        // 莉涅特·米勒
        {
            id: "g009_f01",
            name: "莉涅特·米勒",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/009/Lynette.jpg",
                            "char/009/Lynette2.jpg"], type: "base" }
            ]
        },
        // 艾伦·梅尔维尔
        {
            id: "g009_m01",
            name: "艾伦·梅尔维尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/009/Allan.jpg",
                            "char/009/Allan2.jpg"], type: "base" }
            ]
        },
        // 吉尔·洛夫克拉夫特
        {
            id: "g009_m02",
            name: "吉尔·洛夫克拉夫特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/009/Gill.jpg",
                            "char/009/Gill2.jpg"], type: "base" }
            ]
        },
        // 萤彩院·Ｆ·琉辉
        {
            id: "g009_m03",
            name: "萤彩院·Ｆ·琉辉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/009/Keisaiin.jpg",
                            "char/009/Keisaiin2.jpg"], type: "base" }
            ]
        },
        // 劳尔·亚克尼特
        {
            id: "g009_m04",
            name: "劳尔·亚克尼特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/009/Raul.jpg",
                            "char/009/Raul2.jpg"], type: "base" }
            ]
        },
        // 薛尔比·史奈尔
        {
            id: "g009_m05",
            name: "薛尔比·史奈尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/009/Shelby.jpg",
                            "char/009/Shelby2.jpg"], type: "base" }
            ]
        },
        // 朱彼特
        {
            id: "g009_h01",
            name: "彼得·弗拉修",
            hiddenName: ["小唧","朱彼特"],
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["char/009/Peter.jpg",
                            "char/009/Peter2.jpg",
                            "char/009/Peter4.jpg",
                            "char/009/Peter3.jpg",
                            "char/009/Peter5.jpg"], type: "base" }
            ]
        },
        // 梅列尼斯·莱文
        {
            id: "g009_fd01",
            name: "梅列尼斯·莱文",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/009/Merenice.jpg"], type: "base" }
            ]
        },
        // 欧文·赫里欧
        {
            id: "g009_fd02",
            name: "欧文·赫里欧",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/009/Owen.jpg",
                            "char/009/Owen2.jpg"], type: "base" }
            ]
        },
        // 凯萨琳·斯贝德
        {
            id: "g009_s01",
            name: "凯萨琳·斯贝德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/009/Catherine.jpg",
                            "char/009/Catherine2.jpg"], type: "base" }
            ]
        },
        // 克拉莉丝·缇亚
        {
            id: "g009_s02",
            name: "克拉莉丝·缇亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/009/Claris.jpg",
                            "char/009/Claris2.jpg"], type: "base" }
            ]
        },
        // 玛斯
        {
            id: "g009_s03",
            name: "玛斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/009/Mars.jpg",
                            "char/009/Mars2.jpg"], type: "base" }
            ]
        },
        // 米奈娃
        {
            id: "g009_s04",
            name: "米奈娃",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/009/Minerva.jpg",
                            "char/009/Minerva2.jpg"], type: "base" }
            ]
        },
        // 宙斯
        {
            id: "g009_s05",
            name: "宙斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/009/Zeus.jpg"], type: "base" }
            ]
        },
        // 伊萊·奧马尔
        {
            id: "g009_fs01",
            name: "伊萊·奧马尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/009/Eli.jpg"], type: "base" }
            ]
        },
        // 雷·安德
        {
            id: "g009_fs02",
            name: "雷·安德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/009/Ray.jpg"], type: "base" }
            ]
        },
        // 罗宾·布雷特
        {
            id: "g009_fs03",
            name: "罗宾·布雷特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/009/Robin.jpg"], type: "base" }
            ]
        },
        // 西尔维·史考特
        {
            id: "g009_fs04",
            name: "西尔维·史考特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/009/Sylvie.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
