import { ActionTyps } from "./action-type";

export const setProducts = (products) => {
  return {
    type: ActionTyps.SET_PRODUCTS,
    payload: products
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTyps.SELECTED_PRODUCT,
    payload: products
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTyps.REMOVE_SELECTED_PRODUCT
  };
};
