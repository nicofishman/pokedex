import type { FC } from 'react';
import type { PokemonType } from '../../types';

import React from 'react';
import classNames from 'classnames';

import { COLORS } from '../../utils/consts';


interface TypeCardsProps {
    types: PokemonType[]
}

const TypeCards: FC<TypeCardsProps> = ({types}) => {
    return (
        <>
            {types.map((type, index) => (
                <div key={index} className={classNames('flex justify-center py-2 px-7 rounded-lg w-fit', COLORS[type.type.name])}>
                    <span className="capitalize font-semibold text-base text-slate-200">{type.type.name}</span>
                </div>
            ))}
        </>
    )
};

export default TypeCards;
