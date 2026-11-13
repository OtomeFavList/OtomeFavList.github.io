// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 图片路径采用相对路径格式（game/xxx.jpg 或 char/xxx/xxx.jpg）
// 网页渲染时由 main.js 的 getWebImageUrl 拼接为 R2 完整 URL
// Canvas 导出时由 export-canvas-render.js 的 convertR2ToJsDelivr 拼接为 jsDelivr URL
// 仅需要在 main.js 顶部 🚨gameIdList数组追加编号
// 官中发售以后，需要修改：游戏名、发售年份、汉化厂商、封面图、角色名
const gameData = {
    id: "game130", // 全局唯一ID，不可重复，如 game001
    name: "DYNAMIC CHORD feat.apple-polisher Remaster Edition",
    year: "2026",
    publisher: ["honeybee black"],
    cnStudio: "暂无",
    writer: [
        {name:"中村幸代", lang:"zh"},
        {name:"新井菜津美", lang:"zh"},
        {name:"浅生柚子", lang:"zh"},
        {name:"柚子みかん", lang:"zh"},
        {name:"絹夏", lang:"zh"}
    ],
    art: [
        {name:"冨士原良", lang:"zh"}
    ],
    cover: "game/130.jpg", // 相对路径，游戏封面
    charList: [
        // 柊美羽
        {
            id: "g130_f01",
            name: "柊美羽",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/130/Miu.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 音石夕星
        {
            id: "g130_m01",
            name: "音石夕星",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/130/Otoishi.jpg",
                            "char/130/Otoishi2.jpg",
                            "char/130/Otoishi3.jpg",
                            "char/130/Otoishi4.jpg",
                            "char/130/Otoishi5.jpg",
                            "char/130/Otoishi6.jpg",
                            "char/130/Otoishi7.jpg",
                            "char/130/Otoishi8.jpg",
                            "char/130/Otoishi9.jpg",
                            "char/130/Otoishi10.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 青井有紀
        {
            id: "g130_m02",
            name: "青井有紀",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/130/Yuki.jpg",
                            "char/130/Yuki2.jpg",
                            "char/130/Yuki3.jpg",
                            "char/130/Yuki4.jpg",
                            "char/130/Yuki5.jpg",
                            "char/130/Yuki6.jpg",
                            "char/130/Yuki7.jpg",
                            "char/130/Yuki8.jpg",
                            "char/130/Yuki9.jpg",
                            "char/130/Yuki10.jpg"], type: "base" },
            ]
        },
        // 黒沢忍
        {
            id: "g130_m03",
            name: "黒沢忍",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/130/Kurosawa.jpg",
                            "char/130/Kurosawa2.jpg",
                            "char/130/Kurosawa3.jpg",
                            "char/130/Kurosawa4.jpg",
                            "char/130/Kurosawa5.jpg",
                            "char/130/Kurosawa6.jpg",
                            "char/130/Kurosawa7.jpg",
                            "char/130/Kurosawa8.jpg",
                            "char/130/Kurosawa9.jpg",
                            "char/130/Kurosawa10.jpg"], type: "base" },
            ]
        },
        // 天城成海
        {
            id: "g130_m04",
            name: "天城成海",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/130/Narumi.jpg",
                            "char/130/Narumi2.jpg",
                            "char/130/Narumi3.jpg",
                            "char/130/Narumi4.jpg",
                            "char/130/Narumi5.jpg",
                            "char/130/Narumi6.jpg",
                            "char/130/Narumi7.jpg",
                            "char/130/Narumi8.jpg",
                            "char/130/Narumi9.jpg",
                            "char/130/Narumi10.jpg"], type: "base" },
            ]
        },
        // 末永歌奈
        {
            id: "g130_s01",
            name: "末永歌奈",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/130/Kana.jpg"], type: "base" }
            ]
        },
        // 八剣桔平
        {
            id: "g130_s02",
            name: "八剣桔平",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/130/Kippei.jpg"], type: "base" }
            ]
        },
        // 諸星翼
        {
            id: "g130_s03",
            name: "諸星翼",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/130/Tasuku.jpg"], type: "base" }
            ]
        },
        // 相模原龍雄
        {
            id: "g130_s04",
            name: "相模原龍雄",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/130/Tatsuo.jpg"], type: "base" }
            ]
        },
        // 小笠原虎雄
        {
            id: "g130_s05",
            name: "小笠原虎雄",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/130/Torao.jpg"], type: "base" }
            ]
        },
        // 日向裕貴
        {
            id: "g130_s06",
            name: "日向裕貴",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/130/Uki.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
