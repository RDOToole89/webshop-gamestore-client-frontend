export const selectAllProducts = (reduxState) => {
  return reduxState.products.productsArray;
};

export const selectProductLoading = (reduxState) => {
  return reduxState.products.loading;
};
