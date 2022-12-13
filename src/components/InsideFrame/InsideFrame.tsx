import type { FC } from 'react';
import type { Selectable } from '../../pages';
import type { Ability, SelectablePokemon } from '../../types';

import React from 'react';

import PresentationFrame from '../PresentationFrame';

import AbilityFrame from './Frames/AbilityFrame';
import PokemonFrame from './Frames/PokemonFrame';


interface InsideFrameProps {
    data: Selectable;
    setQueue: React.Dispatch<React.SetStateAction<Selectable[]>>;
    abilitiesList: Ability[];
    pokemonsList: SelectablePokemon[];
}

const InsideFrame: FC<InsideFrameProps> = ({data, setQueue, abilitiesList, pokemonsList}) => {
    return (
        <div className='relative z-20 h-full'>
            {
                data.type === 'presentation' ? (
                    <PresentationFrame />
                ) : (
                    data.type === 'pokemon' ? (
                        <PokemonFrame setQueue={setQueue} pokemon={(data.data)} abilitiesList={abilitiesList}/>
                    ) : (
                        data.type === 'ability' && (
                            <AbilityFrame setQueue={setQueue} ability={data.data} pokemonsList={pokemonsList} />
                        )
                    )
                )
            }
        </div>
    );
};

export default InsideFrame;
