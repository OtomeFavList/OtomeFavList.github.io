// BROTHERS CONFLICT Precious Baby
// 开发: オトメイト
// 发行: アイディアファクトリー株式会社
// 音乐: TrioDesign
// 人物设定: ウダジョ
// 原画: ウダジョ
// 别名: BROTHERS CONFLICT Precious Baby for Nintendo Switch
// ブラザース コンフリクト プレシャス ベイビー
// 剧本: 小林悠奈、川澄あみ
// 企画: 叶瀬あつこ
// 原案: 叶瀬あつこ
// 链接: ErogameScape VNDB
// 官方网站: otomate.jp/bc/pb/

// BROTHERS CONFLICT  Passion Pink
// 中文名: 兄弟战争 激情粉红
// 开发: オトメイト
// 发行: アイディアファクトリー株式会社
// 音乐: TrioDesign
// 人物设定: ウダジョ
// 主题歌作曲: 小山哉枝、小野貴光、河合英嗣
// 主题歌演出: 鈴村健一、鳥海浩輔
// 原画: ウダジョ
// 企画: 叶瀬あつこ
// 主题歌作词: 小山哉枝
// 官方网站: otomate.jp/bc/

// BROTHERS CONFLICT Brilliant Blue
// 中文名: 兄弟战争 闪亮蔚蓝
// 开发: オトメイト
// 发行: アイディアファクトリー株式会社
// 音乐: TrioDesign
// 人物设定: ウダジョ
// 主题歌作曲: L'aide、吉田和人
// 主题歌演出: 前野智昭、鈴村健一、鳥海浩輔
// 原画: ウダジョ
// 平台: PSP
// 游戏类型: ちょっとケンカなキョ―ダイ間恋愛SLG
// 游玩人数: 1
// 发行日期: 2013-09-12
// 售价:
// 通常版 6,380 円（税込）
// 限定版 8,580 円（税込）
// 企画: 叶瀬あつこ
// 主题歌作词: 小山哉枝
// 官方网站: otomate.jp/bc/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game089", // 全局唯一ID，不可重复，如 game001
    name: "BROTHERS CONFLICT Precious Baby",
    year: "2019",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"小林悠奈", lang:"zh"},
        {name:"川澄あみ", lang:"zh"}
    ],
    art: [
        {name:"ウダジョ", lang:"ja"}
    ],
    cover: "game/089.jpg", // 相对路径，游戏封面
    charList: [
        // 朝日奈絵麻
        {
            id: "g089_f01",
            name: "朝日奈絵麻",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 朝日奈梓
        {
            id: "g089_m01",
            name: "朝日奈梓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 朝日奈風斗
        {
            id: "g089_m02",
            name: "朝日奈風斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈光
        {
            id: "g089_m03",
            name: "朝日奈光",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈祈織
        {
            id: "g089_m04",
            name: "朝日奈祈織",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈要
        {
            id: "g089_m05",
            name: "朝日奈要",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈琉生
        {
            id: "g089_m06",
            name: "朝日奈琉生",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈雅臣
        {
            id: "g089_m07",
            name: "朝日奈雅臣",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈棗
        {
            id: "g089_m08",
            name: "朝日奈棗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈昴
        {
            id: "g089_m09",
            name: "朝日奈昴",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈椿
        {
            id: "g089_m10",
            name: "朝日奈椿",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈右京
        {
            id: "g089_m11",
            name: "朝日奈右京",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈弥
        {
            id: "g089_m12",
            name: "朝日奈弥",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 朝日奈侑介
        {
            id: "g089_m13",
            name: "朝日奈侑介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ジュリ
        {
            id: "g089_h01",
            name: "ジュリ",
            gender: "male",
            isHidden: true,
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
