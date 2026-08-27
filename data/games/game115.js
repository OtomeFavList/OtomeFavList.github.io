Lover Pretend
中文名: 伪装恋人
开发: オトメイト、Design Factory、デザインファクトリー
发行: アイディアファクトリー株式会社
剧本: 青木ひろえ、小縞なお、有野幸、いわた志信
音乐: 折倉俊則(I.L.C -Image Leaf Craft-)
人物设定: 藤理ト
主题歌作曲: 折倉俊則
主题歌演出: 中恵光城
原画: 藤理ト
SD原画: うた
制作人: いわた志信
别名: ラバプリ
平台: Nintendo Switch
导演: 青木ひろえ
系统总监: 椎名あとり
主题歌作词: mao
链接: ErogameScape
官方网站: otomate.jp/lp/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game115", // 全局唯一ID，不可重复，如 game001
    name: "Lover Pretend",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"青木ひろえ", lang:"zh"},
        {name:"小縞なお", lang:"zh"},
        {name:"有野幸", lang:"zh"},
        {name:"いわた志信", lang:"ja"}
    ],
    art: [
        {name:"藤理ト", lang:"zh"}
    ],
    cover: "game/115.jpg", // 相对路径，游戏封面
    charList: [
        // 宇枝ちゆき
        {
            id: "g115_f01",
            name: "宇枝ちゆき",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 浅木詠一郎
        {
            id: "g115_m01",
            name: "浅木詠一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 真木野春三
        {
            id: "g115_m02",
            name: "真木野春三",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 上久保数馬
        {
            id: "g115_m03",
            name: "上久保数馬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 西嶋理玖
        {
            id: "g115_m04",
            name: "西嶋理玖",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 瀬名由稀人
        {
            id: "g115_m05",
            name: "瀬名由稀人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
