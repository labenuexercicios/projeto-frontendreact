import styled from 'styled-components';

export const ItemsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10 px;

  h3 {
    margin: 0;
    color: white;
    margin-left: 80px;
    margin-bottom: 20px;

  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 80px;
    transform: translateY(-10px);
    cursor: pointer;
  }
`;