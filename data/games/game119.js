遙かなる時空の中で7
中文名: 遥远时空中7
开发: コーエーテクモホールディングス、ルビーパーティー
发行: コーエーテクモホールディングス、コーエーテクモゲームス
人物设定: 水野十子
主题歌演出: 安元洋貴、寺島拓篤、岡本信彦、立花慎之介、竹本英史、鈴村健一、阿部敦
别名: 遥远时空7
Harukanaru Toki no Naka de 7
平台: Nintendo Switch
游戏类型: 恋愛アドベンチャー
剧本: 蕗石尚子
链接: ErogameScape
官方网站: gamecity.ne.jp/haruka7/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game119", // 全局唯一ID，不可重复，如 game001
    name: "遥远时空7",
    year: "20",
    publisher: ["KOEI"],
    cnStudio: "KOEI",
    writer: [
        {name:"蕗石尚子", lang:"zh"}
    ],
    art: [
        {name:"水野十子", lang:"zh"}
    ],
    cover: "game/119.jpg", // 相对路径，游戏封面
    charList: [
        // 天野七緒
        {
            id: "g119_f01",
            name: "天野七緒",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/119/Nanao.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 黑田长政
        {
            id: "g119_m01",
            name: "黑田长政",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/119/Kuroda.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 宫本武藏
        {
            id: "g119_m02",
            name: "宫本武藏",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/119/Musashi.jpg"], type: "base" },
            ]
        },
        // 直江兼续
        {
            id: "g119_m03",
            name: "直江兼续",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/119/Naoe.jpg"], type: "base" },

            ]
        },
        // 阿国
        {
            id: "g119_m04",
            name: "阿国",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/119/Okuni.jpg"], type: "base" },
            ]
        },
        // 真田幸村
        {
            id: "g119_m05",
            name: "真田幸村",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/119/Sanada.jpg"], type: "base" },
            ]
        },
        // 佐佐木大和
        {
            id: "g119_m06",
            name: "佐佐木大和",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/119/Sasaki.jpgg"], type: "base" },
            ]
        },
        // 天野五月
        {
            id: "g119_m07",
            name: "天野五月",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/119/Satsuki.jpg"], type: "base" },
            ]
        },
        // 柳生宗矩
        {
            id: "g119_m08",
            name: "柳生宗矩",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/119/Yagyuu.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
