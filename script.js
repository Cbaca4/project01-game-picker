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

//this is for other project
var steam = "https://pokeapi.co/api/v2/pokemon/ditto";
fetch(steam).then(function (response) {
    console.log(response);
    return response.json();
}).then(function (data) {

    console.log(data);
});

//query selectors created 
var searchOne = document.querySelector("#SearchOne");
var searchTwo = document.querySelector("#SearchTwo");
var searchThree = document.querySelector("#SearchThree");
var searchFour = document.querySelector("#SearchFour");
var searchFive = document.querySelector("#SearchFive");
var searchSix = document.querySelector("#SearchSix");

//functions created for each individual search bar
function SearchOne() {

}
function SearchTwo() {

}
function SearchThree() {
    
}
function SearchFour() {
    
}
function SearchFive() {
    
}
function SearchSix() {
    
}


// added event listeners for each individual search bar
searchOne.addEventListener("click", SearchOne);
searchTwo.addEventListener("click", SearchTwo);
searchThree.addEventListener("click",SearchThree);
searchFour.addEventListener("click",SearchFour);
searchFive.addEventListener("click",SearchFive);
searchSix.addEventListener("click",SearchSix);


var weather = "sunny"
var iconUrl = `https://search.icons8.com/api/iconsets/v5/search?term=rain&token=lLLHXPzyOPDZ60L2t4uhS9gYbhcli9HrAXyNs3WU&amount=10`;
fetch(iconUrl).then(function (response) {
    console.log(response);
    return response.json();
}).then(function (data) {
    console.log(data);

    var icon = data.icons[1].id;
    var test = "https://img.icons8.com/rain?id=" + icon + ".png";
    spriteP.setAttribute("src", test);
})
