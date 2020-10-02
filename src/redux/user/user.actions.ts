import {UserState} from './user.types'

export const setCurrentUser = (user: UserState) => ({
  type: 'SET_CURRENT_USER',
  payload: user
});