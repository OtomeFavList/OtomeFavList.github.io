// 魔女と亡霊のヴォロンテ
// 开发: LocaGames
// 发行: LocaGames
// 主题歌作曲: 鈴葉ユミ
// 主题歌作词: 鈴葉ユミ
// 主题歌演出: 鈴葉ユミ
// 企画: LocaGames
// 平台: Nintendo Switch
// 游戏类型: 悲劇の真相を追求する、ダークファンタジー×サスペンス乙女ゲーム
// 游玩人数: 1
// 发行日期: 2025-05-22
// 售价: 6,930 円(税込)
// 原画: Somate Studio
// 人物设定: Somate Studio
// loca.games/volontes/
  
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game084", // 全局唯一ID，不可重复，如 game001
    name: "魔女と亡霊のヴォロンテ",
    year: "2025",
    publisher: ["LocaGames"],
    cnStudio: "暂无",
    writer: [
        {name:"Yulius", lang:"en"}
    ],
    art: [
        {name:"Somate Studio", lang:"en"}
    ],
    cover: "game/084.jpg", // 相对路径，游戏封面
    charList: [
        // フィエナ
        {
            id: "g084_f01",
            name: "フィエナ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // エマニュエル·ド・ボーモン
        {
            id: "g084_m01",
            name: "エマニュエル·ド・ボーモン",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // イスマイール
        {
            id: "g084_m02",
            name: "イスマイール",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg"], type: "base" },
            ]
        },
        // メロディー
        {
            id: "g084_m03",
            name: "メロディー",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg"], type: "base" },
            ]
        },
        // オリヴィエ·パケ
        {
            id: "g084_m04",
            name: "オリヴィエ·パケ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
