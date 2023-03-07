const fetchItem = async (search) => {
    // const BASE_URL = `https://api.mercadolibre.com/items/MLB1615760527`;
    const BASE_URL = `https://api.mercadolibre.com/items/${search}`;
    try {
        const result = await fetch(BASE_URL);
        const resultData = await result.json();
        return resultData;
    } catch (error) {
        throw new Error('You must provide an url');
    }
};

if (typeof module !== 'undefined') {
    module.exports = {
        fetchItem,
    };
}
