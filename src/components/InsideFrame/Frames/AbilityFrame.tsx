import type { Selectable } from '../../../pages';
import type { Ability, SelectablePokemon } from '../../../types';

import classNames from 'classnames';
import React from 'react';

import { GENERATION_COLORS } from '../../../utils/consts';
import Loader from '../../Loader';



interface AbilityFrameProps {
    ability: Ability;
    setQueue: React.Dispatch<React.SetStateAction<Selectable[]>>;
    pokemonsList: SelectablePokemon[];
}

const AbilityFrame = ({ability, setQueue, pokemonsList }: AbilityFrameProps) => {

    const abilityName = ability.names.find(ab => ab.language.name === 'es')?.name || ability.names.find(ab => ab.language.name === 'en')?.name;

    const abilityEffectEntry = ability.effect_entries.find(eff => eff.language.name === 'es') ||
                            ability.effect_entries.find(eff => eff.language.name === 'en');

    const pokemonsInside = pokemonsList?.filter(pokemon => ability.pokemon.map(p => p.pokemon.name).includes(pokemon.name));

    return (
        <div className='relative flex-col flex h-full'>
            <p className="absolute top-0 left-0 font-semibold text-slate-900">
                N° {ability.id}
            </p>
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
                    <div className='flex-1 flex flex-col'>
                        <h4 className="font-semibold w-full bg-gradient text-white py-3 pl-2 mb-2">Descripción ({abilityEffectEntry?.language.name.toUpperCase()})</h4>
                        <p className="text-slate-900">{
                            abilityEffectEntry?.effect
                        }</p>
                    </div>
                    <div className='flex-1'>
                        <h4 className="font-semibold w-full bg-gradient text-white py-3 pl-2 mb-2">Pokemons</h4>
                        {pokemonsInside ? (
                            <div className='flex flex-wrap flex-1'>
                                {
                                    pokemonsInside.map((pokemon) => (
                                        <button key={pokemon.name} className="bg-neutral-700/50 text-slate-200 p-2 rounded-md mr-2 mb-2" onClick={() => setQueue(queue => [...queue, {
                                            type: 'pokemon',
                                            data: pokemon
                                        }])}>
                                            <h4 className="text-center text-base capitalize font-bold">
                                                {pokemon.name}
                                            </h4>
                                        </button>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className='flex flex-col items-center justify-center h-full'>
                                <Loader />
                            </div>
                        )

                        }
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <div>
                        <h4 className="font-semibold w-full bg-gradient text-white py-3 pl-2 mb-2">Nombres</h4>
                        <ul className='divide-y-[1px] divide-slate-700/40 '>
                            {ability.names.map((name, idx) => (
                                <li key={idx} className="text-slate-700 p-2">
                                    <span>{name.language.name}: {' '}</span> <span className='font-semibold'>{name.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>                    
        </div>
    ) 
};

export default AbilityFrame;