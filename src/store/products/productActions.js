import Axios from "axios";
import { API_URL } from "../../config";

export const requestProducts = (productArray) => {
  return {
    type: "REQUEST_PRODUCTS",
    payload: {
      productArray,
    },
  };
};

export const startLoadingProducts = () => {
  return {
    type: "START_LOADING_PRODUCTS",
  };
};

export const saveProductById = (productObject) => {
  return {
    type: "SAVE_PRODUCT_BY_ID",
    payload: productObject,
  };
};

export const fetchProductById = (productId) => async (dispatch, getState) => {
  // dispatch(startLoadingProducts());

  try {
    const product = await Axios.get(`${API_URL}/products/${productId}`);
    console.log(product);

    dispatch(saveProductById(product.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchProducts = () => async (dispatch, getState) => {
  dispatch(startLoadingProducts());

  try {
    const products = await Axios.get(`${API_URL}/products`);

    dispatch(requestProducts(products.data));
  } catch (e) {
    console.log(e.message);
  }
};
