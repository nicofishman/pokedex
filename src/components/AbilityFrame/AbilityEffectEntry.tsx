import type { FC } from 'react';
import type { Ability } from '../../types';

import React from 'react';

import { FrameTitle } from '../UI/FrameTitle';

interface AbilityEffectEntryProps {
    abilityEffectEntries: Ability['effect_entries'];
}

const AbilityEffectEntry: FC<AbilityEffectEntryProps> = ({abilityEffectEntries}) => {
    const abilityEffectEntry = abilityEffectEntries.find(eff => eff.language.name === 'es') ||
                                abilityEffectEntries.find(eff => eff.language.name === 'en');

    return abilityEffectEntry ? (
        <div className='flex-1 flex flex-col'>
            <FrameTitle>Descripción ({abilityEffectEntry?.language.name.toUpperCase()})</FrameTitle>
            <p className="text-slate-900">{
                abilityEffectEntry?.effect
            }</p>
        </div>
    ) : (
        <></>
    )
};

export default AbilityEffectEntry;
