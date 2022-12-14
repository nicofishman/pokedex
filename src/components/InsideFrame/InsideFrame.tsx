import type { FC } from 'react';
import type { Selectable } from '../../pages';

import React from 'react';

import PresentationFrame from '../Frames/PresentationFrame';
import AbilityFrame from '../Frames/AbilityFrame';
import PokemonFrame from '../Frames/PokemonFrame';


interface InsideFrameProps {
    data: Selectable;
}

const InsideFrame: FC<InsideFrameProps> = ({data}) => {
    return (
        <div className='relative z-20 h-full'>
            {
                data.type === 'presentation' ? (
                    <PresentationFrame />
                ) : (
                    data.type === 'pokemon' ? (
                        <PokemonFrame pokemon={(data.data)} />
                    ) : (
                        data.type === 'ability' && (
                            <AbilityFrame ability={data.data}  />
                        )
                    )
                )
            }
        </div>
    );
};

export default InsideFrame;
