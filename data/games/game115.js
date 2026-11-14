// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game115", // 全局唯一ID，不可重复，如 game001
    name: "Lover Pretend",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"青木ひろえ", lang:"zh"},
        {name:"小縞なお", lang:"zh"},
        {name:"有野幸", lang:"zh"},
        {name:"いわた志信", lang:"ja"}
    ],
    art: [
        {name:"藤理ト", lang:"zh"},
        {name:"うた", lang:"ja"}
    ],
    cover: "game/115.jpg", // 相对路径，游戏封面
    charList: [
        // 宇枝ちゆき
        {
            id: "g115_f01",
            name: "宇枝ちゆき",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/115/Chiyuki.jpg",
                            "char/115/Chiyuki2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 浅木詠一郎
        {
            id: "g115_m01",
            name: "浅木詠一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/115/Asagi.jpg",
                            "char/115/Asagi2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 真木野春三
        {
            id: "g115_m02",
            name: "真木野春三",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/115/Harumi.jpg",
                            "char/115/Harumi2.jpg"], type: "base" },
            ]
        },
        // 上久保数馬
        {
            id: "g115_m03",
            name: "上久保数馬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/115/Kazuma.jpg",
                            "char/115/Kazuma2.jpg"], type: "base" },
            ]
        },
        // 西嶋理玖
        {
            id: "g115_m04",
            name: "西嶋理玖",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/115/Riku.jpg",
                            "char/115/Riku2.jpg"], type: "base" },
            ]
        },
        // 瀬名由稀人
        {
            id: "g115_m05",
            name: "瀬名由稀人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/115/Sena.jpg",
                            "char/115/Sena2.jpg"], type: "base" },
            ]
        },
        // 花井隆也
        {
            id: "g115_s01",
            name: "花井隆也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/115/Hanai.jpg",
                            "char/115/Hanai2.jpg"], type: "base" }
            ]
        },
        // 鹿山ゆう
        {
            id: "g115_s02",
            name: "鹿山ゆう",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/115/Kayama.jpg",
                            "char/115/Kayama2.jpg"], type: "base" }
            ]
        },
        // 綺羅梨
        {
            id: "g115_s03",
            name: "綺羅梨",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/115/Kirari.jpg",
                            "char/115/Kirari2.jpg"], type: "base" }
            ]
        },
        // 西嶋浩介
        {
            id: "g115_s04",
            name: "西嶋浩介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/115/Kousuke.jpg",
                            "char/115/Kousuke2.jpg"], type: "base" }
            ]
        },
        // 真木野雄三
        {
            id: "g115_s05",
            name: "真木野雄三",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/115/Makino.jpg",
                            "char/115/Makino2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
