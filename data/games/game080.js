// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game080", // 全局唯一ID，不可重复，如 game001
    name: "BAD MEDICINE",
    year: "2026",
    publisher: ["Rejet"],
    cnStudio: "暂无",
    writer: [
        {name:"桜葉ユウ", lang:"zh"},
        {name:"砂原有季", lang:"zh"},
        {name:"小和泉いづみ", lang:"zh"},
        {name:"関涼子", lang:"zh"},
        {name:"有栖川あやみ", lang:"zh"},
        {name:"浦井アンナ", lang:"zh"},
        {name:"やまだ有見", lang:"ja"},
        {name:"かなた春香", lang:"ja"},
        {name:"こたに白子", lang:"ja"}
    ],
    art: [
        {name:"双葉はづき", lang:"zh"}
    ],
    cover: "game/080.jpg", // 相对路径，游戏封面
    charList: [
        // 川奈ヒナ
        {
            id: "g080_f01",
            name: "川奈ヒナ",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/080/Hina.jpg"], type: "base" },
            ]
        },
        // 加修レム
        {
            id: "g080_m01",
            name: "加修レム",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/080/Kashu.jpg",
                            "char/080/Kashu2.jpg",
                            "char/080/Kashu3.jpg"], type: "base" },
            ]
        },
        // 葛葉翔
        {
            id: "g080_m02",
            name: "葛葉翔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/080/Kuzuha.jpg",
                            "char/080/Kuzuha2.jpg",
                            "char/080/Kuzuha3.jpg"], type: "base" },
            ]
        },
        // 凪原大貴
        {
            id: "g080_m03",
            name: "凪原大貴",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/080/Nagihara.jpg",
                            "char/080/Nagihara2.jpg",
                            "char/080/Nagihara3.jpg"], type: "base" },
            ]
        },
        // 志奴要
        {
            id: "g080_m04",
            name: "志奴要",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/080/Shido.jpg",
                            "char/080/Shido2.jpg",
                            "char/080/Shido3.jpg"], type: "base" },
            ]
        },
        // 東條海里
        {
            id: "g080_m05",
            name: "東條海里",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/080/Toujou.jpg",
                            "char/080/Toujou2.jpg",
                            "char/080/Toujou3.jpg"], type: "base" },
            ]
        },
        // 柳遼太
        {
            id: "g080_m06",
            name: "柳遼太",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/080/Yanagi.jpg",
                            "char/080/Yanagi2.jpg",
                            "char/080/Yanagi3.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
