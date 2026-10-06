// data/games/game032.js
// ✅已核对信息
const gameData = {
    id: "game032", // 全局唯一ID，不可重复
    name: "幸运之杖 R",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"由良绫斗", lang:"zh"},
        {name:"小縞なお", lang:"zh"},
        {name:"結城由乃", lang:"zh"},
        {name:"いわた志信", lang:"ja"},
        {name:"かずら林檎", lang:"ja"},
        {name:"すぐり柚貴", lang:"ja"}
    ],
    art: [
        {name:"薄葉カゲロー", lang:"zh"}
    ],
    cover: "game/032.jpg",
    charList: [
        // 露露
        {
            id: "g032_f01",
            name: "露露",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/032/Lulu.jpg",
                            "char/032/Lulu2.png"], type: "base" },
                { srcList: ["char/032/Lulu3.jpg",
                            "char/032/Lulu4.png",
                            "char/032/Lulu5.png",
                            "char/032/Lulu6.png",
                            "char/032/Lulu7.png"], type: "fd" }
            ]
        },
        // 阿尔贝罗·加雷
        {
            id: "g032_m01",
            name: "阿尔贝罗·加雷",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/032/Alvaro.jpg",
                            "char/032/Alvaro2.png"], type: "base" },
                { srcList: ["char/032/Alvaro3.jpg",
                            "char/032/Alvaro4.png",
                            "char/032/Alvaro5.png"], type: "fd" }
            ]
        },
        // 维拉尔·阿萨德·伊斯南·法兰巴尔多
        {
            id: "g032_m02",
            name: "维拉尔·阿萨德·伊斯南·法兰巴尔多",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/032/Bilal.jpg",
                            "char/032/Bilal2.png"], type: "base" },
                { srcList: ["char/032/Bilal3.jpg",
                            "char/032/Bilal4.png",
                            "char/032/Bilal5.png"], type: "fd" }
            ]
        },
        // 埃斯特·里纳乌多
        {
            id: "g032_m03",
            name: "埃斯特·里纳乌多",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/032/Est.jpg",
                            "char/032/Est2.png"], type: "base" },
                { srcList: ["char/032/Est3.jpg",
                            "char/032/Est4.png",
                            "char/032/Est5.png"], type: "fd" }
            ]
        },
        // 尤里乌斯·福特纳
        {
            id: "g032_m04",
            name: "尤里乌斯·福特纳",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/032/Julius.jpg",
                            "char/032/Julius2.png"], type: "base" },
                { srcList: ["char/032/Julius3.jpg",
                            "char/032/Julius4.png",
                            "char/032/Julius5.png"], type: "fd" }
            ]
        },
        // 拉奇·艾尔·纳吉尔
        {
            id: "g032_m05",
            name: "拉奇·艾尔·纳吉尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/032/Lagi.jpg",
                            "char/032/Lagi2.png"], type: "base" },
                { srcList: ["char/032/Lagi3.jpg",
                            "char/032/Lagi4.png",
                            "char/032/Lagi5.png"], type: "fd" }
            ]
        },
        // 诺埃尔·瓦尔莫
        {
            id: "g032_m06",
            name: "诺埃尔·瓦尔莫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/032/Noel.jpg",
                            "char/032/Noel2.png"], type: "base" },
                { srcList: ["char/032/Noel3.jpg",
                            "char/032/Noel4.png",
                            "char/032/Noel5.png"], type: "fd" }
            ]
        },
        // 艾米
        {
            id: "g032_m07",
            name: "艾米",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/032/Amy.png"], type: "base" },
                { srcList: ["char/032/Amy2.jpg",
                            "char/032/Amy3.jpg"], type: "fd" }
            ]
        },
        // 埃尔伯特
        {
            id: "g032_m08",
            name: "埃尔伯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/032/Elbert.png"], type: "base" },
                { srcList: ["char/032/Elbert2.jpg",
                            "char/032/Elbert3.jpg"], type: "fd" }
            ]
        },
        // 所罗·门
        {
            id: "g032_fd01",
            name: "所罗·门",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/032/Solo.jpg",
                            "char/032/Solo2.png"], type: "base" },
                { srcList: ["char/032/Solo3.png"], type: "fd" }
            ]
        },
        // 阿黛蕾
        {
            id: "g032_s01",
            name: "阿黛蕾",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/032/Adele.jpg"], type: "base" },
                { srcList: ["char/032/Adele2.jpg",
                            "char/032/Adele3.jpg"], type: "fd" }
            ]
        },
        // 辛西娅
        {
            id: "g032_s02",
            name: "辛西娅",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/032/Cynthia.png"], type: "base" },
                { srcList: ["char/032/Cynthia2.jpg",
                            "char/032/Cynthia3.jpg"], type: "fd" }
            ]
        },
        // 埃德加
        {
            id: "g032_s03",
            name: "埃德加",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/032/Edgar.png"], type: "base" },
                { srcList: ["char/032/Edgar2.jpg",
                            "char/032/Edgar3.jpg"], type: "fd" }
            ]
        },
        // 伊万
        {
            id: "g032_s04",
            name: "伊万",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/032/Ivan.png"], type: "base" },
                { srcList: ["char/032/Ivan2.jpg"], type: "fd" }
            ]
        },
        // 玛莎
        {
            id: "g032_s05",
            name: "玛莎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/032/Martha.jpg"], type: "base" },
                { srcList: ["char/032/Martha2.jpg",
                            "char/032/Martha3.jpg"], type: "fd" }
            ]
        },
        // 马修
        {
            id: "g032_s06",
            name: "马修",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/032/Mathew.png"], type: "base" },
                { srcList: ["char/032/Mathew2.jpg",
                            "char/032/Mathew3.jpg"], type: "fd" }
            ]
        },
        // 瓦罗纳
        {
            id: "g032_s07",
            name: "瓦罗纳",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/032/Valrohna.png"], type: "base" }
            ]
        },
        // 瓦妮亚
        {
            id: "g032_s08",
            name: "瓦妮亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/032/Vania.png"], type: "base" }
            ]
        },
        // 可可
        {
            id: "g032_fs01",
            name: "可可",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Coco.jpg"], type: "base" }
            ]
        },
        // 艾尔泽
        {
            id: "g032_fs02",
            name: "艾尔泽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Else.jpg"], type: "base" }
            ]
        },
        // 法塔·莫尔加纳
        {
            id: "g032_fs03",
            name: "法塔·莫尔加纳",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Fata.jpg"], type: "base" }
            ]
        },
        // 亨利
        {
            id: "g032_fs04",
            name: "亨利",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Henri.jpg"], type: "base" }
            ]
        },
        // 莉安
        {
            id: "g032_fs05",
            name: "莉安",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Lien.jpg"], type: "base" }
            ]
        },
        // 佩尔·索纳
        {
            id: "g032_fs06",
            name: "佩尔·索纳",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Per.jpg"], type: "base" }
            ]
        },
        // 拉乌尔
        {
            id: "g032_fs07",
            name: "拉乌尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Raoul.jpg"], type: "base" }
            ]
        },
        // 拉希德
        {
            id: "g032_fs08",
            name: "拉希德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Rasheed.jpg], type: "base" }
            ]
        },
        // 萨拉曼达
        {
            id: "g032_fs09",
            name: "萨拉曼达",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Salamander.jpg"], type: "base" }
            ]
        },
        // 塞格
        {
            id: "g032_fs10",
            name: "塞格",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Segg.jpg"], type: "base" }
            ]
        },
        // 泽斯
        {
            id: "g032_fs11",
            name: "泽斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/032/Zeth.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
