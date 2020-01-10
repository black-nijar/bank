import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

const rootReducer = combineReducers({
  totalAmount: bankReducer
})

export default rootReducer