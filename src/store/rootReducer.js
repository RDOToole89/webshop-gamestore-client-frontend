import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import testReducer from "./testReducer/testReducer";

const reducer = combineReducers({
  test: testReducer,
  products: productReducer,
});

export default reducer;
