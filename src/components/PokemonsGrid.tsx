import type {Pokemon} from "../lib/definitions";

import PokemonCard from "../components/PokemonCard";
import {getData} from "../lib/data";
interface PokemonsGridProps {
  searchParams: {
    query?: string;
  };
}

export async function PokemonsGrid({searchParams}: PokemonsGridProps) {
  const {query} = searchParams;
  const pokemons = await getData<Pokemon[]>();

  if (pokemons.length === 0) {
    return (
      <div className="flex flex-wrap justify-center align-middle">
        <div className="flex min-h-60">
          <div className="align mb-2 flex items-center text-center text-xl font-bold">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center">
      {pokemons
        .filter((item) => (query === undefined ? item : item.name.includes(query.toLowerCase())))
        .slice(0, 12)
        .map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
    </div>
  );
}
