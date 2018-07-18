//Dummy function to return API calls

function lookUpPokeApi(input, callback) {

  var pokeApiResponse = {
    name: "bulbasaur",
    entryNumber: 1,
    moves: ["captivate", "razor wind", "swords dance"],
    type: ["poison", "grass"],
    description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  }

  callback(pokeApiResponse);
}

function lookUpGiphy(input, callback) {

  var giphyResponse = "https://media.giphy.com/media/I2nZMy0sI0ySA/giphy.gif";

  callback(giphyResponse);

}

//IIFE (Not Eevee...)
(function(){

  //define vars for search button and input
  var searchButton = document.querySelector('#searchButton');
  var searchInput = document.querySelector('input[name="searchInput"]');
  var pokemonDetails = document.querySelector('#pokemon-details')
  var pokemonArticle = document.querySelector('#pokemon');

  //add event listener for button click
  searchButton.addEventListener('click', function(){
    lookUpPokeApi(searchInput.value, pokeCallback);
    lookUpGiphy(searchInput.value, gifCallback);
  });

  addNewNode = function(parentNodeId, element, text) {
    var parent = document.getElementById(parentNodeId);
    var elem = document.createElement(element);
    var elemText = document.createTextNode(text);
    elem.appendChild(elemText);
    parent.appendChild(elem);
  }

  addDetailsNode = function(element, text) {
    addNewNode('pokemon-details', element, text);
  }

  //callback function to be run on pokeAPI response
  pokeCallback = function(pokeResponse) {
    console.log(pokeResponse);

    //remove all existing child nodes from #pokemon-details
    while (pokemonDetails.hasChildNodes()) {
      pokemonDetails.removeChild(pokemonDetails.lastChild);
    }

    //add new child nodes to #pokemon-details
    addDetailsNode('h2', pokeResponse.name);
    
    //add sprite image
    var sprite = document.createElement('img');
    sprite.src = pokeResponse.sprite;
    sprite.alt = "Sprite image of " + pokeResponse.name;
    sprite.classList.add('sprite-image');
    pokemonDetails.appendChild(sprite);

    addDetailsNode('p', pokeResponse.description);
    addDetailsNode('p', 'Pokedex Entry Number: ' + pokeResponse.entryNumber);

    //create UL for moves and add each move as an LI
    var movesList = document.createElement('ul');
    var movesHeader = document.createElement('h3');
    var movesHeaderText = document.createTextNode('Moves:');
    movesHeader.appendChild(movesHeaderText);
    movesList.appendChild(movesHeader);

    //append each move as LI
    pokeResponse.moves.forEach(function(move){
      var li = document.createElement('li');
      var liText = document.createTextNode(move);
      li.appendChild(liText);
      movesList.appendChild(li);
    })
    pokemonDetails.appendChild(movesList);

    //turn types array into string
    var types = "Type: ";
    for (i=0; i<pokeResponse.type.length; i++) {
      if (i > 0) {
        types += " / ";
      }
      types += pokeResponse.type[i];
    }

    addDetailsNode('p', types);
  }

  //callback function to be run on Giphy API response
  gifCallback = function(giphyResponse) {
    console.log(giphyResponse);
  }

})();