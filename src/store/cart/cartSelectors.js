import { pushToBasket } from "./cartActions";

export const selectItemsInCart = (reduxState) => {
  return reduxState.cart.items.length;
};

export const selectQuantityInCart = (reduxState) => {
  return reduxState.cart.items.reduce((prev, cur) => prev + cur.quantity, 0);
};

export const cartQuantityWithProductId = (productId) => (reduxState) => {
  if (reduxState.cart.items.length === 0) {
    return null;
  }
  return reduxState.cart.items.find((x) => x.productId === productId);
};

export const cartSubtotal = (reduxState) => {
  return reduxState.cart.checkoutItems.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
};

export const cartItemsWithName = () => (dispatch, getState) => {
  const cartItems = getState().cart.items;
  const products = getState().products.productsArray;
  // console.log("PRODUCTS", products);
  // console.log("CARTITEMS", cartItems);

  const cartItemsWithName = [];

  for (let i = 0; i < cartItems.length; i++) {
    // console.log("CartItem.productId = ", cartItems[i].productId);
    for (let j = 0; j < products.length; j++) {
      // console.log("ProductItem.id = ", products[j].id);
      if (cartItems[i].productId === products[j].id) {
        const productObject = {
          productId: products[j].id,
          name: products[j].productName,
          price: products[j].price,
          imgUrl: products[j].imgUrl,
          quantity: cartItems[i].quantity,
        };
        cartItemsWithName.push(productObject);
        dispatch(pushToBasket(productObject));
      }
    }
  }

  return cartItemsWithName;
};
