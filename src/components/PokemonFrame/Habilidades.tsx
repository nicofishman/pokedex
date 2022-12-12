import type { FC } from 'react';
import type { Pokemon } from '../../types';

import React from 'react';


interface HabilidadesProps {
    abilidades: Pokemon['abilities']
}

const Habilidades: FC<HabilidadesProps> = ({abilidades}) => {
    return (
        <>
            {
                abilidades.sort((a, b) => (a === b)? 0 : a? -1 : 1).map((abilidad, index) => (
                    <div key={index} className="bg-neutral-700/50 text-slate-200 p-2 rounded-md">
                        <h4 className="text-center text-xl capitalize font-bold">{abilidad.ability.name}</h4>
                    </div>
                ))
            }
        </>
    );
};

export default Habilidades;
