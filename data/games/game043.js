// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game043", // 全局唯一ID，不可重复
    name: "共鸣之吻",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"星野彼方", lang:"zh"},
        {name:"青木ひろえ", lang:"zh"},
        {name:"大山愛乃", lang:"zh"},
        {name:"北弓しほ", lang:"zh"},
        {name:"有限会社スタジオエム", lang:"zh"},
        {name:"ウサギリス株式会社", lang:"ja"},
        {name:"YUKI", lang:"en"}
    ],
    art: [
        {name:"藤理ト", lang:"zh"}
    ],
    cover: "game/043.jpg",
    charList: [
        // 天沢朱里
        {
            id: "g043_f01",
            name: "天沢朱里",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/043/Akari.jpg",
                            "char/043/Akari2.jpg"], type: "base" }
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
                { srcList: ["char/043/Kobase.jpg",
                            "char/043/Kobase2.jpg"], type: "base" }
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
                { srcList: ["char/043/Minato.jpg",
                            "char/043/Minato2.jpg"], type: "base" }
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
                { srcList: ["char/043/Mitsuki.jpg",
                            "char/043/Mitsuki2.jpg"], type: "base" }
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
                { srcList: ["char/043/Rokuro.jpg",
                            "char/043/Rokuro2.jpg"], type: "base" }
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
                { srcList: ["char/043/Shuya.jpg",
                            "char/043/Shuya2.jpg"], type: "base" }
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
                { srcList: ["char/043/Tainaka.jpg",
                            "char/043/Tainaka2.jpg"], type: "base" }
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
                { srcList: ["char/043/Higa.jpg",
                            "char/043/Higa2.jpg"], type: "base" }
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
                { srcList: ["char/043/Yofy.jpg",
                            "char/043/Yofy2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
