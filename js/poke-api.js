const pokeApi = {};

/* Dados iniciais de acesso para consumo de APIs


! Método getpokemons
    realiza a consulta da url, depois transforma a response em JSON,
    após extrai o resultados que são os dados dos pokemons em forma de objeto
*/

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    
    pokemon.specie = pokeDetail.specieDefinida;
    pokemon.height = (pokeDetail.height*10)
    pokemon.weight = (pokeDetail.weight/10)
    pokemon.abilities = pokeDetail.abilities.map((skill) => skill.ability.name).join(', ')

    /* pokemon.hp = 
    pokemon.attack = 
    pokemon.defense = 
    pokemon.specialAttack = 
    pokemon.specialDefense = 
    pokemon.speed = */

    return pokemon
}

pokeApi.getpokemonsDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getpokemonsDetailSpecie = (pokemon) =>{
    return fetch(pokemon.species.url).then((response) => response.json())
    .then((specie) => {specie.egg_groups})
    .then(specieDefinida)
}
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

pokeApi.getpokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => { return response.json() })
        .then((jsonBody) => { return jsonBody.results })
        .then((pokemons) => pokemons.map(pokeApi.getpokemonsDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

