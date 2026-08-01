// ======================================
// Otome FavList
// app.js
// ======================================

document.addEventListener(

    "DOMContentLoaded",

    initializeApp

);

function initializeApp(){

    initializeSettings();

    initializeModal();

    initializeStorage();

    initializeGameSearch();

    initializeAddGameButton();

    initializeGenerateButton();

    loadUserData();

}

function initializeAddGameButton(){

    document

        .getElementById("addGameBtn")

        .addEventListener(

            "click",

            openGameSearch

        );

}

function initializeGenerateButton(){

    document

        .getElementById("generateBtn")

        .addEventListener(

            "click",

            generateFavList

        );

}
