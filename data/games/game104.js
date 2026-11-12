// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game104", // 全局唯一ID，不可重复，如 game001
    name: "真紅の焔 真田忍法帳",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"長野和泉", lang:"zh"},
        {name:"中山智美", lang:"zh"}
    ],
    art: [
        {name:"四季咲組", lang:"zh"}
    ],
    cover: "game/104.jpg", // 相对路径，游戏封面
    charList: [
        // 望月六実
        {
            id: "g104_f01",
            name: "望月六実",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/104/Mutsumi.jpg",
                            "char/104/Mutsumi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 筧十蔵
        {
            id: "g104_m01",
            name: "筧十蔵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/104/Jyuzou.jpg",
                            "char/104/Jyuzou2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 由利鎌之介
        {
            id: "g104_m02",
            name: "由利鎌之介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/104/Kamanosuke.jpg",
                            "char/104/Kamanosuke2.jpg"], type: "base" },
            ]
        },
        // 霧隠才蔵
        {
            id: "g104_m03",
            name: "霧隠才蔵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/104/Saizou.jpg",
                            "char/104/Saizou2.jpg"], type: "base" },
            ]
        },
        // 猿飛佐助
        {
            id: "g104_m04",
            name: "猿飛佐助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/104/Sasuke.jpg",
                            "char/104/Sasuke2.jpg"], type: "base" },
            ]
        },
        // 真田信繁
        {
            id: "g104_m05",
            name: "真田信繁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/104/Shigenobu.jpg",
                            "char/104/Shigenobu2.jpg"], type: "base" },
            ]
        },
        // 穴山小助
        {
            id: "g104_s01",
            name: "穴山小助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Anayamakosuke.jpg"], type: "base" }
            ]
        },
        // 安房守
        {
            id: "g104_s02",
            name: "安房守",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Awanokami.jpg"], type: "base" }
            ]
        },
        // 毘沙門
        {
            id: "g104_s03",
            name: "毘沙門",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Bishamon.jpg"], type: "base" }
            ]
        },
        // 白蓮
        {
            id: "g104_s04",
            name: "白蓮",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Byakuren.jpg"], type: "base" }
            ]
        },
        // 鎮西八郎
        {
            id: "g104_s05",
            name: "鎮西八郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Chinzeihachirou.jpg"], type: "base" }
            ]
        },
        // 巌流
        {
            id: "g104_s06",
            name: "巌流",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Ganryuu.jpg"], type: "base" }
            ]
        },
        // グラシア
        {
            id: "g104_s07",
            name: "グラシア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Gurashia.jpg"], type: "base" }
            ]
        },
        // 豊臣秀頼
        {
            id: "g104_s08",
            name: "豊臣秀頼",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Hideyori.jpg"], type: "base" }
            ]
        },
        // 三好伊佐入道
        {
            id: "g104_s09",
            name: "三好伊佐入道",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Isanyuudou.jpg"], type: "base" }
            ]
        },
        // 根津甚八
        {
            id: "g104_s10",
            name: "根津甚八",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Nezujimpachi.jpg"], type: "base" }
            ]
        },
        // 真田信尹
        {
            id: "g104_s11",
            name: "真田信尹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Nobutada.jpg"], type: "base" }
            ]
        },
        // 三好青海入道
        {
            id: "g104_s12",
            name: "三好青海入道",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Seikainyuudou.jpg"], type: "base" }
            ]
        },
        // 海野六郎
        {
            id: "g104_s13",
            name: "海野六郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Unnorokurou.jpg"], type: "base" }
            ]
        },
        // 融仙院
        {
            id: "g104_s14",
            name: "融仙院",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/104/Yuuzenin.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
