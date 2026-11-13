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
                { srcList: ["char/131/Zakuro.jpg",
                            "char/131/Zakuro2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 古橋旺一郎
        {
            id: "g131_m01",
            name: "古橋旺一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/131/Ouichirou.jpg",
                            "char/131/Ouichirou2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 密原誠丞
        {
            id: "g131_m02",
            name: "密原誠丞",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/131/Seisuke.jpg",
                            "char/131/Seisuke2.jpg"], type: "base" },
            ]
        },
        // 久瀬蒼馬
        {
            id: "g131_m03",
            name: "久瀬蒼馬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/131/Souma.jpg",
                            "char/131/Souma2.jpg"], type: "base" },
            ]
        },
        // 日之世武尊
        {
            id: "g131_m04",
            name: "日之世武尊",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/131/Takeru.jpg",
                            "char/131/Takeru2.jpg"], type: "base" },
            ]
        },
        // 真井知己
        {
            id: "g131_m05",
            name: "真井知己",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/131/Tomoki.jpg",
                            "char/131/Tomoki2.jpg"], type: "base" },
            ]
        },
        // クランベリー
        {
            id: "g131_s01",
            name: "クランベリー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/131/Cranberry.jpg",
                            "char/131/Cranberry2.jpg"], type: "base" }
            ]
        },
        // ガート
        {
            id: "g131_s02",
            name: "ガート",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/131/Gart.jpg",
                            "char/131/Gart2.jpg"], type: "base" }
            ]
        },
        // ケイファ
        {
            id: "g131_s03",
            name: "ケイファ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/131/Keifa.jpg",
                            "char/131/Keifa2.jpg"], type: "base" }
            ]
        },
        // マリス
        {
            id: "g131_s04",
            name: "マリス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/131/Maris.jpg",
                            "char/131/Maris2.jpg"], type: "base" }
            ]
        },
        // ネージュ
        {
            id: "g131_s05",
            name: "ネージュ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/131/Neige.jpg",
                            "char/131/Neige2.jpg"], type: "base" }
            ]
        },
        // ラズベリー
        {
            id: "g131_s06",
            name: "ラズベリー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/131/Raspberry.jpg",
                            "char/131/Raspberry2.jpg"], type: "base" }
            ]
        },
        // スイートクラウン
        {
            id: "g131_s07",
            name: "スイートクラウン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/131/Sweetclown.jpg",
                            "char/131/Sweetclown2.jpg"], type: "base" }
            ]
        },
        // ネコ
        {
            id: "g131_s08",
            name: "ネコ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/131/Neko.jpg",
                            "char/131/Neko2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
