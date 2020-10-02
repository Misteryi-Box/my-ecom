import { CartState, CART_ACTION_CONSTS, CartActionTypes} from './cart.types'
const initialState: CartState = {
  hidden: true
};

const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch(action.type) {
    case CART_ACTION_CONSTS.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default cartReducer;