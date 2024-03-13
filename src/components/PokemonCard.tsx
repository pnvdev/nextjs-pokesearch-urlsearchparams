import type {Pokemon} from "../lib/definitions";

import React from "react";

interface ComponentProps {
  pokemon: Pokemon;
}

function PokemonCard({pokemon}: ComponentProps) {
  const {image, name} = pokemon;

  return (
    <div className="nes-container with-title is-centered max-h-xs m-2 max-w-xs flex-1 basis-1/5 justify-between gap-4 overflow-hidden rounded shadow-lg">
      <img alt="Pokemon" className="w-full" src={image} />
      <div className="px-6 py-4">
        <div className="mb-2 text-center text-xl font-bold">{name}</div>
      </div>
    </div>
  );
}

export default PokemonCard;
