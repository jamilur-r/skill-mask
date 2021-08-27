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
const LOGOUT = 'LOGOUT';

interface SignINAction {
  type: typeof SIGNIN;
  payload: {
    user: UserType;
    token: string;
  };
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActions = SignINAction | LogoutAction;
