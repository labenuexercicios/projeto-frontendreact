import styled from "styled-components";
export const CartContainer = styled.div`
  display: grid;
  flex-direction: column;
  align-items: flex-start;

  flex-shrink: 0;
  gap: 10px;
  border-left: solid 1px ;
  border-left-color:;
  
  border-radius: 30px;
  width: 20vw;
  height: 87vh;
  margin: 10px 2px 0px 30px;
  padding: 10px 8px 8px 8px;
 
  h1 {
    color: var(--font-dark);
    font-size: 39.06px;
    font-family: Cabin;
    font-weight: 500;
    align-self: center;
  }



`;





export const ItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TotalCart = styled.div`
  margin: 5px;
  display: flex;
  gap  :2vh ;
  justify-content:space-between;
  align-self: flex-end;
  justify-self: flex-end;
 
  font-size: 2vh;
  font-family: Cabin;
  font-weight: 500;
  
`;
