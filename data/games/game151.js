// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game151", // 全局唯一ID，不可重复，如 game001
    name: "三国恋戦記 魁",
    year: "2019",
    publisher: ["Daisy²"],
    cnStudio: "暂无",
    writer: [
        {name:"喜屋武米助", lang:"zh"},
        {name:"中条ローザ", lang:"zh"},
        {name:"宙地", lang:"zh"},
        {name:"トム", lang:"ja"}
    ],
    art: [
        {name:"スズケン", lang:"ja"}
    ],
    cover: "game/151.jpg", // 相对路径，游戏封面
    charList: [
        // 木下巴
        {
            id: "g151_f01",
            name: "木下巴",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/151/Tomoe.png"], type: "base" }
            ]
        },
        // 仲頴
        {
            id: "g151_m01",
            name: "仲頴",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/151/Chouei.png"], type: "base" }
            ]
        },
        // 伯符
        {
            id: "g151_m02",
            name: "伯符",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/151/Hakufu.png"], type: "base" }
            ]
        },
        // 本初
        {
            id: "g151_m03",
            name: "本初",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/151/Honsho.png"], type: "base" }
            ]
        },
        // 奉先
        {
            id: "g151_m04",
            name: "奉先",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/151/Housen.png"], type: "base" }
            ]
        },
        // 華陀
        {
            id: "g151_m05",
            name: "華陀",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/151/Kada.png"], type: "base" }
            ]
        },
        // 公瑾
        {
            id: "g151_s01",
            name: "公瑾",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/151/Koukin.png"], type: "base" }
            ]
        },
        // 孟卓
        {
            id: "g151_s02",
            name: "孟卓",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/151/Moutaka.png"], type: "base" }
            ]
        },
        // 孟徳
        {
            id: "g151_s03",
            name: "孟徳",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/151/Moutoku.png"], type: "base" }
            ]
        },
        // 盧植
        {
            id: "g151_s04",
            name: "盧植",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/151/Roshoku.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
