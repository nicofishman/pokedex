import type { FC } from 'react';
import type { Selectable } from '../pages';

import Image from 'next/image';
import React from 'react';

import InsideFrame from './InsideFrame/InsideFrame';
import { FrameComponent } from './UI/FrameComponent';

interface FrameProps {
    currentInFrame: Selectable;
}

const Frame: FC<FrameProps> = ({ currentInFrame }) => {
    return (
        <FrameComponent>
            <InsideFrame data={currentInFrame} />
            <div className="select-none">

                <Image
                    src="/pokeball.png"
                    alt="Pokeball"
                    width={300}
                    height={300}
                    className="absolute top-0 left-0 h-24 w-24 -translate-x-[45%] -translate-y-[45%] opacity-20 grayscale z-[1]"
                />
                <Image
                    src="/pokeball.png"
                    alt="Pokeball"
                    width={300}
                    height={300}
                    className="absolute top-0 right-0 h-24 w-24 translate-x-[45%] -translate-y-[45%] opacity-20 grayscale z-[1]"
                />
                <Image
                    src="/pokeball.png"
                    alt="Pokeball"
                    width={300}
                    height={300}
                    className="absolute bottom-0 left-0 h-24 w-24 -translate-x-[45%] translate-y-[45%] opacity-20 grayscale z-[1]"
                />
                <Image
                    src="/pokeball.png"
                    alt="Pokeball"
                    width={300}
                    height={300}
                    className="absolute bottom-0 right-0 h-24 w-24 translate-x-[45%] translate-y-[45%] opacity-20 grayscale z-[1]"
                />
            </div>
        </FrameComponent>
    );
};

export default Frame;
