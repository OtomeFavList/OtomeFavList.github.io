// ======================================================
// Otome FavList V3
// Game Loader
// ======================================================

"use strict";


// ======================================================
// Current Game
// ======================================================

let currentGame = null;


// ======================================================
// Open Game Selector
// ======================================================

function openGameSelector() {

    const modal = document.getElementById(

        "gameSelectorModal"

    );

    if (!modal) {

        return;

    }

    modal.classList.add(

        "show"

    );

    buildGameList("");

}


// ======================================================
// Close Game Selector
// ======================================================

function closeGameSelector() {

    const modal = document.getElementById(

        "gameSelectorModal"

    );

    if (!modal) {

        return;

    }

    modal.classList.remove(

        "show"

    );

}


// ======================================================
// Build Game List
// ======================================================

function buildGameList(

    keyword = ""

) {

    const list = document.getElementById(

        "gameSearchResult"

    );

    if (!list) {

        return;

    }

    list.innerHTML = "";

    let games = getAllGames();

    //----------------------------------------
    // Search
    //----------------------------------------

    if (

        keyword.trim() !== ""

    ) {

        const text = keyword

            .trim()

            .toLowerCase();

        games = games.filter(game => {

            //--------------------------------
            // Name
            //--------------------------------

            if (

                game.name.toLowerCase().includes(text)

            ) {

                return true;

            }

            //--------------------------------
            // English
            //--------------------------------

            if (

                game.englishName

                .toLowerCase()

                .includes(text)

            ) {

                return true;

            }

            //--------------------------------
            // Keywords
            //--------------------------------

            return game.keywords.some(

                keyword =>

                keyword

                .toLowerCase()

                .includes(text)

            );

        });

    }

    renderGameList(

        games

    );

}

// ======================================================
// Render Game List
// ======================================================

function renderGameList(

    games

) {

    const list = document.getElementById(

        "gameSearchResult"

    );

    if (!list) {

        return;

    }

    list.innerHTML = "";

    //------------------------------------------
    // Empty
    //------------------------------------------

    if (

        games.length === 0

    ) {

        const empty = document.createElement(

            "div"

        );

        empty.className =

            "game-search-empty";

        empty.textContent =

            "没有找到对应游戏。";

        list.appendChild(

            empty

        );

        return;

    }

    //------------------------------------------
    // Game Card
    //------------------------------------------

    games.forEach(game => {

        const item = createGameListItem(

            game

        );

        list.appendChild(

            item

        );

    });

}


// ======================================================
// Create Game Item
// ======================================================

function createGameListItem(

    game

) {

    const button = document.createElement(

        "button"

    );

    button.type =

        "button";

    button.className =

        "game-search-item";

    button.dataset.gameId =

        game.id;

    //--------------------------------------------------
    // Left
    //--------------------------------------------------

    const left = document.createElement(

        "div"

    );

    left.className =

        "game-search-left";

    //--------------------------------------------------
    // Cover
    //--------------------------------------------------

    const cover = document.createElement(

        "img"

    );

    cover.className =

        "game-search-cover";

    cover.src =

        game.cover;

    cover.alt =

        game.name;

    cover.loading =

        "lazy";

    left.appendChild(

        cover

    );

    //--------------------------------------------------
    // Text
    //--------------------------------------------------

    const info = document.createElement(

        "div"

    );

    info.className =

        "game-search-info";

    const title = document.createElement(

        "div"

    );

    title.className =

        "game-search-title";

    title.textContent =

        game.name;

    const english = document.createElement(

        "div"

    );

    english.className =

        "game-search-english";

    english.textContent =

        game.englishName;

    info.appendChild(

        title

    );

    info.appendChild(

        english

    );

    left.appendChild(

        info

    );

    button.appendChild(

        left

    );

//--------------------------------------------------
    // Right
    //--------------------------------------------------

    const right = document.createElement(

        "div"

    );

    right.className =

        "game-search-right";

    //--------------------------------------------------
    // Company
    //--------------------------------------------------

    const company = document.createElement(

        "div"

    );

    company.className =

        "game-search-company";

    company.textContent =

        game.company;

    right.appendChild(

        company

    );

    //--------------------------------------------------
    // Platform
    //--------------------------------------------------

    const platform = document.createElement(

        "div"

    );

    platform.className =

        "game-search-platform";

    platform.textContent =

        game.platforms.join(" · ");

    right.appendChild(

        platform

    );

    button.appendChild(

        right

    );

    //--------------------------------------------------
    // Click
    //--------------------------------------------------

    button.addEventListener(

        "click",

        () => {

            loadGame(

                game.id

            );

        }

    );

    return button;

}


// ======================================================
// Load Game
// ======================================================

function loadGame(

    gameID

) {

    currentGame = getGame(

        gameID

    );

    if (

        !currentGame

    ) {

        return;

    }

    //------------------------------------------
    // Close Modal
    //------------------------------------------

    closeGameSelector();

    //------------------------------------------
    // Create Card
    //------------------------------------------

    createGameCard(

        currentGame

    );

}

// ======================================================
// Create Game Card
// ======================================================

function createGameCard(game) {

    const container = document.getElementById(

        "gameContainer"

    );

    if (!container) {

        return;

    }

    //------------------------------------------
    // Root
    //------------------------------------------

    const card = document.createElement(

        "section"

    );

    card.className =

        "game-card";

    card.dataset.gameId =

        game.id;

    //------------------------------------------
    // Header
    //------------------------------------------

    card.appendChild(

        createGameHeader(game)

    );

    //------------------------------------------
    // Character
    //------------------------------------------

    card.appendChild(

        createCharacterSection(game)

    );

    //------------------------------------------
    // Couple
    //------------------------------------------

    card.appendChild(

        createCoupleSection(game)

    );

    container.appendChild(

        card

    );

}

// ======================================================
// Game Header
// ======================================================

function createGameHeader(game) {

    const header = document.createElement(

        "div"

    );

    header.className =

        "game-header";

    //------------------------------------------
    // Title
    //------------------------------------------

    const title = document.createElement(

        "h2"

    );

    title.className =

        "game-title";

    title.textContent =

        game.name;

    header.appendChild(

        title

    );

    return header;

}

// ======================================================
// Add Game Button
// ======================================================

function initializeGameLoader() {

    const addButton = document.getElementById(

        "addGameBtn"

    );

    if (addButton) {

        addButton.addEventListener(

            "click",

            openGameSelector

        );

    }

    const searchInput = document.getElementById(

        "gameSearchInput"

    );

    if (searchInput) {

        searchInput.addEventListener(

            "input",

            event => {

                buildGameList(

                    event.target.value

                );

            }

        );

    }

}


// ======================================================
// Remove Game Card
// ======================================================

function removeGameCard(gameID) {

    const card = document.querySelector(

        `.game-card[data-game-id="${gameID}"]`

    );

    if (card) {

        card.remove();

    }

}


// ======================================================
// Check Exists
// ======================================================

function hasGameCard(gameID) {

    return !!document.querySelector(

        `.game-card[data-game-id="${gameID}"]`

    );

}


// ======================================================
// Override Load Game
// ======================================================

function loadGame(gameID) {

    if (

        hasGameCard(gameID)

    ) {

        closeGameSelector();

        return;

    }

    const game = getGame(gameID);

    if (!game) {

        return;

    }

    currentGame = game;

    createGameCard(

        game

    );

    closeGameSelector();

}


// ======================================================
// Initialize
// ======================================================

document.addEventListener(

    "DOMContentLoaded",

    () => {

        initializeGameLoader();

    }

);
