// data/games/game015.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game015",
    name: "君于雪中希冀",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"佐々木麿", lang:"zh"},
        {name:"結城由乃", lang:"zh"},
        {name:"仰木サヤ", lang:"zh"},
        {name:"みぞおち鳩子", lang:"ja"}
    ],
    art: [
        {name:"Team.ナガオカ", lang:"en"}
    ],
    cover: "game/015.jpg",
    charList: [
        // 纱乃
        {
            id: "g015_f01",
            name: "纱乃",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/015/Suzuno.jpg"], type: "base" }
            ]
        },
        // 锦次
        {
            id: "g015_m01",
            name: "锦次",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/015/Kinji.jpg"], type: "base" }
            ]
        },
        // 久贺源十郎
        {
            id: "g015_m02",
            name: "久贺源十郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/015/Kuga.jpg"], type: "base" }
            ]
        },
        // 东条国孝
        {
            id: "g015_m03",
            name: "东条国孝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/015/Kunitaka.jpg"], type: "base" }
            ]
        },
        // 樱太郎
        {
            id: "g015_m04",
            name: "樱太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/015/Outarou.jpg"], type: "base" }
            ]
        },
        // 篁智成
        {
            id: "g015_m05",
            name: "篁智成",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/015/Tomonari.jpg"], type: "base" }
            ]
        },
        // 与市
        {
            id: "g015_m06",
            name: "与市",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/015/Yoichi.jpg"], type: "base" }
            ]
        },
        // 比弥卫
        {
            id: "g015_s01",
            name: "比弥卫",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/015/Hibie.jpg"], type: "base" }
            ]
        },
        // 比弥那
        {
            id: "g015_s02",
            name: "比弥那",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/015/Hibina.jpg"], type: "base" }
            ]
        },
        // 小豆
        {
            id: "g015_s03",
            name: "小豆",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/015/Komame.jpg"], type: "base" }
            ]
        },
        // 川村京士郎
        {
            id: "g015_s04",
            name: "川村京士郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/015/Kyoushirou.jpg"], type: "base" }
            ]
        },
        // 三春
        {
            id: "g015_s05",
            name: "三春",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/015/Miharu.jpg"], type: "base" }
            ]
        },
        // 宫地三茂
        {
            id: "g015_s06",
            name: "宫地三茂",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/015/Miyaji.jpg"], type: "base" }
            ]
        },
        // 德川吉宗
        {
            id: "g015_s07",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/015/Tokugawa.jpg"], type: "base" }
            ]
        },
        // 薮田清彦
        {
            id: "g015_s08",
            name: "薮田清彦",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/015/Yabuta.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
