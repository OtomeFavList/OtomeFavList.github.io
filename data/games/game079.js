// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game079", // 全局唯一ID，不可重复，如 game001
    name: "ALICE=ALICE",
    year: "2026",
    publisher: ["Rejet"],
    cnStudio: "暂无",
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
        // 桜庭アスカ
        {
            id: "g079_f01",
            name: "桜庭アスカ",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Sakuraba.jpg",
                            "char/079/Sakuraba2.jpg",
                            "char/079/Sakuraba3.jpg"], type: "base" }
            ]
        },
        // 帽子屋
        {
            id: "g079_m01",
            name: "帽子屋",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Boushiya.jpg",
                            "char/079/Boushiya2.jpg",
                            "char/079/Boushiya3.jpg"], type: "base" }
            ]
        },
        // チェシャ猫
        {
            id: "g079_m02",
            name: "チェシャ猫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Chesire.jpg",
                            "char/079/Chesire2.jpg",
                            "char/079/Chesire3.jpg"], type: "base" }
            ]
        },
        // キング
        {
            id: "g079_m03",
            name: "キング",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/King.jpg",
                            "char/079/King2.jpg",
                            "char/079/King3.jpg"], type: "base" }
            ]
        },
        // 黒うさぎ
        {
            id: "g079_m04",
            name: "黒うさぎ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Kuro.jpg",
                            "char/079/Kuro2.jpg",
                            "char/079/Kuro3.jpg"], type: "base" }
            ]
        },
        // 三月ウサギ
        {
            id: "g079_m05",
            name: "三月ウサギ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Sangatsu.jpg",
                            "char/079/Sangatsu2.jpg",
                            "char/079/Sangatsu3.jpg"], type: "base" }
            ]
        },
        // 裏ありす
        {
            id: "g079_m06",
            name: "裏ありす",
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
