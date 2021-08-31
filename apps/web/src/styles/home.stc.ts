import { Colors } from '@skill-mask/app';
import styled from 'styled-components';

export const LearnMore = styled.section`
  width: 100%;
  .body {
    width: 90%;
    margin: 30px auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 430px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .sec-1 {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      h2 {
        color: ${Colors.black};
      }
      p {
        font-size: 0.8rem;
        color: ${Colors.black};
        font-weight: 500;
      }
      img {
        width: 300px;
      }

      @media (max-width: 430px) {
        align-items: center;
        text-align: center;
        margin-bottom: 50px;
      }
    }
  }
`;

interface BoxesProps {
  boxBg: string;
  boxBg2: string;
}

export const Boxes = styled.div<BoxesProps>`
  width: calc(208px + 208px + 25px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  .box {
    width: 100%;
    height: 208px;
    background-color: ${Colors.black};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 1.2rem;
      color: ${Colors.green};
      text-align: center;
    }

    :nth-child(1) {
      background-image: url('${(props) => props.boxBg}');
      object-position: center;
      object-fit: cover;
      h3 {
        color: ${Colors.black};
        text-align: left;
      }
    }
    :nth-child(4) {
      background-image: url('${(props) => props.boxBg2}');
      object-position: center;
      object-fit: cover;
      h3 {
        color: ${Colors.black};
      }
    }
  }

  @media (max-width: 768px) {
    width: calc(137.5px + 137.5px + 25px);
    .box {
      height: 137.5px;
    }
  }
`;

export const CCWrapper = styled.section`
  width: 90%;
  margin: 80px auto;

  .header {
    width: 300px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h2 {
      font-size: 2rem;
      color: ${Colors.black};
    }
    p {
      font-size: 1rem;
      color: ${Colors.black};
      font-weight: 600;
    }
  }

  .cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    .card {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      background: ${Colors.black};
      color: ${Colors.green};

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      border-radius: 10px;
      img {
        width: 100%;
        border-radius: 10px;
      }
      h2 {
        font-size: 1.5rem;
      }
      .category {
        font-size: 0.7rem;
        background: ${Colors.light_black};
        padding: 5px;
        border-radius: 3px;
        font-weight: 700;
      }

      .info {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        p {
          font-size: 14px;
          font-weight: 400;
        }
      }

      .end-node {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        h3 {
          font-size: 1.6rem;
          font-weight: bold;
          letter-spacing: 2px;
        }
        .btn {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          background: ${Colors.green};
          width: 45px;
          height: 45px;
          border-radius: 100%;
        }
      }
      :nth-child(even) {
        background: ${Colors.green};
        color: ${Colors.black};
        .category {
          color: ${Colors.green};
        }
        .btn{
          background: ${Colors.black};
        }
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 430px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;


export const NoCourse = styled.div`
  width: 100%;
  height: 300px;
  margin: 80px auto;
  background: ${Colors.black};
  color: ${Colors.green};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  text-align: center;

  h2{
    font-size: 2.6rem;
  }

  @media (max-width: 768px){
    h2{
      font-size: 2rem;
    }
  }

  @media (max-width: 430px){
    h2{
      font-size: 1.3rem;
    }
  }

`