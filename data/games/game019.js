// data/games/game019.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game019", // 全局唯一ID，不可重复
    name: "薄樱鬼 真改 风华传",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"長野和泉", lang:"zh"},
        {name:"小縞なお", lang:"zh"}
    ],
    art: [
        {name:"四季咲組", lang:"zh"}
    ],
    cover: "https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/game/019.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 雪村千鹤
        {
            id: "g019_f01",
            name: "雪村千鹤",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Chizuru.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 斋藤一
        {
            id: "g019_m01",
            name: "斋藤一",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Hajime.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 原田左之助
        {
            id: "g019_m02",
            name: "原田左之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Harada.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 藤堂平助
        {
            id: "g019_m03",
            name: "藤堂平助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Heisuke.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 伊庭八郎
        {
            id: "g019_m04",
            name: "伊庭八郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Iba.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 风间千景
        {
            id: "g019_m05",
            name: "风间千景",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Kazama.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 山南敬助
        {
            id: "g019_m06",
            name: "山南敬助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Keisuke.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 坂本龙马
        {
            id: "g019_m07",
            name: "坂本龙马",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Ryouma.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 永仓新八
        {
            id: "g019_m08",
            name: "永仓新八",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Shinpachi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
      // 冲田总司
        {
            id: "g019_m09",
            name: "冲田总司",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Souji.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
      // 相马主计
        {
            id: "g019_m10",
            name: "相马主计",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Souma.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
      // 土方岁三
        {
            id: "g019_m11",
            name: "土方岁三",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Toshizou.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
      // 山崎烝‌
        {
            id: "g019_m12",
            name: "山崎烝‌",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://pub-7fe3cf5d6e78426b988975ff957a6ee9.r2.dev/char/019/Yamazaki.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
