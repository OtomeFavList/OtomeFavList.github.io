// ==========【单个游戏独立数据模板｜新版ESModule】==========
// 新增游戏操作：复制本文件，修改所有信息、唯一ID、图片路径
// 无需额外配置，仅需要到 main.js 顶部 🚨gameIdList数组追加编号"002","003"...
const gameData = {
    id: "game024", // 全局唯一ID，不可重复
    name: "KLAP!! ~爱与惩罚~",
    year: "2023",
    publisher: ["Otomate"],
    cnStudio: "JOYOLAND",
    writer: [
        {name:"皆川千尋", lang:"zh"},
        {name:"水都", lang:"zh"},
        {name:"春夏秋冬よもひろ", lang:"zh"},
        {name:"夏越ちか", lang:"zh"},
        {name:"狐塚冬里", lang:"zh"},
        {name:"城戸蘭丸", lang:"zh"},
        {name:"駒豆羅々子", lang:"zh"},
        {name:"寺須ハウス", lang:"zh"},
        {name:"高林祐樹", lang:"zh"},
        {name:"有野幸", lang:"zh"},
        {name:"佐々木麿", lang:"zh"}
    ],
    art: [
        {name:"川人やすた", lang:"zh"}
    ],
    cover: "game/024.jpg",
    charList: [
        // 山城历
        {
            id: "g024_f01",
            name: "山城历",
            gender: "female",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/024/Koyomi.jpg",
                            "char/024/Koyomi2.jpg"], type: "base" }
            ]
        },
        // 骏河明人
        {
            id: "g024_m01",
            name: "骏河明人",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/024/Akito.jpg",
                            "char/024/Akito2.jpg",
                            "char/024/Akito3.jpg",
                            "char/024/Akito4.jpg",
                            "char/024/Akito5.jpg"], type: "base" }
            ]
        },
        // 卡米尔·赛谢林
        {
            id: "g024_m02",
            name: "卡米尔·赛谢林",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/024/Camil.jpg",
                            "char/024/Camil2.jpg",
                            "char/024/Camil3.jpg",
                            "char/024/Camil4.jpg",
                            "char/024/Camil5.jpg"], type: "base" }
            ]
        },
        // 日向忍
        {
            id: "g024_m03",
            name: "日向忍",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/024/Hyuuga.jpg",
                            "char/024/Hyuuga2.jpg",
                            "char/024/Hyuuga3.jpg",
                            "char/024/Hyuuga4.jpg"], type: "base" }
            ]
        },
        // 播磨奏
        {
            id: "g024_m04",
            name: "播磨奏",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/024/Kanade.jpg",
                            "char/024/Kanade2.jpg",
                            "char/024/Kanade3.jpg",
                            "char/024/Kanade4.jpg",
                            "char/024/Kanade5.jpg"], type: "base" }
            ]
        },
        // 近江亮
        {
            id: "g024_m05",
            name: "近江亮",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/024/Ryou.jpg",
                            "char/024/Ryou2.jpg",
                            "char/024/Ryou3.jpg",
                            "char/024/Ryou4.jpg"], type: "base" }
            ]
        },
        // 出云紫苑
        {
            id: "g024_m06",
            name: "出云紫苑",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/024/Shion.jpg",
                            "char/024/Shion2.jpg",
                            "char/024/Shion3.jpg",
                            "char/024/Shion4.jpg"], type: "base" }
            ]
        },
        // 周防壮介
        {
            id: "g024_m07",
            name: "周防壮介",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/024/Sousuke.jpg",
                            "char/024/Sousuke2.jpg",
                            "char/024/Sousuke3.jpg",
                            "char/024/Sousuke4.jpg",
                            "char/024/Sousuke5.jpg"], type: "base" }
            ]
        },
        // 美作灯真
        {
            id: "g024_m08",
            name: "美作灯真",
            gender: "male",
            isHidden: false,
            isFD: false,
            images: [
                { srcList: ["char/024/Touma.jpg",
                            "char/024/Touma2.jpg",
                            "char/024/Touma3.jpg",
                            "char/024/Touma4.jpg",
                            "char/024/Touma5.jpg"], type: "base" }
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
