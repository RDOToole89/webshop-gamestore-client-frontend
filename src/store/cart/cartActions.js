export const addToCart = (productId) => {
  return {
    type: "ADD_TO_CART",
    payload: { productId },
  };
};

export const removeFromCart = (productId, qty) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: { productId, qty },
  };
};

export const subtractQuantity = (id) => {
  return {
    type: "SUBTRACT_QUANTITY",
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: "ADD_QUANTITY",
    id,
  };
};

export const pushToBasket = (productInfoObject) => {
  return {
    type: "PUSH_TO_BASKET",
    payload: productInfoObject,
  };
};

export const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};
