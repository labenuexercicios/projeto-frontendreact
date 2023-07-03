import styled from 'styled-components';

export const ProductsContainer = styled.div`
`;

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #EDF4F7;
  margin-top: -65px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 8px;
  background-color: #F8F9FF;
`;

export const Select = styled.select`
  border-radius: 30px;
  padding: 5px;
  background-color: #FFF;

  option {
    border-radius: 30px;
  }
`;
