import Categories from "../pages/Categories";
import Dashboard from "../pages/Dashboard";
import Signin from "../pages/Signin";

interface RoutesDataType {
  path: string;
  comp: React.FC;
  protected: boolean;
}

export const RouteData: RoutesDataType[] = [
  {
    path: '/',
    comp: Signin,
    protected: false,
  },
  {
    path: '/dashboard',
    comp: Dashboard,
    protected: true,
  },
  {
    path: '/category',
    comp: Categories,
    protected: true,
  },
];
