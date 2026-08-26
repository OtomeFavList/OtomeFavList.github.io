// 月影の鎖 -錯乱パラノイア-
// 开发: TAKUYO
// 发行: TAKUYO
// 人物设定: ヒロセアヅミ
// 主题歌作曲: Morrigan、ざっとん（Nintendo Switch版）、カケリネ（Nintendo Switch版）
// 主题歌作词: 片霧烈火、ざっとん（Nintendo Switch版）、カケリネ（Nintendo Switch版）
// 主题歌演出: 片霧烈火、ラムソアーズ（Nintendo Switch版）
// 原画: ヒロセアヅミ
// 剧本: 白鳥ユアン、井上愁、其他
// 音乐: 森藤晶司
// 链接: ErogameScape VNDB
// 官方网站: takuyo.co.jp/products/getsueifd/getsueifdvita/index.html

// 中文名: 月影之锁 错乱偏执狂
// 开发: TAKUYO
// 发行: TAKUYO
// 剧本: 白鳥ユアン（共通、大井川、榛名线，猪口线部分）／藤元（藤文）（神乐坂线、望月神乐坂共通）／井上愁（望月线，猪口线部分）／犬小屋煙突
// 音乐: 森藤晶司
// 人物设定: ヒロセアヅミ
// 主题歌作曲: Morrigan
// 主题歌作词: 片霧烈火
// 主题歌演出: 片霧烈火
// 原画: ヒロセアヅミ
// 官方网站: takuyo.co.jp/products/getsuei/index.html

// 月影の鎖 -狂爛モラトリアム-
// 开发: TAKUYO
// 发行: TAKUYO
// 剧本: 白鳥ユアン／井上愁／犬小屋煙突／関口琴子／そよかぜ御舟
// 音乐: 森藤晶司
// 人物设定: ヒロセアヅミ
// 主题歌作曲: 柊奈緒
// 主题歌作词: 柊奈緒
// 主题歌演出: 柊奈緒、片霧烈火
// 原画: ヒロセアヅミ
// 官方网站: takuyo.co.jp/products/getsueifd/index.html

// 开发: TAKUYO
// 发行: TAKUYO
// 人物设定: ヒロセアヅミ
// 主题歌作曲: 柊奈緒、ざっとん（Nintendo Switch版）、KAKERU（Nintendo Switch版）、Morrigan
// 主题歌作词: 柊奈緒、ざっとん（Nintendo Switch版）、KAKERU（Nintendo Switch版）、片霧烈火
// 主题歌演出: 柊奈緒、片霧烈火、ラムソアーズ（Nintendo Switch版）
// 原画: ヒロセ アヅミ
// 剧本: 白鳥ユアン、井上愁、其他
// 音乐: 森藤晶司
// 链接: ErogameScape VNDB
// 官方网站: takuyo.co.jp/products/getsueifd/getsueifdvita/index.html

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game103", // 全局唯一ID，不可重复，如 game001
    name: "月影の鎖 -錯乱パラノイア-",
    year: "2023",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"白鳥ユアン", lang:"zh"},
        {name:"藤元", lang:"zh"},
        {name:"井上愁", lang:"zh"},
        {name:"犬小屋煙突", lang:"zh"}
    ],
    art: [
        {name:"ヒロセ アヅミ", lang:"ja"}
    ],
    cover: "game/103.jpg", // 相对路径，游戏封面
    charList: [
        // 冬浦めぐみ
        {
            id: "g103_f01",
            name: "冬浦めぐみ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/103/Megumi.jpg",
                            "char/103/Megumi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 神楽坂響
        {
            id: "g103_m01",
            name: "神楽坂響",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/103/Hibiki.jpg",
                            "char/103/Hibiki2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 榛名望
        {
            id: "g103_m02",
            name: "榛名望",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/103/Nozomu.jpg",
                            "char/103/Nozomu2.jpg"], type: "base" },
            ]
        },
        // 望月理也
        {
            id: "g103_m03",
            name: "望月理也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/103/Satoya.jpg",
                            "char/103/Satoya2.jpg"], type: "base" },
            ]
        },
        // 猪口渉
        {
            id: "g103_m04",
            name: "猪口渉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/103/Wataru.jpg",
                            "char/103/Wataru2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
