import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 20rem;
  width: max(2vw, 15rem);
  padding: 8px;
  margin: 16px 0 16px 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  background: var(--ui-white, #fff);
  padding-top: 25px;
  gap: 10px;
  overflow: hidden;

  div {
    align-self: center;
  }
`;
export const FiltroContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  height: 50%;
  align-items: flex-end;
  justify-content: space-around;
  gap: 10px;
  align-self: flex-start;
`;

export const FiltroLabelMin = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  gap: 5px;
  transition: 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
    transition: 0.2s ease-in;
    width: 95%;
  }

  label {
    display: flex;
    gap: 15px;
    font-size: 15px;
    font-family: Cabin;
    font-weight: 500;
    margin-left: 10px;
    color: var(--ui-placeholder);
    letter-spacing: -0.52px;
    align-items: center;
    cursor: pointer;
  }

  input {
    height: 4vh;
    width: 100%;
    padding: 8px 16px;
    color: var(--ui-dark);
    font-size: 100%;
    font-family: Cabin;
    font-weight: 1000;
    border-radius: 13px;
    background: var(--ui-light);
    opacity: 0.4;
    box-shadow: 0px 4px 16px 0px rgba(26, 50, 22, 0.15);
  }
`;
export const FiltroLabelMax = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  gap: 5px;
  transition: 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
    transition: 0.2s ease-in;
    width: 95%;
  }

  label {
    display: flex;
    gap: 15px;
    font-size: 15px;
    font-family: Cabin;
    font-weight: 500;
    margin-left: 10px;
    letter-spacing: -0.52px;
    color: var(--ui-placeholder);
    align-items: center;
    cursor: pointer;
  }

  input {
    height: 4vh;
    width: 100%;
    padding: 8px 16px;
    color: var(--ui-dark);
    font-size: 100%;
    font-family: Cabin;
    font-weight: 1000;

    border-radius: 13px;
    background: var(--ui-light);
    opacity: 0.4;
    box-shadow: 0px 4px 16px 0px rgba(26, 50, 22, 0.15);
  }
`;
