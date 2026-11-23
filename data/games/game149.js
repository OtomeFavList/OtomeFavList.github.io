// ✅已核对信息
// ℹ️角色名未校对，未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game149", // 全局唯一ID，不可重复，如 game001
    name: "逆転吉原~菊屋編~",
    year: "2018",
    publisher: ["D3 Publisher"],
    cnStudio: "D3 Publisher",
    writer: [
        {name:"島田類", lang:"zh"},
        {name:"かほく麻緒", lang:"ja"},
        {name:"ひつじぐも", lang:"ja"}
    ],
    art: [
        {name:"Hs", lang:"en"}
    ],
    cover: "game/149.jpg", // 相对路径，游戏封面
    charList: [
        // 偉宝みさを
        {
            id: "g149_f01",
            name: "偉宝みさを",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/149/Misawo.jpg"], type: "base" },
            ]
        },
        // 隼
        {
            id: "g149_m01",
            name: "隼",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/149/Hayabusa.jpg"], type: "base" }
            ]
        },
        // 伊吕波
        {
            id: "g149_m02",
            name: "伊吕波",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/149/Iroha.jpg"], type: "base" }
            ]
        },
        // 阳炎
        {
            id: "g149_m03",
            name: "阳炎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/149/Kagerou.jpg"], type: "base" }
            ]
        },
        // 神乐
        {
            id: "g149_m04",
            name: "神乐",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/149/Kagura.jpg"], type: "base" }
            ]
        },
        // 伊东庆次
        {
            id: "g149_m05",
            name: "伊东庆次",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/149/Keiji.jpg"], type: "base" }
            ]
        },
        // 高尾
        {
            id: "g149_m06",
            name: "高尾",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/149/Takao.jpg"], type: "base" }
            ]
        },
        // 常叶
        {
            id: "g149_m07",
            name: "常叶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/149/Tokiwa.jpg"], type: "base" }
            ]
        },
        // あずさ
        {
            id: "g149_s01",
            name: "あずさ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/149/Azusa.jpg"], type: "base" }
            ]
        },
        // 冴木
        {
            id: "g149_s02",
            name: "冴木",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/149/Saeki.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
