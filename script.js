//These display the sprites of the pokemon
var spriteP = document.querySelector("#sprite");
var spriteP1 = document.querySelector("#sprite1");
var spriteP2 = document.querySelector("#sprite2");
var spriteP3 = document.querySelector("#sprite3");
var spriteP4 = document.querySelector("#sprite4");
var spriteP5 = document.querySelector("#sprite5");
//These display the name of the pokemon
var namePoke = document.querySelector("#name");
var namePoke1 = document.querySelector("#name1");
var namePoke2 = document.querySelector("#name2");
var namePoke3 = document.querySelector("#name3");
var namePoke4 = document.querySelector("#name4");
var namePoke5 = document.querySelector("#name5");
// These display the types of the pokemon
var typeEl1 = document.querySelector("#type");
var typeEl2 = document.querySelector("#type2");
var typeEl3 = document.querySelector("#type3");
var typeEl4 = document.querySelector("#type4");
var typeEl5 = document.querySelector("#type5");
var typeEl6 = document.querySelector("#type6");
var typeEl7 = document.querySelector("#type7");
var typeEl8 = document.querySelector("#type8");
var typeEl9 = document.querySelector("#type9");
var typeEl10 = document.querySelector("#type10");
var typeEl11 = document.querySelector("#type11");
var typeEl12 = document.querySelector("#type12");
//These are for displaying the dropdowns for moves
var movesDis = document.querySelector("#moves");
var movesDis2 = document.querySelector("#moves2");
var movesDis3 = document.querySelector("#moves3");
var movesDis4 = document.querySelector("#moves4");
var movesDis5 = document.querySelector("#moves5");
var movesDis6 = document.querySelector("#moves6");
var movesDis7 = document.querySelector("#moves7");
var movesDis8 = document.querySelector("#moves8");
var movesDis9 = document.querySelector("#moves9");
var movesDis10 = document.querySelector("#moves10");
var movesDis11 = document.querySelector("#moves11");
var movesDis12 = document.querySelector("#moves12");
var movesDis13 = document.querySelector("#moves13");
var movesDis14 = document.querySelector("#moves14");
var movesDis15 = document.querySelector("#moves15");
var movesDis16 = document.querySelector("#moves16");
var movesDis17 = document.querySelector("#moves17");
var movesDis18 = document.querySelector("#moves18");
var movesDis19 = document.querySelector("#moves19");
var movesDis20 = document.querySelector("#moves20");
var movesDis21 = document.querySelector("#moves21");
var movesDis22 = document.querySelector("#moves22");
var movesDis23 = document.querySelector("#moves23");
var movesDis24 = document.querySelector("#moves24");
//These display the weather icon
var iconEl = document.querySelector("#icon");
var iconEl2 = document.querySelector("#icon2");
var iconEl3 = document.querySelector("#icon3");
var iconEl4 = document.querySelector("#icon4");
var iconEl5 = document.querySelector("#icon5");
var iconEl6 = document.querySelector("#icon6");
// These hold the user input
var nameOneEl = document.querySelector("#nameOne");
var nameOneEl2 = document.querySelector("#nameOne2");
var nameOneEl3 = document.querySelector("#nameOne3");
var nameOneEl4 = document.querySelector("#nameOne4");
var nameOneEl5 = document.querySelector("#nameOne5");
var nameOneEl6 = document.querySelector("#nameOne6");
//These display the abilites of the pokemon
var abilel1 = document.querySelector("#abilities1");
var abilel2 = document.querySelector("#abilities2");
var abilel3 = document.querySelector("#abilities3");
var abilel4 = document.querySelector("#abilities4");
var abilel5 = document.querySelector("#abilities5");
var abilel6 = document.querySelector("#abilities6");
//These display the states of the pokemon
var hp1 = document.querySelector("#hp");
var at1 = document.querySelector("#at");
var de1 = document.querySelector("#de");
var sa1= document.querySelector("#sa");
var sd1 = document.querySelector("#sd");
var sp1 = document.querySelector("#sp");
var hp2 = document.querySelector("#hp1");
var at2 = document.querySelector("#at1");
var de2 = document.querySelector("#de1");
var sa2 = document.querySelector("#sa1");
var sd2 = document.querySelector("#sd1");
var sp2 = document.querySelector("#sp1");
var hp3 = document.querySelector("#hp2");
var at3 = document.querySelector("#at2");
var de3 = document.querySelector("#de2");
var sa3= document.querySelector("#sa2");
var sd3 = document.querySelector("#sd2");
var sp3 = document.querySelector("#sp2");
var hp4 = document.querySelector("#hp3");
var at4 = document.querySelector("#at3");
var de4 = document.querySelector("#de3");
var sa4= document.querySelector("#sa3");
var sd4 = document.querySelector("#sd3");
var sp4 = document.querySelector("#sp3");
var hp5 = document.querySelector("#hp4");
var at5 = document.querySelector("#at4");
var de5 = document.querySelector("#de4");
var sa5= document.querySelector("#sa4");
var sd5 = document.querySelector("#sd4");
var sp5 = document.querySelector("#sp4");
var hp6 = document.querySelector("#hp5");
var at6 = document.querySelector("#at5");
var de6 = document.querySelector("#de5");
var sa6= document.querySelector("#sa5");
var sd6 = document.querySelector("#sd5");
var sp6 = document.querySelector("#sp5");

