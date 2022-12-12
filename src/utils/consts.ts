import type { Generations } from '../types';

export const CONCURRENT_POKEDEX = 4;
export const MAX_POKEMON = 1154;

export const TYPE_COLORS = {
    bug: 'bg-emerald-500',
    dragon: 'bg-cyan-500',
    fairy: 'bg-pink-500',
    fire: 'bg-red-500',
    ghost: 'bg-slate-500',
    ground: 'bg-yellow-500',
    normal: 'bg-gray-500',
    psychic: 'bg-fuchsia-500',
    steel: 'bg-stone-800',
    dark: 'bg-zinc-500',
    electric: 'bg-amber-500',
    fighting: 'bg-red-500',
    flying: 'bg-cyan-600',
    grass: 'bg-lime-500',
    ice: 'bg-sky-400',
    poison: 'bg-pink-400',
    rock: 'bg-yellow-600',
    water: 'bg-blue-400'
}

export const GENERATION_COLORS: {
    [key in Generations]: string;
} = {
    'generation-i': 'bg-red-500',
    'generation-ii': 'bg-yellow-500',
    'generation-iii': 'bg-green-500',
    'generation-iv': 'bg-blue-500',
    'generation-v': 'bg-indigo-500',
    'generation-vi': 'bg-purple-500',
    'generation-vii': 'bg-pink-500',
    'generation-viii': 'bg-gray-500'
}