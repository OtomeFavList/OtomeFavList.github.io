// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game074", // 全局唯一ID，不可重复，如 game001
    name: "转生成女性向游戏只有毁灭END的坏人大小姐 ~掀起波澜的海盗~",
    year: "2023",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"吉村りりか", lang:"zh"}
    ],
    art: [
        {name:"アサダモチコ", lang:"ja"}
    ],
    cover: "game/074.jpg", // 相对路径，游戏封面
    charList: [
        // 卡塔莉娜·库莱耶思
        {
            id: "g074_f01",
            name: "卡塔莉娜·库莱耶思",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/074/Catarina.jpg",
                            "char/074/Catarina2.jpg",
                            "char/074/Catarina3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 亚兰·史提亚德
        {
            id: "g074_m01",
            name: "亚兰·史提亚德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/074/Alan.jpg",
                            "char/074/Alan2.jpg",
                            "char/074/Alan3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 吉奥多·史提亚德
        {
            id: "g074_m02",
            name: "吉奥多·史提亚德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/074/Geordo.jpg",
                            "char/074/Geordo2.jpg",
                            "char/074/Geordo3.jpg"], type: "base" },
            ]
        },
        // 基斯·库莱耶思
        {
            id: "g074_m03",
            name: "基斯·库莱耶思",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/074/Keith.jpg",
                            "char/074/Keith2.jpg",
                            "char/074/Keith3.jpg"], type: "base" },
            ]
        },
        // 尼可·阿斯喀特
        {
            id: "g074_m04",
            name: "尼可·阿斯喀特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/074/Nicol.jpg",
                            "char/074/Nicol2.jpg",
                            "char/074/Nicol3.jpg"], type: "base" },
            ]
        },
        // 罗吉·林德
        {
            id: "g074_m05",
            name: "罗吉·林德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/074/Rozy.jpg",
                            "char/074/Rozy2.jpg"], type: "base" },
            ]
        },
        // 希尔法
        {
            id: "g074_m06",
            name: "希尔法",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/074/Silva.jpg",
                            "char/074/Silva2.jpg"], type: "base" },
            ]
        },
        // 玛丽亚·坎贝尔
        {
            id: "g074_m07",
            name: "玛丽亚·坎贝尔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/074/Maria.jpg",
                            "char/074/Maria2.jpg",
                            "char/074/Maria3.jpg"], type: "base" },
            ]
        },
        // 玛莉·杭特
        {
            id: "g074_m08",
            name: "玛莉·杭特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/074/Mary.jpg",
                            "char/074/Mary2.jpg",
                            "char/074/Mary3.jpg"], type: "base" },
            ]
        },
        // 苏菲雅·阿斯喀特
        {
            id: "g074_m09",
            name: "苏菲雅·阿斯喀特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/074/Sophia.jpg",
                            "char/074/Sophia2.jpg",
                            "char/074/Sophia3.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
