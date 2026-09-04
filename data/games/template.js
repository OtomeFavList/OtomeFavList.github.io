// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game1", // 全局唯一ID，不可重复，如 game001
    name: "示例乙女游戏",
    year: "20",
    publisher: ["原厂发行商"],
    cnStudio: "汉化厂商",
    writer: [
        {name:"中文编剧", lang:"zh"},
        {name:"日文编剧", lang:"ja"},
        {name:"英文编剧", lang:"en"}
    ],
    art: [
        {name:"中文原画", lang:"zh"},
        {name:"日文原画", lang:"ja"},
        {name:"英文原画", lang:"en"}
    ],
    cover: "game/1.jpg", // 相对路径，游戏封面
    charList: [
        // 女主模板 female
        {
            id: "g1_f01",
            name: "女主A",
            hiddenName: "隐藏真名",    // 补丁新增：可选，不写则无隐藏名
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD新增角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            isFdSub: false,    // true=续作/FD新增配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["char/001/女主A3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["char/001/女主A4.jpg"], type: "fd" },          // 需要开启FD开关才展示的图片
                { srcList: ["char/001/女主A5.jpg"], type: "hidden-fd" }   // 开启隐藏开关或FD开关展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m01",
            name: "男主1",
            hiddenName: "隐藏真名",    // 补丁新增：可选，不写则无隐藏名
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/001/男主A.jpg",
                            "char/001/男主A2.jpg"], type: "base" },
                { srcList: ["char/001/男主A3.jpg"], type: "hidden" },
                { srcList: ["char/001/男主A4.jpg"], type: "fd" },
                { srcList: ["char/001/男主A5.jpg"], type: "hidden-fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m02",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/001/男主B.jpg",
                            "char/001/男主B2.jpg"], type: "base" },
                { srcList: ["char/001/男主B3.jpg"], type: "hidden" },
                { srcList: ["char/001/男主B4.jpg"], type: "fd" },
                { srcList: ["char/001/男主B5.jpg"], type: "hidden-fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m03",
            name: "男主3",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/001/男主C.jpg",
                            "char/001/男主C2.jpg"], type: "base" },
                { srcList: ["char/001/男主C3.jpg"], type: "hidden" },
                { srcList: ["char/001/男主C4.jpg"], type: "fd" },
                { srcList: ["char/001/男主C5.jpg"], type: "hidden-fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m04",
            name: "男主4",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/001/男主D.jpg",
                            "char/001/男主D2.jpg"], type: "base" },
                { srcList: ["char/001/男主D3.jpg"], type: "hidden" },
                { srcList: ["char/001/男主D4.jpg"], type: "fd" },
                { srcList: ["char/001/男主D5.jpg"], type: "hidden-fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m05",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/001/男主F.jpg",
                            "char/001/男主F2.jpg"], type: "base" },
                { srcList: ["char/001/男主F3.jpg"], type: "hidden" },
                { srcList: ["char/001/男主F4.jpg"], type: "fd" },
                { srcList: ["char/001/男主F5.jpg"], type: "hidden-fd" }
            ]
        },
        // 隐藏角色（isHidden=true → 开关开启才显示整个角色卡片）
        {
            id: "g1_h01",
            name: "隐藏攻略角色",
            hiddenName: "隐藏真名",    // 补丁新增：可选，不写则无隐藏名
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_h01_1.jpg"], type: "base" }
            ]
        },
        // 续作FD限定角色（isFD=true → FD开关开启才显示整个角色卡片）
        {
            id: "g1_fd01",
            name: "续作FD新增角色",
            hiddenName: "隐藏真名",    // 补丁新增：可选，不写则无隐藏名
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        },
        // 次要角色（isSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g1_s01",
            name: "配角",
            hiddenName: "隐藏真名",    // 补丁新增：可选，不写则无隐藏名
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/g001_S01_1.jpg"], type: "base" }
            ]
        }
        ,
        // 续作/FD次要角色（isFdSub=true → 开关开启才显示整个角色卡片）
        {
            id: "g1_fs01",
            name: "配角",
            hiddenName: "隐藏真名",    // 补丁新增：可选，不写则无隐藏名
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: true,
            images: [
                { srcList: ["char/g001_fS01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
