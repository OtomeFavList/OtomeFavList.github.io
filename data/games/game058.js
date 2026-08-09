// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game058", // 全局唯一ID，不可重复
    name: "DYNAMIC CHORD 动态和弦 feat.[rêve parfait] Remaster edition",
    year: "2026",
    publisher: ["dramatic create","honeybee black"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"中村幸代", lang:"zh"},
        {name:"柚子みかん", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"相川暁子", lang:"zh"},
        {name:"深瀬カエル", lang:"zh"},
        {name:"葉山いずみ", lang:"zh"},
        {name:"ふくだりょうこ", lang:"ja"}
    ],
    art: [
        {name:"冨士原良 ", lang:"zh"}
    ],
    cover: "img/game/058.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 上远野理绪
        {
            id: "g058_f01",
            name: "上远野理绪",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/058/Rio.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 香椎亚贵
        {
            id: "g058_m01",
            name: "香椎亚贵",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/058/Aki.jpg","img/char/058/Aki2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 月野原久远
        {
            id: "g058_m02",
            name: "月野原久远",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/058/Kuon.jpg","img/char/058/Kuon2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 香椎玲音
        {
            id: "g058_m03",
            name: "香椎玲音",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/058/Reon.jpg","img/char/058/Reon2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 百濑紬生
        {
            id: "g058_m04",
            name: "百濑紬生",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/058/Tsumugi.jpg","img/char/058/Tsumugi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
