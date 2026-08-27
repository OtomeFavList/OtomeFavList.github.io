死神と少女
中文名: 死神与少女
开发: TAKUYO
发行: TAKUYO
剧本: 藤元（藤文）
音乐: 森藤晶司
人物设定: すみ兵
主题歌作曲: love solfege、松本慎一郎
主题歌作词: Simona Stanzani Pini、紺野比奈子
主题歌演出: 綾野えいり、love solfege
原画: すみ兵
程序: 五十嵐亮太
链接: ErogameScape VNDB
官方网站: takuyo.co.jp/products/shinigami/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game135", // 全局唯一ID，不可重复，如 game001
    name: "死神と少女",
    year: "2022",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"藤文", lang:"zh"}
    ],
    art: [
        {name:"すみ兵", lang:"ja"}
    ],
    cover: "game/135.jpg", // 相对路径，游戏封面
    charList: [
        // 遠野紗夜
        {
            id: "g135_f01",
            name: "遠野紗夜",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 蒼
        {
            id: "g135_m01",
            name: "蒼",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 千代
        {
            id: "g135_m02",
            name: "千代",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 日生光
        {
            id: "g135_m03",
            name: "日生光",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 桐島七葵
        {
            id: "g135_m04",
            name: "桐島七葵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 遠野十夜
        {
            id: "g135_m05",
            name: "遠野十夜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
