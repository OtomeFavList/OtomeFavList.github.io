// ======================================
// Otome FavList
// settings.js
// ======================================

// 全局设置
const settings = {

    // 默认显示隐藏角色
    showHiddenCharacters: false,

    // 是否已经确认过剧透提示
    spoilerConfirmed: false

};

// ======================================
// 初始化设置
// ======================================

function initializeSettings() {

    loadSettingsFromStorage();

    const globalSwitch =
        document.getElementById(
            "globalHiddenSwitch"
        );

    if (!globalSwitch) {

        return;

    }

    globalSwitch.checked =
        settings.showHiddenCharacters;

    globalSwitch.addEventListener(
        "change",
        handleGlobalHiddenSwitch
    );

}

// ======================================
// 全局隐藏角色开关
// ======================================

function handleGlobalHiddenSwitch(event) {

    const enabled =
        event.target.checked;

    if (enabled &&
        !settings.spoilerConfirmed) {

        openGlobalSpoilerDialog();

        return;

    }

    settings.showHiddenCharacters =
        enabled;

    applyGlobalHiddenSetting();

    saveSettingsToStorage();

}

// ======================================
// 套用到所有游戏
// ======================================

function applyGlobalHiddenSetting() {

    const cards =
        document.querySelectorAll(
            ".game-card"
        );

    cards.forEach(card => {

        const checkbox =
            card.querySelector(
                ".hidden-character-switch"
            );

        if (!checkbox) {

            return;

        }

        checkbox.checked =
            settings.showHiddenCharacters;

        if (settings.showHiddenCharacters) {

            showGameHiddenCharacters(card);

        } else {

            hideGameHiddenCharacters(card);

        }

    });

}

// ======================================
// 新建游戏时套用
// ======================================

function applyDefaultHiddenSetting(card) {

    const checkbox =
        card.querySelector(
            ".hidden-character-switch"
        );

    if (!checkbox) {

        return;

    }

    checkbox.checked =
        settings.showHiddenCharacters;

}

// ======================================
// 剧透确认
// ======================================

function confirmSpoilerWarning() {

    settings.spoilerConfirmed = true;

    settings.showHiddenCharacters = true;

    applyGlobalHiddenSetting();

    saveSettingsToStorage();

    closeSpoilerModal();

}

// ======================================
// 取消开启
// ======================================

function cancelSpoilerWarning() {

    const globalSwitch =
        document.getElementById(
            "globalHiddenSwitch"
        );

    if (globalSwitch) {

        globalSwitch.checked = false;

    }

    settings.showHiddenCharacters = false;

    saveSettingsToStorage();

    closeSpoilerModal();

}

// ======================================
// 单个游戏设置
// ======================================

function applyCardHiddenSetting(card) {

    const checkbox =
        card.querySelector(
            ".hidden-character-switch"
        );

    if (!checkbox) {

        return;

    }

    checkbox.checked =
        settings.showHiddenCharacters;

    if (settings.showHiddenCharacters) {

        showGameHiddenCharacters(card);

    } else {

        hideGameHiddenCharacters(card);

    }

}

// ======================================
// 浏览器保存
// ======================================

function saveSettingsToStorage() {

    localStorage.setItem(

        "otomeFavListSettings",

        JSON.stringify(settings)

    );

}

// ======================================
// 浏览器读取
// ======================================

function loadSettingsFromStorage() {

    const data =

        localStorage.getItem(

            "otomeFavListSettings"

        );

    if (!data) {

        return;

    }

    try {

        const json = JSON.parse(data);

        settings.showHiddenCharacters =

            json.showHiddenCharacters ?? false;

        settings.spoilerConfirmed =

            json.spoilerConfirmed ?? false;

    }

    catch (error) {

        console.error(error);

    }

}

// ======================================
// 新游戏加入后的设置同步
// ======================================

function syncNewGameSetting(card) {

    const checkbox =
        card.querySelector(
            ".hidden-character-switch"
        );

    if (!checkbox) {

        return;

    }

    checkbox.checked =
        settings.showHiddenCharacters;


    if (settings.showHiddenCharacters) {

        showGameHiddenCharacters(card);

    }

}


// ======================================
// 单独覆盖游戏设置
// ======================================

function updateSingleGameHiddenSetting(card, enabled) {


    if (enabled) {

        showGameHiddenCharacters(card);

    }

    else {

        hideGameHiddenCharacters(card);

    }


    saveCurrentData();

}


// ======================================
// 重置设置
// ======================================

function resetSettings() {


    settings.showHiddenCharacters = false;

    settings.spoilerConfirmed = false;


    const globalSwitch =
        document.getElementById(
            "globalHiddenSwitch"
        );


    if (globalSwitch) {

        globalSwitch.checked = false;

    }


    applyGlobalHiddenSetting();

    saveSettingsToStorage();

}


// ======================================
// 页面启动
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeSettings();

    }
);


// ======================================
// End
// ======================================
