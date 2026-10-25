// ✅已核对信息
const gameData = {
    id: "game076", // 全局唯一ID，不可重复，如 game001
    name: "十鬼之绊",
    year: "2026",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"長野和泉", lang:"zh"},
        {name:"春河ミライ", lang:"zh"},
        {name:"春日直登", lang:"zh"},
        {name:"里家雅猛", lang:"zh"},
        {name:"七海ユウリ", lang:"zh"},
        {name:"茂木あや", lang:"zh"}
    ],
    art: [
        {name:"うた", lang:"ja"},
        {name:"miko", lang:"en"}
    ],
    cover: "game/076.jpg", // 相对路径，游戏封面
    charList: [
        // 凉森雪奈
        {
            id: "g076_f01",
            name: "凉森雪奈",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/076/Yukina.jpg",
                            "char/076/Yukina2.jpg"], type: "base" },
            ]
        },
        // 风间千岁
        {
            id: "g076_m01",
            name: "风间千岁",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/076/Chitose.jpg",
                            "char/076/Chitose2.jpg",
                            "char/076/Chitose3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 天雾千岳
        {
            id: "g076_m02",
            name: "天雾千岳",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/076/Kazutake.jpg",
                            "char/076/Kazutake2.jpg",
                            "char/076/Kazutake3.jpg",], type: "base" },
            ]
        },
        // 雪村千耶
        {
            id: "g076_m03",
            name: "雪村千耶",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/076/Kazuya.jpg",
                            "char/076/Kazuya2.jpg",
                            "char/076/Kazuya3.jpg"], type: "base" },
            ]
        },
        // 初霜千鬼丸
        {
            id: "g076_m04",
            name: "初霜千鬼丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/076/Senkimaru.jpg",
                            "char/076/Senkimaru3.jpg"], type: "base" },
                { srcList: ["char/076/Senkimaru2.jpg"], type: "fd" },
            ]
        },
        // 不知火秦
        {
            id: "g076_m05",
            name: "男主5",
            gender: "不知火秦",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["img/char/076/Shin.jpg",
                            "img/char/076/Shin2.jpg",
                            "img/char/076/Shin3.jpg"], type: "base" },
            ]
        },
        // 本多正信
        {
            id: "g076_s01",
            name: "本多正信",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Honda.jpg",
                            "img/char/076/Honda2.jpg"], type: "base" }
            ]
        },
        // 德川家康
        {
            id: "g076_s02",
            name: "德川家康",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Ieyasu.jpg",
                            "img/char/076/Ieyasu2.jpg"], type: "base" }
            ]
        },
        // 石田三成
        {
            id: "g076_s03",
            name: "石田三成",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Ishida.jpg",
                            "img/char/076/Ishida2.jpg"], type: "base" }
            ]
        },
        // 八濑千羽
        {
            id: "g076_s04",
            name: "八濑千羽",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Kazuha.jpg",
                            "img/char/076/Kazuha2.jpg"], type: "base" }
            ]
        },
        // 毛利元康
        {
            id: "g076_s05",
            name: "毛利元康",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Mouri.jpg",
                            "img/char/076/Mouri2.jpg"], type: "base" }
            ]
        },
        // 岛左近
        {
            id: "g076_s06",
            name: "岛左近",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Shima.jpg",
                            "img/char/076/Shima2.jpg"], type: "base" }
            ]
        },
        // 岛津义弘
        {
            id: "g076_s07",
            name: "岛津义弘",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Shimazu.jpg",
                            "img/char/076/Shimazu2.jpg"], type: "base" }
            ]
        },
        // 汐见秋士
        {
            id: "g076_s08",
            name: "汐见秋士",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Shiomi.jpg",
                            "img/char/076/Shiomi2.jpg"], type: "base" }
            ]
        },
        // 酒吞童子
        {
            id: "g076_s09",
            name: "酒吞童子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Shutendouji.jpg",
                            "img/char/076/Shutendouji2.jpg"], type: "base" }
            ]
        },
        // 南云秀
        {
            id: "g076_s10",
            name: "南云秀",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Shuu.jpg",
                            "img/char/076/Shuu2.jpg",
                            "img/char/076/Shuu3.jpg"], type: "base" }
            ]
        },
        // 琴浦透真
        {
            id: "g076_s11",
            name: "琴浦透真",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Touma.jpg",
                            "img/char/076/Touma2.jpg"], type: "base" }
            ]
        },
        // 月岛勲朗
        {
            id: "g076_s12",
            name: "月岛勲朗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Tsukishima.jpg",
                            "img/char/076/Tsukishima2.jpg"], type: "base" }
            ]
        },
        // 宇喜多秀家
        {
            id: "g076_s13",
            name: "宇喜多秀家",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Ukita.jpg",
                            "img/char/076/Ukita2.jpg"], type: "base" }
            ]
        },
        // 胧八千代
        {
            id: "g076_s14",
            name: "胧八千代",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Yachiyo.jpg",
                            "img/char/076/Yachiyo2.jpg",
                            "img/char/076/Yachiyo3.jpg"], type: "base" }
            ]
        },
        // 岛津丰久
        {
            id: "g076_s15",
            name: "岛津丰久",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["img/char/076/Toyohisa.jpg",
                            "img/char/076/Toyohisa2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
