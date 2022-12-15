var elForm = document.querySelector("[data-form]");
var elInputName = document.querySelector("[data-name]");
var elInputType = document.querySelector("[data-type]");
var elInputWeight = document.querySelector("[data-weight]");
var elInputAge = document.querySelector("[data-age]");
var elInputImg = document.querySelector("[data-img]");
let elInputSearch = document.querySelector("[data-search]");

var elUl = document.querySelector("[data-ul]");

renderPokemon();

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var pokemon = {
        name: null,
        type: null,
        weight: null,
        avg_spawns: null,
        age: null,
    }
    pokemon.name = elInputName.value;
    pokemon.type = elInputType.value;
    pokemon.weight = elInputWeight.value;
    pokemon.img = elInputImg.value;
    pokemon.avg_spawns = elInputAge.value;

    pokemons.unshift(pokemon);
    elUl.prepend(createLi(pokemon));

    // renderPokemon()
})




function renderPokemon() {
    elUl.innerHTML = "";
    for (var i = 0; i < pokemons.length; i++) {
        pokemon = pokemons[i];
        elUl.appendChild(createLi(pokemon));
    }
}

function createLi(pokemon) {
    var elLi = document.createElement("li");
    var imgBox = document.createElement("div");
    var infoBox = document.createElement("div");
    var elImg = document.createElement("img");
    var elH2 = document.createElement("h2");
    var elSpan = document.createElement("span");
    var elP = document.createElement("p");

    elImg.src = pokemon.img;
    elH2.textContent = pokemon.name;
    elSpan.textContent = pokemon.type;
    elP.textContent = `${pokemon.weight}-${pokemon.avg_spawns}`;

    elLi.appendChild(imgBox);
    elLi.appendChild(infoBox);
    imgBox.appendChild(elImg);
    infoBox.appendChild(elH2);
    infoBox.appendChild(elSpan);
    infoBox.appendChild(elP);

    return elLi;
}

