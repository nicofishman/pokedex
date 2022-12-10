import type { FC } from "react";

import Image from "next/image";
import { useState } from "react";
import React from "react";

import { CONCURRENT_POKEDEX, MAX_POKEMON } from "../utils/consts";
import { usePokemons } from "../hooks/usePokemons";

import ChangeOffsetButton from "./ChangeOffsetButton";

interface PokemonListProps {
}

const PokemonList: FC<PokemonListProps> = () => {
    const [offset, setOffset] = useState(0);
    const pokemons = usePokemons(offset, CONCURRENT_POKEDEX);


    return (
        <div className="flex items-center justify-center md:justify-end w-fit flex-row md:flex-col absolute md:right-0 md:top-[50%] md:translate-y-[-50%] top-20 md:gap-5 gap-2 px-4 md:px-0">
            {offset > 0 && (
                <div className="md:flex md:w-full md:justify-end md:mr-8">
                    <ChangeOffsetButton onClick={() => setOffset(o => o - CONCURRENT_POKEDEX)}> - </ChangeOffsetButton>
                </div>
            )}
        
            <ul className="md:translate-x-[50%] grid grid-flow-col md:grid-cols-none grid-cols-2 grid-rows-2 md:grid-rows-4 md:grid-flow-row items-center">
                {
                    pokemons.data && pokemons.data.length > 0 ?   
                        pokemons.data.map((pokemon) => (
                            <li
                                key={pokemon.id}
                                className="flex w-full flex-row items-center gap-2 md:rounded-l-full border-b-2 border-b-slate-300 bg-white md:mb-2 mb-0  md:hover:translate-x-[-50%] transition-transform rounded-full md:rounded-r-none cursor-pointer"
                            >
                                <Image
                                    src={pokemon.sprites.front_default || ""}
                                    alt={`Pokemon ${pokemon.name}`}
                                    width={70}
                                    height={70}
                                    className="rounded-full border-2 border-slate-900/30 shadow-2xl shadow-slate-900/50 p-2 h-24 w-24 shrink-0"
                                />
                                <span className="capitalize hidden md:block pr-2 font-bold">{pokemon.name}</span>
                            </li>
                        )) :
                        (
                            <div className="flex flex-col items-center justify-center">
                                {/* <Loader /> */}
                            </div>
                        )
                }

            </ul>
            {offset < MAX_POKEMON && (
                <div className="md:flex md:w-full md:justify-end md:mr-8">
                    <ChangeOffsetButton onClick={() => setOffset(o => o + CONCURRENT_POKEDEX)}> + </ChangeOffsetButton>
                </div>
            )}
        </div>
    );
};

export default PokemonList;
