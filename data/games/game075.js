OVER REQUIEMZ
中文名：奧茲國安魂曲
开发: Kogado Girls Project、オトメイト、工画堂スタジオ
发行: アイディアファクトリー株式会社、欢乐百世
音乐: 鞠
人物设定: 風李たゆ
主题歌作曲: 鞠
主题歌演出: ヒサノ
原画: 風李たゆ
动画制作: Mju:z
导演: 細谷博子
企画: 細谷博子
剧本: 七霧花男
otomate.jp/over_requiemz/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game075", // 全局唯一ID，不可重复，如 game001
    name: "OVER REQUIEMZ",
    year: "2025",
    publisher: ["Kogado Studio","Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"七霧花男", lang:"zh"}
    ],
    art: [
        {name:"風李たゆ", lang:"zh"}
    ],
    cover: "game/075.jpg", // 相对路径，游戏封面
    charList: [
        // ユヒル
        {
            id: "g075_f01",
            name: "ユヒル",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // クロード・グレイン
        {
            id: "g075_m01",
            name: "クロード・グレイン",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ドロシー
        {
            id: "g075_m02",
            name: "ドロシー",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // モリィ・ウッドランド
        {
            id: "g075_m03",
            name: "モリィ・ウッドランド",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ノイル・ベスティア
        {
            id: "g075_m04",
            name: "ノイル・ベスティア",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // カイゼ・オズマ
        {
            id: "g075_m05",
            name: "カイゼ・オズマ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
