ゆのはなSpRING！ ～Mellow Times～ for Nintendo Switch
中文名: 温泉之花！ ～Mellow Times～ for Nintendo Switch
开发: オトメイト、デザインファクトリー
发行: Design Factory、アイディアファクトリー株式会社、デザインファクトリー
人物设定: RiRi
主题歌作曲: 後藤康二
主题歌演出: KENN
原画: RiRi
导演: 高村旭
剧本: ふくだ りょうこ、有野幸、皆川千尋
主题歌作词: 小川マキ
官方网站: otomate.jp/yunohana_spring/switch/

ゆのはなSpRING！
开发: オトメイト、Design Factory、デザインファクトリー
发行: Design Factory、アイディアファクトリー株式会社、デザインファクトリー
剧本: 皆川千尋、有野幸、春夏秋冬よもひろ、ふくだりょうこ、夏越ちか
人物设定: RiRi
主题歌作曲: 後藤康二
主题歌演出: KENN
原画: RiRi
导演: 高村旭
音乐: 菱田拓海
主题歌作词: 小川マキ
链接: ErogameScape VNDB
官方网站: otomate.jp/yunohana_spring/

ゆのはなSpRING！ ～Cherishing Time～
中文名: 温泉之花～Cherishing Time～
开发: オトメイト、デザインファクトリー株式会社
发行: アイディアファクトリー株式会社、デザインファクトリー株式会社
剧本: 夏越ちか、有野幸、御門蓮、佐々木麿
人物设定: RiRi
主题歌演出: 霜月はるか、結良まり、Duca
原画: RiRi
导演: 高村旭
官方网站: otomate.jp/yunohana_spring/ct/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game1", // 全局唯一ID，不可重复，如 game001
    name: "示例乙女游戏",
    year: "20",
    publisher: ["原厂发行商"],
    cnStudio: "汉化组/汉化厂商",
    writer: [
        {name:"中文编剧", lang:"zh"},
        {name:"日文编剧", lang:"ja"},
        {name:"英文编剧", lang:"en"}
    ],
    art: [
        {name:"中文原画", lang:"zh"},
        {name:"日文原画", lang:"ja"},
        {name:"英文原画", lang:"en"}
    ],
    cover: "game/1.jpg", // 相对路径，游戏封面
    charList: [
        // 女主模板 female
        {
            id: "g1_f01",
            name: "女主A",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["char/001/女主A3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["char/001/女主A4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["char/001/男主13.jpg"], type: "hidden" },
                { srcList: ["char/001/男主14.jpg"], type: "fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m02",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m03",
            name: "男主3",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m04",
            name: "男主4",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m05",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 隐藏角色（isHidden=true → 开关开启才显示整个角色卡片）
        {
            id: "g1_h01",
            name: "隐藏攻略角色",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g001_h01_1.jpg"], type: "base" }
            ]
        },
        // FD续作限定角色（isFD=true → FD开关开启才显示整个角色卡片）
        {
            id: "g1_fd01",
            name: "续作FD新增角色",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g1_s01",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
