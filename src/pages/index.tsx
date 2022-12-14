import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import type { Ability, Pokemon, SelectablePokemon } from '../types';

import classNames from 'classnames';
import Link from 'next/link';
import { useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { ImUndo2 } from 'react-icons/im';
import { MdFavorite } from 'react-icons/md';

import Frame from '../components/Frame';
import PokemonList from '../components/PokemonList/PokemonList';
import { preFetchAllAbilities, preFetchAllPokemons } from '../server/pokedex/pokeApi';
import { useData } from '../context/dataContext';

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

    const { setPokemonsList, setAbilitiesList, selectedInFrame, undoQueue } = useData();
    
    useEffect(() => {
        setPokemonsList(pokemons);
        setAbilitiesList(abilities);
    }, [abilities, pokemons, setAbilitiesList, setPokemonsList])
    

    

    return (
        <>
            <Frame currentInFrame={selectedInFrame}/>
            <PokemonList pokemons={pokemons} />

            <div className="absolute top-5 left-5">
                <Link prefetch href={'https://github.com/nicofishman/pokedex'} target={'_blank'}>
                    <BsGithub className='fill-slate-200 md:h-16 md:w-16 w-8 h-8 z-30 relative'/>
                </Link>
            </div>

            {/* FIXME: POSICION DEL BOTON EN MD+ */}
            <button className={classNames('absolute top-5 right-5 transition-transform', (selectedInFrame.type === 'presentation') ? '-translate-y-24' : '' )}>
                <ImUndo2 className='fill-slate-200 h-auto aspect-square md:w-16 w-8 z-30 relative' onClick={undoQueue}/>
            </button>
            <Link href={'/favorites'} className={classNames('absolute top-5 right-5 transition-transform', (selectedInFrame.type !== 'presentation' ? '-translate-y-24' : ''))}>
                <MdFavorite className='fill-red-400 hover:fill-red-600 h-auto aspect-square md:w-16 w-8 z-30 relative'/>
            </Link>
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
