import { UserActionTypes, UserState} from './user.types'

export const setCurrentUser = (user: UserState) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});