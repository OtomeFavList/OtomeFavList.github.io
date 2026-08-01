// ======================================================
// Otome FavList
// Game Data
// Piofiore no Banshou
// ======================================================

const piofiore = [

{

// ======================================================
// Basic Information
// ======================================================

id: "piofiore",

name: "虔诚之花的晚钟",

shortName: "Piofiore",

englishName: "Piofiore: Fated Memories",

sortName: "Piofiore",

company: "Otomate",

localization: "",

platforms: [

    "PS Vita",

    "Nintendo Switch"

],

releaseDate:{

    jp:"2018-08-30",

    zh:""

},

cover:"images/piofiore/cover.webp",

logo:"images/piofiore/logo.webp",

keywords:[

    "Piofiore",

    "Fated Memories",

    "虔诚之花",

    "1926",

    "Otomate"

],


// ======================================================
// Options
// ======================================================

options:{

    //-------------------------------------------------
    // Hidden Character
    //-------------------------------------------------

    hiddenCharacters:{

        enabled:true,

        title:"显示隐藏角色",

        warning:"可能包含本篇隐藏攻略对象。",

        default:false

    },

    //-------------------------------------------------
    // Sequels / FD
    //-------------------------------------------------

    sequel:[

        {

            id:"1926",

            title:"显示《Episodio 1926》角色",

            warning:"需要游玩《虔诚之花的晚钟 -Episodio 1926-》。",

            default:false

        }

    ]

},


// ======================================================
// Heroines
// ======================================================

heroines:[

    {

        id:"liliana",

        name:"莉莉安娜",

        englishName:"Liliana Adornato",

        sortName:"Liliana",

        thumbnail:"..."

        image:"images/piofiore/heroine/liliana.webp"

    }

],

    // ======================================================
// Characters
// 排序不用手动维护。
// JS 会自动：
//
// Female (A-Z)
//
// ↓
//
// Male (A-Z)
// ======================================================

characters:[

// ======================================================
// Female
// ======================================================

{

    id:"liliana",

    name:"莉莉安娜",

    englishName:"Liliana Adornato",

    sortName:"Liliana",

    gender:"female",

    hidden:false,

    source:"base",

    images:[

        {

            id:"default",

            name:"本篇",

            source:"base",

            thumbnail:"..."

            file:"images/piofiore/heroine/liliana.webp"

        }

    ]

},

// ======================================================
// Male
// ======================================================

{

    id:"dante",

    name:"但丁",

    englishName:"Dante Falzone",

    sortName:"Dante",

    gender:"male",

    hidden:false,

    source:"base",

    images:[

        {

            id:"default",

            name:"本篇",

            source:"base",

            thumbnail:"..."

            file:"images/piofiore/dante/01.webp"

        },

        {

            id:"1926",

            name:"1926",

            source:"1926",

            thumbnail:"..."

            file:"images/piofiore/dante/02.webp"

        }

    ]

},

{

    id:"gilbert",

    name:"吉尔伯特",

    englishName:"Gilbert Redford",

    sortName:"Gilbert",

    gender:"male",

    hidden:false,

    source:"base",

    images:[

        {

            id:"default",

            name:"本篇",

            source:"base",

            thumbnail:"..."

            file:"images/piofiore/gilbert/01.webp"

        }

    ]

},

{

    id:"henri",

    name:"亨利",

    englishName:"Henri Lambert",

    sortName:"Henri",

    gender:"male",

    hidden:true,

    source:"base",

    images:[

        {

            id:"default",

            name:"本篇",

            source:"base",

            thumbnail:"..."

            file:"images/piofiore/henri/01.webp"

        }

    ]

},

{

    id:"nicola",

    name:"尼古拉",

    englishName:"Nicola Francesca",

    sortName:"Nicola",

    gender:"male",

    hidden:false,

    source:"base",

    images:[

        {

            id:"default",

            name:"本篇",

            source:"base",

            thumbnail:"..."

            file:"images/piofiore/nicola/01.webp"

        },

        {

            id:"1926",

            name:"1926",

            source:"1926",

            thumbnail:"..."

            file:"images/piofiore/nicola/02.webp"

        }

    ]

},

    {

    id:"orlok",

    name:"奥洛克",

    englishName:"Orlok",

    sortName:"Orlok",

    gender:"male",

    hidden:false,

    source:"base",

    images:[

        {

            id:"default",

            name:"本篇",

            source:"base",

            thumbnail:"..."

            file:"images/piofiore/orlok/01.webp"

        },

        {

            id:"1926",

            name:"1926",

            source:"1926",

            thumbnail:"..."

            file:"images/piofiore/orlok/02.webp"

        }

    ]

},

{

    id:"yang",

    name:"杨",

    englishName:"Yang",

    sortName:"Yang",

    gender:"male",

    hidden:false,

    source:"base",

    images:[

        {

            id:"default",

            name:"本篇",

            source:"base",

            thumbnail:"..."

            file:"images/piofiore/yang/01.webp"

        },

        {

            id:"casual",

            name:"私服",

            source:"base",

            thumbnail:"..."

            file:"images/piofiore/yang/02.webp"

        },

        {

            id:"1926",

            name:"1926",

            source:"1926",

            thumbnail:"..."

            file:"images/piofiore/yang/03.webp"

        }

    ]

}

],


// ======================================================
// Couple
// ======================================================

couple:{

    //------------------------------------------
    // 可选择的女主
    //------------------------------------------

    heroines:[

        "liliana"

    ],

    //------------------------------------------
    // 可选择的男角色
    //------------------------------------------

    characters:[

        "dante",

        "gilbert",

        "henri",

        "nicola",

        "orlok",

        "yang"

    ],

    //------------------------------------------
    // 默认生成一组 Couple
    //------------------------------------------

    defaultRows:1,

    //------------------------------------------
    // 最多允许几组 Couple
    //------------------------------------------

    maxRows:30

},

    // ======================================================
// Export
// ======================================================

exportConfig:{

    //---------------------------------------------
    // Character 默认排序
    //---------------------------------------------

    characterSort:[

        "female",

        "male"

    ],

    //---------------------------------------------
    // Couple 默认排序
    //---------------------------------------------

    coupleSort:[

        "heroine",

        "character"

    ],

    //---------------------------------------------
    // 默认展开
    //---------------------------------------------

    defaultExpand:true,

    //---------------------------------------------
    // 默认折叠
    //---------------------------------------------

    defaultCollapse:false

},


// ======================================================
// Theme
// ======================================================

theme:{

    //---------------------------------------------
    // 默认背景颜色
    //---------------------------------------------

    background:"#F7F7F7",

    //---------------------------------------------
    // 标题颜色
    //---------------------------------------------

    title:"#2B2B2B",

    //---------------------------------------------
    // 正文颜色
    //---------------------------------------------

    text:"#444444",

    //---------------------------------------------
    // 边框颜色
    //---------------------------------------------

    border:"#D9D9D9"

},


// ======================================================
// Search Filters
// ======================================================

filters:{

    company:"Otomate",

    localization:"",

    platform:[

        "Nintendo Switch",

        "PS Vita"

    ],

    year:"2018"

},

    // ======================================================
// Validation
// ======================================================

validation:{

    //---------------------------------------------
    // Character
    //---------------------------------------------

    allowDuplicateCharacter:false,

    //---------------------------------------------
    // Couple
    //---------------------------------------------

    allowDuplicateCouple:true,

    //---------------------------------------------
    // Heroine
    //---------------------------------------------

    allowDuplicateHeroine:true

},


// ======================================================
// Future Reserved
// ======================================================

extra:{

    //---------------------------------------------
    // 官方网站
    //---------------------------------------------

    officialWebsite:"",

    //---------------------------------------------
    // 官网Logo
    //---------------------------------------------

    officialLogo:"",

    //---------------------------------------------
    // BGM
    //---------------------------------------------

    music:"",

    //---------------------------------------------
    // DLC
    //---------------------------------------------

    dlc:[

    ],

    //---------------------------------------------
    // Drama CD
    //---------------------------------------------

    dramaCD:[

    ]

}

}

];
