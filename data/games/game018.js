// data/games/game018.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game018",
    name: "命运九重奏",
    year: "2023",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"潮文音", lang:"zh"},
        {name:"一二階", lang:"zh"}
    ],
    art: [
        {name:"悌太", lang:"zh"},
        {name:"清白かりん", lang:"zh"}
    ],
    cover: "game/018.jpg",
    charList: [
        // 小春
        {
            id: "g018_f01",
            name: "小春",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Koharu.jpg"], type: "base" }
            ]
        },
        // 久我深琴
        {
            id: "g018_f02",
            name: "久我深琴",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Mikoto.jpg"], type: "base" }
            ]
        },
        // 不知火七海
        {
            id: "g018_f03",
            name: "不知火七海",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Nanami.jpg"], type: "base" }
            ]
        },
        // 宿史晓人
        {
            id: "g018_m01",
            name: "宿史晓人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Akito.jpg"], type: "base" }
            ]
        },
        // 乙丸平士
        {
            id: "g018_m02",
            name: "乙丸平士",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Heishi.jpg"], type: "base" }
            ]
        },
        // 加贺见一月
        {
            id: "g018_m03",
            name: "加贺见一月",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Itsuki.jpg"], type: "base" }
            ]
        },
        // 结贺驱
        {
            id: "g018_m04",
            name: "结贺驱",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Kakeru.jpg"], type: "base" }
            ]
        },
        // 远矢正宗
        {
            id: "g018_m05",
            name: "远矢正宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Masamune.jpg"], type: "base" }
            ]
        },
        // 吾妻夏彦
        {
            id: "g018_m06",
            name: "吾妻夏彦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Natsuhiko.jpg"], type: "base" }
            ]
        },
        // 二条朔也
        {
            id: "g018_m07",
            name: "二条朔也",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Sakuya.jpg"], type: "base" }
            ]
        },
        // 市之濑千里
        {
            id: "g018_m08",
            name: "市之濑千里",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Senri.jpg"], type: "base" }
            ]
        },
        // 室星朗
        {
            id: "g018_m09",
            name: "室星朗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/018/Ron.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
