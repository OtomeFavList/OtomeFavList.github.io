// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game107", // 全局唯一ID，不可重复，如 game001
    name: "ときめきメモリアル Girl's Side 3rd Story",
    year: "2024",
    publisher: ["KONAMI"],
    cnStudio: "暂无",
    writer: [
        {name:"内田明理", lang:"zh"},
        {name:"田島あきこ", lang:"zh"},
        {name:"小松原里枝子", lang:"zh"},
        {name:"神山敬介", lang:"zh"},
        {name:"松岡功", lang:"zh"},
        {name:"川名良昌", lang:"zh"},
        {name:"株式会社エム·ツー", lang:"zh"},
        {name:"有限会社コーデックス", lang:"zh"},
        {name:"ちゃい", lang:"ja"},
    ],
    art: [
        {name:"小松原里枝子", lang:"zh"}
    ],
    cover: "game/107.jpg", // 相对路径，游戏封面
    charList: [
        // 大迫力
        {
            id: "g107_m01",
            name: "大迫力",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Chikara.jpg",
                            "char/107/Chikara2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 不二山嵐
        {
            id: "g107_m02",
            name: "不二山嵐",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Fujiyama.jpg",
                            "char/107/Fujiyama2.jpg"], type: "base" },
            ]
        },
        // 新名旬平
        {
            id: "g107_m03",
            name: "新名旬平",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Junpei.jpg",
                            "char/107/Junpei2.jpg"], type: "base" },
            ]
        },
        // 紺野玉緒
        {
            id: "g107_m04",
            name: "紺野玉緒",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Konno.jpg",
                            "char/107/Konno2.jpg"], type: "base" },
            ]
        },
        // 桜井琉夏
        {
            id: "g107_m05",
            name: "桜井琉夏",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Ruka.jpg",
                            "char/107/Ruka2.jpg"], type: "base" },
            ]
        },
        // 桜井琥一
        {
            id: "g107_m06",
            name: "桜井琥一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Sakurai.jpg",
                            "char/107/Sakurai2.jpg",
                            "char/107/Sakurai3.jpg"], type: "base" },
            ]
        },
        // 設楽聖司
        {
            id: "g107_m07",
            name: "設楽聖司",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Seiji.jpg",
                            "char/107/Seiji2.jpg"], type: "base" },
            ]
        },
        // 平健太
        {
            id: "g107_h01",
            name: "平健太",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Kenta.jpg"], type: "base" }
            ]
        },
        // 藍沢秋吾
        {
            id: "g107_h02",
            name: "藍沢秋吾",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Shugo.jpg"], type: "base" }
            ]
        },
        // 春日太陽
        {
            id: "g107_h03",
            name: "春日太陽",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Taiyo.jpg"], type: "base" }
            ]
        },
        // 蓮見達也
        {
            id: "g107_h04",
            name: "蓮見達也",
            gender: "male",
            isHidden: true,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/107/Tatsuya.jpg"], type: "base" },
            ]
        },
        // 花椿カレン
        {
            id: "g107_s01",
            name: "花椿カレン",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/107/Karen.jpg",
                            "char/107/Karen2.jpg"], type: "base" }
            ]
        },
        // 宇賀神みよ
        {
            id: "g107_s02",
            name: "宇賀神みよ",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/107/Miyo.jpg",
                            "char/107/Miyo2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
