function xhr(method, url, parsecb, domcb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(xhr.responseText);
      parsecb(result, domcb);
    }
  };
  xhr.open(method, url, true);
  xhr.send();
}

// xhr("GET", "https://pokeapi.co/api/v2/pokemon/bulbasaur", pokeParse);
//xhr("GET", "./bulbasaur.json", pokeParse);
// xhr("GET", uri, parseCB, domCB)

/*xhr(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=bulbasaur&limit=25&rating=pg-13&api_key=" +
    giphyApiKey,
  giphyParse
); */

function pokeParse(data, domcb) {
  typesParsed = [];
  for (var i = 0; i < data.types.length; i++) {
    typesParsed.push(data.types[i].type.name);
  }

  movesParsed = [];
  for (var i = 0; i < 3; i++) {
    movesParsed.push(data.moves[i].move.name);
  }
  var pokeApiResponse = {
    name: data.name,
    entryNumber: data.id,
    moves: movesParsed,
    type: typesParsed,
    //description: data.description - STRETCHY GOAL
    sprite: data.sprites.front_default
  };
  domcb(pokeApiResponse);
}

function giphyParse(input, domcb) {
  var parsedLinks = [];
  input.data.forEach(function(item) {
    parsedLinks.push(item.images.downsized.url);
  });
  domcb(parsedLinks);
}

if (typeof module !== "undefined") {
  module.exports = pokeApiResponse;
}
