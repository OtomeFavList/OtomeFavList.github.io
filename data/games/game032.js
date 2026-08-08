// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game032", // 全局唯一ID，不可重复
    name: "幸运之杖R",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: ["","","","","",""],
    art: [""],
    writer: [
        {name:"由良绫斗", lang:"zh"},
        {name:"小縞なお", lang:"zh"},
        {name:"結城由乃", lang:"zh"},
        {name:"いわた志信", lang:"ja"},
        {name:"かずら林檎", lang:"ja"},
        {name:"すぐり柚貴", lang:"ja"}
    ],
    art: [
        {name:"薄葉カゲロー", lang:"zh"}
    ],
    cover: "img/game/032.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 露露
        {
            id: "g032_f01",
            name: "露露",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/032/Lulu.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/032/Lulu2.jpg","img/char/032/Lulu3.png"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 阿尔贝罗
        {
            id: "g032_m01",
            name: "阿尔贝罗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/032/Alvaro.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/032/Alvaro2.jpg","img/char/032/Alvaro3.png"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 维拉尔
        {
            id: "g032_m02",
            name: "维拉尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/032/Bilal.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/032/Bilal2.jpg","img/char/032/Bilal3.png"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 埃斯特
        {
            id: "g032_m03",
            name: "埃斯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/032/Est.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/032/Est2.jpg","img/char/032/Est3.png"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 尤里乌斯
        {
            id: "g032_m04",
            name: "尤里乌斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/032/Julius.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/032/Julius2.jpg","img/char/032/Julius3.png"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 拉奇
        {
            id: "g032_m05",
            name: "拉奇",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/032/Lagi.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/032/Lagi2.jpg","img/char/032/Lagi3.png"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 诺埃尔
        {
            id: "g032_m06",
            name: "诺埃尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/032/Noel.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/032/Noel2.jpg","img/char/032/Noel3.png"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 艾米
        {
            id: "g032_m07",
            name: "艾米",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/032/Amy.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 埃尔伯特
        {
            id: "g032_m08",
            name: "埃尔伯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/032/Elbert.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 所罗·门
        {
            id: "g032_fd01",
            name: "所罗·门",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/032/Solo.jpg","img/char/032/Solo2.png"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
