// ======================================
// Otome FavList
// gameCard.js
// ======================================

// 建立整个游戏卡人物
function createGameCharacters(card, game) {

    buildFavoriteCharacters(card, game);

    buildCPSection(card, game);

    updateSummary(card);

}

// ======================================
// 我推
// ======================================

function buildFavoriteCharacters(card, game) {

    const container =
        card.querySelector(".favorite-character-area");

    container.innerHTML = "";

    if (!game.characters ||
        game.characters.length === 0) {

        container.innerHTML = `
            <div class="character-empty">
                当前游戏暂无角色数据
            </div>
        `;

        return;

    }

    game.characters.forEach(character => {

        const item =
            createFavoriteCharacter(character);

        container.appendChild(item);

    });

}

// ======================================
// 创建角色头像
// ======================================

function createFavoriteCharacter(character) {

    const item =
        document.createElement("div");

    item.className =
        "character-item";

    item.dataset.id =
        character.id;

    item.dataset.hidden =
        character.hidden ? "true" : "false";

    item.innerHTML = `

        <div class="character-avatar">

            <img
                src="${character.image}"
                alt="${character.name}">

        </div>

        <div class="character-name">

            ${character.name}

        </div>

    `;

    if (character.hidden) {

        item.style.display = "none";

    }

    item.addEventListener("click", () => {

        item.classList.toggle("selected");

        const card =
            item.closest(".game-card");

        updateSummary(card);

    });

    return item;

}

// ======================================
// 我推 CP
// ======================================

function buildCPSection(card, game) {

    buildHeroine(card, game);

    buildCPCharacters(card, game);

}

// ======================================
// 官方女主 / OC
// ======================================

function buildHeroine(card, game) {

    const container =
        card.querySelector(".heroine-select");

    container.innerHTML = "";

    // 官方女主
    if (game.heroine) {

        const heroine =
            document.createElement("div");

        heroine.className =
            "heroine-avatar selected";

        heroine.innerHTML = `

            <img
                src="${game.heroine.image}"
                alt="${game.heroine.name}">

        `;

        container.appendChild(heroine);

    }

    // 上传 OC
    const upload =
        document.createElement("label");

    upload.className =
        "upload-avatar";

    upload.innerHTML = `

        上传自设

        <input
            type="file"
            accept="image/*"
            class="oc-upload"
            hidden>

    `;

    container.appendChild(upload);

    const input =
        upload.querySelector(".oc-upload");

    input.addEventListener("change", event => {

        const file =
            event.target.files[0];

        if (!file) {

            return;

        }

        const reader =
            new FileReader();

        reader.onload = function(e) {

            let image =
                container.querySelector(".heroine-avatar");

            if (!image) {

                image =
                    document.createElement("div");

                image.className =
                    "heroine-avatar";

                container.prepend(image);

            }

            image.innerHTML = `

                <img
                    src="${e.target.result}"
                    alt="OC">

            `;

            image.classList.add("selected");

        };

        reader.readAsDataURL(file);

    });

}

// ======================================
// CP 男角色
// ======================================

function buildCPCharacters(card, game) {

    const container =
        card.querySelector(".cp-character-area");

    container.innerHTML = "";

    if (!game.characters) {

        return;

    }

    game.characters.forEach(character => {

        const item =
            createCPCharacter(character);

        container.appendChild(item);

    });

}

// ======================================
// 创建 CP 男角色
// ======================================

function createCPCharacter(character) {

    const item =
        document.createElement("div");

    item.className =
        "character-item";

    item.dataset.id =
        character.id;

    item.dataset.hidden =
        character.hidden ? "true" : "false";

    item.innerHTML = `

        <div class="character-avatar">

            <img
                src="${character.image}"
                alt="${character.name}">

        </div>

        <div class="character-name">

            ${character.name}

        </div>

    `;

    // 默认隐藏隐藏角色
    if (character.hidden) {

        item.style.display = "none";

    }

    // 点击选择
    item.addEventListener("click", () => {

        item.classList.toggle("selected");

        const card =
            item.closest(".game-card");

        updateSummary(card);

    });

    return item;

}

// ======================================
// 显示隐藏角色
// ======================================

function showGameHiddenCharacters(card) {

    card.querySelectorAll(
        ".character-item[data-hidden='true']"
    ).forEach(item => {

        item.style.display = "flex";

    });

}

// ======================================
// 隐藏隐藏角色
// ======================================

function hideGameHiddenCharacters(card) {

    card.querySelectorAll(
        ".character-item[data-hidden='true']"
    ).forEach(item => {

        item.style.display = "none";

        item.classList.remove("selected");

    });

    updateSummary(card);

}