var saveBtn = document.querySelector("#save")
var getTab = "";

var tabSave1 = [];
var tabSave2 = [];
var tabSave3 = [];
// Section added for team tabs
function teamNumber(evt, teamName) {
    var i, tabcontent, tablinks;
    getTab = teamName;

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

   getLocal(evt, getTab);
}

function saveTab() {
    if (getTab === "team 1") {
        saveLocal(tabSave1);
    }
    if (getTab === "team 2") {
        saveLocal(tabSave2);
    }
    if (getTab === "team 3") {
        saveLocal(tabSave3);
    }
}

function saveLocal(saveA) {
    saveA.push(namePoke);
    saveA.push(namePoke1);
    saveA.push(namePoke2);
    saveA.push(namePoke3);
    saveA.push(namePoke4);
    saveA.push(namePoke5);

    var store = JSON.stringify(saveA);
    localStorage.setItem(getTab, store);
}

function getLocal(event, getTab) {
    var getPoke = localStorage.getItem(getTab);
    var createTab = JSON.parse(getPoke);

    callFetch(event,nameOneEl,namePoke,spriteP,iconEl,typeEl1,typeEl2,movesDis,movesDis2,movesDis3,movesDis4,abilel1,hp1,at1,de1,sa1,sd1,sp1);
    callFetch(event,nameOneEl2,namePoke1,spriteP1,iconEl2,typeEl3,typeEl4,movesDis5,movesDis6,movesDis7,movesDis8,abilel2,hp2,at2,de2,sa2,sd2,sp2);
    callFetch(event,nameOneEl3,namePoke2,spriteP2,iconEl3,typeEl5,typeEl6,movesDis9,movesDis10,movesDis11,movesDis12,abilel3,hp3,at3,de3,sa3,sd3,sp3);
    callFetch(event,nameOneEl4,namePoke3,spriteP3,iconEl4,typeEl7,typeEl8,movesDis13,movesDis14,movesDis15,movesDis16,abilel4,hp4,at4,de4,sa4,sd4,sp4);
    callFetch(event,nameOneEl5,namePoke4,spriteP4,iconEl5,typeEl9,typeEl10,movesDis17,movesDis18,movesDis19,movesDis20,abilel5,hp5,at5,de5,sa5,sd5,sp5);
    callFetch(event,nameOneEl6,namePoke5,spriteP5,iconEl6,typeEl11,typeEl12,movesDis21,movesDis22,movesDis23,movesDis24,abilel6,hp6,at6,de6,se6,sd6,sp6);
}
//query selectors created 
var searchOne = document.querySelector("#searchOne");
var searchTwo = document.querySelector("#searchTwo");
var searchThree = document.querySelector("#SearchThree");
var searchFour = document.querySelector("#searchFour");
var searchFive = document.querySelector("#SearchFive");
var searchSix = document.querySelector("#searchSix");

