import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  width: max(20%, 100px);
  border-radius: 22px;

  img {
    
    width: 20vh;
    padding: 16px;
    border-radius: 22px;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 4vh;
    height: 4vh;
    margin: 5px;
    padding: 8px;
    color: var(--ui-white);
    background-color: var(--ui-dark);
    border-radius: 22px;
    margin-bottom: 10px;
    transition: 0.5s;

    cursor: pointer;
  }

  button:hover {
    background-color: var(--ui-placeholder);
    letter-spacing: 3px;
  }
`;

export const Price = styled.p`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  font-size: 16px;
  font-family: Cabin;
  color: var(--ui-tertiary);
  margin-left: 10px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-family: Cabin;
  font-weight: 500;
  margin-left: 10px;
`;
