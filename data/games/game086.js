// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game086", // 全局唯一ID，不可重复，如 game001
    name: "数乱digit",
    year: "2025",
    publisher: ["Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"一二階", lang:"zh"},
        {name:"紅原香", lang:"zh"},
        {name:"みぞおち鳩子", lang:"ja"},
        {name:"ミカガミ", lang:"ja"}
    ],
    art: [
        {name:"里雪", lang:"zh"},
        {name:"めろ", lang:"ja"}
    ],
    cover: "game/086.jpg", // 相对路径，游戏封面
    charList: [
        // 零崎紘可
        {
            id: "g086_f01",
            name: "零崎紘可",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Hiroka.jpg",
                            "char/086/Hiroka2.png",
                            "char/086/Hiroka3.png",
                            "char/086/Hiroka4.jpg"], type: "base" },
            ]
        },
        // 壱園央助
        {
            id: "g086_m01",
            name: "壱園央助",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Ichizono.jpg",
                            "char/086/Ichizono2.jpg",
                            "char/086/Ichizono3.jpg",
                            "char/086/Ichizono4.png",
                            "char/086/Ichizono5.png",
                            "char/086/Ichizono6.jpg"], type: "base" },
            ]
        },
        // 玖折巡
        {
            id: "g086_m02",
            name: "玖折巡",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Kuori.jpg",
                            "char/086/Kuori2.jpg",
                            "char/086/Kuori3.jpg",
                            "char/086/Kuori4.png",
                            "char/086/Kuori5.png",
                            "char/086/Kuori6.jpg"], type: "base" },
            ]
        },
        // 弐藤光
        {
            id: "g086_m03",
            name: "弐藤光",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Nitou.jpg",
                            "char/086/Nitou2.jpg",
                            "char/086/Nitou3.jpg",
                            "char/086/Nitou4.png",
                            "char/086/Nitou5.png",
                            "char/086/Nitou6.jpg"], type: "base" },
            ]
        },
        // 陸平崇樹
        {
            id: "g086_m04",
            name: "陸平崇樹",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Rokuhira.jpg",
                            "char/086/Rokuhira2.jpg",
                            "char/086/Rokuhira3.jpg",
                            "char/086/Rokuhira4.png",
                            "char/086/Rokuhira5.png",
                            "char/086/Rokuhira6.jpg"], type: "base" },
            ]
        },
        // 漆原景太郎
        {
            id: "g086_m05",
            name: "漆原景太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Shichihara.jpg",
                            "char/086/Shichihara2.jpg",
                            "char/086/Shichihara3.jpg",
                            "char/086/Shichihara4.png",
                            "char/086/Shichihara5.png",
                            "char/086/Shichihara6.jpg"], type: "base" },
            ]
        },
        // 肆形有比
        {
            id: "g086_m06",
            name: "肆形有比",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/086/Shikata.jpg",
                            "char/086/Shikata2.jpg",
                            "char/086/Shikata3.jpg",
                            "char/086/Shikata4.png",
                            "char/086/Shikata5.png",
                            "char/086/Shikata6.jpg"], type: "base" },
            ]
        },
        // 捌沢暗
        {
            id: "g86_s01",
            name: "捌沢暗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/086/An.jpg",
                            "char/086/An2.jpg",
                            "char/086/An3.jpg",
                            "char/086/An4.jpg",
                            "char/086/An5.jpg"], type: "base" }
            ]
        },
        // 伍代朋江
        {
            id: "g86_s02",
            name: "伍代朋江",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/086/Godai.jpg",
                            "char/086/Godai2.jpg",
                            "char/086/Godai3.jpg",
                            "char/086/Godai4.jpg",
                            "char/086/Godai5.jpg"], type: "base" }
            ]
        },
        // 捌沢明
        {
            id: "g86_s03",
            name: "捌沢明",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/086/Mei.jpg",
                            "char/086/Mei2.jpg",
                            "char/086/Mei3.jpg",
                            "char/086/Mei4.jpg",
                            "char/086/Mei5.jpg"], type: "base" }
            ]
        },
        // 無良木耶告
        {
            id: "g86_s04",
            name: "無良木耶告",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/086/Muraki.jpg",
                            "char/086/Muraki2.jpg",
                            "char/086/Muraki3.jpg"], type: "base" }
            ]
        },
        // 参河利保子
        {
            id: "g86_s05",
            name: "参河利保子",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/086/Sanga.jpg",
                            "char/086/Sanga2.jpg",
                            "char/086/Sanga3.jpg",
                            "char/086/Sanga4.jpg",
                            "char/086/Sanga5.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
