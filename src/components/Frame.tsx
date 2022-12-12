import type { FC } from 'react';
import type { Pokemon } from '../types';

import Image from 'next/image';
import React from 'react';

import PresentationFrame from './PresentationFrame';
import PokemonFrame from './PokemonFrame/PokemonFrame';

interface FrameProps {
    currentPokemon: Pokemon;
}

const Frame: FC<FrameProps> = ({ currentPokemon }) => {
    return (
        <div className="paperTexture relative mx-4 mt-40 md:h-[678px] h-auto w-full max-w-[1000px] overflow-hidden rounded-3xl bg-slate-200 p-5 shadow-2xl shadow-slate-900/50 md:mt-0">
            {'id' in currentPokemon ? (
                <PokemonFrame pokemon={currentPokemon} />
            ) : (
                <PresentationFrame />
            )}
            <div className="select-none ">

                <Image
                    src="/pokeball.png"
                    alt="Pokeball"
                    width={300}
                    height={300}
                    className="absolute top-0 left-0 h-24 w-24 -translate-x-[45%] -translate-y-[45%] opacity-20 grayscale z-[1]"
                />
                <Image
                    src="/pokeball.png"
                    alt="Pokeball"
                    width={300}
                    height={300}
                    className="absolute top-0 right-0 h-24 w-24 translate-x-[45%] -translate-y-[45%] opacity-20 grayscale z-[1]"
                />
                <Image
                    src="/pokeball.png"
                    alt="Pokeball"
                    width={300}
                    height={300}
                    className="absolute bottom-0 left-0 h-24 w-24 -translate-x-[45%] translate-y-[45%] opacity-20 grayscale z-[1]"
                />
                <Image
                    src="/pokeball.png"
                    alt="Pokeball"
                    width={300}
                    height={300}
                    className="absolute bottom-0 right-0 h-24 w-24 translate-x-[45%] translate-y-[45%] opacity-20 grayscale z-[1]"
                />
            </div>

        </div>
    );
};

export default Frame;
