"use client";

import type {ChangeEvent} from "react";

import {usePathname, useSearchParams, useRouter} from "next/navigation";
import React, {useState} from "react";

function SearchBar() {
  interface Query {
    query: string;
  }
  type UpdatedQuery = Record<string, string>;

  const [searchQuery, setSearchQuery] = useState<Query>({
    query: "",
  });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    const updatedQuery = {...searchQuery, [name]: value};

    setSearchQuery(updatedQuery);
    updateSearchQuery(updatedQuery);
  };

  const updateSearchQuery = (updatedQuery: UpdatedQuery) => {
    const params = new URLSearchParams(searchParams);

    Object.keys(updatedQuery).forEach((key) => {
      if (updatedQuery[key]) {
        params.set(key, updatedQuery[key]);
      } else {
        params.delete(key);
      }
    });
    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;

    router.push(updatedPath);
  };

  return (
    <nav className="mx-2">
      <input
        className="nes-input"
        id="query"
        name="query"
        placeholder="Search a pokemon..."
        type="text"
        value={searchQuery.query}
        onChange={handleInputChange}
      />
    </nav>
  );
}

export default SearchBar;
