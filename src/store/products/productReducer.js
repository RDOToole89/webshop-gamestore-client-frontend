const initialState = {
  loading: false,
  productsArray: [],
};

const productReducer = (state = initialState, action) => {
  console.log("WHAT IS IN ACTION.PAYLOAD?", action.payload);
  switch (action.type) {
    case "REQUEST_PRODUCTS": {
      return {
        ...state,
        loading: true,
        productsArray: action.payload.productArray,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
