// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game035", // 全局唯一ID，不可重复
    name: "BUSTAFELLOWS",
    year: "2024",
    publisher: ["eXtend"],
    cnStudio: "GSE",
    writer: ["minetaka"],
    art: ["すめらぎ琥珀"],
    cover: "img/game/035.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 特乌塔
        {
            id: "g035_f01",
            name: "特乌塔",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/035/Teuta.jpg","img/char/035/Teuta2.jpg","img/char/035/Teuta3.jpg","img/char/035/Teuta4.jpg","img/char/035/Teuta5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 赫尔贝奇卡
        {
            id: "g035_m01",
            name: "赫尔贝奇卡",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/035/Helvetica.jpg","img/char/035/Helvetica2.jpg","img/char/035/Helvetica3.jpg","img/char/035/Helvetica4.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/035/Helvetica5.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 林波
        {
            id: "g035_m02",
            name: "林波",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/035/Limbo.jpg","img/char/035/Limbo2.jpg","img/char/035/Limbo3.jpg","img/char/035/Limbo4.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/035/Limbo5.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 莫茲
        {
            id: "g035_m03",
            name: "莫茲",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/035/Mozu.jpg","img/char/035/Mozu2.jpg","img/char/035/Mozu3.jpg","img/char/035/Mozu4.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/035/Mozu5.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 斯卡克罗
        {
            id: "g035_m04",
            name: "斯卡克罗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/035/Scarecrow.jpg","img/char/035/Scarecrow2.jpg","img/char/035/Scarecrow3.jpg","img/char/035/Scarecrow4.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/035/Scarecrow5.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 修
        {
            id: "g035_m05",
            name: "修",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/035/Shu.jpg","img/char/035/Shu2.jpg","img/char/035/Shu3.jpg","img/char/035/Shu4.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/035/Shu5.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 亚当
        {
            id: "g035_h01",
            name: "亚当",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["img/char/035/Adam.jpg","img/char/035/Adam2.jpg","img/char/035/Adam3.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
