ときめきメモリアル Girl's Side 1st Love Plus
中文名: 心跳回忆女生版1 加强版
开发: KONAMI
发行: KONAMI
人物设定: 小松原里枝子
别名: ときめきメモリアル Girl’s Side 1st Love for Nintendo Switch
平台:
NDS Nintendo Switch
游戏类型: 恋爱养成
游玩人数: 1
发行日期:
NDS版 2009-03-12
Nintendo Switch版 2024-02-14
售价:
NDS版 5,500 円（税込）
Nintendo Switch版 5,995 円（税込）
官方网站: konami.jp/gs/game/Girls_Side/1st_Love/

ときめきメモリアル Girl's Side
中文名: 心跳回忆女生版
开发: KONAMI
发行: KONAMI
剧本: 内田明理、子安秀明、山田桜丸、成田伸子、春日直登、栗原秀和、芳野未来
人物设定: 小松原里枝子
主题歌作曲: CUBE、松本孝弘
主题歌作词: 稲葉浩志
主题歌演出: B'z、B'z
平台: PS2
游戏类型: 恋爱养成游戏
游玩人数: 1
发行日期:
初回限定版 2002-06-20
通常版 2002-06-20
コナミ ザ・ベスト版 2003-09-18
コナミ殿堂セレクション版 2004-10-21
售价:
初回限定版 7,480 円（税込）
通常版 7,480 円（税込）
コナミ ザ・ベスト版 3,080 円（税込）
コナミ殿堂セレクション版 1,980 円（税込）
音乐: CUBE(株式会社キューブ)
链接: ErogameScape VNDB
官方网站: konami.jp/gs/game/Girls_Side/

ときめきメモリアル Girl's Side 1st Love
中文名: 心跳回忆 女生版 初恋
开发: KONAMI
发行: KONAMI
制作人: 内田明理
别名: ガールズサイドファーストラブ
平台: NDS
游戏类型: 学園恋愛シミュレーション
游玩人数: 1
发行日期: 2007-02-15
售价: 5,478 円（税込）
导演: 三野太郎
官方网站: konami.com/games/girls_side/1st_Love/

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
    cnStudio: "汉化组/汉化厂商",
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
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["char/001/女主A3.jpg"], type: "hidden" },     // 需要开启隐藏角色开关才展示的图片
                { srcList: ["char/001/女主A4.jpg"], type: "fd" }          // 需要开启FD开关才展示的图片
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
                { srcList: ["char/001/男主13.jpg"], type: "hidden" },
                { srcList: ["char/001/男主14.jpg"], type: "fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m02",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m03",
            name: "男主3",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m04",
            name: "男主4",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m05",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // 隐藏角色（isHidden=true → 开关开启才显示整个角色卡片）
        {
            id: "g1_h01",
            name: "隐藏攻略角色",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["char/g001_h01_1.jpg"], type: "base" }
            ]
        },
        // FD续作限定角色（isFD=true → FD开关开启才显示整个角色卡片）
        {
            id: "g1_fd01",
            name: "续作FD新增角色",
            gender: "male",
            isHidden: false,
            isFD: true,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
