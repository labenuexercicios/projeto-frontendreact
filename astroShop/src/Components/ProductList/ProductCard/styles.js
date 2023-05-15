import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
  max-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 24px 0 rgba(0,0,0,0.2);
    border: 1px solid var(--color-primary);
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
  export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: var(--color-primary);
`;

export const CardPrice = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: var(--color-primary);
`;
export const AddToCartButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1em;
  border: none;
  background-color: var(--color-primary);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2db653;
    color: #000;
    transition: 0.3s;
  }

`;
