
var nome = document.getElementById('nome-pkm');
nome.addEventListener('keyup', function () {
    pegaPokemon(nome.value);
});

function pegaPokemon(name) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(response => response.json())
        .then(allpokemon => {

            var pokemons = [];
            allpokemon.results.map(function (val) {
                fetch(val.url)
                    .then(response => response.json())
                    .then(pokemonSingle => {
                        pokemons.push({ nome: val.name, imagem: pokemonSingle.sprites.other.dream_world.front_default });

                        var imgpkm = document.getElementById('pkm');
                        var nomepkm = document.querySelector('.nome h2');

                        if (pokemons.length == 150) {
                            pokemons.map(function (val) {

                                if ((name == val.nome) || (name == val.nome[0].toUpperCase() + val.nome.substring(1))) {
                                    imgpkm.src = val.imagem;
                                    nomepkm.innerHTML = val.nome[0].toUpperCase() + val.nome.substring(1);
                                }
                            })
                        }
                    })

            })
            pokemons.map(function (val) {
                console.log(val.nome)
            });
        });
}