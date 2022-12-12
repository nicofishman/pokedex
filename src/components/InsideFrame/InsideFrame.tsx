import type { FC } from 'react';
import type { Selectable } from '../../pages';
import type { Ability, Pokemon } from '../../types';

import React from 'react';

import PresentationFrame from '../PresentationFrame';

import PokemonFrame from './Frames/PokemonFrame';
import AbilityFrame from './Frames/AbilityFrame';


interface InsideFrameProps {
    data: Selectable;
    setQueue: React.Dispatch<React.SetStateAction<Selectable[]>>;
}

const InsideFrame: FC<InsideFrameProps> = ({data, setQueue}) => {
    return (
        <>
            {
                'abilities' in data ? (
                    <PokemonFrame setQueue={setQueue} pokemon={(data as Pokemon)} />
                ) : 
                    'is_main_series' in data ? (
                        <AbilityFrame ability={(data as Ability)} />
                    ) :
                        (
                            <PresentationFrame />
                        )
            }
        </>
    );
};

export default InsideFrame;
