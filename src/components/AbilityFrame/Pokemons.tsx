import type { FC } from 'react';
import type { SelectablePokemon } from '../../types';


import { useData } from '../../context/dataContext';
import { FrameTitle } from '../UI/FrameTitle';
import { PokemonOrAbilityButton } from '../UI/PokemonOrAbilityButton';



interface PokemonsProps {
    pokemons: SelectablePokemon[];
}

const Pokemons: FC<PokemonsProps> = ({pokemons}) => {
    const { setQueue } = useData();

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
