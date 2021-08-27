export interface UserType {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: 'ADMIN' | 'USER' | 'CREATOR' | 'SUADMIN';
  phone: string;
  email_confirmed: boolean;
}

export interface AuthType {
  isAuth: boolean;
  user?: UserType;
  token: string | null;
}

const SIGNIN = 'SIGNIN';
const SIGNUP = 'SIGNUP';
const LOGOUT = 'LOGOUT';
const EMAIL_CONFIRM = 'EMAIL_CONFIRM';

interface SignINAction {
  type: typeof SIGNIN;
  payload: {
    user: UserType;
    token: string;
  };
}

interface SignUpAction {
  type: typeof SIGNUP;
  payload: {
    user: UserType;
    token: string;
  };
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface EmailAction {
  type: typeof EMAIL_CONFIRM;
  payload: UserType
}

export type AuthActions =
  | SignINAction
  | SignUpAction
  | LogoutAction
  | EmailAction;
