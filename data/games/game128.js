神々の悪戯 Unite Edition
发行: ブロッコリー
人物设定: カズキヨネ
原画: カズキヨネ
平台: Nintendo Switch
开发: Lantern Rooms、株式会社日本一ソフトウェア
官方网站: kamiaso.com/game/unite/

神々の悪戯
开发: 日本一ソフトウェア、Lantern Rooms
发行: ブロッコリー
音乐: Elements Garden
人物设定: カズキヨネ
主题歌作曲: 上松範康
主题歌作词: 上松範康、菊田大介
主题歌演出: 小野大輔
插入歌演出: 上村祐翔、入野自由、小野大輔、森川智之、梶裕貴、神谷浩史、細谷佳正、豊永利行
原画: カズキヨネ
剧本: ひらやま、武口碧
官方网站: kamiaso.com/game/origin/

神々の悪戯 InFinite
开发: 日本一ソフトウェア
发行: ブロッコリー
音乐: Elements Garden
人物设定: カズキヨネ
主题歌作曲: Elements Garden
主题歌演出: 小野大輔
插入歌演出: 上村祐翔、入野自由、内田夕夜、小野大輔、杉山紀彰、梶裕貴、森川智之、神谷浩史、細谷佳正、豊永利行、野島裕史、関智一
原画: カズキヨネ
剧本: 武口碧、櫻間ろに
官方网站: kamiaso.com/game/infinite/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game128", // 全局唯一ID，不可重复，如 game001
    name: "神々の悪戯 Unite Edition",
    year: "2022",
    publisher: ["BROCCOLI"],
    cnStudio: "暂无",
    writer: [
        {name:"武口碧", lang:"zh"},
        {name:"櫻間ろに", lang:"zh"},
        {name:"ひらやま", lang:"ja"}
    ],
    art: [
        {name:"カズキヨネ", lang:"ja"}
    ],
    cover: "game/128.jpg", // 相对路径，游戏封面
    charList: [
        // 草薙結衣
        {
            id: "g128_f01",
            name: "草薙結衣",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/001/女主A.jpg",
                            "char/001/女主A2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 戸塚陽
        {
            id: "g128_m01",
            name: "戸塚陽1",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/001/男主1.jpg",
                            "char/001/男主12.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // アヌビス·マアト
        {
            id: "アヌビス·マアト",
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
        // アポロン·アガナ·ベレア
        {
            id: "g128_m03",
            name: "アポロン·アガナ·ベレア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // バルドル·フリングホルニ
        {
            id: "g128_m04",
            name: "バルドル·フリングホルニ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ディオニュソス·テュルソス
        {
            id: "g128_m05",
            name: "ディオニュソス·テュルソス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ハデス·アイドネウス
        {
            id: "g128_m06",
            name: "ハデス·アイドネウス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // ロキ·レーヴァテイン
        {
            id: "g128_m07",
            name: "ロキ·レーヴァテイン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // メリッサ
        {
            id: "g128_m08",
            name: "メリッサ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 戸塚尊
        {
            id: "g128_m09",
            name: "戸塚尊",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // トール·メギンギョルズ
        {
            id: "g128_m10",
            name: "トール·メギンギョルズ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // トト·カドゥケウス
        {
            id: "g128_m11",
            name: "トト·カドゥケウス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/g0_m01_1.jpg",
                            "char/g001_m0_2.jpg"], type: "base" },
            ]
        },
        // 戸塚月人
        {
            id: "g128_m12",
            name: "戸塚月人",
            gender: "male",
            isHidden: false,
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
