// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game043", // 全局唯一ID，不可重复
    name: "共鸣之吻",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: ["","","","","",""],
    art: [""],
    writer: [
        {name:"星野彼方", lang:"zh"},
        {name:"青木ひろえ", lang:"zh"},
        {name:"大山愛乃", lang:"zh"},
        {name:"北弓しほ", lang:"zh"},
        {name:"ウサギリス株式会社", lang:"ja"},
        {name:"YUKI", lang:"en"}
    ],
    art: [
        {name:"藤理ト", lang:"zh"}
    ],
    cover: "img/game/043.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 天沢朱里
        {
            id: "g043_f01",
            name: "天沢朱里",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/043/Akari.jpg","img/char/043/Akari2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 虎走要司
        {
            id: "g043_m01",
            name: "虎走要司",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/043/Kobase.jpg","img/char/043/Kobase2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 凑康平
        {
            id: "g043_m02",
            name: "凑康平",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/043/Minato.jpg","img/char/043/Minato2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 五月女光基
        {
            id: "g043_m03",
            name: "五月女光基",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/043/Mitsuki.jpg","img/char/043/Mitsuki2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 吉冈绿郎
        {
            id: "g043_m04",
            name: "吉冈绿郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/043/Rokuro.jpg","img/char/043/Rokuro2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 碓井修也
        {
            id: "g043_m05",
            name: "碓井修也",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/043/Shuya.jpg","img/char/043/Shuya2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 多井中法
        {
            id: "g043_m06",
            name: "多井中法",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/043/Tainaka.jpg","img/char/043/Tainaka2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 比嘉月彦
        {
            id: "g043_h01",
            name: "比嘉月彦",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["img/char/043/Higa.jpg","img/char/043/Higa2.jpg"], type: "base" }
            ]
        },
        // YOFY
        {
            id: "g043_h02",
            name: "YOFY",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["img/char/043/Yofy.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
