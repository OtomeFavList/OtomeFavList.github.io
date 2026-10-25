// ✅已核对信息
const gameData = {
    id: "game078", // 全局唯一ID，不可重复，如 game001
    name: "霓虹三国 -Echoes of the Lost-",
    year: "2026",
    publisher: ["AmuLit"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"吉村りりか", lang:"zh"}
    ],
    art: [
        {name:"多花緒", lang:"zh"}
    ],
    cover: "game/078.jpg", // 相对路径，游戏封面
    charList: [
        // 刘·玄娅
        {
            id: "g078_f01",
            name: "刘·玄娅",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/078/Liu.jpg",
                            "char/078/Liu2.jpg",
                            "char/078/Liu3.jpg",
                            "char/078/Liu4.jpg",
                            "char/078/Liu5.jpg"], type: "base" },
            ]
        },
        // 关特·云德
        {
            id: "g078_m01",
            name: "关特·云德",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/078/Gante.jpg",
                            "char/078/Gante2.jpg",
                            "char/078/Gante3.jpg",
                            "char/078/Gante4.jpg",
                            "char/078/Gante5.jpg",
                            "char/078/Gante6.jpg"], type: "base" },
            ]
        },
        // 曹德·孟奈
        {
            id: "g078_m02",
            name: "曹德·孟奈",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/078/Sodyk.jpg",
                            "char/078/Sodyk2.jpg",
                            "char/078/Sodyk3.jpg",
                            "char/078/Sodyk4.jpg",
                            "char/078/Sodyk5.jpg",
                            "char/078/Sodyk6.jpg"], type: "base" },
            ]
        },
        // 孙·真白
        {
            id: "g078_m03",
            name: "孙·真白",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/078/Sun.jpg",
                            "char/078/Sun2.jpg",
                            "char/078/Sun3.jpg",
                            "char/078/Sun4.jpg",
                            "char/078/Sun5.jpg",
                            "char/078/Sun6.jpg"], type: "base" },
            ]
        },
        // 张·飞翼
        {
            id: "g078_m04",
            name: "张·飞翼",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/078/Zhang.jpg",
                            "char/078/Zhang2.jpg",
                            "char/078/Zhang3.jpg",
                            "char/078/Zhang4.jpg",
                            "char/078/Zhang5.jpg",
                            "char/078/Zhang6.jpg"], type: "base" },
            ]
        },
        // 卓·毕颖
        {
            id: "g078_s01",
            name: "卓·毕颖",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Biei.jpg",
                            "char/078/Biei2.jpg"], type: "base" }
            ]
        },
        // 黄·诚忠
        {
            id: "g078_s02",
            name: "黄·诚忠",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Chen.jpg"], type: "base" }
            ]
        },
        // 范恩·厉肃
        {
            id: "g078_s03",
            name: "范恩·厉肃",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Fann.jpg"], type: "base" }
            ]
        },
        // 绍·煌弼
        {
            id: "g078_s04",
            name: "绍·煌弼",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Feng.jpg",
                            "char/078/Feng2.jpg",
                            "char/078/Feng3.jpg"], type: "base" }
            ]
        },
        // 袁·公路
        {
            id: "g078_s05",
            name: "袁·公路",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Gonglu.jpg",
                            "char/078/Gonglu2.jpg",
                            "char/078/Gonglu3.jpg"], type: "base" }
            ]
        },
        // 华·雄恶
        {
            id: "g078_s06",
            name: "华·雄恶",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Guy.jpg"], type: "base" }
            ]
        },
        // 吉于
        {
            id: "g078_s07",
            name: "吉于",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Ji.jpg"], type: "base" }
            ]
        },
        // 郃·真义
        {
            id: "g078_s08",
            name: "郃·真义",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Junyi.jpg"], type: "base" }
            ]
        },
        // 灵森·纪煞
        {
            id: "g078_s09",
            name: "灵森·纪煞",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Khia.jpg"], type: "base" }
            ]
        },
        // 许褚·约纳
        {
            id: "g078_s10",
            name: "许褚·约纳",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Kyochu.jpg"], type: "base" }
            ]
        },
        // 马乔·木莲
        {
            id: "g078_s11",
            name: "马乔·木莲",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Mazho.jpg",
                            "char/078/Mazho2.jpg",
                            "char/078/Mazho3.jpg"], type: "base" }
            ]
        },
        // 美美
        {
            id: "g078_s12",
            name: "美美",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Meimei.jpg"], type: "base" }
            ]
        },
        // R
        {
            id: "g078_s13",
            name: "R",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/R.jpg",
                            "char/078/R2.jpg",
                            "char/078/R3.jpg"], type: "base" }
            ]
        },
        // 貂·莲允
        {
            id: "g078_s14",
            name: "貂·莲允",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Raine.jpg"], type: "base" }
            ]
        },
        // 辽·文钰
        {
            id: "g078_s15",
            name: "辽·文钰",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Wenyu.jpg"], type: "base" }
            ]
        },
        // 夏惇·元月
        {
            id: "g078_s16",
            name: "夏惇·元月",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Xiadun.jpg"], type: "base" }
            ]
        },
        // 瑜·瑾桐
        {
            id: "g078_s17",
            name: "瑜·瑾桐",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Yu.jpg"], type: "base" }
            ]
        },
        // 云·玉龙
        {
            id: "g078_s18",
            name: "云·玉龙",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Yunzi.jpg",
                            "char/078/Yunzi2.jpg"], type: "base" }
            ]
        },
        // 雪糜·子竺
        {
            id: "g078_s19",
            name: "雪糜·子竺",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Zhia.jpg",
                            "char/078/Zhia2.jpg",
                            "char/078/Zhia3.jpg"], type: "base" }
            ]
        },
        // 雪糜·子方
        {
            id: "g078_s20",
            name: "雪糜·子方",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/078/Zhiho.jpg",
                            "char/078/Zhiho2.jpg",
                            "char/078/Zhiho3.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
