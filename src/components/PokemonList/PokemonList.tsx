import type { FC } from 'react';
import type { Selectable } from '../../pages';

import Image from 'next/image';
import { useState } from 'react';
import React from 'react';

import { CONCURRENT_POKEDEX, MAX_POKEMON } from '../../utils/consts';
import { usePokemons } from '../../hooks/usePokemons';
import Loader from '../Loader';

import ChangeOffsetButton from './ChangeOffsetButton';

interface PokemonListProps {
    setQueue: React.Dispatch<React.SetStateAction<Selectable[]>>;
}

const PokemonList: FC<PokemonListProps> = ({ setQueue }) => {
    const [offset, setOffset] = useState(0);
    const pokemons = usePokemons(offset, CONCURRENT_POKEDEX);

    return (
        <div className="absolute z-20 top-5 flex w-fit flex-row items-center justify-center gap-2 px-4 md:right-0 md:top-[50%] md:translate-y-[-50%] md:flex-col md:justify-end md:gap-5 md:px-0 select-none">
            {offset > 0 && (
                <div className="md:mr-8 md:flex md:w-full md:justify-end">
                    <ChangeOffsetButton
                        onClick={() => setOffset((o) => o - CONCURRENT_POKEDEX)}
                    >
                        -
                    </ChangeOffsetButton>
                </div>
            )}
            {pokemons.data && !pokemons.isLoading ? (
                <ul className="grid grid-flow-col grid-cols-2 grid-rows-2 items-center gap-2 md:translate-x-[50%] md:grid-flow-row md:grid-cols-none md:grid-rows-4">
                    {pokemons.data.map((pokemon) => (
                        <li
                            key={pokemon.id}
                            className="mb-0 flex w-full cursor-pointer flex-row items-center gap-2 rounded-full border-b-2 border-b-slate-300 bg-slate-200  transition-transform md:mb-2 md:rounded-l-full md:rounded-r-none md:hover:translate-x-[-50%]"
                            onClick={() => {
                                setQueue((p) => [...p, pokemon])
                            }}
                        >
                            <Image
                                src={pokemon.sprites.front_default || ''}
                                alt={`Pokemon ${pokemon.name}`}
                                width={70}
                                height={70}
                                className="h-24 w-24 shrink-0 rounded-full border-2 border-slate-900/30 p-2 shadow-2xl shadow-slate-900/50"
                            />
                            <span className="hidden pr-2 font-bold capitalize md:block">
                                {pokemon.name}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="relative flex items-center justify-center px-2 md:h-[424px] md:px-0">
                    <Loader />
                </div>
            )}

            {offset < MAX_POKEMON && (
                <div className="md:mr-8 md:flex md:w-full md:justify-end">
                    <ChangeOffsetButton
                        onClick={() => setOffset((o) => o + CONCURRENT_POKEDEX)}
                    >
                        +
                    </ChangeOffsetButton>
                </div>
            )}
        </div>
    );
};

export default PokemonList;
