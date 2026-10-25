// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game083", // 全局唯一ID，不可重复，如 game001
    name: "Panic Palette",
    year: "2025",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"井上愁", lang:"zh"},
        {name:"藤元", lang:"zh"}
    ],
    art: [
        {name:"仁神ユキタカ", lang:"zh"}
    ],
    cover: "game/083.jpg", // 相对路径，游戏封面
    charList: [
        // 依藤亜貴
        {
            id: "g083_f01",
            name: "依藤亜貴",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/083/Akit.jpg",
                            "char/083/Akit2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 烏羽一徒
        {
            id: "g083_m01",
            name: "烏羽一徒",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/083/Karasut.jpg",
                            "char/083/Karasut2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 真朱柑
        {
            id: "g083_m02",
            name: "真朱柑",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/083/Kout.jpg",
                            "char/083/Kout2.jpg"], type: "base" },
            ]
        },
        // 乃凪範尚
        {
            id: "g083_m03",
            name: "乃凪範尚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/083/Nait.jpg",
                            "char/083/Nait2.jpg"], type: "base" },
            ]
        },
        // 内沼葛
        {
            id: "g083_m04",
            name: "内沼葛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/083/Nuit.jpg",
                            "char/083/Nuit2.jpg"], type: "base" },
            ]
        },
        // 白原尋也
        {
            id: "g083_m05",
            name: "白原尋也",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/083/Shiraharat.jpg",
                            "char/083/Shiraharat2.jpg"], type: "base" },
            ]
        },
        // 黄朽葉宰
        {
            id: "g083_m06",
            name: "黄朽葉宰",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/083/Tsukasat.jpg",
                            "char/083/Tsukasat2.jpg"], type: "base" },
            ]
        }
    ]
};

// ESModule导出
export { gameData };
