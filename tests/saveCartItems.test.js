const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('3-1 with the argument <ol><li>Item</li></ol>, localStorage.setItem must been called 1 time', () => {
    saveCartItems('<ol><li>Item</li></ol>');

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  test('3-2 when called the argument, <ol><li>Item</li></ol>, must return cartItems, and the argument', () => {
    saveCartItems('<ol><li>Item</li></ol>');

    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});
// test('', () => {
//   expect().toBe();
// });