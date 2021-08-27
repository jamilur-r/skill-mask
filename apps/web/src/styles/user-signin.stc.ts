import styled from "styled-components";
import { Colors } from "@skill-mask/app";

export const SignInSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

export const Branding = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${Colors.black};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    margin-left: 50px;
    font-size: 40px;
    color: #fff;
    text-align: left;
  }
  p {
    margin-left: 50px;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    padding: 50px 0;
    h1 {
      margin-left: 0;
      text-align: center;
    }
    p {
      margin-left: 0;
      text-align: center;
    }
  }
`;

export const AuthForm = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    input {
      width: 100%;
      margin-bottom: 10px;
      background-color: ${Colors.light_blue};
      padding: 18px 15px;
      box-sizing: border-box;
      border: none;
      outline: none;
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      color: ${Colors.black};
      font-weight: bold;
      border-radius: 5px;
      &:focus {
        border: none;
        outline: none;
      }
    }

    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      color: ${Colors.green};
    }
    label {
      margin-bottom: 10px;
      color: ${Colors.black};
      font-size: 15px;
      font-weight: 600;
    }

    input[type="submit"] {
      padding: 18px 15px;
      background-color: ${Colors.black};
      font-size: 15px;
      font-weight: bold;
      color: ${Colors.green};
      cursor: pointer;
      margin-top: 15px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    padding: 50px 0;
  }
`;
