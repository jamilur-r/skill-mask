import styled from 'styled-components';
import { Colors } from '@skill-mask/app';

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: ${Colors.black};
`;

export const NavWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
  .i-span {
    color: ${Colors.yellow};
  }
  .m-span {
    color: ${Colors.green};
  }
`;

interface RoutesProps {
  show: boolean;
}
export const Routes = styled.div<RoutesProps>`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  a {
    margin: 0 20px;
    color: ${Colors.green};
    font-size: 14px;
    font-weight: 500;
  }
  div {
    margin: 0 20px;
    color: ${Colors.green};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
  .auth-link {
    display: none;
    width: 220px;
    font-size: 15px;
    font-weight: 800;
    color: ${Colors.black};
    background-color: ${Colors.green};
    padding: 12px;
    margin: 0 5px;
    border-radius: 3px;
    text-align: center;
  }
  @media (max-width: 430px) {
    .auth-link {
      display: block;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 10vh;
    left: 0;

    width: 100%;
    height: 90vh;
    background-color: ${Colors.black};

    display: ${(props) => (props.show ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    a {
      font-size: 25px;
      font-weight: bold;
    }
    div {
      font-size: 25px;
      font-weight: bold;
    }
  }
`;

export const MobileRoutes = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0 20px;
    &:focus {
      border: none;
      outline: none;
    }
  }

  a {
    font-size: 15px;
    font-weight: 600;
    color: ${Colors.black};
    background-color: ${Colors.green};
    padding: 7px 12px;
    margin: 0 5px;
    border-radius: 3px;
    @media (max-width: 430px) {
      display: none;
    }
  }
`;

export const ToggleButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 20px;
  &:focus {
    border: none;
    outline: none;
  }

  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

interface UserDropProps {
  show: boolean;
}
export const UserDrop = styled.div<UserDropProps>`
  width: 220px;
  box-sizing: border-box;
  padding: 25px 0;
  background-color: ${Colors.black};
  border-radius: 3px;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 12vh;
  right: 5%;

  button {
    font-size: 15px;
    font-weight: 700;
    color: ${Colors.green};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    span {
      margin-left: 10px;
    }
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    &:focus {
      border: none;
      outline: none;
    }
  }

  a {
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 700;
    color: ${Colors.green};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    span {
      margin-left: 10px;
    }
  }
`;

interface CatalogueWrapProps {
  show: boolean;
}
export const CatalogueWrap = styled.div<CatalogueWrapProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 100%;
  height: 90vh;
  background-color: ${Colors.black};

  position: absolute;
  top: 10vh;
  left: 0;

  .menu-body {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    a {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      border-radius: 5px;
      padding: 5px;
      box-sizing: border-box;
      background-color: ${Colors.light_black};
      img {
        width: 60px;
        height: 60px;
        border-radius: 5px;
      }
      h3 {
        color: ${Colors.green};
      }
      p {
        color: #fff;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 430px) {
      grid-template-columns: 1fr;
    }
  }
`;
