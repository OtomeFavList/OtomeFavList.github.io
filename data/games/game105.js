// ときめきメモリアル Girl's Side 1st Love Plus
// 中文名: 心跳回忆女生版1 加强版
// 开发: KONAMI
// 发行: KONAMI
// 人物设定: 小松原里枝子
// 别名: ときめきメモリアル Girl’s Side 1st Love for Nintendo Switch
// 平台:
// NDS Nintendo Switch
// 游戏类型: 恋爱养成
// 游玩人数: 1
// 发行日期:
// NDS版 2009-03-12
// Nintendo Switch版 2024-02-14
// 售价:
// NDS版 5,500 円（税込）
// Nintendo Switch版 5,995 円（税込）
// 官方网站: konami.jp/gs/game/Girls_Side/1st_Love/

// ときめきメモリアル Girl's Side
// 中文名: 心跳回忆女生版
// 开发: KONAMI
// 发行: KONAMI
// 剧本: 内田明理、子安秀明、山田桜丸、成田伸子、春日直登、栗原秀和、芳野未来
// 人物设定: 小松原里枝子
// 主题歌作曲: CUBE、松本孝弘
// 主题歌作词: 稲葉浩志
// 主题歌演出: B'z、B'z
// 平台: PS2
// 游戏类型: 恋爱养成游戏
// 游玩人数: 1
// 发行日期:
// 初回限定版 2002-06-20
// 通常版 2002-06-20
// コナミ ザ・ベスト版 2003-09-18
// コナミ殿堂セレクション版 2004-10-21
// 售价:
// 初回限定版 7,480 円（税込）
// 通常版 7,480 円（税込）
// コナミ ザ・ベスト版 3,080 円（税込）
// コナミ殿堂セレクション版 1,980 円（税込）
// 音乐: CUBE(株式会社キューブ)
// 链接: ErogameScape VNDB
// 官方网站: konami.jp/gs/game/Girls_Side/

// ときめきメモリアル Girl's Side 1st Love
// 中文名: 心跳回忆 女生版 初恋
// 开发: KONAMI
// 发行: KONAMI
// 制作人: 内田明理
// 别名: ガールズサイドファーストラブ
// 平台: NDS
// 游戏类型: 学園恋愛シミュレーション
// 游玩人数: 1
// 发行日期: 2007-02-15
// 售价: 5,478 円（税込）
// 导演: 三野太郎
// 官方网站: konami.com/games/girls_side/1st_Love/

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
        // 蒼樹千晴
        {
            id: "g105_m01",
            name: "蒼樹千晴",
            gender: "male",
            isHidden: false,
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
            id: "g105_m02",
            name: "天之橋一鶴",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Ikkaku.jpg"], type: "base" },
            ]
        },
        // 天童壬
        {
            id: "g105_m03",
            name: "天童壬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Jin.jpg",
                            "char/105/Jin2.jpgg"], type: "base" },
            ]
        },
        // 鈴鹿和馬
        {
            id: "g105_m04",
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
            id: "g105_m05",
            name: "葉月珪",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Kei.jpg",
                            "char/105/Kei2.jpgg"], type: "base" },
            ]
        },
        // 姫条まどか
        {
            id: "g105_m06",
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
            id: "g105_m07",
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
            id: "g105_m08",
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
            id: "g105_m09",
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
            id: "g105_m10",
            name: "日比谷渉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/105/Wataru.jpg",
                            "char/105/Wataru2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
