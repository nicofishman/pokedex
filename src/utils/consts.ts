import type { Generations } from '../types';

export const CONCURRENT_POKEDEX = 4;
export const MAX_POKEMON = 1154;

export const TYPE_COLORS = {
    bug: 'bg-emerald-500',
    dark: 'bg-zinc-500',
    dragon: 'bg-cyan-500',
    electric: 'bg-amber-500',
    fairy: 'bg-pink-500',
    fighting: 'bg-orange-700',
    fire: 'bg-red-500',
    flying: 'bg-cyan-600',
    ghost: 'bg-slate-500',
    grass: 'bg-lime-500',
    ground: 'bg-yellow-500',
    ice: 'bg-sky-400',
    normal: 'bg-gray-700',
    poison: 'bg-pink-400',
    psychic: 'bg-fuchsia-500',
    rock: 'bg-gray-400',
    steel: 'bg-zinc-600',
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