import { combineReducers } from "redux";
import adminReducer from "./admin/adminReducer";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";
import signinReducer from "./Signin/signinReducer";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  signin: signinReducer,
  admin: adminReducer,
});

export default reducer;
