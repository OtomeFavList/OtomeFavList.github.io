// ======================================
// Otome FavList
// app.js
// ======================================

// 当前游戏数量
let gameCount = 0;

// 当前展开的搜索框
let currentSearchBox = null;

// 页面加载完成
document.addEventListener("DOMContentLoaded", () => {

    initializePage();

});

// ======================================
// 初始化
// ======================================

function initializePage() {

    bindButtons();

    loadSettings();

}

// ======================================
// 按钮
// ======================================

function bindButtons() {

    const addButton = document.getElementById("addGameBtn");

    const generateButton = document.getElementById("generateBtn");

    addButton.addEventListener("click", addGameCard);

    generateButton.addEventListener("click", generateFavList);

}

// ======================================
// 添加游戏
// ======================================

function addGameCard() {

    gameCount++;

    const container = document.getElementById("gameContainer");

    const empty = container.querySelector(".empty-state");

    if (empty) {

        empty.remove();

    }

    const template = document.getElementById("gameCardTemplate");

    const node = template.content.cloneNode(true);

    const card = node.querySelector(".game-card");

    card.dataset.index = gameCount;

    node.querySelector(".game-number").textContent =
        "游戏 " + gameCount;

    initializeGameCard(node);

    container.appendChild(node);

}

// ======================================
// 初始化游戏卡
// ======================================

function initializeGameCard(node) {

    initializeSearch(node);

    initializeHeart(node);

    initializeCollapse(node);

    initializeHiddenSwitch(node);

}

// ======================================
// 导出
// ======================================

function generateFavList() {

    alert("导出功能将在 export.js 中完成。");

}

// ======================================
// 搜索游戏
// ======================================

function initializeSearch(node) {

    const input =
        node.querySelector(".game-search-input");

    const button =
        node.querySelector(".search-button");

    const result =
        node.querySelector(".search-result");

    // 默认列表
    renderGameList(result, games);

    // 输入搜索
    input.addEventListener("input", () => {

        const keyword =
            input.value
                .trim()
                .toLowerCase();

        const list = games.filter(game => {

            return game.name
                .toLowerCase()
                .includes(keyword);

        });

        renderGameList(result, list);

        result.classList.remove("hidden");

    });

    // 点击按钮展开
    button.addEventListener("click", () => {

        if(currentSearchBox &&
           currentSearchBox !== result){

            currentSearchBox.classList.add("hidden");

        }

        result.classList.toggle("hidden");

        currentSearchBox = result;

    });

    // 点击列表
    result.addEventListener("click",(event)=>{

        const item =
            event.target.closest(".search-item");

        if(!item){

            return;

        }

        const gameId =
            item.dataset.id;

        const game =
            games.find(g=>g.id===gameId);

        if(!game){

            return;

        }

        input.value =
            game.name;

        result.classList.add("hidden");

        const card =
            node.querySelector(".game-card");

        loadGame(card,game);

    });

    // 点击其它地方关闭
    document.addEventListener("click",(event)=>{

        if(
            !result.contains(event.target)
            &&
            event.target!==input
            &&
            event.target!==button
        ){

            result.classList.add("hidden");

        }

    });

}

// ======================================
// 生成搜索结果
// ======================================

function renderGameList(container,list){

    container.innerHTML="";

    if(list.length===0){

        container.innerHTML=`

            <div class="search-item">

                没有找到游戏

            </div>

        `;

        return;

    }

    list.forEach(game=>{

        const item =
            document.createElement("div");

        item.className =
            "search-item";

        item.dataset.id =
            game.id;

        item.textContent =
            game.name;

        container.appendChild(item);

    });

}

// ======================================
// 加载游戏
// ======================================

function loadGame(card,game){

    card.dataset.gameId =
        game.id;

    card.querySelector(
        ".selected-game-name"
    ).textContent =
        game.name;

    card.querySelector(
        ".summary-game-name"
    ).textContent =
        game.name;

    clearCharacters(card);

    buildCharacters(card,game);

}

