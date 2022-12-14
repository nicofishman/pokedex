import type { FC} from 'react';
import type { Ability, SelectablePokemon } from '../../types';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import React from 'react';

import { preFetchAllAbilities } from '../../server/pokedex/pokeApi';
import { useData } from '../../context/dataContext';
import { PokemonOrAbilityButton } from '../UI/PokemonOrAbilityButton';

interface HabilidadesProps extends Partial<InferGetStaticPropsType<typeof getStaticProps>> {
    habilidades: SelectablePokemon['abilities']
}

const Habilidades: FC<HabilidadesProps> = ({habilidades}) => {

    const { abilitiesList, setQueue } = useData();
    
    return (
        <>
            {
                habilidades.map((ability, index) => { 
                    const abilityFromCompleteList = abilitiesList?.find(ab => ab.name === ability.ability.name);

                    return (
                        <PokemonOrAbilityButton key={index}
                            onClick={() => setQueue(queue => [...queue, {
                                type: 'ability',
                                data: abilityFromCompleteList || {} as Ability
                            }])}>
                            <h4 className="text-center text-xl capitalize font-bold">
                                {abilityFromCompleteList?.names.find(ab => ab.language.name === 'es')?.name || abilityFromCompleteList?.names.find(ab => ab.language.name === 'en')?.name}
                            </h4>
                        </PokemonOrAbilityButton>
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
