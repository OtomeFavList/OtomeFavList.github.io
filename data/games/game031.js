// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game031", // 全局唯一ID，不可重复
    name: "百密一疏少女心",
    year: "2023",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"小縞なお", lang:"zh"},
        {name:"中村和騎", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"佐々木麿", lang:"zh"},
        {name:"いわた志信", lang:"ja"}
    ],
    art: [
        {name:"薄葉カゲロー", lang:"zh"}
    ],
    cover: "game/031.jpg",
    charList: [
        // 东条云雀
        {
            id: "g031_f01",
            name: "东条云雀",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/031/Hibari.jpg",
                            "char/031/Hibari2.jpg"], type: "base" }
            ]
        },
        // 光森一哉
        {
            id: "g031_m01",
            name: "光森一哉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/031/Ichiya.jpg",
                            "char/031/Ichiya2.jpg"], type: "base" }
            ]
        },
        // 八神那由太
        {
            id: "g031_m02",
            name: "八神那由太",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/031/Nayuta.jpg",
                            "char/031/Nayuta2.jpg"], type: "base" }
            ]
        },
        // 黛汐音
        {
            id: "g031_m03",
            name: "黛汐音",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/031/Shion.jpg",
                            "char/031/Shion2.jpg"], type: "base" }
            ]
        },
        // 石动大我
        {
            id: "g031_m04",
            name: "石动大我",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/031/Taiga.jpg",
                            "char/031/Taiga2.jpg"], type: "base" }
            ]
        },
        // 春日
        {
            id: "g031_h01",
            name: "春日",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["char/031/Kasuga.jpg",
                            "char/031/Kasuga2.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g1_s06",
            name: "配角",
            hiddenName: ["隐藏真名1","隐藏真名2"],    // 补丁新增：可选，不写则无隐藏名
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
