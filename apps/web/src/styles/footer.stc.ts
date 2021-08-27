import styled from "styled-components";
import { Colors } from "@skill-mask/app";

export const Foot = styled.footer`
  width: 100%;
  height: 380px;
  background-color: ${Colors.black};
  @media (max-width: 768px){
      height: auto;
      box-sizing: border-box;
      padding: 30px 0;
  }
`;

export const FootWrapper = styled.div`
  width: 90%;
  height: 320px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FootBrand = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 26px;
    color: ${Colors.green};
    margin-bottom: 5px;
  }
  p {
    font-size: 16px;
    color: #fff;
    margin-bottom: 15px;
  }
  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    a {
      margin-right: 15px;
    }
  }

  @media (max-width: 768px) {
    margin: 0 0 30px 0;
    align-items: center;
  }
`;

export const FootLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 40px;
  a {
    font-size: 15px;
    font-weight: bold;
    color: #fff;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FootCreator = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  h1 {
    font-size: 26px;
    color: ${Colors.green};
    margin-bottom: 5px;
    text-align: right;
  }
  p {
    font-size: 16px;
    color: #fff;
    margin-bottom: 15px;
    text-align: right;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 15px 18px;
    background-color: ${Colors.green};
    color: ${Colors.black};
    font-size: 14px;
    font-weight: bold;
    span {
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;
