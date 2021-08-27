import React, { useState } from 'react';
import {
  AuthForm,
  Branding,
  SignInSection,
} from '../../styles/user-signin.stc';
import { connect, ConnectedProps } from 'react-redux';
import Helmet from 'react-helmet';
import { site_title, Colors, toast_err, toast_suc } from '@skill-mask/app';
import { ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import { SignInUser } from "../../store/action/auth-action";
import { AppState } from '../../store/store';
import { UserType } from '../../types/auth-types';

const UserSignIn = ({ isAuth, signin }: RXProps) => {
  const [isPass, setIsPass] = useState<boolean>(true);

  const [identifier, setIdentifier] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIdentifier({ ...identifier, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await SignInUser(identifier.email, identifier.password);

    if (res.status === 200) {
      delete res.data.user.password;
      signin(res.data.token, res.data.user);
      toast_suc("Signed In");
    } else {
      toast_err("Failed to sign in. Email or password might be wrong");
    }
  };

  if (isAuth) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>{site_title} - Sign In</title>
        <meta
          name="description"
          content="Skill mater is an online learning plat form based in Bangladsh. Sign in to learn from industry experts and accelerate you career"
        />
        <meta
          name="keywords"
          content="skill mater, online learning bd, online learning bangladesh, skill mater courses"
        />
      </Helmet>
      <SignInSection>
        <Branding>
          <h1>
            Sk<span style={{ color: Colors.yellow }}>i</span>ll{' '}
            <span style={{ color: Colors.green }}>M</span>ater
          </h1>
          <p>
            Learn from the best. Test what <br />
            you learned. Accelerate your <br />
            career
          </p>
        </Branding>
        <AuthForm>
          <h2 style={{ color: Colors.black, margin: '30px 0' }}>Sign In</h2>
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              name="email"
              id="email"
              required
              maxLength={40}
              placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => handleChange(e)}
              type={isPass ? 'password' : 'text'}
              name="password"
              id="pass"
              required
              maxLength={32}
              placeholder="Password"
            />
            <div
              style={{ width: '100%', display: 'flex', alignItems: 'center' }}
            >
              <input
                type="checkbox"
                name=""
                onChange={(e) => {
                  if (e.target.checked) {
                    setIsPass(false);
                  } else {
                    setIsPass(true);
                  }
                }}
              />
              <label htmlFor="show-password">Show Password</label>
            </div>
            <input type="submit" value="SIGN IN" />
          </form>
        </AuthForm>
      </SignInSection>
    </>
  );
};

const mapState = (state: AppState) => ({
  isAuth: state.auth.isAuth,
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

export default connector(UserSignIn);
