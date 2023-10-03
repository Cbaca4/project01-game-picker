//this is for other project
var steam = "https://pokeapi.co/api/v2/pokemon/ditto";
fetch(steam).then(function (response) {
    console.log(response);
    return response.json();
}).then(function (data) {

    console.log(data);

var stat1 = data.stats[0].stat.name;
console.log(stat1)

});
// Generic Dropdown
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  }
  