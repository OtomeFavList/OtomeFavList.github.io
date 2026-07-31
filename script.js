const characters = {
    "薄樱鬼": [
        {
            name: "土方岁三",
            image: "hijikata.jpg"
        },
        {
            name: "冲田总司",
            image: "okita.jpg"
        },
        {
            name: "斋藤一",
            image: "saito.jpg"
        }
    ],
    "Code:Realize": [
        {
            name: "亚森·罗宾",
            image: "robin.jpg"
        }
    ],
    "Collar×Malice": [
        {
            name: "柳爱时",
            image: "yanagi.jpg"
        }
    ]
};
function showCharacters(){
    let game =
    document.getElementById("game").value;
    let area =
    document.getElementById("characters");
    area.innerHTML="";
    if(game===""){
        return;
    }
    characters[game].forEach(function(character){
        area.innerHTML += `
        <div class="character">
        <img src="${character.image}" width="120">
        <p>
        <input type="checkbox">
        ${character.name}
        </p>
        </div>
        `;
    });
}
