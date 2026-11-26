// ✅已核对信息
// ℹ️配角名未校对/未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game157", // 全局唯一ID，不可重复，如 game001
    name: "Starry☆Sky~Autumn Stories~",
    year: "2017",
    publisher: ["honeybee"],
    cnStudio: "暂无",
    writer: [
        {name:"高木聖子", lang:"zh"},
        {name:"桜葉ユウ", lang:"zh"},
        {name:"春名佳純", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"株式会社エッジワークス", lang:"zh"}
    ],
    art: [
        {name:"カズアキ", lang:"ja"},
        {name:"ゑむ", lang:"ja"},
    ],
    cover: "game/157.png", // 相对路径，游戏封面
    charList: [
        // 夜久月子
        {
            id: "g157_f01",
            name: "夜久月子",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/097/Tsukiko.jpg",
                            "char/097/Tsukiko2.jpg",
                            "char/155/Tsukiko.jpg",
                            "char/155/Tsukiko2.jpg",
                            "char/097/Tsukiko3.jpg",
                            "char/155/Tsukiko3.jpg"], type: "base" },
            ]
        },
        // 陽日直獅
        {
            id: "g157_m01",
            name: "陽日直獅",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Haruki.png",
                            "char/157/Haruki2.jpg",
                            "char/157/Haruki3.png",
                            "char/157/Haruki4.png",
                            "char/157/Haruki5.png",
                            "char/157/Haruki6.png",
                            "char/157/Haruki7.png"], type: "base" }
            ]
        },
        // 星月琥太郎
        {
            id: "g157_m02",
            name: "星月琥太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Hoshizuki.png",
                            "char/157/Hoshizuki2.jpg",
                            "char/157/Hoshizuki3.png",
                            "char/157/Hoshizuki4.png",
                            "char/157/Hoshizuki5.png",
                            "char/157/Hoshizuki6.png",
                            "char/157/Hoshizuki7.png"], type: "base" }
            ]
        },
        // 水嶋郁
        {
            id: "g157_m03",
            name: "水嶋郁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Mizushima.png",
                            "char/157/Mizushima2.jpg",
                            "char/157/Mizushima3.png",
                            "char/157/Mizushima4.png",
                            "char/157/Mizushima5.png",
                            "char/157/Mizushima6.png",
                            "char/157/Mizushima7.png"], type: "base" }
            ]
        },
        // 瀬名亜門
        {
            id: "g157_s01",
            name: "瀬名亜門",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Amon.png"], type: "base" }
            ]
        },
        // 粟田謙介
        {
            id: "g157_s02",
            name: "粟田謙介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Awata.png",
                            "char/157/Awata2.png"], type: "base" }
            ]
        },
        // 陰山弘樹
        {
            id: "g157_s03",
            name: "陰山弘樹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Hiroki.png"], type: "base" }
            ]
        },
        // 柿野眞古都
        {
            id: "g157_s04",
            name: "柿野眞古都",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Kakino.png",
                            "char/157/Kakino2.png"], type: "base" }
            ]
        },
        // 星月琥春
        {
            id: "g157_s05",
            name: "星月琥春",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Koharu.png",
                            "char/157/Koharu2.png"], type: "base" }
            ]
        },
        // 柑子修五
        {
            id: "g157_s06",
            name: "柑子修五",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Kouji.png",
                            "char/157/Kouji2.png"], type: "base" }
            ]
        },
        // 春名真琴
        {
            id: "g157_s07",
            name: "春名真琴",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Makoto.png"], type: "base" }
            ]
        },
        // 陽日直太郎
        {
            id: "g157_s08",
            name: "陽日直太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Naotarou.png"], type: "base" }
            ]
        },
        // 梨本拓矢
        {
            id: "g157_s09",
            name: "梨本拓矢",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Nashimoto.png",
                            "char/157/Nashimoto2.png"], type: "base" }
            ]
        },
        // 橘守生
        {
            id: "g157_s10",
            name: "橘守生",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/157/Tachibana.png",
                            "char/157/Tachibana2.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
