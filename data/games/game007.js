// data/games/game007.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game007",
    name: "Collar×Malice",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"有野幸", lang:"zh"},
        {name:"砂原有季", lang:"zh"},
        {name:"小縞なお", lang:"zh"},
        {name:"いわた志信", lang:"ja"}
    ],
    art: [
        {name:"花邑まい", lang:"zh"}
    ],
    cover: "game/007.jpg",
    charList: [
        // 星野市香
        {
            id: "g007_f01",
            name: "星野市香",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Ichika.jpg",
                            "char/007/Ichika2.jpg",
                            "char/007/Ichika3.jpg"], type: "base" }
            ]
        },
        // 柳爱时
        {
            id: "g007_m01",
            name: "柳爱时",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Aiji.jpg"], type: "base" }
            ]
        },
        // 冈崎契
        {
            id: "g007_m02",
            name: "冈崎契",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Kei.jpg"], type: "base" }
            ]
        },
        // 榎本峰雄
        {
            id: "g007_m03",
            name: "榎本峰雄",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Mineo.jpg"], type: "base" }
            ]
        },
        // 白石景之
        {
            id: "g007_m04",
            name: "白石景之",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Shiraishi.jpg"], type: "base" }
            ]
        },
        // 笹塚尊
        {
            id: "g007_m05",
            name: "笹塚尊",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/007/Takeru.jpg"], type: "base" }
            ]
        },
        // 冴木弓弦
        {
            id: "g007_h01",
            name: "冴木弓弦",
            hiddenName: "Zero",
            gender: "male",
            isHidden: true,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/007/Yuzuru.jpg",
                            "char/007/Yuzuru2.jpg"], type: "base" }
            ]
        },
        // 峰岸誠司
        {
            id: "g007_fd01",
            name: "峰岸誠司",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/007/Minegishi.jpg"], type: "base" }
            ]
        },
        // 吉成秀明
        {
            id: "g007_fd02",
            name: "吉成秀明",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/007/Yoshinari.jpg"], type: "base" }
            ]
        },
        // HANA
        {
            id: "g007_s01",
            name: "HANA",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Hana.jpg"], type: "base" }
            ]
        },
        // 一色康弘
        {
            id: "g007_s02",
            name: "一色康弘",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Isshiki.jpg"], type: "base" }
            ]
        },
        // 星野香月
        {
            id: "g007_s03",
            name: "星野香月",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Kazuki.jpg"], type: "base" }
            ]
        },
        // 御国礼
        {
            id: "g007_s04",
            name: "御国礼",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Mikuni.jpg"], type: "base" }
            ]
        },
        // 望田政信
        {
            id: "g007_s05",
            name: "望田政信",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Mochida.jpg"], type: "base" }
            ]
        },
        // 森丘创
        {
            id: "g007_s06",
            name: "森丘创",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Morioka.jpg"], type: "base" }
            ]
        },
        // 向井绘里子
        {
            id: "g007_s07",
            name: "向井绘里子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Mukai.jpg"], type: "base" }
            ]
        },
        // 绪方智树
        {
            id: "g007_s08",
            name: "绪方智树",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Ogata.jpg"], type: "base" }
            ]
        },
        // 樱川寿
        {
            id: "g007_s09",
            name: "樱川寿",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Sakuragawa.jpg"], type: "base" }
            ]
        },
        // 山条圭介
        {
            id: "g007_s10",
            name: "山条圭介",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Sanjou.jpg"], type: "base" }
            ]
        },
        // 佐竹建造
        {
            id: "g007_s11",
            name: "佐竹建造",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Satake.jpg"], type: "base" }
            ]
        },
        // 濑良秋人
        {
            id: "g007_s12",
            name: "濑良秋人",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Sera.jpg"], type: "base" }
            ]
        },
        // 宇野诗音
        {
            id: "g007_s13",
            name: "宇野诗音",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Shion.jpg"], type: "base" }
            ]
        },
        // 相田学
        {
            id: "g007_s14",
            name: "相田学",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Souda.jpg"], type: "base" }
            ]
        },
        // 菅原理香
        {
            id: "g007_s15",
            name: "菅原理香",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Sugawara.jpg"], type: "base" }
            ]
        },
        // 宇野铃音
        {
            id: "g007_s16",
            name: "宇野铃音",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Suzune.jpg"], type: "base" }
            ]
        },
        // 鹰枝勇作
        {
            id: "g007_s17",
            name: "鹰枝勇作",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/007/Takaeda.jpg"], type: "base" }
            ]
        },
        // 染谷友香
        {
            id: "g007_fs01",
            name: "染谷友香",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/007/Someya.jpg"], type: "base" }
            ]
        },
        // 橘千圣
        {
            id: "g007_fs02",
            name: "橘千圣",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/007/Tachibana.jpg"], type: "base" }
            ]
        },
        // 柳优时
        {
            id: "g007_fs03",
            name: "柳优时",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/007/Yuuji.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
