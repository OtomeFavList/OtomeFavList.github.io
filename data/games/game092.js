const gameData = {
    id: "game092", // 全局唯一ID，不可重复，如 game001
    name: "Glass Heart Princess",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"吉村りりか", lang:"zh"},
        {name:"春河ミライ", lang:"zh"}
    ],
    art: [
        {name:"きなみ由希", lang:"ja"}
    ],
    cover: "game/092.jpg", // 相对路径，游戏封面
    charList: [
        // 姫乃京子
        {
            id: "g092_f01",
            name: "姫乃京子",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/092/Kyouko.jpg",
                            "char/092/Kyouko2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 道明寺凱
        {
            id: "g092_m01",
            name: "道明寺凱",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/092/Gai.jpg",
                            "char/092/Gai2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 星野彼方
        {
            id: "g092_m02",
            name: "星野彼方",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/092/Hoshino.jpg",
                            "char/092/Hoshino2.jpg",
                            "char/092/Hoshino3.jpg",
                            "char/092/Hoshino4.jpg"], type: "base" },
            ]
        },
        // 柾木真之介
        {
            id: "g092_m03",
            name: "柾木真之介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/092/Masaki.jpg",
                            "char/092/Masaki2.jpg",
                            "char/092/Masaki3.jpg",
                            "char/092/Masaki4.jpg",
                            "char/092/Masaki5.jpg"], type: "base" },
            ]
        },
        // 朝比奈天馬
        {
            id: "g092_m04",
            name: "朝比奈天馬",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/092/Tenma.jpg",
                            "char/092/Tenma2.jpg",
                            "char/092/Tenma3.jpg",
                            "char/092/Tenma4.jpg",
                            "char/092/Tenma5.jpg"], type: "base" },
            ]
        },
        // 烏丸幸斗
        {
            id: "g092_m05",
            name: "烏丸幸斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/092/Yukito.jpg",
                            "char/092/Yukito2.jpg",
                            "char/092/Yukito3.jpg",
                            "char/092/Yukito4.jpg",
                            "char/092/Yukito5.jpg"], type: "base" },
            ]
        },
        // 千賀皐月
        {
            id: "g092_s01",
            name: "千賀皐月",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/092/Chiga.jpg"], type: "base" }
            ]
        },
        // ジーノ
        {
            id: "g092_s02",
            name: "ジーノ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/092/Gino.jpg"], type: "base" }
            ]
        },
        // 鷲崎篝
        {
            id: "g092_s03",
            name: "鷲崎篝",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/092/Kagari.jpg"], type: "base" }
            ]
        },
        // 星野此方
        {
            id: "g092_s04",
            name: "星野此方",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/092/Konota.jpg"], type: "base" }
            ]
        },
        // 黒江兼定
        {
            id: "g092_s05",
            name: "黒江兼定",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/092/Kuroe.jpg"], type: "base" }
            ]
        },
        // 愛佳
        {
            id: "g092_s06",
            name: "愛佳",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/092/Manaka.jpg"], type: "base" }
            ]
        },
        // 美羽
        {
            id: "g092_s07",
            name: "美羽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/092/Miu.jpg"], type: "base" }
            ]
        },
        // 姫乃門治
        {
            id: "g092_s08",
            name: "姫乃門治",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/092/Monji.jpg"], type: "base" }
            ]
        },
        // 早希
        {
            id: "g092_s09",
            name: "早希",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/092/Saki.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
