function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "none";
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
          }
      }
  }
}

function fetchPokemonStats(pokemonName) {
  let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
  fetch(apiUrl).then(response => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      return response.json();
  })
  .then(data => {
      // Clear existing stats
      let tableBody = document.getElementById('statsTable').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = '';

      // Populate table with new stats
      data.stats.forEach(stat => {
          let row = tableBody.insertRow();
          let nameCell = row.insertCell(0);
          let valueCell = row.insertCell(1);

          nameCell.textContent = stat.stat.name;
          valueCell.textContent = stat.base_stat;
      });
  })
  .catch(error => {
      console.error("There was a problem fetching the Pokémon stats:", error);
  });
}

// ABILITIES TO PAY THA Biz-zil-LA-TIES

function fetchPokemonStats(pokemonName) {
  let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
  fetch(apiUrl).then(response => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      return response.json();
  })
  .then(data => {
      populateStats(data.stats);
      function populateAbilities(abilities) {
        let abilitiesList = document.getElementById('abilitiesList');
        abilitiesList.innerHTML = '';  // Clear existing abilities
    
        abilities.forEach(ability => {
            let li = document.createElement('li');
            li.textContent = ability.ability.name;
            abilitiesList.appendChild(li);
        });
    }
    
  })
  .catch(error => {
      console.error("There was a problem fetching the Pokémon stats:", error);
  });
}

function populateStats(stats) {
    // Clear existing stats for the selected Pokémon
    let tableBody = document.getElementById('statsTable').querySelector('tbody');
    tableBody.innerHTML = '';

    // Populate table with new stats
    stats.forEach(stat => {
        let row = tableBody.insertRow();
        let nameCell = row.insertCell(0);
        let valueCell = row.insertCell(1);

        nameCell.textContent = stat.stat.name;
        valueCell.textContent = stat.base_stat;
    });
}

function populateAbilities(abilities) {
    // Here we'll populate the abilities.
    // For the sake of this example, I'm going to just log them.
    // You can modify this to display the abilities in the way you prefer.
    console.log('Abilities:', abilities.map(ability => ability.ability.name));
}

<!-- Section to display Pokémon abilities -->
<h2 class="subtitle">Abilities</h2>
<ul id="abilitiesList">
    <!-- Abilities will be populated here -->
</ul>
