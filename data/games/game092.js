玻璃心公主 for Nintendo Switch
开发: アイディアファクトリー、デザインファクトリー、オトメイト
发行: アイディアファクトリー
人物设定: きなみ由希
原画: きなみ由希
平台: Nintendo Switch
游戏类型: 女性向け恋愛ADV
游玩人数: 1
发行日期: 2026-01-29
售价: 通常版：7,700円(税込)
特装版：9,900円(税込)
ＤＬ版：7,700円(税込)
剧本: 吉村りりか、春河ミライ（FD）
导演: 中村和騎
官方网站: otomate.jp/ghp/switch/

Glass Heart Princess
中文名: 玻璃心公主
开发: オトメイト、Design Factory、アイディアファクトリー、デザインファクトリー
剧本: 吉村りりか
人物设定: きなみ由希
主题歌作曲: 小野貴光
主题歌作词: 磯谷佳江
主题歌演出: KENN、宮田幸季、羽多野渉、鈴木達央
原画: きなみ由希
导演: 中村和騎
别名: グラスハートプリンセス
平台: PSP
游戏类型: 乙女向恋爱AVG
游玩人数: 1
发行日期: 2012-12-20
售价:
通常版 6,380 円（税込）
限定版 8,580 円（税込）
发行: アイディアファクトリー株式会社
官方网站: otomate.jp/ghp/

玻璃心公主：PLATINUM
中文名: 玻璃心公主：PLATINUM
开发: オトメイト、Design Factory、デザインファクトリー、アイディアファクトリー
剧本: 春河ミライ
人物设定: きなみ由希
主题歌作曲: 小野貴光
主题歌作词: 磯谷佳江
主题歌演出: KENN、松岡禎丞
原画: きなみ由希
导演: 中村和騎
平台: PSP
游戏类型: 女性向け恋愛AVG
游玩人数: 1
发行日期: 2013-11-07
售价:
通常版 6,090 円（税込）
限定版 8,190 円（税込）
发行: アイディアファクトリー株式会社
官方网站: otomate.jp/ghp/fd/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game092", // 全局唯一ID，不可重复，如 game001
    name: "Glass Heart Princess",
    year: "2026",
    publisher: ["Design Factory","Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"吉村りりか", lang:"zh"},
        {name:"春河ミライ", lang:"zh"}
    ],
    art: [
        {name:"きなみ由希", lang:"ja"}
    ],
    cover: "game/092.jpg", // 相对路径，游戏封面
    charList: [
        // 姫乃京子
        {
            id: "g092_f01",
            name: "姫乃京子",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 道明寺凱
        {
            id: "g092_m01",
            name: "道明寺凱",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 星野彼方
        {
            id: "g092_m02",
            name: "星野彼方",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 柾木真之介
        {
            id: "g092_m03",
            name: "柾木真之介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝比奈天馬
        {
            id: "g092_m04",
            name: "朝比奈天馬",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 烏丸幸斗
        {
            id: "g092_m05",
            name: "烏丸幸斗",
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
