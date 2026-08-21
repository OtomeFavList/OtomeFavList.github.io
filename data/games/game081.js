// トラブル・マギア ～訳アリ少女は未来を勝ち取るために異国の魔法学校へ留学します～
// 中文名: 魔法奇遇～有苦衷的少女为赢取未来前往异国魔法学园留学～
// 开发: オトメイト
// 发行: アイディアファクトリー株式会社、傑仕登
// 剧本: 夏野景
// 音乐: 杉江一
// 主题歌作曲: MANYO、YURiKA、コミネリサ
// 主题歌作词: YURiKA
// 主题歌演出: YURiKA
// 原画: 鈴ノ助
// 导演: 悠瀬あきら
// otomate.jp/trouble-magia/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game081", // 全局唯一ID，不可重复，如 game001
    name: "トラブル・マギア ～訳アリ少女は未来を勝ち取るために異国の魔法学校へ留学します～",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"夏野景", lang:"zh"}
    ],
    art: [
        {name:"鈴ノ助", lang:"zh"}
    ],
    cover: "game/081.jpg", // 相对路径，游戏封面
    charList: [
        // ルチア·ユエン
        {
            id: "g081_f01",
            name: "ルチア·ユエン",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アレクセイ·エルディール
        {
            id: "g081_m01",
            name: "アレクセイ·エルディール",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // イザヤ·クライン
        {
            id: "g081_m02",
            name: "イザヤ·クライン",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ラルス·クロッツ
        {
            id: "g081_m03",
            name: "ラルス·クロッツ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // リカルド·サンテ
        {
            id: "g081_m04",
            name: "リカルド·サンテ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普シオン·カルド
        {
            id: "g081_m05",
            name: "シオン·カルド",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
