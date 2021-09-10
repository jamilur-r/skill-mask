import { Colors } from '@skill-mask/app';
import styled from 'styled-components';

export const CatalogueBanner = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: ${Colors.black};
  /* @media (max-width) */

  h1 {
    font-size: 42px;
    color: ${Colors.green};
  }
  img {
    width: 300px;
    border-radius: 10px;
  }
  p {
    width: 280px;
    color: #fff;
    font-weight: 600;
  }
  .time {
    margin-top: 15px;
    font-weight: 300;
    color: #fff;
    font-size: 14px;
  }

  @media (max-width: 430px) {
    height: auto;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    img {
      margin-bottom: 50px;
    }
    .time {
      margin-bottom: 30px;
    }
  }
`;

export const Featured = styled.section`
  width: 90%;
  margin: 50px auto;

  .courses {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 430px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const FindMore = styled.section`
  width: 90%;
  margin: 50px auto;

  .btns {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    select {
      display: none;
    }
    .btn {
      padding: 12px 15px;
      border-radius: 100px;
      font-size: 0.9rem;
      font-weight: 700;
      margin: 0 15px;
      transition: 200ms ease-in;
      cursor: pointer;
    }

    @media (max-width: 430px) {
      .btn {
        display: none;
      }
      select {
        display: block;
        padding: 18px 13px;
        box-sizing: border-box;
        border: none;
        background-color: ${Colors.light_black};
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 1.1rem;
      }
    }
  }

  .courses{
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 430px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
