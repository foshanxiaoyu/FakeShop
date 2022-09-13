import { createStore } from "redux";
import rootReducer from "./reducers/rootducers";
// import reducers from "./reducers/reducers";

const store = createStore(
  rootReducer,
  // reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);
export default store;
