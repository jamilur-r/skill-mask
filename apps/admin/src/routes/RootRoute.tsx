import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteData } from './route-data';
import Navbar from '../widgets/Navbar';
import ProtectedRoute from './ProtectedRoute';

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        {RouteData.map((item, key) =>
          item.protected ? (
            <ProtectedRoute
              exact
              path={item.path}
              component={item.comp}
              key={key}
            />
          ) : (
            <Route path={item.path} component={item.comp} exact key={key} />
          )
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default RootRoute;
