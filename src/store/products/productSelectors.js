export const selectAllProducts = (reduxState) => {
  return reduxState.products.productsArray;
};

export const selectProduct = (id) => (dispatch, getState) => {
  return getState().products.productsArray.find((x) => x.id === parseInt(id));
};

export const selectProductLoading = (reduxState) => {
  return reduxState.products.loading;
};
