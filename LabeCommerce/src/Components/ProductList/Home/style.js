import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 75vw;
`;

export const ContainerOrdination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;

  select {
    font-size: 15px;
    font-family: Cabin;
    color: var(--font-placeholder, rgba(26, 31, 22, 0.5));
    font-style: normal;
    font-weight: 1000;
    line-height: normal;
    padding-left: 10px;
    cursor: pointer;
    height: 4vh;
    width: 14vh;
    padding: 8px 16px;
    align-items: center;

    border-radius: 13px;
    background: var(--ui-white, #fff);
    box-shadow: 0px 4px 16px 0px rgba(26, 31, 22, 0.15);
  }

  option {
    font-size: 15px;
    height: 4.2vh;
    font-family: Cabin;
    color: var(--font-placeholder, rgba(26, 31, 22, 0.5));
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const FiltroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(50%,40rem);
  margin-left: 40px;
  align-items: flex-start;
  gap: 2px;

  label {
    padding: 0px 8px;
    align-items: center;
    gap: 10px;
    align-self: flex-start;
    font-size: 16px;
    color: var(--font-tertiary, #60695c);
    font-family: Cabin;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
    padding-left: 10px;
  }

  input {
    display: flex;
    flex-direction: column;
    height: 4vh;
    width: 100%;
    padding: 8px 16px;

    border-radius: 13px;
    background: var(--ui-white, #fff);
    box-shadow: 0px 4px 16px 0px rgba(26, 31, 22, 0.15);

    ::placeholder {
      color: var(--ui-placeholder);
      font-size: 16px;
      font-family: Cabin;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

 
`;
