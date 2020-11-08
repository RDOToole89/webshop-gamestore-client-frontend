const initialState = {
  product: {},
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return {
        ...state,
        product: { ...action.payload },
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
