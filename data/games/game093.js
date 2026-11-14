// ⚠️已核对信息，配角未添加
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game093", // 全局唯一ID，不可重复，如 game001
    name: "UN:LOGICAL",
    year: "2026",
    publisher: ["BROCCOLI","LicoBiTs"],
    cnStudio: "暂无",
    writer: [
        {name:"谷本透", lang:"zh"},
        {name:"尾河依", lang:"zh"},
        {name:"入賀ましろ", lang:"zh"},
        {name:"株式会社シナリオテクノロジーカガミ", lang:"zh"},
        {name:"砂原有季", lang:"zh"}
    ],
    art: [
        {name:"花邑まい", lang:"zh"},
        {name:"うた", lang:"ja"}
    ],
    cover: "game/093.jpg", // 相对路径，游戏封面
    charList: [
        // 涼乃環無
        {
            id: "g093_f01",
            name: "涼乃環無",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/093/Kanna.jpg",
                            "char/093/Kanna2.jpg",
                            "char/093/Kanna3.png",
                            "char/093/Kanna4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 宗像戒
        {
            id: "g093_m01",
            name: "宗像戒",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/093/Kai.jpg",
                            "char/093/Kai2.jpg",
                            "char/093/Kai3.png",
                            "char/093/Kai4.jpg",
                            "char/093/Kai5.jpg",
                            "char/093/Kai6.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 雅火
        {
            id: "g093_m02",
            name: "雅火",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/093/Miyabi.jpg",
                            "char/093/Miyabi2.png",
                            "char/093/Miyabi3.jpg",
                            "char/093/Miyabi4.jpg",
                            "char/093/Miyabi5.jpg"], type: "base" },
            ]
        },
        // 永守藍
        {
            id: "g093_m03",
            name: "永守藍",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/093/Ran.jpg",
                            "char/093/Ran2.jpg",
                            "char/093/Ran3.png",
                            "char/093/Ran4.jpg",
                            "char/093/Ran5.jpg",
                            "char/093/Ran6.jpg"], type: "base" },
            ]
        },
        // 弥坂奏壱
        {
            id: "g093_m04",
            name: "弥坂奏壱",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/093/Soichi.jpg",
                            "char/093/Soichi2.jpg",
                            "char/093/Soichi3.png",
                            "char/093/Soichi4.jpg",
                            "char/093/Soichi5.jpg",
                            "char/093/Soichi6.jpg"], type: "base" },
            ]
        },
        // ユーリ
        {
            id: "g093_m05",
            name: "ユーリ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/093/Yuri.jpg",
                            "char/093/Yuri2.jpg",
                            "char/093/Yuri3.png",
                            "char/093/Yuri4.jpg",
                            "char/093/Yuri5.jpg",
                            "char/093/Yuri6.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