// ======================================
// 喜爱度
// ======================================

function initializeHeart(node) {

    const hearts =
        node.querySelectorAll(".heart");

    hearts.forEach((heart,index)=>{

        heart.addEventListener("click",()=>{

            setHeartValue(node,index+1);

        });

    });

}

function setHeartValue(node,value){

    const hearts =
        node.querySelectorAll(".heart");

    hearts.forEach((heart,index)=>{

        if(index<value){

            heart.classList.add("active");

        }else{

            heart.classList.remove("active");

        }

    });

    node.querySelector(
        ".summary-heart"
    ).textContent =
        value + " / 5";

}

// ======================================
// 折叠
// ======================================

function initializeCollapse(node){

    const card =
        node.querySelector(".game-card");

    const button =
        node.querySelector(".collapse-button");

    button.addEventListener("click",()=>{

        card.classList.toggle("collapsed");

        if(card.classList.contains("collapsed")){

            button.textContent="展开";

        }else{

            button.textContent="收起";

        }

    });

}

// ======================================
// 隐藏角色
// ======================================

function initializeHiddenSwitch(node){

    const checkbox =
        node.querySelector(
            ".hidden-character-switch"
        );

    checkbox.addEventListener("change",()=>{

        if(checkbox.checked){

            openSpoilerModal(
                checkbox,
                node
            );

        }else{

            hideHiddenCharacters(node);

        }

    });

}

// ======================================
// 隐藏角色显示
// ======================================

function showHiddenCharacters(node){

    node
    .querySelectorAll(
        ".character-item[data-hidden='true']"
    )
    .forEach(item=>{

        item.style.display="flex";

    });

}

function hideHiddenCharacters(node){

    node
    .querySelectorAll(
        ".character-item[data-hidden='true']"
    )
    .forEach(item=>{

        item.style.display="none";

    });

}

// ======================================
// 清空角色
// ======================================

function clearCharacters(card){

    card.querySelector(
        ".favorite-character-area"
    ).innerHTML = "";

    card.querySelector(
        ".cp-character-area"
    ).innerHTML = "";

    card.querySelector(
        ".heroine-select"
    ).innerHTML = "";

}

// ======================================
// 建立角色（数据交给 gameCard.js）
// ======================================

function buildCharacters(card, game){

    if(typeof createGameCharacters === "function"){

        createGameCharacters(card, game);

    }

}

// ======================================
// 更新摘要
// ======================================

function updateSummary(card){

    const favoriteCount =
        card.querySelectorAll(
            ".favorite-character-area .character-item.selected"
        ).length;

    const cpCount =
        card.querySelectorAll(
            ".cp-character-area .character-item.selected"
        ).length;

    card.querySelector(
        ".summary-favorite-count"
    ).textContent =
        favoriteCount + " 人";

    card.querySelector(
        ".summary-cp-count"
    ).textContent =
        cpCount + " 组";

}

// ======================================
// 保存
// ======================================

function saveCurrentData(){

    if(typeof saveToStorage === "function"){

        saveToStorage();

    }

}

// ======================================
// 读取
// ======================================

function loadSettings(){

    if(typeof loadStorage === "function"){

        loadStorage();

    }

}

// ======================================
// Modal 回调
// ======================================

function confirmHiddenCharacter(node){

    showHiddenCharacters(node);

}

function cancelHiddenCharacter(node){

    const checkbox =
        node.querySelector(
            ".hidden-character-switch"
        );

    checkbox.checked = false;

    hideHiddenCharacters(node);

}

// ======================================
// 全局工具
// ======================================

function getGameById(id){

    return games.find(game => game.id === id);

}

function createElement(tag, className){

    const element =
        document.createElement(tag);

    if(className){

        element.className = className;

    }

    return element;

}

// ======================================
// End
// ======================================
