const initialState = {
  loading: false,
  productsArray: [],
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

    default:
      return state;
  }
};

export default productReducer;
