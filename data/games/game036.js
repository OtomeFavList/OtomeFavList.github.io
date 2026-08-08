// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game036", // 全局唯一ID，不可重复
    name: "魔鬼恋人 GRAND EDITION",
    year: "2024",
    publisher: ["Otomate","Rejet"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"小和泉いづみ", lang:"zh"},
        {name:"真崎結衣", lang:"zh"},
        {name:"恵莉ひなこ", lang:"zh"},
        {name:"加納高子", lang:"zh"},
        {name:"吉村りりか", lang:"zh"},
        {name:"やまだ有見", lang:"ja"},
        {name:"ウサギリス", lang:"ja"}
    ],
    art: [
        {name:"さとい", lang:"ja"}
    ],
    cover: "img/game/036.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 小森唯
        {
            id: "g036_f01",
            name: "小森唯",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/036/Yui.jpg","img/char/036/Yui2.jpg","img/char/036/Yui3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 逆卷绫人
        {
            id: "g036_m01",
            name: "逆卷绫人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/036/Ayato.jpg","img/char/036/Ayato2.jpg","img/char/036/Ayato3.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/036/Ayato4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 无神梓
        {
            id: "g036_m02",
            name: "无神梓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/036/Azusa.jpg","img/char/036/Azusa2.jpg","img/char/036/Azusa3.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/036/Azusa4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 逆卷奏人
        {
            id: "g036_m03",
            name: "逆卷奏人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/036/Kanato.jpg","img/char/036/Kanato2.jpg","img/char/036/Kanato3.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/036/Kanato4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 无神皓
        {
            id: "g036_m04",
            name: "无神皓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/036/Kou.jpg","img/char/036/Kou2.jpg","img/char/036/Kou3.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/036/Kou4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 逆卷礼人
        {
            id: "g036_m05",
            name: "逆卷礼人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/036/Laito.jpg","img/char/036/Laito2.jpg","img/char/036/Laito3.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/036/Laito4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 逆卷怜司
        {
            id: "g036_m06",
            name: "逆卷怜司",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/036/Reiji.jpg","img/char/036/Reiji2.jpg","img/char/036/Reiji3.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/036/Reiji4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 无神琉辉
        {
            id: "g036_m07",
            name: "无神琉辉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/036/Ruki.jpg","img/char/036/Ruki2.jpg","img/char/036/Ruki3.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/036/Ruki4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 逆卷修
        {
            id: "g036_m08",
            name: "逆卷修",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/036/Shuu.jpg","img/char/036/Shuu2.jpg","img/char/036/Shuu3.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/036/Shuu4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 逆卷昴
        {
            id: "g036_m09",
            name: "逆卷昴",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/036/Subaru.jpg","img/char/036/Subaru2.jpg","img/char/036/Subaru3.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/036/Subaru4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 无神悠真
        {
            id: "g036_m10",
            name: "无神悠真",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/036/Yuuma.jpg","img/char/036/Yuuma2.jpg","img/char/036/Yuuma3.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/036/Yuuma4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 月浪卡拉
        {
            id: "g036_fd01",
            name: "月浪卡拉",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/036/Carla.jpg","img/char/036/Carla2.jpg","img/char/036/Carla3.jpg"], type: "base" },
                { srcList: ["img/char/036/Carla4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 月浪辛
        {
            id: "g036_fd02",
            name: "月浪辛",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/036/Shin.jpg","img/char/036/Shin2.jpg","img/char/036/Shin3.jpg"], type: "base" },
                { srcList: ["img/char/036/Shin4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 基诺
        {
            id: "g036_fd03",
            name: "基诺",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/036/Kino.jpg","img/char/036/Kino2.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
