// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game024", // 全局唯一ID，不可重复
    name: "KLAP!! ~爱与惩罚~",
    year: "2023",
    publisher: "Otomate",
    cnStudio: "JOYOLAND",
    writer: ["皆川千尋","水都","春夏秋冬よもひろ","夏越ちか","狐塚冬里","城戸蘭丸","駒豆羅々子","寺須ハウス","高林祐樹","有野幸","佐々木麿"],
    art: "川人やすた",
    cover: "img/game/024.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 山城历
        {
            id: "g024_f01",
            name: "山城历",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/g001_f0_1.jpg","img/char/g001_f0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g001_f0_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g001_f0_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g024_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g024_m02",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g024_m03",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g024_m04",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g024_m05",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g024_m06",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g024_m07",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g024_m08",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/g0_m01_1.jpg","img/char/g001_m0_2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["img/char/g0_m01_3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["img/char/g0_m01_4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
