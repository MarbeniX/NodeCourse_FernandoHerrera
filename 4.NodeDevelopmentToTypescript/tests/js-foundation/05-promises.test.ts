import { getPokemon } from "../../src/js-foundation/05-promises";

describe("js-foundation/05-promises.ts", () => {
    test("getPokemonName return the correct name for pokemon id 1", async () => {
        const pokemonId = "1";
        const pokemonName = await getPokemon(pokemonId);
        expect(pokemonName).toBe("bulbasaur");
    });

    test("should return error if pokemon does not exists", async () => {
        const pokemonId = "9999";
        await expect(getPokemon(pokemonId)).rejects.toBe(
            "Pokemon with id " + pokemonId + " not found"
        );
    });
});
