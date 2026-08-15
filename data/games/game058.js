// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game058", // 全局唯一ID，不可重复
    name: "DYNAMIC CHORD 动态和弦 feat.[rêve parfait] Remaster edition",
    year: "2026",
    publisher: ["dramatic create","honeybee black"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"柚子みかん", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"相川暁子", lang:"zh"},
        {name:"深瀬カエル", lang:"zh"},
        {name:"葉山いずみ", lang:"zh"},
        {name:"ふくだりょうこ", lang:"ja"}
    ],
    art: [
        {name:"冨士原良 ", lang:"zh"}
    ],
    cover: "game/058.jpg",
    charList: [
        // 上远野理绪
        {
            id: "g058_f01",
            name: "上远野理绪",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/058/Rio.jpg"], type: "base" }
            ]
        },
        // 香椎亚贵
        {
            id: "g058_m01",
            name: "香椎亚贵",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/058/Aki.jpg",
                            "char/058/Aki2.jpg"], type: "base" }
            ]
        },
        // 月野原久远
        {
            id: "g058_m02",
            name: "月野原久远",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/058/Kuon.jpg",
                            "char/058/Kuon2.jpg"], type: "base" }
            ]
        },
        // 香椎玲音
        {
            id: "g058_m03",
            name: "香椎玲音",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/058/Reon.jpg",
                            "char/058/Reon2.jpg"], type: "base" }
            ]
        },
        // 百濑紬生
        {
            id: "g058_m04",
            name: "百濑紬生",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/058/Tsumugi.jpg",
                            "char/058/Tsumugi2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
