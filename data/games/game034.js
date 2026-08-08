// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game034", // 全局唯一ID，不可重复
    name: "我的超级现充生活",
    year: "2024",
    publisher: "TetraScope",
    cnStudio: "TetraScope",
    writer: ["kaiso"],
    art: "ne-on",
    cover: "img/game/034.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 姐崎希美
        {
            id: "g034_f01",
            name: "姐崎希美",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/034/Nozomi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 仓口步
        {
            id: "g0_m01",
            name: "仓口步",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/034/Ayumu.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 星名穗积
        {
            id: "g0_m02",
            name: "星名穗积",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/034/Hozumi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 姐崎隼
        {
            id: "g0_m03",
            name: "姐崎隼",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/034/Shun.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
