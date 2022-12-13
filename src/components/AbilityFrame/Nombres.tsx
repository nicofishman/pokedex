import type { FC } from 'react';
import type { Ability } from '../../types';

import React from 'react';


interface NombresProps {
    nombres: Ability['names']
}

const Nombres: FC<NombresProps> = ({nombres}) => {
    return (
        <ul className='divide-y-[1px] divide-slate-700/40 '>
            {nombres.map((name, idx) => (
                <li key={idx} className="text-slate-700 p-2">
                    <span>{name.language.name}: {' '}</span> <span className='font-semibold'>{name.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default Nombres;
