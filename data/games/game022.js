// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game022", // 全局唯一ID，不可重复
    name: "异世界配信：谎言与真实",
    year: "2023",
    publisher: "Otomate",
    cnStudio: "JSD",
    writer: ["雨宮うた","織原あやの"],
    art: "悌太",
    cover: "img/game/022.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 濑名阳爱
        {
            id: "g0_f01",
            name: "濑名阳爱",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/022/Hiyori.jpg","img/char/022/Hiyori2.jpg","img/char/022/Hiyori3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 陀宰明
        {
            id: "g0_m01",
            name: "陀宰明",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/022/Dazai.jpg","img/char/022/Dazai2.jpg","img/char/022/Dazai3.jpg","img/char/022/Dazai4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 获端圭人
        {
            id: "g0_m02",
            name: "获端圭人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/022/Ebana.jpg","img/char/022/Ebana2.jpg","img/char/022/Ebana3.jpg","img/char/022/Ebana4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 双巳椋一
        {
            id: "g0_m03",
            name: "双巳椋一",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/022/Futami.jpg","img/char/022/Futami2.jpg","img/char/022/Futami3.jpg","img/char/022/Futami4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 废寺拓海
        {
            id: "g0_m04",
            name: "废寺拓海",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/022/Haiji.jpg","img/char/022/Haiji2.jpg","img/char/022/Haiji3.jpg","img/char/022/Haiji4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 射落水树
        {
            id: "g0_m05",
            name: "射落水树",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/022/Iochi.jpg","img/char/022/Iochi2.jpg","img/char/022/Iochi3.jpg","img/char/022/Iochi4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 明濑境也
        {
            id: "g0_m06",
            name: "明濑境也",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/022/Kyouya.jpg","img/char/022/Kyouya2.jpg","img/char/022/Kyouya3.jpg","img/char/022/Kyouya4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 茅裂镇
        {
            id: "g0_m07",
            name: "茅裂镇",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/022/Mamoru.jpg","img/char/022/Mamoru2.jpg","img/char/022/Mamoru3.jpg","img/char/022/Mamoru4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 凝部奏汰
        {
            id: "g0_m08",
            name: "凝部奏汰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/022/Souta.jpg","img/char/022/Souta2.jpg","img/char/022/Souta3.jpg","img/char/022/Souta4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 万城灯星
        {
            id: "g0_m09",
            name: "万城灯星",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/022/Tomose.jpg","img/char/022/Tomose2.jpg","img/char/022/Tomose3.jpg","img/char/022/Tomose4.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
