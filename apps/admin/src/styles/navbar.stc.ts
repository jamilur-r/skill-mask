import styled from 'styled-components';
import { Colors } from '@skill-mask/app';

interface NavProp {
  show: boolean;
}
export const Nav = styled.nav<NavProp>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 20%;
  height: 100vh;
  background-color: ${Colors.black};

  position: fixed;
  top: 0;
  left: 0;
`;

export const NavWrap = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: ${Colors.light_black};
  padding: 5px;
  margin: 10px 0;
  border-radius: 5px;
  .ini {
    width: 50px;
    height: 50px;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${Colors.black};
    border-radius: 3px;
    color: ${Colors.green};
    font-weight: 800;
  }
  p {
    color: #fff;
    margin: 0 0 0 15px;
    font-weight: 700;
  }
`;

export const NavItem = styled.div`
  margin: 5px 0;
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  a {
    margin-left: 10px;
    color: ${Colors.green};
    font-size: 14px;
    font-weight: 600;
  }
`;

export const LogoutDiv = styled.button`
  width: 100%;
  height: 45px;
  background-color: ${Colors.light_black};
  margin: 20px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border: none;
  border-radius: 5px;
  p {
    font-weight: 700;
    font-size: 14px;
    color: ${Colors.green};
  }
`;
