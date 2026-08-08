// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game037", // 全局唯一ID，不可重复
    name: "喧哗番长 乙女",
    year: "2024",
    publisher: ["RED","Spike Chunsoft"],
    cnStudio: "JSD",
    writer: [
        {name:"伊東愛", lang:"zh"},
        {name:"雨宮うた", lang:"zh"},
        {name:"真青テテ", lang:"zh"}
    ],
    art: [
        {name:"黒蜜きなこ", lang:"zh"}
    ],
    cover: "img/game/037.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 中山日南子
        {
            id: "g037_f01",
            name: "中山日南子",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["img/char/037/Hinako.jpg","img/char/037/Hinako2.jpg","img/char/037/Hinako3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 鬼岛凤凰
        {
            id: "g037_m01",
            name: "鬼岛凤凰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/037/Houou.jpg","img/char/037/Houou2.jpg","img/char/037/Houou3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 吉良麟太郎
        {
            id: "g037_m02",
            name: "吉良麟太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/037/Rintarou.jpg","img/char/037/Rintarou2.jpg","img/char/037/Rintarou3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 金春贵之
        {
            id: "g037_m03",
            name: "金春贵之",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/037/Takayuki.jpg","img/char/037/Takayuki2.jpg","img/char/037/Takayuki3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 箕轮斗斗丸
        {
            id: "g037_m04",
            name: "箕轮斗斗丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/037/Totomaru.jpg","img/char/037/Totomaru2.jpg","img/char/037/Totomaru3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 未良子裕太
        {
            id: "g037_m05",
            name: "未良子裕太",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/037/Yuuta.jpg","img/char/037/Yuuta2.jpg","img/char/037/Yuuta3.png"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 相乐天马
        {
            id: "g037_fd01",
            name: "相乐天马",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["img/char/037/Tenma.jpg","img/char/037/Tenma2.jpg","img/char/037/Tenma3.jpg","img/char/037/Tenma4.png"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
