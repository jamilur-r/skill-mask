import { Colors } from '@skill-mask/app';
import styled from 'styled-components';

interface BannerWrapProps {
  bg: string;
}
export const BannerWrap = styled.section<BannerWrapProps>`
  width: 100%;
  height: 500px;
  background-image: url('${(props) => props.bg}');
  object-position: center;
  object-fit: cover;

  .body {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      color: ${Colors.black};
      text-align: center;
      @media (max-width: 430px) {
        font-size: 1.5rem;
      }
    }
    h3 {
      font-size: 2rem;
      color: ${Colors.black};
      @media (max-width: 430px) {
        font-size: 1rem;
      }
    }
    form {
      width: 300px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      margin: 20px 0;

      input {
        width: 70%;
        margin-bottom: 10px;
        background-color: #fff;
        padding: 15px 12px;
        box-sizing: border-box;
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        color: ${Colors.green};
        font-weight: bold;
        border-radius: 5px 0 0 5px;
        &:focus {
          border: none;
          outline: none;
        }
        &:hover {
          box-shadow: rgba(1, 1, 1, 0.2) 0px 7px 29px 0px;
        }
      }
      input[type='submit'] {
        width: 30%;
        margin-bottom: 10px;
        background-color: ${Colors.black};
        padding: 15px 12px;
        box-sizing: border-box;
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        color: ${Colors.green};
        font-weight: bold;
        border-radius: 0 5px 5px 0;
        &:hover {
          box-shadow: rgba(1, 1, 1, 0.2) 0px 7px 29px 0px;
        }
        &:focus {
          border: none;
          outline: none;
        }
      }
    }
  }
`;
