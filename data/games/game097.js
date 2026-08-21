Starry☆Sky～Spring Memories～
开发: honeybee
发行: dramatic create（ヒューネックス株式会社）
音乐: 野島健太郎
人物设定: カズアキ
原画: カズアキ
原作: honeybee
SD原画: ゑむ
平台: Nintendo Switch
游戏类型: 春の夜空を幼なじみと見上げる学園ADV
游玩人数: 1
发行日期: 2026-05-28
官方网站: honeybee-cd.com/starrysky/switch_ss_spring/

Starry☆Sky〜in Spring〜
中文名: 星座彼氏-春季篇
开发: honeybee
发行: honeybee
剧本: 高木聖子、桜葉ユウ、清水慶、株式会社エッジワークス
人物设定: カズアキ
主题歌作曲: あるるかん
主题歌作词: あるるかん
原画: カズアキ
导演: 中村幸代
http://www.honeybee-cd.com/spring/index.html

Starry☆Sky ～in Spring～ ポータブル
开发: honeybee
发行: honeybee
剧本: 高木聖子
人物设定: カズアキ
主题歌作曲: 綾部健三郎、上野浩司
主题歌作词: Lynn
主题歌演出: いとうかなこ
原画: カズアキ
平台:
PSP PSV
游玩人数: 1
发行日期: 2010-06-24
售价:
通常版 3,278 円（税込）
限定版 7,480 円（税込）
官方网站: honeybee-cd.com/spring-p/

Starry☆Sky〜After Spring〜
开发: honeybee
发行: honeybee
剧本: 株式会社エッジワークス（春名佳純、浅生柚子）
人物设定: カズアキ
主题歌作曲: あるるかん、antistar
主题歌作词: あるるかん
主题歌演出: 緑川光、antistar
原画: カズアキ
http://www.honeybee-cd.com/fan-spring/

Starry☆Sky ~Spring Stories~
开发: honeybee
发行: honeybee
主题歌演出: 緑川光
平台: PSV
游玩人数: 1
发行日期: 2016-11-23
售价:
パッケージ版 6,380 円（税込）
ダウンロード版 5800 円＋税
官方网站: honeybee-cd.com/starrysky/vita/spring/index.html

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game0", // 全局唯一ID，不可重复，如 game001
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
    cover: "game/0.jpg", // 相对路径，游戏封面
    charList: [
        // 女主模板 female
        {
            id: "g0_f01",
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
            id: "g0_m01",
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
            id: "g0_m02",
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
            id: "g0_m03",
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
            id: "g0_m04",
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
            id: "g0_m05",
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
            id: "g0_h01",
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
            id: "g0_fd01",
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
