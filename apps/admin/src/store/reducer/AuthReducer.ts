import { AuthType, AuthActions } from '../../types/auth-types';

const initState: AuthType = {
  isAuth: false,
  user: undefined,
  token: null,
};

export const AuthReducer = (
  state = initState,
  action: AuthActions
): AuthType => {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuth: false,
        token: null,
        user: undefined,
      };
    default:
      return state;
  }
};
