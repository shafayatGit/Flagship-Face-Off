export const getFavorites = () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) return JSON.parse(favorites);
    return [];
}

export const addFavorites = (phone) => {
    const favorites = getFavorites();
    const isExist = favorites.find(p => p.id === phone.id);
    if (isExist) {
        return console.log('already exist')
    };
    favorites.push(phone)
    localStorage.setItem("favorites", JSON.stringify(favorites))
}

export const removeFavorites = (id) => {
    const favorites = getFavorites();
    const remainingFavorite = favorites.filter(phone => phone.id !== id)
    localStorage.setItem("favorites", JSON.stringify(remainingFavorite))
}