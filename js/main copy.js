/* 
TODO: BRUTA  a simplifica esta no Main
 */


/* Método Fetch de Requisição HTTP
    Fetch = solicita url
    then = retorna a requisição caso sucesso
    catch = retorna a erro se houver insucesso
    finally = Retorna independente do retorno

    ! Importe
    Encadeamento de then
    1. trata o retorno do fetch
    2. trata o retorno do 2º then convertido em then
*/

function convertPokemonToHtml(pokemon) {
    return `<li class="pokemon">
        <span class="number">#001</span>
        <span class="name">
            ${pokemon.name}
        </span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poisson</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
        </div>
    </li>`
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getpokemons().then((pokemons = []) => {

    /* Percorre a lista inicial, processa o que for possivel e retorna uma nova lista
    TODO: O map abaixo entra lista de pokemons e percorre e cria uma nova lista a partir do retorno, é como o for mas cria nova lista automatica.
    */
    const newList = pokemons.map((pokemon)=> {
        return convertPokemonToHtml(pokemon)
    })

    console.log(newList);



    /* const listItems = []

    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItems.push(convertPokemonToHtml(pokemon))
    }
    pokemonList.innerHTML=(listItems) */
})

