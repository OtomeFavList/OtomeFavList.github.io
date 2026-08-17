// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game073", // 全局唯一ID，不可重复，如 game001
    name: "明治东京恋语 Full Moon",
    year: "2024",
    publisher: ["MAGES."],
    cnStudio: "dramatic create",
    writer: [
        {name:"魚住ユキコ", lang:"zh"}
    ],
    art: [
        {name:"かる", lang:"ja"}
    ],
    cover: "game/073.jpg", // 相对路径，游戏封面
    charList: [
        // 绫月芽衣
        {
            id: "g073_f01",
            name: "绫月芽衣",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/073/Mei.jpg"], type: "base" }      // 默认基础图，始终加载
            ]
        },
        // 查理
        {
            id: "g073_m01",
            name: "查理",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Charlie.jpg",
                            "char/073/Charlie2.jpg"], type: "base" }      // 默认基础图，始终加载
            ]
        },
        // 藤田五郎
        {
            id: "g073_m02",
            name: "藤田五郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Gorou.jpg",
                            "char/073/Gorou2.jpg"], type: "base" }
            ]
        },
        // 泉镜花
        {
            id: "g073_m03",
            name: "泉镜花",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Kyouka.jpg",
                            "char/073/Kyouka2.jpg"], type: "base" }
            ]
        },
        // 森鸥外
        {
            id: "g073_m04",
            name: "森鸥外",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Mori.jpg",
                            "char/073/Mori2.jpg"], type: "base" }
            ]
        },
        // 川上音二郎
        {
            id: "g073_m05",
            name: "川上音二郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Otojirou.jpg",
                            "char/073/Otojirou2.jpg"], type: "base" }
            ]
        },
        // 菱田春草
        {
            id: "g073_m06",
            name: "菱田春草",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Shunsou.jpg",
                            "char/073/Shunsou2.jpg"], type: "base" }
            ]
        },
        // 岩崎桃介
        {
            id: "g073_m07",
            name: "岩崎桃介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Tousuke.jpg",
                            "char/073/Tousuke2.jpg"], type: "base" }
            ]
        },
        // 小泉八云
        {
            id: "g073_m08",
            name: "小泉八云",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/073/Yakumo.jpg",
                            "char/073/Yakumo2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
