export enum CART_ACTION_CONSTS {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM'
}

export interface CartState{
  hidden: boolean;
  cartItems: itemType[]
}

export type itemType = {
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
  payload: itemType;
}
// Action Type Export
export type CartActionTypes = (
  | ToggleCartHidden
  | AddItem
)

