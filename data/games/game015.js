// data/games/game015.js
// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game015", // 全局唯一ID，不可重复
    name: "君于雪中希冀",
    year: "2022",
    publisher: ["Otomate"],
    cnStudio: "JSD",
    writer: [
        {name:"佐々木麿", lang:"zh"},
        {name:"結城由乃", lang:"zh"},
        {name:"仰木サヤ", lang:"zh"},
        {name:"みぞおち鳩子", lang:"ja"}
    ],
    art: [
        {name:"ナガオカ", lang:"ja"},
        {name:"Team.", lang:"en"}
    ],
    cover: "https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/game/015.jpg",
    charList: [
        // 纱乃
        {
            id: "g015_f01",
            name: "纱乃",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/015/Suzuno.jpg"], type: "base" },
            ]
        },
        // 锦次
        {
            id: "g015_m01",
            name: "锦次",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/015/Kinji.jpg"], type: "base" },
            ]
        },
        // 久贺源十郎
        {
            id: "g015_m02",
            name: "久贺源十郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/015/Kuga.jpg"], type: "base" },
            ]
        },
        // 东条国孝
        {
            id: "g015_m03",
            name: "东条国孝",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/015/Kunitaka.jpg"], type: "base" },
            ]
        },
        // 樱太郎
        {
            id: "g015_m04",
            name: "樱太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/015/Outarou.jpg"], type: "base" },
            ]
        },
        // 篁智成
        {
            id: "g015_m05",
            name: "篁智成",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/015/Tomonari.jpg"], type: "base" },
            ]
        },
        // 与市
        {
            id: "g015_m06",
            name: "与市",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["https://cdn.jsdelivr.net/gh/OtomeFavList/OtomeFavList.github.io@main/img/char/015/Yoichi.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
