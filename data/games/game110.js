// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game110", // 全局唯一ID，不可重复，如 game001
    name: "うたの☆プリンスさまっ♪ Repeat LOVE",
    year: "2019",
    publisher: ["BROCCOLI"],
    cnStudio: "汉化组/汉化厂商",
    writer: [
        {name:"武口碧", lang:"zh"},
        {name:"神城咲弥", lang:"zh"},
        {name:"クレイ·シーゴット", lang:"ja"}
    ],
    art: [
        {name:"工画堂スタジオ", lang:"zh"}
    ],
    cover: "game/110.jpg", // 相对路径，游戏封面
    charList: [
        // 七海春歌
        {
            id: "g110_f01",
            name: "七海春歌",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g1_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
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
            isSub: false,
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
            isSub: false,
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
            isSub: false,
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
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
                { srcList: ["char/g0_m01_3.jpg"], type: "hidden" },
                { srcList: ["char/g0_m01_4.jpg"], type: "fd" }
            ]
        },
        // FD续作限定角色（isFD=true → FD开关开启才显示整个角色卡片）
        {
            id: "g1_fd01",
            name: "续作FD新增角色",
            gender: "male",
            isHidden: false,
            isFD: true,
            isSub: false,
            images: [
                { srcList: ["char/g001_fd01_1.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };

うたの☆プリンスさまっ♪
中文名: 歌之☆王子殿下
开发: 日本一ソフトウェア
发行: ブロッコリー
美工: Production I.G
音乐: Elements Garden
人物设定: 倉花千夏
主题歌作曲: 上松範康
主题歌作词: 上松範康
主题歌演出: 下野紘、宮野真守、寺島拓篤、諏訪部順一、谷山紀章、鈴村健一、鳥海浩輔
插入歌演出: 下野紘、諏訪部順一、鈴村健一
企画: ブロッコリー
剧本: クレイ・シーゴット、武口碧
链接: ErogameScape VNDB
官方网站: utapri.com

歌之☆王子殿下 Repeat
中文名: 歌之☆王子殿下 Repeat
开发: 日本一ソフトウェア
发行: ブロッコリー
音乐: Elements Garden
人物设定: 倉花千夏
原作: 紅ノ月歌音、ブロッコリー
剧本: クレイ・シーゴット
游戏人数: 1
官方网站: utapri.com/game/repeat/

うたの☆プリンスさまっ♪ -Amazing Aria-
中文名: 歌之☆王子殿下 Amazing Aria
开发: 日本一ソフトウェア
发行: ブロッコリー
美工: 工画堂スタジオ、Production I.G
音乐: Elements Garden
人物设定: 倉花千夏
主题歌作曲: 菊田大介
主题歌作词: 上松範康
主题歌演出: 寺島拓篤、谷山紀章、鈴村健一、鳥海浩輔
插入歌演出: 寺島拓篤、谷山紀章、鈴村健一、鳥海浩輔
原画: 工画堂スタジオ
企画: ブロッコリー
剧本: クレイ・シーゴット
官方网站: utapri.com/game/aa_ss/aa_product.html

うたの☆プリンスさまっ♪ -Sweet Serenade-
中文名: 歌之☆王子殿下 Sweet Serenade
开发: 日本一ソフトウェア
发行: ブロッコリー
美工: Production I.G、工画堂スタジオ
音乐: Elements Garden
人物设定: 倉花千夏
主题歌作曲: 藤間仁
主题歌作词: 織田あすか
主题歌演出: 下野紘、宮野真守、寺島拓篤、谷山紀章、鈴村健一、諏訪部順一
插入歌演出: 下野紘、宮野真守、諏訪部順一
原画: 工画堂スタジオ
企画: ブロッコリー
剧本: クレイ・シーゴット
官方网站: utapri.com/game/aa_ss/aa_product.html

うたの☆プリンスさまっ♪ Amazing Aria & Sweet Serenade LOVE
开发: 株式会社日本一ソフトウェア
发行: 株式会社ブロッコリー
人物设定: 倉花千夏
原作: 上松範康、株式会社ブロッコリー
剧本: クレイ・シーゴット、武口 碧(株式会社ブロッコリー) 他
音乐: Elements Garden
链接: ErogameScape VNDB
官方网站: utapri.com/game/aass_love/

うたの☆プリンスさまっ♪Debut
中文名: 歌之☆王子殿下 Debut
开发: ブロッコリー、日本一ソフトウェア
发行: ブロッコリー
剧本: クレイ・シーゴット、静月遠火
音乐: Elements Garden
人物设定: 倉花千夏
主题歌作曲: Elements Garden
主题歌演出: 下野紘、宮野真守、寺島拓篤、諏訪部順一、谷山紀章、鈴村健一、鳥海浩輔
插入歌演出: 前野智昭、宮野真守、寺島拓篤、森久保祥太郎、蒼井翔太、諏訪部順一、谷山紀章、鈴木達央、鈴村健一、鳥海浩輔
原画: 工画堂スタジオ
原作: 紅ノ月歌音、ブロッコリー
官方网站: utapri.com/game/debut

うたの☆プリンスさまっ♪ MUSIC
中文名: 歌之☆王子殿下 MUSIC
开发: 株式会社日本一ソフトウェア
发行: 株式会社ブロッコリー
剧本: 静月遠火、クレイ・シーゴット
音乐: Elements Garden
人物设定: 倉花千夏
原作: 紅ノ月歌音、株式会社ブロッコリー
官方网站: utapri.com/game/music/

うたの☆プリンスさまっ♪ MUSIC2
中文名: 歌之☆王子殿下 MUSIC2
开发: 株式会社日本一ソフトウェア
发行: 株式会社ブロッコリー
人物设定: 倉花千夏
原作: 紅ノ月歌音、ブロッコリー
剧本: 武口碧（株式会社ブロッコリー）他
音乐: Elements Garden
官方网站: utapri.com/game/music2/

うたの☆プリンスさまっ♪All Star
中文名: 歌之☆王子殿下 All Star
开发: 日本一ソフトウェア
发行: ブロッコリー
剧本: 青輝詩子、静月遠火、クレイ・シーゴット、武口碧
美工: 工画堂スタジオ
音乐: Elements Garden
人物设定: 倉花千夏
主题歌作曲: Elements Garden
主题歌演出: 下野紘、前野智昭、宮野真守、寺島拓篤、森久保祥太、蒼井翔太、諏訪部順一、谷山紀章、鈴木達央、鈴村健一、鳥海浩輔
原画: 工画堂スタジオ
原作: ブロッコリー
官方网站: utapri.com/game/allstar/

うたのプリンスさまっ♪All Star After Secret
中文名: 歌之☆王子殿下 All Star After Secret
开发: ブロッコリー、日本一ソフトウェア
发行: ブロッコリー
剧本: ハイボリューム、望月陽南子、株式会社エッジワークス、桜葉ユウ、武口碧、狐塚冬里、結城、萩原京子、静月遠火、卯木悠里
美工: 工画堂スタジオ
音乐: Elements Garden
人物设定: 倉花千夏
主题歌作曲: 上松範康
主题歌演出: 下野紘、前野智昭、宮野真守、寺島拓篤、森久保祥太郎、蒼井翔太、諏訪部順一、谷山紀章、鈴木達央、鈴村健一、鳥海浩輔
官方网站: utapri.com/game/asas/

歌之☆王子殿下 MUSIC3
中文名: 歌之☆王子殿下 MUSIC3
开发: 株式会社日本一ソフトウェア
发行: 株式会社ブロッコリー
音乐: Elements Garden
人物设定: 倉花千夏
原作: ブロッコリー、上松範康
剧本: 武口碧（株式会社ブロッコリー）
官方网站: utapri.com/game/music3/

| #      | 游戏                                     | 日文名                                            | 发行时间       | 剧情位置             | 原始平台 / 后续平台         | 攻略/主要人物                                       | 作品性质            | 移植/合集情况          |
| ------ | -------------------------------------- | ---------------------------------------------- | ---------- | ---------------- | ------------------- | --------------------------------------------- | --------------- | ---------------- |
| **1**  | **歌之☆王子殿下**                            | うたの☆プリンスさまっ♪                                   | 2010       | **最初**           | PSP                 | 音也、真斗、那月、时也、莲、翔等初代阵容                          | **正传初代**        | 原作               |
| **2**  | **歌之☆王子殿下 Repeat**                     | うたの☆プリンスさまっ♪Repeat                             | 2011       | 与①相同             | PSP                 | **音也、真斗、那月、时也、莲、翔、塞西尔**                       | **初代强化重制**      | 不是续作             |
| **3**  | **Amazing Aria**                       | うたの☆プリンスさまっ♪Amazing Aria                       | 2010       | Repeat之后的毕业后故事   | PSP                 | **音也、真斗、那月、塞西尔、早乙女**                          | Fan Disc        | 后来与SS合并          |
| **4**  | **Sweet Serenade**                     | うたの☆プリンスさまっ♪Sweet Serenade                     | 2011       | 与AA同期            | PSP                 | **时也、莲、翔、林檎、龙也**                              | Fan Disc        | 后来与AA合并          |
| **5**  | **Amazing Aria & Sweet Serenade LOVE** | うたの☆プリンスさまっ♪Amazing Aria & Sweet Serenade LOVE | 2012/2017等 | Repeat之后、Debut之前 | PSV → Switch        | **AA＋SS全部人物**                                 | **AA＋SS合集/重制**  | ⭐ 现在推荐直接玩Switch版 |
| **6**  | **歌之☆王子殿下 Debut**                      | うたの☆プリンスさまっ♪Debut                              | 2012       | **毕业后1年**        | PSP → Switch        | **ST☆RISH 7人＋QUARTET NIGHT 4人 = 11人**         | **正统续作**        | Switch移植/重制      |
| **7**  | **歌之☆王子殿下 MUSIC**                      | うたの☆プリンスさまっ♪MUSIC                              | 2011       | 初代～Debut时期补充     | PSP                 | 无传统攻略路线                                       | **音游＋短篇剧情**     | 非主线续作            |
| **8**  | **歌之☆王子殿下 MUSIC2**                     | うたの☆プリンスさまっ♪MUSIC2                             | 2013       | Debut之后的音乐内容     | PSP                 | 无传统攻略路线                                       | **音游＋Memorial** | 非主线续作            |
| **9**  | **歌之☆王子殿下 All Star**                   | うたの☆プリンスさまっ♪All Star                           | 2013       | **毕业后1年半**       | PSP → Switch        | **ST☆RISH 7＋QUARTET NIGHT 4 = 11人**           | **正统续作**        | Switch移植/重制      |
| **10** | **歌之☆王子殿下 All Star After Secret**      | うたの☆プリンスさまっ♪All Star After Secret              | 2015       | **All Star之后**   | PSP → Switch        | **ST☆RISH 7＋QUARTET NIGHT 4 = 11人**           | **All Star后续**  | Switch移植/重制      |
| **11** | **歌之☆王子殿下 MUSIC3**                     | うたの☆プリンスさまっ♪MUSIC3                             | 2016       | ASAS前后音乐内容       | PSV                 | 无传统攻略路线                                       | **音游＋Memory**   | 非主线续作            |
| **12** | **歌之王子殿下：闪耀之星 / LIVE EMOTION**         | うたの☆プリンスさまっ♪LIVE EMOTION                       | 2024       | 独立手游体系           | iOS / Android       | **ST☆RISH 7＋QUARTET NIGHT 4＋HE★VENS 7 = 18人** | **手游/音游＋剧情**    | 与主机乙女系列不同        |
| **13** | **歌之王子殿下 Dolce Vita**                  | うたの☆プリンスさまっ♪Dolce Vita                         | **预计2027** | 全新正作             | **Nintendo Switch** | 目前公开 **18名偶像阵容**                              | **全新正传**        | 不是旧作移植/合集        |
