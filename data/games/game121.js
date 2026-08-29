// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game121", // 全局唯一ID，不可重复，如 game001
    name: "忍び、恋うつつ",
    year: "2020",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"株式会社エッジワークス", lang:"zh"},
        {name:"狐塚冬里", lang:"zh"},
        {name:"ムネオカミエ", lang:"ja"},
        {name:"カナエアリス", lang:"ja"}
    ],
    art: [
        {name:"中村龍徳", lang:"zh"}
    ],
    cover: "game/121.jpg", // 相对路径，游戏封面
    charList: [
        // 片桐かえで
        {
            id: "g121_f01",
            name: "片桐かえで",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/121/Kaede.jpg",
                            "char/121/Kaede2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 穴山大介
        {
            id: "g121_m01",
            name: "穴山大介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/121/Daisuke.jpg",
                            "char/121/Daisuke2.jpg",
                            "char/121/Daisuke3.jpg",
                            "char/121/Daisuke4.jpg",
                            "char/121/Daisuke5.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 我来也
        {
            id: "g121_m02",
            name: "我来也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/121/Garaiya.jpg",
                            "char/121/Garaiya2.jpg",
                            "char/121/Garaiya3.jpg",
                            "char/121/Garaiya4.jpg",
                            "char/121/Garaiya5.png"], type: "base" },
            ]
        },
        // 服部半蔵
        {
            id: "g121_m03",
            name: "服部半蔵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/121/Hanzou.jpg",
                            "char/121/Hanzou2.jpg",
                            "char/121/Hanzou3.jpg",
                            "char/121/Hanzou4.jpg",
                            "char/121/Hanzou5.png"], type: "base" },
            ]
        },
        // 豊臣秀虎
        {
            id: "g121_m04",
            name: "豊臣秀虎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/121/Hidetora.jpg",
                            "char/121/Hidetora2.jpg",
                            "char/121/Hidetora3.jpg",
                            "char/121/Hidetora4.jpg",
                            "char/121/Hidetora5.png"], type: "base" },
            ]
        },
        // 霧隠蔵人
        {
            id: "g121_m05",
            name: "霧隠蔵人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/121/Kuroudo.jpg",
                            "char/121/Kuroudo2.jpg",
                            "char/121/Kuroudo3.jpg",
                            "char/121/Kuroudo4.jpg",
                            "char/121/Kuroudo5.png"], type: "base" },
            ]
        },
        // 真田幸影
        {
            id: "g121_m06",
            name: "真田幸影",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/121/Sanada.jpg",
                            "char/121/Sanada2.jpg",
                            "char/121/Sanada3.jpg",
                            "char/121/Sanada4.jpg",
                            "char/121/Sanada5.png"], type: "base" },
            ]
        },
        // 猿飛咲助
        {
            id: "g121_m07",
            name: "猿飛咲助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/121/Sarutobi.jpg",
                            "char/121/Sarutobi2.jpg",
                            "char/121/Sarutobi3.jpg",
                            "char/121/Sarutobi4.jpg",
                            "char/121/Sarutobi5.png"], type: "base" },
            ]
        },
        // 霧隠忠人
        {
            id: "g121_m08",
            name: "霧隠忠人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/121/Tadahito.jpg",
                            "char/121/Tadahito2.jpg",
                            "char/121/Tadahito3.jpg",
                            "char/121/Tadahito4.jpg",
                            "char/121/Tadahito5.png"], type: "base" },
            ]
        },
        // 宇喜多義家
        {
            id: "g121_m09",
            name: "宇喜多義家",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/121/Ukita.jpg",
                            "char/121/Ukita2.jpg",
                            "char/121/Ukita3.jpg",
                            "char/121/Ukita4.jpg",
                            "char/121/Ukita5.png"], type: "base" },
            ]
        },
        // 由利鎌清
        {
            id: "g121_m10",
            name: "由利鎌清",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/121/Yuri.jpg",
                            "char/121/Yuri2.jpg",
                            "char/121/Yuri3.jpg",
                            "char/121/Yuri4.jpg",
                            "char/121/Yuri5.png"], type: "base" },
            ]
        },
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
