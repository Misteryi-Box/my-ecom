export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export interface UserState {
  currentUser: any;
}

export interface UserAction {
  type: string;
  payload: UserState;
}
// export const SET_CURRENT_USER = 'SET_CURRENT_USER'

// export interface SetCurrentUserAction {
//   type : typeof SET_CURRENT_USER;
//   payload: UserState;
// }

// export type UserActionTypes = SetCurrentUserAction;

//https://redux.js.org/recipes/usage-with-typescript