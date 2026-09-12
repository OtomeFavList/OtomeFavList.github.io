// data/games/game016.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game016",
    name: "终远的威尔修 -ErroR:salvation-",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"中山智美", lang:"zh"},
        {name:"夕月", lang:"zh"},
        {name:"浅海藍子", lang:"zh"}
    ],
    art: [
        {name:"読", lang:"zh"}
    ],
    cover: "game/016.jpg",
    charList: [
        // 瑟蕾思
        {
            id: "g016_f01",
            name: "瑟蕾思",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/016/Ceres.jpg",
                            "char/016/Ceres2.jpg"], type: "base" }
            ]
        },
        // 阿道夫
        {
            id: "g016_m01",
            name: "阿道夫",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/016/Adolphe.jpg",
                            "char/016/Adolphe2.jpg"], type: "base" }
            ]
        },
        // 安库
        {
            id: "g016_m02",
            name: "安库",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/016/Ankou.jpg",
                            "char/016/Ankou2.jpg"], type: "base" }
            ]
        },
        // 璐卡·普鲁斯特
        {
            id: "g016_m03",
            name: "璐卡·普鲁斯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/016/Lucas.jpg",
                            "char/016/Lucas2.jpg"], type: "base" }
            ]
        },
        // 马蒂斯·克洛德
        {
            id: "g016_m04",
            name: "马蒂斯·克洛德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/016/Mathis.jpg",
                            "char/016/Mathis2.jpg"], type: "base" }
            ]
        },
        // 席安·布洛菲沃思
        {
            id: "g016_m05",
            name: "席安·布洛菲沃思",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/016/Scien.jpg",
                            "char/016/Scien2.jpg"], type: "base" }
            ]
        },
        // 伊孚
        {
            id: "g016_m06",
            name: "伊孚",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/016/Yves.jpg",
                            "char/016/Yves2.jpg"], type: "base" }
            ]
        },
        // 卡普希诺
        {
            id: "g016_s01",
            name: "卡普希诺",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/016/Capucine.jpg"], type: "base" }
            ]
        },
        // 妲尤
        {
            id: "g016_s02",
            name: "妲尤",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/016/Dahut.jpg"], type: "base" }
            ]
        },
        // 雨果
        {
            id: "g016_s03",
            name: "雨果",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/016/Hugo.jpg"], type: "base" }
            ]
        },
        // 琴
        {
            id: "g016_s04",
            name: "琴",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/016/Jean.jpg"], type: "base" }
            ]
        },
        // 娜迪雅·普鲁斯特
        {
            id: "g016_s05",
            name: "娜迪雅·普鲁斯特",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/016/Nadia.jpg"], type: "base" }
            ]
        },
        // 莎乐美
        {
            id: "g016_s06",
            name: "莎乐美",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/016/Salome.jpg"], type: "base" }
            ]
        },
        // 漂流者
        {
            id: "g016_fs01",
            name: "漂流者",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/016/Drifter.jpg"], type: "base" }
            ]
        },
        // 史比奈儿
        {
            id: "g016_fs02",
            name: "史比奈儿",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/016/Spinel.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
