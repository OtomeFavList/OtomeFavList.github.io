// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game028", // 全局唯一ID，不可重复
    name: "华彩煌煌，吾之一族 摩登时代",
    year: "2023",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"高木亜由美", lang:"zh"}
    ],
    art: [
        {name:"ユウヤ", lang:"ja"}
    ],
    cover: "img/game/028.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 浅木春
        {
            id: "g028_f01",
            name: "浅木春",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/028/Haru.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/028/Haru2.jpg","img/char/028/Haru3.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 宫之杜博
        {
            id: "g028_m01",
            name: "宫之杜博",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/028/Hiroshi.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/028/Hiroshi2.jpg","img/char/028/Hiroshi3.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 宫之杜勇
        {
            id: "g028_m02",
            name: "宫之杜勇",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/028/Isami.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/028/Isami2.jpg","img/char/028/Isami3.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 宫之杜雅
        {
            id: "g028_m03",
            name: "宫之杜雅",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/028/Masashi.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/028/Masashi2.jpg","img/char/028/Masashi3.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 宫之杜茂
        {
            id: "g028_m04",
            name: "宫之杜茂",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/028/Shigeru.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/028/Shigeru2.jpg","img/char/028/Shigeru3.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 宫之杜进
        {
            id: "g028_m05",
            name: "宫之杜进",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/028/Susumu.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/028/Susumu2.jpg","img/char/028/Susumu3.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 宫之杜正
        {
            id: "g028_m06",
            name: "宫之杜正",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/028/Tadashi.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/028/Tadashi2.jpg","img/char/028/Tadashi3.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 宫之杜守
        {
            id: "g028_h01",
            name: "宫之杜守",
            gender: "male",
            isHidden: true,
            isFD: true,
            images: [
                { srcList: ["img/char/028/Mamoru.jpg","img/char/028/Mamoru2.jpg"], type: "base" }
            ]
        },
        // 有田喜助
        {
            id: "g028_fd01",
            name: "有田喜助",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/028/Arita.jpg","img/char/028/Arita2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
