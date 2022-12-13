import type { FC, PropsWithChildren} from 'react';
import type { Ability, SelectablePokemon } from '../types';

import React, { createContext, useContext, useMemo, useState } from 'react';


interface DataContextType {
    pokemonsList: SelectablePokemon[];
    setPokemonsList: React.Dispatch<React.SetStateAction<SelectablePokemon[]>>;
    abilitiesList: Ability[];
    setAbilitiesList: React.Dispatch<React.SetStateAction<Ability[]>>;
}

export const DataContext = createContext<DataContextType | null >(null);

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [pokemonsList, setPokemonsList] = useState<SelectablePokemon[]>([]);
    const [abilitiesList, setAbilitiesList] = useState<Ability[]>([]);

    const value: DataContextType = useMemo(() => {
        return {
            pokemonsList,
            setPokemonsList,
            abilitiesList,
            setAbilitiesList,
        };
    }, [pokemonsList, abilitiesList]);

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
