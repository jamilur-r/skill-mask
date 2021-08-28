import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { Colors } from '@skill-mask/app';
import {
  Brand,
  MobileRoutes,
  Nav,
  NavWrapper,
  Routes,
  ToggleButton,
  UserDrop,
} from '../styles/navbar.stc';
import { BookOpen, Grid, LogOut, Search, User } from 'react-feather';
import { AppState } from '../store/store';
import Catalogue from './Catalogue';

const Navbar = ({ isAuth, logout }: RXProps) => {
  const [showMenu, setShow] = useState<boolean>(false);
  const [showUserDrop, setUserDrop] = useState<boolean>(false);
  const [catalogueMenuShow, setcatelogueMenuShow] = useState<boolean>(false);

  return (
    <Nav>
      <NavWrapper>
        <Link to="/">
          <Brand>
            Sk<span className="i-span">i</span>ll{' '}
            <span className="m-span">M</span>ater
          </Brand>
        </Link>
        <Routes show={showMenu}>
          <Link to="/" onClick={() => setShow(false)}>
            Home
          </Link>
          <div
            onClick={() => {
              setcatelogueMenuShow(!catalogueMenuShow);
              setShow(false);
            }}
          >
            Catalogue
          </div>
          <Link to="/creator/signup" onClick={() => setShow(false)}>
            <span style={{ color: Colors.yellow }}>Become</span> a Creator
          </Link>
          <Link
            to="/signin"
            className="auth-link"
            onClick={() => setShow(false)}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="auth-link"
            onClick={() => setShow(false)}
          >
            Sign Up
          </Link>
        </Routes>
        <MobileRoutes>
          <button>
            <Search size={20} color={Colors.yellow} />
          </button>
          {isAuth ? (
            <>
              <button>
                <BookOpen size={20} color={Colors.yellow} />
              </button>
              <button onClick={() => setUserDrop(!showUserDrop)}>
                <User size={20} color={Colors.yellow} />
              </button>
            </>
          ) : (
            <>
              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
          <ToggleButton
            onClick={() => {
              setShow(!showMenu);
              setcatelogueMenuShow(false);
            }}
          >
            <Grid size={20} color={Colors.yellow} />
          </ToggleButton>
        </MobileRoutes>
        <UserDrop show={showUserDrop}>
          <Link to="/user/dashboard" onClick={() => setUserDrop(false)}>
            <Grid size={20} color={Colors.green} />
            <span>Dashboard</span>
          </Link>
          <button
            onClick={() => {
              logout();
              setUserDrop(false);
            }}
          >
            <LogOut size={20} color={Colors.green} />
            <span>Logout</span>
          </button>
        </UserDrop>
        <Catalogue
          displayToggle={{
            show: catalogueMenuShow,
            setShow: setcatelogueMenuShow,
          }}
        />
      </NavWrapper>
    </Nav>
  );
};

const mapState = (state: AppState) => ({
  isAuth: state.auth.isAuth,
});
const mapDispatch = {
  logout: () => ({
    type: 'LOGOUT',
  }),
};

const connector = connect(mapState, mapDispatch);

type RXProps = ConnectedProps<typeof connector>;
export default connector(Navbar);
