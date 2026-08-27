DYNAMIC CHORD feat.apple-polisher Remaster Edition
https://dramaticcreate.com/dynamic/ns_app/?utm_source=chatgpt.com

DYNAMIC CHORD feat.apple-polisher
开发: honeybee black
发行: honeybee black
剧本: 中村幸代（なかむらさちよ）、新井菜津美（Plot）；浅生柚子、柚子みかん（なかむらさちよ）、絹夏（执笔）
人物设定: 冨士原良
主题歌演出: 蒼井翔太
插入歌演出: 蒼井翔太
原画: 冨士原良
官方网站: honeybee-cd.com/dynamic/app/index.html

DYNAMIC CHORD feat.apple-polisher V
开发: honeybee black
发行: dramatic create
人物设定: 冨士原良
主题歌演出: 蒼井翔太
插入歌演出: 蒼井翔太
原画: 冨士原良
剧本: 浅生柚子
官方网站: honeybee-cd.com/dynamic/vita-app/

https://www.honeybee-cd.com/dynamic/app/?utm_source=chatgpt.com

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game130", // 全局唯一ID，不可重复，如 game001
    name: "DYNAMIC CHORD feat.apple-polisher Remaster Edition",
    year: "2026",
    publisher: ["honeybee black"],
    cnStudio: "暂无",
    writer: [
        {name:"中村幸代", lang:"zh"},
        {name:"新井菜津美", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"柚子みかん", lang:"zh"},
        {name:"絹夏", lang:"zh"}
    ],
    art: [
        {name:"冨士原良", lang:"zh"}
    ],
    cover: "game/130.jpg", // 相对路径，游戏封面
    charList: [
        // 柊美羽
        {
            id: "g130_f01",
            name: "柊美羽",
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
        // 音石夕星
        {
            id: "g130_m01",
            name: "音石夕星",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 青井有紀
        {
            id: "g130_m02",
            name: "青井有紀",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 黒沢忍
        {
            id: "g130_m03",
            name: "黒沢忍",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 天城成海
        {
            id: "g130_m04",
            name: "天城成海",
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
