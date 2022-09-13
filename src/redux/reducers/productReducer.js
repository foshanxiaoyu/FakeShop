import { ActionTyps } from "../actions/action-type";

const initState = {
  products: []
};

export const productsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTyps.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTyps.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTyps.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export default productsReducer;
