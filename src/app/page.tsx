import {Suspense} from "react";

import SearchBar from "../components/SearchBar";
import {PokemonsGrid} from "../components/PokemonsGrid";

interface HomePageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default function HomePage({searchParams}: HomePageProps) {
  return (
    <>
      <Suspense>
        <SearchBar />
      </Suspense>
      <PokemonsGrid searchParams={searchParams} />
    </>
  );
}
