// data/games/game027.js
// ✅已核对信息
const gameData = {
    id: "game028", // 全局唯一ID，不可重复
    name: "华彩煌煌，吾之一族 摩登时代",
    year: "2023",
    publisher: ["ichicolumn","Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"高木亜由美", lang:"zh"}
    ],
    art: [
        {name:"ユウヤ", lang:"ja"}
    ],
    cover: "game/028.jpg",
    charList: [
        // 浅木春
        {
            id: "g028_f01",
            name: "浅木春",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/028/Haru.jpg"], type: "base" },
                { srcList: ["char/028/Haru2.jpg",
                            "char/028/Haru3.jpg"], type: "fd" }
            ]
        },
        // 宫之杜博
        {
            id: "g028_m01",
            name: "宫之杜博",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/028/Hiroshi.jpg"], type: "base" },
                { srcList: ["char/028/Hiroshi2.jpg",
                            "char/028/Hiroshi3.jpg"], type: "fd" }
            ]
        },
        // 宫之杜勇
        {
            id: "g028_m02",
            name: "宫之杜勇",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/028/Isami.jpg"], type: "base" },
                { srcList: ["char/028/Isami2.jpg",
                            "char/028/Isami3.jpg"], type: "fd" }
            ]
        },
        // 宫之杜雅
        {
            id: "g028_m03",
            name: "宫之杜雅",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/028/Masashi.jpg"], type: "base" },
                { srcList: ["char/028/Masashi2.jpg",
                            "char/028/Masashi3.jpg"], type: "fd" }
            ]
        },
        // 宫之杜茂
        {
            id: "g028_m04",
            name: "宫之杜茂",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/028/Shigeru.jpg"], type: "base" },
                { srcList: ["char/028/Shigeru2.jpg",
                            "char/028/Shigeru3.jpg"], type: "fd" }
            ]
        },
        // 宫之杜进
        {
            id: "g028_m05",
            name: "宫之杜进",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/028/Susumu.jpg"], type: "base" },
                { srcList: ["char/028/Susumu2.jpg",
                            "char/028/Susumu3.jpg"], type: "fd" }
            ]
        },
        // 宫之杜正
        {
            id: "g028_m06",
            name: "宫之杜正",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/028/Tadashi.jpg"], type: "base" },
                { srcList: ["char/028/Tadashi2.jpg",
                            "char/028/Tadashi3.jpg"], type: "fd" }
            ]
        },
        // 宫之杜守
        {
            id: "g028_h01",
            name: "宫之杜守",
            gender: "male",
            isHidden: true,
            isFD: true,
            images: [
                { srcList: ["char/028/Mamoru.jpg",
                            "char/028/Mamoru2.jpg",
                            "char/028/Mamoru3.jpg"], type: "base" }
            ]
        },
        // 有田喜助
        {
            id: "g028_fd01",
            name: "有田喜助",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/028/Arita.jpg"], type: "base" }
                { srcList: ["char/028/Arita2.jpg",
                            "char/028/Arita3.jpg"], type: "fd" }
            ]
        },
        // 江川千富
        {
            id: "g028_s01",
            name: "江川千富",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/028/Chitomi.jpg"], type: "base" }
            ]
        },
        // 伊村千代子
        {
            id: "g028_s02",
            name: "伊村千代子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/028/Chiyoko.jpg"], type: "base" }
            ]
        },
        // 宫之杜玄一郎
        {
            id: "g028_s03",
            name: "宫之杜玄一郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/028/Genichiro.jpg"], type: "base" }
            ]
        },
        // 加贺野平助
        {
            id: "g028_s04",
            name: "加贺野平助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/028/Heisuke.jpg"], type: "base" }
            ]
        },
        // 有吉文子
        {
            id: "g028_s05",
            name: "有吉文子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/028/Humiko.jpg"], type: "base" }
            ]
        },
        // 澄田佐奈枝
        {
            id: "g028_s06",
            name: "澄田佐奈枝",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/028/Sanae.jpg"], type: "base" }
            ]
        },
        // 家寿田静子
        {
            id: "g028_s07",
            name: "家寿田静子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/028/Shizuko.jpg"], type: "base" }
            ]
        },
        // 杉村多惠
        {
            id: "g028_s08",
            name: "杉村多惠",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/028/Tae.jpg"], type: "base" }
            ]
        },
        // 本条院登喜
        {
            id: "g028_s09",
            name: "本条院登喜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/028/Toki.jpg"], type: "base" }
            ]
        },
        // 佐伯由
        {
            id: "g028_s10",
            name: "佐伯由",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/028/Yoshi.jpg"], type: "base" }
            ]
        },
        // 小野田秀男
        {
            id: "g028_fs01",
            name: "小野田秀男",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/028/Hideo.jpg"], type: "base" }
            ]
        },
        // 芦田加与子
        {
            id: "g028_fs02",
            name: "芦田加与子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/028/Kayoko.jpg"], type: "base" }
            ]
        },
        // 馆野成信
        {
            id: "g028_fs03",
            name: "馆野成信",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/028/Narinobu.jpg"], type: "base" }
            ]
        },
        // 馆野毅
        {
            id: "g028_fs04",
            name: "馆野毅",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/028/Takeshi.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
