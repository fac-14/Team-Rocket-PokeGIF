//Dummy function to return API calls

function lookUpPokeApi(input, callback) {
  // make xhr call

  var pokeApiResponse = {
    name: "bulbasaur",
    entryNumber: 1,
    moves: ["captivate", "razor wind", "swords dance"],
    type: ["poison", "grass"],
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  };

  callback(pokeApiResponse);
}

// function to randomly assign new gif
function lookUpGiphy(input, callback) {
  var giphyResponse = [
    "https://media.giphy.com/media/I2nZMy0sI0ySA/giphy.gif",
    "https://media.giphy.com/media/SfjCRiDNA951m/giphy.gif",
    "https://media.giphy.com/media/51S87GVazTD7W/giphy.gif",
    "https://media.giphy.com/media/imoIuptU6lelW/giphy.gif"
  ];

  var randomGif = Math.floor(Math.random() * 3);

  callback(giphyResponse[randomGif]);
}

//IIFE (Not Eevee...)
(function() {
  //define vars for search button and input
  var searchButton = document.querySelector("#searchButton");
  var searchInput = document.querySelector('input[name="searchInput"]');
  var pokemonDetails = document.querySelector("#pokemon-details");
  var pokemonArticle = document.querySelector("#pokemon");

  //add event listener for button click
  searchButton.addEventListener("click", function() {
    lookUpPokeApi(searchInput.value, pokeCallback);
    lookUpGiphy(searchInput.value, gifCallback);
  });

  //abstract function to add text elements within pokemon details
  var addNewNode = function(parentNodeId, element, text) {
    var parent = document.getElementById(parentNodeId);
    var elem = document.createElement(element);
    var elemText = document.createTextNode(text);
    elem.appendChild(elemText);
    parent.appendChild(elem);
  };

  var addDetailsNode = function(element, text) {
    addNewNode("pokemon-details", element, text);
  };

  var killChildren = function(parentNode) {
    while (parentNode.hasChildNodes()) {
      parentNode.removeChild(parentNode.lastChild);
    }
  };

  //callback function to be run on pokeAPI response
  var pokeCallback = function(pokeResponse) {
    console.log(pokeResponse);

    //remove all existing child nodes from #pokemon-details
    killChildren(pokemonDetails);

    // capitalising the Pokemon name (e.g. Bulbasaur)
    var name = pokeResponse.name;
    name = name.split("");
    name[0] = name[0].toUpperCase();
    name = name.join("");

    //add new child nodes to #pokemon-details

    addDetailsNode("h2", name);

    //add sprite image
    var sprite = document.createElement("img");
    sprite.src = pokeResponse.sprite;
    sprite.alt = "Sprite image of " + pokeResponse.name;
    sprite.classList.add("sprite-image");
    pokemonDetails.appendChild(sprite);

    addDetailsNode("h3", "Description:");
    addDetailsNode("p", pokeResponse.description);
    addDetailsNode("h3", "Pokedex Entry Number:");
    addDetailsNode("p", pokeResponse.entryNumber);

    //create UL for moves and add each move as an LI
    var movesList = document.createElement("ul");
    var movesHeader = document.createElement("h3");
    var movesHeaderText = document.createTextNode("Moves:");
    movesHeader.appendChild(movesHeaderText);
    movesList.appendChild(movesHeader);

    //append each move as LI
    pokeResponse.moves.forEach(function(move) {
      var li = document.createElement("li");
      var liText = document.createTextNode(move);
      li.appendChild(liText);
      movesList.appendChild(li);
    });
    pokemonDetails.appendChild(movesList);

    //turn types array into string
    var types = "";
    for (i = 0; i < pokeResponse.type.length; i++) {
      if (i > 0) {
        types += " / ";
      }
      types += pokeResponse.type[i];
    }
    addDetailsNode("h3", "Types:");
    addDetailsNode("p", types);
  };

  //callback function to be run on Giphy API response
  gifCallback = function(giphyResponse) {
    // console.log(giphyResponse);
    var image = document.getElementById("image");
    var gif = document.createElement("img");

    killChildren(image);

    gif.src = giphyResponse;
    gif.alt = "Randomly generated gif";
    gif.classList.add("pokemon-gif");

    image.appendChild(gif);
  };

  // function to randomly generate the next gif, calling on Giphy API response
  var getNextGIF = document.getElementById("getNextGIF");

  getNextGIF.addEventListener("click", function() {
    var name = document.querySelector("#pokemon-details > h2").textContent;
    lookUpGiphy(name, gifCallback);
  });
})();
