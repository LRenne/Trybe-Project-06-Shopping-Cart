const saveCartItems = (itemsToStore) => {
  /* Saving the items to local storage. */
  localStorage.setItem('cartItems', itemsToStore);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
