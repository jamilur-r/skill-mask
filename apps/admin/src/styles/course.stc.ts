import { Colors } from '@skill-mask/app';
import styled from 'styled-components';

export const LessonWrap = styled.div`
  width: 1152px;
  padding: 15px 20px;
  box-sizing: border-box;
  margin: 20px 50px;

  background-color: ${Colors.black};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${Colors.green};

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btn {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: bold;
      margin: 5px 0;
      padding: 15px 18px;
      border: none;
      background-color: ${Colors.green};
      color: ${Colors.black};
    }
  }
`;

export const VideoForm = styled.div`
  position: absolute;
  top: 15vh;
  left: 50px;

  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    label {
      font-size: 14px;
      font-weight: 600;
      color: ${Colors.black};
    }

    input {
      width: 100%;
      margin-bottom: 10px;
      background-color: ${Colors.light_blue};
      padding: 18px 15px;
      box-sizing: border-box;
      border: none;
      outline: none;
      font-family: 'Poppins', sans-serif;
      font-size: 15px;
      color: ${Colors.black};
      font-weight: bold;
      border-radius: 5px;
    }

    input[type='submit'] {
      width: 100%;
      margin-bottom: 10px;
      background-color: ${Colors.black};
      padding: 18px 15px;
      box-sizing: border-box;
      border: none;
      outline: none;
      font-family: 'Poppins', sans-serif;
      font-size: 15px;
      color: ${Colors.green};
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }

    textarea {
      width: 100%;
      margin-bottom: 10px;
      background-color: ${Colors.light_blue};
      padding: 18px 15px;
      box-sizing: border-box;
      border: none;
      outline: none;
      font-family: 'Poppins', sans-serif;
      font-size: 15px;
      color: ${Colors.black};
      font-weight: bold;
      border-radius: 5px;
    }
  }
`;
