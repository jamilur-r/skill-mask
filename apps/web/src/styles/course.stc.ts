import { Colors } from '@skill-mask/app';
import styled from 'styled-components';

export const CourseBanner = styled.section`
  width: 100%;
  height: 500px;
  background-color: ${Colors.black};

  .body {
    width: 90%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    .info {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      h1 {
        font-size: 2.6rem;
        color: ${Colors.green};
        letter-spacing: 2px;
      }
      p {
        font-size: 0.9rem;
        font-weight: 400;
      }
      .creator {
        font-size: 0.8rem;
        font-weight: 300;
      }
      .details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        p {
          font-size: 0.9rem;
          font-weight: 400;
        }
      }

      @media (max-width: 768px) {
        h1 {
          font-size: 1.8rem;
        }
      }

      @media (max-width: 430px) {
        align-items: center;
        text-align: center;
        h1 {
          font-size: 1.5rem;
        }
      }
    }

    .media {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 500px;
      video {
        width: 100%;
        border-radius: 10px;
      }
      img {
        width: 100%;
        border-radius: 10px;
      }
      .actions {
        width: 100%;
        color: ${Colors.green};
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        p {
          font-size: 14px;
          font-weight: bold;
        }
        a {
          padding: 18px 15px;
          background-color: ${Colors.green};
          color: ${Colors.black};
          border-radius: 3px;
          font-size: 14px;
          font-weight: bold;

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          &:hover {
            transition: 200ms ease-in;
            box-shadow: rgba(1, 1, 1, 0.2) 0px 7px 29px 0px;
          }
        }
      }
      @media (max-width: 1024px) {
        width: 400px;
      }
      @media (max-width: 768px) {
        width: 350px;
      }
      @media (max-width: 430px) {
        margin: 50px 0;
        width: 300px;
      }
    }
    @media (max-width: 430px) {
      flex-direction: column-reverse;
      justify-content: center;
    }
  }
  @media (max-width: 430px) {
    height: auto;
  }
`;

export const CourseInfo = styled.section`
  width: 90%;
  box-sizing: border-box;
  padding: 20px;
  margin: 80px auto;
  background-color: ${Colors.light_blue};
  border-radius: 3px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  p {
    font-size: 18px;
    font-weight: 600;
    width: 450px;
    text-align: justify;
  }
  video {
    width: 600px;
    border-radius: 10px;
  }
  img {
    width: 600px;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    video {
      width: 400px;
    }
    img {
      width: 400px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    p {
      margin-top: 50px;
      width: 350px;
    }
    video {
      width: 300px;
    }
    img {
      width: 300px;
    }
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    p {
      width: 300px;
    }
  }
`;
