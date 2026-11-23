// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game146", // 全局唯一ID，不可重复，如 game001
    name: "イケメン戦国◆時をかける恋 新たなる出逢い",
    year: "2022",
    publisher: ["CYBIRD","Otomate"],
    cnStudio: "暂无",
    writer: [
        {name:"晴日青", lang:"zh"},
        {name:"蒼木空央", lang:"zh"}
    ],
    art: [
        {name:"山田シロ", lang:"zh"}
    ],
    cover: "game/146.jpg", // 相对路径，游戏封面
    charList: [
        // 水崎舞
        {
            id: "g146_f01",
            name: "水崎舞",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Mai.png"], type: "base" },
            ]
        },
        // 明智光秀
        {
            id: "g146_m01",
            name: "明智光秀",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Akechi.png",
                            "char/146/Akechi2.jpg"], type: "base" }
            ]
        },
        // 伊達政宗
        {
            id: "g146_m02",
            name: "伊達政宗",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Date.png",
                            "char/146/Date2.png",
                            "char/146/Date3.png",
                            "char/146/Date4.jpg"], type: "base" }
            ]
        },
        // 豊臣秀吉
        {
            id: "g146_m03",
            name: "豊臣秀吉",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Hideyoshi.png",
                            "char/146/Hideyoshi2.png",
                            "char/146/Hideyoshi3.png",
                            "char/146/Hideyoshi4.jpg"], type: "base" }
            ]
        },
        // 徳川家康
        {
            id: "g146_m04",
            name: "徳川家康",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Ieyasu.png",
                            "char/146/Ieyasu2.png",
                            "char/146/Ieyasu3.png",
                            "char/146/Ieyasu4.jpg"], type: "base" }
            ]
        },
        // 顕如
        {
            id: "g146_m05",
            name: "顕如",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Kennyo.png",
                            "char/146/Kennyo2.jpg"], type: "base" }
            ]
        },
        // 上杉謙信
        {
            id: "g146_m06",
            name: "上杉謙信",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Kenshin.png",
                            "char/146/Kenshin2.png",
                            "char/146/Kenshin3.png",
                            "char/146/Kenshin4.jpg"], type: "base" }
            ]
        },
        // 石田三成
        {
            id: "g146_m07",
            name: "石田三成",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Mitsunari.png",
                            "char/146/Mitsunari2.jpg"], type: "base" }
            ]
        },
        // 森蘭丸
        {
            id: "g146_m08",
            name: "森蘭丸",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Mori.png",
                            "char/146/Mori2.png",
                            "char/146/Mori3.png",
                            "char/146/Mori4.jpg"], type: "base" }
            ]
        },
        // 織田信長
        {
            id: "g146_m09",
            name: "織田信長",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Oda.png",
                            "char/146/Oda2.png",
                            "char/146/Oda3.png",
                            "char/146/Oda4.jpg"], type: "base" }
            ]
        },
        // 猿飛佐助
        {
            id: "g146_m10",
            name: "猿飛佐助",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Sasuke.png",
                            "char/146/Sasuke2.jpg"], type: "base" }
            ]
        },
        // 武田信玄
        {
            id: "g146_m11",
            name: "武田信玄",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Shingen.png",
                            "char/146/Shingen2.png",
                            "char/146/Shingen3.png",
                            "char/146/Shingen4.jpg"], type: "base" }
            ]
        },
        // 今川義元
        {
            id: "g146_m12",
            name: "今川義元",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Yoshimoto.png",
                            "char/146/Yoshimoto2.png",
                            "char/146/Yoshimoto3.png",
                            "char/146/Yoshimoto4.jpg"], type: "base" }
            ]
        },
        // 真田幸村
        {
            id: "g146_m13",
            name: "真田幸村",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/146/Yukimura.png",
                            "char/146/Yukimura2.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
