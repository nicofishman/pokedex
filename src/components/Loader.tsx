import type { FC } from 'react';

import Image from 'next/image';
import React from 'react';

interface LoaderProps {

}

const Loader: FC<LoaderProps> = () => {
    return (
        <Image src='/pokeball.png' alt='Pokeball Loader' width={300} height={300} className='md:w-24 w-16 h-auto aspect-square animate-spin'/>
    );
};

export default Loader;
