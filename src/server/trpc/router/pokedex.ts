import type { Ability, Pokemon, PokemonResponse } from '../../../types';

import { z } from 'zod';

import { router, publicProcedure } from '../trpc';

export const pokedexRouter = router({
    getAllPokemons: publicProcedure
        .input(
            z
                .object({ limit: z.number().positive(), offset: z.number() })
                .nullish()
        )
        .query(async ({ input }) => {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=${input?.limit ?? 20}&offset=${input?.offset ?? 0}`
            );
            const pokeRes = (await res.json()) as PokemonResponse;

            return await Promise.all(
                pokeRes.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    const pokeRes = (await res.json()) as Pokemon;

                    return pokeRes;
                })
            );
        }),
    getPokemonsByUrl: publicProcedure
        .input(z.string().url().nullish())
        .query(async ({ input }) => {
            const res = await fetch(
                input || 'https://pokeapi.co/api/v2/pokemon?limit=4'
            );
            const pokeRes = (await res.json()) as PokemonResponse;

            return {
                pokemon: pokeRes,
            };
        }),
    getSinglePokemon: publicProcedure
        .input(z.number().positive())
        .query(async ({ input }) => {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${input}`
            );
            const pokeRes = (await res.json()) as Pokemon;

            return {
                pokemon: pokeRes,
            };
        }),
    getPokemonsFromList: publicProcedure
        .input(z.array(z.string().url()))
        .query(({ input }) => {
            return Promise.all(
                input.map(async (url) => {
                    const res = await fetch(url);
                    const pokeRes = (await res.json()) as Pokemon;

                    return pokeRes;
                })
            );
        }),
    getAbilities: publicProcedure
        .input(z.array(z.string().url()))
        .query(async ({ input }): Promise<Ability[]> => {
            return await Promise.all(
                input.map(async (url) => {
                    const res = await fetch(url);
                    const pokeRes = (await res.json()) as Ability;

                    return pokeRes;
                })
            );
        })
});
