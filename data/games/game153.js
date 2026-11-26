// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game153", // 全局唯一ID，不可重复，如 game001
    name: "維新恋華 龍馬外伝",
    year: "2014",
    publisher: ["D3 Publisher"],
    cnStudio: "暂无",
    writer: [
        {name:"珠希けい", lang:"zh"},
        {name:"寺山宗宏", lang:"zh"}
    ],
    art: [
        {name:"加藤さやか", lang:"zh"}
    ],
    cover: "game/153.jpg", // 相对路径，游戏封面
    charList: [
        // 佐和菜乃香
        {
            id: "g153_f01",
            name: "佐和菜乃香",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/153/Nanoka.jpg"], type: "base" }
            ]
        },
        // 河上彦斎
        {
            id: "g153_m01",
            name: "河上彦斎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/153/Gensai.jpg"], type: "base" }
            ]
        },
        // 坂本龍馬
        {
            id: "g153_m02",
            name: "坂本龍馬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/153/Ryouma.jpg"], type: "base" }
            ]
        },
        // 高杉晋作
        {
            id: "g153_m03",
            name: "高杉晋作",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/153/Shinsaku.jpg"], type: "base" }
            ]
        },
        // 中岡慎太郎
        {
            id: "g153_m04",
            name: "中岡慎太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/153/Shintarou.jpg"], type: "base" }
            ]
        },
        // 沖田総司
        {
            id: "g153_m05",
            name: "沖田総司",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/153/Souji.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
