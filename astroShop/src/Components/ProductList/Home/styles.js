import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 20px;
`;

export const Header = styled.div`
display: flex;
gap: 20px;
justify-content: space-around;
width: 100%;
padding: 20px;

  select {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #f2f2f2;
    color: #333;
    font-size: 16px;
    outline: none;
    transition: all 0.2s ease;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  }

  &:focus {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    background-color: #e6e6e6;
  }
  }
`;

export const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;