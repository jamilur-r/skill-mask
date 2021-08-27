import React from 'react';
import ConfirmEmail from '../pages/Auth/ConfirmEmail';
import UserDashboard from '../pages/Auth/UserDashboard';
import UserSignIn from '../pages/Auth/UserSignIn';
import UserSignUp from '../pages/Auth/UserSignUp';
import Home from '../pages/Home';

export interface RouteDataType {
  path: string;
  protected: boolean;
  comp: React.FC;
}
export const RouteData: RouteDataType[] = [
  {
    path: '/',
    protected: false,
    comp: Home,
  },
  {
    path: '/signin',
    protected: false,
    comp: UserSignIn,
  },
  {
    path: '/signup',
    protected: false,
    comp: UserSignUp,
  },
  {
    path: '/user/dashboard',
    protected: true,
    comp: UserDashboard,
  },
  {
    path: '/confirm-email',
    protected: false,
    comp: ConfirmEmail,
  },
];
