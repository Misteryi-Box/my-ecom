import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
})

//dev.to/leomeloxp/taking-react-and-redux-to-the-next-level-with-typescript-1m84