import { 
  // CartState, 
  CART_ACTION_CONSTS, 
  // CartActionTypes, 
  itemType
} from './cart.types';

export const toggleCartHiddenAction = () => ({
  type: CART_ACTION_CONSTS.TOGGLE_CART_HIDDEN
});

export const addItemAction = (item: itemType) => {
  console.log('addItem', item)
  return ({
    type: CART_ACTION_CONSTS.ADD_ITEM,
    payload: item
  })
}