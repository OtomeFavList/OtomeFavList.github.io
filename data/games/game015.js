// data/games/game015.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game015", // 全局唯一ID，不可重复
    name: "君于雪中希冀",
    year: "2022",
    publisher: "Otomate",
    cnStudio: "JSD",
    writer:["佐々木麿","結城由乃","仰木サヤ","みぞおち鳩子"],
    art: ["Team.","十ガ才力"],
    cover: "img/game/game015.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 纱乃
        {
            id: "g015_f01",
            name: "纱乃",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { src: ["img/char/g001_f0_1.jpg","img/char/g001_f0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { src: ["img/char/g001_f0_3.jpg"], type: "hidden" }     // 需要开启隐藏角色开关才展示的图片
                { src: ["img/char/g001_f0_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 锦次
        {
            id: "g015_m01",
            name: "锦次",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { src: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { src: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 久贺源十郎
        {
            id: "g015_m02",
            name: "久贺源十郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { src: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { src: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 东条国孝
        {
            id: "g015_m03",
            name: "东条国孝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { src: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { src: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 樱太郎
        {
            id: "g015_m04",
            name: "樱太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { src: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { src: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 篁智成
        {
            id: "g015_m05",
            name: "篁智成",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { src: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { src: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },// 与市
        {
            id: "g015_m06",
            name: "与市",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { src: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { src: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
