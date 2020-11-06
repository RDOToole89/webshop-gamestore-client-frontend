import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";
import testReducer from "./testReducer/testReducer";

const reducer = combineReducers({
  test: testReducer,
  products: productReducer,
  cart: cartReducer,
});

export default reducer;
