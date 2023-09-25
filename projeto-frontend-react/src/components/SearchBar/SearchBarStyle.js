import styled from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";

export const SearchBarContainer = styled.form`
  display: flex;
  background-color: var(--isabelline);
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  gap: 13px;
  padding-right: 13px;

  input {
    padding: 13px;
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500px;
  }
`;

export const SearchBarButton = styled.button`
  background: var(--isabelline);
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;
