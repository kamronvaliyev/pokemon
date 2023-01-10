var elForm = document.querySelector("[data-form]");
var elInputName = document.querySelector("[data-name]");
var elInputType = document.querySelector("[data-type]");
var elInputWeight = document.querySelector("[data-weight]");
var elInputAge = document.querySelector("[data-age]");
var elInputImg = document.querySelector("[data-img]");
var elUl = document.querySelector("[data-ul]");
let elInputSearch = document.querySelector("[data-search]");
let elTemp = document.querySelector("[data-template]")
let elLikesList = document.querySelector("[data-likes-list");

const likes = getlikes();
renderLikes(likes)

renderPokemon(pokemons);

elUl.addEventListener("click", (evt) => {
    onFavoriteClick(evt);
})
function onFavoriteClick(evt) {
    const el = evt.target.closest("[data-btn-like]");

    if (!el) return
    const id = +el.dataset.id;

    if (likes.includes(id)) {
        likes.splice(likes.indexOf(id), 1)
    } else {
        likes.push(id);
    }
    setLikes(likes)
    renderPokemon(pokemons)
}

function setLikes(likes) {
    localStorage.setItem("likes", JSON.stringify(likes))
    renderLikes(likes)
}

function renderLikes(likes) {
    let html = "";
    likes.forEach(item => {
        const pokemon = pokemons.find(pokemon => pokemon.id === item)

        html += `<span>${pokemon.name}</span>`
    })

    elLikesList.innerHTML = html

}


function getlikes(likes) {
    const stringLikes = localStorage.getItem("likes") || "[]"
    return JSON.parse(stringLikes);
}

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

    // renderPokemon(namesPokemon)
})

elInputSearch.addEventListener("keyup", (evt) => {
    var namesPokemon = []
    pokemons.forEach((pokemon) => {
        if (pokemon.name.includes(elInputSearch.value)) {
            namesPokemon.push(pokemon)
        }
    });
    renderPokemon(namesPokemon)
})

function renderPokemon(pokemons) {
    elUl.innerHTML = "";
    for (var i = 0; i < pokemons.length; i++) {
        pokemon = pokemons[i];
        elUl.appendChild(createLi(pokemon));
    }
}


function createLi(pokemon) {
    let elLi = elTemp.content.cloneNode(true)

    elLi.querySelector("[data-img-temp]").src = pokemon.img
    elLi.querySelector("[data-btn-like]").dataset.id = pokemon.id;
    elLi.querySelector("[data-btn-like]").textContent = likes.includes(pokemon.id) ? "Liked" : "Like";
    elLi.querySelector("[data-template-heading]").textContent = pokemon.name;
    elLi.querySelector("[data-type]").textContent = pokemon.type;
    elLi.querySelector("[data-weight-svg_spawns]").textContent = `${pokemon.weight}-${pokemon.avg_spawns}`;

    return elLi;
}
// renderPokemon(pokemons)