import styled from "styled-components";

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
   
`;

export const ItemImage = styled.img`
  width: 8vh;
  height: 8vh;
  margin-right: 0.5rem;
  flex-shrink: 0;
  border-radius: 3px;
`;

export const ItemName = styled.span`
  width: 15vh;
  font-size: 0.8rem;

`;

export const ItemQuantity = styled.span`
  width: 10vh;
  font-size: 1rem;
  margin-right: 0.2rem;
  text-align: center;
  font-size: 0.8rem;
`;

export const ItemPrice = styled.span`
  font-size: 1rem;
  margin-right: 0.2rem;
  text-align: center;
  font-size: 0.8rem;
`;


export const RemoveItemButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  padding: 0.5vh 0.6vh;
  font-size: 14px;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 1vh;

  &:hover {
    background-color: #ccc;
    border-color: #999;
    color: #fff;
  }
`;