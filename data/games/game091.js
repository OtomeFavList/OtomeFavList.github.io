// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game091", // 全局唯一ID，不可重复，如 game001
    name: "Blackish House ←sideZ -Retour-",
    year: "2026",
    publisher: ["honeybee black"],
    cnStudio: "暂无",
    writer: [
        {name:"中村幸代", lang:"zh"},
        {name:"高木彩佳", lang:"zh"},
        {name:"坂本美香", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"相川暁子", lang:"zh"},
        {name:"春名佳純", lang:"zh"},
        {name:"葉山いずみ", lang:"zh"},
        {name:"深瀬カエル", lang:"zh"},
        {name:"郡具もえ", lang:"zh"},
        {name:"浅野エミイ", lang:"zh"},
        {name:"日野光里", lang:"zh"},
        {name:"芝原三恵子", lang:"zh"},
        {name:"佐久間yaya", lang:"zh"},
        {name:"株式会社エッジワークス", lang:"zh"},
        {name:"もち大福", lang:"ja"}
    ],
    art: [
        {name:"カズアキ", lang:"ja"}
    ],
    cover: "game/091.jpg", // 相对路径，游戏封面
    charList: [
        // 亜麻乃雛
        {
            id: "g091_f01",
            name: "亜麻乃雛",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/090/Hina.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 阿久根セラ
        {
            id: "g091_m01",
            name: "阿久根セラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/091/Akune.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 有村乃亜
        {
            id: "g091_m02",
            name: "有村乃亜",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/091/Arimura.jpg"], type: "base" },
            ]
        },
        // 桜坂悠翔
        {
            id: "g091_m03",
            name: "桜坂悠翔",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/091/Ousaka.jpg"], type: "base" },
            ]
        },
        // 結城那由多
        {
            id: "g091_m04",
            name: "結城那由多",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/091/Yuuki.jpg"], type: "base" },
            ]
        },
        // 常盤アキト
        {
            id: "g091_s01",
            name: "常盤アキト",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Akito.jpg"], type: "base" }
            ]
        },
        // 三嶋杏
        {
            id: "g091_s02",
            name: "三嶋杏",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/An.jpg"], type: "base" }
            ]
        },
        // 村杜陽月
        {
            id: "g091_s03",
            name: "村杜陽月",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Hizuki.jpg"], type: "base" }
            ]
        },
        // 佐和果鈴
        {
            id: "g091_s04",
            name: "佐和果鈴",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Karin.jpg"], type: "base" }
            ]
        },
        // 久世華純
        {
            id: "g091_s05",
            name: "久世華純",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Kasumi.jpg"], type: "base" }
            ]
        },
        // 姫崎藤吾
        {
            id: "g091_s06",
            name: "姫崎藤吾",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Kisaki.jpg"], type: "base" }
            ]
        },
        // 絢瀬琴乃
        {
            id: "g091_s07",
            name: "絢瀬琴乃",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Kotono.jpg"], type: "base" }
            ]
        },
        // 久世円
        {
            id: "g091_s08",
            name: "久世円",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Kuze.jpg"], type: "base" }
            ]
        },
        // 本郷真奈美
        {
            id: "g091_s09",
            name: "本郷真奈美",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Manami.jpg"], type: "base" }
            ]
        },
        // 倉科繭
        {
            id: "g091_s10",
            name: "倉科繭",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Mayu.jpg"], type: "base" }
            ]
        },
        // 紺之ミサキ
        {
            id: "g091_s11",
            name: "紺之ミサキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Misaki.jpg"], type: "base" }
            ]
        },
        // 早海ナツキ
        {
            id: "g091_s12",
            name: "早海ナツキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Natsuki.jpg"], type: "base" }
            ]
        },
        // 羅々
        {
            id: "g091_s13",
            name: "羅々",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Rala.jpg"], type: "base" }
            ]
        },
        // 宇賀神澪
        {
            id: "g091_s14",
            name: "宇賀神澪",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Rei.jpg"], type: "base" }
            ]
        },
        // 神田麗子
        {
            id: "g091_s15",
            name: "神田麗子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Reiko.jpg"], type: "base" }
            ]
        },
        // 有村遼平
        {
            id: "g091_s16",
            name: "有村遼平",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Ryouhei.jpg"], type: "base" }
            ]
        },
        // 佐伯和泉
        {
            id: "g091_s17",
            name: "佐伯和泉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Saeki.jpg"], type: "base" }
            ]
        },
        // 有村咲乃
        {
            id: "g091_s18",
            name: "有村咲乃",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Sakino.jpg"], type: "base" }
            ]
        },
        // 椎葉剛
        {
            id: "g091_s19",
            name: "椎葉剛",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Shiiba.jpg"], type: "base" }
            ]
        },
        // 吉良トウヤ
        {
            id: "g091_s20",
            name: "吉良トウヤ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Toya.jpg"], type: "base" }
            ]
        },
        // 棗司
        {
            id: "g091_s21",
            name: "棗司",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Tsukasa.jpg"], type: "base" }
            ]
        },
        // 有村歌子
        {
            id: "g091_s22",
            name: "有村歌子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Utako.jpg"], type: "base" }
            ]
        },
        // 興田重虎
        {
            id: "g091_s23",
            name: "興田重虎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Yoda.jpg"], type: "base" }
            ]
        },
        // YUE
        {
            id: "g091_s24",
            name: "YUE",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/091/Yue.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
