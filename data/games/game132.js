// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game132", // 全局唯一ID，不可重复，如 game001
    name: "ひめひび Another Princess Days -White or Black-",
    year: "2020",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"井上愁", lang:"zh"},
        {name:"関口琴子", lang:"zh"},
        {name:"白鳥ユアン", lang:"zh"},
    ],
    art: [
        {name:"ふづき", lang:"ja"}
    ],
    cover: "game/132.jpg", // 相对路径，游戏封面
    charList: [
        // 妃乃笑深
        {
            id: "g132_f01",
            name: "妃乃笑深",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/132/Emi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 皇千晴
        {
            id: "g132_m01",
            name: "皇千晴",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/132/Chiharu.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 八十八騎一角
        {
            id: "g132_m02",
            name: "八十八騎一角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/132/Kazumi.jpg"], type: "base" },
            ]
        },
        // 荒城政宗
        {
            id: "g132_m03",
            name: "荒城政宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/132/Masamune.jpg"], type: "base" },
            ]
        },
        // 紙袋中人
        {
            id: "g132_m04",
            name: "紙袋中人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/132/Nakahito.jpg"], type: "base" },
            ]
        },
        // 仙僧供夢慈
        {
            id: "g132_m05",
            name: "仙僧供夢慈",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/132/Yumeji.jpg"], type: "base" },
            ]
        },
        // 皇艶真
        {
            id: "g132_s01",
            name: "皇艶真",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/132/Enma.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
