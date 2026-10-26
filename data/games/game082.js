// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
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
    cover: "game/082.jpg",
    charList: [
        // 玻ヰ璃＝ラリック
        {
            id: "g082_f01",
            name: "玻ヰ璃＝ラリック",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/082/Lalique.jpg",
                            "char/082/Lalique2.jpg",
                            "char/082/Lalique3.jpg"], type: "base" },
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
        },
        // 衿栖＝シュナイダー
        {
            id: "g082_s01",
            name: "衿栖＝シュナイダー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/082/Elisu.jpg"], type: "base" }
            ]
        },
        // 糸遠＝ラリック
        {
            id: "g082_s02",
            name: "糸遠＝ラリック",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/082/Shion.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
