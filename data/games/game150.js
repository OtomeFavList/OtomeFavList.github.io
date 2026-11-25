// ⚠️编剧信息不确切
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game150", // 全局唯一ID，不可重复，如 game001
    name: "逆転吉原~扇屋編~",
    year: "2018",
    publisher: ["D3 Publisher"],
    cnStudio: "D3 Publisher",
    writer: [
        {name:"株式会社ひつじぐも", lang:"zh"}
    ],
    art: [
        {name:"Hs", lang:"en"}
    ],
    cover: "game/150.jpg", // 相对路径，游戏封面
    charList: [
        // 染井清叶
        {
            id: "g150_f01",
            name: "染井清叶",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/150/Kiyoha.png"], type: "base" }
            ]
        },
        // 扬羽
        {
            id: "g150_m01",
            name: "扬羽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/150/Ageha.png"], type: "base" }
            ]
        },
        // 朝雾
        {
            id: "g150_m02",
            name: "朝雾",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/150/Asagiri.png"], type: "base" }
            ]
        },
        // 岳人
        {
            id: "g150_m03",
            name: "岳人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/150/Gakuto.png"], type: "base" }
            ]
        },
        // 泷川
        {
            id: "g150_m04",
            name: "泷川",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/150/Takigawa.png"], type: "base" }
            ]
        },
        // 空蝉
        {
            id: "g150_m05",
            name: "空蝉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/150/Utsusemi.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
