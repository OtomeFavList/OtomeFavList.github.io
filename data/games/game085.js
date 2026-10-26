// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game085", // 全局唯一ID，不可重复，如 game001
    name: "BYAKKO ~四神部隊炎恋記~",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"嶋野まち", lang:"zh"},
        {name:"影山千博", lang:"zh"},
        {name:"彩月レイ", lang:"zh"},
        {name:"呉西しの", lang:"zh"},
        {name:"景山千博", lang:"zh"},
        {name:"合同会社Re,AER", lang:"zh"}
    ],
    art: [
        {name:"煮たか", lang:"zh"}
    ],
    cover: "game/085.jpg",
    charList: [
        // 佐野ゆずりは
        {
            id: "g085_f01",
            name: "佐野ゆずりは",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/085/Yuzuriha.jpg",
                            "char/085/Yuzuriha2.jpg",
                            "char/085/Yuzuriha3.png",
                            "char/085/Yuzuriha4.png"], type: "base" },
            ]
        },
        // 秋月栄次郎
        {
            id: "g085_m01",
            name: "秋月栄次郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/085/Akizuki.jpg",
                            "char/085/Akizuki2.jpg",
                            "char/085/Akizuki3.png",
                            "char/085/Akizuki4.png"], type: "base" },
            ]
        },
        // 飯山貞吉
        {
            id: "g085_m02",
            name: "飯山貞吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/085/Iiyama.jpg",
                            "char/085/Iiyama2.jpg",
                            "char/085/Iiyama3.png",
                            "char/085/Iiyama4.png"], type: "base" },
            ]
        },
        // 石谷虎之助
        {
            id: "g085_m03",
            name: "石谷虎之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/085/Ishiya.jpg",
                            "char/085/Ishiya2.jpg",
                            "char/085/Ishiya3.png",
                            "char/085/Ishiya4.png"], type: "base" },
            ]
        },
        // 神崎宗十郎
        {
            id: "g085_m04",
            name: "神崎宗十郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/085/Kanzaki.jpg",
                            "char/085/Kanzaki2.jpg",
                            "char/085/Kanzaki3.png",
                            "char/085/Kanzaki4.png"], type: "base" },
            ]
        },
        // 岡本三郎
        {
            id: "g085_m05",
            name: "岡本三郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/085/Okamoto.jpg",
                            "char/085/Okamoto2.jpg",
                            "char/085/Okamoto3.png",
                            "char/085/Okamoto4.png"], type: "base" },
            ]
        },
        // 山瀬大蔵
        {
            id: "g085_m06",
            name: "山瀬大蔵",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/085/Yamase.jpg",
                            "char/085/Yamase2.jpg",
                            "char/085/Yamase3.png",
                            "char/085/Yamase4.png"], type: "base" },
            ]
        },
        // 白虎神
        {
            id: "g086_s01",
            name: "白虎神",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/085/Byakkoshin.jpg",
                            "char/085/Byakkoshin2.jpg",
                            "char/085/Byakkoshin3.png"], type: "base" }
            ]
        },
        // 佐川半兵衛
        {
            id: "g086_s02",
            name: "佐川半兵衛",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/085/Hanbee.jpg",
                            "char/085/Hanbee2.jpg",
                            "char/085/Hanbee3.png"], type: "base" }
            ]
        },
        // 松科容保
        {
            id: "g086_s03",
            name: "松科容保",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/085/Katamori.jpg",
                            "char/085/Katamori2.jpg",
                            "char/085/Katamori3.png"], type: "base" }
            ]
        },
        // 日比野内記
        {
            id: "g086_s04",
            name: "日比野内記",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/085/Naiki.jpg",
                            "char/085/Naiki2.jpg",
                            "char/085/Naiki3.png"], type: "base" }
            ]
        },
        // 神保咲子
        {
            id: "g086_s05",
            name: "神保咲子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/085/Sakiko.jpg",
                            "char/085/Sakiko2.jpg",
                            "char/085/Sakiko3.png"], type: "base" }
            ]
        },
        // 佐野善一郎
        {
            id: "g086_s06",
            name: "佐野善一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/085/Sano.jpg",
                            "char/085/Sano2.jpg",
                            "char/085/Sano3.png"], type: "base" }
            ]
        },
        // 東屋千吉
        {
            id: "g086_s07",
            name: "東屋千吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/085/Senkichi.jpg",
                            "char/085/Senkichi2.jpg",
                            "char/085/Senkichi3.png"], type: "base" }
            ]
        },
        // 岡本八重
        {
            id: "g086_s08",
            name: "岡本八重",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/085/Yae.jpg",
                            "char/085/Yae2.jpg",
                            "char/085/Yae3.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
