export enum CART_ACTION_CONSTS {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
}

export interface CartState{
  hidden: boolean;
}

// Action Interfaces
interface ToggleCartHidden {
  type: CART_ACTION_CONSTS.TOGGLE_CART_HIDDEN;
}

// Action Type Export
export type CartActionTypes = (
  ToggleCartHidden
)

