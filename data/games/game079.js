// ✅已核对信息
const gameData = {
    id: "game079", // 全局唯一ID，不可重复，如 game001
    name: "ALICE＝ALICE",
    year: "2026",
    publisher: ["Rejet"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"真崎結衣", lang:"zh"},
        {name:"小和泉いづみ", lang:"zh"},
        {name:"有栖川あやみ", lang:"zh"},
        {name:"吉村りりか", lang:"zh"},
        {name:"田中彼方", lang:"zh"},
        {name:"瀬多海人", lang:"zh"},
        {name:"栗屋歌兎", lang:"zh"},
        {name:"やまだ有見", lang:"ja"},
        {name:"かなた春香", lang:"ja"},
        {name:"こたに白子", lang:"ja"}
    ],
    art: [
        {name:"スオウ", lang:"ja"}
    ],
    cover: "game/079.jpg", // 相对路径，游戏封面
    charList: [
        // 樱庭明日香
        {
            id: "g079_f01",
            name: "樱庭明日香",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Sakuraba.jpg",
                            "char/079/Sakuraba2.jpg",
                            "char/079/Sakuraba3.jpg"], type: "base" }
            ]
        },
        // 疯帽子
        {
            id: "g079_m01",
            name: "疯帽子",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Boushiya.jpg",
                            "char/079/Boushiya2.jpg",
                            "char/079/Boushiya3.jpg"], type: "base" }
            ]
        },
        // 柴郡猫
        {
            id: "g079_m02",
            name: "柴郡猫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Chesire.jpg",
                            "char/079/Chesire2.jpg",
                            "char/079/Chesire3.jpg"], type: "base" }
            ]
        },
        // 国王
        {
            id: "g079_m03",
            name: "国王",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/King.jpg",
                            "char/079/King2.jpg",
                            "char/079/King3.jpg"], type: "base" }
            ]
        },
        // 黑兔子
        {
            id: "g079_m04",
            name: "黑兔子",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Kuro.jpg",
                            "char/079/Kuro2.jpg",
                            "char/079/Kuro3.jpg"], type: "base" }
            ]
        },
        // 三月兔
        {
            id: "g079_m05",
            name: "三月兔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Sangatsu.jpg",
                            "char/079/Sangatsu2.jpg",
                            "char/079/Sangatsu3.jpg"], type: "base" }
            ]
        },
        // 里爱丽丝
        {
            id: "g079_m06",
            name: "里爱丽丝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Ura.jpg",
                            "char/079/Ura2.jpg",
                            "char/079/Ura3.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
