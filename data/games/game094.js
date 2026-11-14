// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game094", // 全局唯一ID，不可重复，如 game001
    name: "BLACK WOLVES SAGA -Weiβ und Schwarz-",
    year: "2026",
    publisher: ["Otomate","Rejet"],
    cnStudio: "暂无",
    writer: [
        {name:"山田かのこ", lang:"zh"},
        {name:"砂原有季", lang:"zh"},
        {name:"SOM", lang:"en"}
    ],
    art: [
        {name:"黒裄", lang:"zh"}
    ],
    cover: "game/094.jpg", // 相对路径，游戏封面
    charList: [
        // フィオナ·ガーランド
        {
            id: "g094_f01",
            name: "フィオナ·ガーランド",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/094/Fiona.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アルル·V·フェルノア
        {
            id: "g094_m01",
            name: "アルル·V·フェルノア",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/094/Arles.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // オージェ·フォン·ガバルディ
        {
            id: "g094_m02",
            name: "オージェ·フォン·ガバルディ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/094/Auger.jpg"], type: "base" },
            ]
        },
        // ギラン·ギノー
        {
            id: "g094_m03",
            name: "ギラン·ギノー",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/094/Guillan.jpg"], type: "base" },
            ]
        },
        // メヨーヨ·フォン·ガバルディ
        {
            id: "g094_m04",
            name: "メヨーヨ·フォン·ガバルディ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/094/Mejojo.jpg"], type: "base" },
            ]
        },
        // ネッソ·ガーランド
        {
            id: "g094_m05",
            name: "ネッソ·ガーランド",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/094/Nesso.jpg"], type: "base" },
            ]
        },
        // ラス·ヴォガード
        {
            id: "g094_m06",
            name: "ラス·ヴォガード",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/094/Rath.jpg"], type: "base" },
            ]
        },
        // ザラ·スキーンズ
        {
            id: "g094_m07",
            name: "ザラ·スキーンズ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/094/Zara.jpg"], type: "base" },
            ]
        },
        // ユリアン
        {
            id: "g094_fd01",
            name: "ユリアン",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/094/Julian.jpg"], type: "base" }
            ]
        },
        // パール
        {
            id: "g094_fd02",
            name: "パール",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/094/Pearl.jpg"], type: "base" }
            ]
        },
        // リッチー
        {
            id: "g094_fd03",
            name: "リッチー",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/094/Richie.jpg"], type: "base" }
            ]
        },
        // エルザ·クリフォード
        {
            id: "g094_fd04",
            name: "エルザ·クリフォード",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/094/Elza.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
