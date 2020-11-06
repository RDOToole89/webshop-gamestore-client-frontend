const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { productId } = action.payload;
      const productExist = state.items.find((item) => item.productId === productId);
      console.log("What is product?, and productExist?", productExist);

      if (productExist) {
        return {
          ...state,
          items: state.items.map((x) =>
            x.productId === productId ? { ...x, quantity: x.quantity + 1 } : x
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { productId: productId, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      const { productId } = action.payload;
      const productExist = state.items.find((item) => item.productId === productId);
      console.log("what is productexist?", productExist);

      if (productExist) {
        return {
          ...state,
          items: state.items.map((x) =>
            x.productId === productId ? { ...x, quantity: x.quantity - 1 } : x
          ),
        };
      }

      return {
        ...state,
        items: [...state.items],
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
