// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game106", // 全局唯一ID，不可重复，如 game001
    name: "ときめきメモリアル Girl's Side 2nd Season",
    year: "2024",
    publisher: ["KONAMI"],
    cnStudio: "暂无",
    writer: [
        {name:"田島あきこ", lang:"zh"},
        {name:"古館純子", lang:"zh"},
        {name:"星宮すみれ", lang:"zh"}
    ],
    art: [
        {name:"小松原里枝子", lang:"zh"}
    ],
    cover: "game/106.jpg", // 相对路径，游戏封面
    charList: [
        // クリストファー·ウェザーフィールド
        {
            id: "g106_m01",
            name: "クリストファー·ウェザーフィールド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Christopher.jpg",
                            "char/106/Christopher2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 氷上格
        {
            id: "g106_m02",
            name: "氷上格",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Itaru.jpg",
                            "char/106/Itaru2.jpg"], type: "base" },
            ]
        },
        // 針谷幸之進
        {
            id: "g106_m03",
            name: "針谷幸之進",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Kounoshin.jpg",
                            "char/106/Kounoshin2.jpg"], type: "base" },
            ]
        },
        // 真咲元春
        {
            id: "g106_m04",
            name: "真咲元春",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Motoharu.jpg",
                            "char/106/Motoharu2.jpg"], type: "base" },
            ]
        },
         // 志波勝己
        {
            id: "g106_m05",
            name: "志波勝己",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Shiba.jpg"], type: "base" },
            ]
        },
        // 天地翔太
        {
            id: "g106_m06",
            name: "天地翔太",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Shouta.jpg",
                            "char/106/Shouta2.jpg"], type: "base" },
            ]
        },
        // 佐伯瑛
        {
            id: "g106_m07",
            name: "佐伯瑛",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Teru.jpg",
                            "char/106/Teru2.jpg"], type: "base" },
            ]
        },
        // 若王子貴文
        {
            id: "g106_m08",
            name: "若王子貴文",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Wakaouji.jpg",
                            "char/106/Wakaouji2.jpg"], type: "base" },
            ]
        },
        // 赤城一雪
        {
            id: "g106_h01",
            name: "赤城一雪",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Kazuyuki.jpg"], type: "base" },
            ]
        },
        // 古森拓
        {
            id: "g106_h02",
            name: "古森拓",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Taku.jpg"], type: "base" },
            ]
        },
        // 真嶋太郎
        {
            id: "g106_h03",
            name: "男主5",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Tarou.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
