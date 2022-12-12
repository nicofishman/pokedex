import type { NextPage } from 'next';
import type { Ability, Pokemon } from '../types';

import {BsGithub} from 'react-icons/bs';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ImUndo2 } from 'react-icons/im';
import classNames from 'classnames';

import PokemonList from '../components/PokemonList/PokemonList';
import Frame from '../components/Frame';

export type Selectable = Pokemon | Ability | Partial<Pokemon>;

const Home: NextPage = () => {
    const [queue, setQueue] = useState<(Selectable)[]>([]);
    
    const selectedInFrame = useMemo(() => {        
        return queue[queue.length - 1]  || {} as Pokemon
    }, [queue])
    


    const undoQueue = () => {
        const sliced = queue.slice(0, -1);

        setQueue(sliced);
    }

    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name="description" content="Proyecto frontend pokedex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="backgroundBlur relative flex min-h-screen flex-row items-center justify-center overflow-hidden bg-background bg-cover bg-center bg-no-repeat">
                <Frame setQueue={setQueue} currentInFrame={selectedInFrame} />
                <PokemonList setQueue={setQueue} />

                <div className="absolute top-5 left-5">
                    <Link href={'https://github.com/nicofishman/pokedex'} target={'_blank'}>
                        <BsGithub className='fill-slate-200 md:h-16 md:w-16 w-8 h-8 z-30 relative'/>
                    </Link>
                </div>

                {/* FIXME: POSICION DEL BOTON EN MD+ */}
                <button className={classNames('absolute top-5 right-5 transition-transform', (!selectedInFrame.id) ? '-translate-y-24' : '' )}>
                    <ImUndo2 className='fill-slate-200 h-auto aspect-square md:w-16 w-8 z-30 relative' onClick={undoQueue}/>
                </button>
            </main>
        </>
    );
};

export default Home;
