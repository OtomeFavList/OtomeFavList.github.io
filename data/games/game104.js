// 真紅の焔 真田忍法帳
// 中文名: 真红之焰 真田忍法帐
// 开发: オトメイト、デザインファクトリー
// 发行: アイディアファクトリー株式会社
// 剧本: 長野和泉、中山智美
// 音乐: 杉浦勇紀
// 人物设定: 四季咲組
// 主题歌作曲: 佐々木李子、高橋浩一郎
// 主题歌作词: 佐々木李子、テルジヨシザワ
// 主题歌演出: 佐々木李子
// 插入歌演出: 佐々木李子
// 原画: 四季咲組
// 导演: 藤澤経清
// 别名: 真紅の焔 真田忍法帳 for Nintendo Switch
// 英文版 Homura: The Crimson Warriors
// 官方网站: otomate.jp/kurenai/
// https://www.otomate.jp/kurenai/switch/chara/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game104", // 全局唯一ID，不可重复，如 game001
    name: "真紅の焔 真田忍法帳",
    year: "2024",
    publisher: ["otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"長野和泉", lang:"zh"},
        {name:"中山智美", lang:"zh"}
    ],
    art: [
        {name:"四季咲組", lang:"zh"}
    ],
    cover: "game/104.jpg", // 相对路径，游戏封面
    charList: [
        // 望月六実
        {
            id: "g104_f01",
            name: "望月六実",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/104/Mutsumi.jpg",
                            "char/104/Mutsumi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 筧十蔵
        {
            id: "g104_m01",
            name: "筧十蔵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/104/Jyuzou.jpg",
                            "char/104/Jyuzou2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 由利鎌之介
        {
            id: "g104_m02",
            name: "由利鎌之介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/104/Kamanosuke.jpg",
                            "char/104/Kamanosuke2.jpg"], type: "base" },
            ]
        },
        // 霧隠才蔵
        {
            id: "g104_m03",
            name: "霧隠才蔵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/104/Saizou.jpg",
                            "char/104/Saizou2.jpg"], type: "base" },
            ]
        },
        // 猿飛佐助
        {
            id: "g104_m04",
            name: "猿飛佐助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/104/Sasuke.jpg",
                            "char/104/Sasuke2.jpg"], type: "base" },
            ]
        },
        // 真田信繁
        {
            id: "g104_m05",
            name: "真田信繁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/104/Shigenobu.jpg",
                            "char/104/Shigenobu2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
