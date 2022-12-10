import type { FC } from 'react';
import React from 'react';

interface FrameProps {
    currentPokemon: number;
}

const Frame: FC<FrameProps> = ({currentPokemon}) => {
    
    return (
        <div>
            Frame
        </div>
    );
};

export default Frame;
