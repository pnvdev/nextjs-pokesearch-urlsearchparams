export interface Pokemons {
  count: number;
  next: string;
  previous?: null | number;
  results: PokemonsResult[];
}

export interface PokemonsResult {
  name: string;
  url: string;
}

export interface PokemonResult {
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface Pokemon {
  name: string;
  image: string;
}
