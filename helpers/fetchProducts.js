const fetchProducts = async (productSearch) => {
  const BASE_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${productSearch}`;
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
    fetchProducts,
  };
}
