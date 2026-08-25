// ときめきメモリアル Girl's Side 3rd Story
// 中文名: 心跳回忆女生版3
// 开发: KONAMI
// 发行: KONAMI
// 剧本: 内田明理、田島あきこ、ちゃい、小松原里枝子、神山敬介、松岡功、川名良昌、株式会社エム・ツー、有限会社codeX、コーデックス
// 人物设定: 小松原里枝子
// 主题歌作曲: Momo、近藤敦教
// 企画: 内田明理、谷口淳一、小松原里枝子
// 制作人: 内田明理
// 别名: GS3
// ときめきメモリアル Girl's Side 3rd Story for Nintendo Switch
// // 平台:
// NDS Nintendo Switch
// 游戏类型: 恋愛シミュレーションゲーム
// 游玩人数: 1
// 发行日期:
// NDS版 2010-06-24
// Nintendo Switch版 2024-02-14
// 售价:
// NDS版 5,500 円（税込）
// Nintendo Switch版 5,995 円（税込）
// 主题歌作词: 平井森太郎
// 主题歌演出: Shigeru、toshi
// 链接: ErogameScape VNDB
// 官方网站: konami.com/game/Girls_Side/3rd_Story/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game107", // 全局唯一ID，不可重复，如 game001
    name: "ときめきメモリアル Girl's Side 3rd Story",
    year: "2024",
    publisher: ["KONAMI"],
    cnStudio: "暂无",
    writer: [
        {name:"内田明理", lang:"zh"},
        {name:"田島あきこ", lang:"zh"},
        {name:"小松原里枝子", lang:"zh"},
        {name:"神山敬介", lang:"zh"},
        {name:"松岡功", lang:"zh"},
        {name:"川名良昌", lang:"zh"},
        {name:"株式会社エム·ツー", lang:"zh"},
        {name:"有限会社codeX", lang:"zh"},
        {name:"ちゃい", lang:"ja"},
        {name:"コーデックス", lang:"ja"}
    ],
    art: [
        {name:"小松原里枝子", lang:"zh"}
    ],
    cover: "game/107.jpg", // 相对路径，游戏封面
    charList: [
        // 大迫力
        {
            id: "g107_m01",
            name: "大迫力",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 不二山嵐
        {
            id: "g107_m02",
            name: "不二山嵐",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 新名旬平
        {
            id: "g107_m03",
            name: "新名旬平",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 紺野玉緒
        {
            id: "g107_m04",
            name: "紺野玉緒",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 桜井琉夏
        {
            id: "g107_m05",
            name: "桜井琉夏",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 桜井琥一
        {
            id: "g107_m06",
            name: "桜井琥一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 設楽聖司
        {
            id: "g107_m07",
            name: "設楽聖司",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 蓮見達也
        {
            id: "g107_h01",
            name: "蓮見達也",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
