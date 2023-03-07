require('../mocks/fetchSimulator');
const item = require('../mocks/item');
const { fetchItem } = require('../helpers/fetchItem');

describe('2 - Teste a função fetchItem', () => {
  test('2-1 verify if fetchItem is a function', () => {
    expect(typeof fetchItem).toEqual('function');
  });
  test('2-2 if called MLB1615760527 fetchItem must have been called 1 time', async () => {
    expect.assertions(1)

    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test('2-3 verify the endpoint with the argument MLB1615760527, expect to be https://api.mercadolibre.com/items/MLB1615760527', async () => {
    expect.assertions(1)

    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test('2-4 if called fetchItem, with the argument MLB1615760527, should return an object like = item', async () => {
    expect.assertions(1);

    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  test('2-5 if nothing is passed as an argument, return fetchItem with the error = You must provide an url', async () => {
    expect.assertions(1);

    await expect(fetchItem()).rejects.toThrow('You must provide an url');
  });
});
