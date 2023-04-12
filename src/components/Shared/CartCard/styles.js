import styled from "styled-components";

export const CartCardContainer = styled.div`
  color: var(--charcoal);
  font-family: var(--text);
  font-size:25px;
  position: relative;

  button {
    color: var(--charcoal);
    font-family: var(--text);
    position: absolute;
    right: 1px;
    background: none;
    border: none;
    cursor: pointer;
  }

  button:hover {
    transition: 0.2s;
    transform: scale(1.2);
    color: red;
  }

  .plus {
    right: 20px;
  }

  img {
    height: 70px;
    margin: auto;
  }

  p {
    font-size: 13px;
    font-weight: bold;
  }

  .nameQnt {
    display: flex;
    justify-content: space-between;
    margin-bottom:5px;
    align-items: center;
  }
`;
