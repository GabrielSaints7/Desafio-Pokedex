let pokemonDados = document.getElementById('color');
const limite = 1;
let offsete = 1;


function dadosPokemonsToHtml(pokemon) {
    return `<section class=${pokemon.type}>
    <section class="pokemonDetails">
        <div class="informacoesGerais">
            <div class="detalhesConf">
                <button type="submit" >
                    <img class="icons" src="./assets/img/svg icon/retorna.svg">
                </button>
                <button type="submit" >
                    <img class="icons" src="./assets/img/svg icon/favoritar.svg">
                </button>
            </div>
            <div class="dadosDoPokemon">
                <div class="dadosNomes">
                    <div>
                        <h1 class="nomePoke">${pokemon.name}</h1>
                        <div class="dadosTipos">
                        ${pokemon.types.map((type) => `<div class="type">${type}</div>`).join(' ')}
                        </div>
                    </div>
                    <div>#${pokemon.number}</div>
                </div>
            </div>
            <div class="img">
                <img src=${pokemon.photo} alt="${pokemon.name}">
            </div>
        </div>
        <div class=" dadosEspecificos">
                <div>
                    <h1>Informações</h1>
                </div>
                <div class="menu">
                    <h3 class="aba"><a href="#aba"></a></h3>
                    <h3 class="aba"><a href="#aba1">Sobre</a></h3>
                    <h3 class="aba"><a href="#aba2">Estatísticas</a></h3>
                    <h3 class="aba"><a href="#aba"></a></h3>
                </div>
                <article>
                    <section id="aba1" class="active">
                        <div class="especificacoes">
                            <h3>Espécie:</h3>
                            <h3>Altura:</h3>
                            <h3>Peso:</h3>
                            <h3>Habilidades:</h3>
                        </div>
                        <div class="Resultadosespecificacoes">
                            <h3>${pokemon.specie}</h3>
                            <h3>${pokemon.height} cm</h3>
                            <h3>${pokemon.weight} kg</h3>
                            <h3>${pokemon.abilities}</h3>
                        </div>
                    </section>

                    <section id="aba2" class="aba2">
                        <div class="especificacoes">
                            <h3>HP</h3>
                            <h3>Ataque:</h3>
                            <h3>Defesa:</h3>
                            <h3>Ataque Especial:</h3>
                            <h3>Defesa Especial:</h3>
                            <h3>Velocidade:</h3>
                        </div>
                        <div class="Resultadosespecificacoes">
                            <h3>HP</h3>
                            <h3>Ataque</h3>
                            <h3>Defesa</h3>
                            <h3>Ataque Especial</h3>
                            <h3>Defesa Especial</h3>
                            <h3>Velocidade</h3>
                        </div>
                    </section>
                </article>
            </div>
    </section>
</section>`
}


pokeApi.getpokemons(0,1).then((pokemons = []) => {
    pokemonDados.innerHTML = pokemons.map(dadosPokemonsToHtml).join('')
})







/* function especificoPoke(numberPoke, limit = 1) {
    pokeApi.getpokemons(numberPoke - 1, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('');
        pokemonList.innerHTML += newHtml
    })
} */