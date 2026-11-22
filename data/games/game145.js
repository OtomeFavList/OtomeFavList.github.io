// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game1", // 全局唯一ID，不可重复，如 game001
    name: "Money Parasite ~嘘つきな女~",
    year: "2022",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"白鳥ユアン", lang:"zh"},
        {name:"関口琴子", lang:"zh"}
    ],
    art: [
        {name:"あとりちや", lang:"ja"}
    ],
    cover: "game/145.jpg", // 相对路径，游戏封面
    charList: [
        // 女主模板 female
        {
            id: "g145_f01",
            name: "女主A",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/.jpg"
                            "char/145/2.jpg"], type: "base" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g145_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/.jpg",
                            "char/145/2.jpg"], type: "base" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g145_m02",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/.jpg",
                            "char/145/2.jpg"], type: "base" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g145_m03",
            name: "男主3",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/.jpg",
                            "char/145/2.jpg"], type: "base" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g145_m04",
            name: "男主4",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/.jpg",
                            "char/145/2.jpg"], type: "base" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g145_m05",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/.jpg",
                            "char/145/2.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g145_s01",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/145/.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g145_s02",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/145/.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
