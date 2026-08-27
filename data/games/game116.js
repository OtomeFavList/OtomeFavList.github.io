猛獣たちとお姫様 for Nintendo Switch
开发: デザインファクトリー、オトメイト
发行: アイディアファクトリー
音乐: 霜月はるか
平台: Nintendo Switch
游戏类型: 女性向け恋愛ＡＤＶ
游玩人数: 1
发行日期: 2024-05-23
售价: 通常版　7,700円(税込)
特装版　9,900円(税込)
ＤＬ版　7,700円(税込)
原画: 紫あや
制作人: 中村和騎
导演: 山口みきはる
官方网站: otomate.jp/beast_princess/switch/

猛獣たちとお姫様
开发: オトメイト、Design Factory、デザインファクトリー
发行: アイディアファクトリー株式会社
剧本: 吉村りりか、森田彩莉、山崎浅吏、桜葉ユウ、ちゃい、ムネオカミエ
音乐: 霜月はるか
主题歌作曲: 霜月はるか
主题歌作词: 日山尚
主题歌演出: 結良まり、霜月はるか
插入歌演出: 霜月はるか
制作人: 中村和騎
原画: 紫あや
导演: 山口みきはる
人物设定: 紫あや
链接: ErogameScape VNDB
官方网站: otomate.jp/beast_princess/

猛獣たちとお姫様～in blossom～
开发: オトメイト、Design Factory、デザインファクトリー
发行: アイディアファクトリー株式会社
剧本: 山崎浅吏
音乐: 霜月はるか
主题歌作曲: 霜月はるか
主题歌作词: 日山尚
主题歌演出: 霜月はるか、結良まり
插入歌演出: 霜月はるか
原画: 紫あや
人物设定: 紫あや
链接: ErogameScape VNDB
官方网站: otomate.jp/beast_princess/fd/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game116", // 全局唯一ID，不可重复，如 game001
    name: "猛獣たちとお姫様",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"吉村りりか", lang:"zh"},
        {name:"森田彩莉", lang:"zh"},
        {name:"山崎浅吏", lang:"zh"},
        {name:"桜葉ユウ", lang:"zh"},
        {name:"ちゃい", lang:"ja"},
        {name:"ムネオカミエ", lang:"ja"}
    ],
    art: [
        {name:"紫あや", lang:"zh"}
    ],
    cover: "game/116.jpg", // 相对路径，游戏封面
    charList: [
        // ユーリア
        {
            id: "g116_f01",
            name: "ユーリア",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ヘンリク
        {
            id: "g116_m01",
            name: "ヘンリク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ユゼフ
        {
            id: "g116_m02",
            name: "ユゼフ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ルドヴィク
        {
            id: "g116_m03",
            name: "ルドヴィク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ミアーシュ
        {
            id: "g116_m04",
            name: "ミアーシュ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // リシャルト
        {
            id: "g116_m05",
            name: "リシャルト",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g116_m06",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // タルメ
        {
            id: "g116_fd01",
            name: "タルメ",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
    // 魔術師
        {
            id: "g116_fd02",
            name: "魔術師",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
