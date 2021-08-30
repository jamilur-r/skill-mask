import CAForm from '../pages/CAForm';
import Categories from '../pages/Categories';
import CourseDetail from '../pages/CourseDetail';
import Dashboard from '../pages/Dashboard';
import LAForm from '../pages/LAForm';
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
    path: '/update/lesson/:id/:course_id',
    comp: UpdateLesson,
    protected: true,
  },
  {
    path: '/add/lesson/:course_id',
    comp: LAForm,
    protected: true,
  },
  {
    path: '/course/add',
    comp: CAForm,
    protected: true,
  },
];
