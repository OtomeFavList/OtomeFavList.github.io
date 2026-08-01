// ======================================
// Otome FavList
// gameLoader.js
// ======================================

// 当前已经添加的游戏
let addedGames = [];

// ======================================
// 打开游戏搜索
// ======================================

function openGameSearch() {

    const modal = document.getElementById(
        "gameSearchModal"
    );

    const input = document.getElementById(
        "gameSearchInput"
    );

    if (!modal || !input) {

        return;

    }

    modal.classList.remove("hidden");

    input.value = "";

    renderGameSearchResult("");

    input.focus();

}

// ======================================
// 关闭搜索
// ======================================

function closeGameSearch() {

    const modal = document.getElementById(
        "gameSearchModal"
    );

    if (modal) {

        modal.classList.add("hidden");

    }

}

// ======================================
// 初始化
// ======================================

function initializeGameSearch() {

    const input = document.getElementById(
        "gameSearchInput"
    );

    if (!input) {

        return;

    }

    input.addEventListener(

        "input",

        function () {

            renderGameSearchResult(

                input.value.trim()

            );

        }

    );

}

// ======================================
// 搜索游戏
// ======================================

function renderGameSearchResult(keyword) {

    const container =
        document.getElementById(
            "gameSearchResult"
        );

    if (!container) {

        return;

    }

    container.innerHTML = "";

    // 所有游戏
    const allGames =
        getAllGames();

    // 过滤
    const result = allGames.filter(game => {

        // 已添加的不再显示
        if (addedGames.includes(game.id)) {

            return false;

        }

        if (keyword === "") {

            return true;

        }

        const text =
            keyword.toLowerCase();

        return (

            game.name
                .toLowerCase()
                .includes(text)

            ||

            game.shortName
                .toLowerCase()
                .includes(text)

            ||

            game.company
                .toLowerCase()
                .includes(text)

            ||

            game.localization
                .toLowerCase()
                .includes(text)

        );

    });

    if (result.length === 0) {

        container.innerHTML = `

            <div class="search-empty">

                没有找到符合条件的游戏

            </div>

        `;

        return;

    }

    result.forEach(game => {

        container.appendChild(

            createSearchItem(game)

        );

    });

}

// ======================================
// 搜索结果
// ======================================

function createSearchItem(game) {

    const item =
        document.createElement("div");

    item.className =
        "game-search-item";

    item.innerHTML = `

        <div class="search-cover">

            <img
                src="${game.cover}"
                alt="${game.name}">

        </div>

        <div class="search-info">

            <div class="search-name">

                ${game.name}

            </div>

            <div class="search-company">

                ${game.company}

            </div>

            <div class="search-platform">

                ${game.platforms.join(" · ")}

            </div>

        </div>

    `;

    item.addEventListener(

        "click",

        () => {

            addGame(game);

            closeGameSearch();

        }

    );

    return item;

}
