import { UserActionTypes, UserState, UserAction } from './user.types'

const initialState:  UserState= {
  currentUser: null
}

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer