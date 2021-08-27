import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../store/store';

interface ProtectedProps extends RouteProps, RXProps {}

const ProtectedRoute = ({ component, auth, user, ...rest }: ProtectedProps) => {
  const routeComponent = (props: unknown) =>
    auth ? (
      user?.email_confirmed ? (
        <Route {...rest} component={component} />
      ) : (
        <Redirect to={{ pathname: '/confirm-email' }} />
      )
    ) : (
      <Redirect to={{ pathname: '/signin' }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

const mapState = (state: AppState) => ({
  auth: state.auth.isAuth,
  user: state.auth.user,
});
const connector = connect(mapState);

type RXProps = ConnectedProps<typeof connector>;

export default connector(ProtectedRoute);
