const { httpClientPlugin } = require("../plugins");

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClientPlugin.get(url);
    return pokemon.name;
};

module.exports = { getPokemon };
