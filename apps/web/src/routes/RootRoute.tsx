import { api_key, api_url } from '@skill-mask/app';
import axios from 'axios';
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CategoryType, GET_ALL_CAT } from '../types/category-type';
import { CoursesType, GET_COURSES } from '../types/course-types';
import Footer from '../widgets/Footer';
import Navbar from '../widgets/Navbar';
import ProtectedRoute from './ProtectedRoute';
import { RouteDataType, RouteData } from './route-data';

const RootRoute = ({ getCat, getCourse }: RXProps) => {
  useEffect(() => {
    (async () => {
      const url = api_url + '/category/all';
      const res = await axios.get(url, { headers: { key: api_key } });
      const course_url = api_url + '/course/all';
      const courseData = await axios.get(course_url, {
        headers: { key: api_key },
      });

      getCat(res.data);
      getCourse(courseData.data.courses)
    })();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {RouteData.map((item: RouteDataType, key: number) =>
          item.protected ? (
            <ProtectedRoute
              component={item.comp}
              path={item.path}
              exact
              key={key}
            />
          ) : (
            <Route component={item.comp} path={item.path} exact key={key} />
          )
        )}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
const mapDispatch = {
  getCat: (data: CategoryType[]) => ({
    type: GET_ALL_CAT,
    payload: data,
  }),
  getCourse: (data: CoursesType[]) => ({
    type: GET_COURSES,
    payload: data,
  }),
};

const connector = connect(null, mapDispatch);

type RXProps = ConnectedProps<typeof connector>;
export default connector(RootRoute);
