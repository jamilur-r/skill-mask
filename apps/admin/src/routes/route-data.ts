import Categories from '../pages/Categories';
import CourseDetail from '../pages/CourseDetail';
import Dashboard from '../pages/Dashboard';
import OwnCourses from '../pages/OwnCourses';
import Signin from '../pages/Signin';
import UpdateLesson from '../pages/UpdateLesson';

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
  {
    path: '/own/courses',
    comp: OwnCourses,
    protected: true,
  },
  {
    path: '/course/detail/:id',
    comp: CourseDetail,
    protected: true,
  },
  {
    path: '/update/lesson/:id',
    comp: UpdateLesson,
    protected: true,
  },
];
