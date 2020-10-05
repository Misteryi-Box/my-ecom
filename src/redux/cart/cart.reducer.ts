import { CartState, CART_ACTION_CONSTS, CartActionTypes, ItemType} from './cart.types'
import { addItemToCartUtil, removeItemFromCartUtil } from './cart.utils'
const initialState: CartState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch(action.type) {
    case CART_ACTION_CONSTS.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CART_ACTION_CONSTS.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartUtil(state.cartItems, action.payload)
      }
    case CART_ACTION_CONSTS.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCartUtil(state.cartItems, action.payload)
        
      }
    case CART_ACTION_CONSTS.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: ItemType) => cartItem.id !== action.payload.id 
        )
      }
    default:
      return state
  }
}

export default cartReducer;