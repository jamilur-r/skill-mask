import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LogoutDiv,
  Nav,
  NavItem,
  NavWrap,
  UserInfo,
} from "../styles/navbar.stc";
import { connect, ConnectedProps } from "react-redux";
import { LogOut } from "react-feather";
import { Colors } from "@skill-mask/app";
import { AdminAppState } from "../store/store";
const Navbar = ({ user, logout }: RXProps) => {
  const [show, setShow] = useState(true);

  const location = useLocation()
  useEffect(() => {
    setShow(location.pathname === "/" ? false : true);
  }, [location.pathname]);
  
  return (
    <Nav show={show}>
      <NavWrap>
        <UserInfo>
          <p className="ini">FH</p>
          <p>Hi There</p>
        </UserInfo>
        <NavItem>
          <Link to="/category">Categories</Link>
        </NavItem>
        <LogoutDiv onClick={() => logout()}>
          <LogOut color={Colors.green} size={20} style={{ margin: "0 10px" }} />
          <p>Logout</p>
        </LogoutDiv>
      </NavWrap>
    </Nav>
  );
};

const mapState = (state: AdminAppState) => ({
  user: state.auth.user,
});

const mapDispatch = {
  logout: () => ({ type: "LOGOUT" }),
};

const connector = connect(mapState, mapDispatch)

type RXProps = ConnectedProps<typeof connector>

export default connector(Navbar);
