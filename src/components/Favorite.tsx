import type { FC } from 'react';
import type { Selectable } from '../pages';

import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { useData } from '../context/dataContext';

import { StarButton } from './UI/StarButton';

interface FavoriteProps {
    data: Selectable;
}

const Favorite: FC<FavoriteProps> = ({data}) => {
    const {favorites, removeFavorite, addFavorite} = useData();

    const parsing = {
        pokemon: 'pokemons',
        ability: 'abilities'
    } as const

    if (data.type === 'presentation') {
        return null;
    }

    const isFavorite = favorites[parsing[data.type]].includes(data.data.id);

    return isFavorite ? (
        <StarButton
            onClick={() => removeFavorite(data)}>
            <AiFillStar />
        </StarButton>
    ) : (
        <StarButton
            onClick={() => addFavorite(data)}>
            <AiOutlineStar />
        </StarButton>
    )
};

export default Favorite;
