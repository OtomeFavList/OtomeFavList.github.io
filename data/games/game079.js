// ALICE=ALICE
// 开发: Rejet
// 发行: Rejet
// 剧本: 株式会社Polkadot（真崎結衣、やまだ有見、小和泉いづみ、有栖川あやみ、かなた春香、こたに白子）吉村りりか、田中彼方、瀬多海人、栗屋歌兎
// 人物设定: スオウ
// 主题歌作曲: MIKOTO
// 主题歌作词: 岩崎大介
// 主题歌演出: 立花慎之介、近藤隆
// 原画: スオウ
// 官方网站: rejetweb.jp/alice/
// rejetweb.jp/aa-bm/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game079", // 全局唯一ID，不可重复，如 game001
    name: "ALICE=ALICE",
    year: "2014",
    publisher: ["Rejet"],
    cnStudio: "暂无",
    writer: [
        {name:"真崎結衣", lang:"zh"},
        {name:"小和泉いづみ", lang:"zh"},
        {name:"有栖川あやみ", lang:"zh"},
        {name:"吉村りりか", lang:"zh"},
        {name:"田中彼方", lang:"zh"},
        {name:"瀬多海人", lang:"zh"},
        {name:"栗屋歌兎", lang:"zh"},
        {name:"やまだ有見", lang:"ja"},
        {name:"かなた春香", lang:"ja"},
        {name:"こたに白子", lang:"ja"}
    ],
    art: [
        {name:"スオウ", lang:"ja"}
    ],
    cover: "game/079.jpg", // 相对路径，游戏封面
    charList: [
        // 桜庭アスカ
        {
            id: "g079_f01",
            name: "桜庭アスカ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/079/Sakuraba.jpg"], type: "base" }
            ]
        },
        // 帽子屋
        {
            id: "g079_m01",
            name: "帽子屋",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Boushiya.jpg"], type: "base" }
            ]
        },
        // チェシャ猫
        {
            id: "g079_m02",
            name: "チェシャ猫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Chesire.jpg"], type: "base" }
            ]
        },
        // キング
        {
            id: "g079_m03",
            name: "キング",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/King.jpg"], type: "base" }
            ]
        },
        // 黒うさぎ
        {
            id: "g079_m04",
            name: "黒うさぎ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Kuro.jpg"], type: "base" }
            ]
        },
        // 三月ウサギ
        {
            id: "g079_m05",
            name: "三月ウサギ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Sangatsu.jpg"], type: "base" }
            ]
        },
        // 裏ありす
        {
            id: "g079_m06",
            name: "三月ウサギ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/079/Ura.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
