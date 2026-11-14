// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game116", // 全局唯一ID，不可重复，如 game001
    name: "猛獣たちとお姫様",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"吉村りりか", lang:"zh"},
        {name:"森田彩莉", lang:"zh"},
        {name:"山崎浅吏", lang:"zh"},
        {name:"桜葉ユウ", lang:"zh"},
        {name:"ちゃい", lang:"ja"},
        {name:"ムネオカミエ", lang:"ja"}
    ],
    art: [
        {name:"紫あや", lang:"zh"}
    ],
    cover: "game/116.jpg", // 相对路径，游戏封面
    charList: [
        // ユーリア
        {
            id: "g116_f01",
            name: "ユーリア",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/116/Julia3.jpg",
                            "char/116/Julia.jpg",
                            "char/116/Julia2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ヘンリク
        {
            id: "g116_m01",
            name: "ヘンリク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/116/Henryk4.jpg",
                            "char/116/Henryk.jpg",
                            "char/116/Henryk2.jpg",
                            "char/116/Henryk3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // ユゼフ
        {
            id: "g116_m02",
            name: "ユゼフ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/116/Jozef4.jpg",
                            "char/116/Jozef.jpg",
                            "char/116/Jozef2.jpg",
                            "char/116/Jozef3.jpg"], type: "base" },
            ]
        },
        // ルドヴィク
        {
            id: "g116_m03",
            name: "ルドヴィク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/116/Ludwik4.jpg",
                            "char/116/Ludwik.jpg",
                            "char/116/Ludwik2.jpg",
                            "char/116/Ludwik3.jpg"], type: "base" },
            ]
        },
        // ミアーシュ
        {
            id: "g116_m04",
            name: "ミアーシュ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/116/Mias4.jpg",
                            "char/116/Mias.jpg",
                            "char/116/Mias2.jpg",
                            "char/116/Mias3.jpg"], type: "base" },
            ]
        },
        // リシャルト
        {
            id: "g116_m05",
            name: "リシャルト",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/116/Ryszard4.jpg",
                            "char/116/Ryszard.jpg",
                            "char/116/Ryszard2.jpg",
                            "char/116/Ryszard3.jpg"], type: "base" },
            ]
        },
        // タルメ
        {
            id: "g116_fd01",
            name: "タルメ",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/116/Czarny2.jpg",
                            "char/116/Czarny.jpg"], type: "base" },
            ]
        },
        // 魔術師
        {
            id: "g116_fd02",
            name: "魔術師",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/116/Czarodziej4.jpg",
                            "char/116/Czarodziej.jpg",
                            "char/116/Czarodziej2.jpg",
                            "char/116/Czarodziej3.jpg"], type: "base" },
            ]
        },
        // アデーレ
        {
            id: "g116_s01",
            name: "アデーレ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/116/Adele2.jpg",
                            "char/116/Adele.jpg"], type: "base" }
            ]
        },
        // バルトルト
        {
            id: "g116_s02",
            name: "バルトルト",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/116/Barthold2.jpg",
                            "char/116/Barthold.jpg"], type: "base" }
            ]
        },
        // フベルト
        {
            id: "g116_s03",
            name: "フベルト",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/116/Hubert2.jpg",
                            "char/116/Hubert.jpg"], type: "base" }
            ]
        },
        // イグナツィ
        {
            id: "g116_s04",
            name: "イグナツィ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/116/Ignacy2.jpg",
                            "char/116/Ignacy.jpg"], type: "base" }
            ]
        },
        // マレク
        {
            id: "g116_s05",
            name: "マレク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/116/Marek2.jpg",
                            "char/116/Marek.jpg"], type: "base" }
            ]
        },
        // ムローク
        {
            id: "g116_s06",
            name: "ムローク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/116/Mrok2.jpg",
                            "char/116/Mrok.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
