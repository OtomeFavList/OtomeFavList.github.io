神凪ノ杜 五月雨綴り
开发: Matatabi
发行: Matatabi、ワークマン
主题歌作曲: 髙木隆次、高木隆次
主题歌作词: 月宮うさぎ
主题歌演出: Annabel
平台:
PSV Nintendo Switch
剧本: 朝比奈夏樹
人物设定: 豌豆まめ丸
原画: 豌豆まめ丸
背景: meiz
企画: 恵曇あや
音乐: 有限会社ジェオ
官方网站: matatabi.tv/kannagi/

神凪ノ杜 妖狐奇譚
开发: Matatabi
剧本: 朝比奈夏樹
人物设定: 豌豆まめ丸
主题歌作曲: 髙木隆次、高木隆次
主题歌作词: 月宮うさぎ
主题歌演出: Annabel
原画: 豌豆まめ丸
导演: 恵曇あや
音乐: 有限会社ジェオ
链接: ErogameScape VNDB Getchu
官方网站: matatabi.tv/kannagi/

神凪ノ杜 龍神奇譚
开发: Matatabi
剧本: 朝比奈夏樹
音乐: 須藤祐
人物设定: 豌豆まめ丸
主题歌作曲: 髙木隆次、高木隆次
主题歌作词: 月宮うさぎ
主题歌演出: Annabel
原画: 豌豆まめ丸
企画: 恵曇あや
链接: ErogameScape VNDB Getchu
官方网站: matatabi.tv/kannagi/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game138", // 全局唯一ID，不可重复，如 game001
    name: "神凪ノ杜 五月雨綴り",
    year: "2024",
    publisher: ["Matatabi"],
    cnStudio: "暂无",
    writer: [
        {name:"朝比奈夏樹", lang:"zh"}
    ],
    art: [
        {name:"豌豆まめ丸", lang:"zh"}
    ],
    cover: "game/138.jpg", // 相对路径，游戏封面
    charList: [
        // 木南瑞希
        {
            id: "g138_f01",
            name: "木南瑞希",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 旭
        {
            id: "g138_m01",
            name: "旭",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 日向
        {
            id: "g138_m02",
            name: "日向",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 市丸
        {
            id: "g138_m03",
            name: "市丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 仁科直
        {
            id: "g138_m04",
            name: "仁科直",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 東雲
        {
            id: "g138_m05",
            name: "東雲",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 沢木宋太
        {
            id: "g138_m06",
            name: "沢木宋太",
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
