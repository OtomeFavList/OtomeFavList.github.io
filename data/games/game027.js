// data/games/game027.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game027", // 全局唯一ID，不可重复
    name: "失忆症-AMNESIA-",
    year: "2022",
    publisher: "Otomate",
    cnStudio: "GSE",
    writer: "剧本编剧",
    art: "花邑まい",
    cover: "img/game/game027.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 女主模板 female
        {
            id: "g0_f01",
            name: "女主A",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { src: ["img/char/g001_f0_1.jpg","img/char/g001_f0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { src: ["img/char/g001_f0_3.jpg"], type: "hidden" }     // 需要开启隐藏角色开关才展示的图片
                { src: ["img/char/g001_f0_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g0_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { src: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { src: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 隐藏角色（isHidden=true → 开关开启才显示整个角色卡片）
        {
            id: "g0_h01",
            name: "隐藏攻略角色",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { src: ["img/char/g001_h01_1.jpg"], type: "base" }
            ]
        },
        // FD续作限定角色（isFD=true → FD开关开启才显示整个角色卡片）
        {
            id: "g0_fd01",
            name: "续作FD新增角色",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { src: ["img/char/g001_fd01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
