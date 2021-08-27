import styled from "styled-components";
import { Colors } from "@skill-mask/app";

export const ConfirmWrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.black};

  h1 {
    color: ${Colors.green};
  }
  h2 {
    color: #fff;
  }
  p {
    text-align: center;
    color: #fff;
  }

  button {
    padding: 18px 15px;
    background-color: ${Colors.green};
    font-size: 15px;
    font-weight: bold;
    color: ${Colors.black};
    cursor: pointer;
    margin-top: 15px;
    border: none;
    border-radius: 3px;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
  }
`;
