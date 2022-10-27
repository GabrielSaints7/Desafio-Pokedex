const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 20
const limit = 5
let offset = 0;


function convertPokemonToHtml(pokemon) {
    return `<li id="selectPokemon" class="pokemon ${pokemon.type}" >
        <span class="number">#${pokemon.number}</span>
        <span class="name">
            ${pokemon.name}
        </span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>
            <img src= ${pokemon.photo}
                alt="${pokemon.name}">
        </div>
    </li>`
}


function loadMoreItems(offset, limit) {
    pokeApi.getpokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('');
        pokemonList.innerHTML += newHtml
    })
}



loadMoreButton.addEventListener('click', () => {
    offset += limit
    qtdRecordNextPage = offset + limit


    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadMoreItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadMoreItems(offset, limit)
    }
})

pokeApi.getpokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('');
})

/* Percorre a lista inicial, processa o que for possivel e retorna uma nova lista
        TODO: O map abaixo entra lista de pokemons e percorre e cria uma nova lista a partir do retorno, é como o for mas cria nova lista automática.
            Join transforma uma lista em String
        Todo: no uso abaixo está retornando um novo elemento para add no html
            const newHtml = newList.join('');
*/