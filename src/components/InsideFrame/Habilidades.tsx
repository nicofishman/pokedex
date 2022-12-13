import type { FC} from 'react';
import type { Selectable } from '../../pages';
import type { Ability, SelectablePokemon } from '../../types';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import React from 'react';

import { preFetchAllAbilities } from '../../server/pokedex/pokeApi';
import { useData } from '../../context/dataContext';

interface HabilidadesProps extends Partial<InferGetStaticPropsType<typeof getStaticProps>> {
    habilidades: SelectablePokemon['abilities']
    setQueue: React.Dispatch<React.SetStateAction<Selectable[]>>;
}

const Habilidades: FC<HabilidadesProps> = ({habilidades, setQueue}) => {

    const { abilitiesList } = useData();
    
    return (
        <>
            {
                habilidades.sort((a, b) => (a === b)? 0 : a? -1 : 1).map((ability, index) => { 
                    const abilityFromCompleteList = abilitiesList?.find(ab => ab.name === ability.ability.name);

                    return (
                        <button key={index} className="bg-neutral-700/50 text-slate-200 p-2 rounded-md" 
                            onClick={() => setQueue(queue => [...queue, {
                                type: 'ability',
                                data: abilityFromCompleteList || {} as Ability
                            }])}>
                            <h4 className="text-center text-xl capitalize font-bold">
                                {abilityFromCompleteList?.names.find(ab => ab.language.name === 'es')?.name || abilityFromCompleteList?.names.find(ab => ab.language.name === 'en')?.name}
                            </h4>
                        </button>
                    )}
                )
            }
        </>
    )
};

export default Habilidades;

export const getStaticProps: GetStaticProps<{
    habilidadesList: Ability[],
}> = async () => {
    const habilidadesList = await preFetchAllAbilities();    

    return {
        props: {
            habilidadesList,
        }
    }
}
