// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game152", // 全局唯一ID，不可重复，如 game001
    name: "幕末恋華 花柳剣士伝",
    year: "2007",
    publisher: ["D3 Publisher"],
    cnStudio: "暂无",
    writer: [
        {name:"館山緑", lang:"zh"},
        {name:"砂原有季", lang:"zh"}
    ],
    art: [
        {name:"TOKO", lang:"en"}
    ],
    cover: "game/152.png", // 相对路径，游戏封面
    charList: [
        // 志月倫
        {
            id: "g152_f01",
            name: "志月倫",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Rin.jpg"], type: "base" }
            ]
        },
        // 相馬肇
        {
            id: "g152_m01",
            name: "相馬肇",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Hajime.jpg"], type: "base" }
            ]
        },
        // 中村半次郎
        {
            id: "g152_m02",
            name: "中村半次郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Hanjirou.jpg"], type: "base" }
            ]
        },
        // 庵
        {
            id: "g152_m03",
            name: "庵",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Iori.jpg"], type: "base" }
            ]
        },
        // 鹿取菊千代
        {
            id: "g152_m04",
            name: "鹿取菊千代",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Kikuchiyo.jpg"], type: "base" }
            ]
        },
        // 大石鍬次郎
        {
            id: "g152_m05",
            name: "大石鍬次郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Kuwajirou.jpg"], type: "base" }
            ]
        },
        // 三木三郎
        {
            id: "g152_m06",
            name: "三木三郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Saburou.jpg"], type: "base" }
            ]
        },
        // 咲彦
        {
            id: "g152_m07",
            name: "咲彦",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Sakihiko.jpg"], type: "base" }
            ]
        },
        // 辰巳
        {
            id: "g152_m08",
            name: "辰巳",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Tatsumi.jpg"], type: "base" }
            ]
        },
        // 富山弥兵衛
        {
            id: "g152_m09",
            name: "富山弥兵衛",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Yahee.jpg"], type: "base" }
            ]
        },
        // 陸奥陽之助
        {
            id: "g152_m10",
            name: "陸奥陽之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/152/Younosuke.jpg"], type: "base" }
            ]
        },
        // 原田左之助
        {
            id: "g148_s01",
            name: "原田左之助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Sanosuke.png"], type: "base" }
            ]
        },
        // 土方歳三
        {
            id: "g148_s02",
            name: "土方歳三",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Toshizou.png"], type: "base" }
            ]
        },
        // 近藤勇
        {
            id: "g148_s03",
            name: "近藤勇",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Isami.png"], type: "base" }
            ]
        },
        // 永倉新八
        {
            id: "g148_s04",
            name: "永倉新八",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Shinpachi.png"], type: "base" }
            ]
        },
        // 沖田総司
        {
            id: "g148_s05",
            name: "沖田総司",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Souji.png"], type: "base" }
            ]
        },
        // 才谷梅太郎
        {
            id: "g148_s06",
            name: "才谷梅太郎",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Saidani.png"], type: "base" }
            ]
        },
        // 斎藤一
        {
            id: "g148_s07",
            name: "斎藤一",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Hajime.png"], type: "base" }
            ]
        },
        // 桜庭鈴花
        {
            id: "g148_s08",
            name: "桜庭鈴花",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Midori.png"], type: "base" },
            ]
        },
        // 藤堂平助
        {
            id: "g148_s09",
            name: "藤堂平助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Heisuke.png"], type: "base" }
            ]
        },
        // 山南敬助
        {
            id: "g148_s10",
            name: "山南敬助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Keisuke.png"], type: "base" }
            ]
        },
        // 山崎烝
        {
            id: "g148_s11",
            name: "山崎烝",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/148/Susumu.png"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
