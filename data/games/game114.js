// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game114", // 全局唯一ID，不可重复，如 game001
    name: "OZMAFIA!! -vivace-",
    year: "2020",
    publisher: ["Poni-Pachet"],
    cnStudio: "暂无",
    writer: [
        {name:"ゆーます", lang:"ja"}
    ],
    art: [
        {name:"さとい", lang:"ja"}
    ],
    cover: "game/114.jpg", // 相对路径，游戏封面
    charList: [
        // フーカ
        {
            id: "g114_f01",
            name: "フーカ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/114/Fuka.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アルファーニ
        {
            id: "g114_m01",
            name: "アルファーニ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Alfani.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アクセル
        {
            id: "g114_m02",
            name: "アクセル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Axel.jpg"], type: "base" },
            ]
        },
        // シーザー
        {
            id: "g114_m03",
            name: "シーザー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Caesar.jpg"], type: "base" },
            ]
        },
        // カラミア
        {
            id: "g114_m04",
            name: "カラミア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Caramia.jpg"], type: "base" },
            ]
        },
        // ドリアン·グレイ
        {
            id: "g114_m05",
            name: "ドリアン·グレイ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Dorian.jpg"], type: "base" },
            ]
        },
        // ハーメルン
        {
            id: "g114_m06",
            name: "ハーメルン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Hameln.jpg"], type: "base" },
            ]
        },
        // キリエ
        {
            id: "g114_m07",
            name: "キリエ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Kyrie.jpg"], type: "base" },
            ]
        },
        // マンボイ
        {
            id: "g114_m08",
            name: "マンボイ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Manboy.jpg"], type: "base" },
            ]
        },
        // パシェ
        {
            id: "g114_m09",
            name: "パシェ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Pashet.jpg"], type: "base" },
            ]
        },
        // ロビン·フッド
        {
            id: "g114_m10",
            name: "ロビン·フッド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Robin.jpg"], type: "base" },
            ]
        },
        // スカーレット
        {
            id: "g114_m11",
            name: "スカーレット",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/Scarlet.jpg"], type: "base" },
            ]
        },
        // ソウ
        {
            id: "g114_m12",
            name: "ソウ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/114/So.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
