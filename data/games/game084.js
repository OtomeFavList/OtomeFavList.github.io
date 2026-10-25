// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game084", // 全局唯一ID，不可重复，如 game001
    name: "魔女と亡霊のヴォロンテ",
    year: "2025",
    publisher: ["LocaGames"],
    cnStudio: "暂无",
    writer: [
        {name:"Yulius", lang:"en"}
    ],
    art: [
        {name:"Somate Studio", lang:"en"}
    ],
    cover: "game/084.jpg", // 相对路径，游戏封面
    charList: [
        // フィエナ
        {
            id: "g084_f01",
            name: "フィエナ",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/084/Fiena.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // エマニュエル·ド・ボーモン
        {
            id: "g084_m01",
            name: "エマニュエル·ド・ボーモン",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/084/Emmanuel.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // イスマイール
        {
            id: "g084_m02",
            name: "イスマイール",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/084/Ismail.jpg"], type: "base" },
            ]
        },
        // メロディー
        {
            id: "g084_m03",
            name: "メロディー",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/084/Melody.jpg"], type: "base" },
            ]
        },
        // オリヴィエ·パケ
        {
            id: "g084_m04",
            name: "オリヴィエ·パケ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/084/Olivier.jpg"], type: "base" },
            ]
        }
    ]
};

// ESModule导出
export { gameData };
