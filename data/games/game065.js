// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game065", // 全局唯一ID，不可重复，如 game001
    name: "十三支演义 偃月三国传",
    year: "2023",
    publisher: ["Otomate","RED"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"広井王子", lang:"zh"},
        {name:"阿智太郎", lang:"zh"},
        {name:"伊東愛", lang:"zh"},
        {name:"藤野莞司", lang:"zh"},
        {name:"岡本雲珠子", lang:"zh"},
        {name:"鈴木英仁", lang:"zh"},
        {name:"秋月ひろ", lang:"zh"},
        {name:"恵村まお", lang:"zh"},
        {name:"恵莉ひなこ", lang:"zh"},
        {name:"伊達真樹", lang:"zh"},
        {name:"潮文音", lang:"zh"},
        {name:"やまだ有見", lang:"ja"},
        {name:"ひづめ", lang:"ja"}
    ],
    art: [
        {name:"悌太", lang:"zh"}
    ],
    cover: "game/065.jpg", // 相对路径，游戏封面
    charList: [
        // 关羽
        {
            id: "g065_f01",
            name: "女主A",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/065/Kanu.jpg",
                            "char/065/Kanu2.jpg"], type: "base" }
            ]
        },
        // 张飞
        {
            id: "g065_m01",
            name: "张飞",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/065/Chouhi.jpg",
                            "char/065/Chouhi2.jpg"], type: "base" }
            ]
        },
        // 赵云
        {
            id: "g065_m02",
            name: "赵云",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/065/Chouun.jpg",
                            "char/065/Chouun2.jpg"], type: "base" }
            ]
        },
        // 张辽
        {
            id: "g065_m03",
            name: "张辽",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/065/Cyouryou.jpg",
                            "char/065/Cyouryou2.jpg"], type: "base" }
            ]
        },
        // 夏侯惇
        {
            id: "g065_m04",
            name: "夏侯惇",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/065/Kakouton.jpg",
                            "char/065/Kakouton2.jpg"], type: "base" }
            ]
        },
        // 刘备
        {
            id: "g065_m05",
            name: "刘备",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/065/Ryuubi.jpg",
                            "char/065/Ryuubi.jpg"], type: "base" }
            ]
        },
        // 曹操
        {
            id: "g065_m06",
            name: "曹操",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/065/Sousou.jpg",
                            "char/065/Sousou.jpg"], type: "base" }
            ]
        },
        // 诸葛亮
        {
            id: "g065_m07",
            name: "诸葛亮",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/065/Syokatsu.jpg"], type: "base" }
            ]
        },
        // 周瑜
        {
            id: "g065_m08",
            name: "周瑜",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/065/Syuuyu.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
