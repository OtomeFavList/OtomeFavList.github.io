// data/games/game002.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game002",
    name: "第六妖守",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"仰木サヤ", lang:"zh"},
        {name:"七瀬みお", lang:"zh"},
        {name:"紫堂零", lang:"zh"},
        {name:"みぞおち鳩子", lang:"ja"}
    ],
    art: [
        {name:"スオウ", lang:"ja"}
    ],
    cover: "game/002.jpg",
    charList: [
        // 秋津志乃
        {
            id: "g002_f01",
            name: "秋津志乃",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/002/Shino.jpg"], type: "base" }
            ]
        },
        // 恶露王
        {
            id: "g002_m01",
            name: "恶露王",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/002/Akuroou.jpg",
                            "char/002/Akuroou2.jpg"], type: "base" }
            ]
        },
        // 比良
        {
            id: "g002_m02",
            name: "比良",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/002/Hira.jpg",
                            "char/002/Hira2.jpg"], type: "base" }
            ]
        },
        // 濑见季继
        {
            id: "g002_m03",
            name: "濑见季继",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/002/Semi.jpg",
                            "char/002/Semi2.jpg"], type: "base" }
            ]
        },
        // 白月
        {
            id: "g002_m04",
            name: "白月",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/002/Shiratsuki.jpg",
                            "char/002/Shiratsuki2.jpg"], type: "base" }
            ]
        },
        // 湫
        {
            id: "g002_m05",
            name: "湫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/002/Shuu.jpg",
                            "char/002/Shuu2.jpg"], type: "base" }
            ]
        },
        // 常磐悦也
        {
            id: "g002_h01",
            name: "常磐悦也",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Tokiwa.jpg"], type: "base" }
            ]
        },
        // 玻闰
        {
            id: "g002_s01",
            name: "玻闰",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Hajun.jpg"], type: "base" }
            ]
        },
        // 茨木
        {
            id: "g002_s02",
            name: "茨木",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Ibaragi.jpg"], type: "base" }
            ]
        },
        // 金华
        {
            id: "g002_s03",
            name: "金华",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Kinka.jpg"], type: "base" }
            ]
        },
        // 皓鵺
        {
            id: "g002_s04",
            name: "皓鵺",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Kohya.jpg"], type: "base" }
            ]
        },
        // 狐狐
        {
            id: "g002_s05",
            name: "狐狐",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Kokko.jpg"], type: "base" }
            ]
        },
        // 大蛇
        {
            id: "g002_s06",
            name: "大蛇",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Orochi.jpg"], type: "base" }
            ]
        },
        // 酒呑
        {
            id: "g002_s07",
            name: "酒呑",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Shuten.jpg"], type: "base" }
            ]
        },
        // 八云匡
        {
            id: "g002_s08",
            name: "八云匡",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Tadashi.jpg"], type: "base" }
            ]
        },
        // 高尾
        {
            id: "g002_s09",
            name: "高尾",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Takao.jpg"], type: "base" }
            ]
        },
        // 玉藻
        {
            id: "g002_s10",
            name: "玉藻",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Tamamo.jpg"], type: "base" }
            ]
        },
        // 濑见季尭
        {
            id: "g002_s11",
            name: "濑见季尭",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/002/Tokitaka.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
