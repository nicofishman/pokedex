import type { FC } from 'react';
import type { Pokemon } from '../../types';
import type { Selectable } from '../../pages';

import React from 'react';

import { trpc } from '../../utils/trpc';
import Loader from '../Loader';



interface HabilidadesProps {
    habilidades: Pokemon['abilities']
    setQueue: React.Dispatch<React.SetStateAction<Selectable[]>>;
}

const Habilidades: FC<HabilidadesProps> = ({habilidades, setQueue}) => {
    const {data: abilities} = trpc.pokedex.getAbilities.useQuery(habilidades.map(h => h.ability.url));

    return abilities ? (
        <>
            {
                abilities.sort((a, b) => (a === b)? 0 : a? -1 : 1).map((ability, index) => (
                    <button key={index} className="bg-neutral-700/50 text-slate-200 p-2 rounded-md" onClick={() => setQueue(queue => [...queue, ability])}>
                        <h4 className="text-center text-xl capitalize font-bold">
                            {ability.names.find(ab => ab.language.name === 'es')?.name || ability.names.find(ab => ab.language.name === 'en')?.name}
                        </h4>
                    </button>
                )
                )
            }
        </>
    ) : (
        <Loader />
    )
};

export default Habilidades;