// ======================================
// 清空当前游戏选择
// ======================================

function clearGameSelection(card) {

    card.querySelectorAll(
        ".character-item.selected"
    ).forEach(item => {

        item.classList.remove("selected");

    });

    card.querySelectorAll(
        ".heart"
    ).forEach(item => {

        item.classList.remove("active");

    });

    card.querySelector(
        ".summary-heart"
    ).textContent = "0 / 5";

    updateSummary(card);

}

// ======================================
// 根据游戏ID刷新角色
// ======================================

function refreshGameCharacters(card, gameId) {

    const game = getGameById(gameId);

    if (!game) {

        return;

    }

    clearCharacters(card);

    createGameCharacters(card, game);

}

// ======================================
// 更新女主头像
// ======================================

function setHeroineImage(card, imagePath, name = "") {

    const heroine =
        card.querySelector(".heroine-avatar");

    if (!heroine) {

        return;

    }

    heroine.innerHTML = `

        <img
            src="${imagePath}"
            alt="${name}">

    `;

}

// ======================================
// 切换官方女主
// ======================================

function selectOfficialHeroine(card) {

    const heroine =
        card.querySelector(".heroine-avatar");

    if (!heroine) {

        return;

    }

    heroine.classList.add("selected");

}

// ======================================
// 取消官方女主
// ======================================

function unselectOfficialHeroine(card) {

    const heroine =
        card.querySelector(".heroine-avatar");

    if (!heroine) {

        return;

    }

    heroine.classList.remove("selected");

}

// ======================================
// 获取我推
// ======================================

function getFavoriteCharacters(card) {

    const result = [];

    card.querySelectorAll(
        ".favorite-character-area .character-item.selected"
    ).forEach(item => {

        result.push(item.dataset.id);

    });

    return result;

}

// ======================================
// 获取CP
// ======================================

function getCPCharacters(card) {

    const result = [];

    card.querySelectorAll(
        ".cp-character-area .character-item.selected"
    ).forEach(item => {

        result.push(item.dataset.id);

    });

    return result;

}

// ======================================
// 获取爱心
// ======================================

function getHeartValue(card) {

    return card.querySelectorAll(
        ".heart.active"
    ).length;

}

// ======================================
// 获取当前游戏数据
// ======================================

function collectGameData(card) {

    return {

        gameId: card.dataset.gameId || "",

        heart: getHeartValue(card),

        favorites: getFavoriteCharacters(card),

        cps: getCPCharacters(card),

        hiddenEnabled:
            card.querySelector(
                ".hidden-character-switch"
            ).checked

    };

}

// ======================================
// 设置当前游戏数据
// ======================================

function applyGameData(card, data) {

    if (!data) {

        return;

    }

    // 喜爱度
    setHeartValue(card, data.heart || 0);

    // 我推
    if (Array.isArray(data.favorites)) {

        data.favorites.forEach(id => {

            const item = card.querySelector(
                `.favorite-character-area .character-item[data-id="${id}"]`
            );

            if (item) {

                item.classList.add("selected");

            }

        });

    }

    // CP
    if (Array.isArray(data.cps)) {

        data.cps.forEach(id => {

            const item = card.querySelector(
                `.cp-character-area .character-item[data-id="${id}"]`
            );

            if (item) {

                item.classList.add("selected");

            }

        });

    }

    // 隐藏角色
    const hiddenSwitch = card.querySelector(
        ".hidden-character-switch"
    );

    if (hiddenSwitch) {

        hiddenSwitch.checked = !!data.hiddenEnabled;

        if (data.hiddenEnabled) {

            showGameHiddenCharacters(card);

        }

    }

    updateSummary(card);

}

// ======================================
// 删除游戏卡
// ======================================

function removeGameCard(card) {

    if (!card) {

        return;

    }

    card.remove();

    const container =
        document.getElementById("gameContainer");

    if (
        container &&
        container.children.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-state">

                <h3>

                    还没有添加游戏

                </h3>

                <p>

                    点击下方按钮开始添加。

                </p>

            </div>

        `;

    }

}

// ======================================
// 判断游戏是否填写完成
// ======================================

function isGameCompleted(card) {

    const hasGame =
        !!card.dataset.gameId;

    const hasFavorite =
        getFavoriteCharacters(card).length > 0;

    const hasCP =
        getCPCharacters(card).length > 0;

    const hasHeart =
        getHeartValue(card) > 0;

    return hasGame &&
           (hasFavorite || hasCP || hasHeart);

}

// ======================================
// End
// ======================================
