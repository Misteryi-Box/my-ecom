import { CartState, CART_ACTION_CONSTS, CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CART_ACTION_CONSTS.TOGGLE_CART_HIDDEN
});