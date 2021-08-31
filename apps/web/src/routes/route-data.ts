import React from 'react';
import ConfirmEmail from '../pages/Auth/ConfirmEmail';
import UserDashboard from '../pages/Auth/UserDashboard';
import UserSignIn from '../pages/Auth/UserSignIn';
import UserSignUp from '../pages/Auth/UserSignUp';
import CateloguePage from '../pages/CateloguePage';
import CourseDetail from '../pages/CourseDetail';
import Home from '../pages/Home';
import Search from '../pages/Search';

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
  {
    path: '/catalogue/:name',
    protected: false,
    comp: CateloguePage,
  },
  {
    path: '/search/:query',
    protected: false,
    comp: Search,
  },
  {
    path: "/course/detail/:name",
    protected: false,
    comp: CourseDetail
  }
];
