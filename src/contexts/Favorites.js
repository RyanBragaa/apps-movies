import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }) {
    const [ favorite, setFavorite ] = useState([])

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            { children }
        </FavoritesContext.Provider>
    );
}

// Hook personalizado
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite) {

        // verifica se o item favorito é repetido
        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id)

        // nova lista recebe lista anterior
        let newList = [...favorite]

        // verifica se não tem repetido e adiciona o item na lista de favoritos
        if(!repeatedFavorite) {
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        // se for repetido ele vai ser tirado da lista 
        newList = favorite.filter((fav) => fav.id !== newFavorite.id )
        return setFavorite(newList)
    }

    return {
        favorite,
        addFavorite
    }
}