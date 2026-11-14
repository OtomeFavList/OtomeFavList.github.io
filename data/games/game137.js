// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game137", // 全局唯一ID，不可重复，如 game001
    name: "Sullyland Nursery Rhyme",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"夏野景", lang:"zh"}
    ],
    art: [
        {name:"miko", lang:"en"}
    ],
    cover: "game/137.jpg", // 相对路径，游戏封面
    charList: [
        // 御神アマネ
        {
            id: "g137_f01",
            name: "御神アマネ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/137/Amane.jpg",
                            "char/137/Amane2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 安曇ネオ
        {
            id: "g137_m01",
            name: "安曇ネオ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/137/Azumi.jpg",
                            "char/137/Azumi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 小鳥遊キセキ
        {
            id: "g137_m02",
            name: "小鳥遊キセキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/137/Kiseki.jpg",
                            "char/137/Kiseki2.jpg"], type: "base" },
            ]
        },
        // 陸リョクハ
        {
            id: "g137_m03",
            name: "陸リョクハ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/137/Ryokuha.jpg",
                            "char/137/Ryokuha2.jpg"], type: "base" },
            ]
        },
        // 帯刀シーマ
        {
            id: "g137_m04",
            name: "帯刀シーマ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/137/Shiima.jpg",
                            "char/137/Shiima2.jpg"], type: "base" },
            ]
        },
        // 氷鉋テラ
        {
            id: "g137_m05",
            name: "氷鉋テラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/137/Tera.jpg",
                            "char/137/Tera2.jpg"], type: "base" },
            ]
        },
        // ？？？
        {
            id: "g137_h01",
            name: "？？？",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/137/？？？.jpg"], type: "base" }
            ]
        },
        // 和泉ヒロ
        {
            id: "g137_s01",
            name: "和泉ヒロ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Hiro.jpg"], type: "base" }
            ]
        },
        // 朝倉メイ
        {
            id: "g137_s02",
            name: "朝倉メイ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Mei.jpg"], type: "base" }
            ]
        },
        // 南条リュウセイ
        {
            id: "g137_s03",
            name: "南条リュウセイ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Ryuusei.jpg"], type: "base" }
            ]
        },
        // 黒川サキ
        {
            id: "g137_s04",
            name: "黒川サキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Saki.jpg"], type: "base" }
            ]
        },
        // 帯刀サトル
        {
            id: "g137_s05",
            name: "帯刀サトル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Satoru.jpg"], type: "base" }
            ]
        },
        // シロ
        {
            id: "g137_s06",
            name: "シロ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Shiro.jpg"], type: "base" }
            ]
        },
        // 嗣口原ソウマ
        {
            id: "g137_s07",
            name: "嗣口原ソウマ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Souma.jpg"], type: "base" }
            ]
        },
        // 陸タツオミ
        {
            id: "g137_s08",
            name: "陸タツオミ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Tatsuomi.jpg"], type: "base" }
            ]
        },
        // 嗣口原トワ
        {
            id: "g137_s09",
            name: "嗣口原トワ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Towa.jpg"], type: "base" }
            ]
        },
        // 小鳥遊ユリナ
        {
            id: "g137_s10",
            name: "小鳥遊ユリナ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Yurina.jpg"], type: "base" }
            ]
        },
        //  恵南タスク
        {
            id: "g137_s11",
            name: "恵南タスク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Tasuku.jpg"], type: "base" }
            ]
        },
        // ？？？
        {
            id: "g137_s12",
            name: "？？？",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/137/Pigeon.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
