// data/games/game001.js
// ==========【单个游戏独立数据模板】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需修改data/games.js，仅需要在data/games.js的allGameFiles数组追加本文件路径
const singleGameData = {
    id: "game001", // 全局唯一ID，不可重复
    name: "示例乙女游戏1",
    year: "2020",
    publisher: "原厂发行商",
    cnStudio: "汉化组/汉化厂商",
    writer: "剧本编剧",
    art: "原画画师",
    cover: "img/game/game001_cover.jpg", // 封面图路径，统一前缀img/
    charList: [
        // 女主模板 female
        {
            id: "g001_f01",
            name: "女主A",
            gender: "female",
            isHidden: false,    // 角色本体：true=隐藏角色，全局/游戏单独开关控制是否展示该角色
            isFD: false,        // 角色本体：true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { src: "img/char/g001_f01_1.jpg", type: "base" },      // 默认基础图，始终加载
                { src: "img/char/g001_f01_2.jpg", type: "hidden" }     // 需要开启隐藏角色开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g001_m01",
            name: "男主1",
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
            name: "隐藏攻略角色",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { src: "img/char/g001_h01_1.jpg", type: "base" }
            ]
        },
        // FD续作限定角色（isFD=true → FD开关开启才显示整个角色卡片）
        {
            id: "g001_fd01",
            name: "FD新增角色",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { src: "img/char/g001_fd01_1.jpg", type: "base" }
            ]
        }
    ]
};

// 自动推入全局游戏数组，加载器script统一读取 window.gameDataList
window.gameDataList.push(singleGameData);
