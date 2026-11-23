// ✅已核对信息
// ℹ️未官中，官中发售后需要修改：游戏名、发售年份、汉化厂商、封面图、info图、角色名
const gameData = {
    id: "game145", // 全局唯一ID，不可重复，如 game001
    name: "Money Parasite ~嘘つきな女~",
    year: "2022",
    publisher: ["TAKUYO"],
    cnStudio: "暂无",
    writer: [
        {name:"白鳥ユアン", lang:"zh"},
        {name:"関口琴子", lang:"zh"}
    ],
    art: [
        {name:"あとりちや", lang:"ja"}
    ],
    cover: "game/145.jpg", // 相对路径，游戏封面
    charList: [
        // 畑中十萌
        {
            id: "g145_f01",
            name: "畑中十萌",
            gender: "female",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/Tomoe.jpg",
                            "char/145/Tomoe2.jpg",
                            "char/145/Tomoe3.jpg"], type: "base" }
            ]
        },
        // アミル＝サイード
        {
            id: "g145_m01",
            name: "アミル＝サイード",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/Amir.jpg",
                            "char/145/Amir2.jpg"], type: "base" }
            ]
        },
        // 加賀美楓真
        {
            id: "g145_m02",
            name: "加賀美楓真",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/Fuma.jpg",
                            "char/145/Fuma2.jpg"], type: "base" }
            ]
        },
        // 黄浩然
        {
            id: "g145_m03",
            name: "黄浩然",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/Haoren.jpg",
                            "char/145/Haoren2.jpg"], type: "base" }
            ]
        },
        // ジェレミア＝ジェンキンス
        {
            id: "g145_m04",
            name: "ジェレミア＝ジェンキンス",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/Jenkins.jpg",
                            "char/145/Jenkins2.jpg"], type: "base" }
            ]
        },
        // 田中さん
        {
            id: "g145_m05",
            name: "田中さん",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            isFdSub: false,
            images: [
                { srcList: ["char/145/Tanaka.jpg",
                            "char/145/Tanaka2.jpg"], type: "base" }
            ]
        },
        // フォツクスくん
        {
            id: "g145_s01",
            name: "フォツクスくん",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/145/Miakusu.jpg"], type: "base" }
            ]
        },
        // フォツクス2号
        {
            id: "g145_s02",
            name: "フォツクス2号",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: true,
            isFdSub: false,
            images: [
                { srcList: ["char/145/Nigou.jpg"], type: "base" }
            ]
        }
    ]
};

// ESModule导出
export { gameData };
