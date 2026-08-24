// CRAZY CHA!N -エルピスの鎖-
// 开发: オトメイト
// 发行: アイディアファクトリー
// 剧本: 中山智美
// 原画: 読
// 导演: 吉田ミサ
// 平台: Nintendo Switch
// 游戏类型: 女性向け恋愛ADV
// 游玩人数: 1人
// 发行日期: 2026-07-09
// 售价:
// 通常版、DL版 8,580円(税込)
// 特装版 10,780円(税込)
// オトメイト スイート BOX 19,800円(税込)
// 官方网站: otomate.jp/crazy_chain/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game099", // 全局唯一ID，不可重复，如 game001
    name: "CRAZY CHA!N -エルピスの鎖-",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"中山智美", lang:"zh"}
    ],
    art: [
        {name:"読", lang:"zh"}
    ],
    cover: "game/099.jpg", // 相对路径，游戏封面
    charList: [
        // ソフィア
        {
            id: "g099_f01",
            name: "ソフィア",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/099/Sophia.jpg",
                            "char/099/Sophia2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // クロノール
        {
            id: "g099_m01",
            name: "クロノール",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/Cronoll.jpg",
                            "char/099/Cronoll2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // フラトニス·ライラプス
        {
            id: "g099_m02",
            name: "フラトニス·ライラプス",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/Flatnis.jpg",
                            "char/099/Flatnis2.jpg"], type: "base" },
            ]
        },
        // God
        {
            id: "g099_m03",
            name: "God",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/God.jpg",
                            "char/099/God2.jpg"], type: "base" },
            ]
        },
        // リーズ·ルネ·シャナ
        {
            id: "g099_m04",
            name: "リーズ·ルネ·シャナ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/Lise.jpg",
                            "char/099/Lise2.jpg"], type: "base" },
            ]
        },
        // レクス·ド·クラーシェル
        {
            id: "g099_m05",
            name: "レクス·ド·クラーシェル",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/Rex.jpg",
                            "char/099/Rex2.jpg"], type: "base" },
            ]
        },
        // ヴァーデス
        {
            id: "g099_m06",
            name: "ヴァーデス",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/099/Vardis.jpg",
                            "char/099/Vardis2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
