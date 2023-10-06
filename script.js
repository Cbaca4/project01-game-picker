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