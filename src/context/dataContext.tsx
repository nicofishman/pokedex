import type { FC, PropsWithChildren} from 'react';
import type { Ability, SelectablePokemon } from '../types';
import type { Selectable } from '../pages';

import { useEffect } from 'react';
import React, { createContext, useContext, useMemo, useState } from 'react';



interface DataContextType {
    pokemonsList: SelectablePokemon[];
    setPokemonsList: React.Dispatch<React.SetStateAction<SelectablePokemon[]>>;
    abilitiesList: Ability[];
    setAbilitiesList: React.Dispatch<React.SetStateAction<Ability[]>>;
    favorites: { pokemons: SelectablePokemon['id'][]; abilities: Ability['id'][];};
    addFavorite: (pokemon: Selectable) => void;
    removeFavorite: (pokemon: Selectable) => void;
}

export const DataContext = createContext<DataContextType | null >(null);

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [pokemonsList, setPokemonsList] = useState<SelectablePokemon[]>([]);
    const [abilitiesList, setAbilitiesList] = useState<Ability[]>([]);

    
    const defaultFav = useMemo(() => ({
        pokemons: [],
        abilities: []
    }), []);

    const [favorites, setFavorites] = useState<{
        pokemons: SelectablePokemon['id'][];
        abilities: Ability['id'][];
    }>(
        {
            pokemons: [],
            abilities: []
        }
    );

    const addFavorite = (sel: Selectable) => {
        if (sel.type === 'ability') {
            setFavorites(favs => ({ ...favs, abilities: [...favs.abilities, sel.data.id] }));
        } else if (sel.type === 'pokemon') {
            setFavorites(favs => ({ ...favs, pokemons: [...favs.pokemons, sel.data.id] }));
        }
    };

    const removeFavorite = (sel: Selectable) => {
        if (sel.type === 'ability') {
            setFavorites(favs => ({ ...favs, abilities: favs.abilities.filter(id => id !== sel.data.id) }));
        } else if (sel.type === 'pokemon') {
            setFavorites(favs => ({ ...favs, pokemons: favs.pokemons.filter(id => id !== sel.data.id) }));
        }
    };

    useEffect(() => {
        const allFavorites = [...Object.values(favorites).flat()];        

        if (allFavorites.length === 0) {
            return;
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites, defaultFav]);

    useEffect(() => {
        const favs = localStorage.getItem('favorites');        

        if (!favs) {
            localStorage.setItem('favorites', JSON.stringify(defaultFav));

            return;
        }

        setFavorites(JSON.parse(favs));
    }, [defaultFav]);

    const value: DataContextType = useMemo(() => {
        return {
            pokemonsList,
            setPokemonsList,
            abilitiesList,
            setAbilitiesList,
            favorites,
            addFavorite,
            removeFavorite
        };
    }, [pokemonsList, abilitiesList, favorites]);

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

export const useData = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const context = useContext<DataContextType>(DataContext as any);

    if (context === undefined) {
        throw new Error('useData must be used within a DataContextProvider');
    }

    return context;
};
