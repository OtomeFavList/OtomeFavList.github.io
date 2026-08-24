// 数乱digit for Nintendo Switch
// 开发: オトメイト
// 发行: アイディアファクトリー株式会社
// 剧本: 一二階、みぞおち鳩子、紅原香、ミカガミ
// 人物设定: めろ
// 主题歌作曲: 宮崎京一
// 主题歌作词: 米倉千尋
// 主题歌演出: 米倉千尋
// 原画: めろ、里雪
// 导演: 谷口歌奈
// otomate.jp/suran/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game086", // 全局唯一ID，不可重复，如 game001
    name: "数乱digit",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"一二階", lang:"zh"},
        {name:"紅原香", lang:"zh"},
        {name:"みぞおち鳩子", lang:"ja"},
        {name:"ミカガミ", lang:"ja"}
    ],
    art: [
        {name:"里雪", lang:"zh"},
        {name:"めろ", lang:"ja"}
    ],
    cover: "game/086.jpg", // 相对路径，游戏封面
    charList: [
        // 零崎紘可
        {
            id: "g086_f01",
            name: "零崎紘可",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/086/Hiroka.jpg",
                            "char/086/Hiroka2.png",
                            "char/086/Hiroka3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 壱園央助
        {
            id: "g086_m01",
            name: "壱園央助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Ichizono.jpg",
                            "char/086/Ichizono2.jpg",
                            "char/086/Ichizono3.jpg",
                            "char/086/Ichizono4.png",
                            "char/086/Ichizono5.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 玖折巡
        {
            id: "g086_m02",
            name: "玖折巡",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Kuori.jpg",
                            "char/086/Kuori2.jpg",
                            "char/086/Kuori3.jpg",
                            "char/086/Kuori4.png",
                            "char/086/Kuori5.png"], type: "base" },
            ]
        },
        // 弐藤光
        {
            id: "g086_m03",
            name: "弐藤光",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Nitou.jpg",
                            "char/086/Nitou2.jpg",
                            "char/086/Nitou3.jpg",
                            "char/086/Nitou4.png",
                            "char/086/Nitou5.png"], type: "base" },
            ]
        },
        // 陸平崇樹
        {
            id: "g086_m04",
            name: "陸平崇樹",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Rokuhira.jpg",
                            "char/086/Rokuhira2.jpg",
                            "char/086/Rokuhira3.jpg",
                            "char/086/Rokuhira4.png",
                            "char/086/Rokuhira5.png"], type: "base" },
            ]
        },
        // 漆原景太郎
        {
            id: "g086_m05",
            name: "漆原景太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Shichihara.jpg",
                            "char/086/Shichihara2.jpg",
                            "char/086/Shichihara3.jpg",
                            "char/086/Shichihara4.png",
                            "char/086/Shichihara5.png"], type: "base" },
            ]
        },
        // 肆形有比
        {
            id: "g086_m06",
            name: "肆形有比",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Shikata.jpg",
                            "char/086/Shikata2.jpg",
                            "char/086/Shikata3.jpg",
                            "char/086/Shikata4.png",
                            "char/086/Shikata5.png"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
