// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game124", // 全局唯一ID，不可重复，如 game001
    name: "ゆのはなSpRING! ~Mellow Times~",
    year: "2019",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"皆川千尋", lang:"zh"},
        {name:"有野幸", lang:"zh"},
        {name:"春夏秋冬よもひろ", lang:"zh"},
        {name:"夏越ちか", lang:"zh"},
        {name:"御門蓮", lang:"zh"},
        {name:"佐々木麿", lang:"zh"},
        {name:"ふくだりょうこ", lang:"ja"}
    ],
    art: [
        {name:"RiRi", lang:"en"}
    ],
    cover: "game/124.jpg", // 相对路径，游戏封面
    charList: [
        // 三條ゆのは
        {
            id: "g124_f01",
            name: "三條ゆのは",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/124/Yunoha.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 二葉爽一郎
        {
            id: "g124_m01",
            name: "二葉爽一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/124/Futaba.jpg",
                            "char/124/Futaba2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 泉高平
        {
            id: "g124_m02",
            name: "泉高平",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/124/Izumi.jpg",
                            "char/124/Izumi2.jpg",
                            "char/124/Izumi3.jpg",
                            "char/124/Izumi4.jpg"], type: "base" },
            ]
        },
        // 香賀梅ノ介
        {
            id: "g124_m03",
            name: "香賀梅ノ介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/124/Kaga.jpg",
                            "char/124/Kaga2.jpg",
                            "char/124/Kaga3.jpg"], type: "base" },
            ]
        },
        // 片桐金太郎
        {
            id: "g124_m04",
            name: "片桐金太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/124/Kintarou.jpg",
                            "char/124/Kintarou2.jpg",
                            "char/124/Kintarou3.jpg"], type: "base" },
            ]
        },
        // 佐伯宏太
        {
            id: "g124_m05",
            name: "佐伯宏太",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/124/Kouta.jpg",
                            "char/124/Kouta2.jpg",
                            "char/124/Kouta3.jpg",
                            "char/124/Kouta4.jpg"], type: "base" },
            ]
        },
        // 葛城直昌
        {
            id: "g124_m06",
            name: "葛城直昌",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/124/Naomasa.jpg",
                            "char/124/Naomasa2.jpg",
                            "char/124/Naomasa3.jpg",
                            "char/124/Naomasa4.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
