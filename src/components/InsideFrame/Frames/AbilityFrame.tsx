import type { FC } from 'react';
import type { Ability } from '../../../types';

import React from 'react';


interface AbilityFrameProps {
    ability: Ability
}

const AbilityFrame: FC<AbilityFrameProps> = ({ability}) => {
    return (
        <div>
            {ability.name}
        </div>
    );
};

export default AbilityFrame;
