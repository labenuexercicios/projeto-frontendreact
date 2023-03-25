import styled from "styled-components";

export const FilterContainer = styled.div`
  background: var(--beige);
  padding: 20px;
  width: 12%;
  max-width: 220px;
  padding-top: 4.5%;

  display: flex;
  flex-direction: column;

  box-shadow: inset 10px 0 50px rgba(0 , 0 , 0 , 0.3);

  label {
    font-family: var(--text);
    margin-bottom: 15px;
  }

  button {
    font-family: var(--text);
    margin-bottom: 25px;
    background: none;
    border: none;
    color: var(--charcoal);
    font-family: var(--text);
    font-size: 15px;
    text-align: initial;
    cursor: pointer;
  }

  button:hover {
    transition: 0.2s;
    transform: scale(1.1);
    color: var(--details);
  }

  button:active {
    color: white;
    transition: 0.2s;
    transform: scale(1);
  }

  svg {
    color: var(--details);
  }

  input {
    border-bottom: 1px solid;
    margin-bottom: 15px !important;
    border-bottom: 1px solid black !important;
    background: none !important;
  }

  hr {
    height: 1px;
    background: black;
    border: none;
    width: 100%;
  }

  h2 {
    margin-top: 20px;
  }

  .selected {
    color: var(--details);
    font-weight: bold;
  }

  .filterBtn {
    font-family: var(--sub-title);
    color: var(--details);
    font-size: 20px;
    margin-top: 20px;
  }
`;
