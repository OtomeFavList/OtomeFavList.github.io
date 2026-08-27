私立ベルばら学園 ～ベルサイユのばらRe*imagination～
开发: オトメイト、アイディアファクトリー
发行: アイディアファクトリー株式会社、オトメイト
剧本: 遠野チハル（故事编辑）ウサギリス(浦井アンナ／吉田夏美／清水花歩／高橋香里)
音乐: 杉江一
主题歌作曲: 阿部隆大、RIRIKO
主题歌作词: RIRIKO、Uyu
主题歌演出: ACRYLICSTAB、RIRIKO
导演: 寺嶋桃子
编辑: 遠野チハル
链接: ErogameScape VNDB
官方网站: otomate.jp/berubara-gakuen/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game122", // 全局唯一ID，不可重复，如 game001
    name: "私立ベルばら学園 ~ベルサイユのばらRe*imagination~",
    year: "2019",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"遠野チハル", lang:"zh"},
        {name:"浦井アンナ", lang:"zh"},
        {name:"吉田夏美", lang:"zh"},
        {name:"清水花歩", lang:"zh"},
        {name:"高橋香里", lang:"zh"}
    ],
    art: [
        {name:"東狐もず", lang:"zh"}
    ],
    cover: "game/122.jpg", // 相对路径，游戏封面
    charList: [
        // 山田凰寿華瑠
        {
            id: "g122_f01",
            name: "山田凰寿華瑠",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 衛藤晶
        {
            id: "g122_m01",
            name: "衛藤晶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 羽鳥·ユース·アクセル
        {
            id: "g122_m02",
            name: "羽鳥·ユース·アクセル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 真輝望
        {
            id: "g122_m03",
            name: "真輝望",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 明智優
        {
            id: "g122_m04",
            name: "明智優",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 鈴村一騎
        {
            id: "g122_h01",
            name: "鈴村一騎",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
