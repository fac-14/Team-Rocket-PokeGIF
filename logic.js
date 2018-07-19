function xhr(method, url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(xhr.responseText);
      callback(result);
    }
  };
  xhr.open(method, url, true);
  xhr.send();
}

xhr("GET", "https://pokeapi.co/api/v2/pokemon/bulbasaur", apiTest);
// xhr("GET", uri, parseCB, domCB)

function apiTest(data) {
  var pokeApiResponse = {
    name: data.name,
    entryNumber: data.id,
    moves: data.moves,
    type: data.types,
    description: data.description,
    sprite: data.sprites.front_default
  };
  console.log(pokeApiResponse);
}

var pokeApiResponse = {
  name: "bulbasaur",
  entryNumber: 1,
  moves: ["captivate", "razor wind", "swords dance"],
  type: ["poison", "grass"],
  description:
    "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
};
if (typeof module !== "undefined") {
  module.exports = pokeApiResponse;
}
