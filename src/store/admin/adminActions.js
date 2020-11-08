import Axios from "axios";
import { API_URL } from "../../config";

export const addProduct = (productObject) => {
  return {
    type: "ADD_PRODUCT",
    payload: productObject,
  };
};

export const postNewProduct = (productObject) => (dispatch, getState) => {
  const { productName, description, imgUrl, supplierId, categoryId, unit, price } = productObject;
  dispatch(addProduct(productObject));

  try {
    const response = Axios.post(`${API_URL}/products`, {
      productName,
      description,
      imgUrl,
      supplierId,
      categoryId,
      unit,
      price,
    });
    console.log("PRODUCT POST RESPONSE", response);
  } catch (e) {
    console.log(e);
  }
};
