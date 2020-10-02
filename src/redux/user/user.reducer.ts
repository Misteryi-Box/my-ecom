import { UserState, USER_ACTION_CONSTS, UserActionTypes } from './user.types'

const initialState:  UserState = {
  currentUser: null
}

const userReducer = (state: UserState = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case USER_ACTION_CONSTS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer