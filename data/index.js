// ======================================================
// Otome FavList
// Game Registry
// ======================================================

/*
    所有游戏只需要在这里注册一次。

    新增游戏步骤：

    ① 新建：

        data/games/xxx.js

    ② 在下面加入：

        xxx

    完成。

    不需要修改任何 JS。
*/


// ======================================================
// Game List
// ======================================================

const GAME_DATABASE = [

    ...piofiore

];


// ======================================================
// Auto Sort
// ======================================================

GAME_DATABASE.sort((a, b) => {

    return a.sortName.localeCompare(

        b.sortName,

        "en",

        {

            sensitivity:"base"

        }

    );

});


// ======================================================
// Character Sort
// ======================================================

GAME_DATABASE.forEach(game => {

    game.characters.sort((a, b) => {

        //------------------------------------------------
        // Female
        //------------------------------------------------

        if (a.gender !== b.gender) {

            return a.gender === "female"

                ? -1

                : 1;

        }

        //------------------------------------------------
        // A-Z
        //------------------------------------------------

        return a.sortName.localeCompare(

            b.sortName,

            "en",

            {

                sensitivity:"base"

            }

        );

    });

});

// ======================================================
// Couple Sort
// ======================================================

GAME_DATABASE.forEach(game => {

    //------------------------------------------
    // Heroine
    //------------------------------------------

    game.couple.heroines.sort((aID, bID) => {

        const heroineA = game.heroines.find(

            heroine => heroine.id === aID

        );

        const heroineB = game.heroines.find(

            heroine => heroine.id === bID

        );

        if (!heroineA || !heroineB) {

            return 0;

        }

        return heroineA.sortName.localeCompare(

            heroineB.sortName,

            "en",

            {

                sensitivity:"base"

            }

        );

    });

    //------------------------------------------
    // Character
    //------------------------------------------

    game.couple.characters.sort((aID, bID) => {

        const characterA = game.characters.find(

            character => character.id === aID

        );

        const characterB = game.characters.find(

            character => character.id === bID

        );

        if (!characterA || !characterB) {

            return 0;

        }

        return characterA.sortName.localeCompare(

            characterB.sortName,

            "en",

            {

                sensitivity:"base"

            }

        );

    });

});

// ======================================================
// Get Characters
// ======================================================

function getCharacters(

    gameID,

    options = {}

) {

    const game = getGame(gameID);

    if (!game) {

        return [];

    }

    let characters = [

        ...game.characters

    ];

    //------------------------------------------
    // Hidden Character
    //------------------------------------------

    if (

        options.showHidden !== true

    ) {

        characters = characters.filter(

            character => !character.hidden

        );

    }

    //------------------------------------------
    // Sequel / FD
    //------------------------------------------

    if (

        Array.isArray(options.enabledSources)

    ) {

        characters = characters.filter(

            character => {

                if (

                    character.source === "base"

                ) {

                    return true;

                }

                return options.enabledSources.includes(

                    character.source

                );

            }

        );

    }

    return characters;

}


// ======================================================
// Get Heroines
// ======================================================

function getHeroines(gameID) {

    const game = getGame(gameID);

    if (!game) {

        return [];

    }

    return [...game.heroines];

}


// ======================================================
// Get Couple Characters
// ======================================================

function getCoupleCharacters(gameID) {

    const game = getGame(gameID);

    if (!game) {

        return [];

    }

    return game.couple.characters.map(id =>

        game.characters.find(

            character => character.id === id

        )

    ).filter(Boolean);

}


// ======================================================
// Get Couple Heroines
// ======================================================

function getCoupleHeroines(gameID) {

    const game = getGame(gameID);

    if (!game) {

        return [];

    }

    return game.couple.heroines.map(id =>

        game.heroines.find(

            heroine => heroine.id === id

        )

    ).filter(Boolean);

}
