import type { Selectable } from '../../pages';
import type { Ability } from '../../types';

import classNames from 'classnames';
import React from 'react';

import { useData } from '../../context/dataContext';
import { GENERATION_COLORS } from '../../utils/consts';
import AbilityEffectEntry from '../AbilityFrame/AbilityEffectEntry';
import Pokemons from '../AbilityFrame/Pokemons';
import Favorite from '../Favorite';
import { FrameTitle } from '../UI/FrameTitle';

import Nombres from './../AbilityFrame/Nombres';



interface AbilityFrameProps {
    ability: Ability;
    setQueue: React.Dispatch<React.SetStateAction<Selectable[]>>;
}

const AbilityFrame = ({ability, setQueue }: AbilityFrameProps) => {
    const { pokemonsList } = useData();
    const abilityName = ability.names.find(ab => ab.language.name === 'es')?.name || ability.names.find(ab => ab.language.name === 'en')?.name;

    const pokemonsInside = pokemonsList?.filter(pokemon => ability.pokemon.map(p => p.pokemon.name).includes(pokemon.name));

    return (
        <div className='relative flex-col flex h-full'>
            <div className="absolute top-0 left-0 flex items-center">
                <p className="font-semibold text-slate-900">
                    N° {ability.id}
                </p>
                <Favorite data={{
                    type: 'ability',
                    data: ability
                }} />
            </div>
            <div className='md:h-10 flex flex-col items-center md:mt-0 mt-10 h-auto'>
                <div className="flex-1 flex-row flex">
                    <h1 className="text-center text-3xl capitalize font-bold">{abilityName}</h1>
                </div>
                <div className="md:absolute md:top-0 md:right-0 flex justify-end gap-2 ">
                    <div className={classNames('flex justify-center py-2 px-7 rounded-lg w-fit drop-shadow-lg', GENERATION_COLORS[ability.generation.name])}>
                        <span className="font-semibold text-base text-slate-200">{ability.generation.name}</span>
                    </div>
                </div>
            </div>
            <div className="flex md:mt-16 mt-5 flex-col md:flex-row gap-5 h-full overflow-y-auto scrollBar">
                <div className="flex-1 flex flex-col gap-5 h-max">
                    <AbilityEffectEntry abilityEffectEntries={ability.effect_entries}/>
                    <div className='flex-1'>
                        <Pokemons pokemons={pokemonsInside} setQueue={setQueue} />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <FrameTitle>Nombres</FrameTitle>
                    <Nombres nombres={ability.names} />
                </div>
            </div>                    
        </div>
    ) 
};

export default AbilityFrame;