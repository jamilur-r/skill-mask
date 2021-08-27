import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from "../widgets/Footer";
import Navbar from "../widgets/Navbar";
import ProtectedRoute from './ProtectedRoute';
import { RouteDataType, RouteData } from './route-data';
const RootRoute = () => {
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
      <Footer/>
    </BrowserRouter>
  );
};

export default RootRoute;
