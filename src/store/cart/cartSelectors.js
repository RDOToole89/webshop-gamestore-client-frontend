export const selectItemsInCart = (reduxState) => {
  return reduxState.cart.items.length;
};

// export const selectQuantityInCart = (reduxState) => {
//   const quantityInCart = reduxState.cart.items.reduce((a, b) => {
//     return {
//       quantity: a.quantity + b.quantity,
//     };
//   });
//   return quantityInCart;
// };

export const cartQuantityWithProductId = (productId) => (reduxState) => {
  if (reduxState.cart.items.length === 0) {
    return null;
  }
  return reduxState.cart.items.find((x) => x.productId === productId);
};
