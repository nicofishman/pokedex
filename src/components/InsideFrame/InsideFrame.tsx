import type { FC } from 'react';
import type { Selectable } from '../../pages';

import React from 'react';

import PresentationFrame from '../PresentationFrame';

import AbilityFrame from './Frames/AbilityFrame';
import PokemonFrame from './Frames/PokemonFrame';


interface InsideFrameProps {
    data: Selectable;
    setQueue: React.Dispatch<React.SetStateAction<Selectable[]>>;
}

const InsideFrame: FC<InsideFrameProps> = ({data, setQueue}) => {
    return (
        <div className='relative z-20 h-full'>
            {
                data.type === 'presentation' ? (
                    <PresentationFrame />
                ) : (
                    data.type === 'pokemon' ? (
                        <PokemonFrame setQueue={setQueue} pokemon={(data.data)} />
                    ) : (
                        data.type === 'ability' && (
                            <AbilityFrame setQueue={setQueue} ability={data.data}  />
                        )
                    )
                )
            }
        </div>
    );
};

export default InsideFrame;
