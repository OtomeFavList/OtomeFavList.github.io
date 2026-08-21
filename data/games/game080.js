// BAD MEDICINE
// 中文名: 危险老师的特别授课
// 开发: Rejet
// 发行: Rejet
// 剧本: 桜葉ユウ、砂原有季、やまだ有見、小和泉いづみ、関涼子、有栖川あやみ、かなた春香、こたに白子、浦井アンナ
// 音乐: ZIZZ STUDIO(ジズスタジオ、ZIZZ)
// 人物设定: 双葉はづき
// 主题歌作曲: MIKOTO
// 主题歌作词: 岩崎大介
// 主题歌演出: 高橋広樹、高橋直純
// 原画: 双葉はづき
// 导演: 越川愛
// rejetweb.jp/bm/
// rejetweb.jp/aa-bm/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game080", // 全局唯一ID，不可重复，如 game001
    name: "BAD MEDICINE",
    year: "2014",
    publisher: ["Rejet"],
    cnStudio: "暂无",
    writer: [
        {name:"桜葉ユウ", lang:"zh"},
        {name:"砂原有季", lang:"zh"},
        {name:"小和泉いづみ", lang:"zh"},
        {name:"関涼子", lang:"zh"},
        {name:"有栖川あやみ", lang:"zh"},
        {name:"浦井アンナ", lang:"zh"},
        {name:"やまだ有見", lang:"ja"},
        {name:"かなた春香", lang:"ja"},
        {name:"こたに白子", lang:"ja"}
    ],
    art: [
        {name:"双葉はづき", lang:"zh"}
    ],
    cover: "game/080.jpg", // 相对路径，游戏封面
    charList: [
        // 川奈ヒナ
        {
            id: "g080_f01",
            name: "川奈ヒナ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 加修レム
        {
            id: "g080_m01",
            name: "加修レム",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 葛葉翔
        {
            id: "g080_m02",
            name: "葛葉翔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 凪原大貴
        {
            id: "g080_m03",
            name: "凪原大貴",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 志奴要
        {
            id: "g080_m04",
            name: "志奴要",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 東條海里
        {
            id: "g080_m05",
            name: "東條海里",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 柳遼太
        {
            id: "g080_m06",
            name: "柳遼太",
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
