import type { Ability, AbilityResponse, Pokemon, PokemonResponse, SelectablePokemon } from '../../types'

export const preFetchAllPokemons = async () => {
    const resPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1154')
    const pokeRes = await resPokemons.json() as PokemonResponse
    const pokeResUrls = pokeRes.results.map((p) => p.url)
    const pokemons = await Promise.all(
        pokeResUrls.map(async (url) => {
            const res = await fetch(url)

            const pokeJson = await res.json() as Pokemon

            return {
                id: pokeJson.id,
                name: pokeJson.name,
                abilities: pokeJson.abilities,
                sprites: pokeJson.sprites,
                types: pokeJson.types,
                stats: pokeJson.stats,
                height: pokeJson.height,
            } as SelectablePokemon
        })
    )

    return pokemons
}

export const preFetchAllAbilities = async () => {
    const resAbilities = await fetch('https://pokeapi.co/api/v2/ability?limit=1000')
    const abilitiesRes = await resAbilities.json() as AbilityResponse


    const abilities = await Promise.all(
        abilitiesRes.results.map(async (ab) => {
            const res = await fetch(ab.url)

            return await res.json() as Ability
        })
    )

    return abilities
}