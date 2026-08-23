DYNAMIC CHORD feat.KYOHSO Remaster Edition
开发: honeybee black
发行: dramatic create、アリスマティック
人物设定: 冨士原良
主题歌演出: 森久保祥太郎
原画: 冨士原良
平台: Nintendo Switch
游戏类型: 甘く激しく魂震えるバンド恋愛ADV
游玩人数: 1
发行日期: 2025-11-27
售价: 7,480 円（税込）
官方网站: honeybee-cd.com/dynamic/switch-kyohso/index.html

DYNAMIC CHORD feat.KYOHSO
开发: honeybee black
发行: honeybee black
剧本: Plot：石川奈津季、中村幸代（なかむらさちよ）；执笔：柚子みかん（なかむらさちよ）、さつき、株式会社エッジワークス（浅生柚子；相川暁子、春名佳純、水井としえ；みなづきともこ、ふくだりょうこ、伊原恵）
人物设定: 冨士原良
主题歌演出: 森久保祥太郎
原画: 冨士原良
平台: PC
游戏类型: 甘く激しく魂震えるバンド恋愛ADV
游玩人数: 1
发行日期: 2015-06-26
售价:
通常版 4,104 円
初回限定A盤 6,264 円
初回限定B盤 5,724 円
链接: ErogameScape VNDB
官方网站: honeybee-cd.com/dynamic/kyoh/index.html

DYNAMIC CHORD feat.KYOHSO Append Disc
开发: honeybee black
发行: honeybee black
人物设定: 冨士原良
主题歌演出: 森久保祥太郎
原画: 冨士原良
平台: PC
游玩人数: 1
发行日期:
初回限定版 2016-07-29
通常版 2016-07-29
售价:
初回限定版 5,830 円（税込）
通常版 4,180 円（税込）
剧本: 相川暁子
官方网站: honeybee-cd.com/dynamic/kyoh/index.html

DYNAMIC CHORD feat.KYOHSO V edition
开发: honeybee black
发行: honeybee black
人物设定: 冨士原良
主题歌演出: 森久保祥太郎
原画: 冨士原良
导演: 中澤工
平台: PSV
游戏类型: 甘く激しく魂震えるバンド恋愛ADV
游玩人数: 1
发行日期: 2017-03-30
售价:
通常版 5,800円＋税
限定版 7,800円＋税
官方网站: honeybee-cd.com/dynamic/vita-kyoh/index.html

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game095", // 全局唯一ID，不可重复，如 game001
    name: "DYNAMIC CHORD feat.KYOHSO Remaster Edition",
    year: "2025",
    publisher: ["honeybee black"],
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
    cover: "game/095.jpg", // 相对路径，游戏封面
    charList: [
        // 女主模板 female
        {
            id: "g095_f01",
            name: "女主A",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g0_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g0_m02",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g0_m03",
            name: "男主3",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g0_m04",
            name: "男主4",
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
