const cartOl = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  /* Removing the item from the cart. */
  event.target.remove();
  saveCartItems(cartOl.innerHTML);
};

const loadCart = () => {
  const doc = getSavedCartItems();
  if (doc === 'undefined') {
    return;
  }
  cartOl.innerHTML = doc;
  const removeBtn = document.querySelectorAll('.cart__items');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', cartItemClickListener);
  });
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
const addItemToCart = async (itemToAdd) => {
  /* This function is getting the id of the item that was clicked, then it is fetching the item from the
  API, then it is creating a cart item element and appending it to the cart. */
  const idItem = getSkuFromProductItem(itemToAdd.target.parentElement);
  const {
    id: sku, title: name, price: salePrice } = await fetchItem(idItem);
  cartOl.appendChild(createCartItemElement({ sku, name, salePrice }));
  saveCartItems(cartOl.innerHTML);
};
const productsList = async () => {
  const getSection = document.querySelector('.items');
  const newDiv = document.createElement('div');
  newDiv.innerText = 'carregando...';
  newDiv.className = 'loading';
  getSection.appendChild(newDiv);

  const item = document.querySelector('.items');
  const product = await fetchProducts('computador');
  getSection.innerHTML = '';
  product.results.forEach((products) => {
    const result = createProductItemElement({
      sku: products.id,
      name: products.title,
      image: products.thumbnail,
    });
    item.appendChild(result);
  });
};

const clearCart = () => {
  /* A function that clears the cart. */
  const clearBtn = document.querySelector('.empty-cart');
  clearBtn.addEventListener('click', () => {
    cartOl.innerHTML = '';
  });
};
const getEventListener = async () => {
  /**
   * It gets the products from the API, then adds an event listener to each button that calls the
   * addItemToCart function
   */
  await productsList();
  const cartItemBtn = document.querySelectorAll('.item__add');
  cartItemBtn.forEach((btn) => {
    btn.addEventListener('click', addItemToCart);
  });
};

window.onload = () => {
  getEventListener();
  loadCart();
  clearCart();
};
