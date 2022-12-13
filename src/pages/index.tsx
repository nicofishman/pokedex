import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import type { Ability, Pokemon, SelectablePokemon } from '../types';

import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { ImUndo2 } from 'react-icons/im';

import Frame from '../components/Frame';
import PokemonList from '../components/PokemonList/PokemonList';
import { preFetchAllAbilities, preFetchAllPokemons } from '../server/pokedex/pokeApi';

export type Selectable = {
    type: 'pokemon';
    data: Pokemon | SelectablePokemon;
} | {
    type: 'ability';
    data: Ability
} | {
    type: 'presentation';
    data?: never;
};

interface HomeProps extends InferGetStaticPropsType<typeof getStaticProps> {

}

const Home: NextPage<HomeProps> = ({pokemons, abilities}) => {
    const [queue, setQueue] = useState<(Selectable)[]>([]);
    
    const selectedInFrame = useMemo(() => {        
        return queue[queue.length - 1]  || {
            type: 'presentation',
        } as Selectable;
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
                <Frame setQueue={setQueue} currentInFrame={selectedInFrame} abilitiesList={abilities} pokemonsList={pokemons}/>
                <PokemonList pokemons={pokemons} setQueue={setQueue} />

                <div className="absolute top-5 left-5">
                    <Link href={'https://github.com/nicofishman/pokedex'} target={'_blank'}>
                        <BsGithub className='fill-slate-200 md:h-16 md:w-16 w-8 h-8 z-30 relative'/>
                    </Link>
                </div>

                {/* FIXME: POSICION DEL BOTON EN MD+ */}
                <button className={classNames('absolute top-5 right-5 transition-transform', (selectedInFrame.type === 'presentation') ? '-translate-y-24' : '' )}>
                    <ImUndo2 className='fill-slate-200 h-auto aspect-square md:w-16 w-8 z-30 relative' onClick={undoQueue}/>
                </button>
            </main>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<{
    pokemons: Pick<Pokemon, 'id' | 'name' | 'abilities' | 'sprites' | 'types' | 'stats' | 'height'>[],
    abilities: Ability[]
}> = async () => {
    const pokemons = await preFetchAllPokemons();
    const abilities = await preFetchAllAbilities();

    return {
        props: {
            pokemons,
            abilities
        },
    }
}
