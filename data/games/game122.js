// ⚠️立绘差分未制作
const gameData = {
    id: "game122", // 全局唯一ID，不可重复，如 game001
    name: "私立ベルばら学園 ~ベルサイユのばらRe*imagination~",
    year: "2019",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"遠野チハル", lang:"zh"},
        {name:"浦井アンナ", lang:"zh"},
        {name:"吉田夏美", lang:"zh"},
        {name:"清水花歩", lang:"zh"},
        {name:"高橋香里", lang:"zh"}
    ],
    art: [
        {name:"東狐もず", lang:"zh"}
    ],
    cover: "game/122.jpg", // 相对路径，游戏封面
    charList: [
        // 山田凰寿華瑠
        {
            id: "g122_f01",
            name: "山田凰寿華瑠",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/122/Oscar.jpg",
                            "char/122/Oscar2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 有栖川マリ
        {
            id: "g122_f02",
            name: "有栖川マリ",
            gender: "female",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/122/Mari.jpg"], type: "base" },
            ]
        },
        // 真輝望
        {
            id: "g122_f03",
            name: "真輝望",
            gender: "female",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/122/Maki.jpg",
                            "char/122/Maki2.jpg"], type: "base" },
            ]
        },
        // 衛藤晶
        {
            id: "g122_m01",
            name: "衛藤晶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/122/Akira.jpg",
                            "char/122/Akira2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 羽鳥·ユース·アクセル
        {
            id: "g122_m02",
            name: "羽鳥·ユース·アクセル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/122/Hatori.jpg",
                            "char/122/Hatori2.jpg"], type: "base" },
            ]
        },
        // 明智優
        {
            id: "g122_m04",
            name: "明智優",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/122/Yuu.jpg",
                            "char/122/Yuu2.jpg"], type: "base" },
            ]
        },
        // 鈴村一騎
        {
            id: "g122_h01",
            name: "鈴村一騎",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/122/Sazuki.jpg"], type: "base" },
            ]
        },
        // 安藤礼二
        {
            id: "g122_s01",
            name: "安藤礼二",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Andou.jpg"], type: "base" }
            ]
        },
        // ベルローズ学園長
        {
            id: "g122_s02",
            name: "ベルローズ学園長",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Belrose.jpg"], type: "base" }
            ]
        },
        // シャルル
        {
            id: "g122_s03",
            name: "シャルル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Charles.jpg"], type: "base" }
            ]
        },
        // 花野ラヴィアンローズ
        {
            id: "g122_s04",
            name: "花野ラヴィアンローズ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Hanano.jpg"], type: "base" }
            ]
        },
        // 星空ヒカル
        {
            id: "g122_s05",
            name: "星空ヒカル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Hikaru.jpg"], type: "base" }
            ]
        },
        // 清水イツキ
        {
            id: "g122_s06",
            name: "清水イツキ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Itsuki.jpg"], type: "base" }
            ]
        },
        // 黒沢潤子
        {
            id: "g122_s07",
            name: "黒沢潤子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Junko.jpg"], type: "base" }
            ]
        },
        // ル·ルー
        {
            id: "g122_s08",
            name: "ル·ルー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Loulou.jpg"], type: "base" }
            ]
        },
        // フィリップ·ハンソン
        {
            id: "g122_s10",
            name: "フィリップ·ハンソン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Philippe.jpg"], type: "base" }
            ]
        },
        // 姫宮りか
        {
            id: "g122_s11",
            name: "姫宮りか",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Rika.jpg"], type: "base" }
            ]
        },
        // ピエール皇
        {
            id: "g122_s12",
            name: "ピエール皇",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Sumeragi.jpg"], type: "base" }
            ]
        },
        // 山田のばら
        {
            id: "g122_s13",
            name: "山田のばら",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Yamada.jpg"], type: "base" }
            ]
        },
        // 白鳥由香里
        {
            id: "g122_s14",
            name: "白鳥由香里",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/122/Yukari.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
