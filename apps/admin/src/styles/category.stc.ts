import styled from 'styled-components';
import { Colors } from '@skill-mask/app';

interface TableProps {
  width?: string;
}
export const Table = styled.table<TableProps>`
  width: ${(props) => (props.width ? props.width : '70%')};
  margin-left: 50px;
  table-layout: fixed;

  thead {
    background-color: ${Colors.black};
  }
  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    color: ${Colors.green};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
  }
  td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    color: ${Colors.black};
    font-size: 14px;
    font-weight: bold;
  }
  tbody {
    background-color: ${Colors.green};
  }
  .sr-only {
    display: none;
  }
`;

export const CatForm = styled.form`
  margin-left: 50px;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

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
  }
`;
interface DBProps {
  color?: string
}
export const DeleteButton = styled.button<DBProps>`
  padding: 10px 16px;
  background-color: ${props=> props.color ? props.color : Colors.red};
  border: none;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: ${Colors.black};
`;
