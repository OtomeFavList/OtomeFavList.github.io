// BLACK WOLVES SAGA -Weiβ und Schwarz- for Nintendo Switch
// https://www.otomate.jp/bws/switch/

// BLACK WOLVES SAGA -Weiβ und Schwarz-
// 开发: Rejet、オトメイト
// 发行: Rejet、アイディアファクトリー株式会社、オトメイト
// 主题歌演出: lasah
// 原画: 黒裄
// 原作: Rejet
// 别名: BLACK WOLVES SAGA -Weiβ und Schwarz- for Nintendo Switch
// 平台:
// Nintendo Switch PSV
// 官方网站: otomate.jp/bws/wus/
  
// BLACK WOLVES SAGA -Bloody Nightmare-
// 中文名: 黑狼传说 血色梦魇
// 开发: Rejet
// 发行: Rejet
// 音乐: 光田康典、土屋俊輔、亀岡夏海
// 人物设定: 黒裄
// 主题歌作曲: 光田康典、亀岡夏海
// 主题歌作词: 岩崎大介
// 主题歌演出: lasah
// 插入歌演出: lasah、梶裕貴
// 原画: 黒裄
// 程序: 細谷博子
// 剧本: 山田かのこ
// 插入歌作曲: 土屋俊輔
// 插入歌作词: 土屋俊輔
// 导演: 伊東紗希
// 链接: ErogameScape VNDB
// 官方网站: rejetweb.jp/bws/top/
  
// BLACK WOLVES SAGA -Last Hope-
// 开发: オトメイト、Rejet
// 发行: オトメイト、アイディアファクトリー株式会社
// 剧本: 山田かのこ、SOM、砂原有季
// 音乐: 土屋俊輔、光田康典
// 人物设定: 黒裄
// 主题歌作曲: 土屋俊輔、亀岡夏海
// 主题歌作词: lasah、岩崎大介、亀岡夏海
// 主题歌演出: 梶裕貴、lasah
// 插入歌演出: lasah
// 原画: 黒裄
// 导演: 伊東紗希
// 官方网站: rejetweb.jp/bws

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game094", // 全局唯一ID，不可重复，如 game001
    name: "BLACK WOLVES SAGA -Weiβ und Schwarz-",
    year: "2026",
    publisher: ["Otomate","Rejet"],
    cnStudio: "暂无",
    writer: [
        {name:"山田かのこ", lang:"zh"},
        {name:"砂原有季", lang:"zh"},
        {name:"SOM", lang:"en"}
    ],
    art: [
        {name:"黒裄", lang:"zh"}
    ],
    cover: "game/094.jpg", // 相对路径，游戏封面
    charList: [
        // フィオナ・ガーランド
        {
            id: "g094_f01",
            name: "フィオナ・ガーランド",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g094_m01",
            name: "男主1",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g094_m02",
            name: "男主2",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g094_m03",
            name: "男主3",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g094_m04",
            name: "男主4",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g094_m05",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 普通可攻略男主 male
        {
            id: "g094_m06",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
      // 普通可攻略男主 male
        {
            id: "g094_m07",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
      // 普通可攻略男主 male
        {
            id: "g094_m08",
            name: "男主5",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
