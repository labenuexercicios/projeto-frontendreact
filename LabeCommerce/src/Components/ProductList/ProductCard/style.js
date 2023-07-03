import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 16px;
  gap: 15px;
  width: min(100%, 30rem);
 height: min (100%,20rem);
  border-radius: 22px;
  

  img {
    width: max(80%, 10rem);
    padding: 16px;
    border-radius: 22px;
    transition: 0.5s ease-in-out;
    opacity: 0.6;
    cursor: pointer;
  }

  img:hover {
    opacity: 100%;
    transform: scale(1.1);
    transition: 0.5s ease-in;
  }

  button {
    display: flex;
   justify-content: center;
    align-items: center;
    
    width: 4vh;
    height: 4vh;
    margin: 5px;
    padding: 8px;

    color: var(--ui-white);
    background-color: var(--ui-dark);
    border-radius: 22px;
    margin-bottom: 10px;
    transition: 0.8s;

    cursor: pointer;
  }

  button:hover {
    background-color: var(--ui-placeholder);
    letter-spacing: 3px;
  }
`;

export const Price = styled.p`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-size: 16px;
  font-family: Cabin;
  color: var(--ui-tertiary);
  

 
`;
export const Name = styled.p`
  font-size: 20px;
  font-family: Cabin;
  font-weight: 500;
  
`;
