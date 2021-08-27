import styled from "styled-components";
import { Colors } from "@skill-mask/app";

export const SigninWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${Colors.black};
  text-transform: capitalize;
  margin: 15px 0;
`;

export const Input = styled.input`
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
`;

export const Submit = styled.button`
  width: 100%;
  margin-bottom: 10px;
  background-color: ${Colors.black};
  padding: 18px 15px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  color: ${Colors.green};
  font-weight: bold;
  border-radius: 5px;
`;
