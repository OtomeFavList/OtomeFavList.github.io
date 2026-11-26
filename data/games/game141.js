// ⚠️已核对信息，角色未添加
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game141", // 全局唯一ID，不可重复，如 game001
    name: "真·翡翠の雫 緋色の欠片2",
    year: "2011",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"日野光里", lang:"zh"},
        {name:"西村悠", lang:"zh"},
        {name:"立花ひめ", lang:"zh"},
        {name:"株式会社エレファンテ", lang:"zh"},
        {name:"やまだ有見", lang:"ja"}
    ],
    art: [
        {name:"カズキヨネ", lang:"ja"}
    ],
    cover: "game/141.jpg", // 相对路径，游戏封面
    charList: [
        // 高千穂珠洲
        {
            id: "g141_f01",
            name: "高千穂珠洲",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Suzu.jpg"], type: "base" }
            ]
        },
        // 重森晶
        {
            id: "g141_m01",
            name: "重森晶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Akira.jpg"], type: "base" }
            ]
        },
        // 壬生克彦
        {
            id: "g141_m02",
            name: "壬生克彦",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Katsuhiko.jpg"], type: "base" }
            ]
        },
        // 御子柴圭
        {
            id: "g141_m03",
            name: "御子柴圭",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Kei.jpg"], type: "base" }
            ]
        },
        // 賀茂保典
        {
            id: "g141_m04",
            name: "賀茂保典",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Yasunori.jpg"], type: "base" }
            ]
        },
        // 壬生小太郎
        {
            id: "g141_m05",
            name: "壬生小太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Kotarou.jpg"], type: "base" }
            ]
        },
        // 高千穂陸
        {
            id: "g141_m06",
            name: "高千穂陸",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Riku.jpg"], type: "base" }
            ]
        },
        // 天野亮司
        {
            id: "g141_m07",
            name: "天野亮司",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Ryouji.jpg"], type: "base" }
            ]
        },
        // 高原エリカ
        {
            id: "g141_s01",
            name: "高原エリカ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Erika.jpg"], type: "base" }
            ]
        },
        // 加奈
        {
            id: "g141_s02",
            name: "加奈",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Kana.jpg"], type: "base" }
            ]
        },
        // 八坂真緒
        {
            id: "g141_s03",
            name: "八坂真緒",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Mao.jpg"], type: "base" }
            ]
        },
        // 弥勒
        {
            id: "g141_s04",
            name: "弥勒",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Miroku.jpg"], type: "base" }
            ]
        },
        // 羅門
        {
            id: "g141_s05",
            name: "羅門",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Ramon.jpg"], type: "base" }
            ]
        },
        // 沙那
        {
            id: "g141_s06",
            name: "沙那",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Sana.jpg"], type: "base" }
            ]
        },
        // 天蠱
        {
            id: "g141_s07",
            name: "天蠱",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/141/Tenko.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
