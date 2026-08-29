// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game140", // 全局唯一ID，不可重复，如 game001
    name: "金色のコルダ３フルボイスSpecial",
    year: "2018",
    publisher: ["KOEI"],
    cnStudio: "暂无",
    writer: [
        {name:"Ruby Party", lang:"en"}
    ],
    art: [
        {name:"呉由姫", lang:"zh"}
    ],
    cover: "game/140.jpg", // 相对路径，游戏封面
    charList: [
        // 小日向かなで
        {
            id: "g140_f01",
            name: "小日向かなで",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/140/Kanade.jpg",
                            "char/140/Kanade2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 水嶋新
        {
            id: "g140_m01",
            name: "水嶋新",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Arata.jpg",
                            "char/140/Arata2.png",
                            "char/140/Arata3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 東金千秋
        {
            id: "g140_m02",
            name: "東金千秋",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Chiaki.jpg",
                            "char/140/Chiaki2.png",
                            "char/140/Chiaki3.jpg"], type: "base" },
            ]
        },
        // 榊大地
        {
            id: "g140_m03",
            name: "榊大地",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Daichi.jpg",
                            "char/140/Daichi2.png",
                            "char/140/Daichi3.jpg"], type: "base" },
            ]
        },
        // 水嶋悠人
        {
            id: "g140_m04",
            name: "水嶋悠人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Haruto.jpg",
                            "char/140/Haruto2.png",
                            "char/140/Haruto3.jpg"], type: "base" },
            ]
        },
        // 土岐蓬生
        {
            id: "g140_m05",
            name: "土岐蓬生",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Housei.jpg",
                            "char/140/Housei2.png",
                            "char/140/Housei3.jpg"], type: "base" },
            ]
        },
        // 如月響也
        {
            id: "g140_m06",
            name: "如月響也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Kyouya.jpg",
                            "char/140/Kyouya2.png",
                            "char/140/Kyouya2.jpg"], type: "base" },
            ]
        },
        // 冥加玲士
        {
            id: "g140_m07",
            name: "冥加玲士",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Reiji.jpg",
                            "char/140/Reiji2.png",
                            "char/140/Reiji3.jpg"], type: "base" },
            ]
        },
        // 如月律
        {
            id: "g140_m08",
            name: "如月律",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Ritsu.jpg",
                            "char/140/Ritsu2.png",
                            "char/140/Ritsu3.jpg"], type: "base" },
            ]
        },
        // 天宮静
        {
            id: "g140_m09",
            name: "天宮静",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Sei.jpg",
                            "char/140/Sei2.png",
                            "char/140/Sei3.jpg"], type: "base" },
            ]
        },
        // 火積司郎
        {
            id: "g140_m10",
            name: "火積司郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Shirou.jpg",
                            "char/140/Shirou2.png",
                            "char/140/Shirou3.jpg"], type: "base" },
            ]
        },
        // 七海宗介
        {
            id: "g140_m11",
            name: "七海宗介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Sousuke.jpg",
                            "char/140/Sousuke2.png",
                            "char/140/Sousuke3.jpg"], type: "base" },
            ]
        },
        // 八木沢雪広
        {
            id: "g140_m12",
            name: "八木沢雪広",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Yukihiro.jpg",
                            "char/140/Yukihiro2.png",
                            "char/140/Yukihiro3.jpg"], type: "base" },
            ]
        },
        // 円城寺阿蘭
        {
            id: "g140_fd01",
            name: "円城寺阿蘭",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/140/Aran.jpg"], type: "base" },
            ]
        },
        // 氷渡貴史
        {
            id: "g140_fd02",
            name: "氷渡貴史",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/140/Hido.jpg"], type: "base" },
            ]
        },
        // 芹沢睦
        {
            id: "g140_fd03",
            name: "芹沢睦",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/140/Mutsumi.jpg"], type: "base" },
            ]
        },
        // 長嶺雅紀
        {
            id: "g140_fd04",
            name: "長嶺雅紀",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/140/Nagamine.jpg"], type: "base" },
            ]
        },
        // 支倉仁亜
        {
            id: "g140_fd05",
            name: "支倉仁亜",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/140/Nia.jpg",
                            "char/140/Nia2.png"], type: "base" },
            ]
        },
        // 支倉宇宙
        {
            id: "g140_fd06",
            name: "支倉宇宙",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/140/Sora.jpg",
                            "char/140/Sora2.png"], type: "base" },
            ]
        },
        // 須永巧
        {
            id: "g140_fd07",
            name: "須永巧",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/140/Sunaga.jpg"], type: "base" },
            ]
        },
        // トーノ
        {
            id: "g140_fd08",
            name: "トーノ",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/140/Tono.jpg",
                            "char/140/Tono2.png"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
