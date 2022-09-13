import { combineReducers } from "redux";

import cakeReducer from "../cake/cakeReducer";
import { productsReducer, selectedProductReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
  cakes: cakeReducer
});

export default rootReducer;
