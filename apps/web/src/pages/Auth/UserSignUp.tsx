import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Redirect } from "react-router-dom";

import { Colors, site_title, toast_suc, toast_err } from "@skill-mask/app";
import {
  AuthForm,
  Branding,
  SignInSection,
} from "../../styles/user-signin.stc";
import Helmet from "react-helmet";
import { ToastContainer } from "react-toastify";
import { SignUpUser } from "../../store/action/auth-action";
import { AppState } from "../../store/store";
import { UserType } from "../../types/auth-types";

const UserSignUp = ({ isAuth, signup }: RXProps) => {

  const [isPass, setIsPass] = useState<boolean>(true);

  const [identifier, setIdentifier] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    confirm_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIdentifier({ ...identifier, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await SignUpUser(identifier);

    if (res.status === 200) {
      delete res.data.user.password;
      signup(res.data.token, res.data.user);
      toast_suc("Signed Up");
    } else {
      toast_err("Failed to sign Up.");
    }
  };

  if (isAuth) {
    return <Redirect to={{ pathname: "/user/dashboard" }} />;
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
            Sk<span style={{ color: Colors.yellow }}>i</span>ll{" "}
            <span style={{ color: Colors.green }}>M</span>ater
          </h1>
          <p>
            Learn from the best. Test what <br />
            you learned. Accelerate your <br />
            career
          </p>
        </Branding>
        <AuthForm>
          <h2 style={{ color: Colors.black, margin: "30px 0" }}>Sign Up</h2>
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <label htmlFor="first_name">First Name</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="first_name"
                  id="first_name"
                  required
                  maxLength={40}
                  placeholder="First Name"
                  style={{ marginRight: "10px" }}
                />
              </div>
              <div>
                <label htmlFor="last_name" style={{ marginLeft: "10px" }}>Last Name</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="last_name"
                  id="last_name"
                  required
                  maxLength={40}
                  placeholder="Email"
                  style={{ marginLeft: "10px" }}
                />
              </div>
            </div>
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
              type={isPass ? "password" : "text"}
              name="password"
              id="pass"
              required
              maxLength={32}
              placeholder="Password"
            />
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              onChange={(e) => handleChange(e)}
              type={isPass ? "password" : "text"}
              name="confirm_password"
              id="pass"
              required
              maxLength={32}
              placeholder="Confirm Password"
            />
            <div
              style={{ width: "100%", display: "flex", alignItems: "center" }}
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
            <input type="submit" value="SIGN UP" />
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
  signup: (token: string, user: UserType) => ({
    type: "SIGNUP",
    payload: {
      token: token,
      user: user,
    },
  }),
};
const connector = connect(mapState, mapDispatch)
type RXProps = ConnectedProps<typeof connector>

export default connector(UserSignUp);
