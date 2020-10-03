import { UserState, USER_ACTION_CONSTS, /*UserActionTypes*/ } from './user.types'

export const setCurrentUserAction = (user: UserState) => ({
  type: USER_ACTION_CONSTS.SET_CURRENT_USER,
  payload: user
});