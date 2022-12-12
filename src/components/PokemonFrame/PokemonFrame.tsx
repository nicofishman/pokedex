import type { FC } from 'react';
import type { Pokemon } from '../../types';

import React from 'react';
import Image from 'next/image';

import TypeCards from './TypeCards';
import Habilidades from './Habilidades';
import Estadisticas from './Estadisticas';

interface FrameWithPokemonProps {
    pokemon: Pokemon;
}

const PokemonFrame: FC<FrameWithPokemonProps> = ({pokemon}) => {
    
    return (
        <div className='flex flex-col z-[2] relative'>
            <div className='md:h-10 flex flex-col items-center md:mt-0 mt-10 h-auto'>
                <div className="flex-1">
                    <h1 className="text-center text-3xl capitalize font-bold">{pokemon.name}</h1>
                </div>
                <div className="md:absolute md:top-0 md:right-0 flex justify-end gap-2 ">
                    <TypeCards types={pokemon.types} />
                </div>
            </div>
            <div className="flex md:mt-16 mt-5 flex-col md:flex-row">
                <div className="flex-1 flex justify-center items-center mb-3">
                    <Image 
                        src={pokemon.sprites.other?.home.front_default || pokemon.sprites.front_default || ''} alt={pokemon.name} 
                        width={400} height={400} 
                        className='md:w-96 w-48 h-auto aspect-square'
                        loading='lazy'
                    />
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <div>
                        <h4 className="font-semibold w-full bg-neutral-700 text-white py-3 pl-2 mb-2">Habilidades</h4>
                        <div className="flex flex-row flex-wrap gap-2">
                            <Habilidades abilidades={pokemon.abilities} />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold w-full bg-neutral-700 text-white py-3 pl-2 mb-2">Estadísticas</h4>
                        <Estadisticas stats={pokemon.stats} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonFrame;
