// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game106", // 全局唯一ID，不可重复，如 game001
    name: "ときめきメモリアル Girl's Side 2nd Season",
    year: "2024",
    publisher: ["KONAMI"],
    cnStudio: "暂无",
    writer: [
        {name:"田島あきこ", lang:"zh"},
        {name:"古館純子", lang:"zh"},
        {name:"星宮すみれ", lang:"zh"}
    ],
    art: [
        {name:"小松原里枝子", lang:"zh"}
    ],
    cover: "game/106.jpg", // 相对路径，游戏封面
    charList: [
        // クリストファー·ウェザーフィールド
        {
            id: "g106_m01",
            name: "クリストファー·ウェザーフィールド",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Christopher.jpg",
                            "char/106/Christopher2.jpg",
                            "char/106/Christopher3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 氷上格
        {
            id: "g106_m02",
            name: "氷上格",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Itaru.jpg",
                            "char/106/Itaru2.jpg",
                            "char/106/Itaru3.jpg"], type: "base" },
            ]
        },
        // 針谷幸之進
        {
            id: "g106_m03",
            name: "針谷幸之進",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Kounoshin.jpg",
                            "char/106/Kounoshin2.jpg",
                            "char/106/Kounoshin3.jpg"], type: "base" },
            ]
        },
        // 真咲元春
        {
            id: "g106_m04",
            name: "真咲元春",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Motoharu.jpg",
                            "char/106/Motoharu2.jpg",
                            "char/106/Motoharu3.jpg"], type: "base" },
            ]
        },
         // 志波勝己
        {
            id: "g106_m05",
            name: "志波勝己",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Shiba.jpg",
                            "char/106/Shiba2.jpg",
                            "char/106/Shiba3.jpg"], type: "base" },
            ]
        },
        // 天地翔太
        {
            id: "g106_m06",
            name: "天地翔太",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Shouta.jpg",
                            "char/106/Shouta2.jpg",
                            "char/106/Shouta3.jpg",
                            "char/106/Shouta4.jpg"], type: "base" },
            ]
        },
        // 佐伯瑛
        {
            id: "g106_m07",
            name: "佐伯瑛",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Teru.jpg",
                            "char/106/Teru2.jpg",
                            "char/106/Teru3.jpg"], type: "base" },
            ]
        },
        // 若王子貴文
        {
            id: "g106_m08",
            name: "若王子貴文",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Wakaouji.jpg",
                            "char/106/Wakaouji2.jpg",
                            "char/106/Wakaouji3.jpg"], type: "base" },
            ]
        },
        // 赤城一雪
        {
            id: "g106_h01",
            name: "赤城一雪",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Kazuyuki.jpg",
                            "char/106/Kazuyuki2.jpg"], type: "base" },
            ]
        },
        // 古森拓
        {
            id: "g106_h02",
            name: "古森拓",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Taku.jpg"], type: "base" },
            ]
        },
        // 真嶋太郎
        {
            id: "g106_h03",
            name: "真嶋太郎",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/106/Tarou.jpg"], type: "base" },
            ]
        },
        // 小野田千代美
        {
            id: "g106_s01",
            name: "小野田千代美",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/106/Chiyomi.jpg",
                            "char/106/Chiyomi2.jpg"], type: "base" }
            ]
        },
        // 西本はるひ
        {
            id: "g106_s02",
            name: "西本はるひ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/106/Haruhi.jpg",
                            "char/106/Haruhi2.jpg"], type: "base" }
            ]
        },
        // 花椿姫子
        {
            id: "g106_s03",
            name: "花椿姫子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/106/Himeko.jpg",
                            "char/106/Himeko2.jpg"], type: "base" }
            ]
        },
        // 水島密
        {
            id: "g106_s04",
            name: "水島密",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/106/Hisoka.jpg",
                            "char/106/Hisoka2.jpg"], type: "base" }
            ]
        },
        // 藤堂竜子
        {
            id: "g106_s05",
            name: "藤堂竜子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/106/Tatsuko.jpg",
                            "char/106/Tatsuko2.jpg"], type: "base" }
            ]
        },
        // 音成遊
        {
            id: "g106_s06",
            name: "音成遊",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/106/Yu.jpg",
                            "char/106/Yu2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
