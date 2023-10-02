//this is for other project
var steam = "https://pokeapi.co/api/v2/pokemon/ditto";
fetch(steam).then(function (response) {
    console.log(response);
    return response.json();
}).then(function (data) {

    console.log(data);
});