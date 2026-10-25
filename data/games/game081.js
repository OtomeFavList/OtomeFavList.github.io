// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game081", // 全局唯一ID，不可重复，如 game001
    name: "トラブル·マギア ~訳アリ少女は未来を勝ち取るために異国の魔法学校へ留学します~",
    year: "2024",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"夏野景", lang:"zh"}
    ],
    art: [
        {name:"鈴ノ助", lang:"zh"}
    ],
    cover: "game/081.jpg",
    charList: [
        // ルチア·ユエン
        {
            id: "g081_f01",
            name: "ルチア·ユエン",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/081/Lucia.jpg",
                            "char/081/Lucia2.jpg",
                            "char/081/Lucia3.jpg",
                            "char/081/Lucia4.jpg",
                            "char/081/Lucia5.jpg",
                            "char/081/Lucia6.jpg",
                            "char/081/Lucia7.jpg",
                            "char/081/Lucia8.jpg",
                            "char/081/Lucia9.jpg",
                            "char/081/Lucia10.jpg"], type: "base" },
            ]
        },
        // アレクセイ·エルディール
        {
            id: "g081_m01",
            name: "アレクセイ·エルディール",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/081/Alexei.jpg"
                            "char/081/Alexei2.jpg",
                            "char/081/Alexei3.jpg",
                            "char/081/Alexei4.jpg",
                            "char/081/Alexei5.jpg",
                            "char/081/Alexei6.jpg",
                            "char/081/Alexei7.jpg",
                            "char/081/Alexei8.jpg",
                            "char/081/Alexei9.jpg",
                            "char/081/Alexei10.jpg"], type: "base" },
            ]
        },
        // イザヤ·クライン
        {
            id: "g081_m02",
            name: "イザヤ·クライン",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/081/Isaiah.jpg"
                            "char/081/Isaiah2.jpg",
                            "char/081/Isaiah3.jpg",
                            "char/081/Isaiah4.jpg",
                            "char/081/Isaiah5.jpg",
                            "char/081/Isaiah6.jpg",
                            "char/081/Isaiah7.jpg",
                            "char/081/Isaiah8.jpg",
                            "char/081/Isaiah9.jpg",
                            "char/081/Isaiah10.jpg"], type: "base" },
            ]
        },
        // ラルス·クロッツ
        {
            id: "g081_m03",
            name: "ラルス·クロッツ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/081/Lars.jpg"
                            "char/081/Lars2.jpg",
                            "char/081/Lars3.jpg",
                            "char/081/Lars4.jpg",
                            "char/081/Lars5.jpg",
                            "char/081/Lars6.jpg",
                            "char/081/Lars7.jpg",
                            "char/081/Lars8.jpg",
                            "char/081/Lars9.jpg",
                            "char/081/Lars10.jpg"], type: "base" },
            ]
        },
        // リカルド·サンテ
        {
            id: "g081_m04",
            name: "リカルド·サンテ",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/081/Ricardo.jpg"
                            "char/081/Ricardo2.jpg",
                            "char/081/Ricardo3.jpg",
                            "char/081/Ricardo4.jpg",
                            "char/081/Ricardo5.jpg",
                            "char/081/Ricardo6.jpg",
                            "char/081/Ricardo7.jpg",
                            "char/081/Ricardo8.jpg",
                            "char/081/Ricardo9.jpg",
                            "char/081/Ricardo10.jpg"], type: "base" },
            ]
        },
        // シオン·カルド
        {
            id: "g081_m05",
            name: "シオン·カルド",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/081/Sion.jpg"
                            "char/081/Sion2.jpg",
                            "char/081/Sion3.jpg",
                            "char/081/Sion4.jpg",
                            "char/081/Sion5.jpg",
                            "char/081/Sion6.jpg",
                            "char/081/Sion7.jpg",
                            "char/081/Sion8.jpg",
                            "char/081/Sion9.jpg",
                            "char/081/Sion10.jpg"], type: "base" },
            ]
        },
        // アニス·ロシェット
        {
            id: "g081_s01",
            name: "アニス·ロシェット",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Anise.jpg",
                            "char/081/Anise2.png"], type: "base" }
            ]
        },
        // アシュリー·ルクレル
        {
            id: "g081_s02",
            name: "アシュリー·ルクレル",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Ashley.jpg",
                            "char/081/Ashley2.png"], type: "base" }
            ]
        },
        // ケイリー·ブライアス
        {
            id: "g081_s03",
            name: "ケイリー·ブライアス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Cailey.jpg",
                            "char/081/Cailey.2.png"], type: "base" }
            ]
        },
        // コルトン·ネイディス
        {
            id: "g081_s04",
            name: "コルトン·ネイディス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Colton.jpg",
                            "char/081/Colton2.png"], type: "base" }
            ]
        },
        // エア
        {
            id: "g081_s05",
            name: "エア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Eir.jpg",
                            "char/081/Eir2.png"], type: "base" }
            ]
        },
        // エルギラ·ファルコニア
        {
            id: "g081_s06",
            name: "エルギラ·ファルコニア",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Ellegira.jpg",
                            "char/081/Ellegira2.png"], type: "base" }
            ]
        },
        // ジェラルド·エルディール
        {
            id: "g081_s07",
            name: "ジェラルド·エルディール",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Garard.jpg",
                            "char/081/Garard2.png"], type: "base" }
            ]
        },
        // グレース·カルド
        {
            id: "g081_s08",
            name: "グレース·カルド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Grace.jpg",
                            "char/081/Grace2.png"], type: "base" }
            ]
        },
        // イリーナ·クライン
        {
            id: "g081_s09",
            name: "イリーナ·クライン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Ilina.jpg",
                            "char/081/Ilina2.png"], type: "base" }
            ]
        },
        // ランベルト·ガルディ
        {
            id: "g081_s10",
            name: "ランベルト·ガルディ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Lamberto.jpg",
                            "char/081/Lamberto2.png"], type: "base" }
            ]
        },
        // リンフォード·サンテ
        {
            id: "g081_s11",
            name: "リンフォード·サンテ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Linford.jpg",
                            "char/081/Linford2.png"], type: "base" }
            ]
        },
        // メアリーゼ·ジルナドーレ
        {
            id: "g081_s12",
            name: "メアリーゼ·ジルナドーレ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Mayalise.jpg",
                            "char/081/Mayalise2.png"], type: "base" }
            ]
        },
        // オリヴァー·ハミルトン
        {
            id: "g081_s13",
            name: "オリヴァー·ハミルトン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Oliver.jpg",
                            "char/081/Oliver2.png"], type: "base" }
            ]
        },
        // オスタラ
        {
            id: "g081_s14",
            name: "オスタラ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Ostara.jpg",
                            "char/081/Ostara2.png"], type: "base" }
            ]
        },
        // ヴェイン·ブルローク
        {
            id: "g081_s15",
            name: "ヴェイン·ブルローク",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/081/Vein.jpg",
                            "char/081/Vein2.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
