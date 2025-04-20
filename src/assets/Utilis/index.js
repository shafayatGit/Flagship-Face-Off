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