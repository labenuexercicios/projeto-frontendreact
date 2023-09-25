import styled from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";

export const HeaderContainer = styled.div`
  background-color: var(--rosa-muito-claro);
  position: fixed;
  width: 100%;
  z-index: 1;
  height: 12vh;
`;

export const HeaderCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    & h2 {
      color: var(--isabelline);
      font-size: 36px;
      font-weight: 500;
            
    }
`;


