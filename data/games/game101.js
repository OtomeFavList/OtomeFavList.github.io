// 薄桜鬼異聞 ベレジンスキーの魔女
// 开发: オトメイト、デザインファクトリー
// 发行: アイディアファクトリー
// 音乐: 杉浦勇紀
// 人物设定: 四季咲組、薄葉カゲロー
// 主题歌作曲: 森拓人 / 鞠
// 主题歌作词: 小岩井ことり / 鞠
// 主题歌演出: 小岩井ことり / 瑞葵（mizuki）（UNIDOTS）
// 导演: 藤澤経清
// 平台: Nintendo Switch
// 游戏类型: 女性向けドラマティックADV
// 游玩人数: 1人
// 发行日期: 2026-12-10
// 售价:
// 通常版 8,580円
// 特装版 10,780円
// ダウンロード版 8,580円
// 官方网站: otomate.jp/witch_bere/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
// 封面不够清晰
const gameData = {
    id: "game101", // 全局唯一ID，不可重复，如 game001
    name: "薄桜鬼異聞 ベレジンスキーの魔女",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"未知", lang:"zh"}
    ],
    art: [
        {name:"薄葉カゲロー", lang:"zh"}
    ],
    cover: "game/101.jpg", // 相对路径，游戏封面
    charList: [
        // サラ·デュドネ
        {
            id: "g101_f01",
            name: "サラ·デュドネ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/101/Sarah.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アレクサンドル·シラージ
        {
            id: "g101_m01",
            name: "アレクサンドル·シラージ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/101/Aleksandr.jpg",
                            "char/101/Aleksandr2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ジョナス·フィッツジェラルド
        {
            id: "g101_m02",
            name: "ジョナス·フィッツジェラルド",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/101/Jonas.jpg",
                            "char/101/Jonas2.jpg"], type: "base" },
            ]
        },
        // マエル·ド·ラヴァル
        {
            id: "g101_m03",
            name: "マエル·ド·ラヴァル",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/101/Mael.jpg",
                            "char/101/Mael2.jpg"], type: "base" },
            ]
        },
        // ラファエル·ナーダシュディ
        {
            id: "g101_m04",
            name: "ラファエル·ナーダシュディ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/101/Rafael.jpg",
                            "char/101/Rafael2.jpg"], type: "base" },
            ]
        },
        // ザビーネ·アルブレヒト
        {
            id: "g101_m05",
            name: "ザビーネ·アルブレヒト",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/101/Sabine.jpg",
                            "char/101/Sabine2.jpg"], type: "base" },
            ]
        },
        // バロン·マインスター
        {
            id: "g101_s01",
            name: "バロン·マインスター",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/101/Baron.jpg"], type: "base" }
            ]
        },
        // カーミラ
        {
            id: "g101_s02",
            name: "カーミラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/101/Carmilla.jpg"], type: "base" }
            ]
        },
        // モンテベッロ
        {
            id: "g101_s03",
            name: "モンテベッロ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/101/Duc.jpg"], type: "base" }
            ]
        },
        // エドワード
        {
            id: "g101_s04",
            name: "エドワード",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/101/Edward.jpg"], type: "base" }
            ]
        },
        // アンリ·サンソン
        {
            id: "g101_s05",
            name: "アンリ·サンソン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/101/Henri.jpg"], type: "base" }
            ]
        },
        // レスタト
        {
            id: "g101_s06",
            name: "レスタト",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/101/Lestat.jpg"], type: "base" }
            ]
        },
        // ラウル·シャストル
        {
            id: "g101_s07",
            name: "ラウル·シャストル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/101/Raoul.jpg"], type: "base" }
            ]
        },
        // クレイヴン
        {
            id: "g101_s08",
            name: "クレイヴン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/101/Raven.jpg"], type: "base" }
            ]
        },
        // 近藤宗助
        {
            id: "g101_s09",
            name: "近藤宗助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/101/Sousuke.jpg"], type: "base" }
            ]
        },
        // ヴラド·ツェペシュ
        {
            id: "g101_s10",
            name: "ヴラド·ツェペシュ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/101/Vlad.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
