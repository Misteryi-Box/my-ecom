export enum USER_ACTION_CONSTS {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export interface UserState {
  currentUser: any;
}
// Action Interfaces
interface SetCurrentUser {
  type: typeof USER_ACTION_CONSTS.SET_CURRENT_USER;
  payload: UserState
}
// Action Type Export
export type UserActionTypes = (
  SetCurrentUser 
);

//https://redux.js.org/recipes/usage-with-typescript