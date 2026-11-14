// ⚠️FD内容未添加/FDAnotherSky官网差分未制作
const gameData = {
    id: "game140", // 全局唯一ID，不可重复，如 game001
    name: "金色のコルダ３フルボイスSpecial",
    year: "2018",
    publisher: ["KOEI"],
    cnStudio: "暂无",
    writer: [
        {name:"Ruby Party", lang:"en"}
    ],
    art: [
        {name:"呉由姫", lang:"zh"}
    ],
    cover: "game/140.jpg", // 相对路径，游戏封面
    charList: [
        // 小日向かなで
        {
            id: "g140_f01",
            name: "小日向かなで",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/140/Kanade.jpg",
                            "char/140/Kanade2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 水嶋新
        {
            id: "g140_m01",
            name: "水嶋新",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Arata.jpg",
                            "char/140/Arata2.png",
                            "char/140/Arata3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 東金千秋
        {
            id: "g140_m02",
            name: "東金千秋",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Chiaki.jpg",
                            "char/140/Chiaki2.png",
                            "char/140/Chiaki3.jpg"], type: "base" },
            ]
        },
        // 榊大地
        {
            id: "g140_m03",
            name: "榊大地",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Daichi.jpg",
                            "char/140/Daichi2.png",
                            "char/140/Daichi3.jpg"], type: "base" },
            ]
        },
        // 水嶋悠人
        {
            id: "g140_m04",
            name: "水嶋悠人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Haruto.jpg",
                            "char/140/Haruto2.png",
                            "char/140/Haruto3.jpg"], type: "base" },
            ]
        },
        // 土岐蓬生
        {
            id: "g140_m05",
            name: "土岐蓬生",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Housei.jpg",
                            "char/140/Housei2.png",
                            "char/140/Housei3.jpg"], type: "base" },
            ]
        },
        // 如月響也
        {
            id: "g140_m06",
            name: "如月響也",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Kyouya.jpg",
                            "char/140/Kyouya2.png",
                            "char/140/Kyouya3.jpg"], type: "base" },
            ]
        },
        // 冥加玲士
        {
            id: "g140_m07",
            name: "冥加玲士",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Reiji.jpg",
                            "char/140/Reiji2.png",
                            "char/140/Reiji3.jpg"], type: "base" },
            ]
        },
        // 如月律
        {
            id: "g140_m08",
            name: "如月律",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Ritsu.jpg",
                            "char/140/Ritsu2.png",
                            "char/140/Ritsu3.jpg"], type: "base" },
            ]
        },
        // 天宮静
        {
            id: "g140_m09",
            name: "天宮静",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Sei.jpg",
                            "char/140/Sei2.png",
                            "char/140/Sei3.jpg"], type: "base" },
            ]
        },
        // 火積司郎
        {
            id: "g140_m10",
            name: "火積司郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Shirou.jpg",
                            "char/140/Shirou2.png",
                            "char/140/Shirou3.jpg"], type: "base" },
            ]
        },
        // 七海宗介
        {
            id: "g140_m11",
            name: "七海宗介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Sousuke.jpg",
                            "char/140/Sousuke2.png",
                            "char/140/Sousuke3.jpg"], type: "base" },
            ]
        },
        // 八木沢雪広
        {
            id: "g140_m12",
            name: "八木沢雪広",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/140/Yukihiro.jpg",
                            "char/140/Yukihiro2.png",
                            "char/140/Yukihiro3.jpg"], type: "base" },
            ]
        },
        // 円城寺阿蘭
        {
            id: "g140_fd01",
            name: "円城寺阿蘭",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/140/Aran.jpg",
                            "char/140/Aran2.png"], type: "base" },
            ]
        },
        // 氷渡貴史
        {
            id: "g140_fd02",
            name: "氷渡貴史",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/140/Hido.jpg"], type: "base" },
            ]
        },
        // 芹沢睦
        {
            id: "g140_fd03",
            name: "芹沢睦",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/140/Mutsumi.jpg"], type: "base" },
            ]
        },
        // 長嶺雅紀
        {
            id: "g140_fd04",
            name: "長嶺雅紀",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/140/Nagamine.jpg"], type: "base" },
            ]
        },
        // 支倉仁亜
        {
            id: "g140_fd05",
            name: "支倉仁亜",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/140/Nia.jpg",
                            "char/140/Nia2.png"], type: "base" },
            ]
        },
        // 支倉宇宙
        {
            id: "g140_fd06",
            name: "支倉宇宙",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/140/Sora.jpg",
                            "char/140/Sora2.png"], type: "base" },
            ]
        },
        // 須永巧
        {
            id: "g140_fd07",
            name: "須永巧",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/140/Sunaga.jpg"], type: "base" },
            ]
        },
        // トーノ
        {
            id: "g140_fd08",
            name: "トーノ",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/140/Tono.jpg",
                            "char/140/Tono2.png"], type: "base" },
            ]
        },
        // 伊織浩平
        {
            id: "g140_s01",
            name: "伊織浩平",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/140/Iori.jpg",
                            "char/140/Iori2.png"], type: "base" }
            ]
        },
        // 御影涼子
        {
            id: "g140_s02",
            name: "御影涼子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/140/Ryouko.jpg",
                            "char/140/Ryouko2.png"], type: "base" }
            ]
        },
        // 冥加枝織
        {
            id: "g140_s03",
            name: "冥加枝織",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/140/Shiori.jpg",
                            "char/140/Shiori2.png"], type: "base" }
            ]
        },
        // 狩野航
        {
            id: "g140_s04",
            name: "狩野航",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/140/Wataru.jpg",
                            "char/140/Wataru2.png"], type: "base" }
            ]
        },
        // アレクセイ·ジューコフ
        {
            id: "g140_s05",
            name: "アレクセイ·ジューコフ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/140/Alexei.jpg",
                            "char/140/Alexei2.png"], type: "base" }
            ]
        },
        // 円城寺冴香
        {
            id: "g140_s06",
            name: "円城寺冴香",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/140/Saeka.jpg"], type: "base" }
            ]
        },
        // 東金源一
        {
            id: "g140_fs01",
            name: "東金源一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/140/Genyichi.jpg",
                            "char/140/Genyichi2.png"], type: "base" }
            ]
        },
        // 碓氷穗乃香
        {
            id: "g140_fs02",
            name: "碓氷穗乃香",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/140/Honoka.jpg",
                            "char/140/Honoka2.png"], type: "base" }
            ]
        },
        // 照辺一寿
        {
            id: "g140_fs03",
            name: "照辺一寿",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/140/Kazutoshi.jpg",
                            "char/140/Kazutoshi2.png"], type: "base" }
            ]
        },
        // 小倉宗一郎
        {
            id: "g140_fs04",
            name: "小倉宗一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/140/Ogura.jpg"], type: "base" }
            ]
        },
        // 阿藤啓太
        {
            id: "g140_fs05",
            name: "阿藤啓太",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/140/Keita.jpg",
                            "char/140/Keita2.png"], type: "base" }
            ]
        },
        // 目時文吾
        {
            id: "g140_fs06",
            name: "目時文吾",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/140/Meji.jpg",
                            "char/140/Meji2.png"], type: "base" }
            ]
        },
        // 江波紫音
        {
            id: "g140_fs07",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/140/Shion.jpg",
                            "char/140/Shion2.png"], type: "base" }
            ]
        },
        // 火原和樹
        {
            id: "g140_fs08",
            name: "火原和樹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/140/Kazuki.jpg",
                            "char/140/Kazuki2.png"], type: "base" }
            ]
        },
        // 月森蓮
        {
            id: "g140_fs09",
            name: "月森蓮",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/139/Ren5.jpg"], type: "base" }
            ]
        },
        // 土浦梁太郎
        {
            id: "g140_fs010",
            name: "土浦梁太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/139/Ryoutarou5.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
