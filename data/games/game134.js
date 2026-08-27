ひめひび -New Princess Days!!- 続! 二学期
发行: TAKUYO
剧本: 柚木隼人、ゆずしお
人物设定: 仁神ユキタカ
主题歌作曲: 森藤晶司
主题歌作词: CAO、アキレスKEN
主题歌演出: flaque
原画: 仁神ユキタカ
http://www.takuyo.co.jp/products/himehibi2_switch/
http://www.takuyo.co.jp/products/himehibi2/

ひめひび 続！二学期-New Princess Days!!-
官方网站: takuyo.co.jp/products/himehibi/himehibivita/index.html

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game134", // 全局唯一ID，不可重复，如 game001
    name: "ひめひび -New Princess Days!!- 続!二学期",
    year: "2020",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"柚木隼人", lang:"zh"},
        {name:"ゆずしお", lang:"ja"}
    ],
    art: [
        {name:"仁神ユキタカ", lang:"zh"}
    ],
    cover: "game/134.jpg", // 相对路径，游戏封面
    charList: [
        // 上河菜々美
        {
            id: "g134_f01",
            name: "上河菜々美",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 上河明良
        {
            id: "g134_m01",
            name: "上河明良",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 神代アルバート
        {
            id: "g134_m02",
            name: "神代アルバート",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 小日向風太
        {
            id: "g134_m03",
            name: "小日向風太",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 橘伊吹
        {
            id: "g134_m04",
            name: "橘伊吹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 小泉顕
        {
            id: "g134_m05",
            name: "小泉顕",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 桐山大楽
        {
            id: "g134_m06",
            name: "桐山大楽",
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
