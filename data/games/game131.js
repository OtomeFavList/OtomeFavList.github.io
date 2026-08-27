SWEET CLOWN ～午前三時のオカシな道化師～
开发: TAKUYO
发行: TAKUYO
剧本: 井上愁（古桥、真井线）、白鳥ユアン（久濑、密原线）、関口琴子（日之世线）
人物设定: ヒロセアヅミ
主题歌作曲: 柊奈緒、うたまろ（Nintendo Switch版）、ざっとん（Nintendo Switch版）
主题歌作词: 柊奈緒、うたまろ（Nintendo Switch版）、ざっとん（Nintendo Switch版）
主题歌演出: 柊奈緒、ラムソアーズ（Nintendo Switch版）
原画: ヒロセアヅミ
导演: 井上愁
制作人: 齊藤幸治
链接: ErogameScape VNDB
官方网站: takuyo.co.jp/products/sweetclown/index.html

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game131", // 全局唯一ID，不可重复，如 game001
    name: "SWEET CLOWN ~午前三時のオカシな道化師~",
    year: "2021",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"井上愁", lang:"zh"},
        {name:"白鳥ユアン", lang:"zh"},
        {name:"関口琴子", lang:"zh"},
    ],
    art: [
        {name:"ヒロセアヅミ", lang:"ja"}
    ],
    cover: "game/131.jpg", // 相对路径，游戏封面
    charList: [
        // 橿野柘榴
        {
            id: "g131_f01",
            name: "橿野柘榴",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g131_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g131_m02",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g131_m03",
            name: "男主3",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g131_m04",
            name: "男主4",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g131_m05",
            name: "男主5",
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
