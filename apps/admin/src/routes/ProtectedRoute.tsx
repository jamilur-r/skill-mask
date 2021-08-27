import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AdminAppState } from '../store/store';

interface ProtectedProps extends RouteProps, RXProps {}

const ProtectedRoute = ({ component, auth, ...rest }: ProtectedProps) => {
  const routeComponent = (props: unknown) =>
    auth ? (
      <Route {...rest} component={component} />
    ) : (
      <Redirect to={{ pathname: '/' }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

const mapState = (state: AdminAppState) => ({
  auth: state.auth.isAuth,
});

const connector = connect(mapState);
type RXProps = ConnectedProps<typeof connector>;

export default connector(ProtectedRoute);
