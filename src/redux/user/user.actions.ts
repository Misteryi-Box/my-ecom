import { UserState, USER_ACTION_CONSTS, UserActionTypes } from './user.types'

export const setCurrentUser = (user: UserState) => ({
  type: USER_ACTION_CONSTS.SET_CURRENT_USER,
  payload: user
});