//functions created for each individual search bar
function getSearchOne(event) {
    callFetch(event,nameOneEl,namePoke,spriteP,iconEl,typeEl1,typeEl2,movesDis,movesDis2,movesDis3,movesDis4,abilel1,hp1,at1,de1,sa1,sd1,sp1);
}
function SearchTwo(event) {
    callFetch(event,nameOneEl2,namePoke1,spriteP1,iconEl2,typeEl3,typeEl4,movesDis5,movesDis6,movesDis7,movesDis8,abilel2,hp2,at2,de2,sa2,sd2,sp2);
}
function SearchThree(event) {
    callFetch(event,nameOneEl3,namePoke2,spriteP2,iconEl3,typeEl5,typeEl6,movesDis9,movesDis10,movesDis11,movesDis12,abilel3,hp3,at3,de3,sa3,sd3,sp3);
}
function SearchFour(event) {
    callFetch(event,nameOneEl4,namePoke3,spriteP3,iconEl4,typeEl7,typeEl8,movesDis13,movesDis14,movesDis15,movesDis16,abilel4,hp4,at4,de4,sa4,sd4,sp4);
}
function SearchFive(event) {
    callFetch(event,nameOneEl5,namePoke4,spriteP4,iconEl5,typeEl9,typeEl10,movesDis17,movesDis18,movesDis19,movesDis20,abilel5,hp5,at5,de5,sa5,sd5,sp5);
}
function SearchSix(event) {
    callFetch(event,nameOneEl6,namePoke5,spriteP5,iconEl6,typeEl11,typeEl12,movesDis21,movesDis22,movesDis23,movesDis24,abilel6,hp6,at6,de6,se6,sd6,sp6);
}

function callFetch(event,inputName,PokemonName,pokeS,getIcon,getType1,getType2,m1,m2,m3,m4,abil1,hp,at,de,sa,sd,sp) {
    event.preventDefault();
    var pokeCheck = inputName.value.trim();

    if (pokeCheck) {
    var steam = "https://pokeapi.co/api/v2/pokemon/" + pokeCheck;
    fetch(steam).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (data) {
    
        PokemonName.textContent = data.species.name;
        var sprite1 = data.sprites.front_default;
        pokeS.setAttribute("src", sprite1);
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
                //getWeatherIcon("sun",getIcon);
            }
             if ( typeA[i] === "water")  {
                //getWeatherIcon("rain",getIcon)
            } 
            if ( typeA[i] === "rock") {
                //getWeatherIcon("dust",getIcon)
            }
            if ( typeA[i] === "ice") {
                //getWeatherIcon("hail",getIcon)
            }
        }

        // This is for displaying the types
        getType1.textContent = typeA[0];
        getType2.textContent = typeA[1];
    
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
            m1.appendChild(moveOpt);
            m2.appendChild(moveOpt2);
            m3.appendChild(moveOpt3);
            m4.appendChild(moveOpt4);
        }
        var abilitiesA = [];
        for (let i = 0; i < data.abilities.length; i++) {
            var a1 = data.abilities[i].ability.name;
            abilitiesA.push(a1);
            var aOpt = document.createElement('option');
            aOpt.textContent = a1;       
            abil1.appendChild(aOpt);
        }
        hp.textContent = data.stats[0].base_stat;
        at.textContent = data.stats[1].base_stat;
        de.textContent = data.stats[2].base_stat;
        sa.textContent = data.stats[3].base_stat;
        sd.textContent = data.stats[4].base_stat;
        sp.textContent = data.stats[5].base_stat;
        
    });
    }
}

// added event listeners for each individual search bar
searchOne.addEventListener("click", getSearchOne);
searchTwo.addEventListener("click", SearchTwo);
searchThree.addEventListener("click",SearchThree);
searchFour.addEventListener("click",SearchFour);
searchFive.addEventListener("click",SearchFive);
searchSix.addEventListener("click",SearchSix);

saveBtn.addEventListener("click",saveTab);

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
