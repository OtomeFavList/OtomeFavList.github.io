// ⚠️编剧信息不确切
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game150", // 全局唯一ID，不可重复，如 game001
    name: "逆転吉原~扇屋編~",
    year: "2018",
    publisher: ["D3 Publisher"],
    cnStudio: "D3 Publisher",
    writer: [
        {name:"株式会社ひつじぐも", lang:"zh
    ],
    art: [
        {name:"Hs", lang:"en"}
    ],
    cover: "game/150.jpg", // 相对路径，游戏封面
    charList: [
        // 染井清葉
        {
            id: "g150_f01",
            name: "染井清葉",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/150/Kiyoha.jpg"], type: "base" }
            ]
        },
        // あげは
        {
            id: "g150_m01",
            name: "あげは",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/150/Ageha.jpg"], type: "base" }
            ]
        },
        // 朝霧
        {
            id: "g150_m02",
            name: "朝霧",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/150/Asagiri.jpg"], type: "base" }
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
                { srcList: ["char/150/Gakuto.jpg"], type: "base" }
            ]
        },
        // 滝川
        {
            id: "g150_m04",
            name: "滝川",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/150/Takigawa.jpg"], type: "base" }
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
                { srcList: ["char/150/Utsusemi.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
