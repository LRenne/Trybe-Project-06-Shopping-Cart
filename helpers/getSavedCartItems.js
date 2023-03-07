const getSavedCartItems = () => {
  /* Getting the cartItems from localStorage and returning them. */
  const myCart = localStorage.getItem('cartItems');
  return myCart;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
