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
var iconEl = document.querySelector("#icon");

var nameOneEl = document.querySelector("#nameOne");



// Section added for team tabs
function teamNumber(evt, teamName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(teamName).style.display = "block";
    evt.currentTarget.className += " active";
}


//query selectors created 
var searchOne = document.querySelector("#searchOne");
var searchTwo = document.querySelector("#SearchTwo");
var searchThree = document.querySelector("#SearchThree");
var searchFour = document.querySelector("#SearchFour");
var searchFive = document.querySelector("#SearchFive");
var searchSix = document.querySelector("#SearchSix");

//functions created for each individual search bar
function getSearchOne(event) {
    event.preventDefault();
    var pokeCheck = nameOneEl.value.trim();

    if (pokeCheck) {
    var steam = "https://pokeapi.co/api/v2/pokemon/" + pokeCheck;
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
        for (let i = 0; i < typeA.length; i++) {
            if (typeA[i] === "fire") {
                //getWeatherIcon("sun",iconEl);
            }
             if ( typeA[i] === "water")  {
                //getWeatherIcon("rain",iconEl)
            } 
            if ( typeA[i] === "rock") {
                //getWeatherIcon("dust",iconEl)
            }
            if ( typeA[i] === "ice") {
                //getWeatherIcon("hail",iconEl)
            }
        }

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
}
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
searchOne.addEventListener("click", getSearchOne);
//searchTwo.addEventListener("click", SearchTwo);
//searchThree.addEventListener("click",SearchThree);
//searchFour.addEventListener("click",SearchFour);
//searchFive.addEventListener("click",SearchFive);
//searchSix.addEventListener("click",SearchSix);

// This function gets the Icons from Icons8 and displaies them.
function getWeatherIcon(weather,location) {
    var iconUrl = `https://search.icons8.com/api/iconsets/v5/search?term=` + weather + `&token=lLLHXPzyOPDZ60L2t4uhS9gYbhcli9HrAXyNs3WU&amount=10`;
    fetch(iconUrl).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (data) {
        console.log(data);
        var platformId = data.icons[3].platform;
        var icon = data.icons[3].id;
        var test = "https://img.icons8.com/" + platformId + "/" + weather + "?icon_id=" + icon + ".png";
        location.setAttribute("src", test);
    })
}
