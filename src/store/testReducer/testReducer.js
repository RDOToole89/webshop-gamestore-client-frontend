const initialState = {
  hello: "world",
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HELLO_WORLD":
      return { ...state, hello: action.payload };

    default:
      return state;
  }
};

export default testReducer;
