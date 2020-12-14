import storeReducer from "./StoreIds";
import counterReducer from "./SoldierCounter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  storage: storeReducer,
});

export default allReducers;
