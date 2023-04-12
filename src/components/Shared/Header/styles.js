import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--details);
  height: 70px;
  margin-top: 44px;
  align-items: center;
  display: flex;

  h1 {
    position: relative;
    font-family: "Style Script", cursive;
    color: #fc7300;
    font-size: 94px;
    text-shadow: rgb(255 190 136) 2px 2px 0px, rgb(7 33 76) 1px 8px 0px;
    text-align: center;
    width: fit-content;
    margin: auto;
    height: 72px;
  }

  img {
    position: absolute;
    width: 120px;
    left: 45.8%;
    top: 2px;
    background: var(--details);
    padding: 1%;
    border-radius: 100px;
    transform-origin: 50% 50% 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  svg {
    color: var(--beige);
    font-size: 20px;
    margin-right:5px;
  }
  a {
    color: var(--beige);
    margin-right: 20px;
    font-size: 15px !important;
    cursor: pointer;
  }
  a:hover {
    transition: 0.2s;
    transform: scale(1.2);
    color: rgb(252, 115, 0);
  }
  span {
    font-weight: 800;
  }

  .login {
    position: relative;
    width: 250px;
  }

  .center {
    display: absolute;
    width: 100%;
  }

  .sub-title {
    position: relative;
    font-family: var(--sub-title);
    text-align: center;
    width: fit-content;
    margin: auto;
    font-size: 30px;
  }

  .qtd-carrinho {
    position:absolute;
    font-family: var(--sub-title);
    color: rgb(252, 115, 0);
    right: 40px;
    bottom:20px;
  }
`;
