import type { NextPage } from 'next';
import type { Pokemon } from '../types';

import {BsGithub} from 'react-icons/bs';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ImUndo2 } from 'react-icons/im';
import classNames from 'classnames';

import PokemonList from '../components/PokemonList/PokemonList';
import Frame from '../components/Frame';

const Home: NextPage = () => {
    const [pokemonQueue, setPokemonQueue] = useState<Pokemon[]>([]);
    
    const selectedPokemon = useMemo(() => pokemonQueue[pokemonQueue.length - 1]  || {} as Pokemon, [pokemonQueue])

    const undoQueue = () => {
        const sliced = pokemonQueue.slice(0, -1);

        setPokemonQueue(sliced);
    }

    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name="description" content="Proyecto frontend pokedex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="backgroundBlur relative flex min-h-screen flex-row items-center justify-center overflow-hidden bg-background bg-cover bg-center bg-no-repeat">
                <Frame currentPokemon={selectedPokemon} />
                <PokemonList setPokemonQueue={setPokemonQueue} />

                <div className="absolute top-5 left-5">
                    <Link href={'https://github.com/nicofishman/'} target={'_blank'}>
                        <BsGithub className='fill-slate-200 md:h-16 md:w-16 w-8 h-8'/>
                    </Link>
                </div>

                {/* FIXME: POSICION DEL BOTON EN MD+ */}
                <button className={classNames('absolute top-5 right-5 transition-transform', !('id' in selectedPokemon && '-translate-y-24' ))}>
                    <ImUndo2 className='fill-slate-200 h-auto aspect-square md:w-16 w-8' onClick={undoQueue}/>
                </button>
            </main>
        </>
    );
};

export default Home;
