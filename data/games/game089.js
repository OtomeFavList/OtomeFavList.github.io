// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game089", // 全局唯一ID，不可重复，如 game001
    name: "BROTHERS CONFLICT Precious Baby",
    year: "2019",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"小林悠奈", lang:"zh"},
        {name:"川澄あみ", lang:"zh"}
    ],
    art: [
        {name:"ウダジョ", lang:"ja"}
    ],
    cover: "game/089.jpg", // 相对路径，游戏封面
    charList: [
        // 朝日奈絵麻
        {
            id: "g089_f01",
            name: "朝日奈絵麻",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,        // true=续作/FD专属角色，FD开关控制是否展示该角色
            images: [
                { srcList: ["char/089/Ema.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 朝日奈梓
        {
            id: "g089_m01",
            name: "朝日奈梓",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Azusa.jpg",
                            "char/089/Azusa2.jpg",
                            "char/089/Azusa3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 朝日奈風斗
        {
            id: "g089_m02",
            name: "朝日奈風斗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Fuuto.jpg",
                            "char/089/Fuuto2.jpg",
                            "char/089/Fuuto3.jpg"], type: "base" },
            ]
        },
        // 朝日奈光
        {
            id: "g089_m03",
            name: "朝日奈光",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Hikaru.jpg",
                            "char/089/Hikaru2.jpg",
                            "char/089/Hikaru3.jpg"], type: "base" },
            ]
        },
        // 朝日奈祈織
        {
            id: "g089_m04",
            name: "朝日奈祈織",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Iori.jpg",
                            "char/089/Iori2.jpg",
                            "char/089/Iori3.jpg"], type: "base" },
            ]
        },
        // 朝日奈要
        {
            id: "g089_m05",
            name: "朝日奈要",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Kaname.jpg",
                            "char/089/Kaname2.jpg",
                            "char/089/Kaname3.jpg"], type: "base" },
            ]
        },
        // 朝日奈琉生
        {
            id: "g089_m06",
            name: "朝日奈琉生",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Louis.jpg",
                            "char/089/Louis2.jpg",
                            "char/089/Louis3.jpg"], type: "base" },
            ]
        },
        // 朝日奈雅臣
        {
            id: "g089_m07",
            name: "朝日奈雅臣",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Masaomi.jpg",
                            "char/089/Masaomi2.jpg",
                            "char/089/Masaomi3.jpg"], type: "base" },
            ]
        },
        // 朝日奈棗
        {
            id: "g089_m08",
            name: "朝日奈棗",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Natsume.jpg",
                            "char/089/Natsume2.jpg",
                            "char/089/Natsume3.jpg"], type: "base" },
            ]
        },
        // 朝日奈昴
        {
            id: "g089_m09",
            name: "朝日奈昴",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Subaru.jpg",
                            "char/089/Subaru2.jpg",
                            "char/089/Subaru3.jpg"], type: "base" },
            ]
        },
        // 朝日奈椿
        {
            id: "g089_m10",
            name: "朝日奈椿",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Tsubaki.jpg",
                            "char/089/Tsubaki2.jpg",
                            "char/089/Tsubaki3.jpg"], type: "base" },
            ]
        },
        // 朝日奈右京
        {
            id: "g089_m11",
            name: "朝日奈右京",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Ukyou.jpg",
                            "char/089/Ukyou2.jpg",
                            "char/089/Ukyou3.jpg"], type: "base" },
            ]
        },
        // 朝日奈弥
        {
            id: "g089_m12",
            name: "朝日奈弥",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Wataru.jpg",
                            "char/089/Wataru2.jpg",
                            "char/089/Wataru3.jpg"], type: "base" },
            ]
        },
        // 朝日奈侑介
        {
            id: "g089_m13",
            name: "朝日奈侑介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/089/Yuusuke.jpg",
                            "char/089/Yuusuke2.jpg",
                            "char/089/Yuusuke3.jpg"], type: "base" },
            ]
        },
        // ジュリ
        {
            id: "g089_h01",
            name: "ジュリ",
            gender: "male",
            isHidden: true,
            isFD: false,
            images: [
                { srcList: ["char/089/Juli.jpg",
                            "char/089/Juli2.jpg"], type: "base" },
            ]
        },
        // 佐々倉和馬
        {
            id: "g089_s01",
            name: "佐々倉和馬",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/089/Kazuma.jpg"], type: "base" }
            ]
        },
        // 今井真秀子
        {
            id: "g089_s02",
            name: "今井真秀子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/089/Mahoko.jpg"], type: "base" }
            ]
        },
        // 朝日奈美和
        {
            id: "g089_s03",
            name: "朝日奈美和",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/089/Miwa.jpg"], type: "base" }
            ]
        },
        // 日向麟太郎
        {
            id: "g089_s04",
            name: "日向麟太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/089/Rintaro.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
