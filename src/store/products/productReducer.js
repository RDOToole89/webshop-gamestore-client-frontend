const initialState = {
  loading: false,
  productsArray: [],
  singleProduct: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING_PRODUCTS": {
      return {
        ...state,
        loading: true,
      };
    }
    case "REQUEST_PRODUCTS": {
      return {
        ...state,
        loading: false,
        productsArray: action.payload.productArray,
      };
    }
    case "SAVE_PRODUCT_BY_ID": {
      return {
        ...state,
        loading: false,
        singleProduct: { ...action.payload },
      };
    }

    default:
      return state;
  }
};

export default productReducer;
