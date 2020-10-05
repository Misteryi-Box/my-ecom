import { 
  CART_ACTION_CONSTS, 
  ItemType
} from './cart.types';

export const toggleCartHiddenAction = () => ({
  type: CART_ACTION_CONSTS.TOGGLE_CART_HIDDEN
});

export const addItemAction = (item: ItemType) => {
  return ({
    type: CART_ACTION_CONSTS.ADD_ITEM,
    payload: item
  })
}

export const removeItemAction = (item: ItemType) => {
  return ({
    type: CART_ACTION_CONSTS.REMOVE_ITEM,
    payload: item
  })
}

export const clearItemFromCartAction = (item: ItemType) => ({
  type: CART_ACTION_CONSTS.CLEAR_ITEM_FROM_CART,
  payload: item
})