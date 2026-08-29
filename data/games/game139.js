金色のコルダ
开发: コーエー、ルビーパーティー
发行: コーエー
剧本: 加藤正人
音乐: YUKI NAKANO
人物设定: 呉由姫
别名: 金色琴弦
官方网站: https://www.gamecity.ne.jp/corda/chara/?utm_source=chatgpt.com
https://www.gamecity.ne.jp/corda2ff/?utm_source=chatgpt.com
https://www.gamecity.ne.jp/corda-octave/?utm_source=chatgpt.com

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game139", // 全局唯一ID，不可重复，如 game001
    name: "金色のコルダ",
    year: "2005",
    publisher: ["KOEI"],
    cnStudio: "暂无",
    writer: [
        {name:"加藤正人", lang:"zh"}
    ],
    art: [
        {name:"呉由姫", lang:"zh"}
    ],
    cover: "game/139.jpg", // 相对路径，游戏封面
    charList: [
        // 日野香穂子
        {
            id: "g139_f01",
            name: "日野香穂子",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 柚木梓馬
        {
            id: "g139_m01",
            name: "柚木梓馬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 金澤紘人
        {
            id: "g139_m02",
            name: "金澤紘人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 火原和樹
        {
            id: "g139_m03",
            name: "火原和樹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 志水桂一
        {
            id: "g139_m04",
            name: "志水桂一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 月森蓮
        {
            id: "g139_m05",
            name: "月森蓮",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 土浦梁太郎
        {
            id: "g139_m06",
            name: "土浦梁太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 王崎信武
        {
            id: "g139_m07",
            name: "王崎信武",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
        // 吉羅暁彦
        {
            id: "g139_fd01",
            name: "吉羅暁彦",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 加地葵
        {
            id: "g139_fd02",
            name: "加地葵",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 不動翔麻
        {
            id: "g139_fd03",
            name: "不動翔麻",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 衛藤桐也
        {
            id: "g139_fd04",
            name: "衛藤桐也",
            gender: "male",
            isHidden: false,
            isFD: true,
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
