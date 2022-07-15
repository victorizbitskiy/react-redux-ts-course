export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS',
  FETCH_USERS_ERROR = 'FETCH_USERS',
}

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string | any;
}

export interface UserAction  {
  type: UserActionTypes;
  payload: any[];
}

// interface FetchUsersSuccessAction {
//   type: UserActionTypes.FETCH_USERS_SUCCESS;
//   payload: any[];
// }

// interface FetchUsersErrorAction {
//   type: UserActionTypes.FETCH_USERS_ERROR;
//   payload: string;
// }

// export type UserAction =  FetchUsersAction  | FetchUsersSuccessAction | FetchUsersErrorAction
