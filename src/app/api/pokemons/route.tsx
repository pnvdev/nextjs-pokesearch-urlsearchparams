import type {Pokemons, PokemonsResult, PokemonResult} from "../../../lib/definitions";

export async function GET() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1302");
  const {results} = (await res.json()) as Pokemons;

  const result = await Promise.all(
    results.map(async (item: PokemonsResult) => {
      const {url} = item;

      const resPokemon = await fetch(url);
      const dataPokemon = (await resPokemon.json()) as PokemonResult;
      const {
        name,
        sprites: {front_default},
      } = dataPokemon;

      return {name, image: front_default};
    }),
  );

  return Response.json(result);
}
