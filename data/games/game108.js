// ときめきメモリアル Girl’s Side 4th Heart
// 中文名: 心跳回忆女生版4
// 开发: KONAMI
// 发行: KONAMI
// 人物设定: 小松原里枝子
// 主题歌演出: 大多和孝治
// 别名: 心跳回忆女生版 第四颗心
// 心跳回忆GS4
// 平台: Nintendo Switch
// 游戏类型: 学園恋愛シミュレーション
// 游玩人数: 1
// 发行日期: 2021-10-28
// 售价:
// 限定版 16,280 円（本体価格14,800 円）
// 通常版 8,580 円（本体価格7,800 円）
// ダウンロード版 8,580 円（本体価格7,800 円）
// 主题歌作曲: 柳澤奈緒樹、lull
// 主题歌作词: 柳澤奈緒樹、lull
// 链接: ErogameScape VNDB
// 官方网站: konami.com/games/girls_side/4th_Heart/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game108", // 全局唯一ID，不可重复，如 game001
    name: "ときめきメモリアル Girl’s Side 4th Heart",
    year: "2021",
    publisher: ["KONAMI"],
    cnStudio: "暂无",
    writer: [
        {name:"川名良昌", lang:"zh"},
        {name:"山田麻沙子", lang:"zh"},
        {name:"瀬多海人", lang:"zh"},
        {name:"卯木悠里", lang:"zh"},
        {name:"春河ミライ", lang:"zh"},
        {name:"田島あきこ", lang:"zh"}
    ],
    art: [
        {name:"小松原里枝子", lang:"zh"}
    ],
    cover: "game/108.jpg", // 相对路径，游戏封面
    charList: [
        // 普通可攻略男主 male
        {
            id: "g108_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g108_m02",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g108_m03",
            name: "男主3",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g108_m04",
            name: "男主4",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        /// 普通可攻略男主 male
        {
            id: "g108_m05",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g108_m06",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g108_m07",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g108_m08",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g108_m09",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g108_m10",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 隐藏角色（isHidden=true → 开关开启才显示整个角色卡片）
        {
            id: "g108_h01",
            name: "隐藏攻略角色",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g001_h01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
