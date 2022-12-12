import type { FC } from 'react';

import Link from 'next/link';
import React from 'react';

interface PresentationFrameProps {}

const PresentationFrame: FC<PresentationFrameProps> = () => {
    return (
        <div className="flex flex-col select-none justify-around h-full text-center z-10">
            <div className="group flex flex-col">
                <h1 className="text-3xl font-bold transition-transform group-hover:translate-x-4">
                    Bienvenido a mi Pokedex!
                </h1>
                <span className="text-xl font-medium transition-transform group-hover:-translate-x-4">
                    Selecciona un pokemon para ver sus detalles
                </span>
            </div>
            <div className="mt-20">
                <h2 className='font-semibold'>
                    Este proyecto fue hecho por {' '}
                    <Link target='_blank' href={'https://www.linkedin.com/in/nicol%C3%A1s-fishman-109b03182/'} className='text-lime-800 underline font-bold'>
                        Nicolás Fishman
                    </Link>
                </h2>
            </div>
        </div>
    );
};

export default PresentationFrame;
