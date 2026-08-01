// ======================================
// Otome FavList
// modal.js
// ======================================

// 当前等待确认的游戏
let pendingGameCard = null;

// ======================================
// 初始化 Modal
// ======================================

function initializeModal() {

    const modal =
        document.getElementById(
            "spoilerModal"
        );

    if (!modal) {

        return;

    }

    const confirmButton =
        document.getElementById(
            "confirmSpoiler"
        );

    const cancelButton =
        document.getElementById(
            "cancelSpoiler"
        );

    confirmButton.addEventListener(
        "click",
        confirmModal
    );

    cancelButton.addEventListener(
        "click",
        cancelModal
    );

}

// ======================================
// 打开游戏提示
// ======================================

function openSpoilerModal(
    checkbox,
    node
) {

    if (settings.spoilerConfirmed) {

        checkbox.checked = true;

        showHiddenCharacters(node);

        return;

    }

    pendingGameCard = node;

    const modal =
        document.getElementById(
            "spoilerModal"
        );

    modal.classList.remove(
        "hidden"
    );

}

// ======================================
// 打开全局提示
// ======================================

function openGlobalSpoilerDialog() {

    pendingGameCard = null;

    const modal =
        document.getElementById(
            "spoilerModal"
        );

    modal.classList.remove(
        "hidden"
    );

}

// ======================================
// 关闭
// ======================================

function closeSpoilerModal() {

    const modal =
        document.getElementById(
            "spoilerModal"
        );

    modal.classList.add(
        "hidden"
    );

}

// ======================================
// 确认
// ======================================

function confirmModal() {

    settings.spoilerConfirmed = true;

    if (pendingGameCard) {

        const checkbox =
            pendingGameCard.querySelector(
                ".hidden-character-switch"
            );

        if (checkbox) {

            checkbox.checked = true;

        }

        showGameHiddenCharacters(
            pendingGameCard
        );

        updateSummary(
            pendingGameCard
        );

    } else {

        settings.showHiddenCharacters = true;

        applyGlobalHiddenSetting();

        const globalSwitch =
            document.getElementById(
                "globalHiddenSwitch"
            );

        if (globalSwitch) {

            globalSwitch.checked = true;

        }

    }

    saveSettingsToStorage();

    pendingGameCard = null;

    closeSpoilerModal();

}

// ======================================
// 取消
// ======================================

function cancelModal() {

    if (pendingGameCard) {

        const checkbox =
            pendingGameCard.querySelector(
                ".hidden-character-switch"
            );

        if (checkbox) {

            checkbox.checked = false;

        }

        hideGameHiddenCharacters(
            pendingGameCard
        );

    } else {

        const globalSwitch =
            document.getElementById(
                "globalHiddenSwitch"
            );

        if (globalSwitch) {

            globalSwitch.checked = false;

        }

        settings.showHiddenCharacters = false;

    }

    pendingGameCard = null;

    saveSettingsToStorage();

    closeSpoilerModal();

}

// ======================================
// 点击背景关闭
// ======================================

function bindModalBackground() {

    const modal =
        document.getElementById(
            "spoilerModal"
        );

    if (!modal) {

        return;

    }

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                cancelModal();

            }

        }
    );

}

// ======================================
// 更新提示内容
// ======================================

function setModalContent(title, messageList) {

    const titleElement =
        document.getElementById(
            "spoilerModalTitle"
        );

    const listElement =
        document.getElementById(
            "spoilerModalList"
        );

    if (!titleElement || !listElement) {

        return;

    }

    titleElement.textContent = title;

    listElement.innerHTML = "";

    messageList.forEach(text => {

        const item =
            document.createElement("li");

        item.textContent = text;

        listElement.appendChild(item);

    });

}

// ======================================
// 默认提示内容
// ======================================

function resetModalContent() {

    setModalContent(

        "注意",

        [

            "隐藏角色可能涉及真相路线。",

            "可能出现最终攻略对象。",

            "可能包含重要剧情结局。",

            "确认后本游戏将显示隐藏角色。"

        ]

    );

}

// ======================================
// 页面初始化
// ======================================

document.addEventListener(

    "DOMContentLoaded",

    () => {

        initializeModal();

        bindModalBackground();

        resetModalContent();

    }

);

// ======================================
// End
// ======================================
