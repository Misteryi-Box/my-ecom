import { CartState, CART_ACTION_CONSTS, CartActionTypes} from './cart.types'
import { addItemToCartUtil } from './cart.utils'
const initialState: CartState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action: CartActionTypes) => {
  console.log('action', action)
  switch(action.type) {
    case CART_ACTION_CONSTS.TOGGLE_CART_HIDDEN:
      console.log('hello1')
      return {
        ...state,
        hidden: !state.hidden
      }
    case CART_ACTION_CONSTS.ADD_ITEM:
      console.log('hello2')
      return {
        ...state,
        cartItems: addItemToCartUtil(state.cartItems, action.payload)
        // cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state
  }
}

export default cartReducer;