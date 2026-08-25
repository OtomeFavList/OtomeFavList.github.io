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
            isSub: true,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g104_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g104_m02",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g104_m03",
            name: "男主3",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g104_m04",
            name: "男主4",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g104_m05",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
