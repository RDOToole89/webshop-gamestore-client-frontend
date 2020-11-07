import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";
import signinReducer from "./Signin/signinReducer";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  signin: signinReducer,
});

export default reducer;
