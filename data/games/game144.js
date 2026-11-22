// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game144", // 全局唯一ID，不可重复，如 game001
    name: "空蝉の廻",
    year: "2024",
    publisher: ["Matatabi"],
    cnStudio: "暂无",
    writer: [
        {name:"石倉みもり", lang:"zh"},
        {name:"紅原香", lang:"zh"},
        {name:"綾部ふゆ", lang:"zh"},
        {name:"春森よしちか", lang:"zh"},
        {name:"恵村まお", lang:"zh"},
        {name:"わたび和泉", lang:"ja"}
    ],
    art: [
        {name:"Puru", lang:"en"}
    ],
    cover: "game/144.jpg", // 相对路径，游戏封面
    charList: [
        // 鎮宮天音
        {
            id: "g144_f01",
            name: "鎮宮天音",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/144/Amane.png"
                            "char/144/Amane2.png"], type: "base" }
            ]
        },
        // 颯
        {
            id: "g144_m01",
            name: "颯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/144/Hayate.png",
                            "char/144/Hayate2.png"], type: "base" }
            ]
        },
        // 柊知影
        {
            id: "g144_m02",
            name: "柊知影",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/144/Hiiragi.png",
                            "char/144/Hiiragi2.png"], type: "base" }
            ]
        },
        // 魂宮魁
        {
            id: "g144_m03",
            name: "魂宮魁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/144/Kai.png",
                            "char/144/Kai2.png"], type: "base" }
            ]
        },
        // 相良泰臣
        {
            id: "g144_m04",
            name: "相良泰臣",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/144/Sagara.png",
                            "char/144/Sagara2.png"], type: "base" }
            ]
        },
        // 結鶴
        {
            id: "g144_m05",
            name: "結鶴",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/144/Yuzuru.png",
                            "char/144/Yuzuru2.png"], type: "base" }
            ]
        },
        // 啓太
        {
            id: "g144_s01",
            name: "啓太",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/144/Keita.png",
                            "char/144/Keita2.png"], type: "base" }
            ]
        },
        // 紫月丸
        {
            id: "g144_s02",
            name: "紫月丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/144/Shizuki.png",
                            "char/144/Shizuki2.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
