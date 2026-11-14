// ✅已核对信息
const gameData = {
    id: "game1", // 全局唯一ID，不可重复，如 game001
    name: "崩坏世界的指引之人",
    year: "2026",
    publisher: ["Primula"],
    cnStudio: "pencil",
    writer: [
        {name:"中山智美", lang:"zh"}
    ],
    art: [
        {name:"じく", lang:"ja"}
    ],
    cover: "game/113.jpg", // 相对路径，游戏封面
    charList: [
        // 桃井光璃
        {
            id: "g113_f01",
            name: "桃井光璃",
            gender: "female",
            isHidden: false,    // true=隐藏角色，开关控制是否展示该角色
            isFD: false,    // true=续作/FD专属角色，开关控制是否展示该角色
            isSub: false,    // true=配角，开关控制是否展示该角色
            images: [
                { srcList: ["char/113/Momoi.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        },
        // 夏秋冬实果
        {
            id: "g113_m01",
            name: "夏秋冬实果",
            gender: "male",
            isHidden: false,
            isFD: false,
            isSub: false,
            images: [
                { srcList: ["char/113/Mika.jpg"], type: "base" },      // 默认基础图，始终加载
            ]
        }
    ]
};

// ESModule导出
export { gameData };
