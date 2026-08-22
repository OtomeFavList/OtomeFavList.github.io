// Cendrillon palikA
// 中文名: 灰姑娘的玻璃鞋
// 开发: オトメイト
// 发行: アイディアファクトリー株式会社、欢乐百世
// 剧本: 佐々木麿
// 音乐: 加川狂介
// 原画: 清白かりん
// 导演: コイデユウリ
// otomate.jp/cendrillon_palika/

// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game082", // 全局唯一ID，不可重复，如 game001
    name: "Cendrillon palikA",
    year: "2018",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"佐々木麿", lang:"zh"}
    ],
    art: [
        {name:"清白かりん", lang:"zh"}
    ],
    cover: "game/082.jpg", // 相对路径，游戏封面
    charList: [
        // 玻ヰ璃＝ラリック
        {
            id: "g082_f01",
            name: "玻ヰ璃＝ラリック",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/082/Lalique.jpg",
                            "char/082/Lalique2.jpg",
                            "char/082/Lalique3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 廻螺＝アマルリック
        {
            id: "g082_m01",
            name: "廻螺＝アマルリック",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/082/Ela.jpg",
                            "char/082/Ela2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 歌紫歌＝ガレ
        {
            id: "g082_m02",
            name: "歌紫歌＝ガレ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/082/Kashika.jpg",
                            "char/082/Kashika2.jpg"], type: "base" },
            ]
        },
        // 黒禰＝スピネル
        {
            id: "g082_m03",
            name: "黒禰＝スピネル",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/082/Klone.jpg",
                            "char/082/Klone2.jpg"], type: "base" },
            ]
        },
        // 泣虎＝ピオニー
        {
            id: "g082_m04",
            name: "泣虎＝ピオニー",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/082/Natra.jpg",
                            "char/082/Natra2.jpg",
                            "char/082/Natra3.jpg"], type: "base" },
            ]
        },
        // 綸燈＝ウェステリア
        {
            id: "g082_m05",
            name: "綸燈＝ウェステリア",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/082/Rindo.jpg",
                            "char/082/Rindo2.jpg",
                            "char/082/Rindo3.jpg"], type: "base" },
            ]
        },
        // 紫鳶＝クリノクロア
        {
            id: "g082_m06",
            name: "紫鳶＝クリノクロア",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/082/Shien.jpg",
                            "char/082/Shien2.jpg"], type: "base" },
            ]
        },
        // 憂漣＝ミュラー
        {
            id: "g082_m07",
            name: "憂漣＝ミュラー",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/082/Ulen.jpg",
                            "char/082/Ulen2.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
