// 单个游戏独立数据模板，新增游戏复制整文件，修改ID、信息、角色
const singleGameData = {
    id: "game001", // 全局唯一ID，不可重复
    name: "示例乙女游戏1",
    year: "2020",
    publisher: "原厂发行商",
    cnStudio: "汉化组/汉化厂商",
    writer: "剧本编剧",
    art: "原画画师",
    cover: "game/game001_cover.jpg", // 封面图路径 img/game/xxx
    charList: [
        // 女主模板 female
        {
            id: "g001_f01",
            name: "女主A",
            gender: "female",
            isHidden: false,
            isFD: false,
            imgs: ["char/g001_f01_1.jpg","char/g001_f01_2.jpg"]
        },
        // 普通可攻略男主 male
        {
            id: "g001_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            imgs: ["char/g001_m01_1.jpg","char/g001_m01_2.jpg","char/g001_m01_3.jpg"]
        },
        // 隐藏角色（开关开启才显示）
        {
            id: "g001_h01",
            name: "隐藏攻略角色",
            gender: "male",
            isHidden: true,
            isFD: false,
            imgs: ["char/g001_h01_1.jpg"]
        },
        // FD续作限定角色
        {
            id: "g001_fd01",
            name: "FD新增角色",
            gender: "male",
            isHidden: false,
            isFD: true,
            imgs: ["char/g001_fd01_1.jpg"]
        }
    ]
};
// 自动推入全局游戏数组，无需手动修改聚合文件
window.gameTemplateList.push(singleGameData);
