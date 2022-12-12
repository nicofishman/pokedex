import type { FC } from 'react';
import type { Ability } from '../../../types';

import React from 'react';
import classNames  from 'classnames';

import { GENERATION_COLORS } from '../../../utils/consts';


interface AbilityFrameProps {
    ability: Ability
}

const AbilityFrame: FC<AbilityFrameProps> = ({ability}) => {

    return (
        <div className='relative'>
            <p className="absolute top-0 left-0 font-semibold text-slate-900">
                N° {ability.id}
            </p>
            <div className='md:h-10 flex flex-col items-center md:mt-0 mt-10 h-auto'>
                <div className="flex-1 flex-row flex">
                    <h1 className="text-center text-3xl capitalize font-bold">{ability.name}</h1>
                </div>
                <div className="md:absolute md:top-0 md:right-0 flex justify-end gap-2 ">
                    <div className={classNames('flex justify-center py-2 px-7 rounded-lg w-fit drop-shadow-lg', GENERATION_COLORS[ability.generation.name])}>
                        <span className="font-semibold text-base text-slate-200">{ability.generation.name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbilityFrame;
