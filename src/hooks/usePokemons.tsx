import { trpc } from '../utils/trpc';

export const usePokemons = (offset: number, limit: number) => {
    // call trpc.pokedex.getAllPokemons.useQuery whenever offset or limit changes    
    const pokemons = trpc.pokedex.getAllPokemons.useQuery({
        offset,
        limit,
    });

    // return the data    
    return pokemons;
};