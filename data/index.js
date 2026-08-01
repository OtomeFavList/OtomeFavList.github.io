// ======================================
// All Games
// index.js
// ======================================

const games = [

    ...piofiore

];

// ======================================
// 工具
// ======================================

function getGame(id){

    return games.find(

        game=>game.id===id

    );

}

function getAllGames(){

    return games;

}
