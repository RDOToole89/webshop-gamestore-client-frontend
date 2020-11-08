const initialState = {
  items: [],
  checkoutItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { productId } = action.payload;
      const productExist = state.items.find((item) => item.productId === productId);
      console.log("What is product?, and productExist?", productExist);
      console.log("What is payload?", action.payload);

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
      // console.log("what is productexist?", productExist);

      if (productExist) {
        return {
          ...state,
          items: state.items.map((x) =>
            x.productId === productId ? { ...x, quantity: x.quantity <= 0 ? 0 : x.quantity - 1 } : x
          ),
        };
      }
      return {
        ...state,
        items: [...state.items],
      };
    }
    case "PUSH_TO_BASKET": {
      const { productId } = action.payload;
      const payloadQuantity = action.payload.quantity;
      // console.log("WHATS IN PAYLOAD QTY?", payloadQuantity);
      // console.log("WHAT IS THE PAYLOAD?", action.payload);
      const productExist = state.checkoutItems.find((item) => item.productId === productId);
      // console.log("INSIDE PUSH_TO_BASKET?!");
      if (productExist) {
        return {
          ...state,
          checkoutItems: state.checkoutItems.map((x) => {
            return x.productId === productId ? { ...x, quantity: payloadQuantity } : x;
          }),
        };
      }
      return {
        ...state,
        checkoutItems: [...state.checkoutItems, { ...action.payload }],
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
