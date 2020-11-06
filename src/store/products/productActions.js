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

export const fetchProducts = () => async (dispatch, getState) => {
  dispatch(startLoadingProducts());

  try {
    const products = await Axios.get(`${API_URL}/products`);

    dispatch(requestProducts(products.data));
  } catch (e) {
    console.log(e.message);
  }
};
