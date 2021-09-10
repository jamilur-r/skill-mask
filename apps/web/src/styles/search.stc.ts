import { Colors } from '@skill-mask/app';
import styled from 'styled-components';

export const SearchBanner = styled.section`
  width: 90%;
  margin: 20px auto 50px auto;
  background-color: ${Colors.black};
  padding: 50px 0;
  box-sizing: border-box;
  border-radius: 3px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2 {
    color: ${Colors.green};
  }
`;

interface WrapProps {
  show: boolean;
}

export const WidgetWrap = styled.div<WrapProps>`
  box-shadow: rgba(1, 1, 1, 0.3) 0px 7px 29px 0px;
  transition: 300ms ease-in;
  z-index: 1000;
  width: 310px;
  background-color: ${Colors.light_black};
  padding: 5px;
  box-sizing: border-box;
  border-radius: 3px;

  position: absolute;
  top: 12vh;
  right: 5%;

  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    padding: 14px 12px;
    box-sizing: border-box;
    background-color: ${Colors.light_blue};
    border: none;
    border-radius: 3px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: ${Colors.black};
    margin-bottom: 15px;
    &:focus {
      border: none;
      outline: none;
    }
  }

  .course {
    width: 100%;

    background-color: ${Colors.light_black};
    padding: 5px;
    border-radius: 2px;
    margin: 5px 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      width: 60px;
      border-radius: 5px;
    }
    p {
      font-size: 0.9rem;
      color: #fff;
    }
  }
`;
