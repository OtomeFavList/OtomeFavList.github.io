// BYAKKO ～四神部隊炎恋記～
// 开发: オトメイト
// 发行: アイディアファクトリー株式会社、オトメイト
// 剧本: メインシナリオ：嶋野まち（詠野万知子） サブシナリオ：合同会社Re,AER(影山千博、彩月レイ、呉西しの)、景山千博
// 音乐: 市川淳
// 人物设定: 煮たか
// 原画: 煮たか
// otomate.jp/byakko/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game085", // 全局唯一ID，不可重复，如 game001
    name: "BYAKKO ~四神部隊炎恋記~",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"嶋野まち", lang:"zh"},
        {name:"影山千博", lang:"zh"},
        {name:"彩月レイ", lang:"zh"},
        {name:"呉西しの", lang:"zh"},
        {name:"景山千博", lang:"zh"}
    ],
    art: [
        {name:"煮たか", lang:"zh"}
    ],
    cover: "game/085.jpg", // 相对路径，游戏封面
    charList: [
        // 佐野ゆずりは
        {
            id: "g085_f01",
            name: "佐野ゆずりは",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 秋月栄次郎
        {
            id: "g085_m01",
            name: "秋月栄次郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/085/Akizuki.jpg",
                            "char/085/Akizuki2.jpg",
                            "char/085/Akizuki3.png",
                            "char/085/Akizuki4.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 飯山貞吉
        {
            id: "g085_m02",
            name: "飯山貞吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/085/Iiyama.jpg",
                            "char/085/Iiyama2.jpg",
                            "char/085/Iiyama3.png",
                            "char/085/Iiyama4.png"], type: "base" },
            ]
        },
        // 石谷虎之助
        {
            id: "g085_m03",
            name: "石谷虎之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: [
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 神崎宗十郎
        {
            id: "g085_m04",
            name: "神崎宗十郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 岡本三郎
        {
            id: "g085_m05",
            name: "岡本三郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 山瀬大蔵
        {
            id: "g085_m06",
            name: "山瀬大蔵",
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
