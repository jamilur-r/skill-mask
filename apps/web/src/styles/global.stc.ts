import { Colors } from '@skill-mask/app';
import styled from 'styled-components';

export const Header = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Colors.black};
  h2 {
    font-size: 2rem;
  }
  span {
    color: ${Colors.green};
  }
  p {
    text-align: center;
    font-size: 1rem;
    color: ${Colors.black};
    font-weight: 600;
  }
`;


export const CardGrid = styled.section`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;