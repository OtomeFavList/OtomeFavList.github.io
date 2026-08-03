// data/games/game001.js
// ==========【单个游戏独立数据模板】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需修改data/games.js，仅需要在data/games.js的allGameFiles数组追加本文件路径
const singleGameData = {
    id: "game001", // 全局唯一ID，不可重复
    name: "虔诚之花的晚钟",
    year: "2020",
    publisher: "Otomate",
    cnStudio: "GSE",
    writer: "かずら林檎",
    art: "RiRi",
    cover: "img/game/001.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 女主模板 female
        {
            id: "g001_f01",
            name: "莉莉安娜",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { src: "img/char/001/Liliana.jpg", type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g001_m01",
            name: "但丁·法尔宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: "img/char/001/Dante.jpg", type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g001_m02",
            name: "吉尔伯特·烈福",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: "img/char/g001_m01_1.jpg", type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g001_m03",
            name: "但丁·法尔宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: "img/char/g001_m01_1.jpg", type: "base" },
                { src: "img/char/g001_m01_2.jpg", type: "hidden" },
                { src: "img/char/g001_m01_3.jpg", type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g001_m04",
            name: "但丁·法尔宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: "img/char/g001_m01_1.jpg", type: "base" },
                { src: "img/char/g001_m01_2.jpg", type: "hidden" },
                { src: "img/char/g001_m01_3.jpg", type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g001_m05",
            name: "但丁·法尔宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { src: "img/char/g001_m01_1.jpg", type: "base" },
                { src: "img/char/g001_m01_2.jpg", type: "hidden" },
                { src: "img/char/g001_m01_3.jpg", type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 隐藏角色（isHidden=true → 开关开启才显示整个角色卡片）
        {
            id: "g001_h01",
            name: "亨利·兰伯特",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { src: "img/char/g001_h01_1.jpg", type: "base" }
            ]
        },
    ]
};

// 自动推入全局游戏数组，加载器script统一读取 window.gameDataList
window.gameDataList.push(singleGameData);
