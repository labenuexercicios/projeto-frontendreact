import styled from "styled-components";
export const CartContainer = styled.div`
  display: flex;
  min-width: 250px;
    max-width: 400px;
  //21vh;//
  padding: 10px;
  margin: 16px 10px 16px 16px;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  border-radius: 8px;
  background: var(--ui-white, #fff);
  padding-top: 25px;
  gap: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 6px var(--ui-placeholder);

`;
export const TopBagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
 

  h1 {
    color: var(--font-dark);
    font-size: 5vh;
    font-family: Cabin;
    font-weight: 500;
  }
`;

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p{
    letter-spacing:-.50px;
  }

  img{
    width: min(100%, 2rem);
    height: min(100%, 2rem);  
    border:none;
    border-radius: 50%;
  }
`;
export const TotalCart = styled.div`
  margin: 5px;
  display: flex;
  align-items: flex-end;
  align-content: baseline;
  justify-items: space-between;
  width: clamp(200px, 100% , 2000px);
  height:100%;
  gap: 3.5vh;
  
  justify-self: flex-end;
  color: var(--ui-placeholder);
  font-size:1.5rem;
  font-family: Cabin;
  font-weight: 500;

  `;
