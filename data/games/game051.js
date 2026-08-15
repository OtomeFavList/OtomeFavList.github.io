// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game051", // 全局唯一ID，不可重复
    name: "夏空的独白 ~Another Memory~",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"西村悠", lang:"zh"}
    ],
    art: [
        {name:"花邑まい", lang:"zh"},
        {name:"佐倉たくと", lang:"zh"},
        {name:"ろく丸", lang:"ja"}
    ],
    cover: "game/051.jpg",
    charList: [
        // 小川葵
        {
            id: "g051_f01",
            name: "小川葵",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Aoi.jpg",
                            "char/051/Aoi2.png"], type: "base" }
            ]
        },
        // 加贺阳
        {
            id: "g051_m01",
            name: "加贺阳",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Haru.jpg",
                            "char/051/Haru2.jpg",
                            "char/051/Haru3.png"], type: "base" }
            ]
        },
        // 绵森枫
        {
            id: "g051_m02",
            name: "绵森枫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Kaede.jpg",
                            "char/051/Kaede2.png"], type: "base" }
            ]
        },
        // 木野濑一辉
        {
            id: "g051_m03",
            name: "木野濑一辉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Kazuki.jpg",
                            "char/051/Kazuki2.jpg",
                            "char/051/Kazuki3.png"], type: "base" }
            ]
        },
        // 浅浪皓
        {
            id: "g051_m04",
            name: "浅浪皓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Kou.jpg",
                            "char/051/Kou2.jpg",
                            "char/051/Kou3.png"], type: "base" }
            ]
        },
        // 篠原涼太
        {
            id: "g051_m05",
            name: "篠原涼太",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Ryouta.jpg",
                            "char/051/Ryouta2.jpg",
                            "char/051/Ryouta3.png"], type: "base" }
            ]
        },
        // 泽野井宗介
        {
            id: "g051_m06",
            name: "泽野井宗介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/051/Sousuke.jpg",
                            "char/051/Sousuke2.jpg",
                            "char/051/Sousuke3.png"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
