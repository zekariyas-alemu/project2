var currentCharacter = 1;
const apiKey = '1924494977717607';
function displayResults(responseJson) {
    $('#results-list').empty();
    for (let i=0;i<responseJson.results.length;i++){
      $('#results-list').append(
        `<li class="item"> 
        <h3>${responseJson.results[i].name}</h3>
        <img src="${responseJson.results[i].image.url}" alt="${responseJson.results[i].name}Image" class="results-img">
        <ul>
          <li class="realName">True Identity:<br> ${responseJson.results[i].biography['full-name']} (${responseJson.results[i].appearance.race})</li>
          <li>Height: <br>${responseJson.results[i].appearance.height}</li>
          <li>Weight: <br>${responseJson.results[i].appearance.weight}</li>
        </ul>
        <h4 class="powerStats">Power Stats</h4>
        <ul>
          <li>Intelligence: ${responseJson.results[i].powerstats.intelligence}</li>
          <li>Strength: ${responseJson.results[i].powerstats.strength}</li>
          <li>Speed: ${responseJson.results[i].powerstats.speed}</li>
        </ul>
        <ul>  
          <li>Durability: ${responseJson.results[i].powerstats.durability}</li>
          <li>Power: ${responseJson.results[i].powerstats.power}</li>
          <li>Combat: ${responseJson.results[i].powerstats.combat}</li>
        </ul>
          <button type="button" id="${responseJson.results[i].id}" class="button teamButton js-assoc-button">Super Team(s)</button>
        <div id="${responseJson.results[i].id}teams" class="hidden">
        <section id="${responseJson.results[i].id}associates">
            <ul id="associate-list" class="group">
            </ul>
        </section>
        </div>`
        ); 
    let currentCharacter = responseJson.results[i].id
    teamButton(currentCharacter);
    }
    $('#results').removeClass('hidden');
    $('#js-error-message').empty()
  };
  function findCharacter(query) {
    var userCharacter = $('input').val();
    fetch('https://www.superheroapi.com/api.php/'+apiKey+'/search/'+userCharacter)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => {
        displayResults(responseJson)
        })
      .catch(err => {
        $('#results').addClass('hidden');
        $('#results-list').empty();
        $('#js-error-message').text(`${userCharacter} Character Not Found. Try adding a dash ("-") (i.e. Spider-man).`);
      });
  }
