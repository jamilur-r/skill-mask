import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Form, Input, Label, SigninWrap, Submit } from '../styles/signin.stc';
import { Redirect } from 'react-router-dom';
import { AdminSignIn } from '../store/action/auth-action';
import { UserType } from '../types/auth-types';
import { AdminAppState } from '../store/store';

const Signin = ({ auth, signin }: RXProps) => {
  const [cred, setCred] = useState({
    email: '',
    pass: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCred({ ...cred, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await AdminSignIn(cred.email, cred.pass);
    if (res.user !== null) {
      signin(res.token, res.user);
    }
  };

  if (auth) {
    return <Redirect to={{ pathname: '/dashboard' }} />;
  }
  return (
    <SigninWrap>
      <Form onSubmit={(e: React.FormEvent) => handleSubmit(e)} method="POST">
        <h2 style={{ textAlign: 'center' }}>SIGN IN - ADMIN</h2>
        <Label>Email</Label>
        <Input
          placeholder="Email"
          required
          type="email"
          name="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />

        <Label>Password</Label>
        <Input
          placeholder="Password"
          required
          type="password"
          name="pass"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Submit>SIGN IN</Submit>
      </Form>
    </SigninWrap>
  );
};

const mapState = (state: AdminAppState) => ({
  auth: state.auth.isAuth,
});
const mapDispatch = {
  signin: (token: string, user: UserType) => ({
    type: 'SIGNIN',
    payload: {
      token: token,
      user: user,
    },
  }),
};

const connector = connect(mapState, mapDispatch);
type RXProps = ConnectedProps<typeof connector>;

export default connector(Signin);
