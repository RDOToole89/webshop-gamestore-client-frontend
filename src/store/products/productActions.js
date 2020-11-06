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

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const products = await Axios.get(`${API_URL}/products`);
    console.log(products);

    dispatch(requestProducts(products.data));
  } catch (e) {
    console.log(e.message);
  }
};
