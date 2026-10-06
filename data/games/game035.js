// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game035", // 全局唯一ID，不可重复
    name: "BUSTAFELLOWS",
    year: "2024",
    publisher: ["eXtend"],
    cnStudio: "GSE",
    writer: [
        {name:"minetaka", lang:"en"}
    ],
    art: [
        {name:"すめらぎ琥珀", lang:"ja"}
    ],
    cover: "game/035.jpg",
    charList: [
        // 特乌塔·布里吉斯
        {
            id: "g035_f01",
            name: "特乌塔·布里吉斯",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/035/Teuta.jpg",
                            "char/035/Teuta2.jpg",
                            "char/035/Teuta3.jpg",
                            "char/035/Teuta4.jpg"], type: "base" }
            ]
        },
        // 赫尔贝奇卡·阿斯泰兹
        {
            id: "g035_m01",
            name: "赫尔贝奇卡·阿斯泰兹",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/035/Helvetica.jpg",
                            "char/035/Helvetica2.jpg",
                            "char/035/Helvetica3.jpg"], type: "base" },
                { srcList: ["char/035/Helvetica4.jpg"], type: "fd" }
            ]
        },
        // 林波·斯科特·菲茨杰拉德
        {
            id: "g035_m02",
            name: "林波·斯科特·菲茨杰拉德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/035/Limbo.jpg",
                            "char/035/Limbo2.jpg",
                            "char/035/Limbo3.jpg"], type: "base" },
                { srcList: ["char/035/Limbo4.jpg"], type: "fd" }
            ]
        },
        // 莫兹·尼尔·谢帕德
        {
            id: "g035_m03",
            name: "莫兹·尼尔·谢帕德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/035/Mozu.jpg",
                            "char/035/Mozu2.jpg",
                            "char/035/Mozu3.jpg"], type: "base" },
                { srcList: ["char/035/Mozu4.jpg"], type: "fd" }
            ]
        },
        // 斯卡克罗
        {
            id: "g035_m04",
            name: "斯卡克罗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/035/Scarecrow.jpg",
                            "char/035/Scarecrow2.jpg",
                            "char/035/Scarecrow3.jpg"], type: "base" },
                { srcList: ["char/035/Scarecrow4.jpg"], type: "fd" }
            ]
        },
        // 修·林恩·奥基弗
        {
            id: "g035_m05",
            name: "修·林恩·奥基弗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/035/Shu.jpg",
                            "char/035/Shu2.jpg",
                            "char/035/Shu3.jpg"], type: "base" },
                { srcList: ["char/035/Shu4.jpg"], type: "fd" }
            ]
        },
        // 亚当·克鲁伊洛夫
        {
            id: "g035_h01",
            name: "亚当·克鲁伊洛夫",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/035/Adam.jpg",
                            "char/035/Adam2.jpg"], type: "base" }
            ]
        },
        // 亚历克斯·拉特利夫
        {
            id: "g035_s01",
            name: "亚历克斯·拉特利夫",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Alex.jpg"], type: "base" },
                { srcList: ["char/035/Alex2.jpg"], type: "fd" }
            ]
        },
        // 卡门·范赞特
        {
            id: "g035_s02",
            name: "卡门·范赞特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Carmen.jpg",
                            "char/035/Carmen2.jpg"], type: "base" }
            ]
        },
        // 猫
        {
            id: "g035_s03",
            name: "猫",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Cat.jpg"], type: "base" }
            ]
        },
        // 艾唯·麦考德
        {
            id: "g035_s04",
            name: "艾唯·麦考德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Ivy.jpg"], type: "base" }
            ]
        },
        // 露卡·迪安德烈
        {
            id: "g035_s05",
            name: "露卡·迪安德烈",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Luka.jpg",
                            "char/035/Luka2.jpg"], type: "base" }
            ]
        },
        // 玛格达·埃斯皮诺萨
        {
            id: "g035_s06",
            name: "玛格达·埃斯皮诺萨",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Magda.jpg"], type: "base" }
            ]
        },
        // 佩佩·唐纳文
        {
            id: "g035_s07",
            name: "佩佩·唐纳文",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Pepe.jpg",
                            "char/035/Pepe2.jpg"], type: "base" }
            ]
        },
        // 沙利·约翰森·阿斯泰兹
        {
            id: "g035_s08",
            name: "沙利·约翰森·阿斯泰兹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Sauli.jpg",
                            "char/035/Sauli2.jpg"], type: "base" }
            ]
        },
        // 特洛伊·卡斯提亚诺斯
        {
            id: "g035_s09",
            name: "特洛伊·卡斯提亚诺斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Troy.jpg"], type: "base" }
            ]
        },
        // 瓦莱丽·佐伊·菲茨杰拉德
        {
            id: "g035_s10",
            name: "瓦莱丽·佐伊·菲茨杰拉德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Valerie.jpg"], type: "base" }
            ]
        },
        // 阳·林恩·奥基弗
        {
            id: "g035_s11",
            name: "阳·林恩·奥基弗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Yang.jpg",
                            "char/035/Yang2.jpg"], type: "base" }
            ]
        },
        // 佐拉·布里吉斯
        {
            id: "g035_s12",
            name: "佐拉·布里吉斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Zora.jpg"], type: "base" }
            ]
        },
        // 纳维德·雷诺兹
        {
            id: "g035_s13",
            name: "纳维德·雷诺兹",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/035/Navid.jpg"], type: "base" }
            ]
        },
        // Ally
        {
            id: "g035_fs01",
            name: "Ally",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Ally.jpg"], type: "base" }
            ]
        },
        // Chika
        {
            id: "g035_fs02",
            name: "Chika",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Chika.jpg"], type: "base" }
            ]
        },
        // Dahee
        {
            id: "g035_fs03",
            name: "Dahee",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Dahee.jpg"], type: "base" }
            ]
        },
        // Guero
        {
            id: "g035_fs04",
            name: "Guero",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Guero.jpg"], type: "base" }
            ]
        },
        // Juno
        {
            id: "g035_fs05",
            name: "Juno",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Juno.jpg"], type: "base" }
            ]
        },
        // Nora
        {
            id: "g035_fs06",
            name: "Nora",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Nora.jpg"], type: "base" }
            ]
        },
        // Renée
        {
            id: "g035_fs07",
            name: "Renée",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Renee.jpg"], type: "base" }
            ]
        },
        // Ricardo
        {
            id: "g035_fs08",
            name: "Ricardo",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Ricardo.jpg"], type: "base" }
            ]
        },
        // Sid
        {
            id: "g035_fs09",
            name: "Sid",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Sid.jpg"], type: "base" }
            ]
        },
        // Watcher
        {
            id: "g035_fs10",
            name: "Watcher",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Watcher.jpg"], type: "base" }
            ]
        },
        // Yara
        {
            id: "g035_fs11",
            name: "Yara",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/035/Yara.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
