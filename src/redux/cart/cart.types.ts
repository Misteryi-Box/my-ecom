export enum CART_ACTION_CONSTS {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART'
}

export interface CartState{
  hidden: boolean;
  cartItems: ItemType[]
}

export type ItemType = {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number
}

// Action Interfaces
interface ToggleCartHidden {
  type: CART_ACTION_CONSTS.TOGGLE_CART_HIDDEN;
}

interface AddItem {
  type: CART_ACTION_CONSTS.ADD_ITEM;
  payload: ItemType;
}

interface RemoveItem {
  type: CART_ACTION_CONSTS.REMOVE_ITEM;
  payload: ItemType;
}

interface ClearItemFromCart {
  type: CART_ACTION_CONSTS.CLEAR_ITEM_FROM_CART;
  payload: ItemType;
}
// Action Type Export
export type CartActionTypes = (
  | ToggleCartHidden
  | AddItem
  | RemoveItem
  | ClearItemFromCart
)

