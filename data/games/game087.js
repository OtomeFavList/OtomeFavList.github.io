// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game087", // 全局唯一ID，不可重复，如 game001
    name: "DistortedCode -生者の残り香-",
    year: "2025",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"ちひろ", lang:"ja"}
    ],
    art: [
        {name:"あとりちや", lang:"ja"}
    ],
    cover: "game/087.jpg",
    charList: [
        // 伴星澪
        {
            id: "g087_f01",
            name: "伴星澪",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/087/Mio.jpg",
                            "char/087/Mio2.jpg"], type: "base" },
            ]
        },
        // 二ノ瀬隼人
        {
            id: "g087_m01",
            name: "二ノ瀬隼人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/087/Kan.jpg",
                            "char/087/Kan2.jpg"], type: "base" },
            ]
        },
        // 間宮仁章
        {
            id: "g087_m02",
            name: "間宮仁章",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/087/Mam.jpg",
                            "char/087/Mam2.jpg"], type: "base" },
            ]
        },
        // 鳴海誠一
        {
            id: "g087_m03",
            name: "鳴海誠一",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/087/Nar.jpg",
                            "char/087/Nar2.jpg"], type: "base" },
            ]
        },
        // 要邦孝
        {
            id: "g087_m04",
            name: "要邦孝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/087/Nin.jpg",
                            "char/087/Nin2.jpg"], type: "base" },
            ]
        },
        // 鳴海暁乃
        {
            id: "g087_s01",
            name: "鳴海暁乃",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/087/Aki.jpg"], type: "base" }
            ]
        },
        // 伴星隼
        {
            id: "g087_s02",
            name: "伴星隼",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/087/Hay.jpg",
                            "char/087/Hay2.jpg"], type: "base" }
            ]
        },
        // 水代薫
        {
            id: "g087_s03",
            name: "水代薫",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/087/Min.jpg"], type: "base" }
            ]
        },
        // 七杜神夜
        {
            id: "g087_s04",
            name: "七杜神夜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/087/Nan.jpg"], type: "base" }
            ]
        },
        // 梶間ナツコ
        {
            id: "g087_s05",
            name: "梶間ナツコ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/087/Nat.jpg"], type: "base" }
            ]
        },
        // 嶋田英介
        {
            id: "g087_s06",
            name: "嶋田英介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/087/Sim.jpg"], type: "base" }
            ]
        },
        // 宇海政義
        {
            id: "g087_s07",
            name: "宇海政義",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/087/Uka.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
