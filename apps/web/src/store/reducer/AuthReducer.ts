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
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'SIGNUP':
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuth: false,
        user: undefined,
        token: null,
      };
    case 'EMAIL_CONFIRM':
      return {
        ...state,
        user: {
          ...action.payload,
          email_confirmed: true,
        },
      };
    default:
      return state;
  }
};
