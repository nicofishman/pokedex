import type { FC } from 'react';
import type { SelectablePokemon } from '../../types';
import type { Selectable } from '../../pages';

import React from 'react';

import { FrameTitle } from '../UI/FrameTitle';
import { PokemonOrAbilityButton } from '../UI/PokemonOrAbilityButton';



interface PokemonsProps {
    pokemons: SelectablePokemon[];
    setQueue: React.Dispatch<React.SetStateAction<Selectable[]>>;
}

const Pokemons: FC<PokemonsProps> = ({pokemons, setQueue}) => {
    return (
        <>
            <FrameTitle>Pokemons</FrameTitle>
            <div className='flex flex-wrap flex-1'>
                {pokemons.map((pokemon) => (
                    <PokemonOrAbilityButton
                        key={pokemon.name} 
                        onClick={() => setQueue(queue => [...queue, {
                            type: 'pokemon',
                            data: pokemon
                        }])}>
                        <h4 className="text-center text-base capitalize font-bold">
                            {pokemon.name}
                        </h4>
                    </PokemonOrAbilityButton>
                ))}
            </div>
        </>
    )
};

export default Pokemons;
