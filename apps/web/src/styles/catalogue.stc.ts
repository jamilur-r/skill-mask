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
    .time{
        margin-bottom: 30px;
    }
  }
`;
