//this is for other project
var spriteP = document.querySelector("#sprite");
var namePoke = document.querySelector("#name");
var typeEl1 = document.querySelector("#type");
var typeEl2 = document.querySelector("#type2");
//These are for displaying the dropdowns for moves
var movesDis = document.querySelector("#moves");
var movesDis2 = document.querySelector("#moves2");
var movesDis3 = document.querySelector("#moves3");
var movesDis4 = document.querySelector("#moves4");
var name = "charizard";

var steam = "https://pokeapi.co/api/v2/pokemon/" + name;
fetch(steam).then(function (response) {
    console.log(response);
    return response.json();
}).then(function (data) {

    namePoke.textContent = data.species.name;
    var sprite1 = data.sprites.front_default;
    spriteP.setAttribute("src", sprite1);
    console.log(data);
    var typeA = [];
    var moveA = [];
    // This gets the abilites for the
    for (let i = 0; i < data.types.length; i++) {
        var typeHold = data.types[i].type.name;
        typeA.push(typeHold);
    }
    console.log(typeA);
    // This is for displaying the types
    typeEl1.textContent = typeA[0];
    typeEl2.textContent = typeA[1];

    // This is for displaying the moves in the dropdowns
    for (let i = 0; i < data.moves.length; i++) {
        var movehold = data.moves[i].move.name;
        moveA.push(movehold);  
        var moveOpt = document.createElement('option');
        var moveOpt2 = document.createElement('option');
        var moveOpt3 = document.createElement('option');
        var moveOpt4 = document.createElement('option');
        moveOpt.textContent = movehold;
        moveOpt2.textContent = movehold;
        moveOpt3.textContent = movehold;
        moveOpt4.textContent = movehold;
        movesDis.appendChild(moveOpt);
        movesDis2.appendChild(moveOpt2);
        movesDis3.appendChild(moveOpt3);
        movesDis4.appendChild(moveOpt4);
    }

});
