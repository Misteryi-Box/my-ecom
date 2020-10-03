import { createSelector } from 'reselect';
import { AppState } from '../store';

const selectCart = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartitems => cartitems.reduce(
    (acc, cartItem) => acc + cartItem.quantity, 0
  )
);