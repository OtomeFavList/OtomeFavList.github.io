// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game030", // 全局唯一ID，不可重复
    name: "花合朔",
    year: "2023",
    publisher: ["HuneX"],
    cnStudio: "dramatic create",
    writer: [
        {name:"月花", lang:"zh"}
    ],
    art: [
        {name:"由良", lang:"zh"}
    ],
    cover: "game/030.jpg",
    charList: [
        // 美琴
        {
            id: "g030_f01",
            name: "美琴",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Mikoto.jpg"], type: "base" }
            ]
        },
        // 姬空木
        {
            id: "g030_m01",
            name: "姬空木",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Himeutsugi.jpg",
                            "char/030/Himeutsugi2.jpg"], type: "base" }
            ]
        },
        // 伊吕波
        {
            id: "g030_m02",
            name: "伊吕波",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Iroha.jpg",
                            "char/030/Iroha2.jpg"], type: "base" }
            ]
        },
        // 唐红
        {
            id: "g030_m03",
            name: "唐红",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Karakurenai.jpg",
                            "char/030/Karakurenai2.jpg"], type: "base" }
            ]
        },
        // 蛟
        {
            id: "g030_m04",
            name: "蛟",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/030/Mizuchi.jpg",
                            "char/030/Mizuchi2.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g1_s09",
            name: "配角",
            hiddenName: ["隐藏真名1","隐藏真名2"],    // 补丁新增：可选，不写则无隐藏名
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
