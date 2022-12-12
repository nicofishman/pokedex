import type { FC } from 'react';
import type { Pokemon } from '../../types';

import React from 'react';


interface EstadisticasProps {
    stats: Pokemon['stats'];
}

const Estadisticas: FC<EstadisticasProps> = ({stats}) => {
    return (
        <ul className='divide-y-[1px] divide-slate-700/40 '>
            {
                stats.map((stat, index) => (
                    <li key={index} className="text-slate-700 p-2 font-semibold">
                        <span className='capitalize'>{stat.stat.name}</span>: <span>{stat.base_stat}</span>
                    </li>
                ))
            }
        </ul>
    );
};

export default Estadisticas;
