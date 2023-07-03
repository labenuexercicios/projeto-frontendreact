import styled from "styled-components";

export const ItemsContainer = styled.div`

 
`;
export const CartItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 5px;
  
  height: min(100%,5rem) ;
  width: min(100%,25rem);
  
  
  padding: 2px 0px 0px;
  color: var(--ui-placeholder);
  font-size: 1.5vh;
  font-family: Cabin;
  font-weight: 500;
  border-radius: 12px;
  box-shadow: 3px 3px 4px var(--ui-placeholder);
  background: radial-gradient(
    circle at 18.7% 37.8%,
    rgb(250, 250, 250) 0%,
    rgb(225, 234, 238) 90%
  );
  transition: 0.3s ease-in-out;
    :hover {
    
    transform: scale(1.02);
    transition: 0.3s ease-in;
  }
  img {
    display: flex;
    width: min(100%, 2rem);
    height: min(100%, 2rem);
  }
  p{
    width:auto;
    height: auto;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: min(100%, 2rem);
    height: min(100%, 2rem);
    margin: 5px;
    padding: 8px;

    color: var(--ui-white);
    background-color: var(--font-tertiary);
    border-radius: 22px;
    margin-bottom: 10px;
    transition: 0.8s;
  }

  button:hover {
    background-color: red;
    letter-spacing: 3px;
  }
`;
