// data/games/game001.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
const gameData = {
    id: "game001",
    name: "虔诚之花的晚钟 -ricordo-",
    year: "2020",
    publisher: ["Otomate"],
    cnStudio: "GSE",
    writer: [
        {name:"かずら林檎", lang:"ja"}
    ],
    art: [
        {name:"RiRi", lang:"en"}
    ],
    cover: "game/001.jpg",
    charList: [
        // 莉莉安娜
        {
            id: "g001_f01",
            name: "莉莉安娜·亚多尔纳特",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/Liliana.jpg",
                            "char/001/Liliana2.jpg"], type: "base" }
            ]
        },
        // 但丁·法尔宗
        {
            id: "g001_m01",
            name: "但丁·法尔宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/Dante.jpg",
                            "char/001/Dante2.jpg",
                            "char/001/Dante3.jpg"], type: "base" }
            ]
        },
        // 吉尔伯特·烈福
        {
            id: "g001_m02",
            name: "吉尔伯特·烈福",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/Gilbert.jpg",
                            "char/001/Gilbert2.jpg",
                            "char/001/Gilbert3.jpg"], type: "base" }
            ]
        },
        // 尼古拉·法兰捷斯卡
        {
            id: "g001_m03",
            name: "尼古拉·法兰捷斯卡",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/Nicola.jpg",
                            "char/001/Nicola2.jpg",
                            "char/001/Nicola3.jpg"], type: "base" }
            ]
        },
        // 奥罗克
        {
            id: "g001_m04",
            name: "奥罗克",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/Orlok.jpg",
                            "char/001/Orlok2.jpg",
                            "char/001/Orlok3.jpg"], type: "base" }
            ]
        },
        // 杨
        {
            id: "g001_m05",
            name: "杨",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/Yang.jpg",
                            "char/001/Yang2.jpg",
                            "char/001/Yang3.jpg"], type: "base" }
            ]
        },
        // 亨利·兰伯特
        {
            id: "g001_h01",
            name: "亨利·兰伯特",
            gender: "male",
            isHidden: true,
            isFD: true,
            images: [
                { srcList: ["char/001/Henri.jpg",
                            "char/001/Henri2.jpg",
                            "char/001/Henri3.jpg"], type: "base" }
            ]
        },
        // 塞巴斯蒂安·加列
        {
            id: "g001_s01",
            name: "塞巴斯蒂安·加列",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Anonymous.jpg"], type: "base" }
            ]
        }
        ,
        // 艾琳娜·克罗切
        {
            id: "g001_s02",
            name: "艾琳娜·克罗切",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Elena.jpg"], type: "base" }
            ]
        },
        // 埃米利奥
        {
            id: "g001_s03",
            name: "埃米利奥",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Emilio.jpg"], type: "base" }
            ]
        },
        // 尤金
        {
            id: "g001_s04",
            name: "尤金",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Eugene.jpg"], type: "base" }
            ]
        },
        // 飞
        {
            id: "g001_s05",
            name: "飞",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Fei.jpg"], type: "base" }
            ]
        },
        // 茱莉亚·切斯缇
        {
            id: "g001_s06",
            name: "茱莉亚·切斯缇",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Giulia.jpg"], type: "base" }
            ]
        },
        // 杰克·艾弗瑞
        {
            id: "g001_s07",
            name: "杰克·艾弗瑞",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Jack.jpg"], type: "base" }
            ]
        },
        // 约翰·史坦纳
        {
            id: "g001_s08",
            name: "约翰·史坦纳",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Johann.jpg"], type: "base" }
            ]
        },
        // 约瑟夫·冯·罗斯伯格
        {
            id: "g001_s09",
            name: "约瑟夫·冯·罗斯伯格",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Josef.jpg"], type: "base" }
            ]
        },
        // 兰
        {
            id: "g001_s10",
            name: "兰",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Lan.jpg"], type: "base" }
            ]
        },
        // 李
        {
            id: "g001_s11",
            name: "李",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Lee.jpg"], type: "base" }
            ]
        },
        // 利奥·卡凡尼斯
        {
            id: "g001_s12",
            name: "利奥·卡凡尼斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Leo.jpg"], type: "base" }
            ]
        },
        // 卢卡
        {
            id: "g001_s13",
            name: "卢卡",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Luca.jpg"], type: "base" }
            ]
        },
        // 马可·卡尔德罗尼
        {
            id: "g001_s14",
            name: "马可·卡尔德罗尼",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Marco.jpg"], type: "base" }
            ]
        },
        // 奥利弗·哈斯
        {
            id: "g001_s15",
            name: "奥利弗·哈斯",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Oliver.jpg"], type: "base" }
            ]
        },
        // 劳尔·基兰达奥
        {
            id: "g001_s16",
            name: "劳尔·基兰达奥",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Raul.jpg"], type: "base" }
            ]
        },
        // 罗伯特·德·费奥
        {
            id: "g001_s17",
            name: "罗伯特·德·费奥",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Roberto.jpg"], type: "base" }
            ]
        },
        // 睿
        {
            id: "g001_s18",
            name: "睿",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Rui.jpg"], type: "base" }
            ]
        },
        // 苏菲亚
        {
            id: "g001_s19",
            name: "苏菲亚",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Sofia.jpg"], type: "base" }
            ]
        },
        // 堤欧
        {
            id: "g001_s20",
            name: "堤欧",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Teo.jpg"], type: "base" }
            ]
        },
        // 袁
        {
            id: "g001_s21",
            name: "袁",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            images: [
                { srcList: ["char/001/Yuan.jpg"], type: "base" }
            ]
        }
    ]
};

// 移除旧全局push写法！使用ESModule导出
export { gameData };
