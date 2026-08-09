// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game061", // 全局唯一ID，不可重复
    name: "麻烦清理专家咖啡店-the mystic lover-",
    year: "2026",
    publisher: ["EDIA","MintLip"],
    cnStudio: "JSD",
    writer: [
        {name:"雨宮うた", lang:"zh"},
        {name:"结望はるか", lang:"zh"}
    ],
    art: [
        {name:"ユウヤ", lang:"ja"}
    ],
    cover: "img/game/061.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 天近绫乃
        {
            id: "g061_f01",
            name: "天近绫乃",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/061/Ayano.jpg","img/char/061/Ayano2.png","img/char/061/Ayano3.jpg","img/char/061/Ayano4.jpg","img/char/061/Ayano5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 天近美铃
        {
            id: "g061_f02",
            name: "天近美铃",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/061/Misuzu.jpg","img/char/061/Misuzu2.png","img/char/061/Misuzu3.jpg","img/char/061/Misuzu4.jpg","img/char/061/Misuzu5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 月城茅
        {
            id: "g061_m01",
            name: "月城茅",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/061/Chigaya.jpg","img/char/061/Chigaya2.png","img/char/061/Chigaya3.jpg","img/char/061/Chigaya4.jpg","img/char/061/Chigaya5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 海濑隼人
        {
            id: "g061_m02",
            name: "海濑隼人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/061/Hayato.jpg","img/char/061/Hayato2.png","img/char/061/Hayato3.jpg","img/char/061/Hayato4.jpg","img/char/061/Hayato5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 风见琉佳
        {
            id: "g061_m03",
            name: "风见琉佳",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/061/Luka.jpg","img/char/061/Luka2.png","img/char/061/Luka3.jpg","img/char/061/Luka4.jpg","img/char/061/Luka5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 花丘槙尾
        {
            id: "g061_m04",
            name: "花丘槙尾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/061/Makio.jpg","img/char/061/Makio2.png","img/char/061/Makio3.jpg","img/char/061/Makio4.jpg","img/char/061/Makio5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 日向野骏
        {
            id: "g061_m05",
            name: "日向野骏",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/061/Shun.jpg","img/char/061/Shun2.png","img/char/061/Shun3.jpg","img/char/061/Shun4.jpg","img/char/061/Shun5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 空闲巴
        {
            id: "g061_m06",
            name: "空闲巴",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/061/Tomoe.jpg","img/char/061/Tomoe2.png","img/char/061/Tomoe3.jpg","img/char/061/Tomoe4.jpg","img/char/061/Tomoe5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 月城苇夜
        {
            id: "g061_m07",
            name: "月城苇夜",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/061/Yoshiya.jpg","img/char/061/Yoshiya2.png","img/char/061/Yoshiya3.jpg","img/char/061/Yoshiya4.jpg","img/char/061/Yoshiya5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 善知鸟全
        {
            id: "g061_m08",
            name: "善知鸟全",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/061/Zen.jpg","img/char/061/Zen2.png","img/char/061/Zen3.jpg","img/char/061/Zen4.jpg","img/char/061/Zen5.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
