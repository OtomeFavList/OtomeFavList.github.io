// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game108", // 全局唯一ID，不可重复，如 game001
    name: "ときめきメモリアル Girl's Side 4th Heart",
    year: "2021",
    publisher: ["KONAMI"],
    cnStudio: "暂无",
    writer: [
        {name:"川名良昌", lang:"zh"},
        {name:"山田麻沙子", lang:"zh"},
        {name:"瀬多海人", lang:"zh"},
        {name:"卯木悠里", lang:"zh"},
        {name:"春河ミライ", lang:"zh"},
        {name:"田島あきこ", lang:"zh"}
    ],
    art: [
        {name:"小松原里枝子", lang:"zh"}
    ],
    cover: "game/108.jpg", // 相对路径，游戏封面
    charList: [
        // 白羽大地
        {
            id: "g108_m01",
            name: "白羽大地",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Daichi.jpg",
                            "char/108/Daichi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 本多行
        {
            id: "g108_m02",
            name: "本多行",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Iku.jpg",
                            "char/108/Iku2.jpg",
                            "char/108/Iku3.jpg",
                            "char/108/Iku4.jpg",
                            "char/108/Iku5.jpg"], type: "base" },
            ]
        },
        // 氷室一紀
        {
            id: "g108_m03",
            name: "氷室一紀",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Inori.jpg",
                            "char/108/Inori2.jpg",
                            "char/108/Inori3.jpg",
                            "char/108/Inori4.jpg"], type: "base" },
            ]
        },
        // 大成功
        {
            id: "g108_m04",
            name: "大成功",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Isao.jpg",
                            "char/108/Isao2.jpg"], type: "base" },
            ]
        },
        /// 御影小次郎
        {
            id: "g108_m05",
            name: "御影小次郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Kojirou.jpg",
                            "char/108/Kojirou2.jpg",
                            "char/108/Kojirou3.jpg"], type: "base" },
            ]
        },
        // 七ツ森実
        {
            id: "g108_m06",
            name: "七ツ森実",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Minoru.jpg",
                            "char/108/Minoru2.jpg",
                            "char/108/Minoru3.jpg",
                            "char/108/Minoru4.jpg",
                            "char/108/Minoru5.jpg"], type: "base" },
            ]
        },
        // 颯砂希
        {
            id: "g108_m07",
            name: "颯砂希",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Nozomu.jpg",
                            "char/108/Nozomu2.jpg",
                            "char/108/Nozomu3.jpg",
                            "char/108/Nozomu4.jpg",
                            "char/108/Nozomu5.jpg"], type: "base" },
            ]
        },
        // 風真玲太
        {
            id: "g108_m08",
            name: "風真玲太",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Ryouta.jpg",
                            "char/108/Ryouta2.jpg",
                            "char/108/Ryouta3.jpg",
                            "char/108/Ryouta4.jpg",
                            "char/108/Ryouta5.jpg"], type: "base" },
            ]
        },
        // 柊夜ノ介
        {
            id: "g108_m09",
            name: "柊夜ノ介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Yanosuke.jpg",
                            "char/108/Yanosuke2.jpg",
                            "char/108/Yanosuke3.jpg",
                            "char/108/Yanosuke4.jpg",
                            "char/108/Yanosuke5.jpg"], type: "base" },
            ]
        },
        // 巴征道
        {
            id: "g108_m10",
            name: "巴征道",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Yukimichi.jpg",
                            "char/108/Yukimichi2.jpg"], type: "base" },
            ]
        },
        // 白羽空也
        {
            id: "g108_h01",
            name: "白羽空也",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/108/Kuuya.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
