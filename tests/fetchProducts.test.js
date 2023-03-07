require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 Teste a função fetchProducts', () => {
  test('vefiry if the function fetchProducts is a function', () => {
    expect(typeof fetchProducts).toEqual('function');
  });
  test('2 verify if the fechProducts with the argument \'computador\', return a fetch', async () => {
    expect.assertions(1);

    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test('3 if the argument passed is \'computer\', shound return the endpoint = https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    expect.assertions(1);

    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  test('4 verifica se quando o argumento \'computador\' e colocado resulta em um objeto = computadorSearch', async () => {
    expect.assertions(1);

    expect(await fetchProducts('computador')).toEqual(computadorSearch)
  });
  test('5 Em caso de nenhum argumento ser passado retorna o erro = you must provide an url', async () => {
    expect.assertions(1);

    await expect(fetchProducts()).rejects.toThrow('You must provide an url');
  });
});
