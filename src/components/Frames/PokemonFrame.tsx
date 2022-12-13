import type { FC } from 'react';
import type { Selectable } from '../../pages';
import type { Pokemon, SelectablePokemon } from '../../types';

import Image from 'next/image';
import React from 'react';
import { GiBodyHeight } from 'react-icons/gi';

import Favorite from '../Favorite';
import Estadisticas from '../PokemonFrame/Estadisticas';
import Habilidades from '../PokemonFrame/Habilidades';
import TypeCards from '../PokemonFrame/TypeCards';
import { FrameTitle } from '../UI/FrameTitle';


interface FrameWithPokemonProps {
    pokemon: Pokemon | SelectablePokemon;
    setQueue: React.Dispatch<React.SetStateAction<Selectable[]>>;
}

const PokemonFrame: FC<FrameWithPokemonProps> = ({pokemon, setQueue}) => {

    return (
        <div className='flex flex-col flex-1'>
            <div className="absolute top-0 left-0 flex items-center">
                <p className='font-semibold text-slate-900'>N° {pokemon.id}</p>
                <Favorite data={{
                    type: 'pokemon',
                    data: pokemon
                }} />
            </div>

            <div className='md:h-10 flex flex-col items-center md:mt-0 mt-10 h-auto'>
                <div className="flex-1 flex-row flex">
                    <h1 className="text-center text-3xl capitalize font-bold">{pokemon.name}</h1>
                </div>
                <div className="md:absolute md:top-0 md:right-0 flex flex-wrap justify-center md:justify-end gap-2">
                    <div className='flex items-center p-2 rounded-md gap-1 bg-white/50'>
                        <GiBodyHeight className='text-3xl h-5 w-5' />
                        <p className='text-center'>{pokemon.height / 10} m</p>
                    </div>
                    <TypeCards types={pokemon.types} />
                </div>
            </div>
            <div className="flex md:mt-16 mt-5 flex-col md:flex-row">
                <div className="flex-1 flex justify-center items-center mb-3">
                    <Image 
                        src={pokemon.sprites.other?.home.front_default || pokemon.sprites.other?.['official-artwork'].front_default || pokemon.sprites.front_default || '/pikachuNegro.png'} alt={pokemon.name} 
                        width={400} height={400} 
                        className='md:w-96 w-48 h-auto aspect-square hover:scale-105 transition-transform hover:rotate-[5deg]'
                        loading='eager'
                    />
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <div>
                        <FrameTitle>Habilidades</FrameTitle>
                        <div className="flex flex-row flex-wrap gap-2">
                            <Habilidades setQueue={setQueue} habilidades={pokemon.abilities} />
                        </div>
                    </div>
                    <div>
                        <FrameTitle>Estadísticas</FrameTitle>
                        <Estadisticas stats={pokemon.stats} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonFrame;
