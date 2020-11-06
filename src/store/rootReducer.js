import { combineReducers } from "redux";
import testReducer from "./testReducer/testReducer";

const reducer = combineReducers({
  test: testReducer,
});

export default reducer;
