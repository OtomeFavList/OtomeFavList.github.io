// ⚠️配角未添加
const gameData = {
    id: "game109", // 全局唯一ID，不可重复，如 game001
    name: "Le Mirage Mystique",
    year: "2026",
    publisher: ["BROCCOLI","LicoBiTs"],
    cnStudio: "暂无",
    writer: [
        {name:"かずら林檎", lang:"ja"},
        {name:"いちの恵理", lang:"ja"}
    ],
    art: [
        {name:"およ", lang:"ja"}
    ],
    cover: "game/109.jpg", // 相对路径，游戏封面
    charList: [
        // アリア·ラプラード
        {
            id: "g109_f01",
            name: "アリア·ラプラード",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/109/Aria.jpg",
                            "char/109/Aria2.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // シャルル·パラディール
        {
            id: "g109_m01",
            name: "シャルル·パラディール",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/109/Charles.jpg",
                            "char/109/Charles2.jpg",
                            "char/109/Charles3.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // エヴァン·クロフォード
        {
            id: "g109_m02",
            name: "エヴァン·クロフォード",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/109/Evan.jpg",
                            "char/109/Evan2.jpg"], type: "base" },
            ]
        },
        // ジャック·レスター
        {
            id: "g109_m03",
            name: "ジャック·レスター",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/109/Jack.jpg",
                            "char/109/Jack2.jpg",
                            "char/109/Jack3.jpg"], type: "base" },
            ]
        },
        // レオン·ヴィトリー
        {
            id: "g109_m04",
            name: "レオン·ヴィトリー",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/109/Leon.jpg",
                            "char/109/Leon2.jpg",
                            "char/109/Leon3.jpg"], type: "base" },
            ]
        },
        // ルディ·ロシュフォール
        {
            id: "g109_m05",
            name: "ルディ·ロシュフォール",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/109/Rudy.jpg",
                            "char/109/Rudy2.jpg",
                            "char/109/Rudy3.jpg"], type: "base" },
            ]
        }
    ]
};

// ✅新版导出！不要使用window.gameDataList.push！
export { gameData };
