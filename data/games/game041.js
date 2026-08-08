// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game041", // 全局唯一ID，不可重复
    name: "B-PROJECT 流星*幻想曲",
    year: "2024",
    publisher: ["MAGES."],
    cnStudio: "GSE",
    writer: [
        {name:"午後ねむる", lang:"zh"}
    ],
    art: [
        {name:"雪広うたこ", lang:"zh"}
    ],
    cover: "img/game/041.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 澄空翼
        {
            id: "g041_f01",
            name: "澄空翼",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/041/Tsubasa.jpg","img/char/041/Tsubasa2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 不动明谦
        {
            id: "g041_m01",
            name: "不动明谦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Akane.jpg","img/char/041/Akane2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 金城刚士
        {
            id: "g041_m02",
            name: "金城刚士",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Goushi.jpg","img/char/041/Goushi2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 寺光遥日
        {
            id: "g041_m03",
            name: "寺光遥日",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Haruhi.jpg","img/char/041/Haruhi2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 王茶利晖
        {
            id: "g041_m04",
            name: "王茶利晖",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Hikaru.jpg","img/char/041/Hikaru2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 增长和南
        {
            id: "g041_m05",
            name: "增长和南",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Kazuna.jpg","img/char/041/Kazuna2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 爱染健十
        {
            id: "g041_m06",
            name: "爱染健十",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Kento.jpg","img/char/041/Kento2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 释村帝人
        {
            id: "g041_m07",
            name: "释村帝人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Mikado.jpg","img/char/041/Mikado2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 殿弥勒
        {
            id: "g041_m08",
            name: "殿弥勒",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Miroku.jpg","img/char/041/Miroku2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 音济百太郎
        {
            id: "g041_m09",
            name: "音济百太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Momotarou.jpg","img/char/041/Momotarou2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 是国龙持
        {
            id: "g041_m10",
            name: "是国龙持",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Ryuuji.jpg","img/char/041/Ryuuji2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 野目龙广
        {
            id: "g041_m11",
            name: "野目龙广",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Tatsuhiro.jpg","img/char/041/Tatsuhiro2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 北门伦毘沙
        {
            id: "g041_m12",
            name: "北门伦毘沙",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Tomohisa.jpg","img/char/041/Tomohisa2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 阿修悠太
        {
            id: "g041_m13",
            name: "阿修悠太",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Yuuta.jpg","img/char/041/Yuuta2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 寺光唯月
        {
            id: "g041_m14",
            name: "寺光唯月",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/041/Yuzuki.jpg","img/char/041/Yuzuki2.png"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
