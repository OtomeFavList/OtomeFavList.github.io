// data/games/game007.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game007",
    name: "Collar×Malice",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: ["有野幸","砂原有季","いわた志信","小縞なお"],
    art: ["花邑まい"],
    cover: "img/game/007.jpg",
    charList: [
        // 星野市香
        {
            id: "g007_f01",
            name: "星野市香",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/007/Ichika.jpg","img/char/007/Ichika2.jpg"], type: "base" }
            ]
        },
        // 柳爱时
        {
            id: "g007_m01",
            name: "柳爱时",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/007/Aiji.jpg"], type: "base" }
            ]
        },
        // 冈崎契
        {
            id: "g007_m02",
            name: "冈崎契",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/007/Kei.jpg"], type: "base" }
            ]
        },
        // 榎本峰雄
        {
            id: "g007_m03",
            name: "榎本峰雄",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/007/Mineo.jpg"], type: "base" }
            ]
        },
        // 白石景之
        {
            id: "g007_m04",
            name: "白石景之",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/007/Shiraishi.jpg"], type: "base" }
            ]
        },
        // 笹塚尊
        {
            id: "g007_m05",
            name: "笹塚尊",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/007/Takeru.jpg"], type: "base" }
            ]
        }, // ✅补上逗号
        // 冴木弓弦
        {
            id: "g007_h01",
            name: "冴木弓弦",
            gender: "male",
            isHidden: true,
            isFD: true,
            images: [
                { srcList: ["img/char/007/Yuzuru.jpg"], type: "base" } // ✅src → srcList
            ]
        },
        // 峰岸誠司
        {
            id: "g007_fd01",
            name: "峰岸誠司",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/007/Minegishi.jpg"], type: "base" } // ✅src → srcList
            ]
        }, // ✅补上逗号
        // 吉成秀明
        {
            id: "g007_fd02",
            name: "吉成秀明",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/007/Yoshinari.jpg"], type: "base" } // ✅src → srcList
            ]
        }
    ]
};

// ESModule导出
export { gameData };
