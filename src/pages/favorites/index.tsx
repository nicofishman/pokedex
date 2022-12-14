import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import type { Ability, SelectablePokemon } from '../../types';

import classNames from 'classnames';
import Link from 'next/link';
import { SiPokemon } from 'react-icons/si';
import Image from 'next/image';
import React from 'react';

import { FrameComponent } from '../../components/UI/FrameComponent';
import { FrameTitle } from '../../components/UI/FrameTitle';
import { useData } from '../../context/dataContext';
import { preFetchAllAbilities, preFetchAllPokemons } from '../../server/pokedex/pokeApi';
import { PokemonOrAbilityFavCard } from '../../components/UI/PokemonOrAbilityFavCard';

interface favoritesProps extends InferGetStaticPropsType<typeof getStaticProps> {

}

const Favorites: NextPage<favoritesProps> = ({abilities, pokemons}) => {
    const {favorites, setQueue} = useData();


    const favoritePokemons = pokemons.filter(pokemon => favorites.pokemons.includes(pokemon.id));
    const favoriteAbilities = abilities.filter(ability => favorites.abilities.includes(ability.id));

    return (
        <>
            <Link prefetch href={'/'} className={classNames('absolute top-5 right-5 transition-transform')}>
                <SiPokemon className='fill-slate-200 h-auto aspect-square md:w-16 z-30 relative'/>
            </Link>
            <FrameComponent className='flex gap-7 md:flex-row flex-col'>
                <div className="flex-1 overflow-y-auto">
                    <FrameTitle>Pokemons</FrameTitle>
                    <div className='flex w-full flex-wrap'>
                        {
                            favoritePokemons.map(pokemon => (
                                <Link prefetch href={'/'} onClick={() => setQueue(
                                    q => [...q, {
                                        type: 'pokemon',
                                        data: pokemon
                                    }]
                                )} key={pokemon.id}>
                                    <PokemonOrAbilityFavCard>
                                        <Image src={pokemon.sprites.front_default || '/pikachuNegro.png'} alt={pokemon.name} width={100} height={100} className='h-12 w-12'/>
                                        <span className='text-lg font-normal capitalize'>{pokemon.name}</span>
                                    </PokemonOrAbilityFavCard>
                                </Link>
                            ))
                        }
                    </div>
                    
                </div>
                <div className="flex-1 overflow-y-auto">
                    <FrameTitle>Abilities</FrameTitle>
                    <div className='flex w-full flex-wrap'>
                        {
                            favoriteAbilities.map(ability => (
                                <Link prefetch href={'/'} onClick={() => setQueue(
                                    q => [...q, {
                                        type: 'ability',
                                        data: ability
                                    }]
                                )} key={ability.id}>
                                    <PokemonOrAbilityFavCard>
                                        <span className='text-lg font-normal capitalize'>{ability.name}</span>
                                    </PokemonOrAbilityFavCard>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </FrameComponent>
        </>
    );
};

export default Favorites;

export const getStaticProps: GetStaticProps<{
    pokemons: SelectablePokemon[],
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