// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game105", // 全局唯一ID，不可重复，如 game001
    name: "ときめきメモリアル Girl's Side 1st Love",
    year: "2024",
    publisher: ["KONAMI"],
    cnStudio: "暂无",
    writer: [
        {name:"内田明理", lang:"zh"},
        {name:"子安秀明", lang:"zh"},
        {name:"山田桜丸", lang:"zh"},
        {name:"成田伸子", lang:"zh"},
        {name:"春日直登", lang:"zh"},
        {name:"栗原秀和", lang:"zh"},
        {name:"芳野未来", lang:"zh"},
    ],
    art: [
        {name:"小松原里枝子", lang:"zh"}
    ],
    cover: "game/105.jpg", // 相对路径，游戏封面
    charList: [
        // 鈴鹿和馬
        {
            id: "g105_m01",
            name: "鈴鹿和馬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Kazuma.jpg",
                            "char/105/Kazuma2.jpg"], type: "base" },
            ]
        },
        // 葉月珪
        {
            id: "g105_m02",
            name: "葉月珪",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Kei.jpg",
                            "char/105/Kei2.jpg"], type: "base" },
            ]
        },
        // 姫条まどか
        {
            id: "g105_m03",
            name: "姫条まどか",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Madoka.jpg",
                            "char/105/Madoka2.jpg"], type: "base" },
            ]
        },
        // 氷室零一
        {
            id: "g105_m04",
            name: "氷室零一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Reiichi.jpg",
                            "char/105/Reiichi2.jpg"], type: "base" },
            ]
        },
        // 守村桜弥
        {
            id: "g105_m05",
            name: "守村桜弥",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Sakuya.jpg",
                            "char/105/Sakuya2.jpg",
                            "char/105/Sakuya3.jpg"], type: "base" },
            ]
        },
        // 三原色
        {
            id: "g105_m06",
            name: "三原色",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Shiki.jpg",
                            "char/105/Shiki2.jpg"], type: "base" },
            ]
        },
        // 日比谷渉
        {
            id: "g105_m07",
            name: "日比谷渉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Wataru.jpg",
                            "char/105/Wataru2.jpg"], type: "base" },
            ]
        },
        // 蒼樹千晴
        {
            id: "g105_h01",
            name: "蒼樹千晴",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Chiharu.jpg",
                            "char/105/Chiharu2.jpg",
                            "char/105/Chiharu3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 天之橋一鶴
        {
            id: "g105_h02",
            name: "天之橋一鶴",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Ikkaku.jpg"], type: "base" },
            ]
        },
        // 天童壬
        {
            id: "g105_h03",
            name: "天童壬",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Jin.jpg",
                            "char/105/Jin2.jpgg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
