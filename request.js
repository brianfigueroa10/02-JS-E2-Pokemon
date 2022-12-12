

const requestPokemon = async (poke) => {
    const baseURL = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } catch (error) {
        showError();
    }
};
