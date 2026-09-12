// data/games/game013.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game013",
    name: "Code:Realize ~创世的公主~",
    year: "2021",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"小縞なお", lang:"zh"},
        {name:"西村悠", lang:"zh"},
        {name:"中山智美", lang:"zh"},
        {name:"有野幸", lang:"zh"}
    ],
    art: [
        {name:"miko", lang:"en"}
    ],
    cover: "game/013.jpg",
    charList: [
        // 卡尔迪娅·贝克福德
        {
            id: "g013_f01",
            name: "卡尔迪娅·贝克福德",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/013/Cardia.jpg",
                            "char/013/Cardia2.jpg"], type: "base" }
            ]
        },
        // 维克多·弗兰肯斯坦
        {
            id: "g013_m01",
            name: "维克多·弗兰肯斯坦",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/013/Frankenstein.jpg",
                            "char/013/Frankenstein2.jpg"], type: "base" }
            ]
        },
        // 圣·日耳曼
        {
            id: "g013_m02",
            name: "圣·日耳曼",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/013/Germain.jpg",
                            "char/013/Germain2.jpg"], type: "base" }
            ]
        },
        // 因倍·巴比康
        {
            id: "g013_m03",
            name: "因倍·巴比康",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/013/Impey.jpg",
                            "char/013/Impey2.jpg"], type: "base" }
            ]
        },
        // 亚森·罗宾
        {
            id: "g013_m04",
            name: "亚森·罗宾",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/013/Lupin.jpg",
                            "char/013/Lupin2.jpg",
                            "char/013/Lupin3.jpg"], type: "base" }
            ]
        },
        // 亚伯拉罕·范·海辛
        {
            id: "g013_m05",
            name: "亚伯拉罕·范·海辛",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/013/Van.jpg",
                            "char/013/Van2.jpg"], type: "base" }
            ]
        },
        // 菲尼斯
        {
            id: "g013_fd01",
            name: "菲尼斯",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/013/Finis.jpg",
                            "char/013/Finis3.jpg"], type: "base" },
                { srcList: ["char/013/Finis2.jpg"], type: "fd" }
            ]
        },
        // 夏尔摩斯
        {
            id: "g013_fd02",
            name: "夏尔摩斯",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: true,
            images: [
                { srcList: ["char/013/Sholmes.jpg"], type: "base" }
            ]
        },
        // 吉米·A·阿利斯特
        {
            id: "g013_s01",
            name: "吉米·A·阿利斯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/013/Arester.jpg"], type: "base" }
            ]
        },
        // 兰巴尔·莱昂哈特
        {
            id: "g013_s02",
            name: "兰巴尔·莱昂哈特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/013/Leonhardt.jpg"], type: "base" }
            ]
        },
        // 桂妮维亚
        {
            id: "g013_s03",
            name: "桂妮维亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/013/Gwenhwyfar.jpg"], type: "base" }
            ]
        },
        // 尼摩
        {
            id: "g013_s04",
            name: "尼摩",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/013/Nemo.jpg"], type: "base" }
            ]
        },
        // 欧姆尼布斯
        {
            id: "g013_s05",
            name: "欧姆尼布斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/013/Omnibus.jpg"], type: "base" }
            ]
        },
        // 茜茜
        {
            id: "g013_s06",
            name: "茜茜",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/013/Sissy.jpg",
                            "char/013/Sissy2.jpg"], type: "base" }
            ]
        },
        // 亚历山德丽娜·维多利亚
        {
            id: "g013_s07",
            name: "亚历山德丽娜·维多利亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/013/Victoria.jpg"], type: "base" }
            ]
        },
        // 艾吉耶男爵
        {
            id: "g013_fs01",
            name: "艾吉耶男爵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/013/Aiguille.jpg"], type: "base" }
            ]
        },
        // 汉赛斯·海克森豪斯
        {
            id: "g013_fs02",
            name: "汉赛斯·海克森豪斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/013/Apostles.jpg"], type: "base" }
            ]
        },
        // 阿维多·克鲁德雷
        {
            id: "g013_fs03",
            name: "配角",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/013/Avido.jpg"], type: "base" }
            ]
        },
        // 坎特雷拉
        {
            id: "g013_fs04",
            name: "坎特雷拉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/013/Cantarella.jpg"], type: "base" }
            ]
        },
        // 大流士·戈登
        {
            id: "g013_fs05",
            name: "大流士·戈登",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/013/Darius.jpg"], type: "base" }
            ]
        },
        // 麦尔斯·斯特兰德
        {
            id: "g013_fs06",
            name: "麦尔斯·斯特兰德",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/013/Miles.jpg"], type: "base" }
            ]
        },
        // 帕西·蒙布朗
        {
            id: "g013_fs07",
            name: "帕西·蒙布朗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/013/Passy.jpg"], type: "base" }
            ]
        },
        // 夏丽·戈登
        {
            id: "g013_fs08",
            name: "夏丽·戈登",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/013/Shirley.jpg"], type: "base" }
            ]
        },
        // 约翰·H·华生
        {
            id: "g013_fs09",
            name: "约翰·H·华生",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/013/Watson.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
