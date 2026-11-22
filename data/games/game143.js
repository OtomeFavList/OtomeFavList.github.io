// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game143", // 全局唯一ID，不可重复，如 game001
    name: "ソラユメ",
    year: "2026",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"井上愁", lang:"zh"},
        {name:"藤元", lang:"zh"}
    ],
    art: [
        {name:"仁神ユキタカ", lang:"zh"}
    ],
    cover: "game/143.jpg",
    charList: [
        // 守永皐月
        {
            id: "g143_f01",
            name: "守永皐月",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Satsuki.png"], type: "base" }
            ]
        },
        // 餘部透
        {
            id: "g143_m01",
            name: "餘部透",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Amarube.png",
                            "char/143/Amarube2.png",
                            "char/143/Amarube3.jpg",
                            "char/143/Amarube4.jpg",
                            "char/143/Amarube5.jpg"], type: "base" }
            ]
        },
        // 朝峰涼志
        {
            id: "g143_m02",
            name: "朝峰涼志",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Asamine.png",
                            "char/143/Asamine2.jpg",
                            "char/143/Asamine3.jpg",
                            "char/143/Asamine4.jpg"], type: "base" }
            ]
        },
        // 水窪一真
        {
            id: "g143_m03",
            name: "水窪一真",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Misakubo.png",
                            "char/143/Misakubo2.png",
                            "char/143/Misakubo3.jpg",
                            "char/143/Misakubo4.jpg",
                            "char/143/Misakubo5.jpg"], type: "base" }
            ]
        },
        // 御剣暁
        {
            id: "g143_m04",
            name: "御剣暁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Mitsurugi.png",
                            "char/143/Mitsurugi2jpg",
                            "char/143/Mitsurugi3.jpg",
                            "char/143/Mitsurugi4.jpg"], type: "base" }
            ]
        },
        // ルーエン＝エグランティーン
        {
            id: "g143_m05",
            name: "ルーエン＝エグランティーン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Ruen.png",
                            "char/143/Ruen2.jpg",
                            "char/143/Ruen3.jpg",
                            "char/143/Ruen4.jpg"], type: "base" }
            ]
        },
        // 山瀬勇人
        {
            id: "g143_m06",
            name: "山瀬勇人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Yamase.png",
                            "char/143/Yamase2.png",
                            "char/143/Yamase3.jpg",
                            "char/143/Yamase4.jpg",
                            "char/143/Yamase5.jpg"], type: "base" }
            ]
        },
        // アガシオン
        {
            id: "g143_s01",
            name: "アガシオン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Agathion.png"], type: "base" }
            ]
        },
        // 謎の少年
        {
            id: "g143_s02",
            name: "謎の少年",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Boy.png",
                            "char/143/Boy2.jpg",
                            "char/143/Boy3.jpg"], type: "base" }
            ]
        },
        // ケット·シー
        {
            id: "g143_s03",
            name: "ケット·シー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Caitsith.png"], type: "base" }
            ]
        },
        // ハルピュイア
        {
            id: "g143_s04",
            name: "ハルピュイア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Harpy.png"], type: "base" }
            ]
        },
        // 進藤鈴菜
        {
            id: "g143_s05",
            name: "進藤鈴菜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Suzuna.png",
                            "char/143/Suzuna2.jpg",
                            "char/143/Suzuna3.jpg",
                            "char/143/Suzuna4.jpg"], type: "base" }
            ]
        },
        // ウァサゴ
        {
            id: "g143_s06",
            name: "ウァサゴ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/143/Vassago.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
